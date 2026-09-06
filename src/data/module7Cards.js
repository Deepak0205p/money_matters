export const module7Topics = [
  {
    id: "7-1",
    title: "Investment Basics — Grow Your Money 📈",
    emoji: "📈",
    color: "#EC4899",
    description: "Saving alone won't make you rich — investing will. Understand the formula to beat inflation!",
    cards: [
      {
        id: "7-1-1",
        topicId: "7-1",
        topicTitle: "Investment Basics",
        cardIndex: 1,
        totalCardsInTopic: 6,
        title: "SIP: The Wealth Building Machine 🚀",
        content: `SIP (Systematic Investment Plan) means automatically investing a small amount every month.

Its greatest power is **Consistency**. Whether the market goes up or down, your 'Machine' must keep running.

Slide to see what a ₹1,000 SIP can earn in 15-20 years:`,
        imagePrompt: "Money tree growing from a small pot, golden leaves, pink and purple background, magical financial growth concept, 3D style",
        color: "#EC4899",
        emoji: "🚀",
        interactiveType: 'calculator',
        calcData: {
          calcType: 'compounding',
          formula: 'none',
          inputs: [
            { label: 'Monthly SIP', min: 500, max: 20000, defaultValue: 2000, step: 500, unit: '₹' },
            { label: 'Expected Return (%)', min: 10, max: 20, defaultValue: 12, step: 0.5, unit: '%' },
            { label: 'Tenure (Years)', min: 5, max: 30, defaultValue: 15, step: 1, unit: 'Y' }
          ]
        }
      },
      {
        id: "7-1-2",
        topicId: "7-1",
        topicTitle: "Investment Basics",
        cardIndex: 2,
        totalCardsInTopic: 6,
        title: "Risk-Return Matrix: Where to Invest? 📊",
        content: `Every place has different risk and different reward. Choose your option:

**Risk vs Return Spectrum:**

| Investment | Risk Level | Expected Return | Time Horizon | Best For |
| :--- | :--- | :--- | :--- | :--- |
| **Savings Account** | Zero | 3-4% | Any time | Emergency fund |
| **FD/RD** | Very Low | 6.5-7% | 1-10 years | Short-term safety |
| **PPF** | Zero | 7.1% | 15 years | Tax saving + long-term |
| **Debt Mutual Fund** | Low | 6-8% | 1-3 years | Stable returns |
| **Hybrid Fund** | Medium | 8-10% | 3-5 years | Balanced approach |
| **Index Fund (SIP)** | Medium | 10-12% | 5+ years | Long-term wealth |
| **Equity Fund (SIP)** | Medium-High | 12-15% | 7+ years | Aggressive growth |
| **Individual Stocks** | High | 15-25% | 10+ years | Experienced investors |
| **Crypto** | Very High | -90% to +500% | Speculative | Only risk capital |

Note: Returns are historical averages/estimates, not guaranteed. Market risk applies to equity-based investments.

**Advice**: For beginners, **Index Mutual Funds** are the best. Lower risk, market returns!`,
        imagePrompt: "Four icons representing safety, growth, high risk, and speculation, clean comparison grid, pink and white colors",
        color: "#EC4899",
        emoji: "📊",
        interactiveType: 'none'
      },
      {
        id: "7-1-3",
        topicId: "7-1",
        topicTitle: "Investment Basics",
        cardIndex: 3,
        totalCardsInTopic: 6,
        title: "Chat: Stocks vs Mutual Funds 📱",
        content: `Priya and Bhaiya are discussing market entry strategy.

**Priya**: Bhaiya, should I directly buy Tata or Reliance shares?

**Bhaiya**: You can buy them, but have you checked their balance sheet? Done any research?

**Priya**: No... where would I find the time?

**Bhaiya**: Then get a Mutual Fund! There, an expert fund manager does the research for you. You relax, and they make the money grow.

**Why Mutual Funds > Individual Stocks for Beginners**:
1. **Diversification** — 50 companies together. One company fails = no problem
2. **Professional management** — fund manager tracks everything
3. **Low cost** — expense ratio 0.1% vs brokerage + research costs
4. **No emotional decisions** — SIP runs automatically
5. **Historically consistent** — Nifty 50 long-term ~12%

**90% of retail investors cannot beat the market.** Index fund = market average, safer.`,
        imagePrompt: "Two people looking at a stock market graph on a large screen, speech bubbles with icons, pink and gold tones, modern flat illustration",
        color: "#EC4899",
        emoji: "💬",
        interactiveType: 'none'
      },
      {
        id: "7-1-4",
        topicId: "7-1",
        topicTitle: "Investment Basics",
        cardIndex: 4,
        totalCardsInTopic: 6,
        title: "Myth-Buster: Market Timing 🕵️‍♂️",
        content: `People wait thinking, "I'll invest when the market goes down."

**Myth**: Market timing is the most important thing. You should wait for the right time.
**Truth**: Nobody can predict the market! The right strategy is 'SIP'. When the market is down, you get more units; when it's up, the value increases. 'Time in the market' is what builds wealth!

**Best Time to Start Investing**: Yesterday. Second best time: Today.

"The best time to invest was yesterday, the second best is today."`,
        imagePrompt: "Person with a telescope looking at a fluctuating red and green line, pink background, conceptual financial illustration",
        color: "#EC4899",
        emoji: "🕵️‍♂️",
        interactiveType: 'myth_buster',
        quizData: {
          question: "MYTH: Market timing is the most important thing. You should wait for the right time.",
          options: ["Yes, we'll buy cheap", "Wrong, Time in Market > Timing"],
          correctAnswerIndex: 1,
          explanation: "Nobody can predict the market! The right strategy is 'SIP'. When the market is down, you get more units; when it's up, the value increases. 'Time in the market' is what builds wealth!"
        }
      },
      {
        id: "7-1-5",
        topicId: "7-1",
        topicTitle: "Investment Basics",
        cardIndex: 5,
        totalCardsInTopic: 6,
        title: "Dilemma: Crypto FOMO 🎲",
        content: `A friend sends you a screenshot on WhatsApp: *"Bro, I turned ₹5k into ₹50k with this meme coin! You should put some in too."*

What will you do?`,
        imagePrompt: "Person looking at a glowing rocket icon on phone while standing near a stable bank vault, pink and red tones, decision making concept",
        color: "#EC4899",
        emoji: "🤔",
        interactiveType: 'choice_sim',
        choiceData: {
          scenario: "10x returns in 2 days? Luck or Investment?",
          choices: [
            {
              text: "Let's put in ₹5k!",
              isCorrect: false,
              consequence: "Risk! Crypto is volatile. What if it goes to zero? This is called 'Speculation', not 'Investing'. Only invest what you can afford to lose 100%."
            },
            {
              text: "I'll stay with my Index Fund.",
              isCorrect: true,
              consequence: "Smart! Avoid FOMO (Fear Of Missing Out). Wealth is built through slow and steady compounding, not 'Get Rich Quick' schemes."
            }
          ]
        }
      },
      {
        id: "7-1-6",
        topicId: "7-1",
        topicTitle: "Investment Basics",
        cardIndex: 6,
        totalCardsInTopic: 6,
        title: "🚨 MISSION: Start Your KYC",
        content: `🚨 **TODAY'S MISSION**

To start investing, 'KYC' (Know Your Customer) is the first step.

- [ ] Download Groww, Zerodha, or IndMoney app.
- [ ] Keep your Aadhaar and PAN card ready.
- [ ] Start the KYC process (usually takes 10 minutes).
- [ ] Set up your first ₹100 SIP as a test.

**5-Step Process**:
1. Complete KYC (PAN + Aadhaar + selfie). Online in 10 minutes.
2. Download the app (Groww / Zerodha Kite / Paytm Money / ET Money — SEBI registered).
3. Verify your account — online in 2-3 minutes.
4. Choose a fund — for beginners, Nifty 50 Index Fund is the best.
5. Set the amount — ₹100 minimum, ₹500-₹1,000 recommended.

**Beginner Funds (Illustrative)**:
1. Nifty 50 Index Fund — Lowest risk equity, market average return, expense ratio 0.1-0.2%
2. HDFC Index Fund - Nifty 50 Plan — Large AMC, reliable tracking
3. SBI Nifty Index Fund — Government bank backing, low fee

Always do your own research or consult a SEBI-registered advisor before investing.`,
        imagePrompt: "Digital document with a green checkmark, smartphone with investment app logo, pink and gold theme, achievement vibe",
        color: "#EC4899",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "7-2",
    title: "SIP Complete Guide — Rupee Cost Averaging",
    emoji: "💎",
    color: "#8B5CF6",
    description: "What SIP is, how it works. Rupee cost averaging, NAV, units, SIP myths busted.",
    cards: [
      {
        id: "7-2-1",
        topicId: "7-2",
        topicTitle: "SIP Complete Guide",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "The Magic of Rupee Cost Averaging",
        content: `**The magic of SIP lies in "rupee cost averaging"** — whether the market goes up or down, you invest the same amount every month.

When the market is down, **you get more units** (cheaper!). When the market is up, you get fewer units (more expensive!). The average cost stays balanced.

**Rupee Cost Averaging Example:**

| Month | NAV (₹) | Investment | Units Bought |
| :--- | :--- | :--- | :--- |
| 1 | ₹20 | ₹1,000 | 50.0 |
| 2 | ₹15 | ₹1,000 | 66.7 |
| 3 | ₹25 | ₹1,000 | 40.0 |
| 4 | ₹20 | ₹1,000 | 50.0 |
| **Total** | — | **₹4,000** | **206.7** |

Average NAV = ₹20. But average cost = ₹4,000 / 206.7 = **₹19.35**. Even after market fluctuation, your cost is less than ₹20! This is the power of SIP.

**What is NAV (Net Asset Value):**
- The price of one mutual fund unit
- Just like a share price, a mutual fund unit has an NAV
- ₹20 NAV = you get 1 unit for ₹20
- NAV changes daily

**What are Units:**
- Mutual funds don't have "shares", they have "units"
- You invested ₹1,000, NAV ₹20 = you got 50 units
- NAV becomes ₹25 = your 50 units × ₹25 = ₹1,250 value`,
        imagePrompt: "Rupee cost averaging chart showing units bought at different NAVs, purple theme, financial concept illustration",
        color: "#8B5CF6",
        emoji: "💎"
      },
      {
        id: "7-2-2",
        topicId: "7-2",
        topicTitle: "SIP Complete Guide",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "SIP Compounding Table (₹100 to ₹10,000)",
        content: `**SIP Compounding Table at 12% Annual Return:**

| Monthly SIP | Duration | Total Invested | Total Value | Wealth Gained |
| :--- | :--- | :--- | :--- | :--- |
| **₹100** | 10 years | ₹12,000 | ₹23,000 | ₹11,000 |
| **₹500** | 10 years | ₹60,000 | ₹1,16,000 | ₹56,000 |
| **₹1,000** | 10 years | ₹1,20,000 | ₹2,32,000 | ₹1,12,000 |
| **₹1,000** | 15 years | ₹1,80,000 | ₹5,00,000 | ₹3,20,000 |
| **₹2,000** | 10 years | ₹2,40,000 | ₹4,64,000 | ₹2,24,000 |
| **₹2,000** | 20 years | ₹4,80,000 | ₹20,00,000 | ₹15,20,000 |
| **₹5,000** | 10 years | ₹6,00,000 | ₹11,60,000 | ₹56,000 |
| **₹5,000** | 15 years | ₹9,00,000 | ₹25,00,000 | ₹16,00,000 |
| **₹5,000** | 20 years | ₹12,00,000 | ₹50,00,000 | ₹38,00,000 |
| **₹10,000** | 25 years | ₹30,00,000 | ₹1,90,00,000 | ₹1,60,00,000 |

Note: Above values are approximate at 12% CAGR. Actual returns depend on market. Historical Nifty 50 long-term average ~12%.

**7 Benefits of SIP:**
1. **Disciplined investing** — auto-debit, no emotional decisions
2. **Rupee cost averaging** — market up/down doesn't matter
3. **Power of compounding** — exponential growth in the long term
4. **Flexibility** — change the amount, pause, stop — anytime
5. **Low minimum** — start with ₹100. No excuses
6. **No timing needed** — "the best time to invest was yesterday, the second best is today"
7. **Tax efficient** — long-term capital gains up to ₹1.25 lakh are tax-free (equity)

**5 SIP Myths Busted:**

⚠️ "You can lose money in SIP" → Yes in the short term, but historically Nifty 50 has been positive in the long term (7+ years)
⚠️ "Stop SIP during a market crash" → This is EXACTLY when you get more units. Keep going!
⚠️ "What will ₹100 do?" → ₹100/month at 12% for 30 years = ₹3.5 lakh+. It does make a difference
⚠️ "SIP has a lock-in" → No! ELSS has a 3-year lock-in, other SIPs have no lock-in
⚠️ "SIP gives lower returns than stocks" → Individual stocks are risky. SIP in an index fund = average market return, safer`,
        imagePrompt: "SIP growth comparison chart showing ₹100 to ₹10000 monthly SIP, purple theme, motivational financial visualization",
        color: "#8B5CF6",
        emoji: "📊"
      },
      {
        id: "7-2-3",
        topicId: "7-2",
        topicTitle: "SIP Complete Guide",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "🚨 MISSION: Start a ₹500 SIP Today",
        content: `🚨 **TODAY'S MISSION**

Bro, start a SIP with ₹100 — no excuses!

- [ ] Download Groww/Zerodha/Paytm Money app
- [ ] Complete KYC (10 min, online)
- [ ] Link your bank account
- [ ] Choose a Nifty 50 Index Fund (low expense ratio)
- [ ] Set up ₹500/month auto-debit (1st or 5th of the month)
- [ ] Commit for 5 years — no matter what the market does

**Why ₹500/month?**
- ₹500 × 12 × 30 years = ₹1.8 lakh invested
- At 12% CAGR = **₹17.6 lakh** final corpus
- 9.7x return on investment!

**Best SIP Funds for Beginners (Illustrative, not advice):**
1. **Nifty 50 Index Fund** — Lowest risk equity, market average return, expense ratio 0.1-0.2%
2. **HDFC Index Fund - Nifty 50 Plan** — Large AMC, reliable tracking
3. **SBI Nifty Index Fund** — Government bank backing, low fee
4. **Nifty Next 50 Index Fund** — Slightly higher risk/reward, mid-cap exposure
5. **Motilal Oswal Nifty 50 Index Fund** — Direct plan, very low expense ratio

**Pro Tip**: Choose the DIRECT plan (not Regular). Lower expense ratio, higher returns. ₹5,000/month SIP for 20 years:
- Regular plan (1.5% expense): Corpus = ₹43 lakh
- Direct plan (0.5% expense): Corpus = ₹50 lakh
- Difference = **₹7 lakh**! Just from the expense ratio.

**Always do your own research or consult a SEBI-registered advisor before investing.**`,
        imagePrompt: "Person celebrating SIP start with smartphone and SIP amount, purple and gold theme, achievement vibe",
        color: "#8B5CF6",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "7-3",
    title: "Mutual Fund Complete Guide",
    emoji: "📊",
    color: "#F59E0B",
    description: "Mutual fund types, direct vs regular plan, expense ratio, NAV, AUM, ratings, top beginner funds.",
    cards: [
      {
        id: "7-3-1",
        topicId: "7-3",
        topicTitle: "Mutual Funds",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "Types of Mutual Funds",
        content: `**What is a Mutual Fund?**
"Your money + other people's money = managed by a professional fund manager." You don't buy stocks directly — the fund manager does. You get units. If the fund performs well = your NAV increases = profit.

**Detailed Types:**

| Fund Type | Invests In | Risk | Return Range | Best For |
| :--- | :--- | :--- | :--- | :--- |
| **Equity Fund** | Stocks | High | 12-15% | Long-term growth (7+ years) |
| **Debt Fund** | Bonds/Govt securities | Low | 6-8% | Short-term (1-3 years) |
| **Hybrid Fund** | Equity + Debt mix | Medium | 8-10% | Balanced approach |
| **Index Fund** | Market index (Nifty 50) | Medium | 10-12% | Beginners — low fee |
| **ELSS** | Equity + tax saving | Medium-High | 12-15% | Tax saving under 80C, 3yr lock-in |
| **Liquid Fund** | Short-term debt | Very Low | 5-6.5% | Emergency fund parking |
| **Overnight Fund** | 1-day securities | Ultra Low | 4-5% | Very short-term parking |
| **Arbitrage Fund** | Equity arbitrage | Low | 6-8% | Tax-efficient, 1+ year |

**Direct vs Regular Plan — IMPORTANT!**

A Direct plan has a lower expense ratio (0.5-1% less), so you get higher returns. In the long term, this difference becomes very large. **Always choose the DIRECT plan.**

**Example**: ₹5,000/month SIP for 20 years:
- Regular plan (1.5% expense): Corpus = **₹43 lakh**
- Direct plan (0.5% expense): Corpus = **₹50 lakh**
- Difference = **₹7 lakh!** Just from the expense ratio.

**Key Terms:**

**Expense Ratio**: The fee for managing the fund. Lower is better. Index funds have 0.1-0.3% (lowest), active funds have 1-2% (higher).

**NAV (Net Asset Value)**: The price of one unit. Changes daily.

**AUM (Assets Under Management)**: Total money in the fund. Higher AUM = stable fund, but very high AUM = difficult to manage (especially mid/small cap).

**Rating**: Check CRISIL, Morningstar ratings. 5-star = historically good, but past performance is not a guarantee.`,
        imagePrompt: "Mutual fund types diagram with risk-return spectrum, amber theme, financial education infographic",
        color: "#F59E0B",
        emoji: "📊"
      },
      {
        id: "7-3-2",
        topicId: "7-3",
        topicTitle: "Mutual Funds",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "Top 5 Beginner Funds + Mission",
        content: `**Top 5 Beginner-Friendly Funds for Students (Illustrative):**

1. **Nifty 50 Index Fund** — lowest fee, follows the market
2. **Nifty Next 50 Index Fund** — slightly more risk/reward
3. **HDFC Balanced Advantage Fund** — equity + debt auto-managed
4. **Axis ELSS Fund** — tax saving + growth, 3-year lock-in
5. **SBI Liquid Fund** — for emergency fund

These recommendations are illustrative, not financial advice. Do your own research.

**🚨 MISSION: Choose Your Fund**

- [ ] Decide your risk appetite (Conservative/Moderate/Aggressive)
- [ ] Decide your time horizon (Short/Medium/Long term)
- [ ] Choose a fund category (Index/Equity/Hybrid/Debt)
- [ ] Select the Direct plan (not Regular)
- [ ] Check the expense ratio (lowest is best)
- [ ] Check AUM (not too low, not too high)
- [ ] Check CRISIL/Morningstar rating
- [ ] Start with a small amount (₹500-₹1,000), increase gradually

**Student Asset Allocation (Age 18-25):**

| Asset | Percentage | Where | Why |
| :--- | :--- | :--- | :--- |
| **Equity (Growth)** | 60% | SIP in Index Fund | Young age = high risk capacity, long time horizon |
| **Debt (Stability)** | 20% | FD/RD/Liquid Fund | Safe returns, emergency fund base |
| **Gold (Hedge)** | 10% | SGB/Digital Gold | Inflation hedge, diversification |
| **Cash (Emergency)** | 10% | Savings Account | Instant access for emergencies |

**Rebalancing**: Check every 6-12 months. If equity has grown too much (70% instead of the 60% target)? Move some from equity to debt. This controls risk.

**Rule**: Mutual funds are a long-term game. Short-term volatility is normal. Hold for 7+ years for the best returns.`,
        imagePrompt: "Student asset allocation pie chart with 4 buckets, amber and gold theme, financial planning illustration",
        color: "#F59E0B",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "7-4",
    title: "FD vs RD vs SIP vs PPF — Complete Comparison",
    emoji: "⚖️",
    color: "#06B6D4",
    description: "Complete comparison of 4 safe and growth options. When to choose which one.",
    cards: [
      {
        id: "7-4-1",
        topicId: "7-4",
        topicTitle: "Investment Comparison",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "4-Way Comparison Table",
        content: `**FD vs RD vs SIP vs PPF — Complete Comparison:**

| Feature | FD | RD | SIP | PPF |
| :--- | :--- | :--- | :--- | :--- |
| **Min Amount** | ₹1,000 | ₹100/month | ₹100/month | ₹500/year |
| **Max Amount** | No limit | No limit | No limit | ₹1.5L/year |
| **Expected Return** | 6.5-7% | 6.5-7% | 10-12% | 7.1% |
| **Risk Level** | Zero | Zero | Medium | Zero |
| **Lock-in** | Fixed tenure | Fixed tenure | None (ELSS: 3yr) | 15 years |
| **Tax Benefit** | 80C (5yr FD) | No | 80C (ELSS) | 80C + EEE |
| **Liquidity** | Premature possible | Premature possible | Anytime redeem | Limited withdrawal |
| **Where to Open** | Bank | Bank | App/Broker | Bank/Post Office |
| **Best For** | Short-term safety | Monthly habit | Long-term wealth | Tax saving + long-term |

**Example: ₹5,000/month for 5 years in each — Final Amount Comparison:**

| Investment | Total Invested | Final Amount | Wealth Gained |
| :--- | :--- | :--- | :--- |
| **FD (laddered)** | ₹3,00,000 | ₹3,58,000 | ₹58,000 |
| **RD** | ₹3,00,000 | ₹3,53,000 | ₹53,000 |
| **SIP (12% avg)** | ₹3,00,000 | ₹4,05,000 | ₹1,05,000 |
| **PPF** | ₹3,00,000* | ₹3,60,000+ | ₹60,000+ |

*PPF is a yearly deposit, monthly comparison is an approximation.

**Conclusion**:
- **Short-term (1-3 years)** = FD/RD
- **Long-term (5+ years)** = SIP
- **Tax saving** = PPF + ELSS

**Best Strategy: Mix All Four**
1. 50% of emergency fund — Savings Account (instant access)
2. 30% of emergency fund — FD ladder (safety + slight growth)
3. Long-term wealth — SIP ₹2,000-5,000/month in Nifty 50
4. Tax saving — PPF ₹500-1,500/month + ELSS`,
        imagePrompt: "Four-way comparison chart of FD, RD, SIP, PPF with bar graph, cyan theme, financial decision illustration",
        color: "#06B6D4",
        emoji: "⚖️"
      },
      {
        id: "7-4-2",
        topicId: "7-4",
        topicTitle: "Investment Comparison",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "PPF Detail + Mission",
        content: `**PPF (Public Provident Fund) Details:**

PPF is a government scheme — 15-year lock-in, tax-free returns, currently **7.1% interest** (Q1 FY 2025-26, unchanged for 5+ years).

- **Minimum**: ₹500/year
- **Maximum**: ₹1.5 lakh/year
- **EEE status** = Exempt-Exempt-Exempt
  - Tax deduction on investment (80C)
  - Tax-free interest
  - Tax-free maturity
- **Where to open**: Bank or Post Office

**PPF Calculation Table:**

| Monthly Amount | Years | Total Invested | Maturity Amount |
| :--- | :--- | :--- | :--- |
| ₹500 | 15 | ₹90,000 | ₹1,62,000+ |
| ₹1,000 | 15 | ₹1,80,000 | ₹3,25,000+ |
| ₹2,000 | 15 | ₹3,60,000 | ₹6,50,000+ |
| ₹5,000 | 15 | ₹9,00,000 | ₹16,25,000+ |
| ₹12,500 | 15 | ₹22,50,000 | ₹40,68,000+ |

Calculated at 7.1% compounded annually. Actual may vary slightly.

**Premature Withdrawal Rules:**
After 5 years, partial withdrawal is allowed under specific conditions. Maximum 50% of balance. For education, medical emergency.

**Loan Against PPF:**
Loan allowed between 3rd to 6th year. 25% of balance. Interest 1% above PPF rate. Repayment within 36 months.

**PPF for Students**: A long-term tax-saving tool. Start at age 18, maturity at 33 = ₹16 lakh+ (₹5,000/month). If you start at 25, maturity at 40 = same amount. **Early start = magic.**

**🚨 MISSION: Open a PPF Account**

- [ ] Open a PPF account at a Bank or Post Office
- [ ] Deposit minimum ₹500 (to keep the account active)
- [ ] Set up auto-debit of ₹500-₹2,000/month
- [ ] Commit for 15 years
- [ ] Claim the tax benefit (80C) in your ITR

**Rule**: PPF = guaranteed 7.1% + tax saving + zero risk. A long-term must-have. 15-year lock-in = forced discipline.`,
        imagePrompt: "PPF growth chart with 7.1% interest, cyan and gold theme, government scheme illustration",
        color: "#06B6D4",
        emoji: "🏛️"
      }
    ]
  },
  {
    id: "7-5",
    title: "Stock Market, Gold, Crypto — Honest Guide",
    emoji: "📈",
    color: "#EF4444",
    description: "Stock market basics, gold investment options, crypto warnings — an honest guide for students.",
    cards: [
      {
        id: "7-5-1",
        topicId: "7-5",
        topicTitle: "Stocks, Gold, Crypto",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "Stock Market Basics + Gold Options",
        content: `**What is the Stock Market?**
This is a marketplace where company shares are bought and sold. A share = a small ownership piece of a company. If the company does well, the share price goes up — you make a profit.

**BSE (Bombay Stock Exchange)** and **NSE (National Stock Exchange)** — India's 2 main exchanges.
- **Sensex** = index of BSE's top 30 companies
- **Nifty 50** = index of NSE's top 50 companies

**Demat Account**: An account to hold shares in digital form.
- How to open: Zerodha, Groww, Upstox — online in 10 minutes
- Charges: Account opening free (usually), AMC ₹300/year, brokerage 0.03% or flat ₹20

**Is Direct Stock Picking Safe for Beginners — Honest Answer:**
Direct stock picking is risky for beginners. Better option: **Index fund** — invest in a Nifty 50 index fund and get the market's average return. Picking individual stocks requires research and experience. **90% of retail investors cannot beat the market.**

**10 Golden Rules If You Want to Enter the Stock Market:**
1. Build an emergency fund first
2. Start SIP in an index fund first
3. Keep separate capital for direct stocks — "fun money" you can afford to lose 100%
4. Never buy stocks with borrowed money
5. Don't invest more than 10% of capital in 1 stock
6. Invest long-term — don't trade
7. Don't do F&O (Futures & Options) as a beginner — 90% of retail investors lose money
8. Don't invest without research — read annual reports, balance sheets
9. Only invest if you can afford the loss
10. Don't invest based on a "hot tip" — WhatsApp forward ≠ research

**Fundamental Analysis Basics:**
- **PE Ratio**: Price to Earnings. 15 = reasonable, 30 = expensive, <10 = cheap
- **Market Cap**: Large cap = safe, small cap = risky
- **Debt**: Lower debt = healthier
- **ROE**: 15%+ = good management

---

**Gold Investment — 4 Options:**

| Option | Form | Pros | Cons |
| :--- | :--- | :--- | :--- |
| **Physical Gold** | Jewellery/Coins | Tangible | Making charges 10-25% loss, storage risk |
| **Digital Gold** | App-based | Small amounts, no storage | Spread cost |
| **SGB (Sovereign Gold Bond)** | Govt bond | 2.5% extra interest, tax-free maturity | 8-year lock-in |
| **Gold ETF** | Stock exchange | Trade like stock, liquid | Brokerage + expense ratio |

**Student Recommendation**: **Sovereign Gold Bond (SGB) is the best** — government guaranteed + 2.5% extra interest + tax-free maturity. But it has an 8-year lock-in. If you need liquidity, go for digital gold. Physical gold = making charges 10-25% loss.`,
        imagePrompt: "Stock market and gold investment options comparison, red and gold theme, comprehensive financial illustration",
        color: "#EF4444",
        emoji: "📈"
      },
      {
        id: "7-5-2",
        topicId: "7-5",
        topicTitle: "Stocks, Gold, Crypto",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "Crypto — 5 Honest Warnings + Mission",
        content: `**What is Crypto?**
A digital currency based on blockchain technology. Bitcoin, Ethereum — the most popular ones.

**But here are 5 strict warnings for students:**

⚠️ **1. 80% of crypto projects fail** — long-term survival is uncertain. Out of the top 100 coins in 2017, 80 are now zero.

⚠️ **2. No regulation in India** — if there's fraud, nobody will protect you. If the exchange shuts down = money gone.

⚠️ **3. 30% tax on gains + 1% TDS** — almost a third of returns go to tax. Plus 4% cess.

⚠️ **4. Extreme volatility** — 50% up or 50% down in a week is possible. ₹1 lakh → ₹50,000 in 3 days.

⚠️ **5. Scams are very common** — fraudulent exchanges, rug pulls, fake coins. "Guaranteed 10x" = 100% scam.

**Recommendation for Students:**
First strengthen your basics — FD, SIP, PPF. **Crypto LATER**, if ever, and only what you can afford to lose 100%. Crypto ≠ investing, crypto = speculation. Understand the difference.

---

**🚨 MISSION: Asset Allocation Audit**

- [ ] List your current investment portfolio
- [ ] Check your asset allocation (Equity/Debt/Gold/Cash)
- [ ] Decide your risk profile (Aggressive/Moderate/Conservative)
- [ ] Make a rebalancing plan (6-12 months)
- [ ] Check tax-saving investments (80C limit ₹1.5L)
- [ ] Set a long-term goal (FIRE/retirement/child education)

**Common Misconceptions (Module 7):**

⚠️ "Investing is gambling" → Wrong! Informed investing is research-based, speculation is gambling. SIP = disciplined investing
⚠️ "You can lose money in SIP" → Yes in the short term, but historically Nifty 50 has been positive in the long term (7+ years)
⚠️ "Stock market is only for rich people" → Wrong! You can start SIP with ₹100
⚠️ "Only a CA can file taxes" → Wrong! Simple ITR (ITR-1) can be filed online easily in 15 minutes. Free
⚠️ "Gold is only jewellery" → Wrong! SGB, ETF, digital gold are investment options

**KEY TAKEAWAYS (Module 7):**
- ✅ Investing ≠ saving. Saving protects, investing grows. Inflation at 6% > FD at 6.5% = barely beating it
- ✅ SIP can start with ₹100 — no excuse that "I don't have money". Auto-debit + discipline = wealth
- ✅ Index funds are best for beginners — market's average return, lowest fee, diversification. Nifty 50 = safe start
- ✅ PPF = guaranteed 7.1% + tax saving + zero risk — a long-term must-have. 15-year lock-in = forced discipline
- ✅ File taxes even if zero tax — ITR is proof of income. Save thousands with 80C, 80E

**What's Next**: The investing foundation is ready, now in Module 8 we'll cover the ultimate goal — Financial Independence! FIRE movement, passive income, compounding tables, retirement planning, and real Indian examples who achieved financial freedom. From wealth building to freedom building — let's move forward! 🎯`,
        imagePrompt: "Crypto warning with red caution signs, red theme, honest financial advice illustration",
        color: "#EF4444",
        emoji: "🎯"
      }
    ]
  }
];

export function getAllCards() {
  return module7Topics.flatMap(topic => topic.cards);
}

export function getTotalCardCount() {
  return getAllCards().length;
}

export function getTopicById(id) {
  return module7Topics.find(t => t.id === id);
}

export function getCardsByTopic(topicId) {
  const topic = getTopicById(topicId);
  return topic ? topic.cards : [];
}
