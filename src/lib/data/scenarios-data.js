export const scenarios = [{
  id: 'sip-vs-no-savings',
  title: 'If you started a monthly ₹500 SIP',
  badPath: {
    year1: 'You saved nothing — you thought "what can ₹500 do" and spent it. Total savings: ₹0. Still zero financial security.',
    year5: '5 years have passed, and you still stress at month-end. Your friends started SIPs and have ₹40,000+ saved. You have ₹0. Every month ₹500 went to things you can\'t even remember.',
    year10: '10 years gone — your peers have ₹1,00,000+ in investments. You\'re still living paycheck to paycheck. One emergency and you\'ll need to borrow — the debt cycle begins.',
    year20: '20 years later — you think about retirement and panic. No corpus, no investments. Whatever you earn is what you spend — no way forward.'
  },
  goodPath: {
    year1: '₹6,000 invested in SIP — felt small but the habit formed! The market went up and down but you kept going. Corpus: ~₹6,400 (@12%).',
    year5: 'In 5 years, ₹30,000 invested — corpus grew to ~₹41,000! ₹11,000 came just from compounding. Now you have the confidence to increase from ₹500 to ₹1,000!',
    year10: 'In 10 years, ₹60,000 invested — corpus is ~₹1,15,000! Almost double! You feel financially secure now — there\'s a cushion for emergencies.',
    year20: 'In 20 years, ₹1,20,000 invested — corpus is ~₹4,95,000! 4x return! This is the magic of compounding — small steps lead to a big journey.'
  },
  variables: [{
    id: 'monthly-amount',
    label: 'Monthly SIP Amount (₹)',
    min: 500,
    max: 10000,
    step: 500,
    defaultValue: 500,
    unit: '₹'
  }, {
    id: 'expected-return',
    label: 'Expected Annual Return (%)',
    min: 8,
    max: 15,
    step: 1,
    defaultValue: 12,
    unit: '%'
  }]
}, {
  id: 'credit-card-payment',
  title: 'If you paid your credit card in full',
  badPath: {
    year1: 'You\'re paying the minimum every month — bill is ₹10,000, you pay ₹500. Interest on ₹9,500 at 36% = ₹3,420/year just in interest! The principal barely decreases.',
    year5: 'In 5 years, the ₹10,000 outstanding has become ₹15,000 — interest kept adding up! Total interest paid: ~₹35,000. You don\'t even remember what the original purchase was for!',
    year10: 'Credit card debt has reached ₹25,000+. Your CIBIL score dropped — now even personal loans come at 15% interest. Stuck in a debt cycle — every month you\'re only paying interest.',
    year20: 'Total interest paid in 20 years: ₹1,50,000+ — on a single ₹10,000 purchase! Car loan rejected, home loan impossible. Financial life ruined by one habit.'
  },
  goodPath: {
    year1: 'Full payment every month — zero interest! Used the 45-day free credit period and earned reward points too. The credit card actually became beneficial — CIBIL score building towards 750+.',
    year5: '5 years of consistent full payments — CIBIL score is 780+! Got a home loan at 8.5% vs 10.5% (for low scores). ₹15,000 worth of benefits from reward points — free!',
    year10: 'Excellent credit history — best interest rates on every loan. Saved ₹30,000+ through cashback and rewards. The credit card became your financial tool, not a trap!',
    year20: 'Total interest saved: ₹3,00,000+ (vs minimum payments). Better loan rates, premium cards for free, and financial freedom. One good habit changed your life!'
  },
  variables: [{
    id: 'outstanding-amount',
    label: 'Monthly Credit Card Bill (₹)',
    min: 5000,
    max: 50000,
    step: 5000,
    defaultValue: 10000,
    unit: '₹'
  }, {
    id: 'interest-rate',
    label: 'Credit Card Interest Rate (% p.a.)',
    min: 24,
    max: 48,
    step: 2,
    defaultValue: 36,
    unit: '%'
  }]
}, {
  id: 'emergency-fund',
  title: 'If you built an emergency fund',
  badPath: {
    year1: 'No emergency fund — a sudden medical bill of ₹30,000 arrived. Paid with credit card, now interest is piling on top of interest. One emergency = debt spiral begins.',
    year5: '3 emergencies happened (medical, phone broke, laptop repair) — total ₹80,000. All paid through credit card/personal loans. Outstanding debt: ₹80,000 + interest ₹25,000.',
    year10: 'Can\'t escape the debt — every emergency adds more debt. Taking personal loan on top of personal loan. Total interest paid: ₹2,00,000+. Savings: zero.',
    year20: 'No safety net — always in financial stress. The fear of job loss is always there. In a medical emergency, the family has to borrow too. No dignity, no security.'
  },
  goodPath: {
    year1: '₹5,000/month savings built a ₹60,000 emergency fund! Now when a medical emergency hits, you use your own money, not a credit card. Zero debt, zero stress.',
    year5: '₹1,50,000 solid emergency fund (6 months of expenses). Even if you lose your job, you\'re stress-free for 6 months. You can actually look for a better job — no desperation.',
    year10: 'Emergency fund fully funded — now extra savings go into investments. Dual benefit: protection + growth. No tension even between insurance claims.',
    year20: 'The emergency fund handled 4 emergencies — ₹3,50,000 in expenses, no debt! Debt interest saved: ₹2,50,000+. Peace of mind = priceless.'
  },
  variables: [{
    id: 'monthly-savings',
    label: 'Monthly Savings for Fund (₹)',
    min: 2000,
    max: 15000,
    step: 1000,
    defaultValue: 5000,
    unit: '₹'
  }, {
    id: 'monthly-expense',
    label: 'Monthly Expenses (₹)',
    min: 10000,
    max: 50000,
    step: 5000,
    defaultValue: 20000,
    unit: '₹'
  }]
}, {
  id: 'early-investing',
  title: 'If you started investing at age 20',
  badPath: {
    year1: 'At 20, you didn\'t start investing — thought "there\'s still time." Money went to clothes, parties, gadgets. Can\'t remember where it all went.',
    year5: 'You\'re 25 now — thinking about investing but missed 5 years of compounding. If you\'d done ₹2,000/month SIP, you\'d have a ₹1,65,000 corpus!',
    year10: 'Age 30 — now seriously thinking about investing. But 10 years of compounding are gone forever. ₹2,000/month SIP starting at 20 = ₹6,60,000 at 30. Starting now = only ₹2,40,000 at 30.',
    year20: 'Age 40 — peers who started investing at 20 have ₹19,00,000+. You\'re just starting with ₹5,00,000. Their ₹2,000 = your ₹8,000 needed for the same result!'
  },
  goodPath: {
    year1: 'Started ₹2,000/month SIP at age 20! Invested ₹24,000 in the first year, corpus ~₹25,500. Felt small but the seed is planted — the compounding tree is growing!',
    year5: 'In 5 years, ₹1,20,000 invested — corpus is ~₹1,65,000! ₹45,000 came from compounding. Now increased SIP to ₹3,000 — income grew so investment grew too!',
    year10: 'In 10 years, ₹3,60,000 invested (increased SIP over time) — corpus is ~₹6,60,000! Nearly double the investment. Friends now ask "how did you do it?"',
    year20: 'In 20 years, total invested ~₹7,20,000 — corpus is ~₹19,00,000+! 2.5x return! This is the power of starting at 20 — every year of delay costs lakhs!'
  },
  variables: [{
    id: 'start-age',
    label: 'Age When You Start Investing',
    min: 18,
    max: 35,
    step: 1,
    defaultValue: 20,
    unit: 'years'
  }, {
    id: 'monthly-sip',
    label: 'Monthly SIP Amount (₹)',
    min: 1000,
    max: 10000,
    step: 500,
    defaultValue: 2000,
    unit: '₹'
  }, {
    id: 'return-rate',
    label: 'Expected Return (% CAGR)',
    min: 8,
    max: 15,
    step: 1,
    defaultValue: 12,
    unit: '%'
  }]
}, {
  id: 'aggressive-saving',
  title: 'If you saved 30% of your income',
  badPath: {
    year1: 'You earned ₹20,000 and spent it all — thought "enjoy now, save later." Year-end savings: ₹0. No investments, no growth.',
    year5: 'In 5 years, total income ~₹12,00,000 (with increments) — but all went to expenses. Lifestyle inflation ate it up — you earn more, you spend more!',
    year10: '10 years of earning — if you\'d saved 30%, you\'d have a ₹15,00,000+ corpus. But actual savings: negligible. One emergency and you\'ll have to borrow.',
    year20: '20 years have passed — zero investments, zero corpus. No retirement plan. You\'re 45 and financially in the same place you were at 25. Scary reality!'
  },
  goodPath: {
    year1: 'Out of ₹20,000, saved ₹6,000 (30%) every month — ₹72,000 in a year! ₹3,000 to emergency fund, ₹3,000 to SIP. Tight but manageable!',
    year5: 'In 5 years, ₹3,60,000 saved — invested to build ~₹4,50,000 corpus! Emergency fund fully funded. Now you can increase from 30% to 35% saving rate — the habit is set!',
    year10: 'In 10 years, total invested ~₹9,00,000 — corpus is ~₹15,00,000! Aggressive saving compounded into something big. Financial freedom is in sight!',
    year20: 'In 20 years, ~₹25,00,000 invested — corpus is ~₹60,00,000+! The 30% saving rate changed your life. You can even work part-time now — financial independence achieved!'
  },
  variables: [{
    id: 'monthly-income',
    label: 'Monthly Income (₹)',
    min: 10000,
    max: 100000,
    step: 5000,
    defaultValue: 20000,
    unit: '₹'
  }, {
    id: 'saving-rate',
    label: 'Saving Rate (%)',
    min: 10,
    max: 50,
    step: 5,
    defaultValue: 30,
    unit: '%'
  }, {
    id: 'investment-return',
    label: 'Investment Return (% CAGR)',
    min: 6,
    max: 15,
    step: 1,
    defaultValue: 10,
    unit: '%'
  }]
}];
