'use client'
import React, { useState, useEffect } from 'react'
import { useLanguage } from '@/components/LanguageContext'
import AnimatedDoodles from '@/components/AnimatedDoodles'

const Icons = {
  Partnership: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  ),
  Syndicates: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
  ),
  Certificate: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
  ),
  Trips: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M16.24 7.76l2.83-2.83" /><path d="M20 5h-3" /><path d="M20 5v3" /></svg>
  ),
  Job: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
  ),
  Update: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
  ),
  Merch: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" /></svg>
  ),
  Events: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
  ),
  EngLogo: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
  ),
  CommLogo: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
  ),
  SciLogo: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31" /><path d="M14 9.3V1.99" /><path d="M8.5 2h7" /><path d="M14 9.3a6.5 6.5 0 1 1-4 0" /><path d="M5.52 16h12.96" /></svg>
  ),
  PharmLogo: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.5 20.5 19 12a4.95 4.95 0 1 0-7-7L3.5 13.5a4.95 4.95 0 1 0 7 7Z" /><path d="m8.5 8.5 7 7" /></svg>
  ),
  ArrowLeft: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
  ),
  ArrowRight: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
  ),
  Phone: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
  ),
  WhatsApp: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
  )
};

const syndicatesList = {
  en: [
    {
      title: "Engineering Syndicate",
      desc: "(College of Engineering & Technology)",
      icon: <Icons.EngLogo />,
      details: [
        "Copy of High School Certificate (General, Arab Country, American, British)",
        "Copy of valid National ID or valid Passport",
        "Recent Criminal Record addressed to the Engineering Syndicate",
        "Personal Photo",
        "Copy of University Transcript"
      ]
    },
    {
      title: "Commercial Professions",
      desc: "(College of Management & Technology, Logistics)",
      icon: <Icons.CommLogo />,
      details: [
        "Copy of Graduation Certificate in Arabic",
        "Copy of National ID",
        "2 Personal Photos"
      ]
    },
    {
      title: "Scientific Professions",
      desc: "(College of Computing, AI, Fisheries & Aquaculture)",
      icon: <Icons.SciLogo />,
      details: [
        "Printout of Equivalency Certificate via Alumni Association",
        "Valid Criminal Record addressed to Scientific Professions Syndicate",
        "Copy of Military Status for males",
        "Copy of valid National ID",
        "3 Personal Photos"
      ]
    },
    {
      title: "Pharmacists Syndicate",
      desc: "(College of Pharmacy)",
      icon: <Icons.PharmLogo />,
      details: [
        "Original Internship Certificate and a copy",
        "Original Equivalency Certificate and a copy",
        "Original Graduation Certificate in Arabic",
        "Two copies of valid National ID stamped by the Academy",
        "Two copies of computerized Birth Certificate",
        "Recent Criminal Record addressed to the Pharmacists Syndicate",
        "Screenshot of the Profession Practice Exam",
        "4 Personal Photos stamped by the Academy",
        "Copy of High School Certificate (General, Arab Country, Foreign Country)",
        "Two copies of Military Status for males (Form 110 Jund - Valid Army ID - Stamped Statement from recruitment zone)"
      ]
    },
  ],
  ar: [
    {
      title: "نقابة المهندسين",
      desc: "(كلية الهندسة والتكنولوجيا)",
      icon: <Icons.EngLogo />,
      details: [
        "صورة من الثانوية (عامة , دولة عربية , امريكية , انجليزية )",
        "صورة من بطاقة الرقم القومى سارية او جواز سفر سارى",
        "فيش جنائى حديث موجه لنقابة المهندسين",
        "صورة شخصية",
        "صورة من ترانسكربت الكلية"
      ]
    },
    {
      title: "نقابة التجاريين",
      desc: "(كلية الادارة والتكنولوجيا - كلية النقل الدولى واللوجستيات)",
      icon: <Icons.CommLogo />,
      details: [
        "صورة من شهادة التخرج باللغة العربية",
        "صورة من بطاقة الرقم القومى",
        "عدد 2 صورة شخصية"
      ]
    },
    {
      title: "نقابة المهن العلمية",
      desc: "(كلية الحاسبات وكلية الذكاء الصناعى وكلية المصائد والاستزراع المائى)",
      icon: <Icons.SciLogo />,
      details: [
        "طباعة شهادة المعادلة عن طريق رابطة الخريجين",
        "فيش جنائى سارى موجه لنقابة المهن العلمية",
        "صورة من الموقف التجنيدى للذكور",
        "صورة من بطاقة الرقم القومى سارية",
        "عدد 3 صور شخصية"
      ]
    },
    {
      title: "نقابة الصيادلة",
      desc: "(كلية الصيدلة)",
      icon: <Icons.PharmLogo />,
      details: [
        "اصل شهادة الامتياز وصورة منها",
        "اصل شهادة المعادلة وصورة منها",
        "اصل شهادة التخرج باللغة العربية",
        "صورتين من بطاقة الرقم القومى سارية ومختومة من الاكاديمية",
        "صورتين من شهادة الميلاد مميكنة",
        "فيش جنائى حديث موجه لنقابة الصيادلة",
        "سكرين شوت من امتحان مزاولة المهنة",
        "عدد 4 صور شخصية مختومة من الاكاديمية",
        "صورة من شهادة الثانوية (عامة , دولة عربية , دولة اجنبية )",
        "صورتين من الموقف التجنيدى للذكور (نموذج 110 جند - كارنية الجيش سارى - افادة مختومة لمن يهمه الامر من منطقة التجنيد)"
      ]

    },
  ]
};

const equivalencyList = {
  en: [
    {
      title: "Master's Degree Equivalency",
      desc: "(Supreme Council of Universities)",
      icon: <Icons.Certificate />,
      details: [
        "Copy of Bachelor's graduation certificate",
        "Original Master's graduation certificate",
        "Original Master's transcript",
        "Issuing Equivalency Certificate via Alumni Association"
      ]
    },
    {
      title: "PhD Degree Equivalency",
      desc: "(Supreme Council of Universities)",
      icon: <Icons.Certificate />,
      details: [
        "Copy of Master's equivalency certificate",
        "Original PhD graduation certificate",
        "Original PhD transcript",
        "Issuing Equivalency Certificate via Alumni Association"
      ]
    }
  ],
  ar: [
    {
      title: "اعتماد درجة الماجستير",
      desc: "(المجلس الأعلى للجامعات)",
      icon: <Icons.Certificate />,
      details: [
        "صورة من شهادة تخرج البكالوريوس",
        "اصل شهادة تخرج الماجستير",
        "اصل بيان درجات الماجستير",
        "استخراج شهادة المعادلة من خلال رابطة الخريجين"
      ]
    },
    {
      title: "اعتماد درجة الدكتوراه",
      desc: "(المجلس الأعلى للجامعات)",
      icon: <Icons.Certificate />,
      details: [
        "صورة من شهادة معادلة الماجستير",
        "اصل شهادة تخرج الدكتوراة",
        "اصل بيان درجات الدكتوراه",
        "استخراج شهادة المعادلة من خلال رابطة الخريجين"
      ]
    }
  ]
};

const jobsList = {
  en: [
    {
      company: "Growing Engineering Team",
      role: "Remote Business Development Executive",
      location: "Remote",
      requirements: "Fresh graduates are welcome",
      skills: ["Communication & English", "LinkedIn & online tools", "Relationship building", "Lead generation", "Business development"],
      link: "https://forms.gle/JDR4Mf9aNegTEfUz9",
      deadline: "30 September 2026"
    },
    {
      company: "Alforat Development",
      role: "Customer Service Representative",
      location: "Alexandria",
      requirements: "Bachelor's Degree",
      experience: "2+ years' experience",
      link: "https://forms.gle/JDR4Mf9aNegTEfUz9",
      deadline: "30 September 2026"
    },
    {
      company: "Alforat Development",
      role: "Senior Accountant",
      location: "Alexandria",
      requirements: "IFRS preferred",
      experience: "5-8 years' experience",
      link: "https://forms.gle/JDR4Mf9aNegTEfUz9",
      deadline: "30 September 2026"
    },
    {
      company: "Alforat Development",
      role: "Facilities Manager - Residential Compound",
      location: "Alexandria",
      requirements: "Engineering preferred",
      experience: "10-15 years' experience",
      link: "https://forms.gle/JDR4Mf9aNegTEfUz9",
      deadline: "30 September 2026"
    },
    {
      company: "Alforat Development",
      role: "Cost Accountant Section Head",
      location: "Alexandria",
      requirements: "CMA required",
      experience: "8+ years' experience",
      link: "https://forms.gle/JDR4Mf9aNegTEfUz9",
      deadline: "30 September 2026"
    }
  ],
  ar: [
    {
      company: "فريق هندسي صاعد",
      role: "مسئول تطوير أعمال (عن بعد)",
      location: "عن بعد",
      requirements: "حديثي التخرج مرحب بهم",
      skills: ["التواصل واللغة الإنجليزية", "لينكد إن والأدوات الرقمية", "بناء العلاقات", "جلب العملاء", "تطوير الأعمال"],
      link: "https://forms.gle/JDR4Mf9aNegTEfUz9",
      deadline: "30 سبتمبر 2026"
    },
    {
      company: "تطوير الفرات (Alforat Development)",
      role: "ممثل خدمة عملاء",
      location: "الإسكندرية",
      requirements: "درجة البكالوريوس",
      experience: "خبرة سنتين أو أكثر",
      link: "https://forms.gle/JDR4Mf9aNegTEfUz9",
      deadline: "30 سبتمبر 2026"
    },
    {
      company: "تطوير الفرات (Alforat Development)",
      role: "محاسب أول",
      location: "الإسكندرية",
      requirements: "يفضل المعرفة بمعايير IFRS",
      experience: "خبرة 5-8 سنوات",
      link: "https://forms.gle/JDR4Mf9aNegTEfUz9",
      deadline: "30 سبتمبر 2026"
    },
    {
      company: "تطوير الفرات (Alforat Development)",
      role: "مدير مرافق - مجمع سكني",
      location: "الإسكندرية",
      requirements: "يفضل خلفية هندسية",
      experience: "خبرة 10-15 سنة",
      link: "https://forms.gle/JDR4Mf9aNegTEfUz9",
      deadline: "30 سبتمبر 2026"
    },
    {
      company: "تطوير الفرات (Alforat Development)",
      role: "رئيس قسم محاسبة التكاليف",
      location: "الإسكندرية",
      requirements: "يشترط شهادة CMA",
      experience: "خبرة 8 سنوات أو أكثر",
      link: "https://forms.gle/JDR4Mf9aNegTEfUz9",
      deadline: "30 سبتمبر 2026"
    }
  ]
};

const merchList = {
  en: [
    { item: "Colored Cup (Various Colors)", price: "400 EGP" },
    { item: "Golden Cup", price: "410 EGP" },
    { item: "Notebook", price: "200 EGP" },
    { item: "Fans", price: "120 EGP" },
    { item: "Sunshade", price: "144 EGP" },
    { item: "Charging Cable", price: "140 EGP" }
  ],
  ar: [
    { item: "كوب ملون (ألوان متعددة)", price: "400 جنيه" },
    { item: "كوب ذهبي", price: "410 جنيه" },
    { item: "دفتر ملاحظات (Notebook)", price: "200 جنيه" },
    { item: "مروحة يد", price: "120 جنيه" },
    { item: "شماسة سيارة", price: "144 جنيه" },
    { item: "وصلة شحن متعددة", price: "140 جنيه" }
  ]
};

const translations = {
  en: {
    badge: "Alumni Network",
    title1: "Your Journey",
    title2: "Doesn't End Here.",
    subtitle: "Welcome to the AASTMT Alumni Center. We empower our graduates to connect, grow, and succeed worldwide.",
    btnExplore: "Find Jobs",
    btnJoin: "Contact Us",
    cardPromo: "GET YOUR ALUMNI ID",
    cardPromoSub: "Unlock all services and benefits today.",
    btnPromo: "Get Started",
    services: [
      {
        title: 'Partnerships & Discounts',
        desc: 'Exclusive lifestyle offers and premium partner discounts for AASTMT Alumni.',
        icon: <Icons.Partnership />,
        className: 'span-8',
        href: 'https://drive.google.com/file/d/1Fhj8xMtDZbGUENL8Io0yCLhY3M4mnpwY/view'
      },
      {
        title: 'Syndicates',
        desc: 'Required documents, fees and procedures.',
        icon: <Icons.Syndicates />,
        className: 'span-4',
        action: 'syndicates'
      },
      {
        title: 'Certificate Equivalency',
        desc: 'From the Supreme Council of Universities.',
        icon: <Icons.Certificate />,
        className: 'span-4',
        action: 'equivalency'
      },
      {
        title: 'Trips & Offers',
        desc: 'Bespoke travel packages and special seasonal offers.',
        icon: <Icons.Trips />,
        className: 'span-8',
        action: 'trips'
      },
      {
        title: 'Career Opportunities',
        desc: 'Explore top-tier job openings, exclusive internships, and career resources.',
        icon: <Icons.Job />,
        className: 'span-6',
        action: 'jobs'
      },
      {
        title: 'Update Your Data',
        desc: 'Keep your information up to date.',
        icon: <Icons.Update />,
        className: 'span-6',
        action: 'update'
      },
      {
        title: 'AAST Merchandise',
        desc: 'Official collection. Carry the spirit, live the journey.',
        icon: <Icons.Merch />,
        className: 'span-8',
        action: 'merch'
      },
      {
        title: 'Upcoming Events',
        desc: 'Stay updated with our latest events and activities.',
        icon: <Icons.Events />,
        className: 'span-4',
        isSoon: true,
        action: 'events'
      }
    ]
  },
  ar: {
    badge: "شبكة الخريجين",
    title1: "رحلتك",
    title2: "لا تنتهي هنا.",
    subtitle: "مرحباً بكم في مركز خريجي الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري. نحن نمكن خريجينا من التواصل والنمو والنجاح في جميع أنحاء العالم.",
    btnExplore: "ابحث عن وظائف",
    btnJoin: "تواصل معنا",
    cardPromo: "احصل على بطاقة الخريج",
    cardPromoSub: "افتح جميع الخدمات والمزايا اليوم.",
    btnPromo: "ابدأ الآن",
    services: [
      {
        title: 'شراكات وخصومات',
        desc: 'عروض حصرية وخصومات مميزة لخريجي الأكاديمية.',
        icon: <Icons.Partnership />,
        className: 'span-8',
        href: 'https://drive.google.com/file/d/1Fhj8xMtDZbGUENL8Io0yCLhY3M4mnpwY/view'
      },
      {
        title: 'النقابات',
        desc: 'المستندات المطلوبة والرسوم والإجراءات.',
        icon: <Icons.Syndicates />,
        className: 'span-4',
        action: 'syndicates'
      },
      {
        title: 'معادلة الشهادات',
        desc: 'من المجلس الأعلى للجامعات.',
        icon: <Icons.Certificate />,
        className: 'span-4',
        action: 'equivalency'
      },
      {
        title: 'رحلات وعروض',
        desc: 'باقات سفر وعروض موسمية خاصة.',
        icon: <Icons.Trips />,
        className: 'span-8',
        action: 'trips'
      },
      {
        title: 'فرص عمل',
        desc: 'اكتشف أفضل الوظائف المتاحة وفرص التدريب المهني.',
        icon: <Icons.Job />,
        className: 'span-6',
        action: 'jobs'
      },
      {
        title: 'تحديث بياناتك',
        desc: 'حافظ على تحديث معلوماتك.',
        icon: <Icons.Update />,
        className: 'span-6',
        action: 'update'
      },
      {
        title: 'منتجات الأكاديمية',
        desc: 'المجموعة الرسمية. احمل الروح وعش الرحلة.',
        icon: <Icons.Merch />,
        className: 'span-8',
        action: 'merch'
      },
      {
        title: 'الفعاليات القادمة',
        desc: 'ابق على اطلاع بأحدث الفعاليات والأنشطة.',
        icon: <Icons.Events />,
        className: 'span-4',
        isSoon: true,
        action: 'events'
      }
    ]
  }
}

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [activeModalKey, setActiveModalKey] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const closeModal = () => {
    setActiveModalKey(null);
    setTimeout(() => setSelectedItem(null), 300);
  };

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const activeList = activeModalKey === 'syndicates' ? syndicatesList[lang] : activeModalKey === 'equivalency' ? equivalencyList[lang] : [];
  const modalTitle = activeModalKey === 'syndicates' ? (lang === 'ar' ? 'اختر النقابة' : 'Choose Your Syndicate') : (lang === 'ar' ? 'اختر نوع الاعتماد' : 'Choose Equivalency Type');
  const modalDesc = activeModalKey === 'syndicates'
    ? (lang === 'ar' ? 'اختر نقابتك أدناه لعرض المستندات والرسوم والإجراءات المطلوبة.' : 'Select your syndicate below to view required documents, fees, and procedures.')
    : (lang === 'ar' ? 'اختر الدرجة العلمية لعرض الأوراق المطلوبة للاعتماد.' : 'Select the degree to view required documents for equivalency.');

  return (
    <>
      <div className="mesh-bg"></div>
      <AnimatedDoodles />

      <main>
        {/* Symmetrical Centered Hero Section */}
        <section className="hero-section container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="heading-badge">{t.badge}</div>
          <h1 className="heading-xl">
            {t.title1} <br />
            <span className="heading-highlight">{t.title2}</span>
          </h1>
          <p className="subtitle-hero mx-auto">
            {t.subtitle}
          </p>
          <div className="hero-actions justify-center">
            <button onClick={() => setActiveModalKey('jobs')} className="cta-button" style={{ border: 'none' }}>{t.btnExplore}</button>
            <a href="/contact" className="cta-button cta-outline">{t.btnJoin}</a>
          </div>
        </section>

        {/* Section 2: Marquee Divider */}
        <section className="marquee-container" style={{ direction: 'ltr' }}>
          <div className="marquee-content">
            {lang === 'ar'
              ? "مركز خريجي الأكاديمية • خريج اليوم، قائد الغد • ابق على تواصل • مركز خريجي الأكاديمية • خريج اليوم، قائد الغد • ابق على تواصل • مركز خريجي الأكاديمية • خريج اليوم، قائد الغد • ابق على تواصل • مركز خريجي الأكاديمية • خريج اليوم، قائد الغد • ابق على تواصل • "
              : "AASTMT ALUMNI CENTER • TODAY'S GRADUATE, TOMORROW'S LEADER • STAY CONNECTED • AASTMT ALUMNI CENTER • TODAY'S GRADUATE, TOMORROW'S LEADER • STAY CONNECTED • AASTMT ALUMNI CENTER • TODAY'S GRADUATE, TOMORROW'S LEADER • STAY CONNECTED • AASTMT ALUMNI CENTER • TODAY'S GRADUATE, TOMORROW'S LEADER • STAY CONNECTED • "
            }
          </div>
        </section>

        {/* Section 3: Editorial Grid Services */}
        <section id="services" className="bento-section">
          <div className="container">
            <div className="brutal-grid">
              {t.services.map((service, idx) => (
                <a
                  href={service.href || `#`}
                  target={service.href ? "_blank" : undefined}
                  rel={service.href ? "noopener noreferrer" : undefined}
                  key={idx}
                  className={`bento-item ${service.className}`}
                  onClick={(e) => {
                    if (service.action) {
                      e.preventDefault();
                      setActiveModalKey(service.action);
                    }
                  }}
                >
                  <div className="icon-wrapper">
                    {service.icon}
                  </div>
                  <div className="card-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
                      <h3 className="card-title">{service.title}</h3>
                      {service.isSoon && (
                        <span style={{ background: 'var(--accent)', color: 'white', fontSize: '0.7rem', fontWeight: 800, padding: '4px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>
                          {lang === 'ar' ? 'قريباً' : 'SOON'}
                        </span>
                      )}
                    </div>
                    <p className="card-desc">{service.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Full-width Promo Banner */}
        <section className="promo-banner-section">
          <div className="container promo-banner-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h2>{t.cardPromo}</h2>
            <p>{t.cardPromoSub}</p>
            <a href="https://api.whatsapp.com/send/?phone=201114204219&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="cta-button cta-promo" style={{ marginTop: '8px' }}>
              {t.btnPromo}
            </a>
          </div>
        </section>
      </main>

      {/* Shared Popup Modal */}
      {activeModalKey && (
        <div className="modal-overlay" onClick={closeModal} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>

            {activeModalKey === 'events' ? (
              <div className="soon-details" style={{ animation: 'fadeIn 0.3s ease', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', textAlign: 'center', width: '100%' }}>
                <div style={{ animation: 'floatIcon 3s ease-in-out infinite', marginBottom: '32px', color: 'var(--accent)', background: 'rgba(26, 41, 92, 0.05)', padding: '24px', borderRadius: '50%' }}>
                  <Icons.Events />
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '16px' }}>
                  {lang === 'ar' ? 'قريباً جداً' : 'Coming Soon'}
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontWeight: 500, maxWidth: '400px', lineHeight: 1.6, margin: '0 auto' }}>
                  {lang === 'ar' 
                    ? 'نحن نعمل على تجهيز قائمة بأفضل الفعاليات القادمة. ابقوا متابعين!' 
                    : 'We are preparing an exciting lineup of upcoming events. Stay tuned!'}
                </p>
              </div>
            ) : activeModalKey === 'merch' ? (
              <div className="merch-details" style={{ animation: 'fadeIn 0.3s ease', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                  <div className="syn-logo" style={{ background: 'var(--accent)', color: 'white' }}><Icons.Merch /></div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>{lang === 'ar' ? 'منتجات الأكاديمية' : 'AAST Merchandise'}</h3>
                    <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{lang === 'ar' ? 'المجموعة الرسمية' : 'Official Collection'}</p>
                  </div>
                </div>

                <div style={{ padding: '24px', background: 'var(--bg-color)', borderRadius: '16px', border: 'var(--modern-border)', marginBottom: '24px' }}>
                  <p style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: 800, marginBottom: '16px' }}>
                    {lang === 'ar' ? 'احمل الفخر، وانضم إلى مجتمعنا ' : 'Carry the pride, join the community '}
                  </p>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '12px', fontWeight: 500 }}>
                    {lang === 'ar'
                      ? 'احصل على المجموعة الرسمية لمنتجات خريجي الأكاديمية الآن! من الأكواب العازلة الأنيقة ودفاتر الملاحظات الفاخرة إلى الميداليات المخصصة والمراوح — عبّر عن فخرك واحمل روح الأكاديمية أينما ذهبت.'
                      : 'Get your hands on the official AASTMT Alumni Merchandise Collection now! From stylish insulated tumblers and premium notebooks to custom keychains and fans — express your pride and carry the AAST spirit wherever you go. '}
                  </p>
                  <p style={{ color: 'var(--accent)', fontSize: '0.95rem', fontWeight: 700 }}>
                    {lang === 'ar' ? 'الكميات محدودة — احصل على منتجاتك قبل نفاذها!' : "Limited quantities available — grab yours before they're gone!"}
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                  {merchList[lang].map((item, i) => (
                    <div key={i} style={{ padding: '16px', background: 'white', borderRadius: '12px', border: 'var(--modern-border)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.4 }}>{item.item}</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>{item.price}</div>
                    </div>
                  ))}
                </div>

                <div style={{ padding: '24px', background: 'var(--bg-color)', borderRadius: '16px', border: 'var(--modern-border)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <p style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
                    {lang === 'ar' ? 'للطلب أو الاستفسار، تواصل معنا عبر الواتساب:' : 'To order or inquire, contact us on WhatsApp:'}
                  </p>
                  <a href="https://api.whatsapp.com/send/?phone=201114204219&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '16px 32px', background: '#25D366', color: 'white', fontWeight: 800, fontSize: '1.1rem', borderRadius: '12px', textDecoration: 'none', transition: '0.2s', boxShadow: '0 4px 16px rgba(37, 211, 102, 0.2)' }}>
                    <Icons.WhatsApp /> {lang === 'ar' ? 'اطلب عبر الواتساب' : 'Order on WhatsApp'}
                  </a>
                </div>
              </div>
            ) : activeModalKey === 'update' ? (
              <div className="update-details" style={{ animation: 'fadeIn 0.3s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                  <div className="syn-logo" style={{ background: 'var(--accent)', color: 'white' }}><Icons.Update /></div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>{lang === 'ar' ? 'تحديث بياناتك' : 'Update Your Data'}</h3>
                    <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{lang === 'ar' ? 'قاعدة البيانات الرسمية للخريجين' : 'Official Alumni Database'}</p>
                  </div>
                </div>

                <div style={{ padding: '24px', background: 'var(--bg-color)', borderRadius: '16px', border: 'var(--modern-border)', marginBottom: '24px' }}>
                  <p style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '16px', fontWeight: 500 }}>
                    {lang === 'ar'
                      ? 'كجزء من التزامنا ببناء شبكة خريجين قوية ومترابطة، يقوم مركز خريجي الأكاديمية بتحديث قاعدة البيانات الرسمية للخريجين.'
                      : 'As part of our commitment to building a strong and connected alumni network, the AASTMT Alumni Center is updating its official alumni database.'}
                  </p>
                  <p style={{ color: 'var(--primary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '20px', fontWeight: 700 }}>
                    {lang === 'ar'
                      ? 'يرجى قضاء 2-3 دقائق لإكمال هذا النموذج بمعلومات الاتصال والمعلومات المهنية الحالية الخاصة بك.'
                      : 'Please take 2–3 minutes to complete this form with your current contact and professional information.'}
                  </p>

                  <h4 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '12px' }}>
                    {lang === 'ar' ? 'يساعد تحديث بياناتك على ضمان تلقيك:' : 'Keeping your details up to date helps ensure that you receive:'}
                  </h4>
                  <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>✓</span>
                      <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{lang === 'ar' ? 'دعوات الفعاليات الحصرية' : 'Exclusive event invitations'}</span>
                    </li>
                    <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>✓</span>
                      <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{lang === 'ar' ? 'فرص العمل والتواصل' : 'Career and networking opportunities'}</span>
                    </li>
                    <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>✓</span>
                      <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{lang === 'ar' ? 'أحدث أخبار وتحديثات الأكاديمية' : 'The latest AASTMT news and updates'}</span>
                    </li>
                  </ul>

                  <div style={{ padding: '16px', background: 'white', borderRadius: '12px', border: 'var(--modern-border)' }}>
                    <h4 style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--primary)', marginBottom: '6px' }}>
                      {lang === 'ar' ? 'خصوصيتك تهمنا' : 'Your Privacy Matters'}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, fontWeight: 500 }}>
                      {lang === 'ar'
                        ? 'سيتم التعامل مع معلوماتك بأمان واستخدامها فقط للاتصالات الرسمية لمركز خريجي الأكاديمية.'
                        : 'Your information will be handled securely and used solely for official AASTMT Alumni Center communications.'}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '12px' }}>
                  <p style={{ color: 'var(--text-main)', fontWeight: 700, marginBottom: '20px' }}>
                    {lang === 'ar' ? 'شكراً لبقائك على تواصل مع مركز خريجي الأكاديمية.' : 'Thank you for staying connected with the AASTMT Alumni Center.'}
                  </p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfaPYhLSP-sbAnqj9LcRTrBP-06jZreSg9ium49br4K8s41bA/viewform" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', width: '100%', padding: '16px 24px', background: 'var(--primary)', color: 'white', fontWeight: 800, fontSize: '1.1rem', borderRadius: '12px', textDecoration: 'none', transition: '0.2s', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                    {lang === 'ar' ? 'تحديث البيانات الآن' : 'Update Data Now'}
                  </a>
                </div>
              </div>
            ) : activeModalKey === 'jobs' ? (
              <div className="jobs-details" style={{ animation: 'fadeIn 0.3s ease', width: '100%' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
                  {lang === 'ar' ? 'فرص عمل' : 'Career Opportunities'}
                </h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                  {lang === 'ar' ? 'اكتشف أحدث الوظائف المتاحة لخريجي الأكاديمية وقم بالتسجيل الآن.' : 'Explore the latest job openings available for our alumni and apply now.'}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '60vh', overflowY: 'auto', paddingRight: '8px' }}>
                  {jobsList[lang].map((job, i) => (
                    <div key={i} style={{ padding: '24px', background: 'var(--bg-color)', borderRadius: '16px', border: 'var(--modern-border)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>{job.role}</h4>
                        <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1rem' }}>{job.company}</p>
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {job.location && <span style={{ padding: '6px 12px', background: 'white', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', border: 'var(--modern-border)' }}>{lang === 'ar' ? 'الموقع' : 'Location'}: {job.location}</span>}
                        {job.experience && <span style={{ padding: '6px 12px', background: 'white', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', border: 'var(--modern-border)' }}>{lang === 'ar' ? 'الخبرة' : 'Exp'}: {job.experience}</span>}
                        {job.requirements && <span style={{ padding: '6px 12px', background: 'white', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', border: 'var(--modern-border)' }}>{lang === 'ar' ? 'المتطلبات' : 'Req'}: {job.requirements}</span>}
                      </div>

                      {job.skills && (
                        <div>
                          <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>{lang === 'ar' ? 'المهارات الأساسية:' : 'Skills:'}</p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {job.skills.map((skill, j) => (
                              <span key={j} style={{ padding: '4px 10px', background: 'var(--accent)', color: 'white', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700 }}>{skill}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div style={{ marginTop: '8px', paddingTop: '20px', borderTop: 'var(--modern-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                          {lang === 'ar' ? 'آخر موعد للتقديم:' : 'Deadline:'} <span style={{ color: 'var(--text-main)' }}>{job.deadline}</span>
                        </div>
                        <a href={job.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '12px 24px', background: 'var(--primary)', color: 'white', fontWeight: 700, borderRadius: '12px', textDecoration: 'none', transition: '0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                          {lang === 'ar' ? 'سجل الآن' : 'Apply Now'}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : activeModalKey === 'trips' ? (
              <div className="trips-details" style={{ animation: 'fadeIn 0.3s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                  <div className="syn-logo"><Icons.Trips /></div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>{lang === 'ar' ? 'رحلات وعروض' : 'Trips & Offers'}</h3>
                    <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{lang === 'ar' ? 'رحلة أمستردام وبروكسل' : 'Amsterdam and Brussels Trip'}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                  <div style={{ padding: '24px', background: 'var(--bg-color)', borderRadius: '16px', border: 'var(--modern-border)' }}>
                    <h4 style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '20px' }}>
                      {lang === 'ar' ? 'رحلة أمستردام وبروكسل' : 'Trip to Amsterdam and Brussels'}
                    </h4>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div style={{ padding: '16px', background: 'white', borderRadius: '12px', border: 'var(--modern-border)' }}>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 600 }}>{lang === 'ar' ? 'تاريخ الرحلة' : 'Date'}</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>25 {lang === 'ar' ? 'يناير' : 'Jan'}</div>
                      </div>
                      <div style={{ padding: '16px', background: 'white', borderRadius: '12px', border: 'var(--modern-border)' }}>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 600 }}>{lang === 'ar' ? 'المدة' : 'Duration'}</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>07 {lang === 'ar' ? 'أيام' : 'Days'}</div>
                      </div>
                    </div>

                    <div style={{ marginTop: '16px', padding: '16px', background: 'white', borderRadius: '12px', border: 'var(--modern-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 600 }}>{lang === 'ar' ? 'سعر الرحلة' : 'Price'}</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>900$ <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>+ 27,000 EGP</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '24px', background: 'var(--bg-color)', borderRadius: '16px', border: 'var(--modern-border)' }}>
                  <p style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
                    {lang === 'ar' ? 'لمزيد من التفاصيل والحجز، يرجى التواصل على:' : 'For more details & reservations, please contact:'}
                  </p>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <a href="tel:01024982244" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--primary)', textDecoration: 'none', background: 'white', padding: '12px 20px', borderRadius: '12px', border: 'var(--modern-border)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                      <Icons.Phone /> 01024982244 - 03/4204219
                    </a>
                    <a href="https://wa.me/201024982244" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'white', textDecoration: 'none', background: '#25D366', padding: '12px 20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(37, 211, 102, 0.2)' }}>
                      <Icons.WhatsApp /> WhatsApp (201024982244)
                    </a>
                  </div>
                </div>
              </div>
            ) : selectedItem ? (
              <div className="syndicate-details" style={{ animation: 'fadeIn 0.3s ease' }}>
                <button onClick={() => setSelectedItem(null)} style={{ background: 'var(--bg-color)', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 700, marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1rem', padding: '10px 16px', borderRadius: '12px', transition: '0.2s' }}>
                  {lang === 'ar' ? <><Icons.ArrowRight /> العودة للقائمة</> : <><Icons.ArrowLeft /> Back to List</>}
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                  <div className="syn-logo">{selectedItem.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>{selectedItem.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{selectedItem.desc}</p>
                  </div>
                </div>

                <h4 style={{ fontWeight: 700, marginBottom: '16px', color: 'var(--text-main)', fontSize: '1.2rem' }}>
                  {lang === 'ar' ? 'الأوراق المطلوبة:' : 'Required Documents:'}
                </h4>

                <ul style={{ listStylePosition: 'inside', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, fontWeight: 500 }}>
                  {selectedItem.details.map((detail, i) => (
                    <li key={i} style={{ lineHeight: 1.6 }}>{detail}</li>
                  ))}
                </ul>

                <div style={{ marginTop: '32px', padding: '24px', background: 'var(--bg-color)', borderRadius: '16px', border: 'var(--modern-border)' }}>
                  <p style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
                    {lang === 'ar' ? (activeModalKey === 'equivalency' ? 'لمزيد من المعلومات ومعرفة الوقت المتوقع لاتمام الاجراءات يرجى التواصل على:' : 'لمزيد من المعلومات ومتابعة اجراءات القيد التواصل على:') : 'For more information and to follow up on procedures, contact:'}
                  </p>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <a href="tel:01114204219" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--primary)', textDecoration: 'none', background: 'white', padding: '12px 20px', borderRadius: '12px', border: 'var(--modern-border)', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                      <Icons.Phone /> 01114204219 - 034204219
                    </a>
                    <a href="https://wa.me/201114204219" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'white', textDecoration: 'none', background: '#25D366', padding: '12px 20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(37, 211, 102, 0.2)' }}>
                      <Icons.WhatsApp /> WhatsApp (201114204219)
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ animation: 'fadeIn 0.3s ease' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {modalTitle}
                </h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '10px' }}>
                  {modalDesc}
                </p>

                <div className="syndicate-grid">
                  {activeList.map((item, i) => (
                    <div onClick={() => setSelectedItem(item)} key={i} className="syndicate-card" style={{ cursor: 'pointer' }}>
                      <div className="syn-logo">{item.icon}</div>
                      <div className="syn-text">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  )
}
