export const module1Topics = [
  {
    id: "1-1",
    title: "What is Money",
    emoji: "💵",
    color: "#3B82F6",
    description: "Money is not just paper — it's a concept, a medium through which value is exchanged.",
    cards: [
      {
        id: "1-1-1",
        topicId: "1-1",
        topicTitle: "What is Money",
        cardIndex: 1,
        totalCardsInTopic: 12,
        title: "The Barter Problem",
        content: `Imagine a world without money. You want tea, but all you have is a book...

**The Problem**: The tea seller doesn't need a book! This is the **"Double Coincidence of Wants"** — both parties must want what the other has.

**The Solution**: Money was invented as a universal medium of exchange. Everyone accepts it because it represents **value**.

**Evolution of Money:**
1. **Barter** — Direct goods exchange
2. **Gold Coins** — Intrinsic value, portable
3. **Paper Currency** — Government-backed, lightweight
4. **Digital/UPI** — Instant, borderless, 24/7

**Key Insight**: The purpose of money has always been the same — **Value Exchange**. Only the form has changed.`,
        imagePrompt: "Ancient barter system in Indian village, people exchanging goods, warm earthy tones, educational illustration",
        color: "#3B82F6",
        emoji: "🔄",
        interactiveType: 'choice_sim',
        choiceData: {
          scenario: "You want tea, but all you have is an old Engineering Book. What will the tea seller say?",
          choices: [
            {
              text: "Take the book, have the tea!",
              isCorrect: false,
              consequence: "The tea seller said: 'Brother, I sell tea, I don't take exams! I need rice, not a book.'"
            },
            {
              text: "Sell the book, bring cash!",
              isCorrect: true,
              consequence: "Exactly! Money is a 'Medium of Exchange'. Everyone accepts it, whether they need a book or not."
            }
          ]
        }
      },
      {
        id: "1-1-2",
        topicId: "1-1",
        topicTitle: "What is Money",
        cardIndex: 2,
        totalCardsInTopic: 12,
        title: "UPI: India's Digital Revolution",
        content: `India has shown the world what digital money truly means. UPI is not just an app — it's a **Financial Revolution**.

**4 Superpowers of UPI:**
- **Instant** — Transfer in 2 seconds
- **24/7** — Sunday, holiday, 2 AM — anytime
- **Free** — No transaction charges
- **Universal** — From tea sellers to malls, everywhere

**Growth of UPI in India:**

| Year | Transactions |
| :--- | :--- |
| 2020 | 18 Billion |
| 2022 | 74 Billion |
| 2024 | 131 Billion |

**Neobanks** like Jupiter, Fi, and Niyo have also arrived — offering completely digital banking.`,
        imagePrompt: "Digital payment revolution in India, UPI QR code scanning, vibrant blue and green gradient, tech style",
        color: "#3B82F6",
        emoji: "📱"
      },
      {
        id: "1-1-3",
        topicId: "1-1",
        topicTitle: "What is Money",
        cardIndex: 3,
        totalCardsInTopic: 12,
        title: "5 Superpowers of Money",
        content: `Money isn't just for spending. It has 5 superpowers:

1. **Medium of Exchange** — Buy stuff (Pay ₹20 for tea)
2. **Unit of Account** — Measure value (Phone costs ₹15,000)
3. **Store of Value** — Save it (Keep ₹5k in the bank)
4. **Deferred Payment** — Pay later (₹1k monthly EMI)
5. **Transfer of Value** — Send anywhere (GPay to Friend)

**Most Liquid Asset** — Money reaches from Delhi to Mumbai in 2 seconds. Real estate or gold don't have this flexibility.

**Fiat Currency**: Modern money has no gold backing. It has value because the **government promises** so. This is called "fiat" — meaning "by decree." Today, the world runs on **Trust** and **Legal Tender** — not gold or silver.`,
        imagePrompt: "Five functions of money as icons, clean modern infographic, blue theme",
        color: "#3B82F6",
        emoji: "⚡"
      },
      {
        id: "1-1-4",
        topicId: "1-1",
        topicTitle: "What is Money",
        cardIndex: 4,
        totalCardsInTopic: 12,
        title: "Inflation: The Silent Thief",
        content: `Today's ₹100 won't be worth ₹100 after 5 years. This is **Inflation** — the silent thief that eats your purchasing power.

**How ₹100 Loses Value Over Time:**

| Time | Value |
| :--- | :--- |
| Today | ₹100 |
| 1 year | ₹94 |
| 3 years | ₹84 |
| 5 years | ₹75 |
| 10 years | ₹56 |

**Real Example**: Rahul broke down ₹5,000 — ₹2,500 rent, ₹1,500 food, ₹500 transport, ₹500 recharge. Then he understood how much purchasing power ₹5,000 really has.

**Money is not just a number — it's a representation of purchasing power.**`,
        imagePrompt: "Purchasing power comparison, Indian rupee notes shrinking over time, warm orange and red warning tones",
        color: "#3B82F6",
        emoji: "📉",
        interactiveType: 'calculator',
        calcData: {
          calcType: 'inflation',
          formula: 'none',
          inputs: [
            { label: 'Current Amount', min: 100, max: 100000, defaultValue: 1000, step: 100, unit: '₹' },
            { label: 'Inflation Rate (%)', min: 1, max: 15, defaultValue: 6, step: 0.5, unit: '%' },
            { label: 'Years', min: 1, max: 30, defaultValue: 10, step: 1, unit: 'Y' }
          ]
        }
      },
      {
        id: "1-1-5",
        topicId: "1-1",
        topicTitle: "What is Money",
        cardIndex: 5,
        totalCardsInTopic: 12,
        title: "MISSION: Wallet Audit",
        content: `You've got the knowledge, now it's time for action!

- [ ] Open your UPI apps (GPay/PhonePe)
- [ ] Check your last 5 transactions
- [ ] Classify each as 'Need' or 'Want'
- [ ] Write down today's expenses

**Pro Tip**: Money is not just a number — it's your purchasing power. Understand and protect the value of every ₹100!`,
        imagePrompt: "Young student calculating expenses on paper, warm domestic lighting, emotional storytelling style",
        color: "#3B82F6",
        emoji: "🎯"
      },
      {
        id: "1-1-6",
        topicId: "1-1",
        topicTitle: "What is Money",
        cardIndex: 6,
        totalCardsInTopic: 12,
        title: "Active vs Passive Income",
        content: `**Active Income**: Work and you get paid. Stop working, income stops.
**Passive Income**: Put in effort once, earn repeatedly. Works while you sleep.

**The Student Dilemma:**
"Should I do a part-time job or start YouTube?"

**Answer**: Do both! Active income pays bills now, passive income builds wealth for later.

**Best Strategy**: Use active income to pay bills, build passive income for financial freedom.`,
        imagePrompt: "Split comparison of active vs passive income, modern illustration, green and gold tones",
        color: "#10B981",
        emoji: "⚡"
      },
      {
        id: "1-1-7",
        topicId: "1-1",
        topicTitle: "What is Money",
        cardIndex: 7,
        totalCardsInTopic: 12,
        title: "15 Income Sources for Students",
        content: `There are many ways to earn money:

| Source | Monthly Income | Type |
| :--- | :--- | :--- |
| **Pocket Money** | ₹500 - ₹5,000 | Stable |
| **Part-time Tuition** | ₹2,000 - ₹8,000 | Active |
| **Cafe Job** | ₹4,000 - ₹8,000 | Active |
| **Delivery Gig** | ₹6,000 - ₹15,000 | Active |
| **Freelance Coding** | ₹5,000 - ₹50,000 | Active |
| **Freelance Design** | ₹3,000 - ₹30,000 | Active |
| **Freelance Writing** | ₹2,000 - ₹20,000 | Active |
| **Scholarship** | ₹1,000 - ₹25,000 | Stable |
| **Research Stipend** | ₹8,000 - ₹25,000 | Stable |
| **YouTube Ad** | ₹500 - ₹50,000 | Passive |
| **Affiliate Marketing** | ₹500 - ₹20,000 | Passive |
| **Internship Stipend** | ₹5,000 - ₹25,000 | Active |
| **Event Photography** | ₹3,000 - ₹15,000 | Active |
| **Data Entry** | ₹3,000 - ₹10,000 | Active |
| **Campus Ambassador** | ₹2,000 - ₹8,000 | Active |`,
        imagePrompt: "Multiple income streams flowing into a student's wallet, green color scheme, modern flat illustration",
        color: "#10B981",
        emoji: "💵"
      },
      {
        id: "1-1-8",
        topicId: "1-1",
        topicTitle: "What is Money",
        cardIndex: 8,
        totalCardsInTopic: 12,
        title: "The Unavoidables vs The Controllables",
        content: `Fixed expenses remain the same every month. Variable expenses depend on the month.

**Fixed Expenses (Unavoidable):**

| Category | Amount (₹) |
| :--- | :--- |
| Hostel/PG Rent | ₹3,000 - ₹8,000 |
| Mess/Food Tiffin | ₹2,500 - ₹4,000 |
| College Fees (EMI) | ₹2,000 - ₹10,000 |
| Phone Recharge | ₹199 - ₹599 |
| Transport Pass | ₹500 - ₹2,000 |

**Variable Expenses (Controllable):**

| Category | Amount (₹) |
| :--- | :--- |
| Outside Food/Swiggy | ₹1,000 - ₹5,000 |
| Shopping/Clothes | ₹500 - ₹3,000 |
| Entertainment | ₹200 - ₹2,000 |
| Chai/Coffee Daily | ₹300 - ₹1,500 |

**Invisible Leak**: ₹50/day chai × 30 days = ₹1,500/month just on chai!`,
        imagePrompt: "Calendar with recurring expense icons and fluctuating variable expenses, red and white theme",
        color: "#EF4444",
        emoji: "📌"
      },
      {
        id: "1-1-9",
        topicId: "1-1",
        topicTitle: "What is Money",
        cardIndex: 9,
        totalCardsInTopic: 12,
        title: "The 3-Question Test: Need vs Want",
        content: `Ask these **3 questions** for every expense:

1. **Can you live without it?**
2. **Is there a cheaper option?**
3. **Is it necessary right now or can it wait?**

If 2 out of 3 answers are "yes", then it's a **WANT**, not a **NEED**.

**Sample Scenarios:**

| Item | Need/Want | Reasoning |
| :--- | :--- | :--- |
| College tuition fees | **NEED** | Education is a right |
| Branded backpack | **WANT** | A normal bag works |
| Internet recharge | **NEED** | Study essential |
| Netflix subscription | **WANT** | YouTube is free |
| Doctor visit | **NEED** | Health first |
| iPhone 16 | **WANT** | ₹15k phone works fine |
| Daily Starbucks | **WANT** | ₹300/day = ₹9,000/month! |`,
        imagePrompt: "Decision tree flowchart with need vs want branches, red and green theme",
        color: "#EF4444",
        emoji: "🤔",
        interactiveType: 'choice_sim',
        choiceData: {
          scenario: "You have ₹2,000 left. The iPhone 16 has launched. What will you do?",
          choices: [
            {
              text: "I'll get it on EMI!",
              isCorrect: false,
              consequence: "Trap! ₹2,000 EMI + interest = ₹2,500/month going out. After 6 months, its value halves."
            },
            {
              text: "Put it in savings first, phone later.",
              isCorrect: true,
              consequence: "Smart! Your phone works fine. ₹2,000 SIP = ₹2 lakh+ in 5 years. Postpone the want."
            }
          ]
        }
      },
      {
        id: "1-1-10",
        topicId: "1-1",
        topicTitle: "What is Money",
        cardIndex: 10,
        totalCardsInTopic: 12,
        title: "The 48-Hour Rule",
        content: `**Non-Discretionary** (can't skip): Rent, fees, food, transport. Cover these first.

**Discretionary** (can be postponed): Shopping, movies, gadgets. Think later.

**Decision Tree:**
Expense comes → Can you live without it?
  ↓ NO → NEED → Cheaper option?
    ↓ YES → Go for that
    ↓ NO → Buy it now
  ↓ YES → WANT → Necessary now?
    ↓ NO → 48-hour rule → Think later
    ↓ YES → In budget?
      ↓ YES → Buy it
      ↓ NO → Postpone

**Rule**: Apply the 48-hour rule to wants. Before buying, think for 48 hours — 90% of things you won't even remember!`,
        imagePrompt: "Flowchart showing decision tree for expenses, red and green color coding",
        color: "#EF4444",
        emoji: "🌳"
      },
      {
        id: "1-1-11",
        topicId: "1-1",
        topicTitle: "What is Money",
        cardIndex: 11,
        totalCardsInTopic: 12,
        title: "Pay Yourself First: The Secret",
        content: `Simple rule: **"Save First, Then Spend"**, not "Spend First, Then Save".

**Why "Save What's Left" Fails:**
Because usually nothing is left! Money leaks through "invisible leaks".

**The "Pay Yourself First" Method:**
1. Income arrives → First transfer to savings
2. Manage expenses with the rest
3. Set up auto-debit — ₹1,000 auto-transfer on salary day

**5-Year Result — Same Income, Different Life:**

| Approach | Monthly Save | 5 Years Total |
| :--- | :--- | :--- |
| **Pay Yourself First** | ₹2,000 | ₹1,20,000 |
| **Spend Then Save** | ₹500 (avg) | ₹30,000 |

**₹1,05,000 difference!** Just ₹1,500/month difference — skip one pizza and movie, save ₹1 lakh.

**Pro Tip**: Open an account in a different bank (Kotak 811 or Jupiter). Don't link UPI. "Out of sight, out of mind" works!`,
        imagePrompt: "Person paying themselves first, coins going into savings before expenses, purple and gold tones",
        color: "#8B5CF6",
        emoji: "✨"
      },
      {
        id: "1-1-12",
        topicId: "1-1",
        topicTitle: "What is Money",
        cardIndex: 12,
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

**Zero-Based Budgeting**: Every rupee is assigned. ₹15,000 income → ₹3k savings, ₹4k rent, ₹2.5k food, ₹1.5k transport, ₹1k education, ₹1.5k entertainment, ₹1.2k phone/WiFi, ₹300 others = ₹15,000. ZERO!

**Why 76% of Indians Are Financially Illiterate:**
1. Schools don't teach money (curriculum gap)
2. Cultural taboo — "don't talk about money"
3. No practical application — theory only

**Start today**: Ask parents "Dad, how does our monthly budget work?"`,
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
      }
    ]
  }
];

export function getAllCards() {
  return module1Topics.flatMap(topic => topic.cards);
}

export function getTotalCardCount() {
  return getAllCards().length;
}

export function getTopicById(id) {
  return module1Topics.find(t => t.id === id);
}

export function getCardsByTopic(topicId) {
  const topic = getTopicById(topicId);
  return topic ? topic.cards : [];
}
