'use client'
import React from 'react'
import { useLanguage } from '@/components/LanguageContext'
import AnimatedDoodles from '@/components/AnimatedDoodles'

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
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
    subtitle: "We'd love to hear from you. Reach out through any of our official channels and we will get back to you as soon as possible.",
    callUs: "Direct Line",
    mobile: "Mobile: 01114204219",
    landline: "Landline: 03/4204219",
    social: "Social & WhatsApp",
    facebook: "Facebook Page",
    instagram: "Instagram Page",
    whatsapp: "Message on WhatsApp",
    channel: "Official WhatsApp Channel",
    staffChannel: "Staff WhatsApp Channel",
  },
  ar: {
    title: "تواصل معنا.",
    subtitle: "يسعدنا الاستماع إليك. تواصل معنا عبر أي من قنواتنا الرسمية وسنرد عليك في أقرب وقت ممكن.",
    callUs: "الخط المباشر",
    mobile: "الموبايل: 01114204219",
    landline: "التليفون الأرضي: 03/4204219",
    social: "الشبكات الاجتماعية",
    facebook: "صفحة فيسبوك",
    instagram: "إنستجرام",
    whatsapp: "راسلنا على واتساب",
    channel: "القناة الرسمية على واتساب",
    staffChannel: "قناة العاملين على واتساب",
  }
}

export default function Contact() {
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <>
      <div className="mesh-bg"></div>
      <AnimatedDoodles />
      
      <main className="container" style={{ position: 'relative', zIndex: 10, minHeight: '90vh', display: 'flex', alignItems: 'center', padding: '6rem 24px' }}>
        
        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Left Text Side */}
          <div style={{ flex: '1 1 400px', textAlign: lang === 'ar' ? 'right' : 'left' }}>
            <h1 className="heading-xl">{t.title}</h1>
            <p className="subtitle-hero" style={{ margin: lang === 'ar' ? '0 0 0 auto' : '0 auto 0 0' }}>
              {t.subtitle}
            </p>
            
            <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Phone Details */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div className="icon-wrapper" style={{ width: 64, height: 64, marginBottom: 0, flexShrink: 0 }}><PhoneIcon/></div>
                <div>
                  <h4 style={{ fontWeight: 800, fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '4px' }}>{t.callUs}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.5 }}>{t.mobile} <br/> {t.landline}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Glass Card Side */}
          <div style={{ flex: '1 1 450px', display: 'flex', justifyContent: lang === 'ar' ? 'flex-start' : 'flex-end' }}>
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
