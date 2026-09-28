export const tripsData = [
  {
    id: 'amsterdam-brussels',
    image: '/assets/trip1.jpeg',
    category: 'international',
    badge: {
      ar: 'رحلة دولية',
      en: 'International Tour'
    },
    title: {
      ar: 'رحلة أمستردام وبروكسل',
      en: 'Amsterdam and Brussels Trip'
    },
    destination: {
      ar: 'هولندا وبلجيكا (أمستردام وبروكسل)',
      en: 'Netherlands & Belgium (Amsterdam & Brussels)'
    },
    date: {
      ar: '25 يناير',
      en: '25 Jan'
    },
    duration: {
      ar: '07 أيام',
      en: '07 Days'
    },
    priceSummary: {
      ar: '900$ + 27,000 ج.م',
      en: '900$ + 27,000 EGP'
    },
    priceDetail: {
      currency: 'USD & EGP',
      breakdown: [
        {
          label: { ar: 'السعر بالدولار', en: 'USD Component' },
          value: '900$'
        },
        {
          label: { ar: 'السعر بالجنيه المصري', en: 'EGP Component' },
          value: '27,000 EGP'
        }
      ]
    },
    hotel: {
      ar: 'فنادق مختارة 4 نجوم مميزة في أمستردام وبروكسل',
      en: 'Selected 4-Star Premium Hotels in Amsterdam & Brussels'
    },
    flight: {
      ar: 'طيران دولي مباشر / منتظم مع وزن أمتعة مناسب',
      en: 'Direct / Scheduled International Flight with standard baggage allowance'
    },
    description: {
      ar: 'رحلة أوروبية استثنائية تأخذكم في جولة لا تُنسى بين عاصمتين من أجمل العواصم الأوروبية. استمتع بسحر القنوات المائية والمتاحف العريقة في أمستردام، وعراقة العمارة التاريخية وساحة غراند بلاس الشهيرة في بروكسل، ضمن تنظيم وإشراف كامل من رابطة خريجي الأكاديمية.',
      en: 'An exceptional European journey taking you on an unforgettable tour between two of Europe’s most vibrant capitals. Enjoy the scenic canals and historic museums of Amsterdam, alongside the majestic Grand Place architecture in Brussels, all organized with care by the AASTMT Alumni Center.'
    },
    inclusions: {
      ar: [
        'إقامة فندقية فاخرة طوال مدة الرحلة (7 أيام)',
        'برنامج سياحي متكامل وزيارات لأهم المعالم السياحية والتاريخية',
        'مرافقة وإشراف كامل من ممثلي رابطة الخريجين لضمان راحة الجميع',
        'أوقات حرة للتسوق والتجول واستكشاف أشهى المأكولات والمقاهي الأوروبية'
      ],
      en: [
        'Luxury hotel stay for the entire 7-day trip',
        'Comprehensive sightseeing itinerary covering iconic cultural landmarks',
        'Full group coordination and guidance by Alumni Center representatives',
        'Free leisure time for independent shopping, walking tours, and dining'
      ]
    },
    notes: {
      ar: [
        'يشترط وجود جواز سفر سارٍ لمدة لا تقل عن 6 أشهر من تاريخ السفر',
        'الحصول على تأشيرة شنغن سارية مسؤولية العميل أو بمساعدة مكتب السفر المعتمد',
        'تراعى موافقة وتصاريح السفر لمن هم في سن التجنيد',
        'الأولوية بأسبقية الحجز وسداد الدفعة المقدمة نظراً لمحدودية المقاعد'
      ],
      en: [
        'A valid passport with at least 6 months validity from departure date is required',
        'Valid Schengen Visa is required prior to travel',
        'Military travel authorization is mandatory for individuals of conscription age',
        'Bookings are prioritized on a first-come, first-served basis due to seat quotas'
      ]
    },
    bookingInfo: {
      phones: ['01024982244', '03/4204219'],
      whatsapp: '201024982244',
      address: {
        ar: '29 شارع فيكتور عمانويل، سموحة / سيدي جابر، الإسكندرية',
        en: '29 Victor Emmanuel III, Ezbet Saad, Sidi Gaber, Alexandria'
      }
    }
  },
  {
    id: 'umrah-10-days',
    image: '/assets/trip2.jpeg',
    category: 'umrah',
    badge: {
      ar: 'رحلة عمرة',
      en: 'Umrah Trip'
    },
    title: {
      ar: 'رحلة عمرة المولد النبوي الشريف (10 أيام / 9 ليالي)',
      en: "Prophet's Birthday Umrah Trip (10 Days / 9 Nights)"
    },
    destination: {
      ar: 'مكة المكرمة والمدينة المنورة',
      en: 'Makkah & Madinah'
    },
    date: {
      ar: '12 أكتوبر - 26 أكتوبر',
      en: '12 Oct - 26 Oct'
    },
    duration: {
      ar: '10 أيام / 9 ليالي (4 ليالي المدينة - 5 ليالي مكة)',
      en: '10 Days / 9 Nights (4N Madinah - 5N Makkah)'
    },
    priceSummary: {
      ar: 'يبدأ من 60,500 ج.م',
      en: 'Starting from 60,500 EGP'
    },
    flight: {
      ar: 'طيران سعودي أو مصر للطيران (القاهرة : المدينة - جدة : القاهرة)',
      en: 'Saudi Airlines or EgyptAir (Cairo : Madinah - Jeddah : Cairo)'
    },
    ticketBase: {
      ar: 'تم احتساب سعر التذكرة على 18,000 جنيه',
      en: 'Flight ticket factored at 18,000 EGP'
    },
    packages: [
      {
        madinah: { ar: 'موفنبيك أنوار (بالإفطار)', en: 'Mövenpick Anwar (Breakfast)' },
        makkah: { ar: 'موفنبيك هاجر (بالإفطار)', en: 'Mövenpick Hajar (Breakfast)' },
        double: '93,000 EGP',
        triple: '82,000 EGP',
        quad: '76,000 EGP'
      },
      {
        madinah: { ar: 'موفنبيك أنوار البرج الخلفي', en: 'Mövenpick Anwar (Rear Tower)' },
        makkah: { ar: 'الصفوة (بالإفطار)', en: 'Al Safwah (Breakfast)' },
        double: '85,450 EGP',
        triple: '73,500 EGP',
        quad: '68,000 EGP'
      },
      {
        madinah: { ar: 'الريتز', en: 'The Ritz' },
        makkah: { ar: 'الشهداء (بالإفطار)', en: 'Al Shohada (Breakfast)' },
        double: '75,000 EGP',
        triple: '66,000 EGP',
        quad: '60,500 EGP'
      }
    ],
    inclusions: {
      ar: [
        'تقدم الشركة هدايا قيمة لكل معتمر (شنطة ظهر - شنطة كتف - كيس حذاء)',
        'يرافق المجموعة مشرف ديني وإداري على درجة عالية من الكفاءة',
        'الانتقالات داخل المملكة بأحدث الأتوبيسات المكيفة والفاخرة',
        'تشمل الرحلات القطار السريع (قطار الحرمين) من مكة المكرمة إلى المدينة المنورة'
      ],
      en: [
        'Valuable gifts for each pilgrim (backpack, shoulder bag, shoe pouch)',
        'Experienced religious scholar and administrative manager accompany the group',
        'Internal transfers within KSA in modern, luxury air-conditioned coaches',
        'Haramain High-Speed Railway included between Makkah and Madinah'
      ]
    },
    notes: {
      ar: [
        'تم احتساب سعر التذكرة على 18000 جنيهاً ويضاف أي زيادة طارئة تلقائياً على السعر المعلن حتى وإن تم سداد كامل المبلغ',
        'يتحمل العميل أي زيادة طارئة تلقائياً في سعر الريال وتضاف على البرنامج تلقائياً',
        'تضاف أي رسوم تفرض من قبل السلطات المصرية والسعودية على السعر المعلن',
        'يراعى من هم في سن التجنيد استخراج تصريح سفر من إدارة التجنيد التابع لها',
        'السعر أعلاه لا يشمل أي إطلالة وفي حالة طلب أي إطلالة حرم أو كعبة يتم إضافة القيمة بالليلة على السعر المحدد'
      ],
      en: [
        'Flight ticket benchmark is 18,000 EGP; emergency fare additions are applied automatically even after full settlement',
        'Clients absorb any sudden currency exchange rate hikes in Saudi Riyal',
        'Any government taxes or regulatory charges enacted in Egypt or Saudi Arabia are added to the price',
        'Males of conscription age must secure departure clearance from the military draft authority',
        'Rates do not include Haram/Kaaba views; panoramic view supplements available upon request per night'
      ]
    },
    bookingInfo: {
      phones: ['01024982244', '03/4204219'],
      whatsapp: '201024982244',
      address: {
        ar: 'مقر رابطة الخريجين: 29 ميدان فيكتور عمانويل - مصر الجديدة، القاهرة / سموحة، الإسكندرية',
        en: 'Alumni Center: 29 Victor Emmanuel Square, Heliopolis Cairo / Smouha Alexandria'
      }
    }
  },
  {
    id: 'umrah-7-days',
    image: '/assets/trip3.jpeg',
    category: 'umrah',
    badge: {
      ar: 'رحلة عمرة - مطار برج العرب',
      en: 'Umrah Trip - Borg El Arab'
    },
    title: {
      ar: 'رحلة عمرة المولد النبوي الشريف (7 أيام / 6 ليالي - مطار برج العرب)',
      en: "Prophet's Birthday Umrah Trip (7 Days / 6 Nights - Borg El Arab)"
    },
    destination: {
      ar: 'مكة المكرمة والمدينة المنورة (مطار برج العرب)',
      en: 'Makkah & Madinah (Borg El Arab Airport)'
    },
    date: {
      ar: '25 أكتوبر',
      en: '25 Oct'
    },
    duration: {
      ar: '7 أيام / 6 ليالي (3 ليالي المدينة - 3 ليالي مكة)',
      en: '7 Days / 6 Nights (3N Madinah - 3N Makkah)'
    },
    priceSummary: {
      ar: 'يبدأ من 56,450 ج.م',
      en: 'Starting from 56,450 EGP'
    },
    flight: {
      ar: 'طيران سعودي أو مصر للطيران (برج العرب : المدينة - جدة : برج العرب)',
      en: 'Saudi Airlines or EgyptAir (Borg El Arab : Madinah - Jeddah : Borg El Arab)'
    },
    ticketBase: {
      ar: 'تم احتساب سعر التذكرة على 21,000 جنيه',
      en: 'Flight ticket factored at 21,000 EGP'
    },
    packages: [
      {
        madinah: { ar: 'موفنيبك أنوار', en: 'Mövenpick Anwar' },
        makkah: { ar: 'موفنيبك هاجر', en: 'Mövenpick Hajar' },
        double: '81,450 EGP',
        triple: '72,000 EGP',
        quad: '66,450 EGP'
      },
      {
        madinah: { ar: 'موفنيبك أنوار البرج الخلفي', en: 'Mövenpick Anwar (Rear Tower)' },
        makkah: { ar: 'الصفوة', en: 'Al Safwah' },
        double: '72,500 EGP',
        triple: '64,500 EGP',
        quad: '61,000 EGP'
      },
      {
        madinah: { ar: 'الريتز', en: 'The Ritz' },
        makkah: { ar: 'الشهداء', en: 'Al Shohada' },
        double: '66,000 EGP',
        triple: '60,000 EGP',
        quad: '56,450 EGP'
      }
    ],
    inclusions: {
      ar: [
        'هدايا قيمة لكل معتمر (شنطة ظهر - شنطة كتف - كيس حذاء)',
        'إشراف ديني وإداري عالي المستوى طوال الرحلة',
        'أحدث وسائل النقل والأوتوبيسات السياحية المكيفة',
        'تذاكر القطار السريع بين مكة والمدينة لتوفير أقصى درجات الراحة'
      ],
      en: [
        'Complimentary gift pack for every pilgrim (backpack, shoulder bag, shoe pouch)',
        'Religious scholar & dedicated tour leaders throughout the journey',
        'Latest luxury air-conditioned coaches within KSA',
        'High-speed Haramain Train tickets between Makkah and Madinah'
      ]
    },
    notes: {
      ar: [
        'تم احتساب سعر التذكرة على 21,000 جنيهاً ويضاف أي زيادة طارئة تلقائياً',
        'يتحمل العميل أي زيادة طارئة في سعر صرف الريال وتضاف تلقائياً',
        'تضاف أي رسوم تفرض من قبل السلطات المصرية والسعودية على السعر المعلن',
        'يراعى استخراج تصريح السفر من التجنيد لمن هم في سن الخدمة العسكرية',
        'الأسعار لا تشمل إطلالة الحرم أو الكعبة وتتاح الإطلالات بمقابل إضافي'
      ],
      en: [
        'Ticket baseline is 21,000 EGP; official emergency fare changes are applied automatically',
        'Currency fluctuations in SAR are absorbed by the client as needed',
        'Government-mandated fees or charges are added as announced',
        'Military travel permit required for conscription-eligible pilgrims',
        'Rates exclude Haram/Kaaba direct room views; view upgrade available on request'
      ]
    },
    bookingInfo: {
      phones: ['01024982244', '03/4204219'],
      whatsapp: '201024982244',
      address: {
        ar: 'مقر رابطة الخريجين: 29 ميدان فيكتور عمانويل - برج الخلود - سموحة، الإسكندرية',
        en: 'Alumni Center: 29 Victor Emmanuel Square - Kholoud Tower - Smouha, Alexandria'
      }
    }
  },
  {
    id: 'umrah-11-days',
    image: '/assets/trip4.jpeg',
    category: 'umrah',
    badge: {
      ar: 'رحلة عمرة',
      en: 'Umrah Trip'
    },
    title: {
      ar: 'رحلة عمرة المولد النبوي الشريف (11 يوم / 10 ليالي)',
      en: "Prophet's Birthday Umrah Trip (11 Days / 10 Nights)"
    },
    destination: {
      ar: 'مكة المكرمة والمدينة المنورة',
      en: 'Makkah & Madinah'
    },
    date: {
      ar: '14 أكتوبر - 21 أكتوبر - 28 أكتوبر',
      en: '14 Oct - 21 Oct - 28 Oct'
    },
    duration: {
      ar: '11 يوم / 10 ليالي (5 ليالي المدينة - 5 ليالي مكة)',
      en: '11 Days / 10 Nights (5N Madinah - 5N Makkah)'
    },
    priceSummary: {
      ar: 'يبدأ من 64,000 ج.م',
      en: 'Starting from 64,000 EGP'
    },
    flight: {
      ar: 'طيران سعودي أو مصر للطيران (القاهرة : المدينة - جدة : القاهرة)',
      en: 'Saudi Airlines or EgyptAir (Cairo : Madinah - Jeddah : Cairo)'
    },
    ticketBase: {
      ar: 'تم احتساب سعر التذكرة على 19,500 جنيه',
      en: 'Flight ticket factored at 19,500 EGP'
    },
    packages: [
      {
        madinah: { ar: 'موفينبيك أنوار', en: 'Mövenpick Anwar' },
        makkah: { ar: 'موفينبيك هاجر', en: 'Mövenpick Hajar' },
        double: '105,250 EGP',
        triple: '89,750 EGP',
        quad: '82,000 EGP'
      },
      {
        madinah: { ar: 'موفينبيك أنوار البرج الخلفي', en: 'Mövenpick Anwar (Rear Tower)' },
        makkah: { ar: 'الصفوة', en: 'Al Safwah' },
        double: '91,450 EGP',
        triple: '79,250 EGP',
        quad: '71,750 EGP'
      },
      {
        madinah: { ar: 'ريتز المدينة', en: 'The Ritz Madinah' },
        makkah: { ar: 'الشهداء', en: 'Al Shohada' },
        double: '82,000 EGP',
        triple: '71,000 EGP',
        quad: '64,000 EGP'
      }
    ],
    inclusions: {
      ar: [
        'تقديم هدايا قيمة لكل معتمر (شنطة ظهر - شنطة كتف - كيس حذاء)',
        'يرافق المجموعة مشرف ديني وإداري على درجة عالية من الكفاءة',
        'الانتقالات داخل المملكة بأحدث الأتوبيسات المكيفة الفاخرة',
        'تشمل الرحلات القطار السريع من مكة المكرمة إلى المدينة المنورة'
      ],
      en: [
        'Gifts pack for all pilgrims (backpack, shoulder bag, shoe pouch)',
        'Accompanied by qualified religious and administrative supervisors',
        'Ground transportation in deluxe AC tourist coaches',
        'High-speed Haramain Railway between Makkah and Madinah'
      ]
    },
    notes: {
      ar: [
        'تم احتساب سعر التذكرة على 19,500 جنيهاً ويضاف أي زيادة طارئة تلقائياً',
        'يتحمل العميل أي زيادة طارئة في سعر الريال السعودي',
        'تضاف أي رسوم تفرض من قبل السلطات المصرية والسعودية على السعر المعلن',
        'يراعى استخراج تصريح سفر من إدارة التجنيد للملزمين بالخدمة العسكرية',
        'السعر أعلاه لا يشمل إطلالة الحرم أو الكعبة وتضاف عند الطلب'
      ],
      en: [
        'Ticket base is 19,500 EGP; changes in airfare will be reflected automatically',
        'Currency rate variances in SAR are borne by the participant',
        'Subject to any official tax/regulatory fee updates',
        'Military travel clearance required for conscription-eligible applicants',
        'Room view upgrades subject to availability and supplementary fees'
      ]
    },
    bookingInfo: {
      phones: ['01024982244', '03/4204219'],
      whatsapp: '201024982244',
      address: {
        ar: 'مقر رابطة الخريجين: 29 ميدان فيكتور عمانويل - برج الخلود - سموحة، الإسكندرية',
        en: 'Alumni Center: 29 Victor Emmanuel Square - Kholoud Tower - Smouha, Alexandria'
      }
    }
  },
  {
    id: 'umrah-15-days',
    image: '/assets/trip5.jpeg',
    category: 'umrah',
    badge: {
      ar: 'رحلة عمرة طويلة',
      en: 'Long Umrah Trip'
    },
    title: {
      ar: 'رحلة عمرة المولد النبوي الشريف (15 يوم / 14 ليلة)',
      en: "Prophet's Birthday Umrah Trip (15 Days / 14 Nights)"
    },
    destination: {
      ar: 'مكة المكرمة والمدينة المنورة',
      en: 'Makkah & Madinah'
    },
    date: {
      ar: '12 أكتوبر',
      en: '12 Oct'
    },
    duration: {
      ar: '15 يوم / 14 ليلة (5 ليالي المدينة - 9 ليالي مكة)',
      en: '15 Days / 14 Nights (5N Madinah - 9N Makkah)'
    },
    priceSummary: {
      ar: 'يبدأ من 62,000 ج.م',
      en: 'Starting from 62,000 EGP'
    },
    flight: {
      ar: 'طيران سعودي أو مصر للطيران (القاهرة : المدينة - جدة : القاهرة)',
      en: 'Saudi Airlines or EgyptAir (Cairo : Madinah - Jeddah : Cairo)'
    },
    ticketBase: {
      ar: 'تم احتساب سعر التذكرة على 19,000 جنيه',
      en: 'Flight ticket factored at 19,000 EGP'
    },
    packages: [
      {
        madinah: { ar: 'موفنبيك أنوار البرج الخلفي', en: 'Mövenpick Anwar (Rear Tower)' },
        makkah: { ar: 'الماسة', en: 'Al Masa' },
        double: '88,500 EGP',
        triple: '74,500 EGP',
        quad: '67,000 EGP'
      },
      {
        madinah: { ar: 'موفنبيك أنوار البرج الخلفي', en: 'Mövenpick Anwar (Rear Tower)' },
        makkah: { ar: 'سجى مكة', en: 'Saja Al Makkah' },
        double: '75,000 EGP',
        triple: '65,250 EGP',
        quad: '62,000 EGP'
      }
    ],
    inclusions: {
      ar: [
        'إقامة ممتدة 9 ليالي في مكة المكرمة و5 ليالي في المدينة المنورة',
        'هدايا تذكارية قيمة لكل معتمر (شنطة ظهر - شنطة كتف - كيس حذاء)',
        'إشراف كامل من مشرف ديني وإداري معتمد',
        'الانتقالات بأحدث الحافلات والقطار السريع بين مكة والمدينة'
      ],
      en: [
        'Extended stay: 9 nights in Makkah & 5 nights in Madinah',
        'Pilgrim gift sets (backpack, shoulder bag, shoe pouch)',
        'Full guidance by recognized religious and administrative leaders',
        'Ground luxury bus transfers and High-speed Haramain Train'
      ]
    },
    notes: {
      ar: [
        'سعر التذكرة محتسب على 19,000 جنيه ويضاف أي زيادة طارئة تلقائياً',
        'يتحمل العميل أي زيادة طارئة في سعر صرف الريال وتضاف للبرنامج',
        'تضاف أي رسوم حكومية أو تنظيمية طارئة على السعر',
        'استخراج تصريح السفر من التجنيد لمن هم في سن التجنيد',
        'الأسعار لا تشمل إطلالة الحرم أو الكعبة وتضاف القيمة عند الطلب'
      ],
      en: [
        'Ticket baseline 19,000 EGP; airline price adjustments apply automatically',
        'Currency rate shifts in SAR apply automatically to the total price',
        'Any newly enforced state fees or taxes will be added',
        'Conscription travel permit required for eligible male participants',
        'Haram or Kaaba view requests are subject to nightly surcharge'
      ]
    },
    bookingInfo: {
      phones: ['01024982244', '03/4204219'],
      whatsapp: '201024982244',
      address: {
        ar: 'مقر رابطة الخريجين: 29 ميدان فيكتور عمانويل - برج الخلود - سموحة، الإسكندرية',
        en: 'Alumni Center: 29 Victor Emmanuel Square - Kholoud Tower - Smouha, Alexandria'
      }
    }
  },
  {
    id: 'umrah-8-days',
    image: '/assets/trip6.jpeg',
    category: 'umrah',
    badge: {
      ar: 'رحلة عمرة',
      en: 'Umrah Trip'
    },
    title: {
      ar: 'رحلة عمرة المولد النبوي الشريف (8 أيام / 7 ليالي)',
      en: "Prophet's Birthday Umrah Trip (8 Days / 7 Nights)"
    },
    destination: {
      ar: 'مكة المكرمة والمدينة المنورة',
      en: 'Makkah & Madinah'
    },
    date: {
      ar: '13 أكتوبر - 20 أكتوبر - 27 أكتوبر',
      en: '13 Oct - 20 Oct - 27 Oct'
    },
    duration: {
      ar: '8 أيام / 7 ليالي (4 ليالي المدينة - 3 ليالي مكة)',
      en: '8 Days / 7 Nights (4N Madinah - 3N Makkah)'
    },
    priceSummary: {
      ar: 'يبدأ من 57,450 ج.م',
      en: 'Starting from 57,450 EGP'
    },
    flight: {
      ar: 'طيران سعودي أو مصر للطيران (القاهرة : المدينة - جدة : القاهرة)',
      en: 'Saudi Airlines or EgyptAir (Cairo : Madinah - Jeddah : Cairo)'
    },
    ticketBase: {
      ar: 'تم احتساب سعر التذكرة على 19,500 جنيه',
      en: 'Flight ticket factored at 19,500 EGP'
    },
    packages: [
      {
        madinah: { ar: 'موفبيك أنوار', en: 'Mövenpick Anwar' },
        makkah: { ar: 'موفبيك هاجر', en: 'Mövenpick Hajar' },
        double: '86,000 EGP',
        triple: '75,000 EGP',
        quad: '68,450 EGP'
      },
      {
        madinah: { ar: 'موفبيك أنوار البرج الخلفي', en: 'Mövenpick Anwar (Rear Tower)' },
        makkah: { ar: 'الصفوة', en: 'Al Safwah' },
        double: '75,000 EGP',
        triple: '66,000 EGP',
        quad: '61,450 EGP'
      },
      {
        madinah: { ar: 'الريتز', en: 'The Ritz' },
        makkah: { ar: 'الشهداء', en: 'Al Shohada' },
        double: '68,450 EGP',
        triple: '61,000 EGP',
        quad: '57,450 EGP'
      }
    ],
    inclusions: {
      ar: [
        'هدايا قيمة لكل معتمر (شنطة ظهر - شنطة كتف - كيس حذاء)',
        'يرافق المجموعة مشرف ديني وإداري على درجة عالية من الكفاءة',
        'الانتقالات داخل المملكة بأحدث الأتوبيسات المكيفة والفاخرة',
        'تشمل الرحلات القطار السريع من مكة المكرمة إلى المدينة المنورة'
      ],
      en: [
        'Gift pack for every pilgrim (backpack, shoulder bag, shoe pouch)',
        'Supervised by an expert religious guide and administrative lead',
        'Modern, luxurious air-conditioned bus transfers in KSA',
        'Includes Haramain High-Speed Train between Makkah and Madinah'
      ]
    },
    notes: {
      ar: [
        'تم احتساب سعر التذكرة على 19,500 جنيهاً ويضاف أي زيادة طارئة تلقائياً',
        'يتحمل العميل أي زيادة طارئة في سعر صرف الريال وتضاف للبرنامج',
        'تضاف أي رسوم من قبل السلطات المصرية والسعودية على السعر المعلن',
        'يراعى استخراج تصريح سفر من إدارة التجنيد للملزمين بالسفر',
        'السعر أعلاه لا يشمل إطلالة الحرم أو الكعبة وتضاف قيمتها بالليلة'
      ],
      en: [
        'Ticket baseline is 19,500 EGP; changes in airfare will be added accordingly',
        'Client covers any emergency rate changes in Saudi Riyal',
        'Any Egyptian or Saudi official fees will be applied to the bill',
        'Military travel authorization required for applicable participants',
        'Haram or Kaaba view rooms are available for an extra nightly fee'
      ]
    },
    bookingInfo: {
      phones: ['01024982244', '03/4204219'],
      whatsapp: '201024982244',
      address: {
        ar: 'مقر رابطة الخريجين: 29 ميدان فيكتور عمانويل - برج الخلود - سموحة، الإسكندرية',
        en: 'Alumni Center: 29 Victor Emmanuel Square - Kholoud Tower - Smouha, Alexandria'
      }
    }
  },
  {
    id: 'port-said',
    image: '/assets/trip7.jpeg',
    category: 'domestic',
    badge: {
      ar: 'رحلة داخلية - عطلة أسبوعية',
      en: 'Domestic Long Weekend'
    },
    title: {
      ar: 'إجازة عطلة نهاية الأسبوع الطويلة - رحلة بورسعيد',
      en: 'Long Weekend Vacation - Port Said, Egypt'
    },
    destination: {
      ar: 'بورسعيد، جمهورية مصر العربية',
      en: 'Port Said, Egypt'
    },
    date: {
      ar: '8-9 أكتوبر 2026',
      en: '8-9 OCT 2026'
    },
    duration: {
      ar: 'يومان / ليلة واحدة',
      en: '2 Days | 1 Night'
    },
    hotel: {
      ar: 'فندق جراند أوتيل بورسعيد (Grand Hotel)',
      en: 'Grand Hotel Port Said'
    },
    priceSummary: {
      ar: 'يبدأ من 1,950 ج.م',
      en: 'Starting from 1,950 EGP'
    },
    rates: [
      {
        category: { ar: 'عضو الأكاديمية (غرفة ثنائية / ثلاثية)', en: 'Member (Double/Triple Room)' },
        price: '2,200 EGP'
      },
      {
        category: { ar: 'مرافق (غرفة ثنائية / ثلاثية)', en: 'Companion (Double/Triple Room)' },
        price: '2,600 EGP'
      },
      {
        category: { ar: 'طفل (من 6 إلى 12 سنة)', en: 'Child (6–12 years)' },
        price: '1,950 EGP'
      }
    ],
    description: {
      ar: 'استمتع بإجازة عطلة نهاية أسبوع مميزة في مدينة بورسعيد التاريخية والساحلية الساحرة، مع إقامة مريحة في فندق جراند أوتيل وإطلالات بحرية رائعة، ببرنامج مخصص لجمع شمل خريجي الأكاديمية وعائلاتهم.',
      en: 'Spend a refreshing long weekend in the historic coastal city of Port Said, with premium lodging at the Grand Hotel, scenic sea vistas, and a warm gathering for AASTMT alumni and their families.'
    },
    inclusions: {
      ar: [
        'إقامة كاملة ليلة واحدة / يومان في فندق جراند أوتيل بورسعيد',
        'غرف فاخرة ومريحة مجهزة بكافة سبل الراحة',
        'إشراف وتنظيم كامل من إدارة رابطة الخريجين لضمان تجربة ممتعة',
        'أوقات حرة للاستمتاع بشاطئ بورسعيد والتسوق في المنطقة الحرة وسوق السمك الشهير'
      ],
      en: [
        'Full accommodation for 2 Days / 1 Night at Grand Hotel Port Said',
        'Deluxe and comfortable rooms equipped with all modern amenities',
        'Full organization and supervision by the AASTMT Alumni Center team',
        'Free leisure time for the famous fish market, free zone shopping, and seafront'
      ]
    },
    notes: {
      ar: [
        'الأسعار تشمل الإقامة وفقاً لنوع الغرفة المذكورة بالبرنامج',
        'الأطفال دون سن 6 سنوات مجاناً بدون سرير إضافي (بحد أقصى طفلين في الغرفة)',
        'تأكيد الحجز بأسبقية السداد نظراً لمحدودية الغرف المتاحة',
        'إحضار بطاقة الرقم القومي وبطاقة عضوية الخريجين للاستفادة من خصم العضو'
      ],
      en: [
        'Rates include room accommodation per the specified room category',
        'Children under 6 years stay free without extra bed (max 2 children per room)',
        'Reservation confirmation is on first-come first-served basis due to limited room allotments',
        'National ID and Alumni membership card required for member discounts'
      ]
    },
    bookingInfo: {
      phones: ['01024982244', '03 4204219'],
      whatsapp: '201024982244',
      address: {
        ar: 'مقر رابطة الخريجين: 29 ميدان فيكتور عمانويل، سموحة، الإسكندرية',
        en: 'Alumni Center: 29 Victor Emmanuel Square, Smouha, Alexandria'
      }
    }
  }
];

export function getTripById(id) {
  return tripsData.find(trip => trip.id === id);
}
