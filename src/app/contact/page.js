'use client'
import React from 'react'
import { useLanguage } from '@/components/LanguageContext'
import AnimatedDoodles from '@/components/AnimatedDoodles'

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-10 6L2 7"/></svg>
)
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)
const MobileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="3"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
)
const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
)
const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
)

const translations = {
  en: {
    title: "Get in Touch.",
    subtitle: "We'd love to hear from you. Reach out to the branch closest to you, or through any of our official channels, and we will get back to you as soon as possible.",
    branchesTitle: "Our Branches",
    email: "Email",
    mobile: "Mobile",
    landline: "Landline",
    social: "Social & WhatsApp",
    facebook: "Facebook Page",
    instagram: "Instagram Page",
    whatsapp: "Message on WhatsApp",
    channel: "Official WhatsApp Channel",
    staffChannel: "Staff WhatsApp Channel",
    alexandria: "Alexandria Branch",
    cairo: "Cairo Branch",
    aswan: "Aswan Branch",
  },
  ar: {
    title: "تواصل معنا.",
    subtitle: "يسعدنا الاستماع إليك. تواصل مع أقرب فرع إليك، أو عبر أي من قنواتنا الرسمية، وسنرد عليك في أقرب وقت ممكن.",
    branchesTitle: "فروعنا",
    email: "البريد الإلكتروني",
    mobile: "الموبايل",
    landline: "التليفون الأرضي",
    social: "الشبكات الاجتماعية",
    facebook: "صفحة فيسبوك",
    instagram: "إنستجرام",
    whatsapp: "راسلنا على واتساب",
    channel: "القناة الرسمية على واتساب",
    staffChannel: "قناة العاملين على واتساب",
    alexandria: "فرع الإسكندرية",
    cairo: "فرع القاهرة",
    aswan: "فرع أسوان",
  }
}

// Branch data: numbers are shown nicely, but "tel" is the clean version used for tap-to-call
const branches = [
  {
    key: 'alexandria',
    email: 'alumni@aast.edu',
    phones: [
      { type: 'mobile', display: '01114204219', tel: '+201114204219' },
      { type: 'landline', display: '03/4204219', tel: '+2034204219' },
    ],
  },
  {
    key: 'cairo',
    email: 'Alumni-cairo@aast.edu',
    phones: [
      { type: 'mobile', display: '01140035657', tel: '+201140035657' },
      { type: 'landline', display: '02 2268 0680', tel: '+20222680680' },
    ],
  },
  {
    key: 'aswan',
    phones: [
      { type: 'mobile', display: '011 53698214', tel: '+201153698214' },
    ],
  },
]

const ContactRow = ({ href, icon, label, value, extraClass = '' }) => (
  <a href={href} className={`branch-row ${extraClass}`}>
    <span className="branch-row-icon">{icon}</span>
    <span className="branch-row-text">
      <span className="branch-row-label">{label}</span>
      <span className="branch-row-value" dir="ltr">{value}</span>
    </span>
  </a>
)

export default function Contact() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const isAr = lang === 'ar'

  return (
    <>
      <div className="mesh-bg"></div>
      <AnimatedDoodles />

      <style>{`
        .branch-card {
          position: relative;
          padding: 1.5rem 1.5rem 1.5rem 1.75rem;
          border-radius: 20px;
          overflow: hidden;
        }
        .branch-card::before {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          inset-inline-start: 0;
          width: 5px;
          background: linear-gradient(180deg, #2bb5b8, #148a8f);
        }
        .branch-name {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-main);
          margin: 0 0 1rem 0;
        }
        .branch-rows {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }
        .branch-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: 14px;
          background: rgba(128, 128, 128, 0.08);
          border: 1px solid rgba(128, 128, 128, 0.15);
          text-decoration: none;
          color: inherit;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
          min-width: 0;
        }
        .branch-row.is-email,
        .branch-row:only-child {
          grid-column: 1 / -1;
        }
        .branch-row:hover {
          background: rgba(43, 181, 184, 0.12);
          border-color: rgba(43, 181, 184, 0.6);
          transform: translateY(-2px);
        }
        .branch-row:focus-visible {
          outline: 2px solid #2bb5b8;
          outline-offset: 2px;
        }
        .branch-row-icon {
          flex-shrink: 0;
          width: 38px; height: 38px;
          display: grid; place-items: center;
          border-radius: 12px;
          background: rgba(43, 181, 184, 0.16);
          color: #148a8f;
        }
        .branch-row-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .branch-row-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .branch-row-value {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: start;
        }
        @media (max-width: 560px) {
          .branch-rows { grid-template-columns: 1fr; }
          .branch-row-value { font-size: 1rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          .branch-row { transition: none; }
          .branch-row:hover { transform: none; }
        }
      `}</style>

      <main className="container" style={{ position: 'relative', zIndex: 10, minHeight: '90vh', display: 'flex', alignItems: 'center', padding: '6rem 24px' }}>

        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start', justifyContent: 'space-between' }}>

          {/* Left Text Side */}
          <div style={{ flex: '1 1 400px', textAlign: isAr ? 'right' : 'left' }}>
            <h1 className="heading-xl">{t.title}</h1>
            <p className="subtitle-hero" style={{ margin: isAr ? '0 0 0 auto' : '0 auto 0 0' }}>
              {t.subtitle}
            </p>

            <h2 style={{ marginTop: '3rem', marginBottom: '1.25rem', fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)' }}>
              {t.branchesTitle}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {branches.map((b) => (
                <div key={b.key} className="bento-item branch-card">
                  <h3 className="branch-name">{t[b.key]}</h3>
                  <div className="branch-rows">
                    {b.email && (
                      <ContactRow
                        href={`mailto:${b.email}`}
                        extraClass="is-email"
                        icon={<MailIcon />}
                        label={t.email}
                        value={b.email}
                      />
                    )}
                    {b.phones.map((p) => (
                      <ContactRow
                        key={p.tel}
                        href={`tel:${p.tel}`}
                        icon={p.type === 'mobile' ? <MobileIcon /> : <PhoneIcon />}
                        label={t[p.type]}
                        value={p.display}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Glass Card Side */}
          <div style={{ flex: '1 1 450px', display: 'flex', justifyContent: isAr ? 'flex-start' : 'flex-end' }}>
             <div className="bento-item" style={{ width: '100%', maxWidth: '450px', padding: '3rem 2rem' }}>

                <h3 className="card-title" style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>{t.social}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <a href="https://wa.me/201114204219" target="_blank" rel="noopener noreferrer" className="cta-outline" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 24px', borderRadius: '16px', textDecoration: 'none', justifyContent: 'flex-start' }}>
                    <WhatsAppIcon/>
                    <span style={{ fontWeight: 700 }}>{t.whatsapp}</span>
                  </a>

                  <a href="https://whatsapp.com/channel/0029VbCuCJdId7nT8giD5C3a" target="_blank" rel="noopener noreferrer" className="cta-outline" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 24px', borderRadius: '16px', textDecoration: 'none', justifyContent: 'flex-start' }}>
                    <WhatsAppIcon/>
                    <span style={{ fontWeight: 700 }}>{t.channel}</span>
                  </a>

                  <a href="https://whatsapp.com/channel/0029VbDKS6j9mrGlescN8l2S" target="_blank" rel="noopener noreferrer" className="cta-outline" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 24px', borderRadius: '16px', textDecoration: 'none', justifyContent: 'flex-start' }}>
                    <WhatsAppIcon/>
                    <span style={{ fontWeight: 700 }}>{t.staffChannel}</span>
                  </a>

                  <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                    <a href="https://www.facebook.com/share/1DbXQgsx6Z" target="_blank" rel="noopener noreferrer" className="cta-outline" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px', borderRadius: '16px' }}>
                      <FacebookIcon/>
                    </a>
                    <a href="https://www.instagram.com/aast_alumni_center?stkn=MXdubGlsZ2pxMjl2dg==" target="_blank" rel="noopener noreferrer" className="cta-outline" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px', borderRadius: '16px' }}>
                      <InstagramIcon/>
                    </a>
                  </div>
                </div>

             </div>
          </div>

        </div>
      </main>
    </>
  )
}