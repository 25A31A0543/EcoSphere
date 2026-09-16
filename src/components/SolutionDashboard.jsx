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
  ExternalLink,
  ChevronDown,
  Target,
  FileCode
} from 'lucide-react';
import { MOCK_VIDEOS, SEVEN_SOLUTIONS, COMMUNITY_ACTIVITIES } from '../data/mockData';
import { addEcoCoins } from '../data/storage';
import UserJourneyFlowchart from './UserJourneyFlowchart';

/* ──────────────────────────────────────────────────────────
   VIDEO TAB — Standalone component to avoid render crashes
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

      <div style={{
        width: '100%', borderRadius: '18px', overflow: 'hidden',
        background: '#000', position: 'relative',
        boxShadow: '0 12px 40px rgba(0,0,0,0.55)',
        aspectRatio: '16/9',
      }}>
        {playing && embedSrc ? (
          <iframe
            src={embedSrc}
            title={solution.diyTutorial}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
          />
        ) : (
          <div
            style={{ width: '100%', height: '100%', cursor: 'pointer', position: 'relative' }}
            onClick={() => setPlaying(true)}
          >
            <img
              src={thumb}
              alt={solution.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={e => { e.target.src = solution.heroImage; }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)'
            }} />
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '68px', height: '68px', borderRadius: '50%',
              background: 'rgba(16,185,129,0.9)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 30px rgba(16,185,129,0.7)',
              transition: 'transform 0.2s ease',
            }}>
              <Play size={30} fill="#fff" color="#fff" style={{ marginLeft: '4px' }} />
            </div>
            <div style={{
              position: 'absolute', bottom: '16px', left: '20px', right: '20px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            }}>
              <div>
                <span style={{
                  background: '#10b981', color: '#fff', fontSize: '0.68rem',
                  fontWeight: 800, padding: '3px 9px', borderRadius: '6px',
                  textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-block', marginBottom: '6px',
                }}>TUTORIAL VIDEO</span>
                <h4 style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 700, margin: 0, textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                  {solution.title}
                </h4>
              </div>
              <a
                href={watchLink}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                style={{
                  color: '#34d399', fontSize: '0.78rem', fontWeight: 600,
                  display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none',
                  background: 'rgba(0,0,0,0.6)', padding: '4px 10px', borderRadius: '8px',
                }}
              >
                <span>YouTube</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SolutionDashboard({ onNavigateToSection, user, onUpdateUser }) {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
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

              {selectedSolution.id === 'sol_1' && (
                <button className="btn btn-gold" onClick={() => onNavigateToSection('guide')}>
                  <Sparkles size={16} /> Open IoT Dustbin Masterclass
                </button>
              )}
              {selectedSolution.id === 'sol_2' && (
                <button className="btn btn-gold" onClick={() => onNavigateToSection('marketplace')}>
                  <Store size={16} /> Open Online Eco Marketplace
                </button>
              )}
              {selectedSolution.id === 'sol_3' && (
                <button className="btn btn-gold" onClick={() => onNavigateToSection('recycling-hub')}>
                  <Leaf size={16} /> Open Smart Recycling Hub
                </button>
              )}
              {selectedSolution.id === 'sol_4' && (
                <button className="btn btn-gold" onClick={() => onNavigateToSection('marketplace')}>
                  <Store size={16} /> View Cup Library & Marketplace
                </button>
              )}
              {selectedSolution.id === 'sol_5' && (
                <button className="btn btn-gold" onClick={() => onNavigateToSection('guide')}>
                  <BookOpen size={16} /> Open Upcycling PDF Manuals
                </button>
              )}
              {selectedSolution.id === 'sol_6' && (
                <button className="btn btn-gold" onClick={() => onNavigateToSection('transport')}>
                  <ArrowRight size={16} /> Open Green Transport Planner
                </button>
              )}
              {selectedSolution.id === 'sol_7' && (
                <button className="btn btn-gold" onClick={() => onNavigateToSection('rewards')}>
                  <Award size={16} /> Open EcoSphere Rewards
                </button>
              )}
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

        {/* TAB 1: STEP-BY-STEP IMPLEMENTATION BLUEPRINT (SCANNABLE + ACCORDION) */}
        {detailTab === 'steps' && (
          <div className="detail-section-container implementation-blueprint-wrapper">
            <div className="section-title-wrap">
              <Sparkles size={24} className="eco-text" />
              <div>
                <h3>Implementation Blueprint</h3>
                <p className="subtitle-text">Clear, scannable action steps with expandable technical specs</p>
              </div>
            </div>

            {/* Scannable Summary Cards */}
            {selectedSolution.executiveSummary && (
              <div className="blueprint-page-card glass-card">
                <div className="blueprint-badge">EXECUTIVE SUMMARY • KEY TAKEAWAYS</div>
                
                <div className="scannable-bullets-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', marginTop: '12px' }}>
                  <div className="bullet-card glass-card" style={{ padding: '14px', background: 'rgba(16, 185, 129, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--emerald-400)', fontWeight: 800, fontSize: '0.88rem' }}>
                      <CheckCircle2 size={16} />
                      <span>Primary Objective</span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#e5e7eb', marginTop: '6px' }}>
                      Replace single-use packaging with reusable upcycled alternatives to stop drain blockages.
                    </p>
                  </div>

                  <div className="bullet-card glass-card" style={{ padding: '14px', background: 'rgba(59, 130, 246, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#60a5fa', fontWeight: 800, fontSize: '0.88rem' }}>
                      <Target size={16} />
                      <span>Economic Savings</span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#e5e7eb', marginTop: '6px' }}>
                      Saves up to ₹1,500/month for canteen vendors and eliminates packaging waste.
                    </p>
                  </div>

                  <div className="bullet-card glass-card" style={{ padding: '14px', background: 'rgba(245, 158, 11, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fbbf24', fontWeight: 800, fontSize: '0.88rem' }}>
                      <ShieldCheck size={16} />
                      <span>Campus Impact</span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#e5e7eb', marginTop: '6px' }}>
                      Pragati Greenery Club deployment across hostels, canteens, and local vendors.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* PROGRESSIVE DISCLOSURE ACCORDION: Technical Architecture & QA Protocols */}
            {selectedSolution.technicalArchitecture && (
              <details className="tech-accordion glass-card" style={{ margin: '16px 0', padding: '16px', borderRadius: '16px', cursor: 'pointer' }}>
                <summary style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--emerald-400)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', userSelect: 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FileCode size={18} />
                    <span>View Technical Architecture & Blueprint Specs ▾</span>
                  </div>
                  <span style={{ fontSize: '0.72rem', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '8px', color: '#fff' }}>Technical Details</span>
                </summary>

                <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-glass)' }}>
                  <div className="tech-spec-grid">
                    {Object.entries(selectedSolution.technicalArchitecture).map(([key, val]) => (
                      <div key={key} className="tech-spec-item glass-card">
                        <span className="spec-label">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</span>
                        <strong className="spec-value eco-text">{val}</strong>
                      </div>
                    ))}
                  </div>

                  {selectedSolution.fieldDeploymentTesting && (
                    <div className="testing-protocol-box" style={{ marginTop: '16px', padding: '14px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px' }}>
                      <h5 style={{ color: 'var(--amber-gold)', fontSize: '0.85rem', marginBottom: '8px' }}>🧪 Quality Assurance & Testing Protocol:</h5>
                      <ul style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', paddingLeft: '20px' }}>
                        <li><strong>Load Capacity:</strong> {selectedSolution.fieldDeploymentTesting.loadTestProtocol}</li>
                        <li><strong>Washability:</strong> {selectedSolution.fieldDeploymentTesting.washability}</li>
                        <li><strong>Cost Benefit Ratio:</strong> {selectedSolution.fieldDeploymentTesting.costBenefitRatio}</li>
                      </ul>
                    </div>
                  )}
                </div>
              </details>
            )}

            {/* 4-Phase Scannable Execution Step Cards */}
            <div className="blueprint-page-card glass-card">
              <div className="blueprint-badge">4-PHASE STEP-BY-STEP EXECUTION</div>
              <h4>🛠️ Actionable Step-by-Step Guide</h4>

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
          </div>
        )}

        {/* TAB 2: ITEMIZED COST & MATERIALS */}
        {detailTab === 'materials' && (
          <div className="detail-section-container materials-budget-wrapper">
            <div className="section-title-wrap">
              <PackageCheck size={24} className="eco-text" />
              <div>
                <h3>Itemized Bill of Materials & Budgeting</h3>
                <p>Estimated Budget: <strong className="gold-text">{selectedSolution.totalEstimatedBudget}</strong></p>
              </div>
            </div>

            <div className="budget-tip-banner glass-card">
              <Sparkles size={20} className="gold-text" />
              <div>
                <strong>💡 Zero-Cost Hack for Pragati Students:</strong>
                <p>{selectedSolution.costCuttingTip}</p>
              </div>
            </div>

            <table className="materials-table glass-card">
              <thead>
                <tr>
                  <th>Material / Component</th>
                  <th>Quantity Required</th>
                  <th>Estimated Cost</th>
                  <th>Local Source (Kakinada / Surampalem)</th>
                </tr>
              </thead>
              <tbody>
                {selectedSolution.materialsNeeded.map((mat, idx) => (
                  <tr key={idx}>
                    <td><strong>{mat.name}</strong></td>
                    <td>{mat.qty}</td>
                    <td><span className="cost-pill">{mat.cost}</span></td>
                    <td>{mat.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 3: HOW TO MAKE IT & SOURCES */}
        {detailTab === 'diy' && (
          <div className="detail-section-container how-to-make-wrapper">
            <div className="section-title-wrap">
              <Sparkles size={24} className="eco-text" />
              <div>
                <h3>{selectedSolution.howToMake.title}</h3>
                <p>Time Required: <strong>{selectedSolution.howToMake.timeRequired}</strong></p>
              </div>
            </div>

            <div className="diy-tools-row glass-card">
              <h4>Required Hand Tools:</h4>
              <div className="tools-pills-list">
                {selectedSolution.howToMake.toolsNeeded.map((tool, idx) => (
                  <span key={idx} className="tool-pill">🛠️ {tool}</span>
                ))}
              </div>
            </div>

            <div className="local-vendors-card glass-card">
              <h4>📍 Recommended Local Material Suppliers:</h4>
              <div className="vendors-grid">
                {selectedSolution.howToMake.localVendors.map((ven, idx) => (
                  <div key={idx} className="vendor-item-card glass-card">
                    <h5>{ven.name}</h5>
                    <p>📍 {ven.location}</p>
                    <span className="contact-tag">📞 {ven.contact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: UNIQUE VIDEO GUIDE */}
        {detailTab === 'video' && (
          <VideoTab solution={selectedSolution} />
        )}

        {/* TAB 5: LEARN & FAQ */}
        {detailTab === 'faq' && (
          <div className="detail-section-container faq-section-wrapper">
            <div className="section-title-wrap">
              <HelpCircle size={24} className="eco-text" />
              <div>
                <h3>Frequently Asked Questions & Educational Notes</h3>
                <p>Common questions answered by Greenery Club mentors</p>
              </div>
            </div>

            <div className="faq-list-grid">
              {selectedSolution.learnFaq.map((faq, idx) => (
                <div key={idx} className="faq-item-card glass-card">
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

      {/* VISUAL USER JOURNEY FLOWCHART (Prompt Requirement 3) */}
      <UserJourneyFlowchart />

      {/* Grid: 10-Min Solutions Video + Live Activity Stream */}
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

        {/* Live Stream Feed */}
        <div className="community-live-feed glass-card">
          <div className="sidebar-heading">
            <Users size={20} className="eco-text" />
            <h3>Live Action Stream</h3>
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

      {/* Role Filter Pills Bar */}
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
