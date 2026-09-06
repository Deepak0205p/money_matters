export const termsDictionary = [
// ---- BASICS (new) ----
{
  id: 'income',
  term: 'Income',
  definition: 'Income is the money you earn — salary, business profit, rent, or any other earning. Income is of 2 types: Active income (you get it by working) and Passive income (it comes even without working).',
  example: 'Salary Rs.25,000/month = Active income. Rental property Rs.8,000/month = Passive income. Goal: passive income should be so much that working becomes optional!',
  category: 'basics',
  relatedModule: 1,
  mastered: false
}, {
  id: 'expense',
  term: 'Expense',
  definition: 'Expense is the money you spend. Fixed expenses (rent, EMI — always the same) and Variable expenses (food, entertainment — they keep going up and down). Tracking expenses is essential!',
  example: 'Fixed: Rent Rs.8,000 + EMI Rs.3,000 = Rs.11,000 (does not change). Variable: Groceries Rs.4,000, entertainment Rs.2,000 (you can cut these). You can save the most by reducing variable expenses!',
  category: 'basics',
  relatedModule: 2,
  mastered: false
}, {
  id: 'savings',
  term: 'Savings',
  definition: 'Savings = Income minus Expenses. The money that is left over is savings. Rule: "Pay yourself first" — save first, then spend the rest. Golden rule: save at least 20% of your income!',
  example: 'Income Rs.30,000 — if you save Rs.6,000 first (20%) and manage with Rs.24,000 = savings first approach. If you try to save later, most of the time nothing is left!',
  category: 'basics',
  relatedModule: 1,
  mastered: false
}, {
  id: 'investment',
  term: 'Investment',
  definition: 'Investment means putting your money somewhere so that it earns more money. Savings keep money safe, while investment makes money grow. The difference: the real value of savings decreases due to inflation!',
  example: 'Rs.1,00,000 in savings account @4% = Rs.1,48,000 after 10 years. Same amount in equity mutual fund @12% = Rs.3,10,000. Investment gave more than double!',
  category: 'basics',
  relatedModule: 7,
  mastered: false
}, {
  id: 'budget',
  term: 'Budget (50-30-20 Rule)',
  definition: '50-30-20 Rule: 50% of income for Needs (rent, food, bills), 30% for Wants (entertainment, shopping), 20% for Savings/Investment. This is the simplest budgeting framework — perfect for beginners!',
  example: 'Rs.40,000 salary: Rs.20,000 Needs (rent+groceries+bills), Rs.12,000 Wants (eating out+subscriptions), Rs.8,000 Savings (SIP+emergency fund). Simple, clear, effective!',
  category: 'basics',
  relatedModule: 2,
  mastered: false
}, {
  id: 'debt',
  term: 'Debt',
  definition: 'Debt means borrowing money from someone — in the form of a loan, credit card, or EMI. Debt is not bad if it is used productively (education loan, home loan). Bad debt = taking a loan for luxury items!',
  example: 'Good debt: Education loan — invested Rs.3,00,000, got Rs.12,00,000/year salary = worth it! Bad debt: took Rs.80,000 phone on EMI = paid extra Rs.16,000 interest with no return.',
  category: 'basics',
  relatedModule: 5,
  mastered: false
}, {
  id: 'interest',
  term: 'Interest',
  definition: 'Interest is the cost you pay for using someone else\'s money — or what you earn when you lend money. Interest rate is typically expressed as % per year. Low interest = less cost; High interest = more profit.',
  example: 'Deposited Rs.1,00,000 in bank FD @7% = you earn Rs.7,000/year. Took same amount loan from bank @10% = you pay Rs.10,000/year. The banker always wins!',
  category: 'basics',
  relatedModule: 1,
  mastered: false
}, {
  id: 'principal',
  term: 'Principal',
  definition: 'Principal is the original amount you invested or borrowed — interest is separate. In an EMI, both principal portion and interest portion are included. In the beginning, interest is higher; over time, the principal portion grows!',
  example: 'Rs.5,00,000 home loan for 20 years — early EMIs are mostly interest, later years are mostly principal. Total paid ~Rs.10-11 lakh = Rs.5-6 lakh just in interest!',
  category: 'basics',
  relatedModule: 5,
  mastered: false
},
// ---- IMPORTANT (new) ----
{
  id: 'power-of-compounding',
  term: 'Power of Compounding',
  definition: 'Compounding means earning interest on interest — Einstein called it the 8th wonder of the world! The sooner you start, the more you get. A 10-year delay = 3x-4x smaller corpus at retirement!',
  example: 'Starting Rs.1,000/month at age 20 @12% = Rs.3.5 crore at age 60. Same amount at age 30 = only Rs.1.1 crore. A 10-year delay = Rs.2.4 crore loss!',
  category: 'important',
  relatedModule: 7,
  mastered: false
}, {
  id: 'time-value-of-money',
  term: 'Time Value of Money',
  definition: 'Rs.100 today is more valuable than Rs.100 tomorrow — because today\'s money can be invested and it will grow. The sooner you get money, the better!',
  example: 'You will win a court case and get Rs.1,00,000 — but after 5 years. If you invest today, it becomes Rs.1,76,000 (at 12%). Getting the same Rs.1,00,000 after 5 years = actually a loss of Rs.76,000!',
  category: 'important',
  relatedModule: 1,
  mastered: false
}, {
  id: 'rule-of-72',
  term: 'Rule of 72',
  definition: 'Rule of 72: Divide 72 by the interest rate — that\'s how many years it takes for money to double! A quick mental math formula. Higher return = faster doubling. This is a shortcut to understand the power of compounding!',
  example: '72 ÷ 6% (FD) = doubles in 12 years. 72 ÷ 12% (equity) = doubles in 6 years. 72 ÷ 36% (credit card debt) = DEBT doubles in 2 years! This shows how dangerous credit card minimum payments are!',
  category: 'important',
  relatedModule: 7,
  mastered: false
}, {
  id: 'liquidity',
  term: 'Liquidity',
  definition: 'Liquidity means how easily you can convert an asset into cash without losing value. Cash = highest liquidity. Property = low liquidity (it takes time to sell). In an emergency, you need liquid assets!',
  example: 'Need Rs.50,000 in an emergency: Savings account (high liquidity) = available tomorrow. FD (medium) = 24 hours, with a small penalty. Real estate (low) = can take months. Always keep your emergency fund liquid!',
  category: 'important',
  relatedModule: 4,
  mastered: false
}, {
  id: 'risk-return',
  term: 'Risk vs Return',
  definition: 'Higher risk = Higher potential return. Lower risk = Lower return. This is the golden rule of finance. You have to tolerate risk for returns — no risk, no reward! But risk means volatility, not loss of capital!',
  example: 'FD @7% = low risk, guaranteed. Equity mutual fund @12-15% average = high volatility but better long-term. Gold @8-10% = medium risk. Understand your risk tolerance first!',
  category: 'important',
  relatedModule: 7,
  mastered: false
}, {
  id: 'inflation-enemy',
  term: 'Inflation — The Silent Enemy of Money',
  definition: 'Inflation silently reduces the purchasing power of your money. In India, average 6% inflation = money becomes HALF in real terms in 12 years. Don\'t just save — invest too!',
  example: 'Rs.10,000 kept in savings account @4% interest. Inflation 6%. Real return = 4% - 6% = -2%. This means your money is actually shrinking! Invest in equity to beat inflation.',
  category: 'important',
  relatedModule: 1,
  mastered: false
}, {
  id: 'financial-freedom',
  term: 'Financial Freedom',
  definition: 'Financial freedom = When your passive income exceeds your expenses! Then work becomes optional. FIRE movement: Financial Independence, Retire Early. Formula: 25x annual expenses = financial freedom corpus!',
  example: 'Annual expenses Rs.3,60,000 (Rs.30,000/month). FIRE corpus = 25 × 3,60,000 = Rs.90,00,000 (90 lakhs). Withdrawing 4% from this corpus = Rs.3,60,000/year income. The goal is clear!',
  category: 'important',
  relatedModule: 8,
  mastered: false
}, {
  id: 'net-worth-track',
  term: 'Track Your Net Worth',
  definition: 'Net Worth = Total Assets – Total Liabilities. This is the real indicator of your financial health, not income! High income + high debt = low net worth. Medium income + low debt + investments = high net worth!',
  example: 'Ravi: Rs.80,000 salary, Rs.10L car loan, Rs.2L savings = Net Worth ~(-8L). Priya: Rs.35,000 salary, zero loan, Rs.5L mutual funds = Net Worth +5L. Priya is financially better off!',
  category: 'important',
  relatedModule: 1,
  mastered: false
},
// ---- INVESTING ----
{
  id: 'sip',
  term: 'SIP (Systematic Investment Plan)',
  definition: 'SIP is a method where you invest a fixed amount every month in a mutual fund, regardless of whether the market is up or down. It brings discipline to investing and provides the benefit of rupee cost averaging.',
  example: 'Invested Rs.2,000 every month in Nifty 50 Index Fund — after 15 years, total invested Rs.3,60,000, but corpus became ~Rs.12,00,000 at 12% CAGR!',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'mutual-fund',
  term: 'Mutual Fund',
  definition: 'In a mutual fund, money from many people is pooled together, and a professional fund manager invests it in stocks or bonds. You can diversify even with small amounts.',
  example: 'You can invest in a mutual fund with just Rs.500 — you wouldn\'t find a good stock for Rs.500, but in a mutual fund you get the benefit of 50+ companies!',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'elss',
  term: 'ELSS (Equity Linked Savings Scheme)',
  definition: 'ELSS is a special mutual fund that gives a tax deduction of up to Rs.1,50,000 under Section 80C. It has a lock-in of just 3 years — the shortest among all tax-saving options!',
  example: 'Invested Rs.1,50,000 in ELSS = Rs.46,800 tax saved (30% slab) + 12-15% expected return. Same amount in FD = Rs.46,800 saved but only 6% return!',
  category: 'investing',
  relatedModule: 10,
  mastered: false
}, {
  id: 'cagr',
  term: 'CAGR (Compound Annual Growth Rate)',
  definition: 'CAGR tells you how much your investment has grown on average every year — over a period of time. It shows smooth returns, hiding the volatility.',
  example: 'Rs.1,00,000 invested, after 5 years it became Rs.2,00,000. CAGR = ~14.9% — meaning it grew an average of 14.9% every year, even if some years were 30% up or -10% down!',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'index-fund',
  term: 'Index Fund',
  definition: 'An index fund copies a market index (like Nifty 50) — the fund moves just like the index. Low cost, simple, and it outperforms most active funds in the long run!',
  example: 'Rs.5,000/month SIP in Nifty 50 Index Fund — ~Rs.11,50,000 in 10 years (invested Rs.6,00,000). Expense ratio only 0.2% vs 1.5-2% for active funds!',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'etf',
  term: 'ETF (Exchange Traded Fund)',
  definition: 'An ETF is similar to an index fund, but it is listed on a stock exchange — you buy it just like buying a stock. Low cost and real-time trading is possible.',
  example: 'To buy a Nifty BeES ETF, you need a Demat account. 1 unit ~Rs.220 — for Rs.220 you get the benefit of 50 companies! Low expense ratio 0.05-0.1%.',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'dividend',
  term: 'Dividend',
  definition: 'When a company earns profit, it distributes money to shareholders — this is called a dividend. It is a source of passive income.',
  example: 'You have 1000 shares of ITC, dividend Rs.6.75/share — total dividend income = Rs.6,750! This comes every year without selling anything.',
  category: 'investing',
  relatedModule: 8,
  mastered: false
}, {
  id: 'capital-gain',
  term: 'Capital Gain',
  definition: 'When you sell an asset (stock, property) at a higher price than what you bought it for, the profit is called capital gain. Short-term (less than 1 year) and long-term (more than 1 year) gains are taxed differently.',
  example: 'Bought a share at Rs.1,000, sold after 2 years at Rs.1,800 — Rs.800 long-term capital gain. Equity LTCG tax of 10% on amounts above Rs.1,00,000 = Rs.0 tax (since Rs.80,000 < Rs.1,00,000)!',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'asset-allocation',
  term: 'Asset Allocation',
  definition: 'Dividing your money across different asset classes — equity, debt, gold, real estate. Don\'t put everything in one place! Allocation depends on your age and risk capacity.',
  example: 'If you are 25 years old: 80% equity + 20% debt. If you are 45 years old: 60% equity + 30% debt + 10% gold. Rule of 100: 100 – Age = Equity %.',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'diversification',
  term: 'Diversification',
  definition: 'Spreading your money across different places so that if there is a loss in one, the other covers it. "Don\'t put all your eggs in one basket" — that\'s diversification!',
  example: 'Invested only in IT stocks — if the IT sector falls, all your money is gone! Better: IT + Banking + Pharma + FMCG = diversification. Mutual funds automatically diversify.',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'nps',
  term: 'NPS (National Pension System)',
  definition: 'NPS is a government retirement savings scheme — contribute every year, and you get a pension at retirement. You also get an extra Rs.50,000 tax deduction under Section 80CCD(1B)!',
  example: 'Contributed Rs.5,000/month to NPS — for 35 years = Rs.1,05,00,000 corpus (assuming 10% return). 60% can be withdrawn tax-free, 40% will give you a pension!',
  category: 'investing',
  relatedModule: 8,
  mastered: false
}, {
  id: 'demat',
  term: 'Demat Account',
  definition: 'In a Demat account, your shares and securities are stored in electronic form — just like money in a bank. Without a Demat account, you cannot buy stocks or ETFs.',
  example: 'Opened a Demat account on Zerodha (free opening) — now stocks, ETFs, and mutual funds are all in one app. Annual maintenance Rs.300-500.',
  category: 'investing',
  relatedModule: 7,
  mastered: false
},
// ---- BANKING ----
{
  id: 'fd',
  term: 'FD (Fixed Deposit)',
  definition: 'In an FD, you deposit a lump sum amount with the bank for a fixed period — from 6 months to 10 years. You earn 6-7% interest with guaranteed returns. There is a penalty for premature withdrawal.',
  example: 'Rs.1,00,000 5-year FD @7% = Rs.1,40,255 at maturity. But if withdrawn after 3 years, 1% penalty = effective 6% interest.',
  category: 'banking',
  relatedModule: 6,
  mastered: false
}, {
  id: 'rd',
  term: 'RD (Recurring Deposit)',
  definition: 'In an RD, you deposit a fixed amount every month — the best way to grow small savings. You get FD-like interest (6-7%) but need to deposit monthly.',
  example: 'Rs.2,000/month for a 5-year RD @7% = total deposit Rs.1,20,000, maturity amount ~Rs.1,43,000 — you earned Rs.23,000 in interest!',
  category: 'banking',
  relatedModule: 6,
  mastered: false
}, {
  id: 'upi',
  term: 'UPI (Unified Payments Interface)',
  definition: 'UPI is India\'s instant payment system — 24x7, free, and transfers happen in seconds. PhonePe, Google Pay, Paytm all run on UPI. Daily limit is Rs.1,00,000.',
  example: 'Need to send Rs.500 to a friend — open UPI app, scan QR or enter number, enter PIN — done! Transfer in 10 seconds, zero fees. Faster and free compared to NEFT!',
  category: 'banking',
  relatedModule: 6,
  mastered: false
}, {
  id: 'neft',
  term: 'NEFT (National Electronic Funds Transfer)',
  definition: 'NEFT is a bank-to-bank electronic transfer — now available 24x7. Free for savings account holders. Settlement happens in batches (every half hour), so it is not instant.',
  example: 'Need to transfer Rs.15,000 rent — NEFT is a free transfer, but you may need to wait up to 30 minutes for settlement. If it is urgent, use IMPS.',
  category: 'banking',
  relatedModule: 6,
  mastered: false
}, {
  id: 'imps',
  term: 'IMPS (Immediate Payment Service)',
  definition: 'IMPS is an instant bank transfer — 24x7, real-time settlement. Limit is up to Rs.5,00,000. A small fee applies (Rs.5-15) but the money reaches in seconds.',
  example: 'Need to send Rs.50,000 in an emergency — IMPS does it in 30 seconds! A Rs.15 fee applies, but the urgency justifies it.',
  category: 'banking',
  relatedModule: 6,
  mastered: false
}, {
  id: 'rtgs',
  term: 'RTGS (Real Time Gross Settlement)',
  definition: 'RTGS is for large amounts (Rs.2,00,000+) — instant settlement, real-time. It is used for high-value transactions like property payments.',
  example: 'Need to send Rs.5,00,000 as a flat booking amount — RTGS transfers it instantly. Bank to bank directly, no delay.',
  category: 'banking',
  relatedModule: 6,
  mastered: false
}, {
  id: 'credit-card',
  term: 'Credit Card',
  definition: 'A credit card is a loan from the bank — spend first, pay later. You get a 45-day interest-free period. Pay the full amount and it\'s a free loan! Minimum payment = start of a debt trap.',
  example: 'Rs.20,000 bill — full payment = zero interest. Paid minimum Rs.1,000 = remaining Rs.19,000 at 36-40% annual interest = Rs.684/month just in interest!',
  category: 'debt',
  relatedModule: 5,
  mastered: false
}, {
  id: 'debit-card',
  term: 'Debit Card',
  definition: 'A debit card deducts money directly from your bank account — you can only spend what you have in your balance. Unlike a credit card, it does not create debt, but rewards are also fewer.',
  example: 'Account has Rs.5,000 and you want to buy something worth Rs.8,000 — it won\'t work with a debit card (insufficient balance), it will work with a credit card but will create debt!',
  category: 'banking',
  relatedModule: 6,
  mastered: false
},
// ---- DEBT ----
{
  id: 'emi',
  term: 'EMI (Equated Monthly Installment)',
  definition: 'EMI means repaying a fixed amount every month — it includes both principal and interest. Before taking a loan, calculate the total EMI cost, don\'t just look at the monthly amount!',
  example: 'Phone worth Rs.79,900 on 24-month EMI Rs.3,999/month — total paid Rs.95,976! Rs.16,076 extra in interest + fees. If bought without EMI, Rs.16,000 would have been saved!',
  category: 'debt',
  relatedModule: 5,
  mastered: false
}, {
  id: 'cibil-score',
  term: 'CIBIL Score',
  definition: 'CIBIL score is your credit "report card" — in the range of 300-900. 750+ = excellent, 650-749 = good, below 650 = risky. Loan approval and interest rate depend on this!',
  example: 'CIBIL score 780 = got home loan at 8.5% interest. Friend\'s score 620 = same loan at 10.5%! On a Rs.30,00,000 loan, a 2% difference = Rs.14,00,000+ extra interest over 20 years!',
  category: 'debt',
  relatedModule: 5,
  mastered: false
}, {
  id: 'compound-interest',
  term: 'Compound Interest',
  definition: 'In compound interest, you earn interest on interest — your money grows exponentially. This is the most powerful tool in investing — the "8th wonder of the world"!',
  example: 'Rs.1,00,000 @12% compound interest: 10 years = Rs.3,10,000, 20 years = Rs.9,64,000, 30 years = Rs.29,96,000! Same amount at simple interest: 30 years = only Rs.4,60,000.',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'simple-interest',
  term: 'Simple Interest',
  definition: 'Simple interest is calculated only on the original amount (principal) — there is no interest on interest. FDs and RDs are based on simple interest principles (with quarterly compounding).',
  example: 'Rs.1,00,000 @12% simple interest for 5 years = Rs.1,60,000. Same at compound interest = Rs.1,76,234. A difference of Rs.16,234 — the magic of compounding!',
  category: 'investing',
  relatedModule: 7,
  mastered: false
},
// ---- TAX ----
{
  id: 'section-80c',
  term: 'Section 80C',
  definition: 'Section 80C is the most popular deduction under the Income Tax Act — you can save tax on investments up to Rs.1,50,000! PPF, ELSS, NPS, LIC premium — all fall under 80C.',
  example: 'Rs.8,00,000 salary, 30% tax slab. Invested Rs.1,50,000 in ELSS under 80C = Rs.46,800 tax saved! Plus ELSS also gives 12-15% return — double benefit!',
  category: 'tax',
  relatedModule: 10,
  mastered: false
}, {
  id: 'hra',
  term: 'HRA (House Rent Allowance)',
  definition: 'If you live on rent and your salary has an HRA component, a portion of the rent can be tax-free! Calculation: minimum of actual HRA, 50% of basic (metro), or rent minus 10% of basic.',
  example: 'Basic salary Rs.40,000, HRA Rs.16,000, monthly rent Rs.18,000. HRA exemption ~Rs.12,000/month = Rs.1,44,000/year tax-free! At 30% slab = Rs.43,200 tax saved!',
  category: 'tax',
  relatedModule: 10,
  mastered: false
}, {
  id: 'lta',
  term: 'LTA (Leave Travel Allowance)',
  definition: 'LTA makes travel expenses tax-free — for travel within India. You can claim 2 trips in a 2-year block. Air/rail fare is exempt, hotel is not.',
  example: 'Delhi to Goa roundtrip flight Rs.8,000 — claimed via LTA = Rs.2,400 tax saved (30% slab). A free trip\'s tax benefit every 2 years!',
  category: 'tax',
  relatedModule: 10,
  mastered: false
}, {
  id: 'itr',
  term: 'ITR (Income Tax Return)',
  definition: 'ITR is your annual income report to the government — how much you earned, how much tax you paid, how much you saved. Even if your tax is zero, filing is important!',
  example: 'ITR-1 (Sahaj) form can be filed online in 15 minutes at incometax.gov.in. If you have a Rs.10,000 refund and don\'t file = Rs.10,000 wasted!',
  category: 'tax',
  relatedModule: 10,
  mastered: false
}, {
  id: 'pan',
  term: 'PAN (Permanent Account Number)',
  definition: 'PAN is a 10-digit unique number issued by the Income Tax Department — it tracks every financial transaction. FD, property, mutual fund — PAN is required for everything.',
  example: 'Without PAN, you cannot open an FD of Rs.50,000+. PAN is required for cash deposits of Rs.50,000+. Without PAN, TDS will be deducted at 20% instead of 10%!',
  category: 'tax',
  relatedModule: 10,
  mastered: false
}, {
  id: 'aadhaar',
  term: 'Aadhaar',
  definition: 'Aadhaar is UIDAI\'s 12-digit unique identity number — it serves as both identity and address proof. Bank account, SIM, ITR — it needs to be linked everywhere.',
  example: 'Aadhaar enables instant e-KYC — bank account opens in 10 minutes. If Aadhaar-PAN is not linked, ITR cannot be filed and PAN will become inoperative!',
  category: 'tax',
  relatedModule: 6,
  mastered: false
}, {
  id: 'gst',
  term: 'GST (Goods and Services Tax)',
  definition: 'GST is India\'s unified tax — earlier there were many taxes (VAT, service tax, excise), now everything is in one. 5%, 12%, 18%, 28% — different rates for different items. GST is included in every purchase.',
  example: 'Restaurant bill Rs.500 — includes 5% GST = Rs.25 extra. Smartphone Rs.15,000 — includes 18% GST = Rs.2,700 tax! This is your money going to the government.',
  category: 'tax',
  relatedModule: 10,
  mastered: false
}, {
  id: 'tds',
  term: 'TDS (Tax Deducted at Source)',
  definition: 'TDS means the person making the payment deducts tax before paying you and gives it to the government. Salary, FD interest, rent — TDS is deducted from all of these. You can claim it in ITR if excess has been deducted!',
  example: 'FD earned Rs.50,000 interest — bank deducted 10% TDS = Rs.5,000. But your total tax is only Rs.2,000 — file ITR and get Rs.3,000 refund!',
  category: 'tax',
  relatedModule: 10,
  mastered: false
}, {
  id: 'tax-saving',
  term: 'Tax Saving',
  definition: 'Reducing tax through legal methods — 80C, 80D, HRA, NPS are all tax saving tools. There is a difference between tax saving and tax evasion — saving is legal, evasion is criminal!',
  example: 'Smart tax planning on Rs.10,00,000 salary: 80C Rs.1,50,000 + 80D Rs.25,000 + HRA Rs.1,20,000 + NPS Rs.50,000 = Rs.3,45,000 deduction. Tax saved ~Rs.1,03,000!',
  category: 'tax',
  relatedModule: 10,
  mastered: false
},
// ---- INSURANCE ----
{
  id: 'term-insurance',
  term: 'Term Insurance',
  definition: 'Term insurance is the cheapest and purest form of insurance — if the policyholder passes away, the dependents receive the sum assured. If the person survives, nothing is received — but this is what actual insurance is!',
  example: 'At age 25, Rs.1,00,00,000 term cover = only Rs.8,000-12,000/year! Same cover as an endowment plan = Rs.80,000-1,00,000/year — 10 times more expensive!',
  category: 'insurance',
  relatedModule: 9,
  mastered: false
}, {
  id: 'health-insurance',
  term: 'Health Insurance',
  definition: 'Health insurance covers hospital bills — surgery, ICU, medicines, room rent are all included. In India, medical inflation is 12-15% — without insurance, emergency savings will be wiped out!',
  example: 'Rs.5,00,000 health cover at age 25 = Rs.5,000-7,000/year premium. One ICU stay = Rs.50,000/day! Dengue treatment = Rs.80,000-2,00,000. Insurance paid for it = savings safe!',
  category: 'insurance',
  relatedModule: 9,
  mastered: false
}, {
  id: 'ulip',
  term: 'ULIP (Unit Linked Insurance Plan)',
  definition: 'ULIP is a mix of insurance + investment — part of the premium goes to insurance, part is invested in the market. But due to high charges (5-10%) and average returns, it is generally best to avoid.',
  example: 'Rs.50,000/year in ULIP for 10 years = total Rs.5,00,000 invested. Returns ~6-8% = ~Rs.6,50,000. Same amount in ELSS = ~8,50,000-9,50,000 (12-15% returns) + better tax benefit!',
  category: 'insurance',
  relatedModule: 9,
  mastered: false
},
// ---- SAVING ----
{
  id: 'ppf',
  term: 'PPF (Public Provident Fund)',
  definition: 'PPF is a government savings scheme — 7.1% interest, 15-year lock-in, and EEE tax benefit (invest tax-free, interest tax-free, maturity tax-free). Best for safe long-term investing!',
  example: 'Rs.1,50,000/year in PPF for 15 years = total Rs.22,50,000 invested, maturity ~Rs.45,00,000! Completely tax-free! Also got Section 80C deduction every year.',
  category: 'saving',
  relatedModule: 3,
  mastered: false
}, {
  id: 'inflation',
  term: 'Inflation',
  definition: 'Inflation means prices of things are rising — your money loses value year after year. In India, average inflation is ~6% — meaning Rs.100 of today\'s buying power will only be worth Rs.55 in 10 years!',
  example: '10 years ago, Rs.30 chai cost Rs.50 today — that\'s inflation! If you kept Rs.1,00,000 in a savings account (4% interest) and inflation is 6%, real return = -2% — your money is shrinking!',
  category: 'saving',
  relatedModule: 1,
  mastered: false
}, {
  id: 'emergency-fund',
  term: 'Emergency Fund',
  definition: 'An emergency fund is 3-6 months of expenses kept separately — for unexpected expenses. Job loss, medical emergency, urgent repair — you can tackle these without going into debt.',
  example: 'Monthly expenses Rs.20,000 — 6-month emergency fund = Rs.1,20,000. Keep this in a Savings Account or Liquid Fund, never use it for normal spending!',
  category: 'saving',
  relatedModule: 4,
  mastered: false
}, {
  id: 'budgeting',
  term: 'Budgeting',
  definition: 'Budgeting is making a plan for your money — first decide where the money will go, then spend. Without a budget, your income decides where money goes, not you!',
  example: 'Rs.20,000 salary — without budget: random spending, at the end "where did the money go?" With budget: Rs.10,000 needs, Rs.6,000 wants, Rs.4,000 savings — clear and controlled!',
  category: 'saving',
  relatedModule: 2,
  mastered: false
}, {
  id: 'net-worth',
  term: 'Net Worth',
  definition: 'Net worth = Your total assets (savings, investments, property) minus total liabilities (loans, credit card debt). This is the true measure of your financial health — not income, but net worth!',
  example: 'Savings Rs.2,00,000 + Mutual Funds Rs.1,50,000 – Education Loan Rs.3,00,000 = Net Worth Rs.50,000. It should be positive — negative means you are in debt!',
  category: 'saving',
  relatedModule: 1,
  mastered: false
}];