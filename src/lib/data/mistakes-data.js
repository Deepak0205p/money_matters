export const mistakeCategories = [{
  id: 'emi-trap',
  title: 'EMI Trap Shop',
  icon: 'ShoppingCart',
  color: '#ef4444',
  mistakes: [{
    id: 'emi-phone',
    title: 'Phone EMI — Small But Dangerous',
    costCalculation: '₹79,900 phone + 24-month EMI = ₹95,976 total. Processing fee ₹1,500 + GST ₹270. Extra paid: ₹17,846! If this went into a ₹3,999/month SIP, the corpus in 5 years would be ₹3,30,000+!',
    explanation: 'Buying a phone on EMI seems easy — "just ₹3,999/month!" But when you calculate the total cost, you realize you are paying ₹17,846 extra. And the biggest loss: if this money had gone into a SIP, it would have grown even more through compounding. Opportunity cost = ₹2,50,000+ over 10 years!',
    solution: 'Start saving ₹8,000/month three months before buying the phone — the money will be ready in 10 months! No EMI, no interest, no stress. Or buy a refurbished phone for ₹45,000 — same features, half the price!',
    relatedModule: 5
  }, {
    id: 'emi-laptop',
    title: 'Laptop EMI — Study Tool or Status Symbol?',
    costCalculation: '₹90,000 laptop on 12-month EMI = ₹8,500/month, total ₹1,02,000. Extra: ₹12,000! A ₹50,000 laptop is enough for coding — ₹40,000 wasted on over-spec.',
    explanation: 'A ₹50,000 laptop is sufficient for college or coding, but FOMO led to buying a ₹90,000 one. In the EMI cycle, ₹12,000 extra interest + opportunity cost. If coding is the goal, processor and RAM matter, not RGB lighting!',
    solution: 'Make a requirement list — coding, browsing, or gaming? Coding = ₹40-50K laptop. Gaming = a console is cheaper. Avoid EMI — start saving 2 months in advance and buy with cash!',
    relatedModule: 5
  }, {
    id: 'emi-furniture',
    title: 'Furniture EMI — The Trap of Furnishing a New Home',
    costCalculation: '₹1,50,000 furniture on 18-month EMI = ₹9,500/month, total ₹1,71,000. Extra: ₹21,000! The same furniture is available second-hand for ₹50,000 — savings of ₹1,21,000!',
    explanation: 'In the excitement of a new home, everything was bought new — sofa, bed, dining table, TV unit — all on EMI! But remember: furniture is a depreciating asset — value drops 50% in 3 years. EMI interest + depreciation = double loss!',
    solution: 'Start minimal — bed, basic kitchen items. Buy second-hand furniture from OLX/Quikr (50-70% off!). Gradually upgrade as savings grow. Renting furniture is also an option (Cityfurnish, Rentomojo) — ₹2,000/month!',
    relatedModule: 11
  }]
}, {
  id: 'credit-card-candy',
  title: 'Credit Card Candy Store',
  icon: 'CreditCard',
  color: '#f97316',
  mistakes: [{
    id: 'cc-min-payment',
    title: 'The Minimum Payment Trap',
    costCalculation: '₹50,000 outstanding, minimum 5% = ₹2,500/month. Interest 36% on remaining ₹47,500 = ₹1,425/month interest. You are only paying the interest! Full clearance takes 5+ YEARS and ₹60,000+ in extra interest!',
    explanation: 'Continuously making minimum payments = financial suicide. You are only covering the interest, and the principal barely decreases. On a ₹50,000 purchase, you will end up paying ₹1,10,000+ in total — double! Credit card companies offer the minimum option because their profit is your loss.',
    solution: 'Always pay the FULL amount — pay exactly what is on the statement. If you cannot afford it, stop using the credit card altogether! For emergencies, a personal loan (12-15%) is better than a credit card (36%).',
    relatedModule: 5
  }, {
    id: 'cc-reward-trap',
    title: 'Overspending for Reward Points',
    costCalculation: '₹10,000 extra spending for rewards — earned 500 points = ₹250 value. Net loss: ₹9,750! Reward return rate is only 2-5% — the loss from overspending far outweighs the reward benefit.',
    explanation: 'Credit card companies say "5x reward points on shopping!" — you spend ₹10,000 extra and get 500 points worth ₹250. This means you lost ₹9,750 for ₹250! Rewards are designed to make you spend MORE, not save.',
    solution: 'Earn rewards only on natural spending — not for extra expenses! You will get rewards on what you were going to spend anyway (bills, groceries). Instead of extra spending, use cashback apps.',
    relatedModule: 5
  }, {
    id: 'cc-cash-withdrawal',
    title: 'Withdrawing Cash Using a Credit Card',
    costCalculation: '₹10,000 cash withdrawal starts interest from Day 1 (no 45-day free period!) @ 36% + withdrawal fee 2.5% = ₹250. One month interest = ₹300. Total ₹10,550 for ₹10,000!',
    explanation: 'Withdrawing cash using a credit card is the biggest mistake — interest starts instantly (no grace period!), withdrawal fee 2.5-3%, and interest 36-40%! This is more expensive than a loan. Withdraw for free using a debit card at an ATM or take a personal loan in an emergency.',
    solution: 'NEVER withdraw cash using a credit card — it is the most expensive form of debt. In an emergency, use savings or borrow from family. For regular cash withdrawals, use a debit card — ATM transactions are free!',
    relatedModule: 5
  }]
}, {
  id: 'subscription-sink',
  title: 'Subscription Sinkhole',
  icon: 'Repeat',
  color: '#a855f7',
  mistakes: [{
    id: 'sub-multiple-streaming',
    title: '5 Streaming Services — But Time Only for One',
    costCalculation: 'Netflix ₹649 + Amazon Prime ₹1,499/year + Disney+ ₹299 + Spotify ₹119 + YouTube Premium ₹149 = ₹1,615/month = ₹19,380/year! If you keep only 2, savings of ₹8,000/year!',
    explanation: 'All subscriptions are active but only 1-2 are actually used! Kept with the thought "maybe I will watch it." Every service auto-renews — miss a notification and money gets deducted. ₹19,000/year for 2 years = ₹38,000 — that is the interest on a fixed deposit!',
    solution: 'Use rotating subscriptions — Netflix one month, Amazon the next. Cancel and re-subscribe as needed. Share a family plan with a friend. Check free alternatives — YouTube, MX Player, free podcasts.',
    relatedModule: 2
  }, {
    id: 'sub-gym-unused',
    title: 'Gym Membership That Was Never Used',
    costCalculation: '₹3,000/month × 12 = ₹36,000/year. Actual visits: 8 times = ₹4,500 per visit! Exercising at home = free. Running in the park = free. Savings of ₹36,000!',
    explanation: 'Joined the gym in January with "new year, new resolution" enthusiasm — motivation gone by February! But the membership is active, auto-renewal is ON. ₹3,000/month is being silently deducted. Actually went only 8 times = ₹4,500 per visit — the most expensive workout ever!',
    solution: 'Work out at home for the first 2 months (free YouTube videos) — once the habit is formed, join a gym. Use a pay-per-session model (₹100-200/session) or join a community center (₹500/month). No long-term commitment without proof of consistency!',
    relatedModule: 2
  }, {
    id: 'sub-app-trials',
    title: 'Free Trials That Became Paid',
    costCalculation: '5 app trials = ₹999 + ₹499 + ₹299 + ₹149 + ₹199 = ₹2,145/month × 6 months before you notice = ₹12,870 wasted! Notifications were off so you had no idea.',
    explanation: 'Signed up for a free trial — 7 days free, then auto-charge. Did not set a calendar reminder, missed the notification, and realized 6 months later that ₹12,870 has been deducted! This is very common — companies count on this.',
    solution: 'If you take a free trial, set a calendar reminder on the SAME DAY — cancel 1 day before. Use a virtual debit card (Rs.1 balance) — the auto-charge will fail! Cancel IMMEDIATELY after the trial — access remains until the trial period ends!',
    relatedModule: 2
  }]
}, {
  id: 'lifestyle-inflation',
  title: 'Lifestyle Inflation Lane',
  icon: 'TrendingUp',
  color: '#f59e0b',
  mistakes: [{
    id: 'lifestyle-salary-hike',
    title: 'Salary Increased, So Did Expenses',
    costCalculation: 'Salary ₹20K → ₹30K (+₹10K). But expenses also went from ₹20K → ₹28K! Actual savings increase: only ₹2,000. ₹8,000 went into lifestyle inflation — better clothes, better restaurant, better area rent.',
    explanation: 'The most common mistake after a salary increase: increasing expenses too! Thought "we can afford it now" and upgraded the lifestyle. But if expenses had stayed the same, ₹8,000 extra monthly savings = ₹96,000/year! A salary hike only benefits you when spending is under control.',
    solution: 'After a salary hike, FIRST put 50% of the extra income into savings — use the remaining 50% for lifestyle upgrades. Example: ₹10K extra = ₹5K savings + ₹5K lifestyle. Follow this rule and wealth builds silently!',
    relatedModule: 2
  }, {
    id: 'lifestyle-brand-upgrade',
    title: 'From Local to Branded — The Bank Balance Crash',
    costCalculation: 'Local t-shirt ₹500 → Branded ₹2,500 (5x). Local shoes ₹1,500 → Branded ₹8,000 (5x). Mess food ₹80 → Restaurant ₹500 (6x). Monthly extra: ₹5,000+ = ₹60,000/year gone on labels!',
    explanation: 'Earlier, local products were fine — now "status" demands branded ones. The problem: the quality difference is not 5x, but the price is! Brand tax = premium for the logo. A generic option with the same quality is available at half the price.',
    solution: 'Practice value-based spending — pay for quality, not for labels. Do comparison shopping. Ask yourself "Is this 5x better?" Some items are worth the premium (running shoes), most are not (an expensive t-shirt just for the logo).',
    relatedModule: 1
  }, {
    id: 'lifestyle-house-upgrade',
    title: 'From Small Flat to Big Flat — Rent Doubles!',
    costCalculation: '1RK ₹8,000 → 1BHK ₹15,000 = ₹7,000/month extra = ₹84,000/year! Plus deposit difference ₹30,000 + shifting cost ₹20,000. Total extra in year 1: ₹1,34,000! If this had gone into a SIP, the corpus would be ₹1,75,000+!',
    explanation: 'A 1RK is sufficient for a single person or couple — but moved to a 1BHK for "show." An extra room for guests who rarely come! ₹7,000/month extra rent = ₹84,000/year = approximately 4.5 years of equity SIP could have become ₹5,00,000+!',
    solution: 'ACTUALLY calculate your space requirements — how many people live here? How much stuff do you have? Try minimalism — fewer things, less space, more savings. Upgrade when there is an actual need (marriage, family) — not for show!',
    relatedModule: 11
  }]
}, {
  id: 'no-insurance',
  title: 'No Insurance Trap',
  icon: 'ShieldOff',
  color: '#6366f1',
  mistakes: [{
    id: 'no-health-insurance',
    title: 'The Fear of No Health Insurance',
    costCalculation: 'Dengue treatment: ₹1,50,000. Accident surgery: ₹3,00,000. ICU 5 days: ₹2,50,000. Without insurance = all savings gone + debt. Insurance premium: ₹5,000-7,000/year — 1% of the potential bill!',
    explanation: '"Nothing will happen to me" — this overconfidence is expensive. In India, 70% of healthcare is out-of-pocket. A single medical emergency wipes out all savings. Being young does not prevent illness — dengue, accidents, appendicitis can happen to anyone!',
    solution: 'Get health insurance TODAY — Rs.5,00,000 cover at age 25 = ₹5,000-7,000/year. Do not depend on corporate insurance — zero coverage when you change jobs! Personal insurance = personal protection.',
    relatedModule: 9
  }, {
    id: 'no-term-insurance',
    title: 'Thinking Term Insurance Is a "Waste"',
    costCalculation: 'If something happens, the family gets ₹1,00,00,000 (₹10,000/year premium). Without insurance: family in debt ₹20,00,000+ (home loan, expenses). Difference: ₹1.2 Crore vs ₹-20 Lakh = ₹1.4 Crore swing!',
    explanation: '"If I stay safe, the money is wasted" — this thinking is wrong. Term insurance is PROTECTION, not investment. If you have dependents (parents, spouse), it is ESSENTIAL for THEM. ₹10,000/year = ₹833/month = less than one restaurant meal! Family security for this much?',
    solution: 'If anyone depends on you — get term insurance! ₹1 Crore cover = ₹8,000-12,000/year. Online term plans are cheaper (HDFC Life, ICICI Pru). Early age = low premium locked for life! No dependents? Not now, get it later.',
    relatedModule: 9
  }, {
    id: 'wrong-insurance-ulip',
    title: 'Buying ULIP / Endowment Thinking "Everything Is Covered"',
    costCalculation: '₹50,000/year ULIP × 20 years = ₹10,00,000 invested. Expected return: ₹14,00,000 (6-7% CAGR). Same amount as Term (₹10K) + SIP (₹40K): Term cover ₹1Cr + SIP corpus ₹32,00,000+ (12% CAGR). Loss: ₹18,00,000+!',
    explanation: 'The agent said "insurance + investment = double benefit!" — but actually it is a double loss. ULIP has high charges (5-10%) and low returns (6-7%). Separate term insurance + SIP gives better coverage + better returns + more flexibility. Keep insurance and investing SEPARATE!',
    solution: 'Insurance = Term plan (cheap, pure protection). Investment = SIP/Mutual Funds (better returns, flexible). Never mix them! Avoid ULIP, endowment, money-back — all of them. The agent\'s commission is your loss!',
    relatedModule: 9
  }]
}];
