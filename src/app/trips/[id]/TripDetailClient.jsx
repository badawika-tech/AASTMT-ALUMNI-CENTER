'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/components/LanguageContext'
import AnimatedDoodles from '@/components/AnimatedDoodles'

const Icons = {
  Back: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
  ),
  Calendar: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
  ),
  Clock: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
  ),
  Tag: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>
  ),
  Plane: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
  ),
  Hotel: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"/><path d="M8 7h.01"/><path d="M16 7h.01"/><path d="M12 7h.01"/><path d="M12 11h.01"/><path d="M16 11h.01"/><path d="M8 11h.01"/></svg>
  ),
  Check: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
  ),
  Alert: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
  ),
  Phone: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
  ),
  WhatsApp: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
  ),
  MapPin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  Zoom: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
  )
}

export default function TripDetailClient({ trip, allTrips }) {
  const { lang } = useLanguage()
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const otherTrips = allTrips.filter(t => t.id !== trip.id).slice(0, 3)

  const whatsappMessage = lang === 'ar'
    ? `السلام عليكم، أود الاستفسار وحجز ${trip.title.ar} (المعلن على موقع رابطة الخريجين)`
    : `Hello, I would like to inquire about and book ${trip.title.en} (as advertised on the AASTMT Alumni website)`

  return (
    <div className="trip-detail-page">
      <div className="mesh-bg"></div>
      <AnimatedDoodles />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Breadcrumb Navigation */}
        <nav className="trip-breadcrumb">
          <Link href="/">
            {lang === 'ar' ? 'الرئيسية' : 'Home'}
          </Link>
          <span>/</span>
          <Link href="/trips">
            {lang === 'ar' ? 'رحلات وعروض' : 'Trips & Offers'}
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>
            {trip.title[lang]}
          </span>
        </nav>

        {/* Back Button */}
        <div style={{ marginBottom: '20px' }}>
          <Link
            href="/trips"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 700,
              color: 'var(--primary)',
              textDecoration: 'none',
              background: 'white',
              padding: '10px 18px',
              borderRadius: '12px',
              border: 'var(--modern-border)',
              boxShadow: 'var(--modern-shadow)'
            }}
          >
            <span style={{ transform: lang === 'ar' ? 'rotate(180deg)' : 'none', display: 'inline-flex' }}>
              <Icons.Back />
            </span>
            {lang === 'ar' ? 'العودة لجميع الرحلات' : 'Back to All Trips'}
          </Link>
        </div>

        {/* Header Hero Banner */}
        <section className="trip-detail-hero">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span className={`trip-badge ${trip.category}`}>
              {trip.badge[lang]}
            </span>
            <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Icons.MapPin /> {trip.destination[lang]}
            </span>
          </div>

          <h1>{trip.title[lang]}</h1>

          {/* Quick Stats Grid */}
          <div className="trip-detail-stats-bar">
            <div className="trip-stat-card">
              <div className="label">{lang === 'ar' ? 'تاريخ الرحلة' : 'Trip Date'}</div>
              <div className="value">{trip.date[lang]}</div>
            </div>
            <div className="trip-stat-card">
              <div className="label">{lang === 'ar' ? 'المدة الزمنية' : 'Duration'}</div>
              <div className="value">{trip.duration[lang]}</div>
            </div>
            <div className="trip-stat-card">
              <div className="label">{lang === 'ar' ? 'السعر' : 'Price'}</div>
              <div className="value" style={{ fontSize: '1.25rem' }}>{trip.priceSummary[lang]}</div>
            </div>
          </div>
        </section>

        {/* 2-Column Responsive Body */}
        <div className="trip-detail-layout">
          {/* Column 1: Poster Image & Sticky Contact Card */}
          <aside className="trip-poster-box">
            <div
              className="trip-poster-img-wrap"
              onClick={() => setLightboxOpen(true)}
              title={lang === 'ar' ? 'اضغط لعرض البوستر بحجم كامل' : 'Click to view full poster'}
            >
              <img src={trip.image} alt={trip.title[lang]} />
              <div className="trip-poster-zoom-hint">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Icons.Zoom /> {lang === 'ar' ? 'تكبير البوستر' : 'Enlarge Poster'}
                </span>
              </div>
            </div>

            {/* Quick Action Widget under Poster */}
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href={`https://wa.me/${trip.bookingInfo.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="trip-btn-whatsapp"
                style={{ justifyContent: 'center', padding: '14px', fontSize: '1rem' }}
              >
                <Icons.WhatsApp /> {lang === 'ar' ? 'احجز مباشرة عبر واتساب' : 'Book via WhatsApp'}
              </a>

              <a
                href={`tel:${trip.bookingInfo.phones[0]}`}
                className="trip-btn-phone"
                style={{ justifyContent: 'center', padding: '13px' }}
              >
                <Icons.Phone /> {lang === 'ar' ? `اتصل بنا: ${trip.bookingInfo.phones[0]}` : `Call: ${trip.bookingInfo.phones[0]}`}
              </a>
            </div>

            <div style={{ marginTop: '16px', padding: '14px', background: 'var(--bg-color)', borderRadius: '14px', border: 'var(--modern-border)', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '4px' }}>
                {lang === 'ar' ? 'مقر رابطة الخريجين:' : 'Alumni Center Office:'}
              </strong>
              {trip.bookingInfo.address[lang]}
            </div>
          </aside>

          {/* Column 2: Detailed Information Sections */}
          <div className="trip-detail-sections">
            {/* Overview Section */}
            {trip.description && (
              <section className="trip-content-card">
                <h2>{lang === 'ar' ? 'نبذة عن الرحلة' : 'Trip Overview'}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                  {trip.description[lang]}
                </p>
              </section>
            )}

            {/* Pricing Breakdown: Packages (Umrah) */}
            {trip.packages && (
              <section className="trip-content-card">
                <h2>
                  <Icons.Tag />
                  {lang === 'ar' ? 'تفاصيل باقات الفنادق والأسعار' : 'Hotel Packages & Room Rates'}
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
                  {lang === 'ar'
                    ? 'الأسعار موضحة بالجنيه المصري للفرد الواحد حسب نوع وتجهيز الغرفة:'
                    : 'Rates are in Egyptian Pounds (EGP) per person according to room occupancy:'}
                </p>

                <div className="trip-table-wrapper">
                  <table className="trip-table">
                    <thead>
                      <tr>
                        <th>{lang === 'ar' ? 'فندق المدينة المنورة' : 'Madinah Hotel'}</th>
                        <th>{lang === 'ar' ? 'فندق مكة المكرمة' : 'Makkah Hotel'}</th>
                        <th>{lang === 'ar' ? 'الثنائي' : 'Double'}</th>
                        <th>{lang === 'ar' ? 'الثلاثي' : 'Triple'}</th>
                        <th>{lang === 'ar' ? 'الرباعي' : 'Quad'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trip.packages.map((pkg, idx) => (
                        <tr key={idx}>
                          <td style={{ fontWeight: 700 }}>{pkg.madinah[lang]}</td>
                          <td style={{ fontWeight: 700 }}>{pkg.makkah[lang]}</td>
                          <td style={{ color: 'var(--primary)', fontWeight: 800 }}>{pkg.double}</td>
                          <td style={{ color: 'var(--primary)', fontWeight: 800 }}>{pkg.triple}</td>
                          <td style={{ color: 'var(--primary)', fontWeight: 800 }}>{pkg.quad}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {trip.ticketBase && (
                  <div style={{ marginTop: '14px', fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    * {trip.ticketBase[lang]}
                  </div>
                )}
              </section>
            )}

            {/* Pricing Breakdown: Rates (Port Said) */}
            {trip.rates && (
              <section className="trip-content-card">
                <h2>
                  <Icons.Tag />
                  {lang === 'ar' ? 'أسعار الاشتراك في الرحلة' : 'Subscription & Room Rates'}
                </h2>
                <div className="trip-table-wrapper">
                  <table className="trip-table">
                    <thead>
                      <tr>
                        <th>{lang === 'ar' ? 'الفئة' : 'Category'}</th>
                        <th>{lang === 'ar' ? 'سعر الفرد' : 'Rate Per Person'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trip.rates.map((rate, idx) => (
                        <tr key={idx}>
                          <td style={{ fontWeight: 700 }}>{rate.category[lang]}</td>
                          <td style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.1rem' }}>{rate.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Pricing Breakdown: Dual Currency (Amsterdam) */}
            {trip.priceDetail && (
              <section className="trip-content-card">
                <h2>
                  <Icons.Tag />
                  {lang === 'ar' ? 'تفاصيل السعر وتوزيع العملات' : 'Price Structure'}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  {trip.priceDetail.breakdown.map((item, idx) => (
                    <div key={idx} style={{ padding: '20px', background: 'var(--bg-color)', borderRadius: '16px', border: 'var(--modern-border)' }}>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '6px' }}>
                        {item.label[lang]}
                      </div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)' }}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Flight & Transport Details */}
            {trip.flight && (
              <section className="trip-content-card">
                <h2>
                  <Icons.Plane />
                  {lang === 'ar' ? 'بيانات الطيران والانتقالات' : 'Flight & Transportation'}
                </h2>
                <div style={{ padding: '18px 22px', background: 'var(--bg-color)', borderRadius: '16px', border: 'var(--modern-border)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1.05rem', marginBottom: '8px' }}>
                    {trip.flight[lang]}
                  </div>
                  {trip.category === 'umrah' && (
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                      {lang === 'ar'
                        ? 'تشمل الرحلة الانتقالات داخل المملكة العربية السعودية بأحدث الأتوبيسات المكيفة الفاخرة، بالإضافة إلى تذاكر القطار السريع (قطار الحرمين) بين مكة المكرمة والمدينة المنورة.'
                        : 'Trip includes luxury air-conditioned coaches within KSA, along with Haramain High-Speed Train tickets between Makkah and Madinah.'}
                    </p>
                  )}
                </div>
              </section>
            )}

            {/* Inclusions & Features */}
            {trip.inclusions && (
              <section className="trip-content-card">
                <h2>
                  <Icons.Check />
                  {lang === 'ar' ? 'مميزات وخدمات الرحلة' : 'Included Features & Perks'}
                </h2>
                <ul className="trip-check-list">
                  {trip.inclusions[lang].map((inc, idx) => (
                    <li key={idx}>
                      <Icons.Check />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Important Notes & Guidelines */}
            {trip.notes && (
              <section className="trip-content-card">
                <h2>
                  <Icons.Alert />
                  {lang === 'ar' ? 'ملاحظات هامة وشروط السفر' : 'Important Terms & Conditions'}
                </h2>
                <ul className="trip-check-list trip-warning-list">
                  {trip.notes[lang].map((note, idx) => (
                    <li key={idx}>
                      <Icons.Alert />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* How to Book & Reservation Guide */}
            <section className="trip-content-card" style={{ borderColor: 'rgba(50, 152, 166, 0.3)', background: 'linear-gradient(to bottom, #ffffff, #fcfdfe)' }}>
              <h2>
                <Icons.Phone />
                {lang === 'ar' ? 'كيفية الحجز والتسجيل' : 'How to Book & Reserve'}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '16px' }}>
                {lang === 'ar'
                  ? 'اتبع الخطوات البسيطة التالية لتأكيد حجز مقعدك في الرحلة بكل سهولة:'
                  : 'Follow these simple steps to secure your booking comfortably:'}
              </p>

              <div className="booking-steps-box">
                <div className="booking-step-item">
                  <div className="booking-step-num">1</div>
                  <h4>{lang === 'ar' ? 'الاستفسار واختيار الغرفة' : 'Inquire & Select'}</h4>
                  <p>
                    {lang === 'ar'
                      ? 'تواصل معنا عبر واتساب أو الهاتف لمعرفة المتاح واختيار الفندق ونوع الغرفة المناسبة.'
                      : 'Reach out via WhatsApp or phone to check live availability and select room category.'}
                  </p>
                </div>

                <div className="booking-step-item">
                  <div className="booking-step-num">2</div>
                  <h4>{lang === 'ar' ? 'تجهيز المستندات المطلوبة' : 'Prepare Documents'}</h4>
                  <p>
                    {lang === 'ar'
                      ? 'جواز السفر ساري الصلاحية (أو بطاقة الرقم القومي)، تصريح السفر إن وجد، وبطاقة الخريج.'
                      : 'Valid passport (or National ID), military travel permit if applicable, and alumni ID.'}
                  </p>
                </div>

                <div className="booking-step-item">
                  <div className="booking-step-num">3</div>
                  <h4>{lang === 'ar' ? 'سداد الدفعة والتأكيد' : 'Confirm & Payment'}</h4>
                  <p>
                    {lang === 'ar'
                      ? 'سداد رسوم الحجز في مقر رابطة الخريجين أو عبر القنوات البنكية المعتمدة لاستلام إيصال الحجز.'
                      : 'Complete deposit payment at the Alumni Center office or approved banking channels.'}
                  </p>
                </div>
              </div>

              {/* Direct Booking Actions */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href={`https://wa.me/${trip.bookingInfo.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trip-btn-whatsapp"
                  style={{ padding: '14px 26px', fontSize: '1rem' }}
                >
                  <Icons.WhatsApp /> {lang === 'ar' ? 'تواصل للحجز عبر واتساب' : 'Reserve on WhatsApp'}
                </a>

                {trip.bookingInfo.phones.map((phone, idx) => (
                  <a key={idx} href={`tel:${phone}`} className="trip-btn-phone" style={{ padding: '14px 22px' }}>
                    <Icons.Phone /> {phone}
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Other Trips Showcase */}
        {otherTrips.length > 0 && (
          <section style={{ marginTop: '80px', paddingTop: '40px', borderTop: 'var(--modern-border)' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '24px', textAlign: 'center' }}>
              {lang === 'ar' ? 'رحلات أخرى قد تناسبك' : 'Other Trips You Might Like'}
            </h2>
            <div className="trips-cards-grid">
              {otherTrips.map(ot => (
                <div key={ot.id} className="trip-card-item">
                  <div className="trip-card-image-wrap" style={{ height: '200px' }}>
                    <img src={ot.image} alt={ot.title[lang]} loading="lazy" />
                  </div>
                  <div className="trip-card-content">
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px' }}>{ot.title[lang]}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>{ot.date[lang]} - {ot.duration[lang]}</p>
                    <div style={{ marginTop: 'auto' }}>
                      <Link href={`/trips/${ot.id}`} className="trip-btn-details" style={{ width: '100%', padding: '10px' }}>
                        {lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Lightbox Modal for Full Resolution Poster */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close poster"
            >
              &times;
            </button>
            <img src={trip.image} alt={trip.title[lang]} />
          </div>
        </div>
      )}
    </div>
  )
}
