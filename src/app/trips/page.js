'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/components/LanguageContext'
import AnimatedDoodles from '@/components/AnimatedDoodles'
import { tripsData } from '@/data/tripsData'

const Icons = {
  Calendar: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
  ),
  Clock: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
  ),
  Arrow: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
  ),
  WhatsApp: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
  ),
  Phone: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
  )
}

export default function TripsPage() {
  const { lang } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredTrips = selectedCategory === 'all'
    ? tripsData
    : tripsData.filter(trip => trip.category === selectedCategory)

  const filterOptions = [
    { id: 'all', label: lang === 'ar' ? 'جميع الرحلات' : 'All Trips' },
    { id: 'umrah', label: lang === 'ar' ? 'رحلات العمرة' : 'Umrah Trips' },
    { id: 'international', label: lang === 'ar' ? 'رحلات دولية' : 'International' },
    { id: 'domestic', label: lang === 'ar' ? 'رحلات داخلية' : 'Domestic Weekend' },
  ]

  return (
    <div className="trips-page">
      <div className="mesh-bg"></div>
      <AnimatedDoodles />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Page Hero */}
        <section className="trips-page-hero">
          <div className="trip-badge" style={{ marginBottom: '16px' }}>
            {lang === 'ar' ? 'عروض وباقات رابطة الخريجين' : 'AASTMT Alumni Travel Packages'}
          </div>
          <h1>{lang === 'ar' ? 'رحلات وعروض متميزة' : 'Curated Trips & Exclusive Offers'}</h1>
          <p>
            {lang === 'ar'
              ? 'استمتع بأفضل البرامج السياحية، رحلات العمرة، والعطلات الموسمية المصممة بعناية لتناسب خريجي الأكاديمية العربية وعائلاتهم بأفضل الأسعار وأرقى الخدمات.'
              : 'Explore bespoke travel itineraries, spiritual Umrah packages, and relaxing getaways tailored exclusively for AASTMT alumni and their families.'}
          </p>

          {/* Filters */}
          <div className="trips-filters-wrapper">
            {filterOptions.map(option => (
              <button
                key={option.id}
                onClick={() => setSelectedCategory(option.id)}
                className={`trips-filter-btn ${selectedCategory === option.id ? 'active' : ''}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </section>

        {/* Trips Grid */}
        <div className="trips-cards-grid">
          {filteredTrips.map(trip => (
            <article key={trip.id} className="trip-card-item">
              <div className="trip-card-image-wrap">
                <img
                  src={trip.image}
                  alt={trip.title[lang]}
                  loading="lazy"
                />
                <div style={{ position: 'absolute', top: '16px', right: lang === 'ar' ? '16px' : 'auto', left: lang === 'en' ? '16px' : 'auto' }}>
                  <span className={`trip-badge ${trip.category}`}>
                    {trip.badge[lang]}
                  </span>
                </div>
              </div>

              <div className="trip-card-content">
                <h3>{trip.title[lang]}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px' }}>
                  {trip.destination[lang]}
                </p>

                <div className="trip-card-meta">
                  <div className="trip-meta-item">
                    <span className="trip-meta-label">
                      {lang === 'ar' ? 'التاريخ' : 'Date'}
                    </span>
                    <span className="trip-meta-value">
                      {trip.date[lang]}
                    </span>
                  </div>
                  <div className="trip-meta-item">
                    <span className="trip-meta-label">
                      {lang === 'ar' ? 'المدة' : 'Duration'}
                    </span>
                    <span className="trip-meta-value">
                      {trip.duration[lang]}
                    </span>
                  </div>
                </div>

                <div style={{ margin: '8px 0 20px', padding: '12px 16px', background: 'var(--bg-color)', borderRadius: '12px', border: 'var(--modern-border)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>
                    {lang === 'ar' ? 'السعر' : 'Price'}
                  </span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>
                    {trip.priceSummary[lang]}
                  </span>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Link
                    href={`/trips/${trip.id}`}
                    className="trip-btn-details"
                    style={{ flexGrow: 1 }}
                  >
                    {lang === 'ar' ? 'تفاصيل الرحلة' : 'Trip Details'}
                    <span style={{ transform: lang === 'ar' ? 'rotate(180deg)' : 'none', display: 'inline-flex' }}>
                      <Icons.Arrow />
                    </span>
                  </Link>

                  <a
                    href={`https://wa.me/${trip.bookingInfo.whatsapp}?text=${encodeURIComponent(lang === 'ar' ? `مرحباً، أود الاستفسار عن ${trip.title.ar}` : `Hello, I would like to inquire about ${trip.title.en}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trip-btn-whatsapp"
                    style={{ padding: '12px 14px' }}
                    title={lang === 'ar' ? 'واتساب' : 'WhatsApp'}
                  >
                    <Icons.WhatsApp />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Global Assistance Card */}
        <div style={{ marginTop: '60px', padding: '36px', background: 'white', borderRadius: '24px', border: 'var(--modern-border)', boxShadow: 'var(--modern-shadow)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
            {lang === 'ar' ? 'هل لديك استفسار أو ترغب في حجز خاص؟' : 'Have questions or need custom group bookings?'}
          </h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 24px', fontSize: '0.95rem' }}>
            {lang === 'ar'
              ? 'فريق رابطة الخريجين متواجد دائماً للرد على كافة أسئلتكم ومساعدتكم في اختيار البرامج المناسبة.'
              : 'Our Alumni Center travel coordinators are always available to help you choose the best trip options.'}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="tel:01024982244" className="trip-btn-phone">
              <Icons.Phone /> 01024982244 - 03/4204219
            </a>
            <a href="https://wa.me/201024982244" target="_blank" rel="noopener noreferrer" className="trip-btn-whatsapp">
              <Icons.WhatsApp /> WhatsApp (201024982244)
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
