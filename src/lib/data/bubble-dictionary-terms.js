export const bubbleDictionaryTerms = [{
  id: "sip",
  term: "SIP",
  category: "Basic",
  emoji: "💸",
  seedhiBaat: "Systematic Investment Plan — investing a fixed amount every month in a mutual fund. Money is invested bit by bit, the market will go up and down but your average cost will reduce over time.",
  realLife: "Ramesh invests ₹5,000 SIP on the 5th of every month for 10 years. At 12% return, it becomes an ₹11.6 lakh fund — he only invested ₹6 lakh total, the rest is all compound interest magic!",
  quiz: {
    q: "What is the biggest advantage of SIP?",
    options: ["Guaranteed double return", "Rupee cost averaging + discipline", "Tax free 100%"],
    answer: 1
  }
}, {
  id: "emi",
  term: "EMI",
  category: "Basic",
  emoji: "📅",
  seedhiBaat: "Equated Monthly Installment — repaying a loan in equal monthly parts. Both principal and interest are mixed together.",
  realLife: "A ₹5 lakh personal loan for 5 years at 14% — EMI comes to ₹11,634. Total payment is ₹6.98 lakh, meaning ₹1.98 lakh is just interest!",
  quiz: {
    q: "What is higher at the beginning of an EMI?",
    options: ["Principal", "Interest", "Both equal"],
    answer: 1
  }
}, {
  id: "inflation",
  term: "Inflation",
  category: "Basic",
  emoji: "📈",
  seedhiBaat: "Rising prices of goods — you get less for the same ₹100. India's average inflation is around 6%.",
  realLife: "20 years ago, 1 litre of milk cost ₹18, today it costs ₹60. If your money earns 5% in FD and inflation is 6%, you are actually losing money!",
  quiz: {
    q: "What is real return?",
    options: ["FD rate", "FD rate minus inflation", "Inflation minus FD rate"],
    answer: 1
  }
}, {
  id: "cibil",
  term: "CIBIL",
  category: "Intermediate",
  emoji: "📊",
  seedhiBaat: "Credit score agency — gives a score between 300 and 900. 750+ is considered good for getting a loan.",
  realLife: "Priya has a CIBIL of 810 — she got a home loan at 8.4%. Rohan got the same loan at 9.6% because his score was 680. That is a ₹14 lakh difference over 30 years!",
  quiz: {
    q: "What is a good CIBIL score?",
    options: ["300-500", "550-700", "750+"],
    answer: 2
  }
}, {
  id: "ppf",
  term: "PPF",
  category: "Intermediate",
  emoji: "🏦",
  seedhiBaat: "Public Provident Fund — a 15-year government scheme with 7.1% tax-free return. Maximum ₹1.5 lakh per year, plus 80C tax benefit.",
  realLife: "Ankit starts filling ₹1.5L/year PPF from age 25. In 15 years he invested ₹22.5L total, but at maturity he gets around ₹40L — all tax-free!",
  quiz: {
    q: "What is the lock-in period of PPF?",
    options: ["5 years", "15 years", "No lock-in"],
    answer: 1
  }
}, {
  id: "nps",
  term: "NPS",
  category: "Intermediate",
  emoji: "👴",
  seedhiBaat: "National Pension System — long-term investment for retirement. Locked until age 60, after that 60% lumpsum + 40% annuity.",
  realLife: "Meena has been investing ₹50K/year in NPS since age 30. By age 60 she builds a corpus of about ₹1.3 crore. Plus she saves extra ₹50K tax under 80CCD(1B)!",
  quiz: {
    q: "How much extra tax benefit do you get with NPS?",
    options: ["₹50,000 (80CCD 1B)", "₹1,50,000", "Nothing"],
    answer: 0
  }
}, {
  id: "mf",
  term: "Mutual Fund",
  category: "Basic",
  emoji: "🧺",
  seedhiBaat: "Money from multiple investors is collected into a fund and a professional manager invests it in stocks and bonds. You get both diversification and expert management.",
  realLife: "You can start a Nifty 50 Index Fund with just ₹500 per month. You get ownership of 50 top companies in small portions — Reliance, HDFC, TCS all together!",
  quiz: {
    q: "What is the biggest advantage of a Mutual Fund?",
    options: ["Guaranteed return", "Diversification + professional management", "Tax free"],
    answer: 1
  }
}, {
  id: "fd",
  term: "FD",
  category: "Basic",
  emoji: "🔒",
  seedhiBaat: "Fixed Deposit — giving money to a bank for a fixed time period to earn higher interest than savings. Typically 7 to 7.5%.",
  realLife: "₹1L in SBI for 5 years at 7% = you get ₹1.4L. But if inflation is 6%, the real value is only ₹1.05L — barely beating inflation!",
  quiz: {
    q: "What is the biggest drawback of FD?",
    options: ["It has risk", "Cannot beat inflation", "No liquidity"],
    answer: 1
  }
}, {
  id: "rd",
  term: "RD",
  category: "Basic",
  emoji: "🔁",
  seedhiBaat: "Recurring Deposit — depositing a fixed amount every month, and receiving the maturity amount after a fixed tenure.",
  realLife: "₹5,000 per month for 3 years RD at 6.5% = you invest ₹1.8L total and get ₹1.97L. Perfect for small goals — phone, vacation, etc.",
  quiz: {
    q: "What is the difference between RD and SIP?",
    options: ["RD gives fixed return, SIP is market-linked", "No difference", "SIP is safer"],
    answer: 0
  }
}, {
  id: "epf",
  term: "EPF",
  category: "Intermediate",
  emoji: "💼",
  seedhiBaat: "Employee Provident Fund — 12% from employee salary + 12% from employer (in private jobs). 8.25% interest, locked until retirement.",
  realLife: "With ₹30,000 basic salary, ₹3,600 + ₹3,600 = ₹7,200 per month goes into EPF. Working for 30 years builds a retirement fund of around ₹1.3 crore!",
  quiz: {
    q: "How much percent does the employer contribute to EPF?",
    options: ["12%", "8%", "Nothing"],
    answer: 0
  }
}, {
  id: "ulip",
  term: "ULIP",
  category: "Advanced",
  emoji: "🛡️",
  seedhiBaat: "Unit Linked Insurance Plan — a mix of insurance and investment. A part of the premium goes to insurance, the rest is invested in the market. Generally costly and complex.",
  realLife: "Out of ₹50K ULIP premium, ₹5K goes to insurance mortality charge, ₹5K to fund management, and only ₹40K is invested. If you buy a term plan and mutual fund separately, only ₹47K actually gets invested!",
  quiz: {
    q: "What is the biggest drawback of ULIP?",
    options: ["High charges", "Low return", "No insurance"],
    answer: 0
  }
}, {
  id: "term",
  term: "Term Plan",
  category: "Intermediate",
  emoji: "🪪",
  seedhiBaat: "Pure life insurance — if the policyholder passes away, the family gets a lumpsum. Very cheap, but no payout if you survive.",
  realLife: "At age 30, the premium for a ₹1 crore term plan is just ₹12,000 per year! The same cover in ULIP costs ₹50,000+. Savings = invest ₹38K per year!",
  quiz: {
    q: "What do you get at maturity in a term plan?",
    options: ["Money back", "Nothing", "Double"],
    answer: 1
  }
}, {
  id: "elss",
  term: "ELSS",
  category: "Intermediate",
  emoji: "📉",
  seedhiBaat: "Equity Linked Saving Scheme — a tax-saving mutual fund, exempt up to ₹1.5L under 80C. Has a 3-year lock-in (shortest among 80C options).",
  realLife: "Invest ₹1.5L in ELSS and save ₹46,800 in tax (30% slab). You can withdraw after 3 years. At 12% return, ₹1.5L becomes ₹2.1L in 3 years!",
  quiz: {
    q: "What is the lock-in period for ELSS?",
    options: ["3 years", "5 years", "15 years"],
    answer: 0
  }
}, {
  id: "capgain",
  term: "Capital Gains",
  category: "Advanced",
  emoji: "💰",
  seedhiBaat: "Profit from selling an asset (stocks, MF, property) is a capital gain. Short-term (less than 12 months) and long-term have different tax rates.",
  realLife: "If you hold stocks for more than 1 year, LTCG is 12.5% (₹1.25L exemption). Short-term is 20%. On ₹5L profit, long-term means ₹0 tax (after exemption)!",
  quiz: {
    q: "What is the exemption limit for equity LTCG?",
    options: ["₹1.25 lakh per year", "₹50,000", "None"],
    answer: 0
  }
}, {
  id: "diversification",
  term: "Diversification",
  category: "Intermediate",
  emoji: "🌈",
  seedhiBaat: "Spreading your money across different assets — equity, debt, gold, real estate. If one falls, another can cushion the blow.",
  realLife: "Sirus portfolio: 60% equity, 25% debt, 10% gold, 5% cash. During the 2008 crash, he lost only -22% vs -55% for pure equity. His risk is much lower!",
  quiz: {
    q: "What does diversification mean?",
    options: ["Put all money in one stock", "Spread money across different assets", "Only FD"],
    answer: 1
  }
}, {
  id: "compound",
  term: "Compounding",
  category: "Basic",
  emoji: "✨",
  seedhiBaat: "Interest on interest — money making money, and then earning interest on that again. The 8th wonder of the world!",
  realLife: "₹1L at 12% for 30 years = ₹29.96L (30x!). The same for 10 years = ₹3.10L. Time is compounding's best friend!",
  quiz: {
    q: "What is the biggest helper of compounding?",
    options: ["Time", "Luck", "High fees"],
    answer: 0
  }
}, {
  id: "asset",
  term: "Asset Allocation",
  category: "Advanced",
  emoji: "⚖️",
  seedhiBaat: "How to divide your money among equity, debt, gold, and cash — based on age and risk appetite. 100 minus age = equity percentage (basic rule).",
  realLife: "At age 30, go for 70% equity, 25% debt, 5% gold. At age 50, shift to 50% equity, 40% debt, 10% gold. Risk decreases as age increases.",
  quiz: {
    q: "What should decrease in asset allocation as you get older?",
    options: ["Debt", "Equity", "Gold"],
    answer: 1
  }
}, {
  id: "reit",
  term: "REIT",
  category: "Advanced",
  emoji: "🏢",
  seedhiBaat: "Real Estate Investment Trust — allows small investors to invest in commercial property. Earns dividend + appreciation.",
  realLife: "Embassy Office REIT is at ₹380. Invest ₹1L = 263 units. Dividend of ₹14 per unit = ₹3,682 per year passive income plus property value growth!",
  quiz: {
    q: "What does a REIT invest in?",
    options: ["Stocks", "Commercial real estate", "Gold"],
    answer: 1
  }
}, {
  id: "ipo",
  term: "IPO",
  category: "Intermediate",
  emoji: "🚀",
  seedhiBaat: "Initial Public Offering — a company sells its shares to the public for the first time. After listing, it trades on the stock exchange.",
  realLife: "Zomato IPO listed at ₹76, opening day was +66% = ₹125! But not all IPOs are winners — Paytm listed at ₹2,150 and fell to ₹1,500. There is risk involved.",
  quiz: {
    q: "What is the full form of IPO?",
    options: ["Initial Public Offering", "Indian Private Order", "Internal Profit Option"],
    answer: 0
  }
}, {
  id: "demat",
  term: "Demat",
  category: "Basic",
  emoji: "📱",
  seedhiBaat: "Dematerialized account — an account to hold shares in electronic form. You can open one with Zerodha, Groww, Upstox, etc.",
  realLife: "Demat + trading account opens for ₹0 (with most brokers). AMC is around ₹300-500 per year. Stocks, MFs, bonds — all in one place!",
  quiz: {
    q: "What does a Demat account hold?",
    options: ["Cash only", "Shares electronically", "Gold"],
    answer: 1
  }
}, {
  id: "gst",
  term: "GST",
  category: "Intermediate",
  emoji: "🧾",
  seedhiBaat: "Goods and Services Tax — has slabs of 5%, 12%, 18%, and 28%. Applies to most goods and services. It is an indirect tax.",
  realLife: "Restaurant bill ₹1,000 + 5% GST = ₹50 extra. Mobile phone has 18% GST. Car has 28% + cess. GST is hidden in every expense!",
  quiz: {
    q: "What is the highest GST slab?",
    options: ["18%", "28%", "40%"],
    answer: 1
  }
}, {
  id: "liquid",
  term: "Liquid Fund",
  category: "Intermediate",
  emoji: "💧",
  seedhiBaat: "A debt fund that invests in short-term (1 to 3 months) treasury instruments. Offers slightly higher return than savings account with almost the same liquidity.",
  realLife: "Emergency fund of ₹3L in liquid fund at 6.5% = ₹19,500 per year. In savings account at 3.5% = ₹10,500. Extra ₹9K per year, with no risk!",
  quiz: {
    q: "Who is a liquid fund best suited for?",
    options: ["A 10-year goal", "Emergency fund", "Retirement"],
    answer: 1
  }
}, {
  id: "index",
  term: "Index Fund",
  category: "Basic",
  emoji: "📊",
  seedhiBaat: "A mutual fund that copies a stock index (Nifty 50, Sensex). Low fees (around 0.2%), and 80% of active funds cannot beat it in the long term.",
  realLife: "₹10K per month in Nifty 50 Index Fund for 20 years at 12% = ₹99 lakh! Expense ratio of 0.2% vs 1.5% for active funds — a difference of ₹15L over 20 years!",
  quiz: {
    q: "What is the biggest advantage of an index fund?",
    options: ["High return guarantee", "Low fees + market return", "No tax"],
    answer: 1
  }
}, {
  id: "emergency",
  term: "Emergency Fund",
  category: "Basic",
  emoji: "🆘",
  seedhiBaat: "Keep aside 3 to 6 months of expenses — for job loss, medical emergencies, or accidents. Keep it in a liquid fund or savings account.",
  realLife: "If your monthly expense is ₹40,000, you need ₹1.2 to 2.4L as an emergency fund. Without this, you end up selling mutual funds at market lows — a double loss!",
  quiz: {
    q: "How many months should an emergency fund cover?",
    options: ["1 month", "3 to 6 months", "10 years"],
    answer: 1
  }
}, {
  id: "lifestyle",
  term: "Lifestyle Inflation",
  category: "Intermediate",
  emoji: "🛍️",
  seedhiBaat: "Increasing expenses as income grows — new car, expensive phone, bigger house. The savings percentage stays the same.",
  realLife: "Salary went from ₹30K to ₹1L. Earlier he saved ₹5K, now he still saves only ₹10K (the extra ₹10K goes to phone EMI + Zomato + Uber). Real wealth is not being built!",
  quiz: {
    q: "How do you avoid lifestyle inflation?",
    options: ["Do not increase spending faster than salary growth", "Take more loans", "Change phone every year"],
    answer: 0
  }
}, {
  id: "dca",
  term: "Rupee Cost Averaging",
  category: "Advanced",
  emoji: "🎯",
  seedhiBaat: "In SIP, you invest a fixed amount every month — when the market is high, you get fewer units, when it is low, you get more units. Your average purchase cost goes down.",
  realLife: "₹10K SIP — at market high you get 100 units, at low you get 200 units. Average cost automatically reduces. Over 5 years, your cost is below market average 7 out of 10 times!",
  quiz: {
    q: "What happens in SIP when the market goes down?",
    options: ["Loss is guaranteed", "You get more units", "Nothing"],
    answer: 1
  }
}, {
  id: "riders",
  term: "Insurance Riders",
  category: "Advanced",
  emoji: "➕",
  seedhiBaat: "Extra add-ons on top of a base policy — critical illness, accident cover, waiver of premium. Adds affordable protection.",
  realLife: "Term plan of ₹1Cr at ₹12K premium. Add critical illness rider for ₹50L cover at +₹3,500 = total ₹15.5K. On cancer diagnosis, you get ₹50L lumpsum — your savings are protected!",
  quiz: {
    q: "What is a rider?",
    options: ["Extra coverage add-on", "Loan", "Discount"],
    answer: 0
  }
}, {
  id: "stepup",
  term: "Step-up SIP",
  category: "Intermediate",
  emoji: "⬆️",
  seedhiBaat: "Increase your SIP amount by 10% every year (as salary grows). The corpus grows 40 to 60% more in the same time period.",
  realLife: "₹10K SIP for 20 years at 12% = ₹99L. With 10% step-up = ₹1.7 crore! Just ₹1K extra in the first year, and it grows along with your salary.",
  quiz: {
    q: "What happens to the amount in a step-up SIP?",
    options: ["It stays fixed", "It increases every year", "It decreases"],
    answer: 1
  }
}];
