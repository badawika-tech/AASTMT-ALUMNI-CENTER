'use client'
import React, { useState, useEffect } from 'react'
import { useLanguage } from '@/components/LanguageContext'
import AnimatedDoodles from '@/components/AnimatedDoodles'
import { jobsData } from '@/data/jobsData'

const Icons = {
  Pin: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  Cap: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  ),
  Briefcase: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
  ),
  Laptop: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg>
  ),
  Book: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
  ),
  Clock: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ),
  Arrow: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
  ),
  WhatsApp: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
  )
}

const typeLabels = {
  fulltime: { en: 'Full-time', ar: 'دوام كامل' },
  parttime: { en: 'Part-time', ar: 'دوام جزئي' },
  contract: { en: 'Contract', ar: 'عقد' },
  internship: { en: 'Internship', ar: 'تدريب' },
  remote: { en: 'Remote', ar: 'عن بعد' }
}

// Company logo. If there is no logo (or the file is missing), show the first letter instead.
function CompanyLogo({ logo, name }) {
  const [failed, setFailed] = useState(false)
  if (!logo || failed) {
    return <div className="job-logo job-logo-fallback">{name.trim().charAt(0).toUpperCase()}</div>
  }
  return (
    <div className="job-logo">
      <img src={logo} alt={name} onError={() => setFailed(true)} />
    </div>
  )
}

export default function JobsPage() {
  const { lang } = useLanguage()
  const isAr = lang === 'ar'
  const [selectedType, setSelectedType] = useState('all')
  const [today, setToday] = useState(null)

  useEffect(() => {
    setToday(new Date().toISOString().slice(0, 10))
  }, [])

  // Hide jobs after their deadline (jobs with no deadline always show)
  const openJobs = jobsData.filter((job) => !job.deadline || !today || job.deadline >= today)
  const filteredJobs =
    selectedType === 'all' ? openJobs : openJobs.filter((job) => job.type === selectedType)

  const filterOptions = [
    { id: 'all', label: isAr ? 'جميع الوظائف' : 'All Jobs' },
    { id: 'fulltime', label: typeLabels.fulltime[lang] },
    { id: 'parttime', label: typeLabels.parttime[lang] },
    { id: 'contract', label: typeLabels.contract[lang] },
    { id: 'internship', label: typeLabels.internship[lang] },
    { id: 'remote', label: typeLabels.remote[lang] }
  ]

  const formatDate = (d) =>
    new Date(d + 'T00:00:00Z').toLocaleDateString(isAr ? 'ar-EG' : 'en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC'
    })

  return (
    <div className="trips-page">
      <div className="mesh-bg"></div>
      <AnimatedDoodles />

      <style>{`
        .jobs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
          gap: 28px;
        }
        .job-card {
          position: relative;
          background: var(--card-bg);
          border: var(--modern-border);
          border-radius: 24px;
          padding: 28px 28px 28px 32px;
          box-shadow: var(--modern-shadow);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .job-card::before {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          inset-inline-start: 0;
          width: 5px;
          background: linear-gradient(180deg, #3298A6, #1A295C);
        }
        .job-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--modern-shadow-hover);
        }
        .job-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }
        .job-logo {
          flex-shrink: 0;
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: #fff;
          border: var(--modern-border);
          display: grid;
          place-items: center;
          padding: 8px;
          overflow: hidden;
        }
        .job-logo img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .job-logo-fallback {
          background: rgba(50, 152, 166, 0.12);
          color: var(--accent);
          font-size: 1.6rem;
          font-weight: 800;
        }
        .job-company {
          color: var(--accent);
          font-weight: 700;
          font-size: 1rem;
        }
        .job-type-badge {
          align-self: flex-start;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          background: rgba(50, 152, 166, 0.12);
          color: #257884;
          margin-bottom: 12px;
        }
        .job-card h3 {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 16px;
          line-height: 1.35;
        }
        .job-details {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 16px;
        }
        .job-detail {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--text-muted);
          font-size: 0.92rem;
        }
        .job-detail svg { flex-shrink: 0; margin-top: 2px; color: var(--accent); }
        .job-detail strong { color: var(--text-main); font-weight: 700; }
        .job-more {
          margin-bottom: 16px;
          border-top: 1px dashed var(--border-color);
          padding-top: 12px;
        }
        .job-more summary {
          cursor: pointer;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--primary);
          list-style: none;
        }
        .job-more summary::-webkit-details-marker { display: none; }
        .job-more summary::after { content: ' +'; color: var(--accent); }
        .job-more[open] summary::after { content: ' −'; }
        .job-more h4 {
          margin: 14px 0 6px;
          font-size: 0.88rem;
          color: var(--text-main);
        }
        .job-more ul {
          padding-inline-start: 18px;
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.7;
        }
        .job-deadline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #D64545;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 18px;
        }
        .job-apply-btn {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 20px;
          border-radius: 14px;
          background: var(--primary);
          color: #fff;
          font-weight: 700;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .job-apply-btn:hover { background: var(--accent); transform: translateY(-2px); }
        .jobs-empty {
          text-align: center;
          padding: 60px 20px;
          background: var(--card-bg);
          border: var(--modern-border);
          border-radius: 24px;
          color: var(--text-muted);
        }
        .jobs-disclaimer {
          margin-top: 32px;
          padding: 18px 22px;
          border-radius: 16px;
          background: rgba(26, 41, 92, 0.05);
          color: var(--text-muted);
          font-size: 0.85rem;
          line-height: 1.7;
        }
        @media (max-width: 560px) {
          .jobs-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Page Hero */}
        <section className="trips-page-hero">
          <div className="trip-badge" style={{ marginBottom: '16px' }}>
            {isAr ? 'فرص وظيفية لخريجي الأكاديمية' : 'Career Opportunities for AASTMT Alumni'}
          </div>
          <h1>{isAr ? 'وظائف وفرص تدريب' : 'Jobs & Internships'}</h1>
          <p>
            {isAr
              ? 'تعرف على أحدث الفرص الوظيفية وفرص التدريب المتاحة لخريجي الأكاديمية العربية، وسجل مباشرة من خلال النموذج.'
              : 'Browse the latest job and internship openings shared with AASTMT alumni, and apply directly through the form.'}
          </p>

          <div className="trips-filters-wrapper">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedType(option.id)}
                className={`trips-filter-btn ${selectedType === option.id ? 'active' : ''}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </section>

        {/* Jobs Grid */}
        {filteredJobs.length === 0 ? (
          <div className="jobs-empty">
            <h3 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>
              {isAr ? 'لا توجد وظائف متاحة حالياً' : 'No openings right now'}
            </h3>
            <p>
              {isAr
                ? 'تابع قناتنا على واتساب ليصلك كل جديد.'
                : 'Follow our WhatsApp channel to hear about new openings first.'}
            </p>
          </div>
        ) : (
          <div className="jobs-grid">
            {filteredJobs.map((job) => (
              <article key={job.id} className="job-card">
                <div className="job-top">
                  <CompanyLogo logo={job.logo} name={job.company.en} />
                  <span className="job-company">{job.company[lang]}</span>
                </div>

                <span className="job-type-badge">{typeLabels[job.type][lang]}</span>
                <h3>{job.title[lang]}</h3>

                <div className="job-details">
                  <div className="job-detail">
                    <Icons.Pin />
                    <span><strong>{isAr ? 'المكان: ' : 'Location: '}</strong>{job.location[lang]}</span>
                  </div>
                  <div className="job-detail">
                    <Icons.Cap />
                    <span><strong>{isAr ? 'المؤهل: ' : 'Qualification: '}</strong>{job.qualification[lang]}</span>
                  </div>
                  <div className="job-detail">
                    <Icons.Briefcase />
                    <span><strong>{isAr ? 'الخبرة: ' : 'Experience: '}</strong>{job.experience[lang]}</span>
                  </div>
                  {job.workMode && (
                    <div className="job-detail">
                      <Icons.Laptop />
                      <span><strong>{isAr ? 'نظام العمل: ' : 'Work Mode: '}</strong>{job.workMode[lang]}</span>
                    </div>
                  )}
                  {job.majors && (
                    <div className="job-detail">
                      <Icons.Book />
                      <span><strong>{isAr ? 'التخصصات المطلوبة: ' : 'Required Majors: '}</strong>{job.majors[lang].join(isAr ? '، ' : ', ')}</span>
                    </div>
                  )}
                </div>

                {(job.requirements || job.responsibilities) && (
                  <details className="job-more">
                    <summary>{isAr ? 'عرض التفاصيل' : 'View details'}</summary>
                    {job.requirements && (
                      <>
                        <h4>{isAr ? 'المتطلبات' : 'Key requirements'}</h4>
                        <ul>{job.requirements[lang].map((r) => <li key={r}>{r}</li>)}</ul>
                      </>
                    )}
                    {job.responsibilities && (
                      <>
                        <h4>{isAr ? 'المسؤوليات' : 'Main responsibilities'}</h4>
                        <ul>{job.responsibilities[lang].map((r) => <li key={r}>{r}</li>)}</ul>
                      </>
                    )}
                  </details>
                )}

                {job.deadline && (
                  <div className="job-deadline">
                    <Icons.Clock />
                    {isAr ? 'آخر موعد للتقديم: ' : 'Apply before: '}
                    {formatDate(job.deadline)}
                  </div>
                )}

                <a
                  href={job.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="job-apply-btn"
                >
                  {isAr ? 'قدّم الآن' : 'Apply Now'}
                  <span style={{ transform: isAr ? 'rotate(180deg)' : 'none', display: 'inline-flex' }}>
                    <Icons.Arrow />
                  </span>
                </a>
              </article>
            ))}
          </div>
        )}

        {/* Disclaimer */}
        <p className="jobs-disclaimer">
          <strong>{isAr ? 'تنبيه: ' : 'Disclaimer: '}</strong>
          {isAr
            ? 'هذه الفرص يشاركها مركز خريجي الأكاديمية لأغراض معلوماتية فقط. إجراءات التوظيف ومعايير القبول والاختيار النهائي تحددها جهات العمل وحدها، ولا يضمن المركز إجراء مقابلات أو الحصول على وظيفة.'
            : 'These opportunities are shared by the AAST Alumni Center for informational purposes only. Recruitment processes, eligibility criteria, and final selection decisions are managed solely by the respective employers. The AAST Alumni Center does not guarantee interviews or employment.'}
        </p>

        {/* For companies */}
        <div style={{ marginTop: '32px', padding: '36px', background: 'white', borderRadius: '24px', border: 'var(--modern-border)', boxShadow: 'var(--modern-shadow)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
            {isAr ? 'هل شركتك تبحث عن موظفين؟' : 'Is your company hiring?'}
          </h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 24px', fontSize: '0.95rem' }}>
            {isAr
              ? 'تواصل مع مركز الخريجين لنشر فرصتك الوظيفية والوصول لخريجي الأكاديمية.'
              : 'Get in touch with the Alumni Center to post your opening and reach AASTMT graduates.'}
          </p>
          <a href="https://wa.me/201114204219" target="_blank" rel="noopener noreferrer" className="trip-btn-whatsapp">
            <Icons.WhatsApp /> {isAr ? 'تواصل معنا على واتساب' : 'Message us on WhatsApp'}
          </a>
        </div>
      </div>
    </div>
  )
}