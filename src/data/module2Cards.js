export const module2Topics = [
  {
    id: "2-1",
    title: "Budgeting In Real Life",
    emoji: "📋",
    color: "#10B981",
    description: "Budgeting doesn't mean being stingy — it means being the boss of your money.",
    cards: [
      {
        id: "2-1-1",
        topicId: "2-1",
        topicTitle: "Budgeting In Real Life",
        cardIndex: 1,
        totalCardsInTopic: 12,
        title: "50/30/20: The Magic Formula",
        content: `Don't know where to start? Use this simple rule:

- **50% Needs**: Rent, food, bills (What's essential)
- **30% Wants**: Netflix, outings, shopping (What your heart desires)
- **20% Savings**: SIP, emergency fund (What builds your future)

**Example with ₹10,000:**
- Needs: ₹5,000
- Wants: ₹3,000
- Savings: ₹2,000

The calculator below shows your split!`,
        imagePrompt: "Pie chart illustration of 50-30-20 budget rule, vibrant green and blue colors",
        color: "#10B981",
        emoji: "📐",
        interactiveType: 'calculator',
        calcData: {
          calcType: 'budget',
          formula: 'none',
          inputs: [
            { label: 'Monthly Income', min: 1000, max: 100000, defaultValue: 10000, step: 500, unit: '₹' }
          ]
        }
      },
      {
        id: "2-1-2",
        topicId: "2-1",
        topicTitle: "Budgeting In Real Life",
        cardIndex: 2,
        totalCardsInTopic: 12,
        title: "Budgeting Myths Busted",
        content: `**Myth**: Budgeting is only for those who earn very little.

**Reality**: Whether you're Elon Musk or a student, everyone needs a budget! Budgeting means telling your money where to go, instead of wondering where it went.

**5 Real Budget Scenarios:**

| Person | Income | Result |
| :--- | :--- | :--- |
| **Rohan** (no budget) | ₹15,000 | Money gone by 15th. Borrowed ₹5k 😫 |
| **Priya** (with budget) | ₹10,000 | ₹2k saved, ₹5k needs, ₹3k wants 😊 |
| **Amit** (overspending) | ₹20,000 | ₹12k rent alone. Zero savings 😰 |
| **Sneha** (smart) | ₹8,000 | Shared rent, laptop fund in 1 year! 🎉 |
| **Vikram** (no tracking) | varies | ₹500/month vanishes. ₹6k/year gone 😵 |`,
        imagePrompt: "Detective examining coins with magnifying glass, mystery theme, green and teal colors",
        color: "#10B981",
        emoji: "🕵️",
        interactiveType: 'myth_buster',
        quizData: {
          question: "MYTH: Budgeting is only for those who earn very little.",
          options: ["That's true!", "Wrong, it's for everyone!"],
          correctAnswerIndex: 1,
          explanation: "Whether you're Elon Musk or a student, everyone needs a budget! Budgeting means telling your money where to go, instead of wondering where it went."
        }
      },
      {
        id: "2-1-3",
        topicId: "2-1",
        topicTitle: "Budgeting In Real Life",
        cardIndex: 3,
        totalCardsInTopic: 12,
        title: "Zero-Based Budgeting",
        content: `In **Zero-Based Budgeting**, every rupee is assigned — income minus expenses = **ZERO**.

This doesn't mean spend everything. **Savings is also an "expense" category**. Every rupee gets a job.

**Example: ₹15,000 income:**
- Rent: ₹4,050 (27%)
- Food: ₹2,550 (17%)
- Transport: ₹1,500 (10%)
- Entertainment: ₹1,500 (10%)
- Others: ₹2,400 (16%)
- **Savings: ₹3,000 (20%)**

**5 Benefits of Budgeting:**
1. Control overspending
2. Clear financial goals
3. Reduced stress
4. Builds saving habit
5. Future planning becomes possible`,
        imagePrompt: "Zero-based budget pie chart with every rupee allocated, green and gold tones",
        color: "#10B981",
        emoji: "🎯"
      },
      {
        id: "2-1-4",
        topicId: "2-1",
        topicTitle: "Budgeting In Real Life",
        cardIndex: 4,
        totalCardsInTopic: 12,
        title: "3 Budget Templates That Work",
        content: `Every student's life is different. See which category you fit:

| Category | Income | Strategy |
| :--- | :--- | :--- |
| **Survival** | ₹3,000 | 70% Food/Rent, 10% Savings |
| **Comfort** | ₹10,000 | 50% Needs, 20% Skills, 30% Savings |
| **Working** | ₹20,000 | 40% Living, 40% Invest, 20% Fun |

**₹5,000 Budget Breakdown:**
- **Needs (₹2,500)**: ₹1,500 rent, ₹800 mess, ₹200 transport
- **Wants (₹1,500)**: ₹500 phone, ₹500 outing, ₹500 personal
- **Savings (₹1,000)**: Auto-debit to RD → ₹12,000/year!

**Pro Tip**: Pay yourself first! Set aside savings money first, then spend.`,
        imagePrompt: "Three budget templates with icons for survival, comfort, working student, green theme",
        color: "#10B981",
        emoji: "📊"
      },
      {
        id: "2-1-5",
        topicId: "2-1",
        topicTitle: "Budgeting In Real Life",
        cardIndex: 5,
        totalCardsInTopic: 12,
        title: "MISSION: Subscription Audit",
        content: `Those unused subscriptions are 'leaks' in your bank account.

- [ ] Open Play Store / App Store
- [ ] Check the 'Subscriptions' section
- [ ] Turn off auto-renewal for unused apps
- [ ] See how many rupees you save!

**Math Check**: ₹249 × 4 apps = ₹1,000/month = ₹12,000/year! Do you need all of them? Audit!`,
        imagePrompt: "Magnifying glass over mobile apps with Cancel buttons highlighted, red and green accents",
        color: "#10B981",
        emoji: "🚫"
      },
      {
        id: "2-1-6",
        topicId: "2-1",
        topicTitle: "Budgeting In Real Life",
        cardIndex: 6,
        totalCardsInTopic: 12,
        title: "Expense Tracking: Be a Detective",
        content: `"By the end of the month my balance is zero, and I don't know where it went!"

**You're a victim of 'Invisible Leaks'.** ₹50/day chai = ₹1,500/month. ₹30 snacks = ₹900/month.

**3 Tracking Methods:**

| Method | Effort | Accuracy |
| :--- | :--- | :--- |
| **Notebook** | High | High (Manual) |
| **Apps (Walnut/IndMoney)** | Low | Very High (Auto) |
| **UPI Statement** | Medium | Most Accurate |

**Best Free Apps for Indians:**
- **Walnut** — Auto-reads SMS, UPI tracking
- **ETMONEY** — Mutual fund + expense tracking
- **Google Sheets** — Customizable, free, formulas

**Tracking Frequency:**
- **Daily**: Best for impulse control (2 min each evening)
- **Weekly**: Best balance — review every Sunday (15 min)
- **Monthly**: Good for overview, but too late to fix`,
        imagePrompt: "Detective examining payment history, emerald green theme",
        color: "#059669",
        emoji: "🔍"
      },
      {
        id: "2-1-7",
        topicId: "2-1",
        topicTitle: "Budgeting In Real Life",
        cardIndex: 7,
        totalCardsInTopic: 12,
        title: "30 Real Need vs Want Scenarios",
        content: `Learning to differentiate between needs and wants:

| Item | Need/Want | Reasoning |
| :--- | :--- | :--- |
| College tuition fees | **NEED** | Education is a right |
| Branded backpack | **WANT** | A normal bag works |
| Internet recharge | **NEED** | Study essential |
| Netflix subscription | **WANT** | YouTube is free |
| Doctor visit | **NEED** | Health first |
| Branded shoes (3rd pair) | **WANT** | One pair is enough |
| Laptop for coding | **NEED** | Essential for CS |
| Gaming laptop | **WANT** | Normal works for coding |
| Daily Starbucks | **WANT** | ₹300/day = ₹9,000/month! |
| Public transport pass | **NEED** | Commuting essential |
| iPhone 15 | **WANT** | ₹15k phone works fine |
| Mess food | **NEED** | Basic nutrition |
| Ola/Uber daily | **WANT** | Bus/metro is cheaper |
| iPad for notes | **WANT** | Pen and paper work |
| Health insurance | **NEED** | Emergency protection |

**Gray Areas**: A laptop is a **NEED** for CS students, a **WANT** for English literature. Context matters!`,
        imagePrompt: "Comparison table of needs vs wants with checkmarks, sky blue and green theme",
        color: "#0EA5E9",
        emoji: "🤔"
      },
      {
        id: "2-1-8",
        topicId: "2-1",
        topicTitle: "Budgeting In Real Life",
        cardIndex: 8,
        totalCardsInTopic: 12,
        title: "The 48-Hour Decision Rule",
        content: `**Decision Tree for Every Expense:**

Expense comes → Can you live without it?
  ↓ NO → NEED → Cheaper option?
    ↓ YES → Go for that
    ↓ NO → Buy it now
  ↓ YES → WANT → Necessary now?
    ↓ NO → 48-hour rule → Think later
    ↓ YES → In budget?
      ↓ YES → Buy it
      ↓ NO → Postpone

**48-Hour Rule**: Before buying anything, think for 48 hours. 90% of things you won't even remember!

**3-Question Test:**
1. Can you live without it?
2. Is there a cheaper option?
3. Is it necessary right now or can it wait?

If 2 out of 3 answers are "yes", then it's a **WANT**.`,
        imagePrompt: "Decision flowchart with arrows showing the 48-hour rule, sky blue and green theme",
        color: "#0EA5E9",
        emoji: "🌳"
      },
      {
        id: "2-1-9",
        topicId: "2-1",
        topicTitle: "Budgeting In Real Life",
        cardIndex: 9,
        totalCardsInTopic: 12,
        title: "Top 8 Budget Mistakes",
        content: `Students make common mistakes. Look at the first 8:

| # | Mistake | Solution |
| :--- | :--- | :--- |
| 1 | Spend first, save later | Pay yourself first — auto-debit |
| 2 | Ignoring small expenses | ₹50 chai × 30 = ₹1,500/month! |
| 3 | Buying on EMI | ₹15k phone's total EMI = ₹17k+ |
| 4 | Overspending with friends | Fix ₹1,000/month outing limit |
| 5 | Unnecessary sale shopping | Apply 48-hour rule |
| 6 | Credit card = free money | 36-48% interest! |
| 7 | Budget but no following | Weekly review — 15 min Sunday |
| 8 | Irregular income = regular | Calculate average, build buffer |`,
        imagePrompt: "Warning signs around common budget mistakes, red and green theme",
        color: "#EF4444",
        emoji: "⚠️"
      },
      {
        id: "2-1-10",
        topicId: "2-1",
        topicTitle: "Budgeting In Real Life",
        cardIndex: 10,
        totalCardsInTopic: 12,
        title: "7 More Mistakes & Solutions",
        content: `The next 7 mistakes:

| # | Mistake | Solution |
| :--- | :--- | :--- |
| 9 | Skipping emergency fund | Save 3 months expenses first |
| 10 | No subscription audit | ₹249 × 4 apps = ₹12k/year |
| 11 | Delaying investing | Start SIP with ₹500 |
| 12 | Paying too much rent | Single ₹8k vs shared ₹3k |
| 13 | Skipping insurance | One emergency = all savings zero |
| 14 | No tax planning | Save via 80C deductions |
| 15 | Ignoring small UPI expenses | ₹30, ₹40 adds to ₹2,000+ |

**Common Misconceptions:**

⚠️ "Budget is only for stingy people" → Wrong! Budget = Smart allocation.

⚠️ "You can't budget with ₹3,000" → Wrong! ₹300 savings is also a budget.

⚠️ "Apps do tracking, I don't need to" → An app is a tool, you build the habit.

⚠️ "Freelancers can't budget" → Wrong! Buffer system works great.

⚠️ "Budget should be rigid" → Wrong! Budget should be flexible.`,
        imagePrompt: "Checklist of budget mistakes with solutions, red and green theme",
        color: "#EF4444",
        emoji: "📝"
      },
      {
        id: "2-1-11",
        topicId: "2-1",
        topicTitle: "Budgeting In Real Life",
        cardIndex: 11,
        totalCardsInTopic: 12,
        title: "MISSION: Last 3 Days Tracking",
        content: `Enough theory, let's look at real data!

- [ ] Open your GPay / PhonePe / Paytm history
- [ ] Write down all transactions from last 3 days
- [ ] Calculate the total
- [ ] Was there any avoidable expense? (Be honest!)

**Tracking Frequency:**
- **Daily**: Best for impulse control (2 min each evening)
- **Weekly**: Best balance — review every Sunday (15 min)
- **Monthly**: Good for overview, but too late to fix

**Recommendation**: Weekly tracking + monthly analysis.`,
        imagePrompt: "Smartphone showing payment history with diary notes, warm green lighting",
        color: "#059669",
        emoji: "🎯"
      },
      {
        id: "2-1-12",
        topicId: "2-1",
        topicTitle: "Budgeting In Real Life",
        cardIndex: 12,
        totalCardsInTopic: 12,
        title: "Irregular Income: Buffer System",
        content: `A freelancer's income varies every month. Sometimes ₹30,000, sometimes ₹0. How do you budget then?

**Solution: "Buffer Month System"**

Make your budget based on minimum reliable income. Put the extra from good months into a **"buffer account"**. When a bad month comes, manage from the buffer.

**3 Golden Rules for Freelancers:**
1. **Maintain 2-3 income streams** — if one stops, you have another
2. **Save 50% of the extra from good months** — don't overspend
3. **Pause SIP temporarily** (but don't redeem) when income is ₹0

**Freelancer's 6-Month Story:**

| Month | Income | Buffer Balance |
| :--- | :--- | :--- |
| Jan | ₹35,000 | ₹15,000 |
| Feb | ₹8,000 | ₹11,000 |
| Mar | ₹12,000 | ₹6,000 |
| Apr | ₹0 | -₹4,000 |
| May | ₹25,000 | ₹2,000 |
| Jun | ₹40,000 | ₹22,000 |

**₹0 income in April** but survived using the buffer! 💪`,
        imagePrompt: "Buffer system concept - piggy bank filling in good months, draining in bad months, amber theme",
        color: "#F59E0B",
        emoji: "💪"
      }
    ]
  }
];

export function getAllCards() {
  return module2Topics.flatMap(topic => topic.cards);
}

export function getTotalCardCount() {
  return getAllCards().length;
}

export function getTopicById(id) {
  return module2Topics.find(t => t.id === id);
}

export function getCardsByTopic(topicId) {
  const topic = getTopicById(topicId);
  return topic ? topic.cards : [];
}
