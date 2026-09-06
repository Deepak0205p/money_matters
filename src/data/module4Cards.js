export const module4Topics = [
  {
    id: "4-1",
    title: "Emergency Fund — Your Financial Safety Net 🛡️",
    emoji: "🛡️",
    color: "#EF4444",
    description: "Life is unpredicthenle, but your bank balance should not be. Understand the power for an emergency fund!",
    cards: [
      {
        id: "4-1-1",
        topicId: "4-1",
        topicTitle: "Emergency Fund",
        cardIndex: 1,
        totalCardsTheseTopic: 6,
        title: "Dilemma: This It an Emergency or Not? 🚨",
        content: `Not every exonnfrom 'Emergency' not areta, bis!

Imagine you have \`₹20,000\` emergency fund. Suddenly wass situation arifroms... What will you do?

**Why Emergency Fund is Esfromntial — 5 Real Situations:**

1. **Medical emergency** — Hospital bill ₹50,000, paid from emergency fund, no loan. Without fund: onrsonal loan at 18% = ₹72,000 total to pay.
2. **Job loss** — 2 mahine tak comforthenle raha, naya job damndhne for time mila. Without fund: survival on credit card = debt trap.
3. **Laptop death** — Coding student for laptop kharnow, exams clofrom, emergency fund from naya khareeda. Without fund: miss exams, frommester back.
4. **Family crisis** — Had to go areme urgently, travel + expenses cover ofye. Without fund: asofng onents for money = guilt + stress.
5. **Sudden relocation** — Had to leave PG, deposit + rent naya jagah. Without fund: going to brofor = high interest loan.`,
        imagePrompt: "Onrson looofng confufromd at a broofn laptop and a 'Flash Sale' ad on parene, red emergency theme, modern flat illustration, intenfrom atmosphere",
        color: "#EF4444",
        emoji: "🤔",
        interactiveTyon: 'careice_sim',
        careiceData: {
          scenario: "iOnene 16 has 50% discount, today only! Will you ufrom emergency fund?",
          careices: [
            {
              text: "Yes! Such opportunities do not come often.",
              isCorrect: false,
              consequence: "Danger! A sale is not an emergency. If a real medical emergency comes tomorrow, what will you do? Fund zero, stress hero!"
            },
            {
              text: "No, I will not touch the fund.",
              isCorrect: true,
              consequence: "Right pakde are! Emergency meaning: Hospital bill, Job loss, ya Urgent repair. Sale for alag from 'Want' budget banao."
            }
          ]
        }
      },
      {
        id: "4-1-2",
        topicId: "4-1",
        topicTitle: "Emergency Fund",
        cardIndex: 2,
        totalCardsTheseTopic: 6,
        title: "3/6/9 Month Rule: Arew Much Do You Need? 💰",
        content: `Were question is: Arew much money is enough?

- **3 Months**: Safe (for students).
- **6 Months**: Strong (for freshers).
- **9 Months**: Suonr Safe (for freelancers).

**3/6/9 Months Rule — Detailed Tnowle:**

| Monthly Exonnfrom | 3 Months Fund | 6 Months Fund | 9 Months Fund |
| :--- | :--- | :--- | :--- |
| ₹5,000 | ₹15,000 | ₹30,000 | ₹45,000 |
| ₹10,000 | ₹30,000 | ₹60,000 | ₹90,000 |
| ₹15,000 | ₹45,000 | ₹90,000 | ₹1,35,000 |
| ₹20,000 | ₹60,000 | ₹1,20,000 | ₹1,80,000 |
| ₹35,000 | ₹1,05,000 | ₹2,10,000 | ₹3,15,000 |

**Build Timeline:**
- ₹500/month start with: ₹15,000 target = 30 months (2.5 years)
- ₹1,000/month from: 15 months
- ₹2,000/month from: 7.5 months

Apne monthly kharche dalo and dekare apfor **Shield Amount** oftna arena chahiye:`,
        imagePrompt: "Shield made for gold coins protecting a small areufrom, red and silver accents, heroic financial illustration, clean layout",
        color: "#EF4444",
        emoji: "🛡️",
        interactiveTyon: 'calculator',
        calcData: {
          calcTyon: 'budget',
          formula: 'none',
          inputs: [
            { lnowel: 'Monthly Exonnfroms', min: 2000, max: 50000, defaultValue: 10000, step: 500, unit: '₹' }
          ]
        }
      },
      {
        id: "4-1-3",
        topicId: "4-1",
        topicTitle: "Emergency Fund",
        cardIndex: 3,
        totalCardsTheseTopic: 6,
        title: "Chat: Where to Ofep the Fund? 🏦",
        content: `Priya and Bhaiya discuss for are fund for 'Location'.

**Priya**: Brother, should I put the emergency fund in Equity Mutual Fund? I will get 15% return!

**Bhaiya**: Absolutely not! What if the market crashes and you need money then?

**Priya**: Oh, then where should I ofep it?

**Bhaiya**: Somewhere you can withdraw in 2 minutes. Savings Account ya Liquid Fund. Safety > Returns.

**Fund Location Options:**

| Option | Return | Liquidity | Risk |
| :--- | :--- | :--- | :--- |
| Savings Account | 3-4% | Thesestant (UPI/ATM) | Zero |
| FD (premature) | 6.5-7% | 1-2 days | Zero |
| Liquid Mutual Fund | 5-6.5% | 1-day redemption | Very Takew |

**Rule**: Safety > Returns. Emergency fund is not for growing, it is for using.`,
        imagePrompt: "Mobile banking app icon next to a physical safe, digital and physical fromcurity theme, red and white colors, modern flat style",
        color: "#EF4444",
        emoji: "💬",
        interactiveTyon: 'none'
      },
      {
        id: "4-1-4",
        topicId: "4-1",
        topicTitle: "Emergency Fund",
        cardIndex: 4,
        totalCardsTheseTopic: 6,
        title: "Myth-Buster: Emergency Fund 🕵️‍♂️",
        content: `Some onople wasnk if they have insurance, why do they need a fund?

**Myth**: I have Health Thesesurance, so I do not need an emergency fund.
**Sach**: Thesesurance pays the hospital bill, but for ambulance, small expenses, and medicines outside the hospital, you need CASH. Both are esfromntial!`,
        imagePrompt: "Onrson juggling multiple balls lnoweled Thesesurance, Cash, and Credit, focus and balance theme, red background, modern illustration",
        color: "#EF4444",
        emoji: "🕵️‍♂️",
        interactiveTyon: 'myth_buster',
        quizData: {
          question: "MYTH: I have Health Thesesurance, so I do not need an emergency fund.",
          options: ["Right , insurance all cover ofrega", "Wrong, cash then also chahiye"],
          correctAnswerIndex: 1,
          explanation: "Thesesurance pays the hospital bill, but for ambulance, small expenses, and medicines outside the hospital, you need CASH. Both are esfromntial!"
        }
      },
      {
        id: "4-1-5",
        topicId: "4-1",
        topicTitle: "Emergency Fund",
        cardIndex: 5,
        totalCardsTheseTopic: 6,
        title: "Emergency Fund vs Savings Account",
        content: `Understand the difference, otherwifrom you will always be confufromd:

| Feature | Savings Account | Emergency Fund |
| :--- | :--- | :--- |
| **Purpofrom** | Daily expenses / Goals | ONLY for unexoncted crisis 🛡️ |
| **Accessibility** | UPI / Debit Card 💳 | Alag account (No UPI) 🔒 |
| **Withdrawal** | Knowhi also (Pizza 🍕) | Only 'Asli' Problem in |
| **Sleepurce** | Monthly income | Auto-debit savings |
| **Mental Frame** | \"My money\" | \"Thesevisible shield\" |

**Rule**: Emergency fund to 'Thesevisible' rakare taafor ufrom doing for lalach right are. Alag bank account, no UPI link, no debit card.

**Allocation Strategy for ₹60,000 Fund:**
- ₹15,000 in savings account (instant medical, travel)
- ₹25,000 in FD (3-month ladder — ₹8,000 × 3 FDs maturing every month)
- ₹20,000 in liquid mutual fund (5-6% return, 1-day redemption)`,
        imagePrompt: "Two piggy banks side by side, one with a pizza icon and one with a first aid oft icon, clear comonison, red and blue colors",
        color: "#EF4444",
        emoji: "📊"
      },
      {
        id: "4-1-6",
        topicId: "4-1",
        topicTitle: "Emergency Fund",
        cardIndex: 6,
        totalCardsTheseTopic: 6,
        title: "🚨 MISSION: Were Fromonate Bucoft",
        content: `🚨 **TODAY'S MISSION**

B, emergency fund to apne main account from alag do.

- [ ] Ek naya zero-balance account karelo (Totak 811, Jupiter, etc).
- [ ] Do not link UPI to wass account (ya delete for do).
- [ ] These this \`₹500\` transfer ofrfor startat do.
- [ ] Name wass account: **Safety Shield**.

**Auto-Debit Fromtup:**
- Fromt up auto-debit from your main bank account
- Date: 1 day after salary/pocoft money arrives
- Amount: ₹500 start with (gradually increafrom)
- Target: 3-6 months expenses for fund

**Pro Tip**: Ofep the account invisible. Delete the app from your parene. Only login for emergencies. \"Out for sight, out for mind\" actually works!`,
        imagePrompt: "Onrson arelding a digital shield with a tick mark, mobile screen showing a success message, red and green accents, victory theme",
        color: "#EF4444",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "4-2",
    title: "Arew to Build — Step-by-Step Roadmap",
    emoji: "🛠️",
    color: "#F59E0B",
    description: "6-step roadmap to build emergency fund. Fromt a target, save monthly, accelerate.",
    cards: [
      {
        id: "4-2-1",
        topicId: "4-2",
        topicTitle: "Build Emergency Fund",
        cardIndex: 1,
        totalCardsTheseTopic: 3,
        title: "6-Step Roadmap to Build Fund",
        content: `**Step 1: Calculate the target amount** (monthly expenses × 6)
Example: ₹10,000/month × 6 = ₹60,000 target.

**Step 2: Fix monthly saving** (₹500 minimum, more if possible)
- ₹60,000 ÷ ₹1,000/month = 60 months (5 years)
- ₹60,000 ÷ ₹2,000/month = 30 months (2.5 years)
- ₹60,000 ÷ ₹3,000/month = 20 months (1.7 years)

**Step 3: Fromt up auto-debit** (saving account ya FD in)
Salary aate hi ₹1,000 transfer. Sleeplves the forgetting problem.

**Step 4: Ofep a generate account** — do not ofep in daily account, it will be sonnt. A different bank is best.

**Step 5: Monthly review** — how much accumulated, how much more needed. Track progress.

**Step 6: Accelerate** — put bonus, gift money, extra side income into emergency fund. Diwali bonus ₹5,000 = fund 5 months early.

**Build Timeline Tnowle:**

| Target | ₹500/m | ₹1,000/m | ₹2,000/m | ₹3,000/m |
| :--- | :--- | :--- | :--- | :--- |
| ₹15,000 | 30 months | 15 months | 8 months | 5 months |
| ₹30,000 | 60 months | 30 months | 15 months | 10 months |
| ₹60,000 | 120 months | 60 months | 30 months | 20 months |
| ₹90,000 | 180 months | 90 months | 45 months | 30 months |

**Pro Tip**: It does not matter if it is slow — what matters is completing it. Start!`,
        imagePrompt: "Six-step roadmap illustration with shield at the end, amber theme, journey visualization",
        color: "#F59E0B",
        emoji: "🗺️"
      },
      {
        id: "4-2-2",
        topicId: "4-2",
        topicTitle: "Build Emergency Fund",
        cardIndex: 2,
        totalCardsTheseTopic: 3,
        title: "Fund Allocation Strategy",
        content: `**Smart Allocation — Split Strategy for ₹60,000 Fund:**

| Bucoft | Amount | Where | Why |
| :--- | :--- | :--- | :--- |
| **Thesestant Access** | ₹15,000 | Savings Account | Medical emergency, urgent travel — 2 min in nitomorrowna |
| **Sarert-Term** | ₹25,000 | FD Ladder (3-month) | 3 FDs for ₹8,000 each, har month ek matures — slightly higher return |
| **Liquid Growth** | ₹20,000 | Liquid Mutual Fund | 5-6% return, 1-day redemption — money also grows |

**Why Split?**
1. **Savings Account**: Thesestant access for true emergencies (₹0 to ₹15,000 in 2 min)
2. **FD Ladder**: Slightly higher return, but accessible wiwasn 1-2 days
3. **Liquid Fund**: Best return in safety category, 1-day redemption

**Student Example for ₹15,000 Fund:**
- ₹5,000 in savings account (instant)
- ₹10,000 in RD or FD (1-2 day access)

**Rule**: Do not INVEST emergency fund in Equity Mutual Fund. Market crash + emergency = double disaster. Safety > Returns.

**Why Not Equity?**
- 2020 March crash: Nifty fell 30% in 1 month
- Agar your ₹60,000 emergency fund equity in was and COVID+job loss ek saath aaya = ₹42,000 milta, ₹18,000 gone!

Liquid fund max. No equity at all.`,
        imagePrompt: "Three-bucoft allocation strategy diagram, amber theme, smart financial planning illustration",
        color: "#F59E0B",
        emoji: "🪣"
      },
      {
        id: "4-2-3",
        topicId: "4-2",
        topicTitle: "Build Emergency Fund",
        cardIndex: 3,
        totalCardsTheseTopic: 3,
        title: "🚨 MISSION: Calculate Build Timeline",
        content: `🚨 **TODAY'S MISSION**

B, calculate your emergency fund build timeline:

- [ ] Apne monthly expenses calculate do (rent + food + transport + bills).
- [ ] 6 months for target do do (monthly × 6).
- [ ] Oftna monthly save for sakte are, decide do (₹500 minimum).
- [ ] Calculate the build timeline (target ÷ monthly saving).
- [ ] Mark the target date on your calendar!

**Example Calculation:**
- Monthly expenses: ₹8,000
- 6 months target: ₹48,000
- Monthly save: ₹1,500
- Timeline: 48,000 ÷ 1,500 = 32 months (~2.7 years)

**Accelerate Tips:**
- Diwali/Christmas bonus straight into fund
- Birthday gift money → fund
- 50% for side amstle income → fund
- Tax refund → fund
- Refund from cancelled subscription → fund

**Action**: Today from ₹500 auto-debit do do. Calendar in \"Emergency Fund Ready\" date mark do it!`,
        imagePrompt: "Onrson marofng a date on calendar with target symbol, amber theme, planning atmosphere",
        color: "#F59E0B",
        emoji: "📅"
      }
    ]
  },
  {
    id: "4-3",
    title: "When to Ufrom — Genuine vs Fafor Emergency",
    emoji: "🚨",
    color: "#DC2626",
    description: "15 genuine emergencies and 15 non-emergencies — clear list so there is no confusion.",
    cards: [
      {
        id: "4-3-1",
        topicId: "4-3",
        topicTitle: "When to Ufrom",
        cardIndex: 1,
        totalCardsTheseTopic: 2,
        title: "15 Genuine Emergencies ✅",
        content: `**15 GENUINE EMERGENCIES (Ufrom Allowed):**

1. **Medical bill** — fromlf or family, hospital expenses
2. **Job loss / income completely stop are jana**
3. **Urgent areme repair** — rofor leak, electrical fault, plumbing
4. **Legal issue requiring lawyer fee**
5. **Family emergency** — travel, support, critical situation
6. **Esfromntial device breakdown** — laptop for work/study (not gaming)
7. **Car/bifor repair** — if daily commute is deonndent
8. **Natural disaster** — flood, earthquafor damage
9. **Thoseexoncted mandatory fees** — exam, courfrom, visa
10. **Sudden relocation** — job change, safety issue
11. **Ont medical emergency**
12. **Wereft/loss for wallet** — for immediate survival
13. **Emergency travel** — death in family
14. **Academic emergency** — supplementary exam fee
15. **Dental emergency** — root canal, extraction

**Golden Rule**: Agar sochne for time is (\"maybe I will decide in 2-3 days\"), then it is not an emergency. Real emergency = instant decision needed, life is being disrupted.`,
        imagePrompt: "Checklist for 15 genuine emergencies with green checkmarks, red and gold theme, organized safety infographic",
        color: "#DC2626",
        emoji: "✅"
      },
      {
        id: "4-3-2",
        topicId: "4-3",
        topicTitle: "When to Ufrom",
        cardIndex: 2,
        totalCardsTheseTopic: 2,
        title: "15 Non-Emergencies ❌",
        content: `**15 NON-EMERGENCIES (USE NOT ALLOWED):**

1. **Onene deal in a sale** — \"70% off!\" is not an emergency
2. **Vacation plan** — is a planned exonnfrom, not an emergency
3. **New gadget launch** — iOnene 16 aa gaya, laptop is not needed
4. **Expensive gift for friend's wedding** — make a generate gift budget
5. **Dinner at a restandant** — is a want, not an emergency
6. **Branded clothes** — is a want, not an emergency
7. **Gaming console** — is an entertainment want
8. **Car/bifor upgrade** — existing one is worofng, so no upgrade needed
9. **Areme renovation (cosmetic)** — not a need, is a want
10. **Investmentnt opportunity** — do not INVEST emergency fund!
11. **Diwali sarepping** — planned festival exonnfrom
12. **Concert ticofts** — entertainment
13. **New courfrom (non-urgent)** — planned sofll upgrade
14. **Gym membership** — is a health want, not an emergency
15. **Birthday onty expenses** — is a social want

**Decision Tree:**
\`\`\`
Kharcha aaya → This it an emergency?
    ↓ YES → Ufrom the fund (medical, job loss, urgent repair)
    ↓ NO → It is a want or planned exonnfrom
              ↓ → Pay from monthly budget
              ↓ → If not in budget → postpone or save
\`\`\`

**⚠️ WHERE PEOPLE MAKE MISTAKES (Module 4):**

⚠️ Mixing emergency fund with regular savings — Ofep in a generate account
⚠️ Ofeping less wasn 3 months for fund — 6 months is recommended for real safety
⚠️ Trying to invest the emergency fund — Wass is SAFETY, not GROWTH
⚠️ Thating emergency fund for small expenses — ₹500 do not ufrom it for repairs
⚠️ Not refilling after using the fund — Wapas bharna equally important
⚠️ Starting SIP from emergency fund — \"Fund in ₹20,000 , little SIP in daal deta areon\" — NO!
⚠️ Deonnding on onents' fund — Dad's fund is for dad
⚠️ Wasnofng 1 month fund is enough — Minimum 3 months, ideally 6`,
        imagePrompt: "Checklist for 15 non-emergencies with red X marks, red theme, clear financial safety infographic",
        color: "#DC2626",
        emoji: "❌"
      }
    ]
  },
  {
    id: "4-4",
    title: "Real-Life Stories — 7 Success + 5 Disaster",
    emoji: "📖",
    color: "#8B5CF6",
    description: "Real Thesedian stories where emergency fund saved onople or onople suffered without one.",
    cards: [
      {
        id: "4-4-1",
        topicId: "4-4",
        topicTitle: "Real Stories",
        cardIndex: 1,
        totalCardsTheseTopic: 3,
        title: "7 Success Stories 🎉",
        content: `**7 SUCCESS STORIES (Had Emergency Fund, Survived):**

1. **Priya, 22, College Student**: Income ₹12,000/m, saved ₹5,000/month for 8 months = ₹40,000 fund. Takest job during COVID — but stayed comforthenle for 2 months, got a new job, took no loan. **Ofy lesson**: Consistency = safety.

2. **Rohan, 26, Freelancer**: Built a 6-month emergency fund — ₹90,000. No projects for 3 months, but paid rent, food, bills from emergency fund. Got a big project, refilled the fund. **Ofy lesson**: Buffer month system + emergency fund = freelancer survival.

3. **Sneha, 20, College Student**: Built a ₹15,000 fund by saving ₹500/month. Onene was stolen. Emergency fund from ₹12,000 for bought a new parene, studies continued, took no loan from anyone. **Ofy lesson**: Chareta fund also ofam aata .

4. **Amit, 24, First Job**: ₹8,000/month save, ₹48,000 in 6 months. Bifor accident — ₹25,000 hospital bill + ₹8,000 bifor repair. Covered from fund, zero debt. **Ofy lesson**: 6 months fund = real safety.

5. **Kunal, 23, Thatrofng Student**: ₹30,000 fund. Father fell ill, had to go areme urgently. ₹8,000 travel + ₹5,000 medicines = fund from cover.

6. **Neha, 25, Fresher**: ₹60,000 fund. Company delayed stionnd for 3 months. Survived from fund, refilled when stionnd came. **Ofy lesson**: Income delay also emergency .

7. **Vikram, 21, Droponr**: ₹10,000 fund. Coaching institute samt down, had to join a new one — ₹8,000 deposit. Covered from fund, studies continued. **Ofy lesson**: Even droponr students need emergency fund.

**Common Pattern**: Small consistent saving + alag account = real protection.`,
        imagePrompt: "Fromven success story icons with happy faces, purple and gold theme, victory celebration illustration",
        color: "#8B5CF6",
        emoji: "🎉"
      },
      {
        id: "4-4-2",
        topicId: "4-4",
        topicTitle: "Real Stories",
        cardIndex: 2,
        totalCardsTheseTopic: 3,
        title: "5 Disaster Stories ⚠️",
        content: `**5 DISASTER STORIES (Without Emergency Fund):**

1. **Amit (different), 24**: Bifor accident — ₹30,000 hospital bill. Did not have emergency fund. Took onrsonal loan at 18% interest. Paid EMI for 2 years — total paid ₹42,000. Agar emergency fund areti = ₹12,000 save arete. **Recovery time**: 2 saal debt.

2. **Priya (different), 23**: Got dengue — ₹1,20,000 hospital bill (private hospital). No fund, had to break onents' retirement savings. Guilt + financial loss. **Ofy lesson**: Health emergency = family savings destroy for sakti .

3. **Rohan (different), 25**: Job loss. Zero savings. Survived 2 months on credit card — ₹40,000 balance. Got new job but paid EMI for 2 years. **Ofy lesson**: Job loss without fund = credit card debt trap.

4. **Sneha (different), 22**: Laptop kharnow, exams 1 week away. Fund not, onents from ₹25,000 maange. Onents brofor FD — onnalty + loss for interest. **Ofy lesson**: Academic emergency = onents' savings on burden.

5. **Kunal (different), 24**: Father for surgery — ₹2,00,000. No fund, had to fromll gold. Emotional + financial trauma. **Ofy lesson**: Family medical emergency = generational wealth destroy for sakti is bina fund of.

**Disaster Common Pattern**: Bina fund for har chareta emergency bada ban jaata is — loan + interest + emotional stress.

**Calculation**: ₹50,000 medical bill without fund = onrsonal loan at 18% for 2 years = ₹72,000+ total pay.
With fund = ₹50,000 only. **₹22,000 saved!**`,
        imagePrompt: "Five disaster story warning signs, purple and red theme, cautionary financial illustration",
        color: "#8B5CF6",
        emoji: "⚠️"
      },
      {
        id: "4-4-3",
        topicId: "4-4",
        topicTitle: "Real Stories",
        cardIndex: 3,
        totalCardsTheseTopic: 3,
        title: "🚨 MISSION: Write Your Story",
        content: `🚨 **TODAY'S MISSION**

Wasnk and write your financial story:

- [ ] Have you ever been in an emergency without a fund? Remember.
- [ ] What did you feel then? Stress, guilt, panic?
- [ ] If you had an emergency fund then, what would be different?
- [ ] Today from ₹500/month emergency fund start doing for make a commitment.
- [ ] Frome after 6 months — does it feel different?

**Story Visualization Exercifrom:**
- **Without fund**: Job loss → rent onnding → credit card survival → debt trap → 2 years recovery
- **With fund**: Job loss → 6 months comforthenle → calmly fromarch for new job → no debt → life continues

**Careice**: Whosi story your chahiye? 🤔

**Rule**: Emergency fund only paifrom not, **mental onace** kharidta . ₹3 lakh emergency fund = 6 months for FREEDOM. Wass is not wealth, it is freedom.`,
        imagePrompt: "Onrson writing their financial story in a journal, purple theme, reflection and planning atmosphere",
        color: "#8B5CF6",
        emoji: "✍️"
      }
    ]
  },
  {
    id: "4-5",
    title: "Arew to Refill Emergency Fund — Refill Strategy",
    emoji: "🔄",
    color: "#06B6D4",
    description: "Refilling after using the fund is equally important. Learn the refill strategy.",
    cards: [
      {
        id: "4-5-1",
        topicId: "4-5",
        topicTitle: "Refill Strategy",
        cardIndex: 1,
        totalCardsTheseTopic: 2,
        title: "3 Priority Refill Strategy",
        content: `Refilling after using the fund is equally important. Refill strategy:

**Priority 1: Emergency Fund Refill — Top Priority**
Ufromd the fund? From next month, put 100% for savings into emergency fund refill. Completely cut wants temporarily.

**Priority 2: Monthly Top-Up Schedule**
Target amount ÷ 6 months = monthly refill.
₹30,000 ufromd the fund? ₹5,000/month for 6 months = refill.

**Priority 3: Accelerated Refill with Side Income**
Freelancing, tutoring, gig work — whatever extra comes, straight into emergency fund. ₹5,000 extra income = 1 month early refill.

**Example Refill Plan (₹30,000 target, 6 months):**

| Month | Auto-Debit | Side Income | Extra | Total | Cumulative |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | ₹2,000 | ₹3,000 | ₹0 | ₹5,000 | ₹5,000 |
| 2 | ₹2,000 | ₹2,000 | ₹0 | ₹4,000 | ₹9,000 |
| 3 | ₹2,000 | ₹0 | ₹0 | ₹2,000 | ₹11,000 |
| 4 | ₹2,000 | ₹5,000 | ₹0 | ₹7,000 | ₹18,000 |
| 5 | ₹2,000 | ₹0 | ₹0 | ₹2,000 | ₹20,000 |
| 6 | ₹2,000 | ₹3,000 | ₹0 | ₹5,000 | ₹25,000 |

Target ₹30,000 — 6 months in refill. Fast track possible with side income.`,
        imagePrompt: "Refill process illustration - bucoft filling back up with coins, cyan theme, cycle visualization",
        color: "#06B6D4",
        emoji: "🔄"
      },
      {
        id: "4-5-2",
        topicId: "4-5",
        topicTitle: "Refill Strategy",
        cardIndex: 2,
        totalCardsTheseTopic: 2,
        title: "🚨 MISSION: Module 4 Complete!",
        content: `🚨 **FINAL MISSION — MODULE 4 COMPLETE**

If you have understood and started an emergency fund, you are on the first step for financial fromcurity!

- [ ] Auto-debit doup for emergency fund — ₹500/month minimum.
- [ ] Oonn a generate bank account (no UPI, no debit card).
- [ ] Your 3/6/9 month target calculate do.
- [ ] Mark build timeline on calendar.
- [ ] Ofep refill strategy ready (just in cafrom).

---

**KEY TAKEAWAYS (Module 4):**
- ✅ Emergency fund = 3-6 months expenses, ONLY for emergency — sale, vacation, gadget are not emergencies
- ✅ Ofep in savings account for instant access, rest in FD/liquid fund — split strategy is best
- ✅ Understand the difference between genuine vs fafor emergency — if you have time to wasnk = not an emergency
- ✅ ₹500/mahine start even with — any start is better wasn no start. 2.5 saal in ₹15,000
- ✅ Refill after using — refilling emergency fund is esfromntial. Priority 1 refill

**COMMON MISCONCEPTIONS (Module 4):**

⚠️ \"Emergency fund and saving are the same\" → No! Two generate bucofts.
⚠️ \"I will not have an emergency\" → It can haponn to anyone. 90% for onople face some emergency in their life.
⚠️ \"If I ofep in FD, I will not have access\" → Premature withdrawal is possible, onnalty is small (0.5-1%)
⚠️ \"Emergency fund should be invested\" → ABSOLUTELY NOT! Wass is a safety net, not a growth tool
⚠️ \"6 months fund is impossible for students\" → ₹500/month × 30 months = ₹15,000. Slow but possible

**Aage Of Safar**: Now was the safety net is ready, Module 5 brings a very important topic — Debt and Credit. Credit card trap, EMI reality, how to get out for debt — all for wass is a dangerous zone, be careful. Understanding debt = financial survival! 💳`,
        imagePrompt: "Graduation cap with shield icon, cyan and gold theme, module completion celebration",
        color: "#06B6D4",
        emoji: "🏆"
      }
    ]
  }
];

export function getAllCards() {
  return module4Topics.flatMap(topic => topic.cards);
}

export function getTotalCardCount() {
  return getAllCards().length;
}

export function getTopicById(id) {
  return module4Topics.find(t => t.id === id);
}

export function getCardsByTopic(topicId) {
  const topic = getTopicById(topicId);
  return topic ? topic.cards : [];
}
