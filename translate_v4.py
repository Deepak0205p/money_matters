import json
import re
import sys

# Hinglish words that should be translated - ONLY actual Hindi words
HINGLISH_WORDS = {
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
    # Verbs
    "karo": "do", "matkaro": "do not",
    "karna": "to do", "karnahai": "need to do",
    "karnachahiye": "should do", "karsakteho": "can do",
    "karnapadta": "have to do",
    "shuru": "start", "band": "close/end",
    "shurukaro": "start", "bandkaro": "stop",
    "savekaro": "save", "spendkaro": "spend",
    "investkaro": "invest", "checkkaro": "check",
    "trackkaro": "track", "reviewkaro": "review",
    "plankaro": "plan", "sharekaro": "share",
    "avoidkaro": "avoid", "usekaro": "use",
    "preferkaro": "prefer", "choosekaro": "choose",
    "applykaro": "apply", "submitkaro": "submit",
    "verifykaro": "verify", "confirmkaro": "confirm",
    "comparekaro": "compare", "calculatekaro": "calculate",
    "analyzekaro": "analyze", "adjustkaro": "adjust",
    "maintainkaro": "maintain", "followkaro": "follow",
    "padho": "read", "likho": "write",
    "banao": "make", "seekho": "learn", "samjho": "understand",
    "dhyanDo": "pay attention", "yaadrakho": "remember",
    "dekhlo": "see for yourself", "puchho": "ask",
    "bolo": "say", "socho": "think",
    # Conjunctions
    "lekin": "but", "aur": "and", "ya": "or",
    "kyunki": "because", "isliye": "therefore",
    "jab": "when", "tab": "then", "agar": "if",
    "toh": "then", "bhi": "also",
    # Prepositions
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
    "poora": "whole", "puri": "whole",
    "aadhha": "half", "aadhi": "half",
}


def is_hinglish_word(word):
    """Check if a word is Hinglish (contains Hindi characters or is a known Hinglish word)."""
    # Check for Hindi/Devanagari characters
    for char in word:
        if '\u0900' <= char <= '\u097f':
            return True
    # Check if it's a known Hinglish word
    word_lower = word.lower().strip('.,!?;:"\'')
    return word_lower in HINGLISH_WORDS


def has_hinglish(text):
    """Check if text contains Hinglish content."""
    if not text or not isinstance(text, str):
        return False
    hinglish_indicators = [
        'kya hai', 'kaise', 'karo', 'mat karo', ' hai ', ' hain ',
        'nahi hai', 'nahi hain', 'ka matlab', 'hoti hai', 'hota hai',
        'ho jaata hai', 'ho jaati hai', 'kar sakte ho', 'karna padta hai',
        'karna chahiye', 'karna hai', 'lekin ', 'aur ', 'ya ',
        'kyunki ', 'isliye ', 'jab ', 'agar ', 'toh ', 'bhi ',
        'sirf ', 'bahut ', 'zyada ', 'kam ',
        'tum ', 'tumhe ', 'tumhare ',
        'aap ', 'aapki ', 'aapke ',
        'woh ', 'usko ', 'usne ', 'unka ',
        'yeh ', 'ye ', 'iska ', 'iske ', 'iski ',
        'pehle ', 'baad ', 'saath ', 'bina ',
        'ke liye ', 'ke saath ', 'ke baad ',
        'mein ', 'pe ', 'se ', 'tak ',
        'kuch ', 'sab ', 'jo ', 'jiski ',
        'mahine ', 'mahina ', 'saal ', 'din ',
        'paisa ', 'paise ',
        'bachat ', 'kharcha ',
        'aamdani ',
        'zaroori ', 'zaroorat ',
        'mushkil ', 'aasan ',
        'chhota ', 'bada ', 'naya ',
        'dekh lo ', 'yaad rakho ',
        'shuru karo ', 'band karo ',
        'save karo ', 'spend karo ',
        'invest karo ', 'check karo ',
        'follow karo ',
        'compare karo ', 'calculate karo ',
        'track karo ', 'review karo ',
        'plan karo ', 'share karo ',
        'avoid karo ', 'use karo ',
        'kholo ', 'padho ', 'likho ',
        'banao ', 'seekho ',
        'samjho ', 'dhyan do ',
        'yahan ', 'wahan ',
        'kahan ', 'kab ',
        'kyun ', 'kaunsa ',
        'kitna ', 'kaun ',
        'abhi ', 'tab ',
        'phir ', 'uske ',
        'ghar ',
    ]
    hinglish_count = sum(1 for word in hinglish_indicators if word.lower() in text.lower())
    return hinglish_count >= 3


def translate_hinglish_word(word):
    """Translate a single Hinglish word to English."""
    word_lower = word.lower().strip('.,!?;:"\'')
    if word_lower in HINGLISH_WORDS:
        translated = HINGLISH_WORDS[word_lower]
        # Preserve capitalization
        if word[0].isupper():
            translated = translated.capitalize()
        return translated
    return word


# Comprehensive sentence-level rewrites organized by module
SENTENCE_REWRITES = [
    # Module 1.1 - What Is Money
    (
        'Jab hum "paisa" sunte hain, toh dimaag mein turant notes aur coins ka khayal aata hai.',
        'When we hear the word "money", our mind immediately thinks of notes and coins.'
    ),
    (
        'Lekin bhai, paisa sirf paper ya metal nahi hai — yeh ek concept hai, ek medium hai jiske through hum value ko exchange karte hain.',
        'But money is not just paper or metal — it is a concept, a medium through which we exchange value.'
    ),
    (
        'Socho, agar paisa na hota toh kya hota?',
        'Imagine, what if money did not exist?'
    ),
    (
        'Agar tumhe chai chahiye aur tumhare paas sirf ek kitab hai, toh tum chaiwale ko kitab doge aur woh tumhe chai dega — yeh barter system hai.',
        'If you want tea and you only have a book, you would give the book to the tea seller and he would give you tea — this is the barter system.'
    ),
    (
        'Lekin kya chaiwale ko kitab chahiye? Shayad nahi.',
        'But does the tea seller want the book? Probably not.'
    ),
    (
        'Yahi problem thi barter system mein — "double coincidence of wants" kehte hain isko.',
        'This was the problem with the barter system — it is called the "double coincidence of wants".'
    ),
    (
        'Dono ko ek dusre ki cheez chahiye honi chahiye.',
        'Both parties need to want what the other has.'
    ),
    (
        'Isi problem ko solve karne ke liye paisa bana — ek aisi cheez jo sabko accept karein, jiski value fixed ho, aur jo easily exchange ho sake.',
        'Money was created to solve this very problem — something that everyone accepts, whose value is fixed, and that can be easily exchanged.'
    ),
    (
        'Barter se Modern Money tak ka safar: Pehle zamaane mein log cheezon se cheezein badalte the — gehu se kapde, doodh se chawal. Lekin yeh system bahut inefficient tha.',
        'The journey from barter to modern money: In earlier times, people exchanged things for things — wheat for clothes, milk for rice. But this system was very inefficient.'
    ),
    (
        'Phir logon ne precious metals jaise gold aur silver ko money ki tarah use karna shuru kiya. Kyunki gold sab jagah accept hota tha, easily divide hota tha, aur store bhi ho sakta tha.',
        'Then people started using precious metals like gold and silver as money. Because gold was accepted everywhere, could be easily divided, and could also be stored.'
    ),
    (
        'Phir governments ne paper currency introduce ki — jo gold ke against issue hoti thi.',
        'Then governments introduced paper currency — which was issued against gold.'
    ),
    (
        'Aaj ki date mein paisa "fiat currency" hai — matlab government ne declare kiya hai ki yeh legal tender hai, bina kisi gold backing ke.',
        'Today, money is "fiat currency" — meaning the government has declared it as legal tender, without any gold backing.'
    ),
    (
        'Iska matlab paisa ki value government ke trust pe based hai.',
        'This means the value of money is based on trust in the government.'
    ),
    (
        'Digital Money ka Evolution: Aaj ke daur mein paisa sirf cash nahi hai.',
        'Evolution of Digital Money: In today\'s world, money is not just cash.'
    ),
    (
        'Digital money — UPI, wallets, bank transfers — yeh sab bhi paisa hai.',
        'Digital money — UPI, wallets, bank transfers — all of this is also money.'
    ),
    (
        'Tumne Google Pay se chai ka payment kiya? Yeh bhi paisa hai, bas physical form mein nahi hai.',
        'Did you pay for tea via Google Pay? This is also money, just not in physical form.'
    ),
    # Module 1.2 - What Is Income
    (
        'Income ka simple matlab hai — tumhare paas aane wala paisa. Jo bhi source se paisa aata hai, woh income hai.',
        'Income simply means — the money coming to you. Whatever the source, money coming in is income.'
    ),
    (
        'Student ke liye yeh pocket money ho sakti hai, part-time job ka salary, freelance ka payment, ya scholarship.',
        'For students, this could be pocket money, part-time job salary, freelance payment, or scholarship.'
    ),
    (
        'Income ke bina budgeting, saving, aur investing ka koi matlab nahi — kyunki jo nahi aaya, usko kaise manage karoge?',
        'Without income, budgeting, saving, and investing have no meaning — because how do you manage what does not come in?'
    ),
    (
        'Yeh basic concept hai jo har student ko samajhna chahiye pehle din se.',
        'This is a basic concept that every student should understand from day one.'
    ),
    # Module 1.3 - What Is Expense
    (
        'Expense ka simple matlab hai — tumhara jaane wala paisa. Jo bhi paisa nikalta hai, woh expense hai.',
        'Expense simply means — the money going out from you. Whatever money goes out is an expense.'
    ),
    (
        'Lekin sab expenses ek jaise nahi hote — kuch fixed hain (har mahine same), kuch variable hain (mahine pe depend karta hai), aur sabse important distinction hai — needs vs wants.',
        'But not all expenses are the same — some are fixed (the same every month), some are variable (depends on the month), and the most important distinction is — needs vs wants.'
    ),
    # Module 1.4 - What Is Saving
    (
        'Saving ka matlab hai — aaj kam kharcha karo, kal ke liye paise rakhna. Simple sa concept hai, lekin execute karna bahut mushkil hai kyunki humari aadat hai "pehle spend karo, jo bacha woh save". Yeh approach kaam nahi karti kyunki usually kuch nahi bachta!',
        'Saving means — spend less today, save money for tomorrow. It is a simple concept, but very difficult to execute because our habit is "spend first, save whatever is left". This approach does not work because usually nothing is left!'
    ),
    (
        'Correct approach hai "Pay Yourself First" — income aaya, pehle saving mein daalo, baaki se expenses chalao.',
        'The correct approach is "Pay Yourself First" — when income comes, put it into savings first, run your expenses with the rest.'
    ),
    # Module 1.5 - What Is Budget
    (
        'Budget ka simple matlab hai — "paisa aaya, kahan gaya, kitna bacha". Yeh tumhari financial life ka roadmap hai.',
        'A budget simply means — "money came in, where did it go, how much is left". This is the roadmap of your financial life.'
    ),
    (
        'Bina budget ke tum andhere mein chal rahe ho — pata nahi kahan se paisa aa raha, kahan ja raha, aur kyun nahi bach raha.',
        'Without a budget, you are walking in the dark — you do not know where money is coming from, where it is going, and why nothing is left.'
    ),
    (
        'Budget banana boring lagta hai, lekin yeh tumhari financial freedom ki pehli seedi hai.',
        'Making a budget seems boring, but it is the first step toward your financial freedom.'
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
        'Minimum 20% income save karo (50/30/20 rule). Har income level pe applicable.',
        'Save a minimum of 20% of your income (50/30/20 rule). Applicable at every income level.'
    ),
    (
        'Aggressive savers 30-50% save karte hain. Agar expenses kam hain (ghar pe rehte ho), toh 50% possible hai.',
        'Aggressive savers save 30-50%. If expenses are low (you live at home), then 50% is possible.'
    ),
    (
        'FIRE followers 50-70% bhi save karte hain. Financial independence early chahiye toh yeh karna padta hai.',
        'FIRE followers save even 50-70%. If you want financial independence early, this is what it takes.'
    ),
    # Module 4 - Emergency Fund
    (
        'SIRF emergency mein use hone hain, kisi bhi aur purpose ke liye nahi.',
        'are to be used ONLY in emergencies, not for any other purpose.'
    ),
    (
        'Yeh tumhara financial safety net hai — tumhari insurance hai bina koi premium ke.',
        'This is your financial safety net — your insurance without any premium.'
    ),
    (
        'Regular saving se yeh different hai — regular saving goals ke liye hoti hai, emergency fund sirf unexpected situations ke liye hai.',
        'This is different from regular saving — regular saving is for goals, an emergency fund is only for unexpected situations.'
    ),
    (
        'Yeh accessible hona chahiye — emergency mein 2-3 din mein cash available.',
        'It should be accessible — cash available within 2-3 days in an emergency.'
    ),
    # Module 5 - Debt
    (
        'Sab debt bure nahi hote. Kuch debt tumhe aage le jaate hain, kuch peeche kheenchte hain.',
        'Not all debt is bad. Some debt takes you forward, some pulls you back.'
    ),
    (
        'Simple rule: Agar loan se asset ban raha hai = good debt, agar consumption hai = bad debt.',
        'Simple rule: If a loan is building an asset = good debt, if it is for consumption = bad debt.'
    ),
    (
        'Asset woh cheez hai jo value badhati hai ya income generate karti hai.',
        'An asset is something that increases in value or generates income.'
    ),
    (
        'Consumption woh cheez hai jo khatam ho jaati hai bina koi value.',
        'Consumption is something that is used up without any value.'
    ),
    # Module 6 - Banking
    (
        'Bank account tumhari financial life ka base hai.',
        'A bank account is the foundation of your financial life.'
    ),
    (
        'Bina bank account ke — salary nahi aayegi, online payment nahi hoga, saving safe nahi rahegi.',
        'Without a bank account — salary will not come, online payments will not work, savings will not be safe.'
    ),
    (
        'Students ke liye sabse important account savings account hai.',
        'For students, the most important account is the savings account.'
    ),
    # Module 7 - Investment
    (
        'Saving = paisa protect karna. Investment = paisa grow karna. Yeh basic farq hai.',
        'Saving = protecting money. Investing = growing money. This is the basic difference.'
    ),
    (
        'Jab tum saving account mein paisa rakhte ho, woh 3-4% grow hota hai, lekin inflation 5-6% hai, toh real mein tumhara paisa kam ho raha hai.',
        'When you keep money in a savings account, it grows at 3-4%, but inflation is 5-6%, so in real terms your money is decreasing.'
    ),
    (
        'Investment se tum inflation ko beat karte ho aur wealth create karte ho.',
        'With investing, you beat inflation and create wealth.'
    ),
    (
        '"Paise ko kaam pe lagao" — tum kaam mat karo paise ke liye — yeh investing ka core philosophy.',
        '"Put your money to work" — instead of working for money — this is the core philosophy of investing.'
    ),
    # Module 9 - Insurance
    (
        'Insurance ek aisa system hai jismein aap chhota sa amount regularly dete hain aur bad mein koi badi emergency aaye toh insurance company bills bharti hai.',
        'Insurance is a system where you pay a small amount regularly and if a big emergency comes later, the insurance company pays the bills.'
    ),
    (
        'Socho isko ek "samuhik bachat" jaisa — sab log thoda thoda paisa jodte hain aur jiski emergency aati hai usko bada amount milta hai.',
        'Think of it like a "collective savings" — everyone pools in a little money and whoever faces an emergency gets a large amount.'
    ),
    (
        'Yeh risk transfer ka concept hai — aapka risk insurance company le leti hai chhote premium ke badle mein.',
        'This is the concept of risk transfer — the insurance company takes on your risk in exchange for a small premium.'
    ),
    (
        'Bina insurance ke — ek medical emergency ya accident aapke saare savings',
        'Without insurance — a medical emergency or accident [can wipe out] all your savings'
    ),
    # Module 10 - Tax
    (
        'Income tax woh paisa hai jo aapki aamdani se sarkar kat ti hai. Yeh desh chalane ke liye chanda hai.',
        'Income tax is the money the government deducts from your earnings. This is the contribution to run the country.'
    ),
    (
        'India mein income tax direct tax hai — matlab seedha aapki aamdani se cut hota hai.',
        'In India, income tax is a direct tax — meaning it is directly cut from your earnings.'
    ),
    (
        'Har financial year — aapki total income calculate hoti hai aur uspe tax lagta hai.',
        'Every financial year — your total income is calculated and tax is applied on it.'
    ),
    (
        'jyada income = jyada tax.',
        'higher income = higher tax.'
    ),
    # Module 8 - FIRE
    (
        'Financial independence ka matlab hai — tumhari saari expenses tumhari passive income se cover ho rahi hain, kaam karne ki zaroorat nahi.',
        'Financial independence means — all your expenses are covered by your passive income, you do not need to work.'
    ),
    (
        '"Kaam karna" aur "kaam karna padta hai" mein bahut farq hai.',
        'There is a big difference between "working" and "having to work".'
    ),
    (
        'Financial independence ke baad tum kaam isliye karte ho kyunki karna chahte ho, na ki karna padta hai.',
        'After financial independence, you work because you want to, not because you have to.'
    ),
    (
        'Yeh freedom ki feeling hai jo har student ko experience karni chahiye.',
        'This is the feeling of freedom that every student should experience.'
    ),
    # Psychology of Money
    (
        'Paise ka logic nahi, psychology hai.',
        'Money is not about logic, it is about psychology.'
    ),
    (
        'Log financially galat decisions lete hain kyunki unka emotional experience alag hota hai.',
        'People make wrong financial decisions because their emotional experience is different.'
    ),
    (
        'Jo aapke liye bewakoofi lagta hai, dusre ke liye perfectly logical ho sakta hai kyunki unki life story alag hai.',
        'What seems foolish to you may be perfectly logical to someone else because their life story is different.'
    ),
    (
        'Isliye kisi ki financial choice judge mat karo, samjho.',
        "So do not judge anyone's financial choices, understand them."
    ),
    # Common patterns that appear across modules
    (
        'paisa sirf ek number nahi hai',
        'money is not just a number'
    ),
    (
        'paisa sirf paper ya metal nahi hai',
        'money is not just paper or metal'
    ),
    (
        'yeh barter system hai',
        'this is the barter system'
    ),
    (
        'bhai, paisa',
        'money'
    ),
    (
        'dekh lo',
        'see for yourself'
    ),
    (
        'yaad rakho',
        'remember'
    ),
    (
        'dhyan do',
        'pay attention'
    ),
    (
        'samjho',
        'understand'
    ),
    (
        'socho',
        'think'
    ),
    (
        'puchho',
        'ask'
    ),
    (
        'bolo',
        'say'
    ),
    (
        'karo',
        'do'
    ),
    (
        'mat karo',
        'do not'
    ),
    (
        'shuru karo',
        'start'
    ),
    (
        'band karo',
        'stop'
    ),
    (
        'save karo',
        'save'
    ),
    (
        'spend karo',
        'spend'
    ),
    (
        'invest karo',
        'invest'
    ),
    (
        'check karo',
        'check'
    ),
    (
        'track karo',
        'track'
    ),
    (
        'review karo',
        'review'
    ),
    (
        'plan karo',
        'plan'
    ),
    (
        'share karo',
        'share'
    ),
    (
        'avoid karo',
        'avoid'
    ),
    (
        'use karo',
        'use'
    ),
    (
        'follow karo',
        'follow'
    ),
    (
        'compare karo',
        'compare'
    ),
    (
        'calculate karo',
        'calculate'
    ),
    (
        'analyze karo',
        'analyze'
    ),
    (
        'adjust karo',
        'adjust'
    ),
    (
        'maintain karo',
        'maintain'
    ),
    (
        'padho',
        'read'
    ),
    (
        'likho',
        'write'
    ),
    (
        'banao',
        'make'
    ),
    (
        'seekho',
        'learn'
    ),
    (
        'kholo',
        'open'
    ),
    (
        'kya hai',
        'what is'
    ),
    (
        'kaise',
        'how'
    ),
    (
        'kahan',
        'where'
    ),
    (
        'kyun',
        'why'
    ),
    (
        'kab',
        'when'
    ),
    (
        'kaunsa',
        'which'
    ),
    (
        'kitna',
        'how much'
    ),
    (
        'kaun',
        'who'
    ),
    (
        'nahi hai',
        'is not'
    ),
    (
        'nahi hain',
        'are not'
    ),
    (
        'hoti hai',
        'happens'
    ),
    (
        'hota hai',
        'happens'
    ),
    (
        'ho jaata hai',
        'becomes'
    ),
    (
        'ho jaati hai',
        'becomes'
    ),
    (
        'kar sakte ho',
        'can do'
    ),
    (
        'karna padta hai',
        'have to do'
    ),
    (
        'karna chahiye',
        'should do'
    ),
    (
        'karna hai',
        'need to do'
    ),
    (
        'ke liye',
        'for'
    ),
    (
        'ke saath',
        'with'
    ),
    (
        'ke baad',
        'after'
    ),
    (
        'se pehle',
        'before'
    ),
    (
        'ke baare mein',
        'about'
    ),
    (
        'ki wajah se',
        'because of'
    ),
    (
        'ke through',
        'through'
    ),
    (
        'ke alawa',
        'apart from'
    ),
    (
        'ke bina',
        'without'
    ),
    (
        'mein',
        'in'
    ),
    (
        'pe',
        'on'
    ),
    (
        'se',
        'from'
    ),
    (
        'tak',
        'up to'
    ),
    (
        'lekin',
        'but'
    ),
    (
        'aur',
        'and'
    ),
    (
        'ya',
        'or'
    ),
    (
        'kyunki',
        'because'
    ),
    (
        'isliye',
        'therefore'
    ),
    (
        'jab',
        'when'
    ),
    (
        'tab',
        'then'
    ),
    (
        'agar',
        'if'
    ),
    (
        'toh',
        'then'
    ),
    (
        'bhi',
        'also'
    ),
    (
        'sirf',
        'only'
    ),
    (
        'bahut',
        'very'
    ),
    (
        'zyada',
        'more'
    ),
    (
        'kam',
        'less'
    ),
    (
        'accha',
        'good'
    ),
    (
        'bura',
        'bad'
    ),
    (
        'sahi',
        'right'
    ),
    (
        'galat',
        'wrong'
    ),
    (
        'zaroori',
        'necessary'
    ),
    (
        'zaroorat',
        'need'
    ),
    (
        'mushkil',
        'difficult'
    ),
    (
        'aasan',
        'easy'
    ),
    (
        'chhota',
        'small'
    ),
    (
        'bada',
        'big'
    ),
    (
        'naya',
        'new'
    ),
    (
        'purana',
        'old'
    ),
    (
        'paisa',
        'money'
    ),
    (
        'paise',
        'money'
    ),
    (
        'rupya',
        'rupee'
    ),
    (
        'rupaye',
        'rupees'
    ),
    (
        'lakh',
        'lakh'
    ),
    (
        'crore',
        'crore'
    ),
    (
        'bachat',
        'savings'
    ),
    (
        'kharcha',
        'expense'
    ),
    (
        'kharche',
        'expenses'
    ),
    (
        'aamdani',
        'income'
    ),
    (
        'mahine',
        'months'
    ),
    (
        'mahina',
        'month'
    ),
    (
        'saal',
        'year'
    ),
    (
        'din',
        'day'
    ),
    (
        'hafta',
        'week'
    ),
    (
        'ghanta',
        'hour'
    ),
    (
        'ghar',
        'home'
    ),
    (
        'college',
        'college'
    ),
    (
        'school',
        'school'
    ),
    (
        'job',
        'job'
    ),
    (
        'salary',
        'salary'
    ),
    (
        'padhai',
        'studies'
    ),
    (
        'log',
        'people'
    ),
    (
        'doston',
        'friends'
    ),
    (
        'family',
        'family'
    ),
    (
        'parents',
        'parents'
    ),
    (
        'bachche',
        'children'
    ),
    (
        'mummy',
        'mother'
    ),
    (
        'papa',
        'father'
    ),
    (
        'bhai',
        'brother'
    ),
    (
        'dost',
        'friend'
    ),
    (
        'teacher',
        'teacher'
    ),
    (
        'student',
        'student'
    ),
    (
        'abhi',
        'now'
    ),
    (
        'phir',
        'then'
    ),
    (
        'pehle',
        'first'
    ),
    (
        'baad mein',
        'later'
    ),
    (
        'yahan',
        'here'
    ),
    (
        'wahan',
        'there'
    ),
    (
        'zyadatar',
        'mostly'
    ),
    (
        'lagbhag',
        'approximately'
    ),
    (
        'bilkul',
        'absolutely'
    ),
    (
        'ekdum',
        'completely'
    ),
    (
        'hum',
        'we'
    ),
    (
        'tum',
        'you'
    ),
    (
        'aap',
        'you'
    ),
    (
        'woh',
        'that'
    ),
    (
        'yeh',
        'this'
    ),
    (
        'ye',
        'this'
    ),
    (
        'tumhe',
        'you'
    ),
    (
        'tumhare',
        'your'
    ),
    (
        'tumhara',
        'your'
    ),
    (
        'aapki',
        'your'
    ),
    (
        'aapke',
        'your'
    ),
    (
        'usko',
        'him/her'
    ),
    (
        'usne',
        'he/she'
    ),
    (
        'unka',
        'their'
    ),
    (
        'unki',
        'their'
    ),
    (
        'apna',
        'own'
    ),
    (
        'apne',
        'own'
    ),
    (
        'mera',
        'my'
    ),
    (
        'meri',
        'my'
    ),
    (
        'mere',
        'my'
    ),
    (
        'iska',
        'this'
    ),
    (
        'iske',
        'this'
    ),
    (
        'iski',
        'this'
    ),
    (
        'uska',
        'his/her'
    ),
    (
        'uski',
        'his/her'
    ),
    (
        'khud',
        'self'
    ),
    (
        'dusre',
        'other'
    ),
    (
        'kuch',
        'some'
    ),
    (
        'sab',
        'all'
    ),
    (
        'jo',
        'who/which'
    ),
    (
        'jiski',
        'whose'
    ),
    (
        'jiska',
        'whose'
    ),
    (
        'har',
        'every'
    ),
    (
        'koi',
        'someone'
    ),
    (
        'yahi',
        'this is'
    ),
    (
        'wohi',
        'that is'
    ),
    (
        'aise',
        'like this'
    ),
    (
        'waise',
        'like that'
    ),
    (
        'ab',
        'now'
    ),
    (
        'magar',
        'but'
    ),
    (
        'taki',
        'so that'
    ),
    (
        'jisse',
        'which/whom'
    ),
    (
        'jiske',
        'whose'
    ),
    (
        'uske baad',
        'after that'
    ),
    (
        'usse pehle',
        'before that'
    ),
    (
        'iske baad',
        'after this'
    ),
    (
        'isse pehle',
        'before this'
    ),
    (
        'kai',
        'many'
    ),
    (
        'thoda',
        'a little'
    ),
    (
        'zyada se zyada',
        'maximum'
    ),
    (
        'kam se kam',
        'minimum'
    ),
    (
        'sabse pehle',
        'first of all'
    ),
    (
        'sabse important',
        'most important'
    ),
    (
        'sabse common',
        'most common'
    ),
    (
        'sabke liye',
        'for everyone'
    ),
    (
        'sabko',
        'everyone'
    ),
    (
        'koi bhi',
        'anyone'
    ),
    (
        'kisi ko bhi',
        'anyone'
    ),
    (
        'tumhare paas',
        'you have'
    ),
    (
        'mere paas',
        'I have'
    ),
    (
        'uske paas',
        'he/she has'
    ),
    (
        'iska matlab hai',
        'this means'
    ),
    (
        'yahi problem',
        'this is the problem'
    ),
    (
        'yahi baat',
        'this is the point'
    ),
    (
        'aisa',
        'like this'
    ),
    (
        'waisa',
        'like that'
    ),
    (
        'is tarah se',
        'in this way'
    ),
    (
        'us tarah se',
        'in that way'
    ),
    (
        'kahin',
        'somewhere'
    ),
    (
        'har jagah',
        'everywhere'
    ),
    (
        'ladka',
        'boy'
    ),
    (
        'ladki',
        'girl'
    ),
    (
        'behen',
        'sister'
    ),
    (
        'insaan',
        'person'
    ),
    (
        'aadmi',
        'man'
    ),
    (
        'aurat',
        'woman'
    ),
    (
        'bachcha',
        'child'
    ),
    (
        'zyadatar',
        'mostly'
    ),
    (
        'lagbhag',
        'approximately'
    ),
    (
        'bilkul',
        'absolutely'
    ),
    (
        'ekdum',
        'completely'
    ),
    (
        'poora',
        'whole'
    ),
    (
        'puri',
        'whole'
    ),
    (
        'aadhha',
        'half'
    ),
    (
        'aadhi',
        'half'
    ),
]


def translate_text(text):
    """Translate Hinglish text to English using sentence rewrites and word-level fallback."""
    if not text or not isinstance(text, str):
        return text

    # Skip if already mostly English
    if not has_hinglish(text):
        return text

    # Apply sentence-level rewrites first
    for original, replacement in SENTENCE_REWRITES:
        if original in text:
            text = text.replace(original, replacement)

    # Check if still has Hinglish after sentence rewrites
    if not has_hinglish(text):
        return text

    # Word-level translation for remaining Hinglish - only actual Hinglish words
    words = text.split()
    translated_words = []
    for word in words:
        # Check if this is a Hinglish word (contains Devanagari or is in our dictionary)
        if is_hinglish_word(word):
            translated_words.append(translate_hinglish_word(word))
        else:
            translated_words.append(word)

    result = ' '.join(translated_words)

    # Clean up double spaces
    while '  ' in result:
        result = result.replace('  ', ' ')

    return result


def process_value(value, path=""):
    """Recursively process JSON values, translating Hinglish text."""
    if isinstance(value, str):
        return translate_text(value)
    elif isinstance(value, list):
        return [process_value(item, f"{path}[{i}]") for i, item in enumerate(value)]
    elif isinstance(value, dict):
        return {k: process_value(v, f"{path}.{k}") for k, v in value.items()}
    else:
        return value


def main():
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

    # Verify by checking a sample
    print("\nSample verification:")
    sample_content = translated['modules'][0]['topics'][0]['content'][:500]
    print(f"Module 1.1 content start:\n{sample_content}...")


if __name__ == "__main__":
    main()
