import React, { useState, useEffect } from 'react';
import { Globe, Leaf, Trees, Activity, Award } from 'lucide-react';

export default function LiveImpactBanner() {
  const [totalPlasticKg, setTotalPlasticKg] = useState(14520);
  const [treesCount, setTreesCount] = useState(1280);
  const [co2ReducedTons, setCo2ReducedTons] = useState(48.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalPlasticKg((prev) => +(prev + 0.3).toFixed(1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-impact-banner glass-card">
      <div className="impact-container">
        <div className="impact-header-label">
          <Activity size={18} className="eco-text animated-pulse" />
          <span>ECOSPHERE COMMUNITY IMPACT COUNTER</span>
        </div>

        <div className="impact-stats-row">
          <div className="impact-stat-item">
            <Globe className="stat-icon eco-text" size={24} />
            <div>
              <div className="stat-value">{totalPlasticKg.toLocaleString()} <small>kg</small></div>
              <div className="stat-label">Plastic Reduced by Users</div>
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
        </div>
      </div>
    </div>
  );
}
