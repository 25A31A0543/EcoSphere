import React, { useState } from 'react';
import { 
  Play, 
  Leaf, 
  ShieldCheck, 
  Heart, 
  Award, 
  CheckCircle, 
  X, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Users,
  Video,
  Clock,
  BookOpen,
  HelpCircle,
  PackageCheck,
  GraduationCap,
  Store,
  Home,
  CheckCircle2,
  ThumbsUp,
  ExternalLink
} from 'lucide-react';
import { MOCK_VIDEOS, SEVEN_SOLUTIONS, COMMUNITY_ACTIVITIES } from '../data/mockData';
import { addEcoCoins } from '../data/storage';

/* ──────────────────────────────────────────────────────────
   VIDEO TAB — Standalone component to avoid render crashes
   Uses youtube-nocookie.com (bypasses localhost CSP blocks)
   with thumbnail poster fallback for offline / slow connections
   ────────────────────────────────────────────────────────── */
function VideoTab({ solution }) {
  const [playing, setPlaying] = useState(false);

  const videoId   = solution.videoId
    || (solution.videoUrl || '').replace(/.*\/embed\//, '').replace(/\?.*/, '');
  const thumb     = solution.thumbnailUrl
    || (videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : solution.heroImage);
  const watchLink = solution.watchUrl
    || (videoId ? `https://www.youtube.com/watch?v=${videoId}` : '#');
  const embedSrc  = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
    : null;

  return (
    <div className="detail-section-container glass-card video-box">
      {/* Section header */}
      <div className="section-title-wrap" style={{ marginBottom: '18px' }}>
        <Video size={22} className="eco-text" />
        <div>
          <h3 style={{ fontSize: '1rem', lineHeight: 1.4 }}>{solution.diyTutorial}</h3>
          <p style={{ marginTop: '4px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            {playing
              ? 'Video is playing below. Use fullscreen for the best experience.'
              : 'Click the preview below to start watching the tutorial video.'}
          </p>
        </div>
      </div>

      {/* Player area */}
      <div style={{
        width: '100%', borderRadius: '18px', overflow: 'hidden',
        background: '#000', position: 'relative',
        boxShadow: '0 12px 40px rgba(0,0,0,0.55)',
        aspectRatio: '16/9',
      }}>
        {playing && embedSrc ? (
          /* ── IFRAME: youtube-nocookie bypasses most localhost blocks ── */
          <iframe
            src={embedSrc}
            title={solution.diyTutorial}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
          />
        ) : (
          /* ── THUMBNAIL / PLAY CARD ── */
          <div
            style={{ width: '100%', height: '100%', cursor: 'pointer', position: 'relative' }}
            onClick={() => setPlaying(true)}
          >
            {/* Poster image — works offline once cached */}
            <img
              src={thumb}
              alt={solution.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={e => { e.target.src = solution.heroImage; }}
            />

            {/* Gradient overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)'
            }} />

            {/* Play button ring */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%,-50%)',
              width: 88, height: 88, borderRadius: '50%',
              background: 'rgba(255,0,0,0.9)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 0 12px rgba(255,0,0,0.2), 0 6px 28px rgba(255,0,0,0.5)',
              transition: 'transform 0.2s ease',
            }}>
              <div style={{
                width: 0, height: 0,
                borderTop: '17px solid transparent',
                borderBottom: '17px solid transparent',
                borderLeft: '30px solid #fff',
                marginLeft: 8,
              }} />
            </div>

            {/* Bottom label */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 18px 14px' }}>
              <span style={{
                background: '#ff0000', color: '#fff', fontSize: '0.63rem',
                fontWeight: 800, padding: '2px 8px', borderRadius: '4px',
                letterSpacing: '0.07em', marginRight: 8
              }}>▶ CLICK TO PLAY</span>
              <strong style={{ color: '#fff', fontSize: '0.9rem' }}>{solution.diyTutorial}</strong>
            </div>
          </div>
        )}
      </div>

      {/* Open on YouTube button row */}
      <div style={{
        marginTop: 14, padding: '13px 18px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12,
        background: 'rgba(255,0,0,0.07)', border: '1px solid rgba(255,0,0,0.2)',
        borderRadius: 14
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <ExternalLink size={17} style={{ color: '#ef4444', flexShrink: 0 }} />
          <span style={{ fontSize: '0.83rem', color: 'var(--text-secondary)' }}>
            For best fullscreen experience, watch directly on YouTube.
          </span>
        </div>
        <a
          href={watchLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            background: '#ff0000', color: '#fff',
            padding: '9px 20px', borderRadius: 30,
            fontWeight: 700, fontSize: '0.84rem',
            textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(255,0,0,0.35)',
          }}
        >
          <Video size={15} />
          Open on YouTube
        </a>
      </div>
    </div>
  );
}



export default function SolutionDashboard({ onNavigateToSection, user, onUpdateUser }) {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [detailTab, setDetailTab] = useState('steps'); // 'steps' | 'materials' | 'diy' | 'video' | 'faq'
  const [roleFilter, setRoleFilter] = useState('all'); // 'all' | 'student' | 'vendor' | 'household'
  const [completedSolutions, setCompletedSolutions] = useState({});
  const [activitiesList, setActivitiesList] = useState(COMMUNITY_ACTIVITIES);
  const videoData = MOCK_VIDEOS.solution;

  const handleLikeActivity = (id) => {
    setActivitiesList((prev) =>
      prev.map((act) => (act.id === id ? { ...act, likes: act.likes + 1 } : act))
    );
  };

  const handleCompleteSolutionAction = (sol) => {
    if (completedSolutions[sol.id]) {
      alert("🎉 You have already claimed EcoCoins for this solution today!");
      return;
    }
    const newCoins = addEcoCoins(100, `Completed Solution: ${sol.title}`);
    if (user && onUpdateUser) {
      onUpdateUser({ ...user, ecoCoins: newCoins });
    }
    setCompletedSolutions({ ...completedSolutions, [sol.id]: true });
    alert(`🎉 Congratulations! You completed '${sol.title}'! +100 EcoCoins added to your profile!`);
  };

  // Filter solutions by selected role
  const filteredSolutions = SEVEN_SOLUTIONS.filter((sol) => {
    if (roleFilter === 'student') return sol.category.includes('Tech') || sol.category.includes('Transport') || sol.category.includes('Action') || sol.category.includes('Creative');
    if (roleFilter === 'vendor') return sol.category.includes('Vendor') || sol.category.includes('Policy');
    if (roleFilter === 'household') return sol.category.includes('Waste') || sol.category.includes('Water') || sol.category.includes('Action');
    return true;
  });

  // IF A SOLUTION CARD IS SELECTED: RENDER DEDICATED SOLUTION DASHBOARD VIEW
  if (selectedSolution) {
    return (
      <div className="dashboard-panel solution-detail-dashboard">
        <button 
          className="btn btn-secondary back-to-solutions-btn"
          onClick={() => setSelectedSolution(null)}
        >
          <ArrowLeft size={18} />
          <span>Back to All Solutions</span>
        </button>

        {/* Hero Solution Banner */}
        <div className="solution-detail-hero glass-card">
          <img src={selectedSolution.heroImage} alt={selectedSolution.title} className="detail-hero-img" />
          <div className="detail-hero-content">
            <span className="sol-category-badge">{selectedSolution.category}</span>
            <h2>{selectedSolution.title}</h2>
            <p className="detail-hero-desc">{selectedSolution.summary}</p>
            
            <div className="detail-hero-actions-row">
              <div className="detail-impact-chip">
                <Award size={18} />
                <span>Environmental Impact: {selectedSolution.impactMultiplier}</span>
              </div>

              <button 
                className={`btn ${completedSolutions[selectedSolution.id] ? 'btn-secondary' : 'btn-primary'} claim-action-btn`}
                onClick={() => handleCompleteSolutionAction(selectedSolution)}
              >
                <CheckCircle2 size={18} />
                <span>{completedSolutions[selectedSolution.id] ? 'Completed! (+100 EcoCoins Claimed)' : 'I Completed This Solution! (+100 EcoCoins)'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Navigation Tabs */}
        <div className="detail-tabs-bar glass-card">
          <button 
            className={`detail-tab-btn ${detailTab === 'steps' ? 'active' : ''}`}
            onClick={() => setDetailTab('steps')}
          >
            <BookOpen size={16} />
            <span>1. Implementation Blueprint</span>
          </button>

          <button 
            className={`detail-tab-btn ${detailTab === 'materials' ? 'active' : ''}`}
            onClick={() => setDetailTab('materials')}
          >
            <PackageCheck size={16} />
            <span>2. Itemized Cost & Budget</span>
          </button>

          <button 
            className={`detail-tab-btn ${detailTab === 'diy' ? 'active' : ''}`}
            onClick={() => setDetailTab('diy')}
          >
            <Sparkles size={16} />
            <span>3. How to Make It & Sources</span>
          </button>

          <button 
            className={`detail-tab-btn ${detailTab === 'video' ? 'active' : ''}`}
            onClick={() => setDetailTab('video')}
          >
            <Video size={16} />
            <span>4. Unique Video Guide</span>
          </button>

          <button 
            className={`detail-tab-btn ${detailTab === 'faq' ? 'active' : ''}`}
            onClick={() => setDetailTab('faq')}
          >
            <HelpCircle size={16} />
            <span>5. Learn & Q&A</span>
          </button>
        </div>

        {/* TAB 1: STEP-BY-STEP IMPLEMENTATION BLUEPRINT (MULTI-PAGE EXPANDED) */}
        {detailTab === 'steps' && (
          <div className="detail-section-container implementation-blueprint-wrapper">
            <div className="section-title-wrap">
              <Sparkles size={24} className="eco-text" />
              <div>
                <h3>Comprehensive Implementation Blueprint & Technical Manual</h3>
                <p className="subtitle-text">In-depth Technical Architecture, Multi-Phase Field Execution & QA Protocols</p>
              </div>
            </div>

            {/* Page 1: Executive Summary & Environmental Context */}
            {selectedSolution.executiveSummary && (
              <div className="blueprint-page-card glass-card">
                <div className="blueprint-badge">PAGE 1 OF 3 • EXECUTIVE SUMMARY & PROBLEM CONTEXT</div>
                <h4>📌 Executive Summary & Environmental Context</h4>
                <p className="blueprint-text-para">{selectedSolution.executiveSummary}</p>
                
                {selectedSolution.problemContext && (
                  <div className="context-box glass-card">
                    <h5>🌍 Local Problem Context & Economic Rationale:</h5>
                    <p>{selectedSolution.problemContext}</p>
                  </div>
                )}
              </div>
            )}

            {/* Page 2: Technical Architecture & System Parameters */}
            {selectedSolution.technicalArchitecture && (
              <div className="blueprint-page-card glass-card">
                <div className="blueprint-badge">PAGE 2 OF 3 • TECHNICAL ARCHITECTURE & PARAMETERS</div>
                <h4>⚙️ Technical Design Architecture & Specification Sheet</h4>
                
                <div className="tech-spec-grid">
                  {Object.entries(selectedSolution.technicalArchitecture).map(([key, val]) => (
                    <div key={key} className="tech-spec-item glass-card">
                      <span className="spec-label">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</span>
                      <strong className="spec-value eco-text">{val}</strong>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Page 3: 4-Phase Action Plan & Step Cards */}
            <div className="blueprint-page-card glass-card">
              <div className="blueprint-badge">PAGE 3 OF 3 • 4-PHASE STEP-BY-STEP EXECUTION WALKTHROUGH</div>
              <h4>🛠️ Actionable Step-by-Step Field Execution Walkthrough</h4>

              <div className="detailed-steps-grid">
                {selectedSolution.detailedSteps.map((st) => (
                  <div key={st.step} className="detailed-step-card glass-card hover-glow">
                    <div className="step-card-image-box">
                      <img src={st.image} alt={st.title} />
                      <span className="step-number-badge">{st.title.split(':')[0]}</span>
                    </div>
                    <div className="step-card-content">
                      <h4>{st.title}</h4>
                      <p>{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Field Deployment Testing & Quality Assurance Protocols */}
            {selectedSolution.fieldDeploymentTesting && (
              <div className="blueprint-page-card glass-card testing-protocol-card">
                <h4>🧪 Field Deployment Testing & Quality Control Protocols</h4>
                <div className="testing-grid">
                  {Object.entries(selectedSolution.fieldDeploymentTesting).map(([k, v]) => (
                    <div key={k} className="test-item">
                      <CheckCircle2 size={18} className="eco-text" />
                      <div>
                        <strong>{k.replace(/([A-Z])/g, ' $1').toUpperCase()}:</strong>
                        <p>{v}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: MATERIALS & LOCAL COST BREAKDOWN */}
        {detailTab === 'materials' && (
          <div className="detail-section-container glass-card materials-box">
            <div className="section-title-wrap">
              <PackageCheck size={22} className="eco-text" />
              <div>
                <h3>Itemized Materials & Total Cost Breakdown</h3>
                <p className="gold-text font-bold">Total Estimated Project Budget: {selectedSolution.totalEstimatedBudget}</p>
              </div>
            </div>

            {/* Student Cost-Cutting Tip Banner */}
            <div className="cost-cutting-banner glass-card">
              <strong>💡 Student & Vendor Cost-Saving Tip:</strong> {selectedSolution.costCuttingTip}
            </div>

            <div className="materials-table-wrapper">
              <div className="mat-table-header">
                <span>Material / Component</span>
                <span>Quantity</span>
                <span>Estimated Cost</span>
                <span>Where to Source Locally</span>
              </div>
              {selectedSolution.materialsNeeded.map((mat, idx) => (
                <div key={idx} className="mat-table-row">
                  <span className="mat-name-col">
                    <CheckCircle size={16} className="eco-text" />
                    <strong>{mat.name}</strong>
                  </span>
                  <span className="mat-qty-col">{mat.qty || '1 Unit'}</span>
                  <span className="mat-cost-col gold-text">{mat.cost}</span>
                  <span className="mat-source-col">{mat.source}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: HOW TO MAKE IT & DIY SOURCES */}
        {detailTab === 'diy' && (
          <div className="detail-section-container glass-card diy-section-box">
            <div className="section-title-wrap">
              <Sparkles size={22} className="eco-text" />
              <h3>How to Make It: DIY Recipe & Sourcing Blueprint</h3>
            </div>

            {selectedSolution.howToMake && (
              <div className="diy-blueprint-grid">
                <div className="diy-info-card glass-card">
                  <h4>🛠️ DIY Recipe: {selectedSolution.howToMake.title}</h4>
                  <div className="diy-meta-row">
                    <span>⏱️ Time Needed: <strong>{selectedSolution.howToMake.timeRequired}</strong></span>
                    <span>🧰 Tools Required: <strong>{selectedSolution.howToMake.toolsNeeded.join(', ')}</strong></span>
                  </div>
                  <p className="diy-summary-text">{selectedSolution.howToMake.blueprintSummary}</p>
                </div>

                <div className="diy-vendors-card glass-card">
                  <h4>🏪 Verified Local Suppliers & Contacts</h4>
                  <div className="vendors-list-mini">
                    {selectedSolution.howToMake.localVendors.map((v, idx) => (
                      <div key={idx} className="vendor-item-mini">
                        <strong>{v.name}</strong>
                        <span>📍 {v.location}</span>
                        <span className="eco-text">📞 {v.contact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: UNIQUE VIDEO TUTORIAL */}
        {detailTab === 'video' && (
          <VideoTab solution={selectedSolution} />
        )}

        {/* TAB 5: LEARN & FAQ */}
        {detailTab === 'faq' && (
          <div className="detail-section-container">
            <div className="section-title-wrap">
              <HelpCircle size={22} className="eco-text" />
              <h3>Learn & Clear Guidance Answers</h3>
            </div>

            <div className="faq-cards-stack">
              {selectedSolution.learnFaq.map((faq, idx) => (
                <div key={idx} className="faq-card glass-card">
                  <h4 className="faq-question">❓ {faq.q}</h4>
                  <p className="faq-answer">💡 {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // MAIN SOLUTION DASHBOARD LIST VIEW
  return (
    <div className="dashboard-panel solution-dashboard-panel">
      {/* Panel Header */}
      <div className="panel-header solution-panel-header">
        <div className="panel-header-title">
          <div className="header-badge solution-pill">
            <Leaf size={14} />
            <span>ACTIONABLE BLUEPRINT FOR COMMUNITIES</span>
          </div>
          <h2>Solution Dashboard 🌱</h2>
          <p>
            Simple, low-cost green solutions designed for students, small vendors, and local households.
          </p>
        </div>
      </div>

      {/* Grid: 10-Min Solutions Video + Live Community Activity Feed */}
      <div className="solution-grid-top">
        {/* 10-Minute Video Player Section */}
        <div className="video-player-container glass-card solution-border">
          <div className="video-header-info">
            <div className="video-title-row">
              <span className="video-tag eco-tag">SOLUTION BLUEPRINT (10:00)</span>
              <h3>{videoData.title}</h3>
            </div>
            <p className="video-desc">{videoData.description}</p>
          </div>

          <div className="responsive-video-wrapper">
            <iframe 
              src={`${videoData.embedUrl}?autoplay=0&rel=0`}
              title={videoData.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Interactive Chapter Markers */}
          <div className="video-chapters-bar">
            <h4><Clock size={16} /> Solution Milestones (10 Mins):</h4>
            <div className="chapters-list">
              {videoData.chapters.map((ch, idx) => (
                <button 
                  key={idx} 
                  className={`chapter-chip eco-chip ${activeChapterIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveChapterIndex(idx)}
                >
                  <Play size={12} />
                  <span className="ch-time">{ch.time}</span>
                  <span className="ch-title">{ch.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Feed of Community Activities */}
        <div className="community-live-feed glass-card">
          <div className="sidebar-heading">
            <Users size={20} className="eco-text" />
            <h3>Live Community Feed</h3>
            <span className="live-tag eco-live">STREAMING</span>
          </div>

          <div className="activity-feed-list">
            {activitiesList.map((act) => (
              <div key={act.id} className="activity-item">
                <img src={act.avatar} alt={act.user} className="act-avatar" />
                <div className="act-info">
                  <div className="act-user-row">
                    <strong>{act.user}</strong>
                    <span className="act-tag">{act.tag}</span>
                  </div>
                  <p className="act-action">{act.action}</p>
                  <div className="act-footer">
                    <span className="act-time">{act.time}</span>
                    <div className="act-rewards">
                      <span className="coins-earned">+{act.coinsEarned} Coins</span>
                      <button className="like-btn" onClick={() => handleLikeActivity(act.id)}>
                        <Heart size={14} className={act.likes > 34 ? 'liked' : ''} />
                        <span>{act.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Role Filter Pills Bar (Shifted below video & community feed, above solutions) */}
      <div className="role-filter-bar glass-card">
        <span className="role-filter-label">Who are you? Pick your role:</span>
        <div className="role-pills-group">
          <button 
            className={`role-pill-btn ${roleFilter === 'all' ? 'active' : ''}`}
            onClick={() => setRoleFilter('all')}
          >
            <Sparkles size={14} />
            <span>Show All (7 Solutions)</span>
          </button>

          <button 
            className={`role-pill-btn ${roleFilter === 'student' ? 'active' : ''}`}
            onClick={() => setRoleFilter('student')}
          >
            <GraduationCap size={14} />
            <span>🎓 College Student</span>
          </button>

          <button 
            className={`role-pill-btn ${roleFilter === 'vendor' ? 'active' : ''}`}
            onClick={() => setRoleFilter('vendor')}
          >
            <Store size={14} />
            <span>🏪 Small Vendor</span>
          </button>

          <button 
            className={`role-pill-btn ${roleFilter === 'household' ? 'active' : ''}`}
            onClick={() => setRoleFilter('household')}
          >
            <Home size={14} />
            <span>🏡 Household & Citizen</span>
          </button>
        </div>
      </div>

      {/* 7 Solutions Grid Buttons */}
      <div className="seven-solutions-section">
        <div className="section-title-wrap">
          <Sparkles size={24} className="eco-text" />
          <div>
            <h3>Actionable Green Solutions ({filteredSolutions.length})</h3>
            <p>Click any card to open step-by-step guides, material costs, and earn EcoCoins!</p>
          </div>
        </div>

        <div className="solutions-buttons-grid">
          {filteredSolutions.map((sol, index) => (
            <div 
              key={sol.id} 
              className="solution-action-card glass-card hover-glow"
              onClick={() => {
                setSelectedSolution(sol);
                setDetailTab('steps');
              }}
            >
              <div className="sol-card-top-row">
                <span className="sol-card-number">0{index + 1}</span>
                <span className="friendly-reward-pill">🪙 +100 Coins</span>
              </div>
              <div className="sol-card-body">
                <span className="sol-category">{sol.category}</span>
                <h4>{sol.title}</h4>
                <p className="sol-summary">{sol.summary}</p>
                <div className="sol-impact-pill">
                  <CheckCircle size={14} />
                  <span>{sol.impactMultiplier}</span>
                </div>
              </div>
              <div className="sol-card-footer">
                <span>View Easy Step-by-Step Guide</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


