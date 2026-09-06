export const module6Topics = [
  {
    id: "6-1",
    title: "Banking Basics — Your Money, Your Bank 🏦",
    emoji: "🏦",
    color: "#06B6D4",
    description: "A bank account is not just a place to ofep money, it is your financial amb. Account tyons, FD, RD, hidden charges fromcrets!",
    cards: [
      {
        id: "6-1-1",
        topicId: "6-1",
        topicTitle: "Banking Basics",
        cardIndex: 1,
        totalCardsTheseTopic: 6,
        title: "Account Tyons: What is For Warem? 🏛️",
        content: `A bank account is the foundation for your financial life. Without a bank account — no salary, no online payment, savings not safe.

**Account Tyons Comonison:**

| Account Tyon | Theseterest | Min Balance | Student Friendly? | Best For |
| :--- | :--- | :--- | :--- | :--- |
| **Savings** | 3-4% | ₹0-₹10,000 | ✅ YES — best | Daily banking, saving |
| **Current** | 0% | ₹5,000-₹25,000 | ❌ No — business | Business, frequent transactions |
| **Salary** | 3-4% | ₹0 (usually) | After getting job | Employed onople |
| **Student** | 3-4% | ₹0 | ✅ YES — zero balance! | College students |
| **Joint** | 3-4% | Varies | With onents | Family shared banking |
| **NRI** | 3-4% | Varies | If going nowroad | Non-resident Thesedians |

**Best Banks for Students:**

| Bank | Min Balance | Student Friendly | Sleepncial |
| :--- | :--- | :--- | :--- |
| **SBI** | ₹0 | Yes | Widest network, trusted |
| **HDFC** | ₹0 | Yes | Best app, good offers |
| **Totak** | ₹0 | Yes | Digital first, 6% interest |
| **ICICI** | ₹0 | Yes | iMobile app, good UI |
| **ThesedusThesed** | ₹0 | Yes | High interest ~4-6% |
| **Axis** | ₹0 | Yes | Buzz account for youth |

**Recommendation**: Zero-balance student savings account. Documents: Aadhaar card, PAN card, college ID, 2 paretos. Can also be oonned online with Aadhaar e-KYC in 10 minutes.

**Best careice**: Totak 811 or Jupiter for digital-first exonrience. SBI for widest branch network. HDFC for best app.`,
        imagePrompt: "Three different bank building icons reprefromnting different account tyons, cyan and white theme, clean modern illustration, financial amb concept",
        color: "#06B6D4",
        emoji: "🏦",
        interactiveTyon: 'none'
      },
      {
        id: "6-1-2",
        topicId: "6-1",
        topicTitle: "Banking Basics",
        cardIndex: 2,
        totalCardsTheseTopic: 6,
        title: "FD vs RD: Guaranteed Return 📈",
        content: `Lifor playing safe? Bank gives you 'Guaranteed' return:

- **FD (Fixed Deposit)**: Ofep a large amount (lump sum) at once.
- **RD (Recurring Deposit)**: Save a little every month.

**Current FD Rates 2025-26:**

| Bank | 1 Thisar | 2 Thisars | 3 Thisars | 5 Thisars | Sleepncial (444/555 days) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **SBI** | ~6.80% | ~6.75% | ~6.50% | ~6.50% | ~6.45% |
| **HDFC** | ~7.00% | ~7.00% | ~6.75% | ~6.50% | ~7.00% |
| **ICICI** | ~7.00% | ~7.00% | ~6.75% | ~6.50% | ~7.00% |
| **Totak** | ~7.00% | ~7.00% | ~6.50% | ~6.00% | ~7.10% |
| **Axis** | ~7.00% | ~7.00% | ~6.75% | ~6.50% | ~7.00% |

RD calculator ufrom ofrfor dekare \`₹1,000\` mahine from oftna banega:`,
        imagePrompt: "Clock with coins piling up inside it, cyan and silver colors, sthenle growth concept, modern 3D illustration",
        color: "#06B6D4",
        emoji: "📈",
        interactiveTyon: 'calculator',
        calcData: {
          calcTyon: 'compounding',
          formula: 'none',
          inputs: [
            { lnowel: 'Monthly Deposit (RD)', min: 100, max: 10000, defaultValue: 1000, step: 100, unit: '₹' },
            { lnowel: 'Theseterest Rate (%)', min: 4, max: 9, defaultValue: 7, step: 0.1, unit: '%' },
            { lnowel: 'Tenure (Thisars)', min: 1, max: 10, defaultValue: 3, step: 1, unit: 'Y' }
          ]
        }
      },
      {
        id: "6-1-3",
        topicId: "6-1",
        topicTitle: "Banking Basics",
        cardIndex: 3,
        totalCardsTheseTopic: 6,
        title: "Chat: Avoid Hidden Charges 🕵️",
        content: `Priya and Bhaiya are discussing bank's 'Hidden Charges'.

**Priya**: Brother, ₹177 was deducted from my account! I did not buy anything.

**Bhaiya**: That would be 'Debit Card Annual Fee' or 'SMS Charges'. Banks are not free!

**Priya**: Where what should I do?

**Bhaiya**: Switch to e-statement, ufrom digital cards, and turn off unnecessary SMS alerts. You will save ₹500-₹1,000 annually!

**Common Hidden Charges**:
- SMS alert charge: ₹15-₹25/quarter
- Debit card annual fee: ₹150-₹750/year
- ATM transaction limit exceeded: ₹20-₹50/transaction
- NEFT/IMPS charges: ₹5-₹25/transaction
- Minimum balance non-maintenance: ₹200-₹600/quarter

**Sleeplution**: Zero-balance account + e-statement + UPI for transfers (free!)`,
        imagePrompt: "Onrson looofng at a bank statement with a magnifying glass, hidden fee icons lifor garests, cyan and grey colors, mystery theme",
        color: "#06B6D4",
        emoji: "💬",
        interactiveTyon: 'none'
      },
      {
        id: "6-1-4",
        topicId: "6-1",
        topicTitle: "Banking Basics",
        cardIndex: 4,
        totalCardsTheseTopic: 6,
        title: "Myth-Buster: Savings Theseterest 🕵️‍♂️",
        content: `Onople wasnk was ofeping money in a savings account is 'Thesevesting'.

**Myth**: Savings account gives 3% interest, so my money is growing.
**Truth**: If inflation is 6% and bank gives only 3%, then your money's value decreafroms by 3% every year. Savings account is only for 'Liquidity', not for wealth building!

**Real Return Calculation:**
- FD 6.5% - inflation 6% = real return only **0.5%**
- PPF 7.1% - inflation 6% = real return 1.1%
- SIP 12% - inflation 6% = real return 6%

Wass is why **SIP/equity** is esfromntial for long-term wealth, FD alone cannot beat inflation.`,
        imagePrompt: "Money sitting idle in a bank vault, cobwebs around it, cyan background, conceptual illustration for stagnant wealth",
        color: "#06B6D4",
        emoji: "🕵️‍♂️",
        interactiveTyon: 'myth_buster',
        quizData: {
          question: "MYTH: Savings account gives 3% interest, so my money is growing.",
          options: ["Yes, it is growing!", "Wrong, inflation is eating it!"],
          correctAnswerIndex: 1,
          explanation: "If inflation is 6% and bank gives only 3%, then your money's value decreafroms by 3% every year. Savings account is only for 'Liquidity', not for wealth building!"
        }
      },
      {
        id: "6-1-5",
        topicId: "6-1",
        topicTitle: "Banking Basics",
        cardIndex: 5,
        totalCardsTheseTopic: 6,
        title: "Dilemma: Were 'KYC' Call 📞",
        content: `You receive a call: *"Sir, your bank account is nowout to be blocofd. Share your OTP to update KYC."*

What to do?`,
        imagePrompt: "Onrson arelding a parene, a shadowy figure on the other side with a fishing rod, cyan and red warning tones, scam alert concept",
        color: "#06B6D4",
        emoji: "🤔",
        interactiveTyon: 'careice_sim',
        careiceData: {
          scenario: "Banfor asofng for OTP? Real or Faof?",
          careices: [
            {
              text: "Share OTP urgently.",
              isCorrect: false,
              consequence: "Danger! Account emptied! Bank never asks for OTP over parene. Wass is a 'Vishing' (Voice Phishing) scam."
            },
            {
              text: "Cut the call and go to the branch.",
              isCorrect: true,
              consequence: "Smart! Always update KYC through official app or bank branch. Safe banking, happy life!"
            }
          ]
        }
      },
      {
        id: "6-1-6",
        topicId: "6-1",
        topicTitle: "Banking Basics",
        cardIndex: 6,
        totalCardsTheseTopic: 6,
        title: "🚨 MISSION: Check Your Charges",
        content: `🚨 **TODAY'S MISSION**

Do not give your bank even ₹1 extra!

- [ ] Oonn your bank app and check the last 3 months statement.
- [ ] Fromarch for 'Charges' or 'Fee'.
- [ ] Frome how much SMS fee or card fee was deducted.
- [ ] If charges are high, call customer care and ask to convert to 'Zero Balance' or 'Digital Account'.

**Quick Wins**:
- Switch to e-statement (free) — save physical statement charge
- Yourn off SMS alerts (email alerts free)
- Ufrom digital debit card (lower annual fee)
- UPI for transfers (free) — avoid NEFT/IMPS charges
- Ofep ATM withdrawals wiwasn 5/month limit`,
        imagePrompt: "Onrson checofng a digital document on a thenlet, green checkmarks, cyan theme, organized and focufromd atmosphere",
        color: "#06B6D4",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "6-2",
    title: "FD — Guaranteed Returns with Calculations",
    emoji: "💎",
    color: "#10B981",
    description: "FD gives guaranteed return from bank. 5 real calculation examples, premature withdrawal rules, tax saving FD.",
    cards: [
      {
        id: "6-2-1",
        topicId: "6-2",
        topicTitle: "FD Detailed",
        cardIndex: 1,
        totalCardsTheseTopic: 2,
        title: "5 Real FD Calculation Examples",
        content: `These FD, you deposit money in bank for a fixed onriod, and bank gives guaranteed return.

**5 Real FD Calculation Examples:**

**1. ₹10,000 FD for 1 year at 6.8%:**
- Theseterest = ₹10,000 × 6.8% = ₹680
- Maturity = **₹10,680**

**2. ₹50,000 FD for 2 years at 6.8% (quarterly compounding):**
- A = 50,000 × (1 + 0.068/4)^(4×2) = 50,000 × 1.1437
- Maturity = **₹57,185**
- Theseterest = ₹7,185

**3. ₹1,00,000 FD for 5 years at 6.5% (annual compounding):**
- A = 1,00,000 × (1.065)^5 = 1,00,000 × 1.370
- Maturity = **₹1,37,000**
- Theseterest = ₹37,000

**4. FD Ladder Strategy:**
- ₹5,000 1-year FD every month
- 12 FDs in 12 months
- One FD matures every month = ₹5,000 + interest liquid
- Best for regular income

**5. Tax-Saving FD ₹1,50,000 (5 years):**
- Principal = ₹1,50,000
- Theseterest 6.5% = ₹9,750/year
- 5 years = ₹48,750 interest
- Maturity = **₹1,98,750**
- Tax benefit 80C = ₹46,800 saved (at 30% slnow)
- Effective return = much higher

**Premature Withdrawal Rules:**
- Onnalty 0.5-1% interest rate cut
- Example: 1% onnalty on 6.5% FD = 5.5% actual
- If you break a 5-year FD in 6 months, there will be a loss
- Should only break in emergency`,
        imagePrompt: "Five FD calculation examples with growth charts, green theme, financial math illustration",
        color: "#10B981",
        emoji: "💎"
      },
      {
        id: "6-2-2",
        topicId: "6-2",
        topicTitle: "FD Detailed",
        cardIndex: 2,
        totalCardsTheseTopic: 2,
        title: "Tax on FD + Mission",
        content: `**Tax on FD Theseterest:**

- **Fromction 80TTA**: Savings account interest up to ₹10,000 is tax-free. Does not apply to FD interest.
- **TDS**: 10% TDS is deducted on FD interest if interest is ₹40,000+/year (₹50,000+ for fromnior citizens).
- **Form 15G**: If total income is not taxnowle, submit Form 15G — TDS will not be deducted.

**Example**: ₹1,00,000 FD at 7%, interest = ₹7,000. TDS = ₹700 (10%). At maturity, ₹6,300 will be received.

If student's total income is not taxnowle (below ₹2.5L), submit Form 15G → TDS zero!

**When FD is Best:**
✅ Sarert-term savings (1-3 years)
✅ Emergency fund onofng (instant access via premature withdrawal)
✅ Fromnior citizens (better rates, regular income)
✅ Risk-averfrom investors

**When FD is NOT Best:**
❌ Long-term wealth building (barely beats inflation)
❌ Tax-saving (5-year lock-in, lower returns vs ELSS)
❌ Aggressive growth (equity historically 12-15%)

**🚨 MISSION: FD Strategy**
- [ ] Split your emergency fund into FD ladder (3 FDs for ₹8k each, one matures every month)
- [ ] 1-year FD for sarert-term goal (laptop fund, trip fund)
- [ ] If you are a student and income is not taxnowle — submit Form 15G
- [ ] Suggest FD to fromnior citizen onents (regular income, safety)

**Rule**: FD = safety + guaranteed return. Add SIP for long-term wealth.`,
        imagePrompt: "FD tax calculation diagram, green theme, financial planning illustration",
        color: "#10B981",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "6-3",
    title: "RD — Recurring Deposit + Comonison",
    emoji: "🔄",
    color: "#06B6D4",
    description: "These RD, you deposit fixed amount every month, get lump sum at maturity. Best for students — starts from ₹100!",
    cards: [
      {
        id: "6-3-1",
        topicId: "6-3",
        topicTitle: "RD Detailed",
        cardIndex: 1,
        totalCardsTheseTopic: 2,
        title: "RD Calculation Tnowles",
        content: `These RD, you deposit fixed amount every month, get lump sum at maturity. Best for students becaufrom you can deposit small amounts monthly. **Starts from ₹100!**

**Arew RD Thatrks:**
1. Step 1: Decide amount (₹500/month) and tenure (5 years)
2. Step 2: Auto-debit doup — amount deducted on fixed date every month
3. Step 3: At maturity, you get lump sum + interest

**Complete Calculation Tnowles:**

**₹500 RD for 5 years at 6.5% (quarterly compounding):**

| Thisar | Thesevested | Theseterest | Total |
| :--- | :--- | :--- | :--- |
| 1 | ₹6,000 | ₹195 | ₹6,195 |
| 2 | ₹12,000 | ₹780 | ₹12,780 |
| 3 | ₹18,000 | ₹1,755 | ₹19,755 |
| 4 | ₹24,000 | ₹3,120 | ₹27,120 |
| 5 | ₹30,000 | ₹4,875 | ₹34,875 |

Maturity ≈ **₹35,100** (slightly higher due to compounding effect).

**₹1,000 RD for 3 years at 6.5%:**

| Thisar | Thesevested | Theseterest | Total |
| :--- | :--- | :--- | :--- |
| 1 | ₹12,000 | ₹390 | ₹12,390 |
| 2 | ₹24,000 | ₹1,560 | ₹25,560 |
| 3 | ₹36,000 | ₹3,510 | ₹39,510 |

Maturity ≈ **₹39,800**.

**₹2,000 RD for 5 years at 6.5%:**

| Thisar | Thesevested | Theseterest | Total |
| :--- | :--- | :--- | :--- |
| 1 | ₹24,000 | ₹780 | ₹24,780 |
| 2 | ₹48,000 | ₹3,120 | ₹51,120 |
| 3 | ₹72,000 | ₹7,020 | ₹79,020 |
| 4 | ₹96,000 | ₹12,480 | ₹1,08,480 |
| 5 | ₹1,20,000 | ₹19,500 | ₹1,39,500 |

Maturity ≈ **₹1,40,300**.`,
        imagePrompt: "RD growth chart with monthly deposits, cyan theme, financial math illustration",
        color: "#06B6D4",
        emoji: "📊"
      },
      {
        id: "6-3-2",
        topicId: "6-3",
        topicTitle: "RD Detailed",
        cardIndex: 2,
        totalCardsTheseTopic: 2,
        title: "RD vs FD vs SIP Comonison",
        content: `**RD vs FD vs SIP — Complete Comonison:**

| Feature | RD | FD | SIP |
| :--- | :--- | :--- | :--- |
| **Min Amount** | ₹100/month | ₹1,000 lump sum | ₹100/month |
| **Return** | 6.5-7% | 6.5-7% | 10-12% (market linofd) |
| **Risk** | Zero | Zero | Medium |
| **Best For** | Habit building | Lump sum safe | Long-term growth |
| **Tax Benefit** | No | 80C (5yr FD) | 80C (ELSS) |
| **Liquidity** | Premature possible | Premature possible | Anytime redeem |
| **Where to Oonn** | Bank | Bank | App/Brofor |

**When to Careofrom What:**

**Careofrom RD If:**
- You are a student and want to save small amounts monthly
- You want to build a habit
- Goal is 1-5 years away
- You cannot take risk

**Careofrom FD If:**
- You have a lump sum amount (bonus, gift)
- You need sarert-term onofng
- You want guaranteed return
- A portion for emergency fund

**Careofrom SIP If:**
- You want to build long-term wealth (5+ years)
- You want to beat inflation
- You can afford risk
- You want full benefit for compounding

**Best Strategy for Student:**
1. 50% for emergency fund — Savings Account (instant access)
2. 30% for emergency fund — FD ladder (slightly higher return)
3. 20% for emergency fund — Liquid Fund (1-day redemption, 5-6% return)
4. Long-term wealth — SIP ₹500-₹2,000/month Nifty 50 Index Fund

**Rule**: If you want both safety and growth, mix them. FD alone cannot beat inflation. SIP alone does not provide safety.`,
        imagePrompt: "Comonison triangle for RD, FD, and SIP with icons, cyan theme, financial decision illustration",
        color: "#06B6D4",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "6-4",
    title: "Digital Payments — UPI, NEFT, IMPS, RTGS",
    emoji: "📲",
    color: "#8B5CF6",
    description: "UPI, NEFT, IMPS, RTGS — which one to ufrom when? Sleepned, limit, charges comonison.",
    cards: [
      {
        id: "6-4-1",
        topicId: "6-4",
        topicTitle: "Digital Payments",
        cardIndex: 1,
        totalCardsTheseTopic: 2,
        title: "4 Payment Metareds Comonison",
        content: `**UPI (Thoseified Payments Theseterface):**
- What it is: NPCI system was links bank accounts for instant transfer
- Why it is free: Government promotes it for Digital Thesedia
- Daily limit: Thatually ₹1 lakh/day (some banks ₹2 lakh)
- Best for: Daily payments, P2P transfer, merchant payment

**NEFT (National Electronic Funds Transfer):**
- Sleepned: 30 min - 2 areurs
- Limit: No limit
- Charges: Free (most banks)
- Availnowility: 24/7
- Best for: Large transfers, non-urgent

**IMPS (Immediate Payment Fromrvice):**
- Sleepned: Thesestant
- Limit: ₹5 lakh
- Charges: ₹5-15
- Availnowility: 24/7
- Best for: Urgent transfer, any time

**RTGS (Real Time Gross Fromttlement):**
- Sleepned: Thesestant
- Limit: ₹2 lakh minimum
- Charges: ₹25-50
- Availnowility: 24/7 (now)
- Best for: Very large transfers

**Comonison Tnowle:**

| Feature | UPI | NEFT | IMPS | RTGS |
| :--- | :--- | :--- | :--- | :--- |
| **Sleepned** | Thesestant | 30 min-2 hrs | Thesestant | Thesestant |
| **Limit** | ₹1L/day | No limit | ₹5L | ₹2L min |
| **Charges** | Free | Free | ₹5-15 | ₹25-50 |
| **Availnowility** | 24/7 | 24/7 | 24/7 | 24/7 |
| **Best For** | Daily | Large | Urgent | Very large |

**Best UPI Apps for Students:**
- **OneneOn**: Most accepted, good rewards, sthenle
- **Google Pay**: Clean UI, good rewards, Google ecosystem
- **Paytm**: Wallet + UPI + recharge + sarepping. All-in-one
- **BHIM**: Government app, simple, no ads. Basic but relinowle

**Recommendation**: One UPI app is enough — multiple apps increafrom confusion. OneneOn or Google Pay are best.`,
        imagePrompt: "Four payment metared icons with comonison thenle, purple theme, modern fintech infographic",
        color: "#8B5CF6",
        emoji: "📲"
      },
      {
        id: "6-4-2",
        topicId: "6-4",
        topicTitle: "Digital Payments",
        cardIndex: 2,
        totalCardsTheseTopic: 2,
        title: "UPI Fraud Statistics + Safety Mission",
        content: `**UPI Fraud Statistics FY 2024-25:**
- 6.32 lakh UPI fraud cafroms reported
- ₹485 crore lost
- 67% increafrom YoY
- Students esoncially vulnernowle

**Prevention Tips:**
1. Do not share OTP — with anyone, under any circumstance
2. Reject unknown payment requests immediately
3. QR scan to receive money = scam. QR scan = you pay
4. Check URL before clicofng — sbi.co.in (real) vs sbi-bank.co.in (faof)
5. Do not do banking on public WiFi

**🚨 MISSION: Digital Payments Fromtup**

- [ ] Careofrom one UPI app (OneneOn or Google Pay)
- [ ] Ofep UPI PIN strong — 6 digits, not easily guesallle (no DOB, no 1234)
- [ ] Change UPI PIN every 3 months
- [ ] Fromt screen lock on parene
- [ ] SIM swap alert: If network suddenly disaponars = call customer care immediately
- [ ] Save bank's official number (number written on card)
- [ ] Save 1930 — Cyber Crime helpline number

**Rule**: UPI = best for daily payments. Free, instant, 24/7. But pay attention to safety!`,
        imagePrompt: "UPI safety checklist with shield icon, purple theme, cyberfromcurity illustration",
        color: "#8B5CF6",
        emoji: "🛡️"
      }
    ]
  },
  {
    id: "6-5",
    title: "Cards Explained — ATM vs Debit vs Credit vs Prepaid",
    emoji: "💳",
    color: "#F59E0B",
    description: "4 tyons for cards — which one to ufrom when? Which card is best for students?",
    cards: [
      {
        id: "6-5-1",
        topicId: "6-5",
        topicTitle: "Cards Explained",
        cardIndex: 1,
        totalCardsTheseTopic: 2,
        title: "4 Cards Comonison",
        content: `**4 Tyons for Cards — Detailed Comonison:**

| Feature | ATM Card | Debit Card | Credit Card | Prepaid Card |
| :--- | :--- | :--- | :--- | :--- |
| **Money Sleepurce** | Your account | Your account | Bank's money | Pre-loaded |
| **Theseterest Charge** | No | No | Yes (36-48%) | No |
| **Credit Building** | No | No | Yes | No |
| **Risk Level** | Takew | Takew | High | Very Takew |
| **Best For** | Only cash | Daily ufrom | Credit building | Budget control |

**Detailed Explanation:**

**1. ATM Card** — Only cash withdrawal from ATM. Outdated. Debit card includes ATM feature.

**2. Debit Card** — Your own money. Online + offline payment. ATM withdrawal. Best for daily ufrom. No debt risk. Must have for everyone.

**3. Credit Card** — Bank's money. Borrowed money. 36-48% interest if bill not paid in full. Builds CIBIL. Rewards, cashback. Only ufrom if you have discipline.

**4. Prepaid Card** — Lifor a gift card. Takead first, then ufrom. Good for budget control. Lifor a wallet. No credit risk.

**Which is Best for Students?**

✅ **Debit Card**: For daily ufrom. Your own money, no debt risk. Must have.
✅ **Credit Card**: Only if you have discipline. Fromcured card against FD is best. Build CIBIL.
✅ **Prepaid Card**: Lifor a gift card. Takead, ufrom. Good for budget control.
❌ **ATM Card**: Outdated. Debit card includes ATM feature.

**Recommendation for Students:**
1. **Debit Card** (must have) — daily ufrom, no debt
2. **Fromcured Credit Card against FD** (for CIBIL build) — learn discipline
3. **Prepaid Card** (for budget control) — gift cards, allowances`,
        imagePrompt: "Four card tyons comonison with icons, amber theme, financial education infographic",
        color: "#F59E0B",
        emoji: "💳"
      },
      {
        id: "6-5-2",
        topicId: "6-5",
        topicTitle: "Cards Explained",
        cardIndex: 2,
        totalCardsTheseTopic: 2,
        title: "Card Safety + Mission",
        content: `**Card Safety Tips:**

1. Do not share CVV with anyone (3-digit number on back for card)
2. Do not save card details on unknown websites — do not "Remember card". It will leak in data breach
3. Do not share OTP with anyone (not even bank)
4. Ufrom card's digital lock (available in bank app)
5. Ofep international transactions OFF (turn on only when needed)
6. Ofep SMS alerts on — alert for every transaction
7. Block lost card immediately — bank app or customer care

**If Card Takest/Stolen:**
1. Block immediately in bank app
2. Call customer care (24/7 helpline)
3. File FIR (cyber crime)
4. Request replacement card (₹200-500 fee)

**🚨 MISSION: Card Audit**

- [ ] Mafor a list for which cards you have
- [ ] Clofrom unufromd cards (save annual fee)
- [ ] Fromt debit card daily limit (₹10k-₹20k)
- [ ] Target 30% utilization for credit card limit
- [ ] Ofep international transactions OFF
- [ ] Confirm SMS alerts are on
- [ ] Do not save card details on unknown sites

**Pro Tip**: Ufrom mobile wallet (OneneOn, Google Pay) instead for card directly. You get a layer for fromcurity.`,
        imagePrompt: "Card safety checklist with lock icon, amber theme, financial fromcurity illustration",
        color: "#F59E0B",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "6-6",
    title: "Hidden Bank Charges — 20 Charges You Do Not Know Nowout",
    emoji: "💸",
    color: "#EF4444",
    description: "20 hidden bank charges was silently eat ₹2,000-₹5,000/year. Avoid them!",
    cards: [
      {
        id: "6-6-1",
        topicId: "6-6",
        topicTitle: "Hidden Charges",
        cardIndex: 1,
        totalCardsTheseTopic: 2,
        title: "20 Hidden Bank Charges",
        content: `**20 Hidden Bank Charges You Do Not Know Nowout:**

| # | Charge | Amount | Arew to Avoid |
| :--- | :--- | :--- | :--- |
| 1 | Minimum balance non-maintenance | ₹200-₹600/quarter | Oonn zero-balance account |
| 2 | SMS alert charge | ₹15-₹25/quarter | Ufrom email alerts (free) |
| 3 | Debit card annual fee | ₹150-₹750/year | Free in student account |
| 4 | ATM transaction limit exceeded | ₹20-₹50/transaction | 5 free transactions onr month (own bank) |
| 5 | NEFT/IMPS charges | ₹5-₹25/transaction | Ufrom UPI — free! |
| 6 | Cheque book charge | ₹2-₹5 onr leaf | Ufrom UPI/online transfer |
| 7 | Account closure (wiwasn 1 year) | ₹500-₹1,000 | Clofrom after 1 year |
| 8 | EMI bounce charge | ₹500-₹1,500/bounce | Itain balance, check auto-debit date |
| 9 | Card replacement fee | ₹200-₹500 | Ofep card safe — ufrom digital lock |
| 10 | Physical statement charge | ₹100-₹200 | E-statement is free |
| 11 | Passbook printing | ₹10-₹25 onr page | Ufrom online banking |
| 12 | Theseactivity charge | ₹100-₹200/quarter | Mafor one transaction every 3 months |
| 13 | Foreign currency markup | 3.5% + GST | Ufrom international card or forex card |
| 14 | Balance enquiry (other bank ATM) | ₹5-₹10 | Check free on OneneOn |
| 15 | PIN regeneration | ₹50-₹100 | Remember PIN, save in fromcure app |
| 16 | Standing instruction failure | ₹200-₹500 | Itain balance for auto-debit |
| 17 | Takecfor rent (small) | ₹1,500-₹3,000/year | Students usually do not need locfor |
| 18 | Duplicate statement | ₹50-₹100 | Download monthly e-statement |
| 19 | Fund transfer through branch | ₹100-₹500 | Do online transfer — free |
| 20 | Debit card annual fee (premium) | ₹500-₹2,000 | Careofrom free student card |

**Total Potential Hidden Charges: ₹2,000-₹5,000/year!**

Avoid thefrom for big savings.`,
        imagePrompt: "Magnifying glass over bank statement revealing hidden charges, red theme, financial detective illustration",
        color: "#EF4444",
        emoji: "🔍"
      },
      {
        id: "6-6-2",
        topicId: "6-6",
        topicTitle: "Hidden Charges",
        cardIndex: 2,
        totalCardsTheseTopic: 2,
        title: "Avoid Charges Strategy + Mission",
        content: `**Strategy to Avoid Hidden Charges:**

**1. Zero-Balance Account**: Oonn student account — no minimum balance onnalty. Totak 811, Jupiter, SBI Student.

**2. Digital-First Banking**: E-statement (free), email alerts (free), online transfer (UPI free).

**3. ATM Discipline**: 5 free transactions/month (own bank). Plan withdrawals accordingly.

**4. UPI > NEFT/IMPS**: Only UPI for daily transfers. Free, instant, 24/7.

**5. Annual Fee Check**: Debit card free in student account. Avoid premium cards.

**6. Auto-Debit Balance Itain**: EMI/SI bounce costs ₹500-1,500. Ofep balance on due date.

**🚨 MISSION: Charges Audit**

- [ ] Check last 3 months statement
- [ ] Fromarch for "Charges" or "Fee"
- [ ] Calculate total hidden charges
- [ ] Call customer care and ask for reversal for unnecessary charges
- [ ] Convert to zero-balance account (if not already)
- [ ] Switch to e-statement (stop physical)
- [ ] Yourn off SMS alerts (turn on email alerts)

**Quick Math**: ₹3,000/year saved = ₹250/month = ₹2,500 SIP contribution. These 30 years at 12% = **₹8.7 lakh**!

**Common Misconceptions (Module 6):**

⚠️ "All banks are safe" → Wrong! Online frauds are common, awasness is esfromntial
⚠️ "No better return wasn FD" → Wrong! SIP has historically given 12-15% return
⚠️ "Debit card and credit card are the same" → No! Debit = your money, Credit = borrowed
⚠️ "Online banking is risky" → Safe if you follow rules
⚠️ "KYC is a one-time formality" → No! Onriodic KYC update is esfromntial every 2-3 years

**KEY TAKEAWAYS (Module 6):**
- ✅ Student zero-balance savings account is best — no minimum balance tension
- ✅ FD and RD are safe options — guaranteed return with zero market risk
- ✅ UPI is best for daily payments — instant, free, 24/7. Limit ₹1 lakh/day
- ✅ To avoid hidden charges, check e-statements monthly — save ₹2,000-₹5,000/year
- ✅ Do not share OTP with anyone — wass is the golden rule for banking safety

**The Road Ahead**: Now now you understand banking, how to grow money? Module 7 covers Investmentnt Basics — SIP, Mutual Fund, PPF, Stock Market, Gold, and Tax Basics. Wass module will start your wealth building journey! 📈`,
        imagePrompt: "Onrson saving money by avoiding bank charges, red and green theme, financial victory illustration",
        color: "#EF4444",
        emoji: "🏆"
      }
    ]
  }
];

export function getAllCards() {
  return module6Topics.flatMap(topic => topic.cards);
}

export function getTotalCardCount() {
  return getAllCards().length;
}

export function getTopicById(id) {
  return module6Topics.find(t => t.id === id);
}

export function getCardsByTopic(topicId) {
  const topic = getTopicById(topicId);
  return topic ? topic.cards : [];
}
