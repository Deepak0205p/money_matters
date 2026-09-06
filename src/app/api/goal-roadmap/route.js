import { NextResponse } from 'next/server';

const OVERVIEW_PROMPT = `You are a realistic financial planner for Indian youth (18-25 years old).
Your task is to create a highly FEASIBLE, step-by-step financial roadmap for a specific savings goal.

## FEASIBILITY & MATH RULES:
1. Target Calculation:
   - If deadline is given, use the exact number of months until deadline.
   - If no deadline, set a realistic duration based on Indian youth saving capacity (typically ₹2,000 to ₹10,000 / month).
   - Ensure monthlySavingsRequired * totalMonths approx equals remaining amount.
   - Daily target = ceil(monthlySavingsRequired / 30).
2. Phase Breakdown (Month Groups):
   - Divide total months into 3 to 5 logical phases (Level 1 to Level N).
   - Level 1 (Starter Phase): Focus on small daily habits & expense cuts. (~20-25% of target)
   - Level 2 (Building Momentum): Introduce automated savings / RD / liquid funds. (~25% of target)
   - Level 3 (Accelerated Growth): Gig work, side hustles, or cashbacks. (~25% of target)
   - Level 4/5 (Final Sprint): Maximum savings rate & final goal achievement. (Remaining %)
   - The cumulativeTarget MUST incrementally reach the exact remaining goal amount in the final level!

## Output Format — ONLY valid JSON:
{
  "title": "emoji + goal title",
  "tagline": "catchy Hinglish tagline",
  "summary": "2-3 sentence overview explaining how this target will be achieved feasibly",
  "totalMonths": number,
  "monthlySavingsRequired": number,
  "dailyTarget": number,
  "savingsStrategy": "50-30-20 Rule | Pay Yourself First | Micro-Savings",
  "monthGroups": [
    {
      "id": 1,
      "monthRange": "Month 1-2",
      "title": "Level 1: Foundation",
      "emoji": "🌱",
      "subtitle": "Habit Building",
      "overview": "Clear 2-line explanation of what to do in this level.",
      "targetSavings": number,
      "cumulativeTarget": number,
      "keyHabit": "Specific action (e.g. Cut 2 Swiggy orders/week)",
      "whatToAvoid": "Specific trap (e.g. Impulse gadget purchases)",
      "motivation": "Inspiring one-liner",
      "difficulty": "🌱 Starter" | "🔥 Hustler" | "💎 Crusher" | "🏆 Legend"
    }
  ],
  "warnings": [
    { "title": "short title", "detail": "Hinglish explanation", "emoji": "⚠️" }
  ],
  "proTips": ["tip1", "tip2", "tip3"],
  "motivation": "final motivational message in Hinglish",
  "weeklyCheckIn": "weekly review question"
}`;

const MONTH_DETAIL_PROMPT = `You are an expert financial coach. Create a detailed, actionable weekly and daily execution plan for ONE specific level/month group.

## FEASIBLE ACTIONS ONLY:
- Daily actions must be realistic for Indian students/young earners (e.g. ₹50-₹300 daily savings).
- Actions should be actionable (e.g. 'Use student metro pass', 'Pack lunch twice a week', 'Cancel unused OTT app').

## Output — ONLY valid JSON:
{
  "monthGroup": "Month X-Y",
  "title": "Level title",
  "overview": "detailed overview",
  "weeklyPlan": [
    {
      "week": 1,
      "title": "Week title",
      "actions": ["Action 1", "Action 2", "Action 3"],
      "savingsTarget": number,
      "keyMilestone": "Milestone description",
      "pitfall": "What to avoid"
    }
  ],
  "dailyActions": [
    {
      "id": 1,
      "action": "Specific daily micro-action",
      "savings": "₹XXX",
      "difficulty": "easy|medium|hard|extreme",
      "bestTime": "morning|afternoon|evening|night",
      "whyItWorks": "Reasoning",
      "streakTip": "Consistency hack",
      "ifYouSkip": "Consequence"
    }
  ],
  "weeklyCheckIn": ["Question 1", "Question 2", "Question 3"],
  "monthlyMilestone": {
    "targetSavings": number,
    "reward": "Small affordable celebration",
    "metric": "Key metric"
  },
  "emergencyPlan": {
    "ifShortfall": "What to do if behind target",
    "backupPlan": "Backup strategy"
  },
  "keyHabitToTrack": "Core habit",
  "whatToAvoid": "Core pitfall",
  "motivation": "Inspiring line"
}`;

async function callTavily(query) {
  const apiKey = process.env.TAVILY_API_KEY;
  if (!apiKey) return null;
  try {
    const res = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: apiKey, query, search_depth: "basic", include_answer: true, max_results: 3 }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.answer || data.results?.map(r => r.content).join('\n') || null;
  } catch { return null; }
}

async function callGemini(prompt, systemPrompt, maxTokens = 2500) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens: maxTokens, temperature: 0.7 }
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text ?? null;
  } catch { return null; }
}

function calculateMonthsToDeadline(deadlineStr) {
  if (!deadlineStr) return 0;
  const d = new Date(deadlineStr);
  if (isNaN(d.getTime())) return 0;
  const now = new Date();
  const diffDays = Math.max(1, Math.ceil((d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
  return Math.max(1, Math.ceil(diffDays / 30));
}

function buildFallbackOverview(goal) {
  const target = goal.target || 10000;
  const saved = goal.saved || 0;
  const remaining = Math.max(0, target - saved);

  let months = calculateMonthsToDeadline(goal.deadline);
  if (!months || months <= 0) {
    months = Math.max(2, Math.min(12, Math.ceil(remaining / 3000)));
  }

  const monthly = Math.ceil(remaining / months);
  const daily = Math.ceil(monthly / 30);

  const numLevels = months <= 3 ? 3 : months <= 6 ? 4 : 5;
  const monthGroups = [];
  const levelMonths = Math.ceil(months / numLevels);

  let currentCumulative = saved;
  const stepSavings = Math.floor(remaining / numLevels);

  const titles = [
    { title: "Level 1: Launchpad", emoji: "🚀", subtitle: "Habit & Expense Audit", diff: "🌱 Starter", habit: "Track daily expenses", avoid: "Daily Swiggy/Zomato" },
    { title: "Level 2: Steady Growth", emoji: "⚡", subtitle: "Auto-Savings Setup", diff: "🔥 Hustler", habit: "Save 20% right after income", avoid: "Impulse sale shopping" },
    { title: "Level 3: Power Up", emoji: "💎", subtitle: "Micro-Investing & Gigs", diff: "💎 Crusher", habit: "Earn ₹500 extra weekly", avoid: "Unused OTT Subscriptions" },
    { title: "Level 4: Apex Stretch", emoji: "🔥", subtitle: "Sprint to Milestone", diff: "💎 Crusher", habit: "Strict 50/30/20 budget", avoid: "Weekend overspending" },
    { title: "Level 5: Victory Summit", emoji: "🏆", subtitle: "Goal Achievement", diff: "🏆 Legend", habit: "Final deposit check", avoid: "Early celebration splurging" }
  ];

  for (let i = 0; i < numLevels; i++) {
    const startM = i * levelMonths + 1;
    const endM = Math.min(months, (i + 1) * levelMonths);
    const isLast = i === numLevels - 1;

    const levelTarget = isLast ? (target - currentCumulative) : stepSavings;
    currentCumulative += levelTarget;

    const info = titles[i % titles.length];

    monthGroups.push({
      id: i + 1,
      monthRange: startM === endM ? `Month ${startM}` : `Month ${startM}-${endM}`,
      title: info.title,
      emoji: info.emoji,
      subtitle: info.subtitle,
      overview: `Save ₹${levelTarget.toLocaleString('en-IN')} in this level to stay on track for ${goal.name}.`,
      targetSavings: levelTarget,
      cumulativeTarget: currentCumulative,
      keyHabit: info.habit,
      whatToAvoid: info.avoid,
      motivation: "Consistent steps lead to big victories!",
      difficulty: info.diff
    });
  }

  return {
    title: `🎯 ${goal.name} Roadmap`,
    tagline: "Har din thoda save karo, level up karo!",
    summary: `Achieve ${goal.name} (₹${target.toLocaleString('en-IN')}) in ${months} months by saving ₹${monthly.toLocaleString('en-IN')}/month (~₹${daily}/day).`,
    totalMonths: months,
    monthlySavingsRequired: monthly,
    dailyTarget: daily,
    savingsStrategy: "50-30-20 Rule + Micro-Saving",
    monthGroups,
    warnings: [
      { title: "Credit Card Debt", detail: "Never take high-interest loans for personal goals.", emoji: "💳" },
      { title: "Impulse Leaks", detail: "Small ₹50 daily leaks add up to ₹1,500/month.", emoji: "☕" },
      { title: "Skipping Days", detail: "Consistency beats saving large amounts randomly.", emoji: "📅" }
    ],
    proTips: [
      "Set up automatic transfer on income day",
      "Keep a separate digital wallet for goal savings",
      "Use the 48-Hour Rule for discretionary buys"
    ],
    motivation: `Target: ₹${target.toLocaleString('en-IN')}! Save ₹${daily}/day and level up your progress! 💪🚀`,
    weeklyCheckIn: "Did I stay within my weekly budget?"
  };
}

function buildFallbackMonthDetail(monthGroup, goal) {
  const target = monthGroup.targetSavings || 3000;
  const weeklyTarget = Math.ceil(target / 4);

  return {
    monthGroup: monthGroup.monthRange,
    title: monthGroup.title,
    overview: monthGroup.overview || `Detailed breakdown for ${monthGroup.monthRange}.`,
    weeklyPlan: [
      { week: 1, title: "Level Kickoff", actions: ["Review monthly budget", "Set daily ₹ saving target", "Lock goal funds"], savingsTarget: weeklyTarget, keyMilestone: "Week 1 target hit", pitfall: "Delaying day 1 deposit" },
      { week: 2, title: "Building Rhythm", actions: ["Audit recurring subscriptions", "Pack home snacks", "Track all UPI payments"], savingsTarget: weeklyTarget, keyMilestone: "5-day savings streak", pitfall: "Ignoring small ₹20-50 expenses" },
      { week: 3, title: "Peak Discipline", actions: ["Apply 48-hour rule on shopping", "Explore cashbacks / deals", "Review progress"], savingsTarget: weeklyTarget, keyMilestone: "75% level progress", pitfall: "Mid-month weekend splurge" },
      { week: 4, title: "Level Completion", actions: ["Final weekly deposit", "Review month learnings", "Prepare for next level"], savingsTarget: weeklyTarget, keyMilestone: "Level completed! 🎉", pitfall: "Over-spending to celebrate" }
    ],
    dailyActions: [
      { id: 1, action: "Deposit daily savings target", savings: `₹${Math.ceil(target / 30)}`, difficulty: "easy", bestTime: "morning", whyItWorks: "Pay Yourself First habit", streakTip: "Set morning phone alarm", ifYouSkip: "Falls behind daily plan" },
      { id: 2, action: "Skip 1 paid food order/beverage", savings: "₹100-150", difficulty: "medium", bestTime: "afternoon", whyItWorks: "Eliminates biggest money leak", streakTip: "Keep snacks handy", ifYouSkip: "Extra ₹150 spent" },
      { id: 3, action: "Audit daily UPI history", savings: "Awareness", difficulty: "easy", bestTime: "night", whyItWorks: "Keeps spending visible", streakTip: "2 mins before sleep", ifYouSkip: "Invisible spending leaks" }
    ],
    weeklyCheckIn: ["Did I meet this week's savings target?", "What was my largest unnecessary expense?", "How is my motivation level?"],
    monthlyMilestone: { targetSavings: target, reward: "Treat yourself to a movie or coffee!", metric: "Level savings completed" },
    emergencyPlan: { ifShortfall: "Add a temporary ₹50 daily micro-saving", backupPlan: "Cut 1 leisure outing next weekend" },
    keyHabitToTrack: monthGroup.keyHabit || "Daily savings deposit",
    whatToAvoid: monthGroup.whatToAvoid || "Unplanned purchases",
    motivation: monthGroup.motivation || "Level up your financial future!"
  };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { goal, userContext, mode } = body;

    if (!goal || !goal.name || !goal.target) {
      return NextResponse.json({ error: 'Goal name and target are required' }, { status: 400 });
    }

    const remaining = Math.max(0, goal.target - (goal.saved || 0));

    if (mode === 'monthDetail') {
      const monthGroup = body.monthGroup;
      if (!monthGroup) {
        return NextResponse.json({ error: 'Month group data required' }, { status: 400 });
      }

      const searchQuery = `practical ways to save ${monthGroup.targetSavings} rupees in ${monthGroup.monthRange} youth India`;
      const tavilyResult = await callTavily(searchQuery);

      let contextStr = `\n\n## Goal Context:\n- Goal: ${goal.name}\n- Total Target: ₹${goal.target.toLocaleString('en-IN')}\n- Remaining: ₹${remaining.toLocaleString('en-IN')}`;
      contextStr += `\n\n## Level to Detail:\n- Level: ${monthGroup.title}\n- Range: ${monthGroup.monthRange}\n- Target for this level: ₹${monthGroup.targetSavings.toLocaleString('en-IN')}\n- Key Habit: ${monthGroup.keyHabit}\n- What to Avoid: ${monthGroup.whatToAvoid}`;

      if (userContext) {
        contextStr += `\n\n## User Context: Streak=${userContext.streak || 0}, Coins=${userContext.coins || 0}`;
      }
      if (tavilyResult) {
        contextStr += `\n\n## Market/Saving Tips:\n${tavilyResult}`;
      }

      const prompt = `Create detailed feasible weekly & daily execution plan for this level:${contextStr}`;
      const reply = await callGemini(prompt, MONTH_DETAIL_PROMPT, 2500);

      if (reply) {
        try {
          const json = reply.match(/\{[\s\S]*\}/);
          if (json) return NextResponse.json({ monthDetail: JSON.parse(json[0]) });
        } catch {}
      }
      return NextResponse.json({ monthDetail: buildFallbackMonthDetail(monthGroup, goal) });

    } else {
      const monthsToDeadline = calculateMonthsToDeadline(goal.deadline);
      const searchQuery = `how to save ${goal.target} rupees for ${goal.name} in ${monthsToDeadline || 6} months India youth`;
      const tavilyResult = await callTavily(searchQuery);

      let contextStr = `\n\n## Goal Details:\n- Name: ${goal.name}\n- Target: ₹${goal.target.toLocaleString('en-IN')}\n- Current Saved: ₹${(goal.saved || 0).toLocaleString('en-IN')}\n- Remaining: ₹${remaining.toLocaleString('en-IN')}\n- Deadline: ${goal.deadline || 'Not set'}${monthsToDeadline ? ` (${monthsToDeadline} months left)` : ''}`;

      if (userContext) {
        contextStr += `\n\n## User Context: Streak=${userContext.streak || 0}, Coins=${userContext.coins || 0}`;
      }
      if (tavilyResult) {
        contextStr += `\n\n## Research Insights:\n${tavilyResult}`;
      }

      const prompt = `Create a realistic month-grouped financial roadmap:${contextStr}`;
      const reply = await callGemini(prompt, OVERVIEW_PROMPT, 2500);

      if (reply) {
        try {
          const json = reply.match(/\{[\s\S]*\}/);
          if (json) return NextResponse.json({ roadmap: JSON.parse(json[0]) });
        } catch {}
      }
      return NextResponse.json({ roadmap: buildFallbackOverview(goal) });
    }

  } catch (error) {
    console.error('Goal Roadmap API error:', error);
    return NextResponse.json({ error: 'Technical problem encountered.' }, { status: 500 });
  }
}
