import React, { useState, useEffect } from 'react';
import { 
  Play, 
  AlertTriangle, 
  Activity, 
  Flame, 
  ZapOff, 
  Clock, 
  TrendingUp, 
  Eye, 
  FileText,
  Radio,
  Share2
} from 'lucide-react';
import { MOCK_VIDEOS, LIVE_POLLUTION_METRICS, PROBLEM_DISADVANTAGES } from '../data/mockData';

export default function ProblemDashboard() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [liveCounter, setLiveCounter] = useState(LIVE_POLLUTION_METRICS.plasticDumpedPerSecKg);
  const videoData = MOCK_VIDEOS.problem;

  // Real-time counter animation incrementing every second
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCounter((prev) => +(prev + (Math.random() * 0.4 + 0.1)).toFixed(1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-panel problem-dashboard-panel">
      {/* Dashboard Header */}
      <div className="panel-header problem-panel-header">
        <div className="panel-header-title">
          <div className="header-badge problem-pill">
            <Radio size={14} className="animated-pulse" />
            <span>REAL-TIME THREAT MONITOR</span>
          </div>
          <h2>Problem Dashboard 🌍</h2>
          <p>
            Understanding the crisis: Human & animal health hazards, microplastic contamination, and unchecked single-use plastic growth.
          </p>
        </div>
      </div>

      {/* Grid Layout: Video + Live Monitoring */}
      <div className="problem-grid-top">
        {/* Main 10-Minute Video Player Section */}
        <div className="video-player-container glass-card problem-border">
          <div className="video-header-info">
            <div className="video-title-row">
              <span className="video-tag">DOCUMENTARY (10:00)</span>
              <h3>{videoData.title}</h3>
            </div>
            <p className="video-desc">{videoData.description}</p>
          </div>

          {/* Video Iframe Container */}
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
            <h4><Clock size={16} /> Interactive 10-Minute Chapters:</h4>
            <div className="chapters-list">
              {videoData.chapters.map((ch, idx) => (
                <button 
                  key={idx} 
                  className={`chapter-chip ${activeChapterIndex === idx ? 'active' : ''}`}
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

        {/* Live Monitoring Telemetry Sidebar */}
        <div className="telemetry-sidebar glass-card">
          <div className="sidebar-heading">
            <TrendingUp size={20} className="warning-text" />
            <h3>Live Pollution Telemetry</h3>
            <span className="live-tag">LIVE FEED</span>
          </div>

          <div className="telemetry-cards-stack">
            {/* Real-time plastic counter */}
            <div className="metric-box alert-box">
              <div className="metric-top">
                <span>Plastic Waste Dumped (Global)</span>
                <Activity size={18} />
              </div>
              <div className="metric-value warning-text">{liveCounter.toLocaleString()} <small>kg/sec</small></div>
              <p className="metric-foot">Increasing by ~420 kg every single second worldwide.</p>
            </div>

            {/* Microplastics */}
            <div className="metric-box">
              <div className="metric-top">
                <span>Ocean Microplastic Index</span>
                <Eye size={18} />
              </div>
              <div className="metric-value">15,420,900 <small>tons</small></div>
              <div className="progress-bar-wrap">
                <div className="progress-fill warning-fill" style={{ width: '84%' }}></div>
              </div>
              <p className="metric-foot">84% of marine life tested positive for microplastic ingestion.</p>
            </div>

            {/* AQI */}
            <div className="metric-box">
              <div className="metric-top">
                <span>Surampalem & Campus AQI</span>
                <Flame size={18} opacity={0.8} />
              </div>
              <div className="metric-value amber-text">{LIVE_POLLUTION_METRICS.airQualityIndex} <small>AQI (Moderate-Unhealthy)</small></div>
              <p className="metric-foot">Elevated PM2.5 from open plastic burning in surrounding fields.</p>
            </div>

            {/* Landfill Capacity */}
            <div className="metric-box">
              <div className="metric-top">
                <span>Local Landfill Capacity Used</span>
                <AlertTriangle size={18} />
              </div>
              <div className="metric-value">{LIVE_POLLUTION_METRICS.landfillCapacityUsedPct}%</div>
              <div className="progress-bar-wrap">
                <div className="progress-fill alert-fill" style={{ width: `${LIVE_POLLUTION_METRICS.landfillCapacityUsedPct}%` }}></div>
              </div>
              <p className="metric-foot">Estimated exhaustion in 14 months without waste diversion.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Disadvantages & Hazards Panel */}
      <div className="disadvantages-section">
        <div className="section-title-wrap">
          <AlertTriangle size={24} className="warning-text" />
          <div>
            <h3>Disadvantages Panel: Severe Impact of Plastic & Pollution</h3>
            <p>Empirical evidence of damage across ecosystems, biological pathways, and human community health.</p>
          </div>
        </div>

        <div className="disadvantages-cards-grid">
          {PROBLEM_DISADVANTAGES.map((dis) => (
            <div key={dis.id} className="disadvantage-card glass-card">
              <div className="dis-image-box">
                <img src={dis.image} alt={dis.title} />
                <span className={`severity-badge ${dis.severity.toLowerCase()}`}>
                  {dis.severity} SEVERITY
                </span>
              </div>
              <div className="dis-body">
                <h4>{dis.title}</h4>
                <div className="dis-stat">
                  <span>Measured Impact:</span>
                  <strong>{dis.stat}</strong>
                </div>
                <p className="dis-desc">{dis.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
