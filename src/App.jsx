import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DynamicBackground from './components/DynamicBackground';
import LiveImpactBanner from './components/LiveImpactBanner';
import EcoSphereCore from './components/EcoSphereCore';
import ProblemDashboard from './components/ProblemDashboard';
import SolutionDashboard from './components/SolutionDashboard';
import EcoDashboard from './components/EcoDashboard';
import GreenMarketplace from './components/GreenMarketplace';
import SmartRecyclingHub from './components/SmartRecyclingHub';
import SustainableGuide from './components/SustainableGuide';
import TransportPlanner from './components/TransportPlanner';
import EcoRewards from './components/EcoRewards';
import PhotoProblemReporter from './components/PhotoProblemReporter';
import EcoBotModal from './components/EcoBotModal';
import GoogleAuthModal from './components/GoogleAuthModal';
import { Bot } from 'lucide-react';
import { getStoredUser, saveStoredUser } from './data/storage';

export default function App() {
  const [user, setUser] = useState(getStoredUser());
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'photo-reporter' | 'eco-dashboard' | 'marketplace' | 'recycling-hub' | 'community' | 'guide' | 'transport' | 'rewards'
  const [activeDashboardMode, setActiveDashboardMode] = useState(null); // null | 'problem' | 'solution'
  const [themeMode, setThemeMode] = useState('bright'); // 'bright' | 'dark' | 'high-contrast'
  const [currentLang, setCurrentLang] = useState('en'); // 'en' | 'te' | 'hi'
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isEcoBotOpen, setIsEcoBotOpen] = useState(false);

  useEffect(() => {
    saveStoredUser(user);
  }, [user]);

  useEffect(() => {
    document.body.className = `theme-${themeMode}`;
    document.documentElement.setAttribute('data-theme', themeMode);
  }, [themeMode]);

  const handleSelectDashboard = (mode) => {
    setActiveDashboardMode(mode);
    setThemeMode(mode === 'problem' ? 'dark' : 'bright');
  };

  return (
    <div className={`app-root theme-${themeMode}`}>
      {/* Dynamic Animated Background Canvas */}
      <DynamicBackground 
        themeMode={themeMode} 
        currentDashboardMode={activeDashboardMode} 
      />

      {/* Main Header Component */}
      <Header 
        activeTheme={themeMode}
        onThemeChange={(newTheme) => setThemeMode(newTheme)}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        user={user}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          if (tab !== 'home') {
            setActiveDashboardMode(null);
          }
        }}
        currentLang={currentLang}
        onLangChange={(lang) => setCurrentLang(lang)}
        isVoiceActive={isVoiceActive}
        onToggleVoice={() => setIsVoiceActive(!isVoiceActive)}
      />

      {/* Main App Viewport */}
      <main className="app-main-viewport">
        {/* Live Community Impact Banner */}
        <LiveImpactBanner />

        {/* TAB ROUTING VIEWS */}
        {activeTab === 'home' && (
          <>
            {/* Central EcoSphere Interactive Core Split Button */}
            <EcoSphereCore 
              activeDashboard={activeDashboardMode}
              onSelectDashboard={handleSelectDashboard}
            />

            {/* Split View Content Render */}
            {activeDashboardMode === 'problem' && <ProblemDashboard />}
            {activeDashboardMode === 'solution' && (
              <SolutionDashboard 
                onNavigateToSection={(section) => setActiveTab(section)}
                user={user}
                onUpdateUser={(updated) => setUser(updated)}
              />
            )}
          </>
        )}

        {activeTab === 'photo-reporter' && (
          <PhotoProblemReporter 
            user={user} 
            onUpdateUser={(updated) => setUser(updated)}
            onNavigateToSection={(section) => setActiveTab(section)}
          />
        )}

        {activeTab === 'eco-dashboard' && (
          <EcoDashboard 
            user={user} 
            onUpdateUser={(updated) => setUser(updated)} 
          />
        )}

        {activeTab === 'marketplace' && (
          <GreenMarketplace 
            user={user} 
            onUpdateUser={(updated) => setUser(updated)} 
          />
        )}

        {activeTab === 'recycling-hub' && (
          <SmartRecyclingHub 
            user={user} 
            onUpdateUser={(updated) => setUser(updated)}
            onNavigateToSection={(section) => setActiveTab(section)}
          />
        )}

        {activeTab === 'guide' && (
          <SustainableGuide />
        )}

        {activeTab === 'transport' && (
          <TransportPlanner 
            user={user} 
            onUpdateUser={(updated) => setUser(updated)} 
          />
        )}

        {activeTab === 'rewards' && (
          <EcoRewards 
            user={user} 
            onUpdateUser={(updated) => setUser(updated)} 
          />
        )}
      </main>

      {/* Floating AI Assistant Trigger */}
      <button 
        className="floating-ecobot-btn"
        onClick={() => setIsEcoBotOpen(!isEcoBotOpen)}
      >
        <Bot size={20} />
        <span>EcoBot AI</span>
      </button>

      {/* EcoBot Chat Modal */}
      <EcoBotModal 
        isOpen={isEcoBotOpen}
        onClose={() => setIsEcoBotOpen(false)}
        user={user}
        onUpdateUser={(updated) => setUser(updated)}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          setIsEcoBotOpen(false);
        }}
      />

      {/* Google OAuth & GCP Cloud Modal */}
      <GoogleAuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        user={user}
        onUpdateUser={(updated) => setUser(updated)}
      />
    </div>
  );
}
