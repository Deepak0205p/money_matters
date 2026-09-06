export const module9Topics = [
  {
    id: "9-1",
    title: "Insurance Basics — Your Risk Shield 🛡️",
    emoji: "🛡️",
    color: "#3B82F6",
    description: "Insurance isn't boring — it's a life-saving tool. Understand how a small premium can save you from huge bills!",
    cards: [
      {
        id: "9-1-1",
        topicId: "9-1",
        topicTitle: "Insurance Basics",
        cardIndex: 1,
        totalCardsInTopic: 6,
        title: "Dilemma: Bill or Premium? 🏥",
        content: `Imagine a medical emergency comes and the hospital bill is ₹2 Lakh.

You have two paths. Which one will you choose?

**The Insurance Funda is Clear:**
Accept a small regular loss (premium) so you can avoid a big unexpected loss. This is not gambling — this is risk management.

**Real Indian Example**: Sneha, 22, a college student, bought health insurance for ₹6,000/year. After 6 months she got dengue — hospital bill ₹1,20,000. Insurance covered ₹1,10,000 (₹10,000 deductible). Sneha only had ₹30,000 in savings — without insurance she would have taken a personal loan or burdened her parents. **Insurance saved her from debt for just a ₹6,000 premium.**`,
        imagePrompt: "Person standing between a giant hospital bill and a small shield labeled 'Insurance', blue theme, intense decision making atmosphere, modern illustration",
        color: "#3B82F6",
        emoji: "🤔",
        interactiveType: 'choice_sim',
        choiceData: {
          scenario: "Got dengue, hospital bill ₹2 Lakh! What's your preparation?",
          choices: [
            {
              text: "I'll use all my savings.",
              isCorrect: false,
              consequence: "Painful! Your 3 years of hard work (savings) went to zero in 3 days. Now you have to start from zero again."
            },
            {
              text: "The insurance company will pay the bill!",
              isCorrect: true,
              consequence: "Smart! You paid ₹6k premium for the year, and the company paid the ₹2 Lakh bill. Your savings are completely safe!"
            }
          ]
        }
      },
      {
        id: "9-1-2",
        topicId: "9-1",
        topicTitle: "Insurance Basics",
        cardIndex: 2,
        totalCardsInTopic: 6,
        title: "Term vs Endowment: The Real Truth 💡",
        content: `Life Insurance comes in two types. One that is 'sold' to you by scaring you, and one that gives real 'Protection'.

| Feature | Term Insurance | Endowment (LIC/Mix) |
| :--- | :--- | :--- |
| **Cover** | ₹1 Crore 🚀 | ₹5 - ₹10 Lakh 📉 |
| **Premium** | ₹500 - ₹800/m | ₹3,000 - ₹5,000/m |
| **Maturity** | Zero (Pure Safety) | Small amount (5-6%) |
| **Returns** | N/A (protection) | 4-6% p.a. guaranteed |
| **Best For** | Income replacement | Forced savings (not recommended) |
| **Recommendation** | **BEST — buy this!** | **Avoid — low returns, low cover** |

**Rule**: Don't mix insurance with investment. **Term Plan + SIP = Best Combo!**

**Comparison Example (25 years, ₹10,000/month budget):**

| Option | Cover | 20 Years Later |
| :--- | :--- | :--- |
| **Endowment** ₹10,000/m | ₹5 lakh | ~₹46 lakh + ₹5 lakh cover |
| **Term Plan ₹500/m + SIP ₹9,500/m** | ₹50 lakh | ~₹85 lakh SIP corpus + ₹50 lakh cover |

Option B has **85% more wealth + 10x more protection**. Clear winner? Term + SIP.`,
        imagePrompt: "Two scales, one heavily weighted with a large shield, the other with a small bag of coins, clear comparison, blue and white colors",
        color: "#3B82F6",
        emoji: "📊",
        interactiveType: 'none'
      },
      {
        id: "9-1-3",
        topicId: "9-1",
        topicTitle: "Insurance Basics",
        cardIndex: 3,
        totalCardsInTopic: 6,
        title: "Chat: The Funda of Health Insurance 📱",
        content: `Priya and Bhaiya are discussing why you should buy insurance at a 'Young' age.

**Priya**: Bhaiya, I'm just 21, totally fit! Why do I need insurance?

**Bhaiya**: Priya, accidents and viral infections don't come checking your age. Plus, you'll get a cheaper premium right now!

**Priya**: Cheap means how much?

**Bhaiya**: If you buy now, it's ₹5,000/year; at 35, the same will be ₹15,000. Buying early means saving both money and stress!

**Why Buy Insurance Early?**
1. **Lower premium** — ₹5,000/year at 21, ₹15,000/year at 35 (same cover)
2. **Waiting period ends sooner** — 2-4 year wait for pre-existing diseases
3. **Healthier** — fewer pre-existing conditions, easier approval
4. **Longer coverage** — start early = more years of protection
5. **Mental peace** — no more "I don't have money" stress`,
        imagePrompt: "Two people chatting, one looks healthy and active, the other holding an insurance card, blue and gold theme, modern flat style",
        color: "#3B82F6",
        emoji: "💬",
        interactiveType: 'none'
      },
      {
        id: "9-1-4",
        topicId: "9-1",
        topicTitle: "Insurance Basics",
        cardIndex: 4,
        totalCardsInTopic: 6,
        title: "Myth-Buster: Waste of Money? 🕵️‍♂️",
        content: `People think that if they don't make a claim, the insurance premium is 'Wasted'.

**Myth**: I've been paying premium for 5 years, nothing happened. My money is wasted!
**Truth**: Insurance is a 'Service', not an investment. You bought 5 years of 'Peace of Mind' that if something happens, you won't be ruined. Like a car seatbelt — would you want an accident to happen just so the seatbelt gets 'used'? No, right!`,
        imagePrompt: "Person throwing a small coin into a fire, but the fire is actually a protective dome over a house, blue background, conceptual art",
        color: "#3B82F6",
        emoji: "🕵️‍♂️",
        interactiveType: 'myth_buster',
        quizData: {
          question: "MYTH: I've been paying premium for 5 years, nothing happened. My money is wasted!",
          options: ["Yes, I should get it back!", "Wrong, I got peace of mind!"],
          correctAnswerIndex: 1,
          explanation: "Insurance is a 'Service', not an investment. You bought 5 years of 'Peace of Mind' that if something happens, you won't be ruined. Like a car seatbelt — would you want an accident to happen just so the seatbelt gets 'used'? No, right!"
        }
      },
      {
        id: "9-1-5",
        topicId: "9-1",
        topicTitle: "Insurance Basics",
        cardIndex: 5,
        totalCardsInTopic: 6,
        title: "Term Insurance Calculator 🧮",
        content: `See how a 'Pure Term Plan' secures you and your family without breaking your budget.

Slide to see how much a ₹1 Crore cover will cost:`,
        imagePrompt: "Shield with a giant '1 Crore' written on it, person standing confidently behind it, blue and silver theme, heroic finance concept",
        color: "#3B82F6",
        emoji: "🧮",
        interactiveType: 'calculator',
        calcData: {
          calcType: 'emi',
          formula: 'none',
          inputs: [
            { label: 'Target Cover (Lakhs)', min: 10, max: 200, defaultValue: 50, step: 10, unit: 'L' },
            { label: 'Your Age', min: 18, max: 40, defaultValue: 22, step: 1, unit: 'Y' }
          ]
        }
      },
      {
        id: "9-1-6",
        topicId: "9-1",
        topicTitle: "Insurance Basics",
        cardIndex: 6,
        totalCardsInTopic: 6,
        title: "🚨 MISSION: Policy Audit",
        content: `🚨 **TODAY'S MISSION**

Bro, protect your family from financial shock!

- [ ] Ask your parents if they have 'Health Insurance'?
- [ ] If they do, check if your name (dependent) is included?
- [ ] Check what the total 'Sum Insured' is (Minimum ₹5 Lakh recommended).
- [ ] If there's no insurance, check options on PolicyBazaar today.

**Quick Action Items:**
- Health insurance: ₹5L-₹10L cover for family
- Term plan (if parents depend on you): ₹50L cover at age 22 = ₹400/month
- Vehicle insurance (if you have a bike/car): Comprehensive mandatory
- Compare on PolicyBazaar/Coverfox for best rates`,
        imagePrompt: "Person checking a paper document with parents in the background, warm and responsible atmosphere, blue accents, realistic style",
        color: "#3B82F6",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "9-2",
    title: "Health Insurance — Complete Guide for Students",
    emoji: "🏥",
    color: "#EF4444",
    description: "Health insurance is the most important insurance. Student options, claim process, common rejection reasons.",
    cards: [
      {
        id: "9-2-1",
        topicId: "9-2",
        topicTitle: "Health Insurance",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "Student Health Insurance Options",
        content: `Health insurance is the most important insurance because medical costs in India are skyrocketing.

**Hospital Costs Reality Check:**
- Private hospital ICU: ₹15,000-₹50,000 per day
- Normal delivery: ₹30,000-₹1,00,000
- Appendix surgery: ₹40,000-₹1,60,000
- Angioplasty: ₹2,00,000-₹5,00,000

These amounts can be devastating for a middle-class family.

**Health Insurance Options for Students:**

1. **Individual health plan** — ₹5 lakh cover, age 21-25, premium ₹5,000-₹8,000/year
   - Plans: Star Health Young Star, HDFC Ergo Optima Secure, SBI General Super Health

2. **Add to parents' floater plan** — If already covered in a family floater, a separate plan isn't necessary. But check if the sum insured is sufficient.

3. **Student-specific plans** — Some insurers offer campus-based plans, lower premiums, basic coverage. Check with your college.

4. **Employer-provided** — Companies provide this when you get a job. But it's temporary — leave the job = insurance ends.

**Individual vs Floater Plan Comparison:**

| Feature | Individual Plan | Family Floater |
| :--- | :--- | :--- |
| **Cover utilization** | Full sum insured only for you | All members share |
| **Premium (age 21-25)** | ₹5,000-₹8,000/year | ₹12,000-₹20,000/year (2+1) |
| **Best for** | Students away from home | Families staying together |
| **Risk covered** | Only your health | If one member makes a big claim, others' cover reduces |
| **Flexibility** | Customize as you wish | Depends on overall family needs |

**5 Essential Things to Check Before Buying:**

1. **Waiting period for pre-existing diseases** — 2-4 years. If you have any condition (diabetes, thyroid, PCOD) this is critical. Declare all conditions, hiding them can lead to claim rejection.

2. **Room rent capping** — Many plans limit room rent to 1-2% of sum insured. ₹5,000/night cap on a ₹5 lakh policy. Get a plan with no-limit for better rooms.

3. **Cashless network hospitals** — Check if the insurance company has network hospitals in your city/college area. Cashless = you don't pay, the hospital bills the company directly.

4. **Co-pay clause** — Some plans require you to pay 10-20% yourself. 20% co-pay on a ₹5 lakh bill = ₹1 lakh from your pocket. Avoid co-pay or keep it low.

5. **Restoration benefit** — If you make a claim once and the sum insured is exhausted, does it get restored on renewal? Get a plan with restoration benefit — this is critical.`,
        imagePrompt: "Health insurance comparison with hospital icons, red theme, medical financial illustration",
        color: "#EF4444",
        emoji: "🏥"
      },
      {
        id: "9-2-2",
        topicId: "9-2",
        topicTitle: "Health Insurance",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "Hospital Costs + Claim Process + Mission",
        content: `**Average Treatment Costs (Government vs Private):**

| Treatment | Government | Private |
| :--- | :--- | :--- |
| Dengue Treatment | ₹10,000-₹30,000 | ₹50,000-₹2,00,000 |
| Appendix Surgery | ₹15,000-₹40,000 | ₹40,000-₹1,60,000 |
| Cataract Surgery (per eye) | ₹8,000-₹30,000 | ₹30,000-₹1,40,000 |
| Normal Delivery | ₹5,000-₹15,000 | ₹30,000-₹1,00,000 |
| Angioplasty | ₹1,00,000-₹2,00,000 | ₹2,00,000-₹5,00,000 |
| ICU per day | ₹3,000-₹5,000 | ₹15,000-₹50,000 |
| Knee Replacement | ₹1,50,000-₹3,00,000 | ₹3,00,000-₹8,00,000 |

**Top Health Insurance Plans for Students (Verify current premiums):**

| Plan | Cover | Premium (Age 21-25) | Special |
| :--- | :--- | :--- | :--- |
| Star Young Star | ₹5 lakh | ₹5,500-₹7,000 | No co-pay, restoration |
| HDFC Ergo Optima Secure | ₹5 lakh | ₹6,000-₹8,000 | Secure restore benefit |
| Niva Bupa ReAssure | ₹5 lakh | ₹5,000-₹7,000 | Unlimited restore |
| ICICI Lombard Complete Health | ₹5 lakh | ₹4,500-₹6,500 | OPD cover included |

**Claim Process:**

**Cashless Claim**:
1. Admit to hospital → Give insurance card at TPA desk
2. Pre-authorization → Treatment
3. Hospital bills the company directly
4. You pay ₹0 (except co-pay/deductible)

**Reimbursement Claim**:
1. You pay first
2. After discharge, submit bills + reports
3. Company processes in 15-30 days
4. Amount comes to your bank

**Common Claim Rejection Reasons:**
1. Hiding pre-existing disease
2. Claim during waiting period
3. Non-network hospital (no cashless)
4. Policy lapsed — didn't renew on time
5. Alcohol-related injury
6. Cosmetic surgery (non-medical)
7. Adventure sports injury (usually excluded)

**🚨 MISSION: Health Insurance Plan**

- [ ] Compare 3-4 plans on PolicyBazaar
- [ ] Choose ₹5L-₹10L cover (₹10L recommended)
- [ ] Check cashless network hospitals in your city
- [ ] Avoid or keep co-pay low
- [ ] Get a plan with restoration benefit
- [ ] Declare pre-existing conditions (honestly!)
- [ ] Turn on auto-renewal (prevent lapse)

**Rule**: ₹5,000-8,000/year premium = ₹5-10 lakh protection. Best ROI for any insurance!`,
        imagePrompt: "Health insurance claim process flowchart with hospital icons, red theme, medical financial infographic",
        color: "#EF4444",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "9-3",
    title: "Life Insurance (Term Plan) + Vehicle Insurance",
    emoji: "🚗",
    color: "#F59E0B",
    description: "Term plan is best for life insurance. Vehicle insurance is legally mandatory. Complete guide.",
    cards: [
      {
        id: "9-3-1",
        topicId: "9-3",
        topicTitle: "Term + Vehicle Insurance",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "Term Plan + Premium Comparison",
        content: `**What Life Insurance Means:**
If the policyholder dies, the family gets the sum insured. This isn't as critical for students if there are no dependents, but if your parents depend on you or you're funding siblings' education, you should get a term plan.

**The Most Important Rule**: "Keep insurance and investment SEPARATE" — this is the golden rule. Insurance's job is protection, investment's job is growth. Mix both = bad insurance + bad investment.

**Term Plan vs Endowment vs ULIP:**

| Feature | Term Plan | Endowment | ULIP |
| :--- | :--- | :--- | :--- |
| **Premium (₹50L cover)** | ₹3,500-₹5,500/year | ₹30,000-₹60,000/year | ₹50,000+/year |
| **Death Benefit** | ₹50 lakh (full) | ₹5 lakh + bonus (very low) | Fund value or sum assured |
| **Maturity Benefit** | None — pure protection | ₹5 lakh + bonus | Market-linked fund value |
| **Returns** | N/A (protection) | 4-6% p.a. guaranteed | Variable (market dependent) |
| **Best For** | Income replacement | Forced savings (not recommended) | Investment+insurance mix (avoid) |
| **Recommendation** | **BEST — buy this!** | **Avoid** — low returns, low cover | **Avoid** — high charges |

**₹50 Lakh Term Plan Premium (Age 22, Non-smoker):**

| Insurance Company | Monthly Premium |
| :--- | :--- |
| Tata AIA Sampoorna Raksha Supreme | ₹360-₹400/month |
| HDFC Life Click 2 Protect Super | ₹400-₹450/month |
| Max Life Smart Term Plan Plus | ₹380-₹420/month |
| ICICI Prudential iProtect Smart | ₹400-₹460/month |
| Bajaj Allianz eTouch Online Term | ₹350-₹400/month |

**₹50 lakh cover for ₹350-₹450/month!** That's ₹12-₹15/day — less than a cup of tea.

**Term Plan + SIP Combination = Best Protection + Best Growth:**
- ₹400/month term plan (₹50L cover) + ₹4,600/month SIP = ₹5,000/month total
- Endowment ₹5,000/month = ₹5 lakh cover + 4-6% returns
- **After 20 years**: Term+SIP = ₹50 lakh cover + ₹45 lakh SIP corpus. Endowment = ₹5 lakh cover + ₹18 lakh corpus. Clear winner? Term + SIP.

**7 Factors to Choose a Term Plan:**
1. Claim settlement ratio > 95%
2. Sum insured = 10-15x annual income
3. Policy term = longest possible (till 60)
4. Riders — accidental death, critical illness (optional)
5. Premium payment term — regular vs limited
6. Online vs offline — online 20-30% cheaper
7. Company reputation — IRDAI registered, stable`,
        imagePrompt: "Term plan comparison chart with shield icon, amber theme, life insurance illustration",
        color: "#F59E0B",
        emoji: "🛡️"
      },
      {
        id: "9-3-2",
        topicId: "9-3",
        topicTitle: "Term + Vehicle Insurance",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "Vehicle Insurance + Mission",
        content: `**Vehicle Insurance — Legally Mandatory!**

In India, vehicle insurance is **LEGALLY MANDATORY** under the Motor Vehicles Act 1988. Driving without insurance:
- ₹2,000 fine (first offence)
- ₹4,000 fine (repeat)
- Up to 3 months jail

But a bigger reason than the fine: if in an accident you or someone else is harmed, without insurance you'll have to pay everything yourself — this can run into lakhs.

**Third-Party vs Comprehensive Insurance (Bike):**

| Engine | Third-Party Premium | Comprehensive Premium |
| :--- | :--- | :--- |
| Below 75cc | ₹538/year | ₹1,500-₹3,000/year |
| 75cc-150cc | ₹714/year | ₹2,000-₹4,500/year |
| 150cc-350cc | ₹1,366/year | ₹3,500-₹7,000/year |
| Above 350cc | ₹2,804/year | ₹6,000-₹15,000/year |

**Third-Party**: Only covers damage to others — you'll have to pay for your own bike's damage.

**Comprehensive**: Damage to others + damage to your bike (accident, theft, fire, natural disaster) + add-ons (zero depreciation, engine protect).

**Student Recommendation**: If you use the bike daily, get **comprehensive** — the risk of accidents is higher for new riders. If the bike is rarely used, third-party is okay, but own-damage risk is yours.

**What Happens Without Insurance:**
- Accident where it's your fault = other person's ₹2 lakh bike + ₹5 lakh hospital. Total ₹7 lakh from your pocket.
- Police caught = ₹2,000 fine + court.
- Third-party injury = jail possible + compensation.

---

**🚨 MISSION: Term Plan + Vehicle Insurance**

- [ ] If parents depend on you → Get Term Plan ₹50L at age 22-25 (₹350-450/month)
- [ ] Compare 5 companies on PolicyBazaar
- [ ] Check claim settlement ratio 95%+
- [ ] Get comprehensive bike/car insurance (daily use)
- [ ] Turn on auto-renewal (prevent lapse)
- [ ] Save insurance documents on phone (emergency access)

**Rule**: Term plan = family protection. Vehicle insurance = legal + financial protection. Both are essential!`,
        imagePrompt: "Bike and car insurance icons with shield, amber theme, vehicle safety illustration",
        color: "#F59E0B",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "9-4",
    title: "Don't Mix Insurance with Investment + Common Mistakes",
    emoji: "⚠️",
    color: "#8B5CF6",
    description: "Keep insurance and investment separate — golden rule. 10 common insurance mistakes Indians make.",
    cards: [
      {
        id: "9-4-1",
        topicId: "9-4",
        topicTitle: "Insurance vs Investment",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "Why ULIPs/Endowment Are Bad + Agent Tips",
        content: `**Don't Mix Insurance with Investment — Golden Rule!**

This is the most important lesson in the insurance section: "Keep insurance and investment separate" — this is the golden rule of financial literacy.

Endowment plans, money-back policies, ULIPs — these are all mixes of insurance + investment that do both jobs poorly.

**The Insurance Company's Model:**
They take your money, give you a small risk cover, invest the rest in low-return investments, and make their own profit. You invest directly in SIP (12-15% returns) + separately get a term plan (pure protection) — this combination is mathematically superior to every endowment/ULIP plan.

**Real Calculation:**

At age 25, ₹10,000/month investment budget.
- **Option A**: Endowment plan ₹10,000/month = ₹5 lakh cover + ~6% returns. After 20 years: ~₹46 lakh + ₹5 lakh cover.
- **Option B**: Term plan ₹500/month + SIP ₹9,500/month = ₹50 lakh cover + ~12% returns. After 20 years: ~₹85 lakh SIP corpus + ₹50 lakh cover.

**Option B has 85% more wealth + 10x more protection.** Clear winner? Term + SIP.

**Why ULIPs Are Bad for Young People:**
- **High charges**: Premium allocation charge 5-10%, fund management charge 1.5%, mortality charge, policy admin charge. Total = 8-15% charges.
- **Lock-in**: 5 years. SIP has no lock-in (except ELSS).
- **Returns**: Market-linked but after charges effectively 6-8%. Direct SIP = 10-12%.
- **Complexity**: Hard to understand. Term plan is simple, SIP is simple.

**5 Tips for Dealing with an Insurance Agent:**

1. **Don't blindly believe the agent** — they earn commission. Endowment plans have 30-40% commission.

2. **Ask for a term plan** — if the agent refuses, find another agent.

3. **Calculate the IRR (return)** — endowment's actual return is 3-5%. The agent will say "6% guaranteed", but they'll be quoting simple interest.

4. **Compare online** — compare on PolicyBazaar, Coverfox. You'll get 20-30% more than from an offline agent.

5. **Don't take a "free" policy** — "We just need your name" = fraud. There's no free insurance.`,
        imagePrompt: "Split screen - insurance agent offering endowment vs direct term+SIP, purple theme, financial decision illustration",
        color: "#8B5CF6",
        emoji: "⚖️"
      },
      {
        id: "9-4-2",
        topicId: "9-4",
        topicTitle: "Insurance vs Investment",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "10 Common Mistakes + Module 9 Summary",
        content: `**10 Common Insurance Mistakes Indians Make:**

1. **Mixing insurance + investment** — Endowment/ULIP = bad insurance + bad investment. Term + SIP separately.

2. **Under-insuring** — Taking ₹2-3 lakh health cover when hospital bills easily cross ₹10-15 lakh in metros. Minimum ₹5 lakh, recommended ₹10 lakh.

3. **Hiding pre-existing diseases** — Claim will be rejected, premium wasted. Declare all conditions. Honesty = claim approval.

4. **Only looking at premium** — The cheapest plan may have room rent cap, co-pay, limited network. Check claim settlement ratio (target 90%+).

5. **Ignoring claim settlement ratio** — Taking a policy from a company with 80% CSR = 20% chance your claim is rejected. Choose a company with 95%+ CSR. Data is available on the IRDAI website.

6. **Not reading fine print** — Waiting periods, sub-limits, exclusions are all important. Spend 1 hour reading, save lakhs.

7. **Only depending on employer** — Corporate health insurance ends when the job ends. Portability issues, low cover, no continuity benefits. Get an individual plan.

8. **Not buying insurance at a young age** — Buy early = lower premium + waiting period ends sooner. Buying at 25 = 60% lower premium than buying at 40.

9. **Not renewing on time** — Lapsed policy = continuity benefits gone, waiting periods restart. Turn on auto-renewal. Link auto-debit to credit card.

10. **Living without health insurance** — Thinking "what will happen to me" and not buying. Emergency can come to anyone at any time. Start with ₹400/month.

---

**KEY TAKEAWAYS (Module 9):**
- ✅ Insurance = risk transfer, investment = growth — KEEP BOTH SEPARATE. Mixing = bad results
- ✅ Term plan is best for life insurance — ₹50 lakh cover at ₹350-450/month. Endowment = 10x price, 1/10th cover
- ✅ Health insurance is the most essential — ₹5 lakh minimum, ₹10 lakh recommended. Check cashless network
- ✅ Vehicle insurance is legally mandatory — driving without insurance = fine + jail + financial disaster
- ✅ Buy insurance early = lower premium + better coverage. Buying at 25 = 60% lower premium than at 40

**COMMON MISCONCEPTIONS (Module 9):**

⚠️ "Insurance is a waste of money if nothing happens" → No, this is risk protection, like a seatbelt — hope for the best, prepare for the worst

⚠️ "Endowment plan is good because you get money at maturity" → You do, but at 4-6% return, SIP gives 12-15%. Term + SIP is mathematically better

⚠️ "Employer's insurance is enough" → No, corporate cover is limited, leave the job = cover gone, portability is difficult

⚠️ "If you're young, you don't need insurance" → Wrong! Young age = lower premium. Buying at 25 = 60% lower premium than at 40

⚠️ "Term plan is useless because you get nothing at maturity" → No! This is pure protection. ₹50 lakh cover at ₹400/month = financial security for family

**What's Next**: Insurance has you covered. But one more important topic remains — TAX. Understanding tax is essential for students because after getting a job, tax is deducted from your salary, and smart tax planning can save you thousands. In Module 10 we'll cover tax basics — income tax slabs, 80C, ITR filing, and student-specific tax situations! 💸`,
        imagePrompt: "Module 9 complete badge with insurance shield, purple and gold theme, achievement illustration",
        color: "#8B5CF6",
        emoji: "🏆"
      }
    ]
  }
];

export function getAllCards() {
  return module9Topics.flatMap(topic => topic.cards);
}

export function getTotalCardCount() {
  return getAllCards().length;
}

export function getTopicById(id) {
  return module9Topics.find(t => t.id === id);
}

export function getCardsByTopic(topicId) {
  const topic = getTopicById(topicId);
  return topic ? topic.cards : [];
}
