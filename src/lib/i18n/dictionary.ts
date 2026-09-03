/**
 * Hand-written Hindi for the site's fixed UI text — navigation, buttons,
 * headings, labels and the short marketing lines.
 *
 * These are looked up before anything is sent to the translation API, so the
 * chrome flips to Hindi instantly, reads correctly, and costs nothing. Longer
 * page prose falls through to /api/translate.
 *
 * Keys are the exact English strings as they appear in the DOM.
 */
export const hindiDictionary: Record<string, string> = {
  // ── Header / navigation ──────────────────────────────────────────────
  Home: "होम",
  "About Us": "हमारे बारे में",
  Courses: "पाठ्यक्रम",
  "Our Courses": "हमारे पाठ्यक्रम",
  "Test Series": "टेस्ट सीरीज",
  "Study Material": "अध्ययन सामग्री",
  "Exam Resources": "परीक्षा संसाधन",
  Contact: "संपर्क",
  "Contact Us": "संपर्क करें",
  "Download App": "ऐप डाउनलोड करें",
  Menu: "मेन्यू",
  "Director's Message": "निदेशक का संदेश",
  "About Institute": "संस्थान के बारे में",
  "Ajmer Center": "अजमेर केंद्र",
  "Ajmer Centre": "अजमेर केंद्र",
  "Our Past Selections": "हमारे पिछले चयन",
  "Our Teachers": "हमारे शिक्षक",

  // ── Course names ─────────────────────────────────────────────────────
  "IAS Course": "आईएएस कोर्स",
  "RAS Course": "आरएएस कोर्स",
  "Integrated Course (IAS & RAS)": "एकीकृत कोर्स (आईएएस और आरएएस)",
  "View Our Past Selections": "हमारे पिछले चयन देखें",
  "IAS Foundation Course": "आईएएस फाउंडेशन कोर्स",
  "RAS Foundation": "आरएएस फाउंडेशन",
  "RAS Foundation Course": "आरएएस फाउंडेशन कोर्स",
  "Rajasthan PSI": "राजस्थान पीएसआई",
  "Rajasthan PSI Course": "राजस्थान पीएसआई कोर्स",
  "Rajasthan PSI & RAS Pre": "राजस्थान पीएसआई और आरएएस प्री",
  "3 Years Integrated Course": "3 वर्षीय एकीकृत कोर्स",
  "3 Year Integrated Course": "3 वर्षीय एकीकृत कोर्स",
  "IAS RAS 3 Years Integrated Course": "आईएएस-आरएएस 3 वर्षीय एकीकृत कोर्स",
  "RAS Mains Exclusive": "आरएएस मेन्स एक्सक्लूसिव",
  "Interview For IAS & RAS": "आईएएस और आरएएस साक्षात्कार",
  "IAS & RAS Interview": "आईएएस और आरएएस साक्षात्कार",
  "Interview Guidance Program": "साक्षात्कार मार्गदर्शन कार्यक्रम",
  "Test Series Programs": "टेस्ट सीरीज कार्यक्रम",
  "Online Registration ↗": "ऑनलाइन पंजीकरण ↗",
  "Explore All Courses": "सभी पाठ्यक्रम देखें",
  "View All Courses": "सभी पाठ्यक्रम देखें",
  "IAS Prelims and Mains": "आईएएस प्रीलिम्स और मेन्स",
  "RAS Prelims and Mains": "आरएएस प्रीलिम्स और मेन्स",
  "IAS Prelims & Mains": "आईएएस प्रीलिम्स और मेन्स",
  "RAS Prelims & Mains": "आरएएस प्रीलिम्स और मेन्स",
  "View All Test Series": "सभी टेस्ट सीरीज देखें",
  "All Test Series": "सभी टेस्ट सीरीज",

  // ── Study material / resources ───────────────────────────────────────
  "NCERT Books Online": "एनसीईआरटी पुस्तकें ऑनलाइन",
  "NCERT Books PDF": "एनसीईआरटी पुस्तकें पीडीएफ",
  "NCERT Books PDF Download": "एनसीईआरटी पुस्तकें पीडीएफ डाउनलोड",
  "Rajasthan Sujas": "राजस्थान सुजस",
  "Rajasthan Sujas Download": "राजस्थान सुजस डाउनलोड",
  "Economic Survey": "आर्थिक समीक्षा",
  "Economic Survey (Raj & India)": "आर्थिक समीक्षा (राजस्थान और भारत)",
  "IGNOU Study Material ↗": "इग्नू अध्ययन सामग्री ↗",
  "Rajasthan Sujas ↗": "राजस्थान सुजस ↗",
  "Explore All Study Materials": "सभी अध्ययन सामग्री देखें",
  "RAS Exam": "आरएएस परीक्षा",
  "RAS Exam Guide": "आरएएस परीक्षा गाइड",
  "RAS Exam Resources": "आरएएस परीक्षा संसाधन",
  "UPSC Civil Services": "यूपीएससी सिविल सेवा",
  "UPSC Exam Resources": "यूपीएससी परीक्षा संसाधन",
  "Rajasthan PSI Exam": "राजस्थान पीएसआई परीक्षा",
  "PSI Exam Guide": "पीएसआई परीक्षा गाइड",
  "Knowledge Base": "नॉलेज बेस",
  "Knowledge Base For IAS & RAS Exams": "आईएएस और आरएएस परीक्षा हेतु नॉलेज बेस",
  "Free Study Resources": "निःशुल्क अध्ययन संसाधन",
  "FREE STUDY RESOURCES": "निःशुल्क अध्ययन संसाधन",
  "IAS & RAS Notes, Q&A & Current Affairs":
    "आईएएस और आरएएस नोट्स, प्रश्नोत्तर और करेंट अफेयर्स",
  "IAS & RAS Exam Resources": "आईएएस और आरएएस परीक्षा संसाधन",
  "Explore →": "देखें →",

  // ── Home: exams portal banner ────────────────────────────────────────
  "SBA Exams Portal": "एसबीए परीक्षा पोर्टल",
  "🎯 Bilingual  ·  RAS & IAS Focused": "🎯 द्विभाषी  ·  आरएएस और आईएएस केंद्रित",
  NEW: "नया",
  "🏆 RAS Prelims 2026 Offline Test Series — To be Organised at 11 Centres of Rajasthan":
    "🏆 आरएएस प्रीलिम्स 2026 ऑफलाइन टेस्ट सीरीज — राजस्थान के 11 केंद्रों पर आयोजित",
  "Register →": "पंजीकरण →",
  "📊 MCQ Practice Tests (Subjectwise)": "📊 वस्तुनिष्ठ अभ्यास टेस्ट (विषयवार)",
  "📰 Current Affairs Objective Questions": "📰 करेंट अफेयर्स वस्तुनिष्ठ प्रश्न",
  "Join Now  →": "अभी जुड़ें  →",
  "Join Now": "अभी जुड़ें",

  // ── Home: slider / stats / admissions ────────────────────────────────
  "View Our Past Selections →": "हमारे पिछले चयन देखें →",
  "Years of Excellence": "वर्षों की उत्कृष्टता",
  "In Top 50 — RAS 2024": "आरएएस 2024 में शीर्ष 50 में",
  "In Top 100 — RAS 2024": "आरएएस 2024 में शीर्ष 100 में",
  "In Top 100 — RAS 2023": "आरएएस 2023 में शीर्ष 100 में",
  "Admissions Open": "प्रवेश प्रारंभ",
  "New Batches :-": "नए बैच :-",
  "RAS Foundation - 11 August 2026": "आरएएस फाउंडेशन - 11 अगस्त 2026",
  "RAS Pre / PSI - 14 July 2026": "आरएएस प्री / पीएसआई - 14 जुलाई 2026",
  "IAS & RAS Integrated Batch - 16 June 2026":
    "आईएएस और आरएएस एकीकृत बैच - 16 जून 2026",
  "IAS Foundation Batch - 16 June 2026": "आईएएस फाउंडेशन बैच - 16 जून 2026",
  "✓ Offline & Online Modes": "✓ ऑफलाइन और ऑनलाइन माध्यम",
  "✓ Hindi & English Medium": "✓ हिंदी और अंग्रेजी माध्यम",
  "✓ Expert Faculty": "✓ अनुभवी शिक्षक",
  "Register Online Now": "अभी ऑनलाइन पंजीकरण करें",

  // ── Home: section headings ───────────────────────────────────────────
  "Explore Our Courses": "हमारे पाठ्यक्रम देखें",
  "Why Choose Us?": "हमें क्यों चुनें?",
  "Quick Links": "त्वरित लिंक",
  "Get in Touch": "संपर्क करें",
  "Download Our Study Apps": "हमारे अध्ययन ऐप डाउनलोड करें",
  "Popular Video Links for Your Civil Services Preparation":
    "आपकी सिविल सेवा तैयारी हेतु लोकप्रिय वीडियो",
  "View More Videos on our Official YouTube Channel →":
    "हमारे आधिकारिक यूट्यूब चैनल पर और वीडियो देखें →",
  "Read More": "और पढ़ें",
  "Read Less": "कम पढ़ें",

  // ── App download buttons ─────────────────────────────────────────────
  "Download for": "डाउनलोड करें",
  "Download for Mac": "मैक के लिए डाउनलोड करें",
  "Download on the": "डाउनलोड करें",
  "Get it on": "प्राप्त करें",
  Windows: "विंडोज",
  "Intel Chip": "इंटेल चिप",
  "Apple Chip (M1/M2)": "एप्पल चिप (M1/M2)",
  "Google Play": "गूगल प्ले",
  "App Store": "ऐप स्टोर",

  // ── Enquiry form ─────────────────────────────────────────────────────
  "Enquire Now": "अभी पूछताछ करें",
  "Fill in your details — we'll call you back shortly":
    "अपना विवरण भरें — हम शीघ्र ही आपको कॉल करेंगे",
  "Full Name": "पूरा नाम",
  "Email Address": "ईमेल पता",
  "Phone Number": "फोन नंबर",
  "Course Interested In": "रुचि का पाठ्यक्रम",
  "Select a Course": "पाठ्यक्रम चुनें",
  "Message / Requirement": "संदेश / आवश्यकता",
  "Send Enquiry": "पूछताछ भेजें",
  "Prefer to call?": "कॉल करना चाहेंगे?",
  "Your full name": "आपका पूरा नाम",
  "Any specific questions or requirements...":
    "कोई विशेष प्रश्न या आवश्यकता...",
  "Have questions about our courses or admissions? Our counsellors are here to guide you.":
    "हमारे पाठ्यक्रमों या प्रवेश के बारे में प्रश्न हैं? हमारे परामर्शदाता आपका मार्गदर्शन करेंगे।",
  "View All Locations": "सभी स्थान देखें",
  "Call Us": "हमें कॉल करें",

  // ── Footer / social ──────────────────────────────────────────────────
  "Connect With Us": "हमसे जुड़ें",
  "Social Links": "सोशल लिंक",
  "Privacy Policy": "गोपनीयता नीति",
  "Terms of Service": "सेवा की शर्तें",
  "Refund Policy": "धनवापसी नीति",
  "Copyright © 2006-2026 All rights reserved with ATC":
    "कॉपीराइट © 2006-2026 सर्वाधिकार सुरक्षित, स्प्रिंगबोर्ड अकादमी जयपुर",

  // ── RAS promo banner ─────────────────────────────────────────────────
  "New Launch": "नया लॉन्च",
  "RAS Prelims": "आरएएस प्रीलिम्स",
  "Offline Test Series": "ऑफलाइन टेस्ट सीरीज",
  "What You Get": "आपको क्या मिलेगा",
  "14 Tests": "14 टेस्ट",
  "All India Ranking": "अखिल भारतीय रैंकिंग",
  "PDF Solutions": "पीडीएफ समाधान",
  "Video Discussion": "वीडियो चर्चा",
  "Real Examination Environment": "वास्तविक परीक्षा वातावरण",
  "Test Centres": "परीक्षा केंद्र",
  "Register Now": "अभी पंजीकरण करें",
  "Limited seats per centre": "प्रत्येक केंद्र पर सीमित सीटें",

  // ── Toppers gallery ──────────────────────────────────────────────────
  "🏆 Toppers Gallery": "🏆 टॉपर्स गैलरी",
  "Toppers Gallery": "टॉपर्स गैलरी",
  "Celebrating Excellence in Civil Services — ATC":
    "सिविल सेवा में उत्कृष्टता का उत्सव — स्प्रिंगबोर्ड अकादमी जयपुर",
  "🔍 Jump to Exam :": "🔍 परीक्षा पर जाएं :",
  "Search exam group (e.g. RAS 2021, IAS 2024)…":
    "परीक्षा समूह खोजें (जैसे आरएएस 2021, आईएएस 2024)…",
  Selected: "चयनित",
  "Name :": "नाम :",
  "Rank :": "रैंक :",
  "Back to top": "ऊपर जाएं",
};
