import React, { useState } from 'react';
import { 
  User, 
  Store, 
  Sparkles, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  BarChart2, 
  Zap, 
  RefreshCw,
  ShoppingBag,
  Leaf
} from 'lucide-react';
import { addEcoCoins } from '../data/storage';

export default function EcoDashboard({ user, onUpdateUser }) {
  const [mode, setMode] = useState('personal'); // 'personal' | 'vendor'
  const [personalBagsSaved, setPersonalBagsSaved] = useState(42);
  const [vendorEcoBagsSold, setVendorEcoBagsSold] = useState(320);
  const [vendorPlasticReplaced, setVendorPlasticReplaced] = useState(320);
  const [aiPromptCategory, setAiPromptCategory] = useState('student');

  const [aiSuggestions, setAiSuggestions] = useState([
    {
      title: "Replace Plastic Bottled Water at Canteen",
      desc: "Carry a 750ml reusable steel flask. Refill for free at campus RO water stations.",
      impact: "-1.2 kg plastic/month",
      coins: 40
    },
    {
      title: "Adopt Areca Palm Leaf Packaging",
      desc: "Small food vendors switching to palm plates receive a 15% discount on bulk orders from Pragati Eco-Store.",
      impact: "-45 kg plastic/month",
      coins: 150
    },
    {
      title: "DIY T-Shirt Grocery Bag Hack",
      desc: "Upcycle old festival T-shirts into durable no-sew shopping totes in 10 minutes.",
      impact: "-15 plastic bags/month",
      coins: 30
    }
  ]);

  const handleLogPersonalAction = () => {
    setPersonalBagsSaved((prev) => prev + 5);
    const newCoins = addEcoCoins(25, "Logged 5 Reusable Bags Used");
    onUpdateUser({ ...user, ecoCoins: newCoins, plasticSavedKg: +(user.plasticSavedKg + 0.25).toFixed(1) });
  };

  const handleLogVendorSale = () => {
    setVendorEcoBagsSold((prev) => prev + 10);
    setVendorPlasticReplaced((prev) => prev + 10);
    const newCoins = addEcoCoins(50, "Vendor Logged 10 Eco Bags Sold");
    onUpdateUser({ ...user, ecoCoins: newCoins });
  };

  return (
    <div className="feature-container eco-dashboard-container">
      {/* Mode Switcher Banner */}
      <div className="mode-switcher-banner glass-card">
        <div className="mode-info">
          <h2>Eco Dashboard Metrics</h2>
          <p>Switch between Personal Eco-Impact and Small Vendor Green Operations telemetry.</p>
        </div>
        <div className="mode-toggle-buttons">
          <button 
            className={`mode-btn ${mode === 'personal' ? 'active' : ''}`}
            onClick={() => setMode('personal')}
          >
            <User size={18} />
            <span>Personal Mode</span>
          </button>

          <button 
            className={`mode-btn ${mode === 'vendor' ? 'active' : ''}`}
            onClick={() => setMode('vendor')}
          >
            <Store size={18} />
            <span>Vendor Mode</span>
          </button>
        </div>
      </div>

      {/* Main Mode Telemetry Grid */}
      {mode === 'personal' ? (
        <div className="telemetry-grid personal-mode-grid">
          {/* Card 1: Plastic Saved */}
          <div className="futuristic-card glass-card">
            <div className="card-top">
              <span className="card-tag">PERSONAL IMPACT</span>
              <Leaf size={22} className="eco-text" />
            </div>
            <h3>Single-Use Bags Avoided</h3>
            <div className="big-stat">{personalBagsSaved} <small>Bags</small></div>
            <div className="progress-bar-wrap">
              <div className="progress-fill eco-fill" style={{ width: '75%' }}></div>
            </div>
            <p className="card-sub">Prevented ~{(personalBagsSaved * 0.015).toFixed(2)} kg of polythene from entering landfills.</p>
            <button className="btn btn-primary log-btn" onClick={handleLogPersonalAction}>
              + Log 5 Bags Avoided (+25 EcoCoins)
            </button>
          </div>

          {/* Card 2: Carbon Footprint */}
          <div className="futuristic-card glass-card">
            <div className="card-top">
              <span className="card-tag">CARBON TELEMETRY</span>
              <TrendingUp size={22} className="eco-text" />
            </div>
            <h3>Carbon Abatement Score</h3>
            <div className="big-stat">18.5 <small>kg CO₂e</small></div>
            <div className="badge-pills-row">
              <span className="mini-badge">Green Level 3</span>
              <span className="mini-badge">Top 10% Campus</span>
            </div>
            <p className="card-sub">Equivalent to planting 2 mature neem trees on campus.</p>
          </div>

          {/* Card 3: EcoCoins Balance */}
          <div className="futuristic-card glass-card">
            <div className="card-top">
              <span className="card-tag">GAMIFIED BALANCE</span>
              <Award size={22} className="gold-text" />
            </div>
            <h3>EcoCoins Wallet</h3>
            <div className="big-stat gold-text">🪙 {user.ecoCoins}</div>
            <p className="card-sub">Redeemable for college canteen discounts and real tree plantations.</p>
          </div>
        </div>
      ) : (
        <div className="telemetry-grid vendor-mode-grid">
          {/* Vendor Card 1 */}
          <div className="futuristic-card glass-card vendor-card">
            <div className="card-top">
              <span className="card-tag">VENDOR OPERATIONS</span>
              <ShoppingBag size={22} className="eco-text" />
            </div>
            <h3>Eco-Bags Distributed</h3>
            <div className="big-stat">{vendorEcoBagsSold} <small>Units</small></div>
            <p className="card-sub">Replaced {vendorPlasticReplaced} single-use polythene carry bags at store.</p>
            <button className="btn btn-secondary log-btn" onClick={handleLogVendorSale}>
              + Log 10 Eco Bags Sold (+50 EcoCoins)
            </button>
          </div>

          {/* Vendor Card 2 */}
          <div className="futuristic-card glass-card vendor-card">
            <div className="card-top">
              <span className="card-tag">CUSTOMER GREEN LOYALTY</span>
              <Store size={22} className="eco-text" />
            </div>
            <h3>Green Customer Retention</h3>
            <div className="big-stat">88% <small>Repeat Green Buyers</small></div>
            <p className="card-sub">Customers carrying reusable bags earned 1,600 total store points.</p>
          </div>

          {/* Vendor Card 3 */}
          <div className="futuristic-card glass-card vendor-card">
            <div className="card-top">
              <span className="card-tag">ECO COMPLIANCE</span>
              <CheckCircle size={22} className="eco-text" />
            </div>
            <h3>Pragati Greenery Seal</h3>
            <div className="big-stat green-text">VERIFIED</div>
            <p className="card-sub">Certified 100% Plastic-Carry-Bag Free Vendor.</p>
          </div>
        </div>
      )}

      {/* AI Suggestions Engine Section */}
      <div className="ai-suggestions-section glass-card">
        <div className="ai-header">
          <div className="ai-title-wrap">
            <Sparkles size={24} className="ai-sparkle-icon" />
            <div>
              <h3>AI Sustainability Assistant Engine</h3>
              <p>Personalized micro-actions based on your profile and daily consumption habits.</p>
            </div>
          </div>
          <div className="category-select">
            <label>Tailor Suggestions for:</label>
            <select 
              value={aiPromptCategory} 
              onChange={(e) => setAiPromptCategory(e.target.value)}
            >
              <option value="student">College Student (Hostels/Campus)</option>
              <option value="vendor">Small Vendor / Eatery Owner</option>
              <option value="household">Local Household / Citizen</option>
            </select>
          </div>
        </div>

        <div className="ai-suggestions-list">
          {aiSuggestions.map((sug, i) => (
            <div key={i} className="ai-suggestion-card glass-card">
              <div className="sug-header">
                <h4>{sug.title}</h4>
                <span className="coins-badge">+{sug.coins} EcoCoins</span>
              </div>
              <p>{sug.desc}</p>
              <div className="sug-footer">
                <span className="impact-tag"><Zap size={14} /> Estimated Impact: {sug.impact}</span>
                <button className="btn btn-outline-sm">Accept Challenge</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
