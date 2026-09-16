import React, { useState } from 'react';
import { 
  Cloud, 
  ShieldCheck, 
  Leaf, 
  Sun, 
  Moon, 
  User, 
  LogOut, 
  Award, 
  Sparkles,
  Layers,
  Globe,
  Camera,
  Volume2,
  Eye,
  Menu,
  X,
  Languages
} from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function Header({ 
  activeTheme, 
  onThemeChange, 
  onOpenAuthModal, 
  user, 
  activeTab, 
  onTabChange,
  currentLang,
  onLangChange,
  isVoiceActive,
  onToggleVoice
}) {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const handleVoiceNarrateHeader = () => {
    onToggleVoice();
    if (!isVoiceActive && 'speechSynthesis' in window) {
      const text = `EcoSphere platform for Pragati Engineering College, Greenery Club, and EcoVision 360 Waste Management Club.`;
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <header className="site-header">
      {/* Top Announcement Bar */}
      <div className="header-top-bar">
        <div className="ticker-content">
          <span className="ticker-badge">⚡ GCP CLOUD SYNC</span>
          <span className="ticker-text">
            Pragati Greenery Drive: 1,420 kg Plastic Saved • 100+ DIY IoT Bins Active • Greenery &amp; EcoVision 360° Clubs Active
          </span>
        </div>

        {/* Accessibility Toolbar */}
        <div className="accessibility-toolbar">
          <button 
            className={`access-btn ${isVoiceActive ? 'active' : ''}`} 
            onClick={handleVoiceNarrateHeader}
            title={t.voiceNarrator}
          >
            <Volume2 size={14} />
            <span className="hide-mobile">{t.voiceNarrator}</span>
          </button>

          <button 
            className={`access-btn ${activeTheme === 'high-contrast' ? 'active' : ''}`}
            onClick={() => onThemeChange(activeTheme === 'high-contrast' ? 'bright' : 'high-contrast')}
            title={t.highContrast}
          >
            <Eye size={14} />
            <span className="hide-mobile">{t.highContrast}</span>
          </button>

          <div className="lang-switcher-box">
            <Languages size={14} />
            <select value={currentLang} onChange={(e) => onLangChange(e.target.value)}>
              <option value="en">English</option>
              <option value="te">తెలుగు (Telugu)</option>
              <option value="hi">हिंदी (Hindi)</option>
            </select>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          MAIN HEADER: [Pragati LEFT] [EcoSphere CENTER] [Clubs RIGHT]
          ═══════════════════════════════════════════════════════════ */}
      <div className="header-main-container">

        {/* ── LEFT: Pragati Engineering College & Rotaract Club Logos ── */}
        <div className="header-left-brands-group">
          {/* 1. College Name & Logo */}
          <div className="college-brand-card" title="Pragati Engineering College (Autonomous)">
            <img
              src="/pragati-college-logo.png"
              alt="Pragati Engineering College"
              className="college-brand-img"
            />
          </div>

          {/* 2. Rotaract Club Logo & Name */}
          <div className="rotaract-brand-card" title="Rotaract Club of Pragati Surampalem Central">
            <img
              src="/rotaract-club-logo.jpg"
              alt="Rotaract Club of Pragati Surampalem Central"
              className="rotaract-brand-img"
            />
          </div>
        </div>

        {/* ── CENTER: EcoSphere Brand + Nav ── */}
        <div className="header-center-block">
          {/* App Brand */}
          <div className="brand-group" onClick={() => onTabChange('home')} style={{ cursor: 'pointer' }}>
            <div className="logo-sphere">
              <Globe className="globe-spin" size={28} />
              <Leaf className="leaf-overlay" size={16} />
            </div>
            <div className="brand-titles">
              <h1 className="app-title">EcoSphere</h1>
              <p className="tagline">{t.tagline}</p>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="mobile-hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation */}
          <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <button 
              className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => { onTabChange('home'); setIsMobileMenuOpen(false); }}
            >
              <Globe size={16} />
              <span>{t.home}</span>
            </button>

            <button 
              className={`nav-btn ${activeTab === 'photo-reporter' ? 'active' : ''}`}
              onClick={() => { onTabChange('photo-reporter'); setIsMobileMenuOpen(false); }}
            >
              <Camera size={16} />
              <span>{t.reportProblem}</span>
            </button>

            <button 
              className={`nav-btn ${activeTab === 'eco-dashboard' ? 'active' : ''}`}
              onClick={() => { onTabChange('eco-dashboard'); setIsMobileMenuOpen(false); }}
            >
              <Layers size={16} />
              <span>{t.ecoDashboard}</span>
            </button>

            <button 
              className={`nav-btn ${activeTab === 'marketplace' ? 'active' : ''}`}
              onClick={() => { onTabChange('marketplace'); setIsMobileMenuOpen(false); }}
            >
              <Sparkles size={16} />
              <span>{t.greenMarket}</span>
            </button>

            <button 
              className={`nav-btn ${activeTab === 'recycling-hub' ? 'active' : ''}`}
              onClick={() => { onTabChange('recycling-hub'); setIsMobileMenuOpen(false); }}
            >
              <Leaf size={16} />
              <span>{t.iotRecycling}</span>
            </button>

            <button 
              className={`nav-btn ${activeTab === 'guide' ? 'active' : ''}`}
              onClick={() => { onTabChange('guide'); setIsMobileMenuOpen(false); }}
            >
              <ShieldCheck size={16} />
              <span>{t.diyGuides}</span>
            </button>

            <button 
              className={`nav-btn ${activeTab === 'transport' ? 'active' : ''}`}
              onClick={() => { onTabChange('transport'); setIsMobileMenuOpen(false); }}
            >
              <Globe size={16} />
              <span>{t.transport}</span>
            </button>

            <button 
              className={`nav-btn ${activeTab === 'rewards' ? 'active' : ''}`}
              onClick={() => { onTabChange('rewards'); setIsMobileMenuOpen(false); }}
            >
              <Award size={16} />
              <span>{t.rewards}</span>
            </button>
          </nav>
        </div>

        {/* ── RIGHT: Actions ── */}
        <div className="clubs-right-group">
          {/* Theme + User Actions */}
          <div className="header-actions">
            <div className="theme-toggle-group hide-mobile">
              <button 
                className={`theme-btn ${activeTheme === 'bright' ? 'active' : ''}`}
                onClick={() => onThemeChange('bright')}
              >
                <Sun size={15} />
              </button>
              <button 
                className={`theme-btn ${activeTheme === 'dark' ? 'active' : ''}`}
                onClick={() => onThemeChange('dark')}
              >
                <Moon size={15} />
              </button>
            </div>

            <div className="user-account-wrapper">
              {user && user.isSignedIn ? (
                <div className="user-profile-pill" onClick={() => setShowUserDropdown(!showUserDropdown)}>
                  <img src={user.avatar} alt={user.name} className="user-avatar" />
                  <div className="user-meta hide-mobile">
                    <span className="user-name">{user.name}</span>
                    <span className="user-coins">🪙 {user.ecoCoins} Coins</span>
                  </div>
                </div>
              ) : (
                <button className="google-signin-btn" onClick={onOpenAuthModal}>
                  <svg className="google-svg" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span>Sign-In</span>
                </button>
              )}

              {showUserDropdown && (
                <div className="user-dropdown-menu">
                  <div className="dropdown-header">
                    <strong>{user.name}</strong>
                    <div className="dropdown-email">{user.email}</div>
                    <div className="dropdown-college">{user.college}</div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item" onClick={() => { onTabChange('rewards'); setShowUserDropdown(false); }}>
                    <Award size={16} />
                    <span>My Rewards ({user.ecoCoins} Coins)</span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item logout-item" onClick={onOpenAuthModal}>
                    <LogOut size={16} />
                    <span>Manage Account</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
