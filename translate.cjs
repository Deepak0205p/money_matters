const fs = require('fs');

// Simple, targeted translations for specific Hinglish phrases
// This script only translates known patterns, not random words
const translations = {
  // Module titles - keeping these specific
  '# Module 13: ADVANCED TAX AUR FREELANCER PLANNING': '# Module 13: Advanced Tax and Freelancer Planning',
  '# Module 14: NEGOTIATION AUR RELATIONSHIP MONEY SKILLS': '# Module 14: Negotiation and Relationship Money Skills',
  '# Module 15: CREATOR ECONOMY, GIG WORK AUR CROSS-BORDER FINANCE': '# Module 15: Creator Economy, Gig Work and Cross-Border Finance',
  '# Module 16: FIRST JOB, CTC BREAKDOWN AUR CORPORATE BENEFITS': '# Module 16: First Job, CTC Breakdown and Corporate Benefits',
  '# Module 17: AI SCAMS, FINTECH DARK PATTERNS AUR CONSUMER RIGHTS': '# Module 17: AI Scams, Fintech Dark Patterns and Consumer Rights',
  '# Module 18: ADVANCED WEALTH BUILDING AUR ESTATE BASICS': '# Module 18: Advanced Wealth Building and Estate Basics',
  
  // Topic titles
  'Freelancing Ki Duniya — Income Tax Ka Complete Guide': 'The World of Freelancing — Complete Guide to Income Tax',
  'Advance Tax — Mahine Ka Paisa, Mahine Ka Tax': 'Advance Tax — Monthly Money, Monthly Tax',
  'Expense Deductions — Kitna Bacha Sakte Ho': 'Expense Deductions — How Much You Can Save',
  'TDS Claiming Aur Refund Process — Paisa Wapas Kaise Lein': 'TDS Claiming and Refund Process — How to Get Your Money Back',
  'Old Regime vs New Regime — Freelancer Ke Liye Kaunsa Best Hai': 'Old Regime vs New Regime — Which is Best for Freelancers',
  'Professional Tax — State Ka Chhota Tax': 'Professional Tax — The Small State Tax',
  'Retirement Planning for Freelancers — Bina Company Ke Bhi Pension': 'Retirement Planning for Freelancers — Pension Without a Company',
  'Health Insurance for Freelancers — Self-Employed Ka Kavach': 'Health Insurance for Freelancers — The Self-Employed Shield',
  'Invoice Management Aur Cash Flow Planning': 'Invoice Management and Cash Flow Planning',
  'Freelancer Tax Calendar — Poora Saal Ka Schedule': 'Freelancer Tax Calendar — The Full Year Schedule',
  'Common Tax Mistakes — Jo Freelancers Karte Hain': 'Common Tax Mistakes — That Freelancers Make',
  'Case Studies — Real Freelancer Tax Journeys': 'Case Studies — Real Freelancer Tax Journeys',
  'Tools Aur Resources — Freelancer Tax Toolkit': 'Tools and Resources — Freelancer Tax Toolkit',
  
  // Module 14 titles
  'Negotiation Kya Hai — Paisa Bachane Ka Sabse Bada Haathiar': 'What is Negotiation — The Biggest Weapon to Save Money',
  'Salary Negotiation — Pehli Job Ka Sabse Bada Decision': 'Salary Negotiation — The Biggest Decision of Your First Job',
  'Salary Raise Aur Promotion — Value Badhao, Paisa Badhao': 'Salary Raise and Promotion — Increase Value, Increase Money',
  'Loan Interest Rate Negotiation — Bank Se Bachaao Paisa': 'Loan Interest Rate Negotiation — Save Money from Banks',
  'Rent Negotiation — Ghar Ka Kiraya Kam Karo': 'Rent Negotiation — Reduce Your House Rent',
  'Insurance Premium Negotiation — Sahi Daam Pe Sahi Coverage': 'Insurance Premium Negotiation — Right Coverage at Right Price',
  'Freelance Rate Negotiation — Client Se Sahi Paisa Lo': 'Freelance Rate Negotiation — Get the Right Money from Clients',
  'Bill Negotiation — Monthly Expenses Kam Karo': 'Bill Negotiation — Reduce Monthly Expenses',
  
  // Module 15 titles
  'Creator Economy India Mein — Opportunity Aur Financial Reality': 'Creator Economy in India — Opportunity and Financial Reality',
  'Brand Deals & Sec 194R Tax Rules — Free Products Pe Tax!': 'Brand Deals & Sec 194R Tax Rules — Tax on Free Products!',
  'Foreign Payments & Cross-Border Money for Freelancers': 'Foreign Payments & Cross-Border Money for Freelancers',
  'FEMA Rules & Compliance for Indian Youth': 'FEMA Rules & Compliance for Indian Youth',
  'Study Abroad Financial Roadmap': 'Study Abroad Financial Roadmap',
  'Real Indian Case Studies & Quick Reference Guide': 'Real Indian Case Studies & Quick Reference Guide',
  
  // Module 16 titles
  'CTC vs In-Hand Salary — Reality Check': 'CTC vs In-Hand Salary — Reality Check',
  'Salary Components Breakdown': 'Salary Components Breakdown',
  'ESOPs & RSUs — Stock Options Unlocked': 'ESOPs & RSUs — Stock Options Unlocked',
  'Corporate Perks & Flexi-Benefits Optimization': 'Corporate Perks & Flexi-Benefits Optimization',
  'Layoffs, Notice Periods & Job Switching Financials': 'Layoffs, Notice Periods & Job Switching Financials',
  'Real Indian Case Studies & Salary Calculator Worksheets': 'Real Indian Case Studies & Salary Calculator Worksheets',
  'Glossary of 20 Corporate Financial Terms': 'Glossary of 20 Corporate Financial Terms',
  'Conclusion & Senior Advice Checklist': 'Conclusion & Senior Advice Checklist',
  
  // Module 17 titles
  'Modern AI Financial Scams & 2026 Cyber Threats': 'Modern AI Financial Scams & 2026 Cyber Threats',
  'Fintech Dark Patterns & App Traps': 'Fintech Dark Patterns & App Traps',
  'Consumer Rights & RBI Ombudsman Portal (CMS)': 'Consumer Rights & RBI Ombudsman Portal (CMS)',
  'Investor & Insurance Grievance Redressal': 'Investor & Insurance Grievance Redressal',
  'Tenant Rights & Landlord Money Battles': 'Tenant Rights & Landlord Money Battles',
  'Case Studies & Cyber Safety Emergency Toolkit': 'Case Studies & Cyber Safety Emergency Toolkit',
  
  // Module 18 titles
  'Alternative Real Assets — REITs, InvITs & Secondary Gold': 'Alternative Real Assets — REITs, InvITs & Secondary Gold',
  'REITs (Real Estate Investment Trusts) — Commercial Real Estate with ₹500': 'REITs (Real Estate Investment Trusts) — Commercial Real Estate with ₹500',
  'InvITs (Infrastructure Investment Trusts) — India Ki Backbone Mein Investment': 'InvITs (Infrastructure Investment Trusts) — Investment in India\'s Backbone',
  'Secondary Market SGBs (Sovereign Gold Bonds) — The Hidden Goldmine': 'Secondary Market SGBs (Sovereign Gold Bonds) — The Hidden Goldmine',
  
  // Common phrases in content - simple replacements
  'Doston,': 'Friends,',
  'aaj kal': 'these days',
  'module mein humne': 'in module we',
  'aaj hum deep dive karenge': 'today we will deep dive',
  'tumhare liye GOLD hai': 'is GOLD for you',
  'samajhte hain': 'let us understand',
  'dekhte hain': 'let us see',
  'seekhte hain': 'let us learn',
  'karte hain': 'let us do',
  'bolte hain': 'let us say',
  'sochte hain': 'let us think',
  'yaad rakho': 'remember',
  'dhyan do': 'pay attention',
  'shuru karo': 'start',
  'band karo': 'stop',
  'badhao': 'increase',
  'ghatao': 'decrease',
  'bachao': 'save',
  'kamao': 'earn',
  'kharch karo': 'spend',
  'invest karo': 'invest',
  'karo': 'do',
  'mat karo': 'do not',
  'hai': 'is',
  'hain': 'are',
  'tha': 'was',
  'thi': 'was',
  'the': 'were',
  'ka': 'of',
  'ki': 'of',
  'ke': 'of',
  'ko': 'to',
  'se': 'from',
  'mein': 'in',
  'pe': 'on',
  'par': 'on',
  'ne': '',
  'kya': 'what',
  'kaun': 'who',
  'kab': 'when',
  'kahan': 'where',
  'kaise': 'how',
  'kyun': 'why',
  'kitna': 'how much',
  'bahut': 'very',
  'zyada': 'more',
  'kam': 'less',
  'sabse': 'most',
  'accha': 'good',
  'bura': 'bad',
  'bada': 'big',
  'chhota': 'small',
  'naya': 'new',
  'purana': 'old',
  'ghar': 'home',
  'paisa': 'money',
  'paise': 'money',
  'dost': 'friend',
  'yaar': 'friend',
  'bhai': 'brother',
  'log': 'people',
  'insaan': 'person',
  'kaam': 'work',
  'naukri': 'job',
  'padhai': 'studies',
  'seekhna': 'to learn',
  'banana': 'to make',
  'karna': 'to do',
  'dena': 'to give',
  'lena': 'to take',
  'aana': 'to come',
  'jaana': 'to go',
  'dekhna': 'to see',
  'bolna': 'to speak',
  'sochna': 'to think',
  'samajhna': 'to understand',
  'abhi': 'now',
  'yahan': 'here',
  'wahan': 'there',
  'yeh': 'this',
  'woh': 'that',
  'kuch': 'something',
  'sab': 'all',
  'koi': 'someone',
  'nahi': 'no',
  'haan': 'yes',
  'aap': 'you',
  'tum': 'you',
  'main': 'I',
  'hum': 'we',
  'mujhe': 'me',
  'tujhe': 'you',
  'apna': 'your own',
  'zaroor': 'definitely',
  'zaroori': 'necessary',
  'important hai': 'is important',
  'zaroori hai': 'is necessary',
  'mushkil hai': 'is difficult',
  'easy hai': 'is easy',
  'chahiye': 'want',
  'samajhna hai': 'to understand',
  'fayda': 'benefit',
  'nuksan': 'loss',
  'bachat': 'savings',
  'kharch': 'expense',
  'kamai': 'earnings',
  'aamdani': 'income',
  'planning': 'planning',
  'process': 'process',
  'system': 'system',
  'rule': 'rule',
  'regulation': 'regulation',
  'law': 'law',
  'legal': 'legal',
  'government': 'government',
  'sarkar': 'government',
  'official': 'official',
  'department': 'department',
  'portal': 'portal',
  'website': 'website',
  'form': 'form',
  'document': 'document',
  'certificate': 'certificate',
  'proof': 'proof',
  'receipt': 'receipt',
  'statement': 'statement',
  'file': 'file',
  'record': 'record',
  'data': 'data',
  'information': 'information',
  'details': 'details',
  'number': 'number',
  'amount': 'amount',
  'total': 'total',
  'final': 'final',
  'net': 'net',
  'gross': 'gross',
  'actual': 'actual',
  'real': 'real',
  'original': 'original',
  'genuine': 'genuine',
  'fake': 'fake',
  'fraud': 'fraud',
  'scam': 'scam',
  'risk': 'risk',
  'safe': 'safe',
  'secure': 'secure',
  'protection': 'protection',
  'security': 'security',
  'emergency': 'emergency',
  'urgent': 'urgent',
  'immediate': 'immediate',
  'priority': 'priority',
  'annual': 'annual',
  'monthly': 'monthly',
  'weekly': 'weekly',
  'daily': 'daily',
  'quarterly': 'quarterly',
  'permanent': 'permanent',
  'temporary': 'temporary',
  'fixed': 'fixed',
  'variable': 'variable',
  'flexible': 'flexible',
  'basic': 'basic',
  'standard': 'standard',
  'premium': 'premium',
  'additional': 'additional',
  'extra': 'extra',
  'minimum': 'minimum',
  'maximum': 'maximum',
  'limit': 'limit',
  'threshold': 'threshold',
  'eligible': 'eligible',
  'qualification': 'qualification',
  'requirement': 'requirement',
  'condition': 'condition',
  'clause': 'clause',
  'section': 'section',
  'act': 'act',
  'amendment': 'amendment',
  'provision': 'provision',
  'percent': 'percent',
  'percentage': 'percentage',
  'rate': 'rate',
  'ratio': 'ratio',
  'average': 'average',
  'sum': 'sum',
  'value': 'value',
  'price': 'price',
  'cost': 'cost',
  'charge': 'charge',
  'fee': 'fee',
  'tax': 'tax',
  'jaldi': 'quickly',
  'deri': 'delay',
  'waqt': 'time',
  'samay': 'time',
  'pehle': 'before',
  'baad': 'after',
  'us waqt': 'at that time',
  'iss waqt': 'at this time',
  'tab': 'then',
  'ab': 'now',
  'phir': 'then',
  'uske baad': 'after that',
  'agle': 'next',
  'pichle': 'previous',
  'sikhna': 'learn',
  'padhna': 'study',
  'likhna': 'write',
  'suna': 'listen',
  'jaanna': 'know',
  'bhoolna': 'forget',
  'yaad': 'remember',
  'vichar': 'consider',
  'nirnay': 'decision',
  'faisla': 'decision',
  'khush': 'happy',
  'gussa': 'anger',
  'dar': 'fear',
  'chinta': 'worry',
  'stress': 'stress',
  'pressure': 'pressure',
  'tension': 'tension',
  'confidence': 'confidence',
  'himmat': 'courage',
  'aage': 'ahead',
  'peeche': 'behind',
  'upar': 'up',
  'neeche': 'down',
  'andar': 'inside',
  'bahar': 'outside',
  'pass': 'near',
  'dur': 'far',
  'saath': 'together',
  'alag': 'separate',
  'hissa': 'part',
  'rasta': 'path',
  'tareeka': 'method',
  'tarika': 'method',
  'cheez': 'thing',
  'taraf': 'side',
  'jagah': 'place',
  'mausam': 'weather',
  'samasya': 'problem',
  'hal': 'solution',
  'upay': 'solution',
  'sawaal': 'question',
  'jawaab': 'answer',
  'school': 'school',
  'college': 'college',
  'university': 'university',
  'company': 'company',
  'firm': 'firm',
  'office': 'office',
  'rupeya': 'rupee',
  'rupaye': 'rupees',
  'lakh': 'lakh',
  'crore': 'crore',
  'hazaar': 'thousand',
  'das': 'ten',
  'so': 'hundred',
  'poora': 'complete',
  'pura': 'complete',
  'adha': 'half',
  'ek': 'one',
  'do': 'two',
  'teen': 'three',
  'chaar': 'four',
  'paanch': 'five',
  'chhe': 'six',
  'saat': 'seven',
  'aath': 'eight',
  'nau': 'nine',
};

// Function to translate text
function translateText(text) {
  if (!text || typeof text !== 'string') return text;
  
  let translated = text;
  
  // Apply translations (longer phrases first for better matching)
  const sortedKeys = Object.keys(translations).sort((a, b) => b.length - a.length);
  
  for (const key of sortedKeys) {
    const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    translated = translated.replace(regex, translations[key]);
  }
  
  return translated;
}

// Main function to process a file
function processFile(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Split by lines and process
    const lines = content.split('\n');
    const translatedLines = lines.map(line => {
      // Check if line contains a string value that we should translate
      const match = line.match(/^(\s*"(?:[^"\\]|\\.)*"\s*:\s*)("(?:[^"\\]|\\.)*")(,?\s*)$/);
      if (match) {
        const [_, key, value, comma] = match;
        const translatedValue = translateText(value.slice(1, -1));
        return `${key}"${translatedValue}"${comma}`;
      }
      
      // Also handle lines that are just strings in arrays
      const arrayMatch = line.match(/^(\s*)("(?:[^"\\]|\\.)*")(,?\s*)$/);
      if (arrayMatch) {
        const [_, indent, value, comma] = arrayMatch;
        const translatedValue = translateText(value.slice(1, -1));
        return `${indent}"${translatedValue}"${comma}`;
      }
      
      return line;
    });
    
    const translatedContent = translatedLines.join('\n');
    
    // Write back the file
    fs.writeFileSync(filePath, translatedContent, 'utf8');
    console.log(`Translated: ${filePath}`);
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
const files = [
  'H:\\nexura\\src\\data\\module13Cards.js',
  'H:\\nexura\\src\\data\\module14Cards.js',
  'H:\\nexura\\src\\data\\module15Cards.js',
  'H:\\nexura\\src\\data\\module16Cards.js',
  'H:\\nexura\\src\\data\\module17Cards.js',
  'H:\\nexura\\src\\data\\module18Cards.js'
];

console.log('Starting translation of Hinglish to English...\n');

files.forEach(file => {
  processFile(file);
});

console.log('\nTranslation complete!');
