import React, { useState, useEffect } from 'react';
import { Globe, Trees, Activity, Award, CloudSun, RefreshCw } from 'lucide-react';
import { fetchLiveCampusWeatherAndAQI } from '../data/liveDataService';

export default function LiveImpactBanner() {
  const [totalPlasticKg, setTotalPlasticKg] = useState(14520.4);
  const [treesCount, setTreesCount] = useState(1280);
  const [co2ReducedTons, setCo2ReducedTons] = useState(48.5);
  const [liveWeather, setLiveWeather] = useState(null);
  const [isLoadingWeather, setIsLoadingWeather] = useState(true);

  const loadWeather = async () => {
    setIsLoadingWeather(true);
    const weatherData = await fetchLiveCampusWeatherAndAQI();
    setLiveWeather(weatherData);
    setIsLoadingWeather(false);
  };

  useEffect(() => {
    loadWeather();
    const weatherInterval = setInterval(loadWeather, 60000); // refresh every 1 minute
    const statInterval = setInterval(() => {
      setTotalPlasticKg((prev) => +(prev + 0.35).toFixed(1));
      setCo2ReducedTons((prev) => +(prev + 0.01).toFixed(2));
    }, 2500);

    return () => {
      clearInterval(weatherInterval);
      clearInterval(statInterval);
    };
  }, []);

  return (
    <div className="live-impact-banner glass-card">
      <div className="impact-container">
        <div className="impact-header-label">
          <Activity size={18} className="eco-text animated-pulse" />
          <span>PRAGATI CAMPUS LIVE IMPACT TELEMETRY</span>
          {liveWeather && (
            <span className="live-weather-badge" style={{ borderColor: liveWeather.aqiColor }}>
              <CloudSun size={14} className="eco-text" />
              <span>{liveWeather.temperature}°C • AQI {liveWeather.usAqi} ({liveWeather.aqiCategory})</span>
            </span>
          )}
        </div>

        <div className="impact-stats-row">
          <div className="impact-stat-item">
            <Globe className="stat-icon eco-text" size={24} />
            <div>
              <div className="stat-value">{totalPlasticKg.toLocaleString()} <small>kg</small></div>
              <div className="stat-label">Plastic Reduced by Greenery Club</div>
            </div>
          </div>

          <div className="impact-divider"></div>

          <div className="impact-stat-item">
            <Trees className="stat-icon eco-text" size={24} />
            <div>
              <div className="stat-value">{treesCount.toLocaleString()} <small>Trees</small></div>
              <div className="stat-label">Planted around Pragati Campus</div>
            </div>
          </div>

          <div className="impact-divider"></div>

          <div className="impact-stat-item">
            <Award className="stat-icon gold-text" size={24} />
            <div>
              <div className="stat-value">{co2ReducedTons} <small>Tons</small></div>
              <div className="stat-label">CO₂ Emissions Abated</div>
            </div>
          </div>

          <div className="impact-divider"></div>

          {liveWeather && (
            <div className="impact-stat-item live-aqi-stat">
              <div className="aqi-circle-badge" style={{ backgroundColor: `${liveWeather.aqiColor}22`, border: `2px solid ${liveWeather.aqiColor}` }}>
                <span className="aqi-num" style={{ color: liveWeather.aqiColor }}>{liveWeather.usAqi}</span>
              </div>
              <div>
                <div className="stat-value" style={{ color: liveWeather.aqiColor }}>{liveWeather.aqiCategory}</div>
                <div className="stat-label">Open-Meteo AQI • Kakinada/Surampalem</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
