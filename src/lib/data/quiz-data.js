export const quizQuestions = [
// ==========================================
// MODULE 1: Basic Understanding of Money (Foundation)
// ==========================================
{
  id: 'm1-q1',
  moduleId: 1,
  question: 'If you earn Rs.20,000 and spend Rs.22,000, what will you have left?',
  options: ['Rs.2,000 savings', 'Rs.2,000 deficit (debt)', 'Rs.0 - break even', 'Rs.42,000 total'],
  correctIndex: 1,
  explanation: 'Income (Rs.20,000) less than expense (Rs.22,000) = Rs.2,000 deficit. This means you are going into debt! Golden Rule: Income > Expense = Savings. The opposite = Danger!',
  difficulty: 'easy'
}, {
  id: 'm1-q2',
  moduleId: 1,
  question: 'According to the 50-30-20 rule, how much should be saved from a Rs.30,000 income?',
  options: ['Rs.15,000', 'Rs.9,000', 'Rs.6,000', 'Rs.3,000'],
  correctIndex: 2,
  explanation: '50-30-20 rule: 50% needs (Rs.15,000), 30% wants (Rs.9,000), 20% savings (Rs.6,000). 20% of Rs.30,000 = Rs.6,000 savings. Simple math, powerful impact!',
  difficulty: 'easy'
}, {
  id: 'm1-q3',
  moduleId: 1,
  question: 'Which of the following is a "Need"?',
  options: ['iPhone 15 Pro Max', 'Netflix subscription', 'Mess food', 'PS5 console'],
  correctIndex: 2,
  explanation: 'Food is a basic need — you cannot survive without it! iPhone, Netflix, PS5 are all wants. Need = hard to live without, Want = something that makes life easy or fun.',
  difficulty: 'easy'
}, {
  id: 'm1-q4',
  moduleId: 1,
  question: 'What does "M" stand for in a SMART goal?',
  options: ['Money', 'Measurable', 'Maximum', 'Monthly'],
  correctIndex: 1,
  explanation: 'SMART = Specific, Measurable, Achievable, Relevant, Time-bound. "Measurable" means you can track how much progress you have made — for example, "saving Rs.50,000" is measurable, "saving a lot of money" is not!',
  difficulty: 'medium'
},
// ==========================================
// MODULE 2: Budgeting In Real Life (Practical)
// ==========================================
{
  id: 'm2-q1',
  moduleId: 2,
  question: 'What does zero-based budgeting mean?',
  options: ['Bringing everything in income to zero', 'Assigning a job to every rupee so that Income - All Expenses = 0', 'Keeping savings zero', 'Starting fresh every month'],
  correctIndex: 1,
  explanation: 'In zero-based budgeting, every rupee is assigned a purpose — savings, rent, food, fun, all planned. Income – All Allocations = 0. No money is "wasted," overspending is impossible!',
  difficulty: 'medium'
}, {
  id: 'm2-q2',
  moduleId: 2,
  question: 'Rs.50 daily chai + snack = how much monthly expense?',
  options: ['Rs.500', 'Rs.1,000', 'Rs.1,500', 'Rs.2,400'],
  correctIndex: 2,
  explanation: 'Rs.50 × 30 days = Rs.1,500/month! That is Rs.18,000 per year — an FD-level amount! Small daily expenses have a big impact — that is why tracking is essential.',
  difficulty: 'easy'
}, {
  id: 'm2-q3',
  moduleId: 2,
  question: 'Why should irregular expenses (festivals, birthdays) be included in a budget?',
  options: ['They should not be included — they are unexpected', 'Because if you do not plan, there will be sudden shock and overspending', 'Only include if budget allows', 'Festivals are separate from budget'],
  correctIndex: 1,
  explanation: 'Diwali gifts, a friend\'s birthday, car repair — these are irregular BUT predictable. Set aside a small amount every month (Rs.1,000-2,000) into an irregular fund — so when they come, you are ready!',
  difficulty: 'medium'
}, {
  id: 'm2-q4',
  moduleId: 2,
  question: 'Which modification of the 50-30-20 rule is better for young people in India?',
  options: ['60-30-10', '40-30-30', '50-20-30', '30-40-30'],
  correctIndex: 1,
  explanation: 'For young people in India, 40-30-30 is better — 40% needs, 30% wants, 30% savings. More savings at an early age = more compounding benefit. Less spending does not mean less life — it means smartness!',
  difficulty: 'hard'
},
// ==========================================
// MODULE 3: Saving Strategies (Smart Saving)
// ==========================================
{
  id: 'm3-q1',
  moduleId: 3,
  question: 'What does "Pay Yourself First" mean?',
  options: ['Buying expensive things for yourself', 'Transferring savings first as soon as income arrives', 'Taking advance before salary', 'Saving whatever is left after spending'],
  correctIndex: 1,
  explanation: 'Pay Yourself First = transfer 20% to savings FIRST when income arrives, then manage life with the rest. In reverse order, savings are guaranteed — not "whatever is left is savings"!',
  difficulty: 'easy'
}, {
  id: 'm3-q2',
  moduleId: 3,
  question: 'How much total money will be saved in the 52-week saving challenge?',
  options: ['Rs.52,000', 'Rs.1,37,800', 'Rs.1,00,000', 'Rs.68,900'],
  correctIndex: 1,
  explanation: 'Week 1 = Rs.100, Week 2 = Rs.200... Week 52 = Rs.5,200. Formula: 100 × (52×53/2) = Rs.1,37,800! A large amount is saved in a year without any stress!',
  difficulty: 'hard'
}, {
  id: 'm3-q3',
  moduleId: 3,
  question: 'What is the biggest benefit of a Recurring Deposit (RD) for beginners?',
  options: ['Very high interest', 'Linked to market so higher returns', 'Monthly deposits build discipline and provide safe returns', 'No lock-in period'],
  correctIndex: 2,
  explanation: 'In an RD, you must deposit a fixed amount every month — this builds discipline! Plus 6-7% guaranteed return — no market risk. Perfect for beginners because it builds the habit and money grows safely.',
  difficulty: 'medium'
}, {
  id: 'm3-q4',
  moduleId: 3,
  question: 'You have Rs.1,00,000 in a savings account at 4% interest, inflation is 6%. What is the real return?',
  options: ['+4%', '+2%', '-2%', '+6%'],
  correctIndex: 2,
  explanation: 'Nominal return 4% – Inflation 6% = Real return -2%! This means your money is actually LOSING value in a savings account! Investing is essential for long-term savings to fight inflation.',
  difficulty: 'hard'
},
// ==========================================
// MODULE 4: Emergency Fund (Protection Shield)
// ==========================================
{
  id: 'm4-q1',
  moduleId: 4,
  question: 'How much emergency fund should a freelancer have (3-6-9 rule)?',
  options: ['3 months of expenses', '6 months of expenses', '9 months of expenses', '1 month of expenses'],
  correctIndex: 2,
  explanation: 'A freelancer\'s income is irregular — sometimes there is work, sometimes not. That is why 9 months of expenses as an emergency fund is needed. Stable job = 3 months, family/EMI = 6 months, freelancer/health issues = 9 months.',
  difficulty: 'medium'
}, {
  id: 'm4-q2',
  moduleId: 4,
  question: 'Where is the best place to keep an emergency fund?',
  options: ['Stock market — higher growth', 'FD — safe but locked', '60% Savings Account + 40% Liquid Mutual Fund', 'Gold — safe investment'],
  correctIndex: 2,
  explanation: 'An emergency fund needs QUICK access + some growth. 60% Savings Account (instant withdrawal) + 40% Liquid Mutual Fund (withdrawal in 1-2 days, better returns). Stock market is risky, FD has penalties, gold is not liquid enough!',
  difficulty: 'medium'
}, {
  id: 'm4-q3',
  moduleId: 4,
  question: 'Which of these is NOT an emergency for the emergency fund?',
  options: ['Medical emergency hospitalization', 'Job loss and 3 months of expenses', 'Getting a cheap iPhone on a Flipkart sale', 'Car/bike repair after accident'],
  correctIndex: 2,
  explanation: 'Sales, discounts, FOMO — these are not emergencies, these are impulses! An emergency fund is ONLY for real emergencies: medical, job loss, urgent repairs. A shopping sale is never an emergency!',
  difficulty: 'easy'
},
// ==========================================
// MODULE 5: Debt and Credit (Danger Zone)
// ==========================================
{
  id: 'm5-q1',
  moduleId: 5,
  question: 'Which one is "Good Debt"?',
  options: ['Buying a vacation on a credit card', 'Education loan for MBA', 'Personal loan for an iPhone', 'EMI for a luxury watch'],
  correctIndex: 1,
  explanation: 'Education loan is GOOD debt because an MBA will increase your salary — the investment will recover itself. Vacation, iPhone, luxury watch are all BAD debt — they decrease in value. Rule: Things that increase value = good, things that decrease = bad!',
  difficulty: 'easy'
}, {
  id: 'm5-q2',
  moduleId: 5,
  question: 'You have a Rs.10,000 credit card bill. You made a minimum payment of Rs.500. How much annual interest will be charged on the remaining amount (36% rate)?',
  options: ['Rs.360', 'Rs.3,600', 'Rs.1,800', 'Rs.180'],
  correctIndex: 1,
  explanation: 'Remaining Rs.9,500 at 36% annual interest = Rs.3,420/year! Plus compound interest monthly = even more! Minimum payments barely reduce the principal, interest keeps running. ALWAYS pay the full amount!',
  difficulty: 'medium'
}, {
  id: 'm5-q3',
  moduleId: 5,
  question: 'You bought a Rs.79,900 phone on no-cost EMI for 24 months. What will be the total actual cost?',
  options: ['Rs.79,900 — exactly the same', 'Rs.79,900 + processing fee + GST', 'Rs.95,976 + fees', 'Rs.79,900 — discounted'],
  correctIndex: 2,
  explanation: 'No-cost EMI has hidden costs: processing fee Rs.1,500-2,000 + GST, sometimes higher MRP. The actual EMI amount × months usually exceeds Rs.79,900! "No-cost" is misleading — there is always something extra!',
  difficulty: 'hard'
}, {
  id: 'm5-q4',
  moduleId: 5,
  question: 'In the avalanche method, which debt is paid off first?',
  options: ['The smallest debt', 'The debt with the highest interest rate', 'The oldest debt', 'The largest debt'],
  correctIndex: 1,
  explanation: 'Avalanche method = highest interest rate debt first! Mathematically the best because less total interest is paid. 36% credit card first, 12% personal loan later. In the snowball method, the smallest debt is paid first (psychological boost).',
  difficulty: 'medium'
},
// ==========================================
// MODULE 6: Banking Basics (Everyday Banking)
// ==========================================
{
  id: 'm6-q1',
  moduleId: 6,
  question: 'Which savings account is best for students?',
  options: ['Regular savings with Rs.10,000 minimum balance', 'Zero balance account — no penalty, no tension', 'Salary account — special benefits', 'NRI account — international access'],
  correctIndex: 1,
  explanation: 'Zero balance account is best for students — no minimum balance, no penalty! SBI Zero Balance, Kotak 811, Digital banks — there are many options. Regular accounts charge Rs.100-500/month penalty for not maintaining minimum balance!',
  difficulty: 'easy'
}, {
  id: 'm6-q2',
  moduleId: 6,
  question: 'You need to urgently transfer Rs.50,000 at 11 PM. Which method should you use?',
  options: ['NEFT', 'RTGS', 'IMPS', 'Cheque'],
  correctIndex: 2,
  explanation: 'IMPS is a 24x7 instant transfer — it works even at 11 PM! NEFT is now 24x7 but settles batch-wise. RTGS is for Rs.2L+ transfers. Cheque is out of the question. IMPS = instant + 24x7 + Rs.5L limit. Small fee (Rs.5-15) is worth it!',
  difficulty: 'medium'
}, {
  id: 'm6-q3',
  moduleId: 6,
  question: 'What happens to FD without a PAN card?',
  options: ['Nothing — PAN is optional', 'TDS of 20% will be deducted instead of 10%', 'FD cannot be opened', 'Interest will be lower'],
  correctIndex: 1,
  explanation: 'Without PAN, TDS of 20% is deducted on FD instead of the normal 10%! On a Rs.1,00,000 FD with Rs.40,000 interest at 7% for 5 years — TDS is Rs.4,000 (with PAN) vs Rs.8,000 (without PAN). That is Rs.4,000 extra tax! Definitely get a PAN made.',
  difficulty: 'medium'
}, {
  id: 'm6-q4',
  moduleId: 6,
  question: 'On average, how much penalty is charged per year for not maintaining minimum balance?',
  options: ['Rs.500-1,000', 'Rs.2,000-3,000', 'Rs.5,000-6,000', 'Rs.10,000+'],
  correctIndex: 2,
  explanation: 'Average penalty is Rs.100-500/month × 12 = Rs.1,200-6,000/year! This is deducted silently. Better option: open a zero balance account — that saved amount could be invested in a SIP!',
  difficulty: 'hard'
},
// ==========================================
// MODULE 7: Investment Basics (Grow Your Money)
// ==========================================
{
  id: 'm7-q1',
  moduleId: 7,
  question: 'Rs.5,000/month SIP for 20 years at 12% CAGR — approximately how much corpus will be built?',
  options: ['Rs.12,00,000', 'Rs.20,00,000', 'Rs.50,00,000', 'Rs.1,20,000'],
  correctIndex: 2,
  explanation: 'Rs.5,000 × 12 × 20 = Rs.12,00,000 invested. At 12% CAGR over 20 years ≈ Rs.50,00,000! The magic of compounding — you invested only Rs.12 lakh, and got more than Rs.50 lakh! This is the power of early + consistent investing.',
  difficulty: 'hard'
}, {
  id: 'm7-q2',
  moduleId: 7,
  question: 'According to the Rule of 100, what percentage of a 25-year-old\'s investment should be in equity?',
  options: ['25%', '50%', '75%', '100%'],
  correctIndex: 2,
  explanation: 'Rule of 100: 100 – Age = Equity %. 100 – 25 = 75% equity, 25% debt. At a young age, risk capacity is higher — equity gives better returns in the long term. As age increases, increase debt and reduce equity.',
  difficulty: 'medium'
}, {
  id: 'm7-q3',
  moduleId: 7,
  question: 'Should you continue your SIP or stop it when the market falls?',
  options: ['Stop it — you are making a loss', 'Continue it — you get more units when the market is down (rupee cost averaging)', 'Double your investment when the market is down', 'Cancel the SIP and put money in FD'],
  correctIndex: 1,
  explanation: 'Market down = SALE! The same Rs.2,000 gets you more units when prices are low. When the market recovers, these extra units generate more profit. This is Rupee Cost Averaging — the biggest benefit of SIP! Stopping it = the biggest mistake.',
  difficulty: 'medium'
}, {
  id: 'm7-q4',
  moduleId: 7,
  question: 'Rs.1,00,000 one-time investment at 12% compound interest — how much will it be in 30 years?',
  options: ['Rs.3,60,000', 'Rs.10,00,000', 'Rs.30,00,000', 'Rs.1,00,000'],
  correctIndex: 2,
  explanation: 'Rs.1,00,000 at 12% CAGR for 30 years ≈ Rs.29,96,000 — almost 30x! On simple interest, it would be only Rs.4,60,000. Compounding gave an extra Rs.25 lakh! This is the "8th wonder of the world" — time + compounding = magic!',
  difficulty: 'hard'
},
// ==========================================
// MODULE 8: Financial Independence (Freedom Path)
// ==========================================
{
  id: 'm8-q1',
  moduleId: 8,
  question: 'According to the 4% rule, what would be the FIRE number for annual expenses of Rs.3,00,000?',
  options: ['Rs.3,00,000', 'Rs.12,00,000', 'Rs.75,00,000', 'Rs.30,00,000'],
  correctIndex: 2,
  explanation: '4% rule: Annual Expense × 25 = FIRE Number. Rs.3,00,000 × 25 = Rs.75,00,000. From this corpus, you withdraw 4% every year (Rs.3,00,000) — historically, the money will not run out for 30+ years!',
  difficulty: 'hard'
}, {
  id: 'm8-q2',
  moduleId: 8,
  question: 'What is the most common example of passive income in India?',
  options: ['Daily job salary', 'Freelancing income', 'Rental income from property', 'Overtime pay'],
  correctIndex: 2,
  explanation: 'Rental income is passive — buy a property, give it to a tenant on rent, and monthly income comes without daily work. Dividend income and interest income are also passive. Job and freelancing = ACTIVE income (money comes only when you work).',
  difficulty: 'easy'
}, {
  id: 'm8-q3',
  moduleId: 8,
  question: 'How many years does it take to achieve FIRE with a 50% savings rate?',
  options: ['5 years', '10 years', '17 years', '30 years'],
  correctIndex: 2,
  explanation: 'With a 50% savings rate, FIRE is achievable in approximately 17 years! Higher savings rate = faster FIRE. A 70% savings rate = ~10 years! FIRE depends on savings rate, not income — this is the most important lesson.',
  difficulty: 'medium'
}, {
  id: 'm8-q4',
  moduleId: 8,
  question: 'What is an aggressive target corpus for FIRE in India?',
  options: ['Rs.10-20 Lakh', 'Rs.50 Lakh - 1 Crore', 'Rs.3-5 Crore', 'Rs.10+ Crore'],
  correctIndex: 2,
  explanation: 'Aggressive FIRE in India requires Rs.3-5 Crore — enough for a comfortable lifestyle plus inflation coverage. Lean FIRE (minimal lifestyle) = Rs.1-2 Crore. It depends on how much your monthly expenses are — calculate using the 4% rule!',
  difficulty: 'hard'
},
// ==========================================
// MODULE 9: Insurance (Safety Net)
// ==========================================
{
  id: 'm9-q1',
  moduleId: 9,
  question: 'How much is the premium for a Rs.1,00,00,000 term insurance cover at the age of 25?',
  options: ['Rs.50,000-80,000/year', 'Rs.8,000-12,000/year', 'Rs.1,00,000/year', 'Rs.25,000-30,000/year'],
  correctIndex: 1,
  explanation: 'At age 25, a Rs.1 Crore term cover costs only Rs.8,000-12,000/year! This is 10 times cheaper than an endowment plan. Young age = low premium locked for life. Get it early, it is cheaper!',
  difficulty: 'easy'
}, {
  id: 'm9-q2',
  moduleId: 9,
  question: 'What is the biggest problem with ULIPs?',
  options: ['No insurance cover', 'High charges (5-10%) and average returns (6-8%)', 'No tax benefit', 'Only wealthy people can buy them'],
  correctIndex: 1,
  explanation: 'ULIPs have high charges (5-10% of premium!) and average returns of 6-8% — half of what mutual funds give! Plus insurance coverage is also low. Better: Term insurance (Rs.10K) + SIP (remaining amount) = better coverage + better returns + more flexibility!',
  difficulty: 'medium'
}, {
  id: 'm9-q3',
  moduleId: 9,
  question: 'Why is it risky to depend on corporate health insurance?',
  options: ['Company insurance cover is low', 'Coverage ends on job change or layoff', 'Corporate insurance has a slow claim process', 'Company deducts premium from salary'],
  correctIndex: 1,
  explanation: 'Job change = corporate insurance ends! After a 30-day grace period, there is no coverage. Layoff, resignation, or company policy change — you can be left with zero coverage at any time. PERSONAL health insurance is a MUST — Rs.5,000-7,000/year is a small price for continuous protection!',
  difficulty: 'medium'
}, {
  id: 'm9-q4',
  moduleId: 9,
  question: 'Why is mixing insurance and investing (ULIP, endowment) a bad idea?',
  options: ['No tax benefit', 'Both functions perform poorly — low insurance and low returns', 'Government does not allow it', 'Too much paperwork'],
  correctIndex: 1,
  explanation: 'Insurance + Investment mix = both perform poorly! Insurance coverage is low (or very expensive), and investment returns are half of what mutual funds give. Keep them separate: Term insurance for protection, SIP for growth. This is the financially smart approach!',
  difficulty: 'hard'
},
// ==========================================
// MODULE 10: Tax Planning (Save Legally)
// ==========================================
{
  id: 'm10-q1',
  moduleId: 10,
  question: 'What is the maximum tax saving possible under Section 80C (30% tax slab)?',
  options: ['Rs.15,000', 'Rs.30,000', 'Rs.46,800', 'Rs.1,50,000'],
  correctIndex: 2,
  explanation: 'Section 80C deduction is up to Rs.1,50,000. In the 30% tax slab = Rs.1,50,000 × 30% = Rs.45,000 + 4% cess = Rs.46,800 tax saved! This is available every year — invest in ELSS, PPF, NPS and save tax too!',
  difficulty: 'medium'
}, {
  id: 'm10-q2',
  moduleId: 10,
  question: 'What is the best tax-saving option for young investors?',
  options: ['LIC Policy', 'Tax Saver FD', 'ELSS Mutual Fund', 'PPF'],
  correctIndex: 2,
  explanation: 'ELSS is the best for young investors: shortest lock-in (3 years), highest expected returns (12-15%), and 80C deduction too! PPF has a 15-year lock-in, FD gives only 6-7% return, LIC returns are poor. ELSS = tax saving + wealth creation!',
  difficulty: 'medium'
}, {
  id: 'm10-q3',
  moduleId: 10,
  question: 'Why is it important to file ITR even if your tax is zero?',
  options: ['It is a government compulsion', 'Needed for tax refund claims, loan approvals, and visa applications', 'To avoid penalties', 'Bank account gets closed without ITR'],
  correctIndex: 1,
  explanation: 'File ITR for: 1) Tax refund claims (if excess TDS was deducted), 2) Loan approvals — banks ask for ITR, 3) Visa applications require ITR as proof, 4) Carry forward losses. Even with zero tax, file it — it is future proofing!',
  difficulty: 'easy'
}, {
  id: 'm10-q4',
  moduleId: 10,
  question: 'New Tax Regime vs Old Tax Regime — which is better if you can claim Rs.2,00,000 in deductions?',
  options: ['New Regime is always better', 'Old Regime is better with deductions', 'Both are the same', 'Depends on mood'],
  correctIndex: 1,
  explanation: 'If you can claim Rs.2,00,000+ deductions (80C + 80D + HRA + NPS), the Old Regime is more beneficial! On an Rs.8L salary, Old regime: tax ~Rs.10,000. New regime: tax ~Rs.35,000. That is a Rs.25,000 difference! CALCULATE it, do not assume!',
  difficulty: 'hard'
},
// ==========================================
// MODULE 11: Real-World Scenarios (Life Ready)
// ==========================================
{
  id: 'm11-q1',
  moduleId: 11,
  question: 'When you get your first salary, what should be the very first financial step?',
  options: ['Throw a celebration party', 'Buy a new phone', 'Transfer 20% to savings as the first thing', 'Treat everyone'],
  correctIndex: 2,
  explanation: 'Pay Yourself First! As soon as salary comes, put 20% into savings first — then celebrate with the rest. This habit will serve you for life. Savings before celebration — the priority order matters!',
  difficulty: 'easy'
}, {
  id: 'm11-q2',
  moduleId: 11,
  question: 'What is the average setup cost when moving to a new home?',
  options: ['Rs.10,000-20,000', 'Rs.60,000-1,50,000', 'Rs.2,00,000-5,00,000', 'Rs.5,000-10,000'],
  correctIndex: 1,
  explanation: 'Setup cost: Deposit (2-3 months\' rent) + brokerage + furniture + appliances = Rs.60,000-1,50,000! This comes as a shock if you have not planned. Smart move: second-hand furniture (OLX) + roommate = 50% savings!',
  difficulty: 'medium'
}, {
  id: 'm11-q3',
  moduleId: 11,
  question: 'What should be the first financial step during a job loss?',
  options: ['Buy a new phone and update your profile', 'Cut expenses immediately and use the emergency fund', 'Take a personal loan and keep going', 'Live on credit cards'],
  correctIndex: 1,
  explanation: 'Job loss = cut expenses IMMEDIATELY! Cancel subscriptions, stop eating out, freeze non-essential spending. Use the emergency fund (that is what it was made for!). Start freelancing. Credit cards or loans = the next disaster. Request EMI moratorium. Survival mode ON!',
  difficulty: 'medium'
}, {
  id: 'm11-q4',
  moduleId: 11,
  question: 'What is the approximate total annual cost of owning a car (Rs.6 lakh car)?',
  options: ['Rs.50,000-80,000', 'Rs.1,20,000-2,00,000', 'Rs.3,00,000-4,00,000', 'Rs.20,000-30,000'],
  correctIndex: 1,
  explanation: 'Car total cost: Fuel Rs.60,000/year + Insurance Rs.10,000 + Service Rs.10,000 + Parking Rs.10,000 + Depreciation Rs.60,000 = ~Rs.1,50,000/year! That is Rs.12,500/month — if Ola/Uber can work for you, it is often cheaper. Daily heavy commute = justify it, otherwise reconsider!',
  difficulty: 'hard'
}];