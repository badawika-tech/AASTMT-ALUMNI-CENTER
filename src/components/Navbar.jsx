'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from './LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, toggleLang } = useLanguage()
  const [sliderLang, setSliderLang] = useState(lang)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setSliderLang(lang)
  }, [lang])

  const handleToggle = () => {
    if (sliderLang !== lang) return; // Prevent spam clicking
    const nextLang = sliderLang === 'en' ? 'ar' : 'en'
    setSliderLang(nextLang)
    setTimeout(() => {
      toggleLang()
    }, 350) // Wait for slider animation (0.3s) before snapping RTL
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/assets/logo.png" alt="AASTMT Logo" style={{ height: '50px', borderRadius: '4px' }} />
        </Link>

        {/* Hamburger Icon */}
        <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></>
            ) : (
              <><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></>
            )}
          </svg>
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>{lang === 'en' ? 'Home' : 'الرئيسية'}</Link>
          <Link href="/#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>{lang === 'en' ? 'Services' : 'الخدمات'}</Link>
          <Link href="/trips" className="nav-link" onClick={() => setIsMenuOpen(false)}>{lang === 'en' ? 'Trips & Offers' : 'الرحلات والعروض'}</Link>

          <button onClick={handleToggle} className={`lang-toggle-pill ${sliderLang}`}>
            <div className="slider"></div>
            <span className={sliderLang === 'en' ? 'active' : ''}>EN</span>
            <span className={sliderLang === 'ar' ? 'active' : ''}>AR</span>
          </button>

          <Link href="/contact" className="cta-button" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>
            {lang === 'en' ? 'Contact Us' : 'اتصل بنا'}
          </Link>
        </nav>
      </div>
    </header>
  )
}
