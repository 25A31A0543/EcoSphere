import React from 'react';
import { Globe, Leaf, AlertTriangle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function EcoSphereCore({ activeDashboard, onSelectDashboard }) {
  return (
    <div className="ecosphere-core-wrapper">
      <div className="core-hero-intro">
        <span className="hero-pill">⚡ Pragati Environmental Command Center</span>
        <h2 className="core-headline">
          One Platform. Dual Perspectives. <br />
          <span className="gradient-text">Understand the Threat. Unleash the Solution.</span>
        </h2>
        <p className="core-subtext">
          Click the interactive central <strong>EcoSphere Core</strong> below to split into the <strong>Problem Dashboard 🌍</strong> for real-time pollution telemetry, or the <strong>Solution Dashboard 🌱</strong> to activate small-scale green actions.
        </p>
      </div>

      {/* Central Interactive Split Sphere */}
      <div className={`central-sphere-container ${activeDashboard ? `mode-${activeDashboard}` : ''}`}>
        {/* Central Core Sphere Button */}
        <div 
          className="eco-sphere-core-button"
          onClick={() => onSelectDashboard(activeDashboard === 'problem' ? 'solution' : 'problem')}
        >
          <div className="sphere-inner">
            <Globe className="sphere-globe-icon spinning-globe" size={54} />
            <span className="sphere-label">EcoSphere Core</span>
            <span className="sphere-sub">Click to Switch View</span>
          </div>
        </div>

        {/* Split Dashboard Triggers */}
        <div className="sphere-split-actions">
          {/* Problem Dashboard Trigger */}
          <div 
            className={`split-dashboard-card problem-card ${activeDashboard === 'problem' ? 'active' : ''}`}
            onClick={() => onSelectDashboard('problem')}
          >
            <div className="card-badge problem-badge">
              <AlertTriangle size={15} />
              <span>EARTH IN PERIL</span>
            </div>
            <div className="card-icon-wrap problem-icon-wrap">
              <Globe size={32} />
            </div>
            <h3 className="card-title">Problem Dashboard 🌍</h3>
            <p className="card-desc">
              Watch 10-min documentary on wildlife impact & human health, monitor real-time plastic dumping growth, AQI index, and plastic contamination statistics.
            </p>
            <div className="card-cta problem-cta">
              <span>Inspect Threat Dashboard</span>
              <ArrowRight size={18} />
            </div>
          </div>

          {/* Solution Dashboard Trigger */}
          <div 
            className={`split-dashboard-card solution-card ${activeDashboard === 'solution' ? 'active' : ''}`}
            onClick={() => onSelectDashboard('solution')}
          >
            <div className="card-badge solution-badge">
              <Leaf size={15} />
              <span>ACTIONABLE BLUEPRINT</span>
            </div>
            <div className="card-icon-wrap solution-icon-wrap">
              <ShieldCheck size={32} />
            </div>
            <h3 className="card-title">Solution Dashboard 🌱</h3>
            <p className="card-desc">
              Watch 10-min zero-waste solution video, view live community activities stream, and explore 7 actionable small-scale solutions with step-by-step guides.
            </p>
            <div className="card-cta solution-cta">
              <span>Unleash Green Solutions</span>
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
