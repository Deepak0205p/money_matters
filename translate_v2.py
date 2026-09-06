import json
import re
import sys

# Comprehensive Hinglish to English word/phrase dictionary
WORD_MAP = {
    # Common Hindi words
    "kya": "what", "kaise": "how", "kahan": "where", "kyun": "why",
    "kaunsa": "which", "kitna": "how much", "kab": "when", "kaun": "who",
    "nahi": "not", "nahi hai": "is not", "nahi hain": "are not",
    "hai": "is", "hain": "are", "tha": "was", "the": "were",
    "ho": "be", "hoga": "will be", "hogi": "will be",
    "hoti": "happens", "hota": "happens",
    "ho jaata": "becomes", "ho jaati": "becomes",
    "lekin": "but", "aur": "and", "ya": "or", "kyunki": "because",
    "isliye": "therefore", "jab": "when", "tab": "then", "agar": "if",
    "toh": "then", "bhi": "also", "sirf": "only", "bahut": "very",
    "zyada": "more", "kam": "less", "accha": "good", "bura": "bad",
    "sahi": "right", "galat": "wrong", "zaroori": "necessary",
    "zaroorat": "need", "mushkil": "difficult", "aasan": "easy",
    "chhota": "small", "bada": "big", "naya": "new", "purana": "old",
    "mein": "in", "pe": "on", "se": "from", "tak": "up to",
    "ke liye": "for", "ke saath": "with", "ke baad": "after",
    "se pehle": "before", "ke baare mein": "about",
    "ki wajah se": "because of", "ke through": "through",
    "ke alawa": "apart from", "ke bina": "without",
    "yeh": "this", "woh": "that", "yahan": "here", "wahan": "there",
    "tum": "you", "tumhe": "you", "tumhare": "your", "tumhara": "your",
    "aap": "you", "aapki": "your", "aapke": "your",
    "usko": "him/her", "usne": "he/she", "unka": "their",
    "unki": "their", "apna": "own", "apne": "own",
    "khud": "self", "dusre": "other", "do": "two", "teen": "three",
    "ek": "one", "char": "four", "paanch": "five",
    "mahine": "months", "mahina": "month", "saal": "year",
    "din": "day", "hafta": "week", "ghanta": "hour",
    "paisa": "money", "paise": "money", "rupya": "rupee",
    "rupaye": "rupees", "lakh": "lakh", "crore": "crore",
    "bachat": "savings", "kharcha": "expense", "kharche": "expenses",
    "aamdani": "income", "kamai": "earnings",
    "ghar": "home", "college": "college", "school": "school",
    "job": "job", "salary": "salary", "work": "work",
    "padhai": "studies", "padho": "read", "likho": "write",
    "banao": "make", "kholo": "open", "band": "close",
    "shuru": "start", "khatam": "end", "chalu": "continue",
    "save": "save", "spend": "spend", "invest": "invest",
    "check": "check", "follow": "follow", "ignore": "ignore",
    "compare": "compare", "calculate": "calculate", "track": "track",
    "review": "review", "adjust": "adjust", "plan": "plan",
    "share": "share", "avoid": "avoid", "use": "use",
    "prefer": "prefer", "choose": "choose", "apply": "apply",
    "submit": "submit", "verify": "verify", "confirm": "confirm",
    "samjho": "understand", "dhyan do": "pay attention",
    "yaad rakho": "remember", "dekh lo": "see for yourself",
    "socho": "think", "puchho": "ask", "bolo": "say",
    "bhi mat": "do not even",
    "karo": "do", "mat karo": "do not",
    "karna": "to do", "karna hai": "need to do",
    "karna chahiye": "should do", "kar sakte ho": "can do",
    "karna padta": "have to do",
    "shuru karo": "start", "band karo": "stop",
    "save karo": "save", "spend karo": "spend",
    "invest karo": "invest", "check karo": "check",
    "track karo": "track", "review karo": "review",
    "plan karo": "plan", "share karo": "share",
    "avoid karo": "avoid", "use karo": "use",
    "prefer karo": "prefer", "choose karo": "choose",
    "apply karo": "apply", "submit karo": "submit",
    "verify karo": "verify", "confirm karo": "confirm",
    "compare karo": "compare", "calculate karo": "calculate",
    "analyze karo": "analyze", "adjust karo": "adjust",
    "maintain karo": "maintain", "follow karo": "follow",
    "kholo": "open", "padho": "read", "likho": "write",
    "banao": "make", "seekho": "learn", "samjho": "understand",
    "dhyan do": "pay attention", "yaad rakho": "remember",
    "dekh lo": "see for yourself", "puchho": "ask",
    "bolo": "say", "socho": "think",
    # Common phrases
    "kya hai": "what is", "kaise karte hain": "how to do",
    "kaise banaayein": "how to make", "kahan rakhein": "where to keep",
    "kab use karein": "when to use", "kyun zaroori hai": "why is it important",
    "ka matlab hai": "means", "ka simple matlab hai": "simply means",
    "ka matlab hai ki": "means that",
    "tumhare paas": "you have", "tumhara": "your",
    "mere paas": "I have", "mera": "my",
    "uske paas": "he/she has", "uska": "his/her",
    "unka": "their", "unki": "their",
    "iska matlab hai": "this means", "iska matlab hai": "this means",
    "yahi problem": "this is the problem", "yahi baat": "this is the point",
    "sabse pehle": "first of all", "sabse important": "most important",
    "sabse common": "most common", "sabse zyada": "the most",
    "sabke liye": "for everyone", "sabko": "everyone",
    "kisi ko bhi": "anyone", "koi bhi": "anyone",
    "har": "every", "kuch": "some", "sab": "all",
    "jo": "who/which", "jiski": "whose", "jiska": "whose",
    "jisne": "who", "jise": "whom",
    "waisa": "like that", "aise": "like this",
    "is tarah se": "in this way", "us tarah se": "in that way",
    "abhi": "now", "phir": "then", "uske baad": "after that",
    "usse pehle": "before that", "iske baad": "after this",
    "isse pehle": "before this",
    "lekin": "but", "magar": "but", "par": "but",
    "aur": "and", "taki": "so that", "jisse": "which/whom",
    "jiske": "whose", "jiska": "whose",
    "yehi": "this is", "wohi": "that is",
    "aisa": "like this", "waisa": "like that",
    "aise": "like this", "waise": "like that",
    "kuch": "some", "kai": "many", "zyada": "more",
    "kam": "less", "bahut": "very", "thoda": "a little",
    "zyada se zyada": "maximum", "kam se kam": "minimum",
    "pehle": "first", "baad mein": "later",
    "ab": "now", "tab": "then", "yahan": "here",
    "wahan": "there", "kahin": "somewhere",
    "kahi": "somewhere", "har jagah": "everywhere",
    "koi jagah": "somewhere",
    "doston": "friends", "family": "family",
    "parents": "parents", "bachche": "children",
    "ladka": "boy", "ladki": "girl",
    "bhai": "brother", "behen": "sister",
    "mummy": "mother", "papa": "father",
    "dost": "friend", "teacher": "teacher",
    "student": "student", "log": "people",
    "insaan": "person", "aadmi": "man", "aurat": "woman",
    "bachcha": "child", "bachhi": "girl child",
    "zyadatar": "mostly", "lagbhag": "approximately",
    "kareeban": "approximately", "almost": "almost",
    "bilkul": "absolutely", "ekdum": "completely",
    "poora": "whole", "puri": "whole",
    "aadhha": "half", "aadhi": "half",
    "double": "double", "triple": "triple",
    "first": "first", "second": "second", "third": "third",
    "last": "last", "next": "next", "previous": "previous",
    "current": "current", "final": "final",
    "important": "important", "useful": "useful",
    "free": "free", "safe": "safe", "best": "best",
    "worst": "worst", "smart": "smart", "simple": "simple",
    "clear": "clear", "real": "real", "actual": "actual",
    "fake": "fake", "scam": "scam", "fraud": "fraud",
    "risk": "risk", "profit": "profit", "loss": "loss",
    "return": "return", "returns": "returns",
    "growth": "growth", "wealth": "wealth",
    "income": "income", "expense": "expense",
    "saving": "saving", "savings": "savings",
    "budget": "budget", "investment": "investment",
    "insurance": "insurance", "premium": "premium",
    "policy": "policy", "claim": "claim",
    "fund": "fund", "account": "account",
    "balance": "balance", "deposit": "deposit",
    "withdrawal": "withdrawal", "transfer": "transfer",
    "payment": "payment", "transaction": "transaction",
    "interest": "interest", "rate": "rate",
    "amount": "amount", "limit": "limit",
    "charge": "charge", "fee": "fee", "cost": "cost",
    "price": "price", "value": "value", "worth": "worth",
    "term": "term", "tenure": "tenure",
    "period": "period", "duration": "duration",
    "date": "date", "deadline": "deadline",
    "target": "target", "goal": "goal",
    "plan": "plan", "strategy": "strategy",
    "approach": "approach", "method": "method",
    "technique": "technique", "tip": "tip",
    "trick": "trick", "hack": "hack",
    "rule": "rule", "principle": "principle",
    "concept": "concept", "idea": "idea",
    "example": "example", "case": "case",
    "story": "story", "lesson": "lesson",
    "takeaway": "takeaway", "key": "key",
    "note": "note", "remember": "remember",
    "warning": "warning", "danger": "danger",
    "alert": "alert", "advice": "advice",
    "recommendation": "recommendation",
    "suggestion": "suggestion", "option": "option",
    "choice": "choice", "decision": "decision",
    "result": "result", "benefit": "benefit",
    "advantage": "advantage", "disadvantage": "disadvantage",
    "comparison": "comparison", "difference": "difference",
    "scenario": "scenario", "situation": "situation",
    "problem": "problem", "solution": "solution",
    "answer": "answer", "question": "question",
    "doubt": "doubt", "confusion": "confusion",
    "myth": "myth", "fact": "fact", "truth": "truth",
    "reality": "reality", "expectation": "expectation",
    "future": "future", "past": "past", "present": "present",
    "today": "today", "tomorrow": "tomorrow",
    "now": "now", "here": "here", "there": "there",
    "everywhere": "everywhere", "always": "always",
    "never": "never", "sometimes": "sometimes",
    "often": "often", "usually": "usually",
    "generally": "generally", "basically": "basically",
    "actually": "actually", "really": "really",
    "truly": "truly", "definitely": "definitely",
    "certainly": "certainly", "obviously": "obviously",
    "clearly": "clearly", "exactly": "exactly",
    "approximately": "approximately", "roughly": "roughly",
    "nearly": "nearly", "almost": "almost",
    "hardly": "hardly", "barely": "barely",
    "merely": "merely", "simply": "simply",
    "just": "just", "only": "only", "even": "even",
    "still": "still", "already": "already",
    "yet": "yet", "soon": "soon", "later": "later",
    "earlier": "earlier", "before": "before",
    "after": "after", "during": "during",
    "while": "while", "until": "until",
    "since": "since", "because": "because",
    "although": "although", "though": "though",
    "however": "however", "therefore": "therefore",
    "moreover": "moreover", "furthermore": "furthermore",
    "additionally": "additionally", "meanwhile": "meanwhile",
    "otherwise": "otherwise", "instead": "instead",
    "rather": "rather", "especially": "especially",
    "particularly": "particularly", "specifically": "specifically",
    "mainly": "mainly", "primarily": "primarily",
    "mostly": "mostly", "largely": "largely",
    "notably": "notably", "namely": "namely",
    "for example": "for example", "for instance": "for instance",
    "such as": "such as", "including": "including",
    "except": "except", "besides": "besides",
    "apart from": "apart from", "in addition to": "in addition to",
    "along with": "along with", "together with": "together with",
    "as well as": "as well as", "not only": "not only",
    "but also": "but also", "either": "either",
    "neither": "neither", "both": "both",
    "all": "all", "every": "every", "each": "each",
    "any": "any", "some": "some", "many": "many",
    "few": "few", "several": "several",
    "much": "much", "little": "little",
    "more": "more", "most": "most",
    "less": "less", "least": "least",
    "enough": "enough", "plenty": "plenty",
    "abundant": "abundant", "scarce": "scarce",
    "rare": "rare", "common": "common",
    "typical": "typical", "normal": "normal",
    "regular": "regular", "irregular": "irregular",
    "standard": "standard", "basic": "basic",
    "advanced": "advanced", "simple": "simple",
    "complex": "complex", "easy": "easy",
    "difficult": "difficult", "hard": "hard",
    "tough": "tough", "soft": "soft",
    "smooth": "smooth", "rough": "rough",
    "fast": "fast", "slow": "slow",
    "quick": "quick", "rapid": "rapid",
    "gradual": "gradual", "sudden": "sudden",
    "immediate": "immediate", "instant": "instant",
    "delayed": "delayed", "early": "early",
    "late": "late", "on time": "on time",
    "ahead": "ahead", "behind": "behind",
    "above": "above", "below": "below",
    "over": "over", "under": "under",
    "inside": "inside", "outside": "outside",
    "between": "between", "among": "among",
    "within": "within", "beyond": "beyond",
    "across": "across", "through": "through",
    "against": "against", "towards": "towards",
    "away from": "away from", "near": "near",
    "far": "far", "close": "close",
    "distant": "distant",
}

# Sentence-level rewrites for common Hinglish patterns
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
        'Barter se Modern Money tak ka safar:',
        'The journey from barter to modern money:'
    ),
    (
        'Pehle zamaane mein log cheezon se cheezein badalte the — gehu se kapde, doodh se chawal.',
        'In earlier times, people exchanged things for things — wheat for clothes, milk for rice.'
    ),
    (
        'Lekin yeh system bahut inefficient tha.',
        'But this system was very inefficient.'
    ),
    (
        'Phir logon ne precious metals jaise gold aur silver ko money ki tarah use karna shuru kiya.',
        'Then people started using precious metals like gold and silver as money.'
    ),
    (
        'Kyunki gold sab jagah accept hota tha, easily divide hota tha, aur store bhi ho sakta tha.',
        'Because gold was accepted everywhere, could be easily divided, and could also be stored.'
    ),
    (
        'Phir governments ne paper currency introduce ki — jo gold ke against issue hoti thi.',
        'Then governments introduced paper currency — which was issued against gold.'
    ),
    (
        'Aaj ki date mein paisa "fiat currency" hai — matlab',
        'Today, money is "fiat currency" — meaning'
    ),
    (
        'government ne declare kiya hai ki yeh legal tender hai, bina kisi gold backing ke.',
        'the government has declared it as legal tender, without any gold backing.'
    ),
    (
        'Iska matlab paisa ki value government ke trust pe based hai.',
        'This means the value of money is based on trust in the government.'
    ),
    (
        'Digital Money ka Evolution:',
        'Evolution of Digital Money:'
    ),
    (
        'Aaj ke daur mein paisa sirf cash nahi hai.',
        "In today's world, money is not just cash."
    ),
    (
        'Digital money — UPI, wallets, bank transfers — yeh sab bhi paisa hai.',
        'Digital money — UPI, wallets, bank transfers — all of this is also money.'
    ),
    (
        'Tumne Google Pay se chai ka payment kiya?',
        'Did you pay for tea via Google Pay?'
    ),
    (
        'Yeh bhi paisa hai, bas physical form mein nahi hai.',
        'This is also money, just not in physical form.'
    ),
    (
        'yeh dekh lo digital money ka power.',
        'see the power of digital money.'
    ),
    # Module 1.2 - What Is Income
    (
        'Income ka simple matlab hai — tumhare paas aane wala paisa.',
        'Income simply means — the money coming to you.'
    ),
    (
        'Jo bhi source se paisa aata hai, woh income hai.',
        'Whatever the source, money coming in is income.'
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
        'Expense ka simple matlab hai — tumhara jaane wala paisa.',
        'Expense simply means — the money going out from you.'
    ),
    (
        'Jo bhi paisa nikalta hai, woh expense hai.',
        'Whatever money goes out is an expense.'
    ),
    (
        'Lekin sab expenses ek jaise nahi hote — kuch fixed hain (har mahine same), kuch variable hain (mahine pe depend karta hai), aur sabse important distinction hai — needs vs wants.',
        'But not all expenses are the same — some are fixed (the same every month), some are variable (depends on the month), and the most important distinction is — needs vs wants.'
    ),
    # Module 1.4 - What Is Saving
    (
        'Saving ka matlab hai — aaj kam kharcha karo, kal ke liye paise rakhna.',
        'Saving means — spend less today, save money for tomorrow.'
    ),
    (
        'Simple sa concept hai, lekin execute karna bahut mushkil hai kyunki humari aadat hai "pehle spend karo, jo bacha woh save".',
        'It is a simple concept, but very difficult to execute because our habit is "spend first, save whatever is left".'
    ),
    (
        'Yeh approach kaam nahi karti kyunki usually kuch nahi bachta!',
        'This approach does not work because usually nothing is left!'
    ),
    (
        'Correct approach hai "Pay Yourself First" — income aaya, pehle saving mein daalo, baaki se expenses chalao.',
        'The correct approach is "Pay Yourself First" — when income comes, put it into savings first, run your expenses with the rest.'
    ),
    # Module 1.5 - What Is Budget
    (
        'Budget ka simple matlab hai — "paisa aaya, kahan gaya, kitna bacha".',
        'A budget simply means — "money came in, where did it go, how much is left".'
    ),
    (
        'Yeh tumhari financial life ka roadmap hai.',
        'This is the roadmap of your financial life.'
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
        'Har Sunday 15 minute budget check karo.',
        'Check your budget for 15 minutes every Sunday.'
    ),
    (
        'Kahan zyada ho gaya?',
        'Where did you overspend?'
    ),
    (
        'Next month adjust karo.',
        'Adjust next month.'
    ),
    (
        'Budget living document hai — rigid nahi, flexible hona chahiye.',
        'A budget is a living document — not rigid, it should be flexible.'
    ),
    # Module 3 - Saving
    (
        'Yeh sabse common sawaal hai',
        'This is the most common question'
    ),
    (
        'Answer depends hai tumhari income aur goals pe',
        'The answer depends on your income and goals'
    ),
    (
        'lekin kuch general rules hain',
        'but there are some general rules'
    ),
    (
        'Minimum 20% income save karo',
        'Save a minimum of 20% of your income'
    ),
    (
        'Har income level pe applicable',
        'Applicable at every income level'
    ),
    (
        'Aggressive savers 30-50% save karte hain',
        'Aggressive savers save 30-50%'
    ),
    (
        'Agar expenses kam hain',
        'If expenses are low'
    ),
    (
        'ghar pe rehte ho',
        'you live at home'
    ),
    (
        'toh 50% possible hai',
        'then 50% is possible'
    ),
    (
        'FIRE followers 50-70% bhi save karte hain',
        'FIRE followers save even 50-70%'
    ),
    (
        'Financial independence early chahiye toh yeh karna padta hai',
        'If you want financial independence early, this is what it takes'
    ),
    # Module 4 - Emergency Fund
    (
        'SIRF emergency mein use hone hain',
        'are to be used ONLY in emergencies'
    ),
    (
        'kisi bhi aur purpose ke liye nahi',
        'not for any other purpose'
    ),
    (
        'Yeh tumhara financial safety net hai',
        'This is your financial safety net'
    ),
    (
        'tumhari insurance hai bina koi premium ke',
        'your insurance without any premium'
    ),
    (
        'Regular saving se yeh different hai',
        'This is different from regular saving'
    ),
    (
        'regular saving goals ke liye hoti hai',
        'regular saving is for goals'
    ),
    (
        'emergency fund sirf unexpected situations ke liye hai',
        'an emergency fund is only for unexpected situations'
    ),
    (
        'Yeh accessible hona chahiye',
        'It should be accessible'
    ),
    (
        'emergency mein 2-3 din mein cash available',
        'cash available within 2-3 days in an emergency'
    ),
    # Module 5 - Debt
    (
        'Sab debt bure nahi hote',
        'Not all debt is bad'
    ),
    (
        'Kuch debt tumhe aage le jaate hain',
        'Some debt takes you forward'
    ),
    (
        'kuch peeche kheenchte hain',
        'some pulls you back'
    ),
    (
        'Simple rule',
        'Simple rule'
    ),
    (
        'Agar loan se asset ban raha hai = good debt',
        'If a loan is building an asset = good debt'
    ),
    (
        'agar consumption hai = bad debt',
        'if it is for consumption = bad debt'
    ),
    (
        'Asset woh cheez hai jo value badhati hai ya income generate karti hai',
        'An asset is something that increases in value or generates income'
    ),
    (
        'Consumption woh cheez hai jo khatam ho jaati hai bina koi value',
        'Consumption is something that is used up without any value'
    ),
    # Module 6 - Banking
    (
        'Bank account tumhari financial life ka base hai',
        'A bank account is the foundation of your financial life'
    ),
    (
        'Bina bank account ke',
        'Without a bank account'
    ),
    (
        'salary nahi aayegi',
        'salary will not come'
    ),
    (
        'online payment nahi hoga',
        'online payments will not work'
    ),
    (
        'saving safe nahi rahegi',
        'savings will not be safe'
    ),
    (
        'Students ke liye sabse important account savings account hai',
        'For students, the most important account is the savings account'
    ),
    # Module 7 - Investment
    (
        'Saving = paisa protect karna',
        'Saving = protecting money'
    ),
    (
        'Investment = paisa grow karna',
        'Investing = growing money'
    ),
    (
        'Yeh basic farq hai',
        'This is the basic difference'
    ),
    (
        'Jab tum saving account mein paisa rakhte ho',
        'When you keep money in a savings account'
    ),
    (
        'woh 3-4% grow hota hai',
        'it grows at 3-4%'
    ),
    (
        'lekin inflation 5-6% hai',
        'but inflation is 5-6%'
    ),
    (
        'toh real mein tumhara paisa kam ho raha hai',
        'so in real terms your money is decreasing'
    ),
    (
        'Investment se tum inflation ko beat karte ho',
        'With investing, you beat inflation'
    ),
    (
        'aur wealth create karte ho',
        'and create wealth'
    ),
    (
        '"Paise ko kaam pe lagao"',
        '"Put your money to work"'
    ),
    (
        'tum kaam mat karo paise ke liye',
        'instead of working for money'
    ),
    (
        'yeh investing ka core philosophy',
        'this is the core philosophy of investing'
    ),
    # Module 9 - Insurance
    (
        'Insurance ek aisa system hai jismein aap chhota sa amount regularly dete hain',
        'Insurance is a system where you pay a small amount regularly'
    ),
    (
        'aur bad mein koi badi emergency aaye toh insurance company bills bharti hai',
        'and if a big emergency comes later, the insurance company pays the bills'
    ),
    (
        'Socho isko ek "samuhik bachat" jaisa',
        'Think of it like a "collective savings"'
    ),
    (
        'sab log thoda thoda paisa jodte hain',
        'everyone pools in a little money'
    ),
    (
        'aur jiski emergency aati hai usko bada amount milta hai',
        'and whoever faces an emergency gets a large amount'
    ),
    (
        'Yeh risk transfer ka concept hai',
        'This is the concept of risk transfer'
    ),
    (
        'aapka risk insurance company le leti hai',
        'the insurance company takes on your risk'
    ),
    (
        'chhote premium ke badle mein',
        'in exchange for a small premium'
    ),
    (
        'Bina insurance ke',
        'Without insurance'
    ),
    (
        'ek medical emergency ya accident aapke saare savings',
        'a medical emergency or accident [can wipe out] all your savings'
    ),
    # Module 10 - Tax
    (
        'Income tax woh paisa hai jo aapki aamdani se sarkar kat ti hai',
        'Income tax is the money the government deducts from your earnings'
    ),
    (
        'Yeh desh chalane ke liye chanda hai',
        'This is the contribution to run the country'
    ),
    (
        'sadke, hospital, school, defense sab isse chalte hain',
        'roads, hospitals, schools, defense — all run on this'
    ),
    (
        'India mein income tax direct tax hai',
        'In India, income tax is a direct tax'
    ),
    (
        'matlab seedha aapki aamdani se cut hota hai',
        'meaning it is directly cut from your earnings'
    ),
    (
        'Har financial year',
        'Every financial year'
    ),
    (
        'aapki total income calculate hoti hai',
        'your total income is calculated'
    ),
    (
        'aur uspe tax lagta hai',
        'and tax is applied on it'
    ),
    (
        'based on "slabs"',
        'based on "slabs"'
    ),
    (
        'jyada income = jyada tax',
        'higher income = higher tax'
    ),
    # Module 8 - FIRE
    (
        'Financial independence ka matlab hai',
        'Financial independence means'
    ),
    (
        'tumhari saari expenses tumhari passive income se cover ho rahi hain',
        'all your expenses are covered by your passive income'
    ),
    (
        'kaam karne ki zaroorat nahi',
        'you do not need to work'
    ),
    (
        '"Kaam karna" aur "kaam karna padta hai" mein bahut farq hai',
        'There is a big difference between "working" and "having to work"'
    ),
    (
        'Financial independence ke baad tum kaam isliye karte ho',
        'After financial independence, you work because'
    ),
    (
        'kyunki karna chahte ho',
        'you want to'
    ),
    (
        'na ki karna padta hai',
        'not because you have to'
    ),
    (
        'Yeh freedom ki feeling hai',
        'This is the feeling of freedom'
    ),
    (
        'jo har student ko experience karni chahiye',
        'that every student should experience'
    ),
    # Psychology of Money
    (
        'Paise ka logic nahi, psychology hai',
        'Money is not about logic, it is about psychology'
    ),
    (
        'Log financially galat decisions lete hain',
        'People make wrong financial decisions'
    ),
    (
        'kyunki unka emotional experience alag hota hai',
        'because their emotional experience is different'
    ),
    (
        'Jo aapke liye bewakoofi lagta hai',
        'What seems foolish to you'
    ),
    (
        'dusre ke liye perfectly logical ho sakta hai',
        'may be perfectly logical to someone else'
    ),
    (
        'kyunki unki life story alag hai',
        'because their life story is different'
    ),
    (
        'Isliye kisi ki financial choice judge mat karo',
        "So do not judge anyone's financial choices"
    ),
    (
        'samjho',
        'understand them'
    ),
]


def has_hinglish(text):
    """Check if text contains Hinglish content."""
    if not text or not isinstance(text, str):
        return False
    hinglish_indicators = [
        'kya hai', 'kaise', 'karo', 'mat karo', 'hai ', 'hain ',
        'nahi hai', 'nahi hain', 'ka matlab', 'hoti hai', 'hota hai',
        'ho jaata hai', 'ho jaati hai', 'kar sakte ho', 'karna padta hai',
        'karna chahiye', 'karna hai', 'lekin ', 'aur ', 'ya ',
        'kyunki ', 'isliye ', 'jab ', 'agar ', 'toh ', 'bhi ',
        'sirf ', 'bahut ', 'zyada ', 'kam ', 'accha ', 'bura ',
        'tum ', 'tumhe ', 'tumhare ', 'aap ', 'aapki ', 'aapke ',
        'woh ', 'usko ', 'usne ', 'unka ', 'unhe ',
        'yeh ', 'ye ', 'iska ', 'iske ', 'iski ',
        'pehle ', 'baad ', 'saath ', 'bina ', 'ke liye ',
        'ke saath ', 'ke baad ', 'se pehle ',
        'mein ', 'pe ', 'se ', 'tak ',
        'kuch ', 'sab ', 'jo ', 'jiski ',
        'mahine ', 'mahina ', 'saal ', 'din ',
        'paisa ', 'paise ', 'rupya ', 'rupaye ',
        'bachat ', 'kharcha ', 'kharche ',
        'aamdani ', 'kamai ',
        'zaroori ', 'zaroorat ',
        'mushkil ', 'aasan ',
        'chhota ', 'bada ', 'naya ', 'purana ',
        'dekh lo ', 'yaad rakho ',
        'shuru karo ', 'band karo ',
        'save karo ', 'spend karo ',
        'invest karo ', 'check karo ',
        'follow karo ', 'ignore mat ',
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
        'usme ', 'usse ',
        'unme ', 'unse ',
        'isme ', 'isse ',
        'meri ', 'mere ',
        'tera ', 'tere ',
        'uska ', 'uski ',
        'unka ', 'unki ',
        'apna ', 'apne ',
        'khud ', 'dusre ',
        'ghar ', 'college ',
        'school ',
        'job ', 'salary ',
    ]
    hinglish_count = sum(1 for word in hinglish_indicators if word.lower() in text.lower())
    return hinglish_count >= 3


def translate_hinglish_word(word):
    """Translate a single Hinglish word to English."""
    word_lower = word.lower().strip('.,!?;:"\'')
    if word_lower in WORD_MAP:
        translated = WORD_MAP[word_lower]
        # Preserve capitalization
        if word[0].isupper():
            translated = translated.capitalize()
        return translated
    return word


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

    # Word-level translation for remaining Hinglish
    words = text.split()
    translated_words = []
    for word in words:
        translated_words.append(translate_hinglish_word(word))

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
    sample_content = translated['modules'][0]['topics'][0]['content'][:200]
    print(f"Module 1.1 content start: {sample_content}...")


if __name__ == "__main__":
    main()
