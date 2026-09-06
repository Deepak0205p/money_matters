// ============================================================
// Money Matters — Story Data
// Financial literacy stories for Indian youth in English
// Main character: Arjun — 22-year-old guy, first job
// ============================================================

export const moduleStories = [
// ============================================================
// MODULE 1: "Basic Understanding of Money" (Foundation)
// Story: "Arjun's First Salary"
// ============================================================
{
  moduleId: 1,
  storyTitle: "Arjun's First Salary",
  storySubtitle: "The euphoria and reality of the first salary",
  characterEmoji: "💸",
  settingDescription: "There's a celebration at Arjun's home — the 22-year-old has finally brought home his first salary. ₹20,000 — the first time he's seen so much money in his life.",
  chapters: [{
    id: "m1-ch1",
    chapterNumber: 1,
    title: "Salary Arrived! 🎉",
    scene: "Friday evening, Arjun's phone buzzes — 'Salary credited: ₹20,000'. He jumps up from his seat. Tells everyone at the office, calls home, and there's only one thing on his mind — party!",
    dialogue: "₹20,000! Now life is set! Shopping on the weekend, new sneakers, and treating friends — everything will happen! The first month should be fully enjoyed, right?",
    speaker: "Arjun",
    lesson: "Excitement on getting your first salary is normal, but spending without thinking is the biggest mistake. Plan first, then spend.",
    emoji: "🤑",
    choice: {
      id: "m1-ch1-c1",
      text: "Spend the full salary — it's the first time in life! 🛍️",
      isCorrect: false,
      feedback: "Absolutely wrong! The shock of the first salary feels sweet, but you get a bitter punishment by the end of the month. Think first, then spend."
    },
    xpReward: 10
  }, {
    id: "m1-ch2",
    chapterNumber: 2,
    title: "Priya's Wisdom",
    scene: "Arjun meets his school friend Priya for coffee. Priya has been working for 2 years already and is financially smart. Arjun excitedly shares his plan — to spend the entire salary.",
    dialogue: "Arjun, stop! Do one thing — divide your salary into three parts. 50% for needs (rent, bills, food), 30% for wants (shopping, fun), and 20% for savings. This is the Income-Expense-Savings triangle — never break it.",
    speaker: "Priya",
    lesson: "Income-Expense-Savings triangle: 50% of income should go to essential expenses, 30% to things you like, and 20% to savings. This simple formula saves your financial life.",
    emoji: "📐",
    xpReward: 15
  }, {
    id: "m1-ch3",
    chapterNumber: 3,
    title: "Shopping Spree Disaster",
    scene: "In the mall, Arjun is buying everything — ₹4,000 sneakers, ₹2,500 jacket, ₹1,500 earbuds. The cart is full but the wallet is getting empty. There are still 15 days left in the month and the money is gone.",
    dialogue: "Were these sneakers necessary or just a whim? And the jacket — you'll wear it in December, but it's July now! Arjun, understand the difference between Needs and Wants. Needs are things you can't do without — rent, food, bills. Wants are things that are nice to have but not essential.",
    speaker: "Priya",
    lesson: "Needs vs Wants: Buy essential things first (rent, food, bills), then think about wants. Impulse shopping gives you a bitter truth at the end of the month.",
    emoji: "🛒",
    choice: {
      id: "m1-ch3-c1",
      text: "From now on, I'll think before buying anything — need or want? 🤔",
      isCorrect: true,
      feedback: "Perfect! Apply the 10-second rule on every purchase — is this a need or a want? This will save you from impulse buying!"
    },
    xpReward: 15
  }, {
    id: "m1-ch4",
    chapterNumber: 4,
    title: "The Magic of 50-30-20",
    scene: "Arjun is sitting in his room holding a calculator. On a ₹20,000 salary — he wants to apply Priya's 50-30-20 rule. For the first time, he's making friends with numbers.",
    dialogue: "Let's calculate: 50% of ₹20,000 = ₹10,000 for needs. 30% = ₹6,000 for wants. 20% = ₹4,000 for savings. This rule is simple but powerful — you control your money, it doesn't control you.",
    speaker: "Priya",
    lesson: "50-30-20 Rule: 50% needs, 30% wants, 20% savings. This formula works at every income level — whether it's ₹10,000 or ₹1,00,000.",
    emoji: "📊",
    choice: {
      id: "m1-ch4-c1",
      text: "₹4,000 savings? What can this much do? 🤷",
      isCorrect: false,
      feedback: "Don't think — just start! ₹4,000 per month = ₹48,000 per year. And with the power of compounding, this can become ₹5 lakh+ in a few years. Start small, think big!"
    },
    xpReward: 20
  }, {
    id: "m1-ch5",
    chapterNumber: 5,
    title: "The First Financial Goal",
    scene: "Arjun opens the notes app on his phone. For the first time, he has to write down financial goals. Short-term, medium-term, long-term — he's planning everything. There's both excitement and determination.",
    dialogue: "My first goal — build a ₹15,000 emergency fund in 3 months. Second — get a new phone in 6 months (without EMI!). And third — invest ₹50,000 by year end. Now everything is written down — no more forgetting!",
    speaker: "Arjun",
    lesson: "Write down your financial goals — short term (3-6 months), medium term (1-3 years), long term (5+ years). Written goals are 42% more achievable. Make them SMART — Specific, Measurable, Achievable, Relevant, Time-bound.",
    emoji: "🎯",
    xpReward: 20
  }]
},
// ============================================================
// MODULE 2: "Budgeting In Real Life" (Practical)
// Story: "The Last Day of the Month"
// ============================================================
{
  moduleId: 2,
  storyTitle: "The Last Day of the Month",
  storySubtitle: "When the ATM shows — Balance: ₹47",
  characterEmoji: "😰",
  settingDescription: "28th of the month — Arjun has only ₹47 left. Buying even Maggi is difficult now. Making a budget has become essential, otherwise the same situation will repeat every month.",
  chapters: [{
    id: "m2-ch1",
    chapterNumber: 1,
    title: "The ATM Shock",
    scene: "Arjun is standing in front of the ATM, the screen blinking — 'Available Balance: ₹47'. His eyes widen in disbelief. 28 days ago there was ₹20,000, and now... ₹47? Where did all the money go?",
    dialogue: "How did this happen? ₹47?! I thought everything was going fine. How do I survive the next 2 days? Even Maggi costs ₹15! Making a budget is essential — definitely now!",
    speaker: "Arjun",
    lesson: "Life without a budget is like a car without GPS — you don't know where you'll end up, but you won't reach your destination. Make a budget, and the path will be clear.",
    emoji: "🏧",
    xpReward: 10
  }, {
    id: "m2-ch2",
    chapterNumber: 2,
    title: "Money's GPS — Budget",
    scene: "Priya comes to Arjun's house. Two cups of tea on the table, a notebook, and a calculator. Today is the budget class — real life, not textbook. Priya is making Arjun list last month's expenses.",
    dialogue: "A budget is like money's GPS — it tells you where you need to come from and where you need to go. Driving without GPS = living without a budget. Let's list all expenses first — rent, bills, groceries, entertainment, everything.",
    speaker: "Priya",
    lesson: "A budget is life planning — it doesn't restrict you, it gives direction. Make a budget at the start of every month so there are no surprises at the end.",
    emoji: "🗺️",
    xpReward: 15
  }, {
    id: "m2-ch3",
    chapterNumber: 3,
    title: "The Tea Expense Revealed",
    scene: "Priya and Arjun are tracking every expense from last month. When they tallied the entertainment and food, Arjun's face turned red. Chai, samosa, Zomato orders — everything added up.",
    dialogue: "Arjun, look — this is ₹2,400 just on tea and snacks! And ₹4,800 on Zomato! Total food spending is ₹9,200? That's 46% of the salary! Tea is nice, but ₹2,400 per month... friend, you could make it at home too, right?",
    speaker: "Priya",
    lesson: "Small expenses become big ones. ₹80 daily tea = ₹2,400/month = ₹28,800/year. Track every expense — small leaks sink big ships.",
    emoji: "☕",
    choice: {
      id: "m2-ch3-c1",
      text: "₹2,400 on tea? Didn't know it was this much! 😱",
      isCorrect: true,
      feedback: "Exactly! That's the point — without tracking, you don't even realize where the money is going. Expense tracking is the very first step in budgeting."
    },
    xpReward: 15
  }, {
    id: "m2-ch4",
    chapterNumber: 4,
    title: "Zero-Based Budgeting",
    scene: "Priya draws a new concept on the whiteboard — Zero-Based Budgeting. Every rupee's purpose must be decided in advance. No rupee is 'leftover' — everything is allocated.",
    dialogue: "Zero-based budgeting means Income minus all Expenses = Zero. Meaning every rupee has a predetermined purpose. Savings is also an expense — pay yourself first. ₹20,000 came in, make a plan for ₹20,000, don't think about leaving zero.",
    speaker: "Priya",
    lesson: "Zero-based budgeting: Income - Expenses = 0. Every rupee's purpose should be fixed in advance. As long as money is 'leftover', there will be wastage. Treat savings as an expense too.",
    emoji: "⚖️",
    choice: {
      id: "m2-ch4-c1",
      text: "Let the money remain, the rest will be spent 🤷‍♂️",
      isCorrect: false,
      feedback: "Leftover money always ends up somewhere. In zero-based budgeting, every rupee has a purpose — savings is also a purpose!"
    },
    xpReward: 20
  }, {
    id: "m2-ch5",
    chapterNumber: 5,
    title: "The First Budget Win! 🏆",
    scene: "One month later — Arjun is in front of the ATM again. This time the screen reads — 'Available Balance: ₹4,200'. ₹4,000 savings + ₹200 extra. For the first time, the month ended with money left over!",
    dialogue: "Priya! ₹4,200 left! For the first time, no panic at month-end! The budget worked — it really is money's GPS! From now on, I'll make a budget every month, no excuses!",
    speaker: "Arjun",
    lesson: "Following a budget is difficult for the first 2-3 months, but then it becomes a habit. The first budget win gives confidence — and confidence brings consistency. Consistency leads to financial freedom.",
    emoji: "🏆",
    xpReward: 15
  }]
},
// ============================================================
// MODULE 3: "The Magic of Savings" (Savings)
// Story: "Small Savings, Big Strength"
// ============================================================
{
  moduleId: 3,
  storyTitle: "Small Savings, Big Strength",
  storySubtitle: "When the phone broke and there were no savings",
  characterEmoji: "📱",
  settingDescription: "Arjun's phone screen cracks — ₹8,000 repair cost. Savings = zero. This emergency teaches him that life without an emergency fund is like walking on thin ice.",
  chapters: [{
    id: "m3-ch1",
    chapterNumber: 1,
    title: "Crack! 💔",
    scene: "While heading to the office in the morning, Arjun's phone slips from his hand and falls on the road. The screen is completely cracked — touch isn't working. Asked at the shop — ₹8,000 to repair. Arjun's savings = ₹0. Panic mode ON.",
    dialogue: "₹8,000?! My phone isn't even 6 months old yet! Where will I get the money for repair? I'll use the credit card... no no, that's a different problem altogether. I didn't have savings, that's why I'm in this situation.",
    speaker: "Arjun",
    lesson: "Without an emergency fund, every big expense becomes a crisis. Phone breaking, medical bill, bike repair — these things keep happening in life. Being prepared is essential.",
    emoji: "💔",
    choice: {
      id: "m3-ch1-c1",
      text: "Pay with credit card, I'll pay it back later 💳",
      isCorrect: false,
      feedback: "Emergency payment with credit card = new debt. Interest goes up to 36-40%. Only an emergency fund truly saves you in emergencies, not a credit card."
    },
    xpReward: 10
  }, {
    id: "m3-ch2",
    chapterNumber: 2,
    title: "Emergency Fund — Life's Shield",
    scene: "Priya meets Arjun at the café. Arjun tells his story — phone broke, no money, credit card trap. Priya calmly explains about the emergency fund.",
    dialogue: "Arjun, an emergency fund is the umbrella you should buy before it rains. Keep 3-6 months of expenses separate — only for emergencies. Phone breaking, hospital, job loss — these are all emergencies. Your monthly expense is ₹12,000, so you need a fund of ₹36,000-₹72,000.",
    speaker: "Priya",
    lesson: "Emergency fund = 3 to 6 months of basic expenses in a separate account. This saves you from debt, protects you during job loss, and gives you peace of mind. It's non-negotiable!",
    emoji: "🛡️",
    xpReward: 15
  }, {
    id: "m3-ch3",
    chapterNumber: 3,
    title: "₹500 SIP — The Beginning",
    scene: "Arjun sets up a ₹500 SIP on his bank app. It looks very small — what will ₹500 do? But Priya said to start, so he started. Auto-debit will happen every month.",
    dialogue: "₹500 per month — yes, it's small. But I've understood one thing — the beginning is the most important. ₹500 is still better than ₹0. And when the salary increases, I'll increase the SIP too. Right now, consistency is what matters.",
    speaker: "Arjun",
    lesson: "In savings, consistency matters more than the amount. Even starting with ₹500/month — once it becomes a habit, you can increase the amount later. 'Starting' is the hardest step.",
    emoji: "🌱",
    choice: {
      id: "m3-ch3-c1",
      text: "What will ₹500 do? It's too little, I'll start with ₹5,000 later 📈",
      isCorrect: false,
      feedback: "Wrong thinking! 'Later' never comes. ₹500/month = ₹6,000/year. In 10 years with compounding, it becomes ₹1,00,000+. Start small, but START!"
    },
    xpReward: 15
  }, {
    id: "m3-ch4",
    chapterNumber: 4,
    title: "The Magic of Compounding ✨",
    scene: "Priya opens a compounding calculator on her laptop and shows Arjun. Seeing the future projection of his ₹500/month, Arjun's eyes widen. The numbers told the truth.",
    dialogue: "Arjun look — ₹500/month, 12% return, 20 years = ₹5,00,000+! Total invested only ₹1,20,000, but you get ₹5 lakh! This is the magic of compounding — the 8th wonder of the world. The earlier you start, the more you get. Time is money — literally!",
    speaker: "Priya",
    lesson: "Compound interest means interest on interest. The earlier you start, the greater the benefit. If you start at 22, by 42 you'll have a monster fund. If you start at 32, you'll get half. Start now!",
    emoji: "✨",
    xpReward: 20
  }, {
    id: "m3-ch5",
    chapterNumber: 5,
    title: "6 Months Later — Emergency Fund Saved the Day!",
    scene: "Arjun suddenly had to stay in the hospital for 3 days — dengue. The bill was ₹15,000. But this time there's no panic — there's an emergency fund. He withdrew the money, paid the bill, and upon returning, made a plan to refill the fund.",
    dialogue: "6 months ago I was standing with ₹47, today I paid a ₹15,000 hospital bill without any tension. The emergency fund saved me. Earlier I was scared of credit cards, now I have confidence from savings. This is real financial strength!",
    speaker: "Arjun",
    lesson: "An emergency fund isn't just money — it's peace of mind, dignity, and freedom from debt. When an emergency comes, savings are what stand by you. Build it, maintain it, respect it.",
    emoji: "🤗",
    xpReward: 20
  }]
},
// ============================================================
// MODULE 4: "The Trap of Credit & Debt" (Debt)
// Story: "Credit Card Trap"
// ============================================================
{
  moduleId: 4,
  storyTitle: "Credit Card Trap",
  storySubtitle: "Not free money, but expensive debt",
  characterEmoji: "💳",
  settingDescription: "Arjun gets a shiny credit card — 'Free! No annual fee!'. He thinks it's free money. But it's a trap — the minimum payment cycle that won't let go for 18 months.",
  chapters: [{
    id: "m4-ch1",
    chapterNumber: 1,
    title: "Congratulations! Free Credit Card! 🎊",
    scene: "Monday at the office, there's an envelope on Arjun's desk — 'Congratulations! Your pre-approved credit card with ₹50,000 limit!' Colored pamphlet, smiling faces, and 'No annual fee' written on it. Arjun's heart is filled with joy.",
    dialogue: "Wow! ₹50,000 credit card — for free! This is a jackpot! Now I can get new sneakers, a weekend trip, and even that PS5! It's free, what's the difference?",
    speaker: "Arjun",
    lesson: "A credit card isn't free — it's an invitation to debt. The limit isn't yours, it's the bank's money that you have to return with interest. Pre-approved doesn't mean you can afford it.",
    emoji: "🎉",
    choice: {
      id: "m4-ch1-c1",
      text: "The limit is ₹50,000 — so I can spend ₹50,000! 🛍️",
      isCorrect: false,
      feedback: "Limit ≠ Your money! The credit limit is the bank's money, not yours. What you spend, you'll have to return with 36-40% interest. Credit card debt is the most expensive debt."
    },
    xpReward: 10
  }, {
    id: "m4-ch2",
    chapterNumber: 2,
    title: "Shopping Spree 🛍️",
    scene: "Arjun started shopping with the credit card — ₹8,000 sneakers, ₹6,000 dinner, ₹10,000 phone upgrade, ₹6,000 clothes. Total ₹30,000 — all on the credit card. Cash never left his pocket.",
    dialogue: "This is magic! Payment done, money didn't leave my pocket, and I got everything! Swiped the card, entered OTP, done! Right now it feels like I can get anything for free!",
    speaker: "Arjun",
    lesson: "Shopping with a credit card doesn't show pain — just swipe and OTP. But the bill will come, and then there'll be pain. With cash, expenses are less because you physically see the money going. You don't get that feeling with a card.",
    emoji: "💅",
    xpReward: 15
  }, {
    id: "m4-ch3",
    chapterNumber: 3,
    title: "Bill Arrived — Minimum Payment Trap 🪤",
    scene: "5th of the month — the credit card SMS arrives. Total outstanding: ₹30,000. Minimum payment due: ₹1,500. Arjun thinks ₹1,500 is very easy, he'll pay it. But he didn't read the fine print.",
    dialogue: "Only ₹1,500? That's nothing! Let me make the minimum payment, we'll see the rest next month. The bank is so nice — accepting such a low payment!",
    speaker: "Arjun",
    lesson: "Minimum payment = Maximum trap. If you pay only ₹1,500 on ₹30,000, the remaining ₹28,500 will have 36-40% interest. Every month the interest will keep increasing and the principal will barely decrease. This is a trap, not a benefit.",
    emoji: "🪤",
    choice: {
      id: "m4-ch3-c1",
      text: "Should pay the full ₹30,000 at once 💪",
      isCorrect: true,
      feedback: "Absolutely right! Always pay the full credit card bill. If you can't afford full payment, don't spend on the credit card at all. Full payment = Zero interest = Smart move!"
    },
    xpReward: 15
  }, {
    id: "m4-ch4",
    chapterNumber: 4,
    title: "18 Months of Nightmare 😱",
    scene: "18 months later — Arjun is still paying that credit card. He was making minimum payments, but interest ballooned. Total paid: ₹55,000 — and still ₹4,000 balance remaining. Paid ₹55,000 for ₹30,000!",
    dialogue: "₹55,000 paid and it's still not finished?! This is robbery! I only spent ₹30,000 and gave almost double! Minimum payment ruined me. If only I had made full payment from the start...",
    speaker: "Arjun",
    lesson: "Making minimum payments on a credit card turns a ₹30,000 debt into ₹55,000+. Interest compounds — even on debt! Every month interest is charged, and you sink deeper and deeper.",
    emoji: "😱",
    xpReward: 20
  }, {
    id: "m4-ch5",
    chapterNumber: 5,
    title: "Freedom from Debt — Snowball Method ⛰️",
    scene: "Priya shows Arjun the way out of debt — Debt Snowball Method. Pay off the smallest debt first, then the next. Psychological wins provide motivation. Arjun first pays off the credit card balance.",
    dialogue: "Arjun, attack the smallest debt first — small wins create momentum. Then the next, then the next. Use extra income only to pay off debt — no shopping, no treats for now. This is a temporary sacrifice, but freedom is permanent!",
    speaker: "Priya",
    lesson: "Debt Snowball Method: Pay off the smallest debt first → psychological win → motivation → next debt → repeat. Or Debt Avalanche: Pay off the one with the highest interest first — mathematically better. Choose either, but start!",
    emoji: "⛷️",
    xpReward: 15
  }, {
    id: "m4-ch6",
    chapterNumber: 6,
    title: "Credit Card = Tool, Not Free Money 🔧",
    scene: "Arjun's credit card debt is now zero. He's kept the card but made rules — only expenses that can be fully paid in the next bill. Auto-debit is ON. Credit score is rising. Lesson learned.",
    dialogue: "Now I understand — a credit card is a tool, not a trap. Like a knife — good for cutting vegetables, bad for cutting hands. The rules are simple: full payment every month, spend within budget, and never make minimum payment. These are my new life rules!",
    speaker: "Arjun",
    lesson: "Use credit cards smartly: 1) Full payment every month, 2) Spend within budget, 3) Don't use more than 30% of the limit, 4) Collect reward points but don't carry interest. Credit score builds up — future loans become cheaper.",
    emoji: "✅",
    choice: {
      id: "m4-ch6-c1",
      text: "Credit card must be put to work — full payment always! 💳",
      isCorrect: true,
      feedback: "Smart move! Disciplined use of credit cards builds credit score, earns rewards, and helps in emergencies. Boss mode: ON!"
    },
    xpReward: 15
  }]
},
// ============================================================
// MODULE 5: "The Beginning of Investing" (Investing Basics)
// Story: "The First Coin"
// ============================================================
{
  moduleId: 5,
  storyTitle: "The First Coin",
  storySubtitle: "The journey from savings account to investing",
  characterEmoji: "🪙",
  settingDescription: "Arjun has ₹10,000 in his savings account. The bank is giving 3.5% interest. Arjun thinks the money is growing — but Priya knows the real truth. Inflation quietly eats everything.",
  chapters: [{
    id: "m5-ch1",
    chapterNumber: 1,
    title: "The Bank Passbook Deception 🏦",
    scene: "Arjun is looking at his bank passbook — ₹10,000 deposit, interest ₹350/year. He's happy — money is growing in the bank! But when he told Priya, she asked a question that wiped the smile off his face.",
    dialogue: "Priya, look! Getting ₹350 interest on ₹10,000! Money is growing in the bank! Savings account is safe and the money also grows — double benefit!",
    speaker: "Arjun",
    lesson: "The 3.5% interest on a savings account seems good, but it's a deception. Inflation is 6% — meaning your money is actually decreasing, not increasing. Real return = Interest - Inflation = 3.5% - 6% = -2.5%. Yes, MINUS!",
    emoji: "🏦",
    xpReward: 10
  }, {
    id: "m5-ch2",
    chapterNumber: 2,
    title: "Inflation is a Silent Thief 🥷",
    scene: "Priya opens her phone and shows an inflation calculator. A ₹100 item will become ₹134 in 5 years with 6% inflation. Arjun's ₹10,000 will actually have the purchasing power of ₹8,750 in a year. Silence.",
    dialogue: "Arjun, inflation is a silent thief — you don't feel it but every year your money decreases by 6%. Bank gives 3.5%, the thief takes 6%. Net loss = 2.5% every year. You think the money is growing, but actually it's decreasing!",
    speaker: "Priya",
    lesson: "Inflation = enemy of money's purchasing power. 6% inflation means a ₹100 item will cost ₹106 next year. If your return is less than 6%, you're actually losing money. Savings account = losing account!",
    emoji: "🥷",
    choice: {
      id: "m5-ch2-c1",
      text: "So keeping money in the bank is useless? 😰",
      isCorrect: false,
      feedback: "A savings account is necessary for the emergency fund — you need instant access. But extra money that isn't needed for 3-5 years must be invested to beat inflation. Emergency fund ≠ Investment."
    },
    xpReward: 15
  }, {
    id: "m5-ch3",
    chapterNumber: 3,
    title: "The Investment Menu 📋",
    scene: "Priya shows Arjun an 'investment menu' — FD (6-7%), PPF (7-8%), Mutual Funds (10-14%), Stocks (variable), Gold (8-10%). She explains the risk and return of each option. Arjun is confused but curious.",
    dialogue: "Look Arjun — FD is safe but returns are low. PPF is good but has a 15-year lock. Mutual Funds are flexible, starting from ₹500. Stocks are directly risky for beginners. The best for you — start with Mutual Funds, through SIP. Simple, safe, smart.",
    speaker: "Priya",
    lesson: "Investment options: FD (safe, low return), PPF (safe, long lock-in), Mutual Funds (moderate risk, good returns), Stocks (high risk, high return), Gold (hedge). For beginners, Mutual Fund SIP is best — diversification + professional management + low entry barrier.",
    emoji: "📋",
    xpReward: 15
  }, {
    id: "m5-ch4",
    chapterNumber: 4,
    title: "First Investment — The ₹5,000 Chapter 📖",
    scene: "Arjun opens a mutual fund app on his phone. He's investing ₹5,000 in an index fund. His finger hovers over the 'Confirm' button — nervous, but also excited. For the first time, money is going outside the bank.",
    dialogue: "I'm scared... ₹5,000 is going outside the bank. But Priya said — it's not a risk, it's a smart move. Alright, let's do it! First coin deposited in the market. Now let's see what happens.",
    speaker: "Arjun",
    lesson: "The first investment always feels scary — that's normal. But risk is never zero, it's only reduced. Starting with an index fund is the smartest choice — diversified, low cost, historically 12%+ returns in the long term.",
    emoji: "📖",
    choice: {
      id: "m5-ch4-c1",
      text: "What if the market falls? All the money will be lost! 📉",
      isCorrect: false,
      feedback: "In the short term, the market goes up and down — that's normal! But in the long term (5+ years), equity always goes up. During a market crash, SIP gives you more units — buying cheap! Patience = Profit."
    },
    xpReward: 20
  }, {
    id: "m5-ch5",
    chapterNumber: 5,
    title: "One Year Later — The First Return! 📈",
    scene: "12 months later — Arjun opens his portfolio. He invested ₹5,000, the current value is ₹5,750. ₹750 profit! It looks small but it's a 15% return in percentage. If it stayed in the bank, he would have got only ₹175. The difference is clear.",
    dialogue: "₹750 profit! It looks small but it's 15% return! In the bank I would have got ₹175, here I got ₹750. That's 4 times more! Now I understand — money should work, not just sleep in the bank. Investing is the real path to growth!",
    speaker: "Arjun",
    lesson: "15% on ₹5,000 = ₹750 vs 3.5% on ₹5,000 = ₹175. Difference = ₹575. This is just for one year — in 10 years this difference becomes lakhs with compounding. Beat inflation with investing and build wealth.",
    emoji: "📈",
    xpReward: 20
  }]
},
// ============================================================
// MODULE 6: "Mutual Funds & SIP" (Mutual Funds)
// Story: "The SIP Story"
// ============================================================
{
  moduleId: 6,
  storyTitle: "The SIP Story",
  storySubtitle: "The journey from ₹500 to lakhs",
  characterEmoji: "📈",
  settingDescription: "Arjun has heard about mutual funds but thinks they're only for rich people. Priya teaches him that SIP can start investing with just ₹500 — and it's the smartest way.",
  chapters: [{
    id: "m6-ch1",
    chapterNumber: 1,
    title: "Mutual Fund? For Rich People! 😤",
    scene: "Arjun sees a mutual fund ad on TV — 'Mutual funds are subject to market risk'. He thinks it's for big investors, not small ones. What will ₹500 do? Priya laughs hearing this.",
    dialogue: "Priya, mutual funds are for rich people. I only have ₹1,000 left at the end of the month. What is this SIP-SIP? What will small investors get? Fund managers must be managing big people's money!",
    speaker: "Arjun",
    lesson: "Mutual Funds are for everyone — they can start from ₹500! SIP (Systematic Investment Plan) is made specifically for small investors. Invest a fixed amount every month — a fund manager manages it professionally. It's an equal opportunity for everyone.",
    emoji: "😤",
    xpReward: 10
  }, {
    id: "m6-ch2",
    chapterNumber: 2,
    title: "NAV, Units and Compounding 🧮",
    scene: "Priya explains on the whiteboard — NAV (Net Asset Value), how units are received, and how compounding works. Arjun thinks it's complex, but Priya explains with a simple analogy.",
    dialogue: "Arjun, NAV is like the buying price. You invested ₹1,000, NAV is ₹50 = you got 20 units. If NAV goes to ₹60, then your 20 units are worth ₹1,200! And compounding — the return from the first year gets added to the second year's principal. Snowball rolling downhill!",
  speaker: "Priya",
    lesson: "NAV = Mutual fund's per-unit price. Units = Your share in the fund. When NAV increases, your units' value increases. With SIP, you get new units every month — whether the market is up or down, in the long term the magic of compounding works.",
    emoji: "🧮",
    choice: {
      id: "m6-ch2-c1",
      text: "If the market is down, you get more units — buying cheap! 🛒",
      isCorrect: true,
      feedback: "Genius! That's the power of SIP — if the market goes down, you get more units (buying cheap). When the market comes up, those extra units are worth more. This is called rupee cost averaging!"
    },
    xpReward: 15
  }, {
    id: "m6-ch3",
    chapterNumber: 3,
    title: "₹1,000/Month SIP Started 🚀",
    scene: "Arjun finally started a ₹1,000/month SIP in a Nifty 50 index fund. Set up auto-debit, completed KYC, and the first installment was deducted. For the first time, he felt like he had become an investor.",
    dialogue: "Done! ₹1,000/month in Nifty 50 index fund. Auto-debit is ON — money will go on the 5th of every month. I don't have to do anything, just watch. For the first time it feels like — I'm also an investor!",
    speaker: "Arjun",
    lesson: "Starting SIP is this simple: 1) Complete KYC (PAN + Aadhaar), 2) Choose a fund (Nifty 50 index fund best for beginners), 3) Set the amount, 4) Turn ON auto-debit. That's it! Money will be invested automatically every month.",
    emoji: "🚀",
    xpReward: 15
  }, {
    id: "m6-ch4",
    chapterNumber: 4,
    title: "Market Crash — Panic Mode! 📉",
    scene: "8 months later — market crash! Arjun's portfolio is at -18%. His ₹8,000 invested is now ₹6,560. WhatsApp groups are all saying 'sell! market will fall more!' Arjun's hand is on the phone — about to press the stop SIP button.",
    dialogue: "Arjun, stop! Market crash = SALE! When there's a discount at the mall, you buy, right? So why sell on a market discount? Continue the SIP — you're getting more units cheap right now. When the market comes back, you'll have more units = more profit. Patience is literally paying!",
    speaker: "Priya",
    lesson: "Don't panic in a market crash, continue the SIP! In a crash, you're buying more units at cheaper prices. When the market recovers (it always does), your portfolio will grow faster. Historically, after every crash, the market makes a new high.",
    emoji: "📉",
    choice: {
      id: "m6-ch4-c1",
      text: "I'll stop the SIP, restart when the market is fine 😰",
      isCorrect: false,
      feedback: "Stopping the SIP = biggest mistake! Market down = best time to invest. The advantage of SIP is that it automatically buys cheap during a crash. When the market is up, you'll be buying expensive — the opposite will happen!"
    },
    xpReward: 20
  }, {
    id: "m6-ch5",
    chapterNumber: 5,
    title: "3 Years Later — SIP Wins! 🏆",
    scene: "3 years later — Arjun opens his SIP portfolio. Total invested: ₹36,000 (₹1,000 × 36 months). Current value: ₹49,200. The market crash came, recovery happened, and Arjun kept the SIP going. Result: ₹13,200 profit + learned compounding.",
    dialogue: "₹36,000 invested, getting ₹49,200! ₹13,200 profit in 3 years — and this is just the beginning! Crash came, there was panic, but didn't stop the SIP. This is the real power of SIP — discipline + patience = profit. Now I'll increase the SIP!",
    speaker: "Arjun",
    lesson: "Three powers of SIP: 1) Rupee Cost Averaging (market up/down, average price is balanced), 2) Compounding (exponential growth in the long term), 3) Discipline (auto-debit, no emotions). ₹13,200 profit in 3 years — in 20 years this can become ₹15 lakh+!",
    emoji: "🏆",
    xpReward: 20
  }]
},
// ============================================================
// MODULE 7: "The Truth About Tax" (Tax)
// Story: "From Salary to Tax"
// ============================================================
{
  moduleId: 7,
  storyTitle: "From Salary to Tax",
  storySubtitle: "The TDS shock and paths to tax saving",
  characterEmoji: "🧾",
  settingDescription: "Arjun saw his first payslip — salary was ₹20,000 but he received ₹17,000. ₹3,000 was deducted as 'TDS'. What is this TDS? Where did his money go? Time to know the truth about tax.",
  chapters: [{
    id: "m7-ch1",
    chapterNumber: 1,
    title: "What is TDS?! Where Did My ₹3,000 Go? 😡",
    scene: "Payday — Arjun downloaded the salary slip. Expected: ₹20,000. Received: ₹17,000. Line item: 'TDS - ₹3,000'. Arjun's face turned red — who is deducting his money and why? Called HR — 'This is normal sir'. Normal?!",
    dialogue: "₹3,000 deducted?! What is this TDS? Why are they taking my money without asking? This is theft! HR says it's normal — what's normal about this? I want my full salary!",
    speaker: "Arjun",
    lesson: "TDS = Tax Deducted at Source. Tax is deducted from salary before you receive it — this is the law, not theft. Income tax is charged in India if income exceeds ₹2.5 lakh/year. But there are legal ways to save tax!",
    emoji: "😡",
    choice: {
      id: "m7-ch1-c1",
      text: "Shouldn't pay tax at all — it's my money, my choice! 🚫",
      isCorrect: false,
      feedback: "Paying tax is a legal responsibility — not paying is a criminal offense! But you can reduce tax legally using deductions. There's a difference between tax evasion (hiding) and tax avoidance (saving) — avoidance is legal!"
    },
    xpReward: 10
  }, {
    id: "m7-ch2",
    chapterNumber: 2,
    title: "Tax Slabs and Deductions 📊",
    scene: "Priya explains tax slabs to Arjun — no tax up to ₹2.5 lakh, 5% for ₹2.5-5 lakh, 20% for ₹5-10 lakh. Arjun's annual salary is ₹2,40,000 — actually no tax! But TDS was deducted because the employer doesn't know about deductions. He can get a refund!",
    dialogue: "Arjun, your salary is ₹2,40,000/year — that's below the ₹2.5 lakh slab! You don't have to pay any tax! The employer deducted TDS because they don't know you'll declare deductions. File ITR — you'll get a ₹3,000 refund!",
    speaker: "Priya",
    lesson: "Tax slabs: ₹0-2.5L = 0%, ₹2.5-5L = 5%, ₹5-10L = 20%, ₹10L+ = 30%. If your salary is below the slab or deductions reduce taxable income, you get a TDS refund when you file ITR!",
    emoji: "📊",
    xpReward: 15
  }, {
    id: "m7-ch3",
    chapterNumber: 3,
    title: "Section 80C — Tax Saving Masterstroke 🎯",
    scene: "Priya tells Arjun about Section 80C — investments/expenses up to ₹1.5 lakh are tax-free! PPF, ELSS, life insurance, home loan principal — all come under 80C. For Arjun, this is a goldmine.",
    dialogue: "With Section 80C, save tax on investments/expenses up to ₹1.5 lakh! PPF, ELSS mutual fund, life insurance premium, children's tuition fee — everything counts. If you invest ₹1.5 lakh in ELSS, tax saving = ₹30,000+! Investment too, tax saving too!",
    speaker: "Priya",
    lesson: "Section 80C = Tax deduction up to ₹1.5 lakh. Best options: ELSS (3-year lock-in, 12%+ returns), PPF (15 years, tax-free returns), NPS (retirement focus). ELSS is best for young investors — shorter lock-in, good returns, tax savings.",
    emoji: "🎯",
    choice: {
      id: "m7-ch3-c1",
      text: "I'll invest in ELSS — save tax and get returns too! 💰",
      isCorrect: true,
      feedback: "Smart choice! ELSS = double benefit of tax saving + wealth creation. Invest ₹1.5 lakh = ₹30,000+ tax saved + 12% long-term returns. The smartest tax-saving investment for young Indians!"
    },
    xpReward: 20
  }, {
    id: "m7-ch4",
    chapterNumber: 4,
    title: "First ITR — Was It This Easy?! 🤯",
    scene: "Arjun is filing ITR for the first time. Logged into the Income Tax portal, uploaded Form 16, declared deductions, and — done! Finished in 15 minutes. Was it this easy? Arjun thought he'd need a CA.",
    dialogue: "That's it?! Done in 15 minutes?! Form 16 auto-filled everything, added Section 80C, entered bank details, and verified! This is easier than Instagram! I was so scared of tax filing earlier — it was all drama!",
    speaker: "Arjun",
    lesson: "ITR filing is easy — Form 16 provides the details, the portal has a step-by-step guide. People with salary income can file themselves. Last date: July 31. File on time — late filing penalty can be up to ₹5,000.",
    emoji: "🤯",
    xpReward: 15
  }, {
    id: "m7-ch5",
    chapterNumber: 5,
    title: "₹18,000 Saved! 💸",
    scene: "2 months later — ₹18,000 was credited to Arjun's bank account. Tax refund! He had invested in ELSS under Section 80C, and filed ITR to claim the refund. The money came back — legally!",
    dialogue: "₹18,000 refund! This is like a bonus! Saved tax by investing, and now the refund has also come. Earlier I was scared of paying tax, now tax planning saves money. Smart tax planning = extra income, without overtime!",
    speaker: "Arjun",
    lesson: "Tax planning can save ₹18,000+ legally! Use Section 80C (₹1.5L), 80D (health insurance ₹25K), HRA exemption — use everything. File ITR on time, claim the refund. Tax saved = Money earned!",
    emoji: "💸",
    xpReward: 15
  }]
},
// ============================================================
// MODULE 8: "The Armor of Insurance" (Insurance)
// Story: "Darkness and Umbrella"
// ============================================================
{
  moduleId: 8,
  storyTitle: "Darkness and Umbrella",
  storySubtitle: "Insurance — the umbrella before the rain",
  characterEmoji: "☂️",
  settingDescription: "Arjun's friend Rohit was injured in a bike accident — hospital bill ₹2,50,000. No insurance. The family took loans. This incident became a big lesson for Arjun — it's essential to buy an umbrella before the darkness comes.",
  chapters: [{
    id: "m8-ch1",
    chapterNumber: 1,
    title: "Hospital Bill — ₹2,50,000 💔",
    scene: "Arjun goes to the hospital to meet his friend Rohit. Rohit's father is sitting in the corridor — red eyes, trembling hands. The bill is ₹2,50,000 — surgery, ICU, medicines. No insurance. They're borrowing from relatives.",
    dialogue: "Rohit's accident was so sudden — and the hospital bill so big. They didn't have insurance, now the whole family is burdened with debt. Seeing this is scary... I don't have any insurance either. What if something happens to me?",
    speaker: "Arjun",
    lesson: "Without insurance, a single medical emergency can financially ruin an entire family. A ₹2,50,000 bill eats up 1-2 years of savings for an average Indian family. Insurance isn't a luxury — it's a necessity.",
    emoji: "🏥",
    choice: {
      id: "m8-ch1-c1",
      text: "Insurance is for rich people, I don't need it 🤷",
      isCorrect: false,
      feedback: "Wrong! Insurance isn't for the rich, it's most essential for the middle class. Rich people can pay the bill, middle class can't. Insurance is truly for those who can't afford the bill — like us!"
    },
    xpReward: 10
  }, {
    id: "m8-ch2",
    chapterNumber: 2,
    title: "Buy the Umbrella Before the Rain ☂️",
    scene: "Priya explains a simple insurance analogy to Arjun — umbrella. What's the use of buying an umbrella after it starts raining? Insurance is the same — what's the point of buying after you get sick? Buy it before, use it when needed.",
    dialogue: "Arjun, insurance is like an umbrella — buy it before the rain starts. Until you need it, it feels like money is being wasted. But when the rain comes, you understand the value of that umbrella. Premium = small expense, big protection.",
    speaker: "Priya",
    lesson: "Insurance premium = small regular payment against big risk. A ₹500-1,000/month premium gives ₹5-10 lakh coverage. This isn't an expense, it's protection. Until you need it, it feels useless — but when you need it, it's a life-saver.",
    emoji: "☂️",
    xpReward: 15
  }, {
    id: "m8-ch3",
    chapterNumber: 3,
    title: "Health Insurance vs Life Insurance 🤔",
    scene: "Arjun is confused — needs health insurance too, and life insurance too? What's the difference between the two? Priya explains — health insurance is for hospital bills, life insurance is for the family (if something happens to you).",
    dialogue: "Simple — Health Insurance = for your treatment, Life Insurance = for your family. Health covers hospital bills, Life gives financial support to your family if you're no longer there. Both are different, both are necessary. Health first, then life — follow this order.",
    speaker: "Priya",
    lesson: "Health Insurance: covers hospital bills, surgery, ICU. Premium ₹500-1,500/month, coverage ₹5-10 lakh. Life Insurance: financial support to family if you're no longer there. Term plan is best — ₹500-1,000/month, coverage ₹50 lakh-1 crore. Both are needed, don't mix them up!",
    emoji: "🤔",
    choice: {
      id: "m8-ch3-c1",
      text: "Health insurance first, then term life insurance — the right order! ✅",
      isCorrect: true,
      feedback: "Absolutely correct! Health insurance first because medical emergencies are more common in young people. Term life is also necessary if there are dependents. Get separate plans — combo plans are expensive and confusing."
    },
    xpReward: 15
  }, {
    id: "m8-ch4",
    chapterNumber: 4,
    title: "First Health Insurance — ₹500/Month 🏥",
    scene: "Arjun bought his first health insurance — ₹5 lakh coverage, ₹500/month premium. Cashless treatment at 5000+ hospitals. No room rent limit. Pre-existing diseases covered after 4 years. Feeling relieved.",
    dialogue: "₹500/month — that's just the cost of two cups of tea! And in return ₹5 lakh protection? This is a no-brainer! Now if anything happens, there's no tension about hospital bills. Cashless treatment — treatment first, money later!",
    speaker: "Arjun",
    lesson: "₹500/month health insurance = ₹5 lakh+ coverage. Look for features: Cashless network, no room rent capping, restore benefit, no co-pay. Premium is low at a young age — the earlier you buy, the cheaper it gets. Don't wait!",
    emoji: "🏥",
    xpReward: 15
  }, {
    id: "m8-ch5",
    chapterNumber: 5,
    title: "Peace of Mind — No More Tension! 😌",
    scene: "6 months later — Arjun got dengue. 3 days in the hospital — bill ₹35,000. But Arjun used cashless insurance. Zero payment from pocket. Treatment done, recovered, and didn't borrow a single rupee. Insurance saved him.",
    dialogue: "What happened with Rohit — ₹2,50,000 bill, loans, tension — didn't happen with me. Insurance paid the bill, cashless! Now I understand — insurance isn't a premium, it's the price of peace of mind. So much tension gone for ₹500/month — best deal ever!",
    speaker: "Arjun",
    lesson: "Insurance = Peace of mind. Medical emergencies don't ask permission — but you can be prepared. Health + Life insurance both are necessary. Buy at a young age = lower premium + more coverage. This isn't an expense, it's an investment in your safety.",
    emoji: "😌",
    xpReward: 20
  }]
},
// ============================================================
// MODULE 9: "Digital Payments & UPI" (Digital Finance)
// Story: "Phone Payment"
// ============================================================
{
  moduleId: 9,
  storyTitle: "Phone Payment",
  storySubtitle: "UPI convenience and safety rules",
  characterEmoji: "📱",
  settingDescription: "Arjun sent money to the wrong number via UPI — ₹2,000 vanished! Now he needs to learn digital payment safety rules, otherwise every transaction carries risk. Caution is necessary along with convenience.",
  chapters: [{
    id: "m9-ch1",
    chapterNumber: 1,
    title: "Wrong UPI ID — ₹2,000 Gone! 😱",
    scene: "Arjun had to send ₹2,000 to a friend. In a hurry, he typed the wrong UPI ID — one letter was missed. Payment went through — 'Success'! But the money didn't go to his friend, it went to some unknown person. Now it's difficult to get it back.",
    dialogue: "Nooo! ₹2,000 went to the wrong number! One small typo and such a big loss! UPI is so fast that money vanishes in one click. What do I do now? This is a nightmare! Digital payment is easy but also risky!",
    speaker: "Arjun",
    lesson: "UPI payment is instant and irreversible — once it's gone, it's hard to get back. Check the UPI ID or number 2 times before every transaction. Send a ₹1 test payment first, then the big amount. Caution is necessary with speed.",
    emoji: "😱",
    choice: {
      id: "m9-ch1-c1",
    text: "UPI payment isn't safe — I'll use cash! 💵",
    isCorrect: false,
    feedback: "UPI is safe — wrong usage is risky! Cash can also be lost or stolen. Follow UPI safety rules: verify, send test amount, then pay. UPI is more traceable than cash."
  },
  xpReward: 10
}, {
  id: "m9-ch2",
  chapterNumber: 2,
  title: "UPI Safety Rules — Priya's Class 🛡️",
  scene: "Priya explains the golden rules of UPI safety to Arjun. Don't share your UPI PIN with anyone. Verify before scanning QR codes. Don't click on unknown links. Screen lock is essential. Arjun is taking notes on everything.",
  dialogue: "UPI's 5 golden rules: 1) Don't share PIN with anyone — NOT EVEN MOM, 2) Check the amount before scanning QR code, 3) Don't open unknown payment links, 4) Put screen lock on UPI app, 5) Verify the recipient's name twice before payment. Simple rules, powerful protection!",
  speaker: "Priya",
  lesson: "UPI Safety: Keep PIN secret, verify QR, avoid unknown links, use screen lock, verify recipient. Follow these 5 rules and UPI is the world's most convenient and safe payment method.",
  emoji: "🛡️",
  xpReward: 15
}, {
  id: "m9-ch3",
  chapterNumber: 3,
  title: "Digital Ledger — Record of Every Payment 📒",
  scene: "Arjun is looking at his UPI payment history on his phone — a record of every transaction. Date, time, amount, recipient — all details. This tracking was impossible with cash. Now with digital, everything is evidence.",
  dialogue: "This is amazing! Every payment from the last 3 months is recorded — ₹450 grocery, ₹200 tea, ₹1,500 rent. This was never possible with cash. The biggest benefit of digital payment — automatic tracking! Budgeting has become so easy!",
  speaker: "Arjun",
  lesson: "The hidden benefit of digital payments = automatic expense tracking. Every transaction is recorded — date, amount, recipient. Cash gives no receipt. With UPI, budgeting becomes accurate and easy. Make data-driven decisions!",
  emoji: "📒",
  xpReward: 15
}, {
  id: "m9-ch4",
  chapterNumber: 4,
  title: "OTP Scam — 'From the Bank!' 🚨",
  scene: "Arjun gets a call — 'Hello, I'm calling from Bank of India, your account will be suspended, share the OTP for verification.' It sounds professional. Arjun almost shared it — but remembered what Priya said.",
  dialogue: "STOP! Never share OTP with anyone — NEVER! The bank never asks for OTP — NEVER! This is a scam. If you get such a call, hang up, call the bank directly to verify. OTP = your money, don't give it to anyone!",
  speaker: "Pri",
  lesson: "A bank NEVER asks for OTP, PIN, or CVV on the phone. If someone is asking = SCAM. Sharing OTP = gifting your money. Report to: 1930 (national helpline) or cybercrime.gov.in. Remember: OTP = Only To Protect!",
  emoji: "🚨",
  choice: {
  id: "m9-ch4-c1",
  text: "I'll share the OTP — the call was from the bank! 😰",
  isCorrect: false,
  feedback: "FATAL MISTAKE! The bank NEVER asks for OTP on the phone. If a call asks for OTP = 100% scam. Share OTP = money gone. Stop, think, verify — call the bank yourself to check!"
  },
  xpReward: 20
}, {
  id: "m9-ch5",
  chapterNumber: 5,
  title: "Digital Finance Smart Guy 🤓",
  scene: "3 months later — Arjun has become the digital payments expert in his office. Colleagues ask him UPI-related questions. He even taught his brother — safety rules, right way to use, and tips to avoid scams.",
  dialogue: "Earlier I used to fall for scams, now I'm saving others! Digital finance is powerful — use it right. Never share OTP, always verify the recipient, and keep a screenshot of every transaction. Smart digital citizen = smart financial life!",
  speaker: "Arjun",
  lesson: "Use the benefits of digital finance, but with safety. UPI is convenient, FASTag is easy, mobile banking saves time. But follow the rules: verify, protect PIN, avoid unknown links, report scams. Digital smart = financially smart!",
  emoji: "🤓",
  xpReward: 15
}]
},
// ============================================================
// MODULE 10: "Protection from Financial Scams" (Fraud Protection)
// Story: "The Scammer's Net"
// ============================================================
{
  moduleId: 10,
  storyTitle: "The Scammer's Net",
  storySubtitle: "Double your money? = Double SCAM!",
  characterEmoji: "🎭",
  settingDescription: "Arjun receives a message on WhatsApp — 'Invest ₹10,000, get ₹20,000 in 30 days!' He almost falls for it. But Priya's training and his awareness save him. Learning to identify scams is essential.",
  chapters: [{
  id: "m10-ch1",
  chapterNumber: 1,
  title: "WhatsApp Forward — '100% Guaranteed!' 📱",
  scene: "Arjun gets a message on WhatsApp from a school friend — a link to join a group. 'Invest ₹10,000, get ₹20,000 in 30 days! 100% guaranteed returns! Limited seats!' There are even payment screenshots — people are getting money. FOMO kicks in!",
  dialogue: "Look at this! ₹10,000 becoming ₹20,000 in one month! My school friend also joined and got the money! Limited seats — should I join now or not? I'm getting FOMO... does this really work?",
  speaker: "Arjun",
  lesson: "If any scheme is giving 'guaranteed' double returns — it's a SCAM. Even the stock market doesn't guarantee returns. Neither does FD. Who does? The scammer! Guaranteed high returns = Guaranteed fraud. Period.",
  emoji: "📱",
  choice: {
  id: "m10-ch1-c1",
  text: "My friend got the money — so it's safe! Join now! 🏃‍♂️",
  isCorrect: false,
  feedback: "Ponzi schemes pay the early members — that's the trap! That money comes from new investors' money. When new members stop, the whole scheme collapses. Early returns = bait, not proof!"
  },
  xpReward: 10
}, {
  id: "m10-ch2",
  chapterNumber: 2,
  title: "Priya Stopped Me — Just in Time! 🛑",
  scene: "Arjun was about to click the link — just then Priya called. She had seen his WhatsApp status where he shared the scheme. Priya gave a strict warning — 'STOP! This is a SCAM!'",
  dialogue: "Arjun, STOP! This is a Ponzi scheme! They pay early members to build trust, then when enough people invest, they run away with all the money. Your friend is getting returns because the scheme is still running — it will take time to collapse. Save yourself!",
  speaker: "Priya",
  lesson: "Ponzi scheme: New investors' money is paid to old investors. When new investors stop, the scheme collapses. Early investors getting returns looks like proof. But it's a trap, not trust.",
  emoji: "🛑",
  xpReward: 15
}, {
  id: "m10-ch3",
  chapterNumber: 3,
  title: "If It's So Good, Why Isn't Everyone Rich? 🤨",
  scene: "Priya teaches Arjun a simple logical test — 'If any scheme is so profitable, why is it telling common people? Bank officials, fund managers, financial advisors — all are experts. If 100% return was possible, they would invest themselves, not forward on WhatsApp!'",
  dialogue: "Arjun, a simple test — if any investment gives 100% guaranteed returns, why share it on WhatsApp? They'd become rich themselves! Even Warren Buffett makes 20-25% returns in a year — and this random person is giving 100% guarantee? Think logically, not emotionally!",
  speaker: "Priya",
  lesson: "Logical test for scams: If the scheme is really that profitable, then 1) Banks would invest themselves, 2) Financial experts would know, 3) They wouldn't forward on WhatsApp. High return + Low risk = SCAM. Always. No exceptions.",
  emoji: "🤨",
  choice: {
  id: "m10-ch3-c1",
  text: "Well said — if it were that easy, everyone would be rich! Logic check ✅",
  isCorrect: true,
  feedback: "Bingo! That's the most powerful scam-detector — common sense. Take one second with any 'easy money' scheme: if it were that easy, everyone would be doing it. If it seems too good to be true — it's a SCAM!"
  },
  xpReward: 15
}, {
  id: "m10-ch4",
  chapterNumber: 4,
  title: "Encyclopedia of Common Scams 📚",
  scene: "Priya shows Arjun a list of common financial scams in India — Ponzi schemes, phishing emails, fake apps, job frauds, lottery scams, KYC frauds. She explains the modus operandi of each scam. Arjun is shocked — there are so many ways to cheat people!",
  dialogue: "Look at this Arjun — Phishing: stealing details through fake bank emails. Fake apps: duplicate banking apps on Play Store. Job fraud: asking registration fees in the name of a job. KYC fraud: 'Account will be blocked, update KYC' message. Lottery: 'You won ₹10 lakh!' All are scams — any unsolicited offer = DANGER!",
  speaker: "Priya",
  lesson: "Common scams: 1) Ponzi/chain schemes, 2) Phishing emails/SMS, 3) Fake banking apps, 4) Job fraud (asking fees), 5) KYC update fraud, 6) Lottery/prize scams, 7) Investment seminar fraud. Any 'free' or 'guaranteed' offer = red flag!",
  emoji: "📚",
  xpReward: 20
}, {
  id: "m10-ch5",
  chapterNumber: 5,
  title: "Golden Rules — Too Good To Be True = SCAM 🏆",
  scene: "Arjun spreads scam awareness in his friend circle. He has finalized 5 golden rules — that will always keep him safe. And his school friend who got into the scheme — his money was lost. The scheme collapsed in 2 months.",
  dialogue: "5 Golden Rules: 1) Too good to be true = SCAM, 2) Guaranteed high return = fraud, 3) WhatsApp/Telegram investment group = trap, 4) KYC update link = phishing, 5) Hurry/limited time = pressure tactic. And yes — my friend who invested ₹50,000... all lost. The scheme shut down. I was saved only because of Priya!",
  speaker: "Arjun",
  lesson: "5 Scam Protection Rules: 1) If it seems too good to be true, it's a SCAM, 2) There are no guaranteed returns in investing, 3) Ignore unsolicited offers, 4) Never share personal details, 5) Verify — through official website or helpline. Share these rules, save others!",
  emoji: "🏆",
  xpReward: 20
}]
},
// ============================================================
// MODULE 11: "The Path to Financial Freedom" (Financial Freedom)
// Story: "The Dream of Freedom"
// ============================================================
{
  moduleId: 11,
  storyTitle: "The Dream of Freedom",
  storySubtitle: "5-year journey — from ₹20,000 to financial freedom",
  characterEmoji: "🌅",
  settingDescription: "5 years later — Arjun is 27. ₹5 lakh invested, emergency fund ready, no debt, insured, and getting passive income from investments. This isn't the same Arjun who was standing with ₹47 — this is the new Arjun. Confident. Free. Ready to help others.",
  chapters: [{
  id: "m11-ch1",
  chapterNumber: 1,
  title: "Arjun At 27 — ₹5 Lakh Invested! 🏔️",
  scene: "Arjun is looking at his portfolio dashboard — Mutual Funds: ₹3,80,000, PPF: ₹1,20,000, Emergency Fund: ₹90,000, Insurance: Active. Total invested: ₹5,00,000+. No debt. No EMI. This was impossible to imagine 5 years ago.",
  dialogue: "₹5 lakh invested! When the first salary was ₹20,000 and I was standing with ₹47 in front of the ATM, even thinking about this was impossible. But one ₹1,000 SIP at a time, one smart choice at a time, and 5 years of discipline — made all this possible. The power of starting early!",
  speaker: "Arjun",
  lesson: "5 years of consistent investing + discipline = significant wealth. ₹5 lakh invested at 27 means by 47, compounding can make it ₹50 lakh+ at 12%. The best time to start was 5 years ago, the second best time is NOW.",
  emoji: "🏔️",
  xpReward: 10
}, {
  id: "m11-ch2",
  chapterNumber: 2,
  title: "Salary ₹45,000 — But Lifestyle Didn't Increase 🧠",
  scene: "Arjun's salary is now ₹45,000 — double what it was before. But his lifestyle hasn't increased much from the ₹20,000 days. He has controlled lifestyle inflation — the extra salary goes to investing, not shopping.",
  dialogue: "Salary went from ₹20,000 to ₹45,000, but my monthly expense only increased from ₹15,000 to ₹18,000. All the extra money goes to investing. Lifestyle inflation is the most silent enemy — when salary increases, it's easy to increase spending too. But I controlled it. Smart, not show-off!",
  speaker: "Arjun",
  lesson: "Lifestyle inflation = increasing spending when salary increases. This is a wealth killer! Smart rule: when salary increases, put 50% extra into investing, allow only 50% for lifestyle. Rich people stay rich because they spend less than they earn — consistently.",
  emoji: "🧠",
  choice: {
  id: "m11-ch2-c1",
  text: "Salary increased, so lifestyle upgrade is natural! 🛋️",
  isCorrect: false,
  feedback: "It's natural, but not smart! Lifestyle inflation eats wealth. ₹10,000 salary increase = ₹5,000 to investing, ₹5,000 to lifestyle. This 50-50 rule builds wealth. Full lifestyle upgrade = wealth destruction."
  },
  xpReward: 15
}, {
  id: "m11-ch3",
  chapterNumber: 3,
  title: "Passive Income — Money Working By Itself 💰",
  scene: "Arjun is looking at his monthly statement — ₹4,500 dividend/capital gain from mutual funds, ₹9,000/year PPF interest, some FD interest. Total passive income: approximately ₹5,000-6,000/month. This money is coming without any work!",
  dialogue: "₹5,000-6,000 per month passive income — and I didn't do any extra work for it! Just invested money in the right place and gave it time. This is the real magic of compounding — you sleep, the money works. This is what financial freedom means!",
  speaker: "Arjun",
  lesson: "Passive income = money coming without active work. Investments, dividends, interest, rental income — all are passive income. When passive income = monthly expenses, you achieve financial freedom. Target: ₹50,000/month passive income = early retirement possible!",
  emoji: "💰",
  xpReward: 15
}, {
  id: "m11-ch4",
  chapterNumber: 4,
  title: "Teaching Younger Brother 🎓",
  scene: "Arjun's 18-year-old younger brother Kabir is about to go to college. Arjun teaches him everything — what he learned in 5 years. Budgeting, savings, investing, insurance, avoiding scams — a complete guide. Kabir is impressed and ready to start smart.",
  dialogue: "Kabir, at 22 I didn't know any of this — I thought credit card was free money, savings account was the best investment, and standing with ₹47 was normal. I'm telling you all this at 18 — by the time you're 22, you'll be 4 years ahead of me. Start early, win big!",
  speaker: "Arjun",
  lesson: "Share what you've learned — spread financial literacy. Teach your siblings, friends, family. In India, financial literacy is only 27% — this needs to increase. If one person learns and teaches 10, it becomes a movement.",
  emoji: "🎓",
  choice: {
  id: "m11-ch4-c1",
  text: "Sharing financial literacy — this is the greatest charity! ❤️",
  isCorrect: true,
  feedback: "Well said! Financial literacy is the most impactful knowledge — it changes one person's life. Those who know should share — that's the greatest service. This is the mission of Money Matters too!"
  },
  xpReward: 15
}, {
  id: "m11-ch5",
  chapterNumber: 5,
  title: "Financial Freedom ≠ Stop Working 💼",
  scene: "Arjun is still working — but now by choice, not compulsion. He enjoys his work because there's no financial pressure. Emergency fund is there, investments are there, insurance is there — now work is for passion, not survival.",
  dialogue: "People think financial freedom means retirement — wrong! Freedom means having a choice. I still work because I like my work. But now there's no boss's pressure, no fear of EMIs, no tension of emergencies. This is real freedom — the choice to work, not compulsion!",
  speaker: "Arjun",
  lesson: "Financial freedom ≠ retirement. Freedom = choice. When you have a financial cushion, you can choose your job, negotiate, take risks. Don't stop working — getting the CHOICE to work is financial freedom.",
  emoji: "💼",
  xpReward: 15
}, {
  id: "m11-ch6",
  chapterNumber: 6,
  title: "You Can Reach Here Too — Just Start! 🚀",
  scene: "Arjun is looking at his journey timeline — 22 years old: ₹47 balance, no savings, no insurance. 27 years old: ₹5 lakh invested, emergency fund, no debt, insured, passive income. A 5-year journey that anyone can do. Final message — start, now!",
  dialogue: "5 years ago I was crying in front of the ATM with ₹47. Today ₹5 lakh is invested, passive income is coming, and the path to financial freedom is visible. This isn't a miracle — it's discipline, consistency, and the courage to 'start'. You can reach here too. Just... START!",
  speaker: "Arjun",
  lesson: "Arjun's journey can be yours too. Start — even with ₹500. Make a budget, start SIP, get insurance, avoid scams. Every big journey starts with a small step. Today = the day to start. ₹0 to ₹5 lakh is possible in 5 years with discipline. Your journey starts NOW! 🚀",
  emoji: "🚀",
  xpReward: 25
}]
}];
