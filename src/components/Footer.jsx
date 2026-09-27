'use client'
import React from 'react'
import Link from 'next/link'
import { useLanguage } from './LanguageContext'

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
)

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
)

export default function Footer() {
  const { lang } = useLanguage()

  const t = {
    en: {
      desc: "Connecting graduates and empowering futures. Stay in touch with your alma mater.",
      slogan: "Today's Graduate, Tomorrow's Leader",
      quickLinks: "Quick Links",
      home: "Home",
      services: "Services",
      contactUs: "Contact Us",
      channel: "Official Channel",
      staffChannel: "Staff Channel",
      rights: "© 2026 AASTMT Alumni Center. All Rights Reserved."
    },
    ar: {
      desc: "نربط الخريجين ونمكن المستقبل. ابق على تواصل مع جامعتك واكتشف الفرص الحصرية.",
      slogan: "خريج اليوم، قائد الغد",
      quickLinks: "روابط سريعة",
      home: "الرئيسية",
      services: "الخدمات",
      contactUs: "اتصل بنا",
      channel: "القناة الرسمية",
      staffChannel: "قناة العاملين",
      rights: "© 2026 مركز خريجي الأكاديمية العربية. جميع الحقوق محفوظة."
    }
  }[lang]

  return (
    <footer style={styles.footer} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container">
        <div style={styles.container}>
          {/* Column 1: Brand & Desc */}
          <div style={styles.column}>
            <Link href="/" style={styles.logo}>
              AAST<span>AC</span>
            </Link>
            <div style={{ marginBottom: '8px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '4px', letterSpacing: '0.5px' }}>
                {lang === 'ar' ? 'مركز خريجي الأكاديمية' : 'AASTMT ALUMNI CENTER'}
              </h3>
              <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent)', fontStyle: 'italic' }}>
                {t.slogan}
              </p>
            </div>
            <p style={styles.text}>{t.desc}</p>
          </div>

          {/* Column 2: Quick Links */}
          <div style={styles.column}>
            <h4 style={styles.subheading}>{t.quickLinks}</h4>
            <Link href="/" style={styles.link}>{t.home}</Link>
            <a href="#services" style={styles.link}>{t.services}</a>
            <Link href="/contact" style={styles.link}>{t.contactUs}</Link>
          </div>

          {/* Column 3: Contact & Channels (Streamlined) */}
          <div style={styles.column}>
            <h4 style={styles.subheading}>{t.contactUs}</h4>
            <a href="tel:01114204219" style={styles.iconLink}>
              <PhoneIcon/> 01114204219
            </a>
            <a href="tel:034204219" style={styles.iconLink}>
              <PhoneIcon/> 03/4204219
            </a>
            <a href="https://wa.me/201114204219" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <WhatsAppIcon/> 201114204219
            </a>
            <a href="https://whatsapp.com/channel/0029VbCuCJdId7nT8giD5C3a" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <WhatsAppIcon/> {t.channel}
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div style={styles.bottomBar}>
          <p style={styles.rights}>{t.rights}</p>
          <div style={styles.socialGroup}>
            <a href="https://www.facebook.com/share/1DbXQgsx6Z" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/aast_alumni_center?stkn=MXdubGlsZ2pxMjl2dg==" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: 'var(--bg-color)',
    borderTop: 'var(--modern-border)',
    paddingTop: '60px',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '60px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  logo: {
    display: 'block',
    marginBottom: '1rem',
    fontSize: '2rem',
    fontWeight: 800,
    color: 'var(--text-main)',
    textDecoration: 'none',
  },
  subheading: {
    color: 'var(--text-main)',
    marginBottom: '0.5rem',
    fontSize: '1.2rem',
    fontWeight: 700,
  },
  text: {
    color: 'var(--text-muted)',
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  link: {
    display: 'block',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    transition: 'color 0.2s',
    fontWeight: 500,
  },
  iconLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    transition: 'color 0.2s',
    fontWeight: 500,
  },
  bottomBar: {
    borderTop: '1px solid var(--border-color)',
    padding: '24px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
  },
  rights: {
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
  },
  socialGroup: {
    display: 'flex',
    gap: '16px',
  },
  socialIcon: {
    color: 'var(--text-muted)',
    transition: 'color 0.2s',
  }
}
