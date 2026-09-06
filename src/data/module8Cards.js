export const module8Topics = [
  {
    id: "8-1",
    title: "Financial Independence — Real Freedom 🎯",
    emoji: "🎯",
    color: "#F59E0B",
    description: "Financial Independence doesn't mean stopping work — it means ending the COMPULSION to work. Level up your life!",
    cards: [
      {
        id: "8-1-1",
        topicId: "8-1",
        topicTitle: "Financial Independence",
        cardIndex: 1,
        totalCardsInTopic: 6,
        title: "8 Levels of Freedom: Where Are You? 🪜",
        content: `Freedom doesn't come in a day. There are 8 levels. See which rung you're on:

| Level | Name | Status |
| :--- | :--- | :--- |
| **Level 0** | Broke | Paycheck to Paycheck 😫 |
| **Level 1** | Buffer | ₹1k - ₹5k emergency fund 🛡️ |
| **Level 2** | 1 Month Saved | Survive 1 month without income 🧘 |
| **Level 3** | 3 Months Fund | Safe for 3 months if you lose your job ✅ |
| **Level 4** | 6 Months + Investments | Strong safety net + wealth growing 💪 |
| **Level 5** | Side Income = Basic Expenses | Freelance covers rent + food 🚀 |
| **Level 6** | Passive Income = All Expenses | FINANCIAL INDEPENDENCE! 🏆 |
| **Level 7** | More Than Enough | Wealth — luxury, charity, choice 💎 |

**The emotional feel of each level:**
- Level 0 = stress, anxiety, no choice
- Level 3 = breathing room
- Level 5 = options open
- Level 6 = true freedom
- Level 7 = building a legacy

**Goal**: The journey from Level 0 to Level 6 IS wealth building!`,
        imagePrompt: "Staircase made of gold bars leading to a sun labeled 'FREEDOM', amber and gold theme, inspirational financial illustration, 3D style",
        color: "#F59E0B",
        emoji: "🪜",
        interactiveType: 'none'
      },
      {
        id: "8-1-2",
        topicId: "8-1",
        topicTitle: "Financial Independence",
        cardIndex: 2,
        totalCardsInTopic: 6,
        title: "FIRE Movement: Retire Early? 🔥",
        content: `The FIRE (Financial Independence, Retire Early) formula is simple: **25x Rule**.

If your annual expenses are ₹3 Lakh, you need a corpus of ₹75 Lakh to be free.

Calculate your **Freedom Number**:`,
        imagePrompt: "A person relaxing in a hammock between two palm trees made of currency symbols, amber sunset background, peaceful and rewarding atmosphere",
        color: "#F59E0B",
        emoji: "🔥",
        interactiveType: 'calculator',
        calcData: {
          calcType: 'tax',
          formula: 'none',
          inputs: [
            { label: 'Monthly Expenses', min: 5000, max: 200000, defaultValue: 20000, step: 1000, unit: '₹' },
            { label: 'Current Savings Rate (%)', min: 5, max: 80, defaultValue: 20, step: 5, unit: '%' }
          ]
        }
      },
      {
        id: "8-1-3",
        topicId: "8-1",
        topicTitle: "Financial Independence",
        cardIndex: 3,
        totalCardsInTopic: 6,
        title: "Chat: Wealth vs Richness 📱",
        content: `Priya and Bhaiya are discussing the 'Psychology of Money'.

**Priya**: Bhaiya, my neighbor bought a ₹20 lakh new car. They must be very wealthy!

**Bhaiya**: No Priya, a car is an expenditure, not wealth. Wealth is the money you don't see — the money that is invested.

**Priya**: So buying a car is bad?

**Bhaiya**: No, but taking a loan for show-off is bad. Real wealth buys freedom, not status!

**Wealth vs Richness — The Difference:**

| Aspect | Rich (Visible) | Wealthy (Real) |
| :--- | :--- | :--- |
| Car | ₹30 lakh car (loan) | ₹5 lakh car + ₹25 lakh SIP |
| House | Big house, big EMI | Modest house, no EMI |
| Phone | iPhone 16 (EMI) | Mid-range + investments |
| Lifestyle | Show-off | Comfortable + private |
| Future | Loan trap | Financial freedom |

**Indian Example**: Neighbor's ₹30 lakh car = ₹35 lakh loan. Your ₹5 lakh car + ₹25 lakh SIP = real wealth. Everyone looks rich on Instagram — reality: they're on EMI.`,
        imagePrompt: "Two houses side by side, one with a fancy car but dark windows, one simple house with a glowing garden of coins, amber theme, conceptual art",
        color: "#F59E0B",
        emoji: "💬",
        interactiveType: 'none'
      },
      {
        id: "8-1-4",
        topicId: "8-1",
        topicTitle: "Financial Independence",
        cardIndex: 4,
        totalCardsInTopic: 6,
        title: "Myth-Buster: Retirement 🕵️‍♂️",
        content: `People think retirement only happens at age 60.

**Myth**: Retirement is an age (like 60), not a financial status.
**Truth**: Retirement happens when your 'Corpus' is so large that its interest can run your life. This can happen at 30 or at 70. It's a Number, not an Age!

**Example**: 
- ₹3 lakh annual expense
- ₹75 lakh corpus at 4% withdrawal = ₹3 lakh/year
- The 4% rule is historically sustainable

So if you build a ₹75 lakh corpus by 35, you can "retire" at 35!`,
        imagePrompt: "Hourglass with sand turning into gold coins, amber background, time and wealth management theme, modern flat illustration",
        color: "#F59E0B",
        emoji: "🕵️‍♂️",
        interactiveType: 'myth_buster',
        quizData: {
          question: "MYTH: Retirement is an age (like 60), not a financial status.",
          options: ["Yes, there are govt rules!", "Wrong, whenever you have the money!"],
          correctAnswerIndex: 1,
          explanation: "Retirement happens when your 'Corpus' is so large that its interest can run your life. This can happen at 30 or at 70. It's a Number, not an Age!"
        }
      },
      {
        id: "8-1-5",
        topicId: "8-1",
        topicTitle: "Financial Independence",
        cardIndex: 5,
        totalCardsInTopic: 6,
        title: "Dilemma: Asset or Liability? 🏠",
        content: `Robert Kiyosaki (Rich Dad Poor Dad) says: *"An asset puts money in your pocket, a liability takes money out."*

Imagine you have ₹50,000 left. What will you do?`,
        imagePrompt: "A scale balancing a golden egg (asset) and a leaking bucket (liability), amber theme, decision making concept, simple icons",
        color: "#F59E0B",
        emoji: "🤔",
        interactiveType: 'choice_sim',
        choiceData: {
          scenario: "New iPhone (Liability) or Quality Stocks (Asset)?",
          choices: [
            {
              text: "iPhone! Status is important.",
              isCorrect: false,
              consequence: "Liability! Its value will halve next year, and repair costs are separate. Money goes out of your pocket!"
            },
            {
              text: "Stocks/SIP! The money will grow.",
              isCorrect: true,
              consequence: "Asset! This money will compound and earn you more money. This is always the first choice of wealthy people."
            }
          ]
        }
      },
      {
        id: "8-1-6",
        topicId: "8-1",
        topicTitle: "Financial Independence",
        cardIndex: 6,
        totalCardsInTopic: 6,
        title: "🚨 MISSION: Your Freedom Goal",
        content: `🚨 **TODAY'S MISSION**

Bro, you can't hit a target without aiming.

- [ ] Think about your Monthly Dream Expense (e.g. ₹50,000).
- [ ] Multiply it by 12 (Annual Expense = ₹6,00,000).
- [ ] Multiply it by 25 (Your Freedom Number = ₹1,50,00,000 i.e. ₹1.5 Cr).
- [ ] Write it in big letters on a paper: **My Target = ₹X Crore**.
- [ ] Stick it in front of your study table!

**Freedom Number Examples:**

| Monthly Expense | Annual | Freedom Number (25x) |
| :--- | :--- | :--- |
| ₹15,000 | ₹1,80,000 | ₹45,00,000 |
| ₹25,000 | ₹3,00,000 | ₹75,00,000 |
| ₹40,000 | ₹4,80,000 | ₹1,20,00,000 |
| ₹50,000 | ₹6,00,000 | ₹1,50,00,000 |

**Pro Tip**: Freedom number = 25x annual expenses. This corpus with a 4% withdrawal rule will sustain your life. Calculate it and set your goal!`,
        imagePrompt: "Person writing a big number on a whiteboard with a smile, sunny amber light through window, goal setting and motivation theme",
        color: "#F59E0B",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "8-2",
    title: "FIRE Movement — Is It Possible in India?",
    emoji: "🔥",
    color: "#EF4444",
    description: "FIRE = Financial Independence Retire Early. It's possible in India with an adjusted approach. 4 types of FIRE.",
    cards: [
      {
        id: "8-2-1",
        topicId: "8-2",
        topicTitle: "FIRE Movement",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "4 Types of FIRE",
        content: `**FIRE = Financial Independence Retire Early**

This is a movement where people aggressively save (50-70% of income), invest, and retire at age 40-45.

**Is it possible in the Indian context? Yes, but with adjustments.**

Expenses are lower in India compared to the West, but social pressures are higher (marriage, family obligations).

**"25x Annual Expenses" Rule:**
If your annual expense is ₹3 lakh, you need a corpus of ₹75 lakh (₹3 lakh × 25). With this corpus, using the 4% withdrawal rule, you'll withdraw ₹3 lakh/year and the corpus will also survive (historically).

**4 Types of FIRE:**

| FIRE Type | Annual Expense | Corpus Needed (25x) | Lifestyle | Achievable By |
| :--- | :--- | :--- | :--- | :--- |
| **Lean FIRE** | ₹2,00,000 | ₹50,00,000 | Minimal, frugal, small city | Age 35-40 |
| **Regular FIRE** | ₹5,00,000 | ₹1,25,00,000 | Comfortable middle-class | Age 40-45 |
| **Fat FIRE** | ₹12,00,000 | ₹3,00,00,000 | Luxurious, travel, premium | Age 45-50 |
| **Barista FIRE** | ₹3,00,000 | ₹75,00,000 | Part-time work + investment income | Age 35-40 |

**Barista FIRE is the most practical for India** — part-time consulting/teaching + investment income = comfortable life. More sustainable than full retirement.

**Real FIRE Examples (Indian):**

1. **Arjun, 35, Software Engineer**: ₹1 lakh/month salary, 60% savings. SIP ₹40,000/month for 15 years. ₹2 crore corpus by 40. Semi-retired — 2 days consulting, 5 days passion projects. Key: High income + high savings + index funds.

2. **Meera, 45, Government School Teacher**: ₹40,000/month salary. 40% savings — PPF ₹5,000 + SIP ₹10,000 + NPS ₹1,000. ₹1.2 crore in 20 years. Retired early, now runs an NGO. Key: Consistency + government job stability + low expenses.

3. **Kunal, 38, Freelancer**: Multiple income streams — coding + YouTube + digital products. Expenses ₹25,000/month, passive income ₹30,000/month by 35. Key: Diversified income + low expenses + side hustle.`,
        imagePrompt: "Four FIRE types comparison chart with lifestyle icons, red and gold theme, financial independence illustration",
        color: "#EF4444",
        emoji: "🔥"
      },
      {
        id: "8-2-2",
        topicId: "8-2",
        topicTitle: "FIRE Movement",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "Criticism + Indian Reality + Mission",
        content: `**Criticism of FIRE — Counter Arguments:**

⚠️ **"Not possible in India"**
→ **Wrong!** Expenses are lower. ₹25,000/month = ₹7.5 lakh corpus needed. SIP ₹10,000/month at 12% = ₹7.5 lakh in ~18 years. If you start at age 22, it's possible by 40.

⚠️ **"Family obligations"**
→ Marriage, children, parents — these are real. But if your foundation is strong, you can handle obligations. ₹1 crore corpus = obligations + freedom.

⚠️ **"Inflation"**
→ At 6% inflation, ₹25,000 expenses will be ₹80,000 in 20 years. That's why you should calculate your corpus also inflation-adjusted. The 25x rule is already inflation-adjusted historically.

**🚨 MISSION: FIRE Calculation**

- [ ] Calculate your current monthly expense
- [ ] Annual expense × 25 = Freedom Number
- [ ] Calculate your current savings rate (savings/income)
- [ ] Calculate years to FIRE (corpus ÷ annual savings)
- [ ] Decide your strategy: Lean/Regular/Fat/Barista FIRE

**Reality Check for Indian Students:**
- ₹5,000/month SIP + low expenses = Barista FIRE by 35 possible
- ₹10,000/month SIP + ₹25k expenses = Regular FIRE by 40 possible
- Side income + investments = fastest path

**Recommendation**: Barista FIRE is the most practical — part-time work + investment income = comfortable life without full retirement stress.

**Rule**: FIRE is not impossible, it only requires discipline. Start early, save aggressively, invest consistently.`,
        imagePrompt: "FIRE movement illustration with person crossing finish line, red and gold theme, financial freedom achievement",
        color: "#EF4444",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "8-3",
    title: "Passive Income Sources — 15 Ideas for Students",
    emoji: "💰",
    color: "#10B981",
    description: "Passive income = work once, get paid repeatedly. 15 ideas for students.",
    cards: [
      {
        id: "8-3-1",
        topicId: "8-3",
        topicTitle: "Passive Income",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "15 Passive Income Ideas",
        content: `**15 Passive Income Ideas for Students:**

| Source | Investment | Difficulty | Risk | Income Potential | Time to First Income |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **YouTube** | ₹0 (phone) | Medium | Low | ₹5,000 - ₹5L/month | 6-12 months |
| **Blogging** | ₹2,000/year (domain) | Medium | Low | ₹3,000 - ₹1L/month | 6-12 months |
| **Digital Products** | ₹0-₹5,000 (tools) | Low-Medium | Low | ₹1,000 - ₹50,000/month | 1-3 months |
| **Stock Photos/Videos** | ₹0 (phone) | Low | Low | ₹500 - ₹10,000/month | 3-6 months |
| **Dividend Stocks** | ₹5,000+ | Low | Medium | 2-4% annually | Immediate |
| **Rental Income** | ₹2,000+ (PG room) | Low | Low | ₹3,000 - ₹15,000/month | 1 month |
| **Mobile App** | ₹0 (if you code) | High | Medium | ₹1,000 - ₹1L/month | 3-6 months |
| **Print on Demand** | ₹0 (design only) | Low-Medium | Low | ₹500 - ₹20,000/month | 1-3 months |
| **Affiliate Marketing** | ₹0 | Medium | Low | ₹1,000 - ₹30,000/month | 2-6 months |
| **Online Course** | ₹0-₹5,000 (tools) | Medium-High | Low | ₹5,000 - ₹50,000/month | 1-3 months |
| **Royalty Income** | ₹0 | Medium | Low | Variable | 6-12 months |
| **Peer-to-Peer Lending** | ₹10,000+ | Low | Medium-High | 8-12% annually | 1 month |
| **SIP SWP** | ₹5,00,000+ corpus | Low | Medium | 4-6% annually | Immediate |
| **REITs** | ₹10,000+ | Low | Medium | 6-8% dividend | Immediate |
| **Index Fund Dividend** | ₹2,00,000+ | Low | Medium | 1-2% quarterly dividend | Quarterly |

**Top 4 Ideas Detailed:**

**1. YouTube**: 1,000 subscribers + 4,000 watch hours = monetization. Tech, education, finance channels — Indian audience is huge. ₹5,000-₹50,000/month realistic in 1-2 years.

**2. Blogging**: WordPress + hosting ₹2,000/year. Learn SEO, write content, ads + affiliate. ₹10,000/month realistic with traffic.

**3. Digital Products**: Canva templates, Notion templates, Excel sheets. ₹200-₹500 per sale. Sell on Gumroad/Instamojo. 100 sales = ₹20,000-₹50,000.

**4. Affiliate Marketing**: Amazon Associates, Flipkart, Hostinger. Links on blog/YouTube. 1-10% commission. ₹10,000/month realistic with traffic.`,
        imagePrompt: "15 passive income ideas illustrated with icons in a grid, green theme, modern financial illustration",
        color: "#10B981",
        emoji: "💰"
      },
      {
        id: "8-3-2",
        topicId: "8-3",
        topicTitle: "Passive Income",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "Reality Check + Mission",
        content: `**Passive Income Reality Check:**

⚠️ "Passive income isn't actually passive" → Partially true! Initial hard work is required, it becomes passive later. YouTube = 1 year of hard work, 10 years passive.

⚠️ "Get rich quick" → No! Passive income is built by working consistently for 1-3 years.

⚠️ "₹0 investment" → Mostly true for content (YouTube, blog), but the time investment = months/years.

**Best Passive Income for Students (Top 5):**

1. **YouTube Channel** — focus on content, ads + affiliate + sponsorship
2. **Digital Products** — Canva templates, ebooks, courses
3. **Affiliate Marketing** — on blog/social media
4. **Dividend Stocks** — long-term wealth + quarterly income
5. **SIP SWP** (later in life) — retirement income

**🚨 MISSION: Start One Passive Income Stream**

- [ ] Identify your skills (writing, design, coding, teaching)
- [ ] Choose a platform (YouTube, blog, Gumroad, Instagram)
- [ ] Make a 90-day plan — content creation + audience building
- [ ] Set your first income milestone (₹1,000/month)
- [ ] Consistency — daily/weekly posting

**Realistic Timeline:**
- Month 1-3: Foundation, content creation
- Month 3-6: First income trickle (₹100-₹1,000)
- Month 6-12: ₹1,000-₹10,000/month
- Year 1-2: ₹10,000-₹50,000/month possible
- Year 2-5: Scale to ₹50,000+ passive

**Rule**: Passive income = future freedom. Start today, even ₹100/month passive income is progress.`,
        imagePrompt: "Person building passive income streams with multiple icons, green and gold theme, future freedom illustration",
        color: "#10B981",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "8-4",
    title: "Compounding Magic + Retirement Planning",
    emoji: "✨",
    color: "#8B5CF6",
    description: "Complete compounding tables for ₹500/₹1,000/₹2,000/₹5,000 at 10%/12%/15%. The magic of starting early.",
    cards: [
      {
        id: "8-4-1",
        topicId: "8-4",
        topicTitle: "Compounding + Retirement",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "₹1,000/month Compounding Table",
        content: `**Complete Compounding Table — ₹1,000/month at 10%/12%/15%:**

| Years | At 10% | At 12% | At 15% |
| :--- | :--- | :--- | :--- |
| **5 years** | ₹77,000 | ₹81,000 | ₹88,000 |
| **10 years** | ₹2,04,000 | ₹2,30,000 | ₹2,72,000 |
| **15 years** | ₹4,14,000 | ₹5,00,000 | ₹6,47,000 |
| **20 years** | ₹7,60,000 | ₹10,00,000 | ₹14,00,000 |
| **25 years** | ₹13,00,000 | ₹19,00,000 | ₹29,00,000 |
| **30 years** | ₹21,00,000 | ₹35,00,000 | ₹59,00,000 |
| **40 years** | ₹58,00,000 | ₹1,17,00,000 | ₹2,80,00,000 |

All values calculated using standard SIP future value formula: FV = P × [(1+r)^n - 1] / r × (1+r), where P = monthly, r = monthly rate, n = months. Approximate values for illustration.

**The Magic of Starting Early — ₹5,000/month at 12%:**

| Start | Stop | Years | Total Invested | Final Corpus |
| :--- | :--- | :--- | :--- | :--- |
| **20** | 30 | 10 | ₹6,00,000 | ₹87,00,000 |
| **30** | 60 | 30 | ₹18,00,000 | ₹88,00,000 |
| **20** | 60 | 40 | ₹24,00,000 | ₹1,75,00,000 |

**Person A** (20-30, only 10 years of investing): ₹87 lakh by 60.
**Person B** (30-60, 30 years of investing): ₹88 lakh by 60.

Person A only invested for 10 years, Person B for 30. But the corpus is almost the same!

Because Person A's money compounded for 40 years, Person B's for only 30 years. **10 years of early start = 30 years of investing!**

**Complete Difference Chart:**

| Start Age | Monthly | Years | Total Invested | Final by 60 | Loss vs 20-start |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 20 | ₹1,000 | 40 years | ₹4,80,000 | ₹1,18,00,000 | — |
| 30 | ₹1,000 | 30 years | ₹3,60,000 | ₹35,00,000 | ₹83,00,000 |
| 40 | ₹1,000 | 20 years | ₹2,40,000 | ₹10,00,000 | ₹1,08,00,000 |

**10 years late = ₹83 LAKH loss!**`,
        imagePrompt: "Compounding growth curves at different rates, purple theme, exponential growth visualization",
        color: "#8B5CF6",
        emoji: "✨"
      },
      {
        id: "8-4-2",
        topicId: "8-4",
        topicTitle: "Compounding + Retirement",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "Retirement Planning + NPS/EPF + Mission",
        content: `**Why You Should Think About Retirement at Age 20:**

Because the maximum benefit of compounding comes from an early start. ₹1,000/month at 12% from age 20 = ₹35 lakh by age 50. The same ₹1,000/month from age 30 = ₹10 lakh by age 50. **10 years late = ₹25 lakh loss!**

**NPS (National Pension Scheme):**
- Government retirement scheme
- Tax benefit 80CCD (extra ₹50,000)
- Employer also contributes (at a job)
- Low cost (0.01% expense)
- At age 60: 60% lump sum + 40% annuity (monthly pension)
- Optional for students — but if you start NPS at your first job, you'll have a solid corpus at 60

**EPF (Employee Provident Fund):**
- At a job, employer contributes 12% of basic salary — free money!
- Employee also contributes 12%
- Total 24% of basic
- 8.25% interest (current)
- Tax-free
- Transfer when you change jobs, don't withdraw

**"Don't depend on children for retirement"** — this mindset change is necessary. Plan your own retirement. SIP ₹2,000/month from age 22 = ₹50 lakh+ by 50. Independence = dignity.

**🚨 MISSION: Calculate Your Retirement Plan**

- [ ] Set your target retirement age (50? 60?)
- [ ] Estimate your monthly expense at retirement (inflation-adjusted)
- [ ] Calculate your freedom number (25x annual expense)
- [ ] Calculate the monthly SIP needed
- [ ] Calculate years from your current age to retirement
- [ ] Set up auto-debit

**Realistic Retirement Goals:**

| Start Age | Monthly SIP | Retirement Age | Corpus |
| :--- | :--- | :--- | :--- |
| 22 | ₹2,00,000 | 60 | ₹70 lakh+ |
| 22 | ₹5,000 | 50 | ₹57 lakh+ |
| 25 | ₹10,000 | 50 | ₹95 lakh+ |
| 30 | ₹15,000 | 50 | ₹85 lakh+ |

**Rule**: Start early = early freedom. Increase investment amount = faster freedom. Control expenses = need less corpus = even faster freedom.`,
        imagePrompt: "Retirement planning roadmap with milestones, purple and gold theme, financial freedom journey illustration",
        color: "#8B5CF6",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "8-5",
    title: "Real Indian Examples + Books Summary",
    emoji: "📖",
    color: "#06B6D4",
    description: "7 real Indian examples who achieved financial freedom. Rich Dad Poor Dad + Psychology of Money lessons.",
    cards: [
      {
        id: "8-5-1",
        topicId: "8-5",
        topicTitle: "Real Examples + Books",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "7 Inspiring Indian Stories",
        content: `**7 Real Indian Examples — Financial Freedom Stories:**

1. **Arjun, College Student**: Started SIP at age 19 — ₹2,000/month in a Nifty 50 Index Fund. Invested consistently — market crash, pandemic, nothing made him stop. At age 30, corpus: ₹50 lakh+. Now he can freely choose his career. **Key lesson**: Consistency + early start = magic.

2. **Meera, Government Teacher**: Invested ₹2,000/month in PPF consistently for 25 years. Maturity: ₹1 crore+ (tax-free!). Now retirement is comfortable, not dependent on anyone. **Key lesson**: PPF + consistency = guaranteed wealth.

3. **Kunal, Freelancer**: Started freelancing at 22 — coding, design, content. Built 3 income streams: (1) Freelance clients, (2) YouTube tutorial channel, (3) Digital products. By 25, monthly income ₹80,000+ passive.

4. **Deepak, Middle Class to FIRE**: Started with ₹25,000 salary. Invested 60% of savings. At age 40, corpus ₹75 lakh. Semi-retired — does part-time consulting. **Key lesson**: High saving rate + disciplined investing = early freedom.

5. **Sunita, Education Loan Free**: Took a ₹5 lakh education loan. After graduation, ₹30,000 salary. 50% of salary went to loan repayment (₹15,000/m). Earned ₹10,000 extra from side income. Total ₹25,000/m repayment. Loan cleared in 3 years! Now debt-free and investing her full salary.

6. **Rohan, 22 to 28**: ₹10,000/month SIP + ₹5,000/month side income (tutoring). In 6 years, ₹10 lakh corpus by 28. Down payment for bike + emergency fund + investment base. **Key lesson**: SIP + side hustle = fast wealth building.

7. **Vikram, Government Employee**: ₹40,000/month salary. ₹15,000/month — PPF ₹5,000 + NPS ₹3,000 + SIP ₹7,000. In 25 years, ₹2 crore+ corpus. Retired at 55, now travels India. **Key lesson**: Government job + disciplined investing = comfortable retirement.

**Common Pattern**: Early start + consistency + multiple income + discipline = financial freedom.`,
        imagePrompt: "Seven inspiring story icons with happy faces, cyan and gold theme, success celebration illustration",
        color: "#06B6D4",
        emoji: "📖"
      },
      {
        id: "8-5-2",
        topicId: "8-5",
        topicTitle: "Real Examples + Books",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "Rich Dad Poor Dad + Psychology of Money + Mission",
        content: `**Rich Dad Poor Dad — 5 Key Lessons (Indian Context):**

**Lesson 1**: "Rich people buy assets, poor buy liabilities thinking they're assets."
- Asset = money comes in (SIP, rental property, skills)
- Liability = money goes out (phone on EMI, expensive car, big house with EMI)
- Indian example: ₹50 lakh flat with ₹40 lakh loan — this is not an asset, it's a liability until rent is coming in! EMI ₹30,000/month = liability. Same flat on rent giving ₹15,000/month = asset.

**Lesson 2**: Financial Education > Formal Education
- Schools don't teach about money
- A degree gets you a job, financial literacy builds wealth
- Even an IIT-IIM graduate can fall into a credit card trap if financially illiterate

**Lesson 3**: You Don't Get Rich by Staying in a Job
- Salary is for survival, business + investing builds wealth
- Job = launchpad, not destination

**Lesson 4**: Money Working for You
- Passive income concept
- ₹5,000/month SIP at 12% for 20 years = ₹50 lakh — you only invested ₹12 lakh, the rest was earned by money making money

**Lesson 5**: Mindset Matters
- "I can't afford this" vs "How can I afford this?"
- The first statement shuts down your brain, the second gets it working on solutions

---

**Psychology of Money — 5 Key Lessons:**

**Lesson 1**: No One's Crazy — Money is about psychology, not logic. Don't judge anyone's financial choices, try to understand them.

**Lesson 2**: Wealth Is What You Don't See — Real wealth = the money you invested and didn't spend. Car, phone, clothes = expenditure, not wealth.

**Lesson 3**: Time Is the Most Powerful Force — ₹1,000/month at 12% for 40 years = ₹1.18 crore. You only invested ₹4.8 lakh, the rest ₹1.13 crore was earned by COMPOUNDING.

**Lesson 4**: Money Buys Freedom — More important than earning money is having room to breathe. Emergency fund = freedom to go to the hospital, freedom to quit a toxic boss.

**Lesson 5**: Plan for Survival, Not Just Success — "Hope for the best, plan for the worst". Emergency fund, insurance, diversification — survival strategies.

---

**🚨 MISSION: Read Books + Complete Module 8**

- [ ] Read "Psychology of Money" by Morgan Housel (simplest finance book)
- [ ] Read "Rich Dad Poor Dad" by Robert Kiyosaki (mindset change)
- [ ] Make a 5-year plan for your financial journey
- [ ] Design your "Wealth Building System" (SIP + side income + PPF)
- [ ] Set up an annual review system (review goals every January)

**KEY TAKEAWAYS (Module 8):**
- ✅ Financial independence = passive income covers all expenses — no need to work. Level 6 = the goal
- ✅ 25x annual expenses = FIRE target — calculate your number. ₹3 lakh/year = ₹75 lakh corpus
- ✅ Early start = exponential advantage — start at 20, not 30. 10 years = ₹83 lakh difference
- ✅ Build multiple income streams — side hustle + passive income + investing. 1 source = risk
- ✅ Core of Rich Dad Poor Dad: Buy assets, avoid liabilities. Mindset change = wealth change

**COMMON MISCONCEPTIONS (Module 8):**
⚠️ "FIRE is only possible in America" → Wrong! Expenses are lower in India, adjusted FIRE is possible
⚠️ "You should think about retirement at age 50" → Wrong! Think at 20, enjoy at 50
⚠️ "Passive income isn't actually passive" → Partially true! Initial hard work is required, it becomes passive later
⚠️ "₹1 crore will never be possible" → ₹5,000/month SIP at 12% for 25 years = ₹95 lakh. ₹1 crore is achievable
⚠️ "A job is the safest thing" → Wrong! Diversified income is safe — job + side income + investments

**What's Next**: The foundation of investing and independence is ready. But one more important topic remains — INSURANCE. In Module 9 we'll cover health insurance, term plans, vehicle insurance, and why mixing "insurance + investment" is the biggest financial mistake. Protection first, growth later! 🛡️`,
        imagePrompt: "Two books - Rich Dad Poor Dad and Psychology of Money with key lessons, cyan and gold theme, financial education illustration",
        color: "#06B6D4",
        emoji: "🏆"
      }
    ]
  }
];

export function getAllCards() {
  return module8Topics.flatMap(topic => topic.cards);
}

export function getTotalCardCount() {
  return getAllCards().length;
}

export function getTopicById(id) {
  return module8Topics.find(t => t.id === id);
}

export function getCardsByTopic(topicId) {
  const topic = getTopicById(topicId);
  return topic ? topic.cards : [];
}
