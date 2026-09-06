import json
import re
import sys

# Module and topic title translations
TITLE_MAP = {
    "PAISE KI BASIC SAMAJH FOUNDATION": "BASIC MONEY UNDERSTANDING FOUNDATION",
    "BUDGETING IN REAL LIFE PRACTICAL": "BUDGETING IN REAL LIFE - PRACTICAL",
    "SAVING STRATEGIES SMART SAVING": "SAVING STRATEGIES - SMART SAVING",
    "EMERGENCY FUND PROTECTION SHIELD": "EMERGENCY FUND - PROTECTION SHIELD",
    "DEBT AUR CREDIT DANGER ZONE": "DEBT AND CREDIT - DANGER ZONE",
    "BANKING BASICS EVERYDAY BANKING": "BANKING BASICS - EVERYDAY BANKING",
    "INVESTMENT BASICS GROW YOUR MONEY": "INVESTMENT BASICS - GROW YOUR MONEY",
    "FINANCIAL INDEPENDENCE FREEDOM": "FINANCIAL INDEPENDENCE - FREEDOM",
    "INSURANCE BASICS PROTECTION": "INSURANCE BASICS - PROTECTION",
    "TAX BASICS FOR STUDENTS": "TAX BASICS FOR STUDENTS",
    "REAL-WORLD FINANCIAL REAL-WORLD SCENARIOS": "REAL-WORLD FINANCIAL SCENARIOS",
    # Topic titles
    "Money Kya Hai": "What Is Money",
    "Income Kya Hai": "What Is Income",
    "Expense Kya Hai": "What Is Expense",
    "Saving Kya Hai": "What Is Saving",
    "Budget Kya Hai": "What Is Budget",
    "Financial Awareness": "Financial Awareness",
    "Student Budget Step-by-Step": "Student Budget Step-by-Step",
    "Expense Tracking": "Expense Tracking",
    "Needs vs Wants Deep Dive": "Needs vs Wants - Deep Dive",
    "Common Budget Mistakes": "Common Budget Mistakes",
    "Ready-Made Budget Templates": "Ready-Made Budget Templates",
    "Irregular Income Budgeting": "Irregular Income Budgeting",
    "Kitna Save Karna Chahiye": "How Much Should You Save",
    "Saving Ke Barriers Aur Solutions": "Saving Barriers and Solutions",
    "Saving Techniques": "Saving Techniques",
    "Short-Term vs Medium-Term vs Long-Term Saving Goals": "Short-Term vs Medium-Term vs Long-Term Saving Goals",
    "Inflation Ka Asar": "The Impact of Inflation",
    "Power of Compounding": "Power of Compounding",
    "Student-Specific Saving Hacks": "Student-Specific Saving Tips",
    "Emergency Fund Kya Hai": "What Is an Emergency Fund",
    "Kitna Hona Chahiye": "How Much Should It Be",
    "Kaise Banayein": "How to Build It",
    "Kahan Rakhein": "Where to Keep It",
    "Kab Use Karein": "When to Use It",
    "Real-Life Stories": "Real-Life Stories",
    "Emergency Fund Wapas Kaise Bharein": "How to Replenish Your Emergency Fund",
    "Good Debt vs Bad Debt": "Good Debt vs Bad Debt",
    "Credit Card": "Credit Card",
    "Student Loans / Education Loans": "Student Loans / Education Loans",
    "Personal Loan vs FD Loan vs Family Loan": "Personal Loan vs FD Loan vs Family Loan",
    "Credit Score / CIBIL Score": "Credit Score / CIBIL Score",
    "Debt Trap": "Debt Trap",
    "Debt Se Kaise Nikle": "How to Get Out of Debt",
    "Types of Accounts": "Types of Accounts",
    "Fixed Deposit (FD)": "Fixed Deposit (FD)",
    "Recurring Deposit (RD)": "Recurring Deposit (RD)",
    "Digital Payments": "Digital Payments",
    "Cards Explained": "Cards Explained",
    "Hidden Bank Charges": "Hidden Bank Charges",
    "KYC and Online Safety": "KYC and Online Safety",
    "Investment Kya Hai": "What Is Investing",
    "Mutual Fund Complete Guide": "Mutual Fund Complete Guide",
    "FD vs RD vs SIP vs PPF": "FD vs RD vs SIP vs PPF",
    "PPF": "PPF",
    "Stock Market Basics": "Stock Market Basics",
    "Gold Investment": "Gold Investment",
    "Crypto": "Crypto",
    "Asset Allocation for Students": "Asset Allocation for Students",
    "Financial Independence Kya Hai": "What Is Financial Independence",
    "FIRE Movement": "FIRE Movement",
    "Passive Income Sources for Students": "Passive Income Sources for Students",
    "Side Hustle for Indian Students": "Side Hustle for Indian Students",
    "Retirement Planning for Students": "Retirement Planning for Students",
    "Financial Freedom Calculator": "Financial Freedom Calculator",
    "Real Indian Examples": "Real Indian Examples",
    "Rich Dad Poor Dad": "Rich Dad Poor Dad",
    "Psychology of Money": "Psychology of Money",
    "Insurance Kya Hai": "What Is Insurance",
    "Health Insurance": "Health Insurance",
    "Life Insurance": "Life Insurance",
    "Vehicle Insurance": "Vehicle Insurance",
    "Insurance Se Investment MAT Karo": "Do Not Mix Insurance with Investment",
    "10 Common Insurance Mistakes Indians Make": "10 Common Insurance Mistakes Indians Make",
    "Income Tax Kya Hai": "What Is Income Tax",
    "Important Tax Sections for Students": "Important Tax Sections for Students",
    "Form 16 Kya Hai": "What Is Form 16",
    "ITR Filing": "ITR Filing",
    "Student-Specific Tax Situations": "Student-Specific Tax Situations",
    "TDS Kya Hai": "What Is TDS",
    "Old Regime vs New Regime": "Old Regime vs New Regime",
    "Tax-Saving Investments Comparison": "Tax-Saving Investments Comparison",
    "Complete Financial Plans": "Complete Financial Plans",
    "\"What If\" Scenarios": "\"What If\" Scenarios",
    "Financial Checklist by Life Stage": "Financial Checklist by Life Stage",
    "Indian Middle Class Financial": "Indian Middle Class Financial",
    "Financial Red Flags in Relationships": "Financial Red Flags in Relationships",
    "Scams Targeting Students": "Scams Targeting Students",
    "EMI": "EMI",
    "Tax Basics for Students (Cross-reference Module 10) Quick overview:": "Tax Basics for Students (Cross-reference Module 10) Quick overview:",
}

# Hindi/Hinglish words that map to English
WORD_MAP = {
    # Pronouns
    "hum": "we", "tum": "you", "aap": "you",
    "tumhe": "you", "tumhare": "your", "tumhara": "your",
    "aapki": "your", "aapke": "your",
    "usko": "him/her", "usne": "he/she", "unka": "their",
    "unki": "their", "apna": "own", "apne": "own",
    "mera": "my", "meri": "my", "mere": "my",
    "iska": "this", "iske": "this", "iski": "this",
    "uska": "his/her", "uski": "his/her",
    "khud": "self", "dusre": "other",
    # Question words
    "kya": "what", "kaise": "how", "kahan": "where", "kyun": "why",
    "kaunsa": "which", "kitna": "how much", "kab": "when", "kaun": "who",
    # Negation
    "nahi": "not",
    # Common verbs / imperatives
    "karo": "do", "matkaro": "do not",
    "karna": "to do", "karnahai": "need to do",
    "karnachahiye": "should do", "karsakteho": "can do",
    "karnapadta": "have to do",
    "shuru": "start", "bandkaro": "stop",
    "padho": "read", "likho": "write",
    "banao": "make", "seekho": "learn", "samjho": "understand",
    "puchho": "ask", "bolo": "say", "socho": "think",
    # Conjunctions
    "lekin": "but", "aur": "and", "ya": "or",
    "kyunki": "because", "isliye": "therefore",
    "jab": "when", "tab": "then", "agar": "if",
    "toh": "then", "bhi": "also", "magar": "but",
    # Prepositions / postpositions
    "mein": "in", "pe": "on", "se": "from", "tak": "up to",
    "keliye": "for", "kesaath": "with", "kebaad": "after",
    "sepehle": "before", "kebaaremein": "about",
    "kiwajahse": "because of", "kethrough": "through",
    "kealawa": "apart from", "kebina": "without",
    # Adjectives
    "sirf": "only", "bahut": "very", "zyada": "more",
    "kam": "less", "accha": "good", "bura": "bad",
    "sahi": "right", "galat": "wrong", "zaroori": "necessary",
    "zaroorat": "need", "mushkil": "difficult", "aasan": "easy",
    "chhota": "small", "bada": "big", "naya": "new", "purana": "old",
    # Nouns
    "paisa": "money", "paise": "money", "rupya": "rupee",
    "rupaye": "rupees", "lakh": "lakh", "crore": "crore",
    "bachat": "savings", "kharcha": "expense", "kharche": "expenses",
    "aamdani": "income", "kamai": "earnings",
    "mahine": "months", "mahina": "month", "saal": "year",
    "din": "day", "hafta": "week", "ghanta": "hour",
    "ghar": "home", "padhai": "studies",
    "doston": "friends",
    # Adverbs
    "abhi": "now", "phir": "then", "pehle": "first",
    "baadmein": "later", "yahan": "here", "wahan": "there",
    "zyadatar": "mostly", "lagbhag": "approximately",
    "bilkul": "absolutely", "ekdum": "completely",
}

# Multi-word Hinglish phrases that should be replaced as units
# These must be applied BEFORE single-word replacements
PHRASE_MAP = [
    ("ke liye", "for"),
    ("ke saath", "with"),
    ("ke baad", "after"),
    ("se pehle", "before"),
    ("ke baare mein", "about"),
    ("ki wajah se", "because of"),
    ("ke through", "through"),
    ("ke alawa", "apart from"),
    ("ke bina", "without"),
    ("baad mein", "later"),
    ("nahi hai", "is not"),
    ("nahi hain", "are not"),
    ("hoti hai", "happens"),
    ("hota hai", "happens"),
    ("ho jaata hai", "becomes"),
    ("ho jaati hai", "becomes"),
    ("kar sakte ho", "can do"),
    ("karna padta hai", "have to do"),
    ("karna chahiye", "should do"),
    ("karna hai", "need to do"),
    ("tumhare paas", "you have"),
    ("mere paas", "I have"),
    ("uske paas", "he/she has"),
    ("iska matlab hai", "this means"),
    ("yahi problem", "this is the problem"),
    ("sabse pehle", "first of all"),
    ("sabse important", "most important"),
    ("sabse common", "most common"),
    ("sabke liye", "for everyone"),
    ("koi bhi", "anyone"),
    ("zyada se zyada", "maximum"),
    ("kam se kam", "minimum"),
    ("uske baad", "after that"),
    ("usse pehle", "before that"),
    ("iske baad", "after this"),
    ("isse pehle", "before this"),
    ("is tarah se", "in this way"),
    ("us tarah se", "in that way"),
    ("shuru karo", "start"),
    ("band karo", "stop"),
    ("save karo", "save"),
    ("spend karo", "spend"),
    ("invest karo", "invest"),
    ("check karo", "check"),
    ("track karo", "track"),
    ("review karo", "review"),
    ("plan karo", "plan"),
    ("share karo", "share"),
    ("avoid karo", "avoid"),
    ("use karo", "use"),
    ("follow karo", "follow"),
    ("compare karo", "compare"),
    ("calculate karo", "calculate"),
    ("analyze karo", "analyze"),
    ("adjust karo", "adjust"),
    ("maintain karo", "maintain"),
    ("mat karo", "do not"),
    ("dekh lo", "see for yourself"),
    ("yaad rakho", "remember"),
    ("dhyan do", "pay attention"),
    ("kya hai", "what is"),
]

# Full sentence/paragraph rewrites - ONLY exact full-string matches
SENTENCE_REWRITES = [
    # Module 1.1 - What Is Money
    (
        'Jab hum "paisa" sunte hain, toh dimaag mein turant notes aur coins ka khayal aata hai. Lekin bhai, paisa sirf paper ya metal nahi hai — yeh ek concept hai, ek medium hai jiske through hum value ko exchange karte hain. Socho, agar paisa na hota toh kya hota? Agar tumhe chai chahiye aur tumhare paas sirf ek kitab hai, toh tum chaiwale ko kitab doge aur woh tumhe chai dega — yeh barter system hai.\nLekin kya chaiwale ko kitab chahiye? Shayad nahi. Yahi problem thi barter system mein — "double coincidence of wants" kehte hain isko. Dono ko ek dusre ki cheez chahiye honi chahiye. Isi problem ko solve karne ke liye paisa bana — ek aisi cheez jo sabko accept karein, jiski value fixed ho, aur jo easily exchange ho sake.',
        'When we hear the word "money", our mind immediately thinks of notes and coins. But money is not just paper or metal — it is a concept, a medium through which we exchange value. Imagine, what if money did not exist? If you want tea and you only have a book, you would give the book to the tea seller and he would give you tea — this is the barter system.\nBut does the tea seller want the book? Probably not. This was the problem with the barter system — it is called the "double coincidence of wants". Both parties need to want what the other has. Money was created to solve this very problem — something that everyone accepts, whose value is fixed, and that can be easily exchanged.'
    ),
    (
        'Barter se Modern Money tak ka safar: Pehle zamaane mein log cheezon se cheezein badalte the — gehu se kapde, doodh se chawal. Lekin yeh system bahut inefficient tha. Phir logon ne precious metals jaise gold aur silver ko money ki tarah use karna shuru kiya. Kyunki gold sab jagah accept hota tha, easily divide hota tha, aur store bhi ho sakta tha. Phir governments ne paper currency introduce ki — jo gold ke against issue hoti thi.',
        'The journey from barter to modern money: In earlier times, people exchanged things for things — wheat for clothes, milk for rice. But this system was very inefficient. Then people started using precious metals like gold and silver as money. Because gold was accepted everywhere, could be easily divided, and could also be stored. Then governments introduced paper currency — which was issued against gold.'
    ),
    (
        'Aaj ki date mein paisa "fiat currency" hai — matlab government ne declare kiya hai ki yeh legal tender hai, bina kisi gold backing ke.\nIska matlab paisa ki value government ke trust pe based hai.',
        'Today, money is "fiat currency" — meaning the government has declared it as legal tender, without any gold backing.\nThis means the value of money is based on trust in the government.'
    ),
    (
        'Digital Money ka Evolution: Aaj ke daur mein paisa sirf cash nahi hai. Digital money — UPI, wallets, bank transfers — yeh sab bhi paisa hai. Tumne Google Pay se ₹50 chai ka payment kiya? Yeh bhi paisa hai, bas physical form mein nahi hai.',
        'Evolution of Digital Money: In today\'s world, money is not just cash. Digital money — UPI, wallets, bank transfers — all of this is also money. Did you pay ₹50 for tea via Google Pay? This is also money, just not in physical form.'
    ),
    # Module 1.2 - What Is Income
    (
        'Income ka simple matlab hai — tumhare paas aane wala paisa. Jo bhi source se paisa aata hai, woh income hai. Student ke liye yeh pocket money ho sakti hai, part-time job ka salary, freelance ka payment, ya scholarship. Income ke bina budgeting, saving, aur investing ka koi matlab nahi — kyunki jo nahi aaya, usko kaise manage karoge? Yeh basic concept hai jo har student ko samajhna chahiye pehle din se.',
        'Income simply means — the money coming to you. Whatever the source, money coming in is income. For students, this could be pocket money, part-time job salary, freelance payment, or scholarship. Without income, budgeting, saving, and investing have no meaning — because how do you manage what does not come in? This is a basic concept that every student should understand from day one.'
    ),
    # Module 1.3 - What Is Expense
    (
        'Expense ka simple matlab hai — tumhara jaane wala paisa. Jo bhi paisa nikalta hai, woh expense hai. Lekin sab expenses ek jaise nahi hote — kuch fixed hain (har mahine same), kuch variable hain (mahine pe depend karta hai), aur sabse important distinction hai — needs vs wants.',
        'Expense simply means — the money going out from you. Whatever money goes out is an expense. But not all expenses are the same — some are fixed (the same every month), some are variable (depends on the month), and the most important distinction is — needs vs wants.'
    ),
    # Module 1.4 - What Is Saving
    (
        'Saving ka matlab hai — aaj kam kharcha karo, kal ke liye paise rakhna. Simple sa concept hai, lekin execute karna bahut mushkil hai kyunki humari aadat hai "pehle spend karo, jo bacha woh save". Yeh approach kaam nahi karti kyunki usually kuch nahi bachta! Correct approach hai "Pay Yourself First" — income aaya, pehle saving mein daalo, baaki se expenses chalao.',
        'Saving means — spend less today, save money for tomorrow. It is a simple concept, but very difficult to execute because our habit is "spend first, save whatever is left". This approach does not work because usually nothing is left! The correct approach is "Pay Yourself First" — when income comes, put it into savings first, run your expenses with the rest.'
    ),
    # Module 1.5 - What Is Budget
    (
        'Budget ka simple matlab hai — "paisa aaya, kahan gaya, kitna bacha". Yeh tumhari financial life ka roadmap hai. Bina budget ke tum andhere mein chal rahe ho — pata nahi kahan se paisa aa raha, kahan ja raha, aur kyun nahi bach raha. Budget banana boring lagta hai, lekin yeh tumhari financial freedom ki pehli seedi hai.',
        'A budget simply means — "money came in, where did it go, how much is left". This is the roadmap of your financial life. Without a budget, you are walking in the dark — you do not know where money is coming from, where it is going, and why nothing is left. Making a budget seems boring, but it is the first step toward your financial freedom.'
    ),
    # Module 2 - Budgeting
    (
        'Har Sunday 15 minute budget check karo. Kahan zyada ho gaya? Next month adjust karo. Budget living document hai — rigid nahi, flexible hona chahiye.',
        'Check your budget for 15 minutes every Sunday. Where did you overspend? Adjust next month. A budget is a living document — not rigid, it should be flexible.'
    ),
    # Module 3 - Saving
    (
        'Yeh sabse common sawaal hai — "kitna save karun?" Answer depends hai tumhari income aur goals pe, lekin kuch general rules hain.',
        'This is the most common question — "how much should I save?" The answer depends on your income and goals, but there are some general rules.'
    ),
    (
        'Minimum 20% income save karo (50/30/20 rule). Har income level pe applicable. Aggressive savers 30-50% save karte hain. Agar expenses kam hain (ghar pe rehte ho), toh 50% possible hai. FIRE followers 50-70% bhi save karte hain. Financial independence early chahiye toh yeh karna padta hai.',
        'Save a minimum of 20% of your income (50/30/20 rule). Applicable at every income level. Aggressive savers save 30-50%. If expenses are low (you live at home), then 50% is possible. FIRE followers save even 50-70%. If you want financial independence early, this is what it takes.'
    ),
    # Module 4 - Emergency Fund
    (
        'Yeh tumhara financial safety net hai — tumhari insurance hai bina koi premium ke. Regular saving se yeh different hai — regular saving goals ke liye hoti hai, emergency fund sirf unexpected situations ke liye hai. Yeh accessible hona chahiye — emergency mein 2-3 din mein cash available.',
        'This is your financial safety net — your insurance without any premium. This is different from regular saving — regular saving is for goals, an emergency fund is only for unexpected situations. It should be accessible — cash available within 2-3 days in an emergency.'
    ),
    # Module 5 - Debt
    (
        'Sab debt bure nahi hote. Kuch debt tumhe aage le jaate hain, kuch peeche kheenchte hain. Simple rule: Agar loan se asset ban raha hai = good debt, agar consumption hai = bad debt. Asset woh cheez hai jo value badhati hai ya income generate karti hai. Consumption woh cheez hai jo khatam ho jaati hai bina koi value.',
        'Not all debt is bad. Some debt takes you forward, some pulls you back. Simple rule: If a loan is building an asset = good debt, if it is for consumption = bad debt. An asset is something that increases in value or generates income. Consumption is something that is used up without any value.'
    ),
    # Module 6 - Banking
    (
        'Bank account tumhari financial life ka base hai. Bina bank account ke — salary nahi aayegi, online payment nahi hoga, saving safe nahi rahegi. Students ke liye sabse important account savings account hai.',
        'A bank account is the foundation of your financial life. Without a bank account — salary will not come, online payments will not work, savings will not be safe. For students, the most important account is the savings account.'
    ),
    # Module 7 - Investment
    (
        'Saving = paisa protect karna. Investment = paisa grow karna. Yeh basic farq hai. Jab tum saving account mein paisa rakhte ho, woh 3-4% grow hota hai, lekin inflation 5-6% hai, toh real mein tumhara paisa kam ho raha hai. Investment se tum inflation ko beat karte ho aur wealth create karte ho. "Paise ko kaam pe lagao" — tum kaam mat karo paise ke liye — yeh investing ka core philosophy.',
        'Saving = protecting money. Investing = growing money. This is the basic difference. When you keep money in a savings account, it grows at 3-4%, but inflation is 5-6%, so in real terms your money is decreasing. With investing, you beat inflation and create wealth. "Put your money to work" — instead of working for money — this is the core philosophy of investing.'
    ),
    # Module 9 - Insurance
    (
        'Insurance ek aisa system hai jismein aap chhota sa amount regularly dete hain aur bad mein koi badi emergency aaye toh insurance company bills bharti hai. Socho isko ek "samuhik bachat" jaisa — sab log thoda thoda paisa jodte hain aur jiski emergency aati hai usko bada amount milta hai. Yeh risk transfer ka concept hai — aapka risk insurance company le leti hai chhote premium ke badle mein. Bina insurance ke — ek medical emergency ya accident aapke saare savings',
        'Insurance is a system where you pay a small amount regularly and if a big emergency comes later, the insurance company pays the bills. Think of it like a "collective savings" — everyone pools in a little money and whoever faces an emergency gets a large amount. This is the concept of risk transfer — the insurance company takes on your risk in exchange for a small premium. Without insurance — a medical emergency or accident [can wipe out] all your savings'
    ),
    # Module 10 - Tax
    (
        'Income tax woh paisa hai jo aapki aamdani se sarkar kat ti hai. Yeh desh chalane ke liye chanda hai. India mein income tax direct tax hai — matlab seedha aapki aamdani se cut hota hai. Har financial year — aapki total income calculate hoti hai aur uspe tax lagta hai.',
        'Income tax is the money the government deducts from your earnings. This is the contribution to run the country. In India, income tax is a direct tax — meaning it is directly cut from your earnings. Every financial year — your total income is calculated and tax is applied on it.'
    ),
    # Module 8 - FIRE
    (
        'Financial independence ka matlab hai — tumhari saari expenses tumhari passive income se cover ho rahi hain, kaam karne ki zaroorat nahi. "Kaam karna" aur "kaam karna padta hai" mein bahut farq hai. Financial independence ke baad tum kaam isliye karte ho kyunki karna chahte ho, na ki karna padta hai. Yeh freedom ki feeling hai jo har student ko experience karni chahiye.',
        'Financial independence means — all your expenses are covered by your passive income, you do not need to work. There is a big difference between "working" and "having to work". After financial independence, you work because you want to, not because you have to. This is the feeling of freedom that every student should experience.'
    ),
    # Psychology of Money
    (
        'Paise ka logic nahi, psychology hai. Log financially galat decisions lete hain kyunki unka emotional experience alag hota hai. Jo aapke liye bewakoofi lagta hai, dusre ke liye perfectly logical ho sakta hai kyunki unki life story alag hai. Isliye kisi ki financial choice judge mat karo, samjho.',
        'Money is not about logic, it is about psychology. People make wrong financial decisions because their emotional experience is different. What seems foolish to you may be perfectly logical to someone else because their life story is different. So do not judge anyone\'s financial choices, understand them.'
    ),
    # Common short patterns
    ('paisa sirf ek number nahi hai', 'money is not just a number'),
    ('yeh barter system hai', 'this is the barter system'),
    ('bhai, paisa', 'money'),
    ('Paise ka logic nahi, psychology hai.', 'Money is not about logic, it is about psychology.'),
    ('jyada income = jyada tax.', 'higher income = higher tax.'),
]


def has_hinglish(text):
    """Check if text contains Hinglish content."""
    if not text or not isinstance(text, str):
        return False
    indicators = [
        'kya hai', 'kaise ', ' karo ', 'mat karo', ' hai ', ' hain ',
        'nahi hai', 'nahi hain', 'ka matlab', 'hoti hai', 'hota hai',
        'ho jaata', 'ho jaati', 'kar sakte', 'karna padta',
        'karna chahiye', 'lekin ', ' kyunki ', ' isliye ',
        ' jab ', ' agar ', ' toh ', ' bhi ',
        'sirf ', 'bahut ', 'zyada ',
        ' tum ', 'tumhe ', 'tumhare ',
        ' aap ', 'aapki ', 'aapke ',
        ' usko ', 'usne ', 'unka ',
        ' yeh ', ' ye ', 'iska ',
        ' pehle ', ' baad ', 'saath ',
        'ke liye', 'ke saath', 'ke baad',
        ' mein ', ' pe ', ' se ',
        'kuch ', 'sab ', ' jo ',
        'mahine ', 'mahina ', 'saal ',
        'paisa ', 'paise ',
        'bachat', 'kharcha',
        'aamdani',
        'zaroori ', 'zaroorat ',
        'mushkil ', 'aasan ',
        'chhota ', 'bada ',
        ' dekh lo', 'yaad rakho',
        ' shuru karo', 'band karo',
        'save karo', 'spend karo',
        'invest karo', 'check karo',
        'track karo', 'review karo',
        'plan karo', 'share karo',
        'avoid karo', 'use karo',
        'follow karo',
        'compare karo', 'calculate karo',
        'padho', 'likho',
        'banao', 'seekho',
        'samjho', 'dhyan do',
        'yahan ', 'wahan ',
        'kahan ', ' kab ',
        'kyun ', 'kaunsa ',
        'kitna ',
        'abhi ', ' tab ',
        ' phir ',
        'ghar ',
        ' doston',
        ' kuch ',
    ]
    count = sum(1 for ind in indicators if ind.lower() in text.lower())
    return count >= 3


def translate_word(word):
    """Translate a single Hinglish word to English, preserving punctuation."""
    # Strip trailing punctuation for lookup
    stripped = word.strip('.,!?;:"\'')
    trailing = word[len(stripped):]
    leading = word[:len(word) - len(trailing) - (len(word) - len(word.lstrip('.,!?;:"\'')))]
    leading = word[:len(word) - len(word.lstrip('.,!?;:"\''))]

    lower = stripped.lower()
    if lower in WORD_MAP:
        result = WORD_MAP[lower]
        # Preserve capitalization
        if stripped and stripped[0].isupper():
            result = result[0].upper() + result[1:]
        return leading + result + trailing
    return word


def apply_phrase_replacements(text):
    """Apply multi-word phrase replacements using word boundaries."""
    for phrase, replacement in PHRASE_MAP:
        # Use word-boundary-aware regex
        pattern = r'\b' + re.escape(phrase) + r'\b'
        text = re.sub(pattern, replacement, text, flags=re.IGNORECASE)
    return text


def translate_text(text):
    """Translate Hinglish text to English."""
    if not text or not isinstance(text, str):
        return text

    # 0. Check if this is a title that needs translation
    if text.strip() in TITLE_MAP:
        return TITLE_MAP[text.strip()]

    # Skip if no Hinglish detected
    if not has_hinglish(text):
        return text

    # 1. Apply full sentence/paragraph rewrites (exact match)
    for original, replacement in SENTENCE_REWRITES:
        if original in text:
            text = text.replace(original, replacement, 1)

    # 2. Apply multi-word phrase replacements with word boundaries
    text = apply_phrase_replacements(text)

    # 3. Check if still has Hinglish
    if not has_hinglish(text):
        return text

    # 4. Word-level translation for remaining individual Hinglish words
    words = text.split()
    translated_words = [translate_word(w) for w in words]
    text = ' '.join(translated_words)

    # Clean up double spaces
    while '  ' in text:
        text = text.replace('  ', ' ')

    return text


def process_value(value):
    """Recursively process JSON values, translating Hinglish text."""
    if isinstance(value, str):
        return translate_text(value)
    elif isinstance(value, list):
        return [process_value(item) for item in value]
    elif isinstance(value, dict):
        return {k: process_value(v) for k, v in value.items()}
    else:
        return value


def main():
    import sys
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

    input_path = r"H:\nexura\src\data\rupaiya_guide_db.json"
    output_path = r"H:\nexura\src\data\rupaiya_guide_db_en.json"

    print(f"Reading from: {input_path}")
    with open(input_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    print("Translating content...")
    translated = process_value(data)

    print(f"Writing to: {output_path}")
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(translated, f, indent=2, ensure_ascii=False)

    print("Translation complete!")

    # Verify by checking samples from each module
    print("\n=== Sample verification ===")
    for module in translated['modules']:
        mid = module['id']
        title = module['title']
        print(f"\nModule {mid}: {title}")
        if module['topics']:
            topic = module['topics'][0]
            content_preview = topic['content'][:200]
            print(f"  Topic: {topic['title']}")
            print(f"  Content: {content_preview}...")


if __name__ == "__main__":
    main()
