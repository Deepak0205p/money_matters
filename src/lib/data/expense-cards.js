export const expenseCards = [
// ---- EASY (obvious needs and wants) ----
{
  id: 1,
  item: 'Mess food (monthly)',
  amount: '₹3,000/mahine',
  correctAnswer: 'need',
  explanation: 'Food is a basic need — you can\'t survive without it! Mess food is affordable and essential in college life.',
  category: 'food',
  difficulty: 'easy'
}, {
  id: 2,
  item: 'iPhone 15 Pro',
  amount: '₹1,34,900',
  correctAnswer: 'want',
  explanation: 'iPhone is a premium phone — a status symbol, not a necessity. A Rs.15,000 phone will do all the work too! This is clearly a want.',
  category: 'tech',
  difficulty: 'easy'
}, {
  id: 3,
  item: 'Doctor visit (for fever)',
  amount: '₹500',
  correctAnswer: 'need',
  explanation: 'It\'s important to see a doctor for a health issue — neglecting it can lead to a bigger problem. Medical expense = need!',
  category: 'health',
  difficulty: 'easy'
}, {
  id: 4,
  item: 'Netflix subscription',
  amount: '₹649/mahine',
  correctAnswer: 'want',
  explanation: 'Entertainment is important but a Netflix subscription is a luxury — free alternatives exist (YouTube, TV). This is a want, not a need!',
  category: 'subscription',
  difficulty: 'easy'
}, {
  id: 5,
  item: 'College textbooks',
  amount: '₹2,500',
  correctAnswer: 'need',
  explanation: 'Books are essential for studies — it\'s an investment in education. Second-hand or library options exist, but you still have to get them!',
  category: 'education',
  difficulty: 'easy'
}, {
  id: 6,
  item: 'Bus pass (monthly)',
  amount: '₹800/mahine',
  correctAnswer: 'need',
  explanation: 'Transport is necessary to get to college or work — a bus pass is the most affordable option. It\'s a need!',
  category: 'transport',
  difficulty: 'easy'
}, {
  id: 7,
  item: 'Gym membership (premium)',
  amount: '₹3,000/mahine',
  correctAnswer: 'want',
  explanation: 'Health is important but a premium gym isn\'t necessary — exercising at home, running in a park, or even a Rs.500/month gym is enough!',
  category: 'fitness',
  difficulty: 'easy'
}, {
  id: 8,
  item: 'Concert ticket (Arijit Singh)',
  amount: '₹3,500',
  correctAnswer: 'want',
  explanation: 'A concert is a fun experience but not essential — it\'s an entertainment expense, not a need. Don\'t give in to FOMO!',
  category: 'entertainment',
  difficulty: 'easy'
}, {
  id: 9,
  item: 'Medicine (regular)',
  amount: '₹1,200/mahine',
  correctAnswer: 'need',
  explanation: 'Regular medicine can be life-saving — skipping it is dangerous. This is a non-negotiable need!',
  category: 'health',
  difficulty: 'easy'
}, {
  id: 10,
  item: 'PS5 Gaming Console',
  amount: '₹49,990',
  correctAnswer: 'want',
  explanation: 'Gaming is a hobby, not a necessity. That money could cover 2 months of expenses! Clearly a want.',
  category: 'entertainment',
  difficulty: 'easy'
},
// ---- MEDIUM (tricky decisions) ----
{
  id: 11,
  item: 'Uber daily (office/college)',
  amount: '₹6,000/mahine',
  correctAnswer: 'want',
  explanation: 'Daily Uber is expensive — you can manage with bus/metro/auto for Rs.2,000. Paying an extra Rs.4,000 for convenience = want!',
  category: 'transport',
  difficulty: 'medium'
}, {
  id: 12,
  item: 'Laptop (for coding course)',
  amount: '₹45,000',
  correctAnswer: 'need',
  explanation: 'If you\'re learning to code or it\'s a job requirement, a laptop is a need — it\'s a career investment. But if you just need it for Netflix, it\'s a want!',
  category: 'tech',
  difficulty: 'medium'
}, {
  id: 13,
  item: 'Zomato/Swiggy (3 times a week)',
  amount: '₹4,500/mahine',
  correctAnswer: 'want',
  explanation: 'Ordering food outside is a convenience — you can get the same food at home for Rs.1,500. Spending an extra Rs.3,000/month = want!',
  category: 'food',
  difficulty: 'medium'
}, {
  id: 14,
  item: 'Winter jacket (in December)',
  amount: '₹2,500',
  correctAnswer: 'need',
  explanation: 'If you live in Delhi/UP, a winter jacket is a necessity — you\'ll fall ill from the cold without one! But a branded ₹10,000 jacket = want.',
  category: 'clothing',
  difficulty: 'medium'
}, {
  id: 15,
  item: 'Spotify Premium',
  amount: '₹119/mahine',
  correctAnswer: 'want',
  explanation: 'Listening to music is great, but the free version works too. An ad-free experience = convenience = want. It\'s a small amount but still a want!',
  category: 'subscription',
  difficulty: 'medium'
}, {
  id: 16,
  item: 'Online course (Udemy)',
  amount: '₹499',
  correctAnswer: 'need',
  explanation: 'Skill development is important for your career — learning a new skill for Rs.499 = best investment! But buying a course and not doing it = waste.',
  category: 'education',
  difficulty: 'medium'
}, {
  id: 17,
  item: 'Branded sneakers (Nike/Jordan)',
  amount: '₹12,000',
  correctAnswer: 'want',
  explanation: 'You need footwear, not branded sneakers! A Rs.2,000 sports shoe will do the job. This is a fashion/status purchase = want.',
  category: 'clothing',
  difficulty: 'medium'
}, {
  id: 18,
  item: 'Rent (flat monthly)',
  amount: '₹8,000/mahine',
  correctAnswer: 'need',
  explanation: 'Having a place to live is a basic need — home/PG rent is non-negotiable. But a solo Rs.15,000 flat vs Rs.8,000 shared — the latter is smarter!',
  category: 'home',
  difficulty: 'medium'
}, {
  id: 19,
  item: 'Amazon Prime Membership',
  amount: '₹1,499/year',
  correctAnswer: 'want',
  explanation: 'Free delivery + video streaming = convenient but not essential. Paying Rs.40 delivery per individual order = only pay for needs!',
  category: 'subscription',
  difficulty: 'medium'
}, {
  id: 20,
  item: 'Dentist cleaning (annual)',
  amount: '₹1,500',
  correctAnswer: 'need',
  explanation: 'Dental health is linked to overall health — preventive care saves a bigger expense in the future. This is a health need!',
  category: 'health',
  difficulty: 'medium'
},
// ---- HARD (debatable/context-dependent) ----
{
  id: 21,
  item: 'Mid-range smartphone (₹15,000)',
  amount: '₹15,000',
  correctAnswer: 'need',
  explanation: 'In today\'s world, a phone is a necessity — UPI payments, online classes, job applications all happen on a phone. Mid-range = need, flagship = want!',
  category: 'tech',
  difficulty: 'hard'
}, {
  id: 22,
  item: 'Weekend party with friends',
  amount: '₹2,000/weekend',
  correctAnswer: 'want',
  explanation: 'Social life is important but partying every weekend costs Rs.8,000 a month! Alternate weekends + hanging out at home = maintain balance.',
  category: 'social',
  difficulty: 'hard'
}, {
  id: 23,
  item: 'Health insurance premium',
  amount: '₹6,000/year',
  correctAnswer: 'need',
  explanation: 'This isn\'t an expense, it\'s protection! Without insurance, a single medical emergency = all your savings gone. Rs.500/month = a shield for your future.',
  category: 'health',
  difficulty: 'hard'
}, {
  id: 24,
  item: 'Haircut (premium salon)',
  amount: '₹800',
  correctAnswer: 'want',
  explanation: 'A haircut is a necessity, but Rs.800 at a premium salon? A local barber for Rs.100-200 works just fine. The difference = want!',
  category: 'self-care',
  difficulty: 'hard'
}, {
  id: 25,
  item: 'Cooking gas cylinder',
  amount: '₹900',
  correctAnswer: 'need',
  explanation: 'Cooking at home is a basic need — a gas cylinder is essential. But if you only use it to boil water and can use an induction stove, reconsider!',
  category: 'home',
  difficulty: 'hard'
}, {
  id: 26,
  item: 'Adobe Creative Cloud subscription',
  amount: '₹2,400/mahine',
  correctAnswer: 'want',
  explanation: 'If design is your career, it could be a need, but Canva is a free alternative for beginners. Rs.2,400/month until you have income = want!',
  category: 'subscription',
  difficulty: 'hard'
}, {
  id: 27,
  item: 'Running shoes (for daily jog)',
  amount: '₹3,000',
  correctAnswer: 'need',
  explanation: 'If you exercise daily, good shoes are essential — they prevent injuries. Rs.3,000 is reasonable for health. Rs.10,000 premium = want!',
  category: 'fitness',
  difficulty: 'hard'
}, {
  id: 28,
  item: 'Birthday gift for best friend',
  amount: '₹1,500',
  correctAnswer: 'want',
  explanation: 'This is emotional spending — for a good feeling. A thoughtful Rs.500 gift is enough too. Keep it within budget — it falls in the want category!',
  category: 'social',
  difficulty: 'hard'
}, {
  id: 29,
  item: 'Two-wheeler (bike for commute)',
  amount: '₹1,20,000',
  correctAnswer: 'need',
  explanation: 'If your daily commute is 15km+ and public transport is weak, a bike becomes a need. But a premium bike (Rs.2,00,000+) = want! Don\'t buy it on EMI.',
  category: 'transport',
  difficulty: 'hard'
}, {
  id: 30,
  item: 'Skin care products (routine)',
  amount: '₹2,000/mahine',
  correctAnswer: 'want',
  explanation: 'Basic skincare (moisturizer + sunscreen) is a need (~₹500/month). A 5-step Korean routine with expensive products = want! Stick to the basics.',
  category: 'self-care',
  difficulty: 'hard'
}];
