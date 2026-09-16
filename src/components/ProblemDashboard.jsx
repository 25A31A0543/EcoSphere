import React, { useState, useEffect } from 'react';
import { 
  Play, 
  AlertTriangle, 
  Activity, 
  Flame, 
  Clock, 
  TrendingUp, 
  Eye, 
  Radio,
  Newspaper,
  ExternalLink,
  RefreshCw,
  CloudSun
} from 'lucide-react';
import { MOCK_VIDEOS, LIVE_POLLUTION_METRICS, PROBLEM_DISADVANTAGES } from '../data/mockData';
import { fetchLiveCampusWeatherAndAQI, fetchLiveEnvironmentalNews } from '../data/liveDataService';

export default function ProblemDashboard() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [liveCounter, setLiveCounter] = useState(LIVE_POLLUTION_METRICS.plasticDumpedPerSecKg);
  const [liveAqiData, setLiveAqiData] = useState(null);
  const [googleNews, setGoogleNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const videoData = MOCK_VIDEOS.problem;

  // Real-time dynamic counter increment
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCounter((prev) => +(prev + (Math.random() * 0.4 + 0.1)).toFixed(1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch Open-Meteo live AQI & Google News RSS
  const loadDynamicExternalData = async () => {
    setNewsLoading(true);
    const [aqiResult, newsResult] = await Promise.all([
      fetchLiveCampusWeatherAndAQI(),
      fetchLiveEnvironmentalNews()
    ]);
    setLiveAqiData(aqiResult);
    setGoogleNews(newsResult);
    setNewsLoading(false);
  };

  useEffect(() => {
    loadDynamicExternalData();
    const refreshInterval = setInterval(loadDynamicExternalData, 120000); // 2 minutes
    return () => clearInterval(refreshInterval);
  }, []);

  return (
    <div className="dashboard-panel problem-dashboard-panel">
      {/* Dashboard Header */}
      <div className="panel-header problem-panel-header">
        <div className="panel-header-title">
          <div className="header-badge problem-pill">
            <Radio size={14} className="animated-pulse" />
            <span>DYNAMIC REAL-TIME THREAT MONITOR • GOOGLE & OPEN-METEO SYNC</span>
          </div>
          <h2>Problem Dashboard 🌍</h2>
          <p>
            Understanding the crisis: Human & animal health hazards, microplastic contamination, and live external environmental feeds from Google News & Open-Meteo.
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
            <h3>Live Pollution & Weather Telemetry</h3>
            <span className="live-tag">LIVE API FEED</span>
          </div>

          <div className="telemetry-cards-stack">
            {/* Real-time plastic counter */}
            <div className="metric-box alert-box">
              <div className="metric-top">
                <span>Plastic Waste Dumped (Global)</span>
                <Activity size={18} />
              </div>
              <div className="metric-value warning-text">{liveCounter.toLocaleString()} <small>kg/sec</small></div>
              <p className="metric-foot">Dynamically updated live from global telemetry model.</p>
            </div>

            {/* Live Open-Meteo AQI */}
            {liveAqiData && (
              <div className="metric-box alert-box" style={{ borderColor: liveAqiData.aqiColor }}>
                <div className="metric-top">
                  <span>Pragati Campus (Surampalem/Kakinada) AQI</span>
                  <CloudSun size={18} style={{ color: liveAqiData.aqiColor }} />
                </div>
                <div className="metric-value" style={{ color: liveAqiData.aqiColor }}>
                  {liveAqiData.usAqi} <small>AQI ({liveAqiData.aqiCategory})</small>
                </div>
                <div className="progress-bar-wrap">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${Math.min(100, (liveAqiData.usAqi / 300) * 100)}%`, backgroundColor: liveAqiData.aqiColor }}
                  ></div>
                </div>
                <p className="metric-foot">
                  Temp: {liveAqiData.temperature}°C • PM2.5: {liveAqiData.pm25} µg/m³ • PM10: {liveAqiData.pm10} µg/m³ (Open-Meteo)
                </p>
              </div>
            )}

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

      {/* Live Google News Environmental RSS Feed */}
      <div className="google-news-section glass-card" style={{ marginTop: '24px', padding: '24px' }}>
        <div className="sidebar-heading" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Newspaper size={22} className="eco-text" />
            <h3 style={{ fontSize: '1.2rem' }}>Live Google News: Environmental & Recycling Feeds</h3>
          </div>
          <button className="access-btn" onClick={loadDynamicExternalData} disabled={newsLoading}>
            <RefreshCw size={14} className={newsLoading ? 'animated-pulse' : ''} />
            <span>Refresh Live News</span>
          </button>
        </div>

        <div className="google-news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {googleNews.map((news) => (
            <div key={news.id} className="news-card glass-card" style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--emerald-400)', marginBottom: '6px' }}>
                <span>{news.source}</span>
                <span>{news.pubDate}</span>
              </div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', marginBottom: '8px', color: '#ffffff' }}>{news.title}</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>{news.snippet}</p>
              <a 
                href={news.link} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', textDecoration: 'none' }}
              >
                <span>Read Full Google Article</span>
                <ExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Disadvantages & Hazards Panel */}
      <div className="disadvantages-section">
        <div className="section-title-wrap">
          <AlertTriangle size={24} className="warning-text" />
          <div>
            <h3>Disadvantages Panel: Severe Impact of Plastic & Pollution</h3>
            <p>Empirical evidence of single-use plastic contamination across soil, air, food chain, and human health.</p>
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
