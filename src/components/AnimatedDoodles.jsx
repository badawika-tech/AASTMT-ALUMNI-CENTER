import React from 'react';

export default function AnimatedDoodles() {
  return (
    <div style={styles.container}>
      {/* Doodle 1: Graduation Cap */}
      <div className="doodle float-1" style={{...styles.doodle, top: '15%', left: '8%'}}>
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      </div>

      {/* Doodle 2: Star */}
      <div className="doodle float-2" style={{...styles.doodle, top: '25%', right: '12%'}}>
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      </div>

      {/* Doodle 3: Briefcase */}
      <div className="doodle float-3" style={{...styles.doodle, bottom: '15%', left: '15%'}}>
        <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      </div>

      {/* Doodle 4: Chat Bubble */}
      <div className="doodle float-4" style={{...styles.doodle, top: '45%', right: '8%'}}>
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </div>

      {/* Doodle 5: Abstract Circle */}
      <div className="doodle float-2" style={{...styles.doodle, top: '65%', left: '5%'}}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
        </svg>
      </div>
      
      {/* Doodle 6: Abstract Triangle */}
      <div className="doodle float-1" style={{...styles.doodle, bottom: '30%', right: '15%'}}>
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        </svg>
      </div>
      
      {/* Doodle 7: Sparkles */}
      <div className="doodle float-3" style={{...styles.doodle, top: '10%', right: '40%'}}>
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: 1, // Behind cards but above the mesh gradient
    overflow: 'hidden'
  },
  doodle: {
    position: 'absolute',
    opacity: 0.25, // Subtle background opacity
  }
}
