import React, { useState } from 'react';
import { 
  Radio, 
  Cpu, 
  MapPin, 
  Trophy, 
  Battery, 
  CheckCircle2, 
  AlertCircle, 
  Code, 
  ExternalLink,
  Zap,
  BookOpen
} from 'lucide-react';
import { IOT_BINS_TELEMETRY } from '../data/mockData';
import { addEcoCoins } from '../data/storage';

export default function SmartRecyclingHub({ user, onUpdateUser, onNavigateToSection }) {
  const [bins, setBins] = useState(IOT_BINS_TELEMETRY);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const challenges = [
    {
      id: "ch_1",
      title: "Deposit 10 PET Bottles at Smart Bin #1",
      reward: 100,
      desc: "Scan your QR code at Pragati Canteen Smart Bin before dropping bottles.",
      progress: "8 / 10 Bottles"
    },
    {
      id: "ch_2",
      title: "Build & Register DIY Ultrasonic Bin",
      reward: 400,
      desc: "Assemble ESP32 smart bin module using our DIY code guide.",
      progress: "Completed!"
    },
    {
      id: "ch_3",
      title: "E-Waste Recycling Drop-Off",
      reward: 150,
      desc: "Bring old laptop batteries or cable wires to campus e-waste hub.",
      progress: "0 / 1 Unit"
    }
  ];

  const recyclingMapPoints = [
    { id: "m1", name: "Pragati Main Gate Eco Collection Point", type: "Plastic & PET Bottles", hours: "08:00 AM - 06:00 PM" },
    { id: "m2", name: "Surampalem E-Waste Disposal Center", type: "Electronics & Batteries", hours: "09:00 AM - 05:00 PM" },
    { id: "m3", name: "Kakinada Municipal Plastic Recycling Depot", type: "Hard Plastics & Packaging", hours: "24/7 Drop Box" }
  ];

  const handleClaimChallenge = (id, reward) => {
    if (completedChallenges.includes(id)) return;
    const newCoins = addEcoCoins(reward, `Completed Recycling Challenge ${id}`);
    setCompletedChallenges((prev) => [...prev, id]);
    onUpdateUser({ ...user, ecoCoins: newCoins });
    alert(`🎉 Challenge Completed! +${reward} EcoCoins added to your wallet.`);
  };

  return (
    <div className="feature-container recycling-hub-container">
      {/* Hub Header */}
      <div className="panel-header recycling-header">
        <div className="panel-header-title">
          <div className="header-badge recycling-pill">
            <Radio size={14} className="animated-pulse" />
            <span>IOT SMART INFRASTRUCTURE</span>
          </div>
          <h2>Smart Recycling Hub ♻️</h2>
          <p>
            Real-time IoT smart bin telemetry across Pragati campus, DIY IoT dustbin blueprints, campus collection maps, and weekly recycling challenges.
          </p>
        </div>
      </div>

      {/* Grid: Telemetry Bins + DIY Blueprint Promo */}
      <div className="recycling-top-grid">
        {/* Real-Time IoT Bins Telemetry */}
        <div className="telemetry-bins-card glass-card">
          <div className="sidebar-heading">
            <Cpu size={20} className="eco-text" />
            <h3>Campus Smart Bin Sensor Telemetry</h3>
            <span className="live-tag eco-live">ESP32 MESH</span>
          </div>

          <div className="iot-bins-grid">
            {bins.map((bin) => (
              <div key={bin.id} className="iot-bin-card glass-card">
                <div className="bin-header">
                  <span className="bin-id">{bin.id.toUpperCase()}</span>
                  <span className={`status-pill ${bin.status.toLowerCase()}`}>
                    {bin.status === 'ONLINE' ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
                    {bin.status}
                  </span>
                </div>
                <h4>{bin.location}</h4>

                <div className="sensor-readout-row">
                  <div className="sensor-item">
                    <span>Fill Level (Ultrasonic)</span>
                    <strong className={bin.fillLevel > 80 ? 'danger-text' : ''}>{bin.fillLevel}%</strong>
                    <div className="progress-bar-wrap">
                      <div 
                        className={`progress-fill ${bin.fillLevel > 80 ? 'alert-fill' : 'eco-fill'}`} 
                        style={{ width: `${bin.fillLevel}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="sensor-item">
                    <span>Plastic Mass Collected</span>
                    <strong>{bin.weightKg} kg</strong>
                  </div>

                  <div className="sensor-item">
                    <span>Battery Status</span>
                    <span><Battery size={14} /> {bin.batteryPct}%</span>
                  </div>
                </div>

                <div className="bin-foot">Last sensor ping: {bin.lastDumped}</div>
              </div>
            ))}
          </div>
        </div>

        {/* DIY Smart Bin Promo Card */}
        <div className="diy-smart-bin-promo glass-card">
          <div className="promo-badge">
            <Code size={16} />
            <span>COLLEGE MINI PROJECT</span>
          </div>
          <h3>Build Your Own Smart IoT Recycling Bin</h3>
          <p>
            Learn how to assemble an ESP32 ultrasonic smart dustbin with automated servo lid control and live GCP Cloud logging.
          </p>
          <ul className="promo-highlights">
            <li><CheckCircle2 size={14} /> Complete Wiring Schematic</li>
            <li><CheckCircle2 size={14} /> Copy-Paste Arduino C++ Source Code</li>
            <li><CheckCircle2 size={14} /> Under ₹800 Hardware Budget</li>
          </ul>
          <button 
            className="btn btn-primary"
            onClick={() => onNavigateToSection('guide')}
          >
            <BookOpen size={16} />
            <span>Open IoT Bin Masterclass</span>
          </button>
        </div>
      </div>

      {/* Grid Bottom: Recycling Map + Gamified Challenges */}
      <div className="recycling-bottom-grid">
        {/* Map of Local Recycling Points */}
        <div className="recycling-map-card glass-card">
          <div className="sidebar-heading">
            <MapPin size={20} className="eco-text" />
            <h3>Campus & Regional Recycling Collection Map</h3>
          </div>

          <div className="map-search-bar">
            <input type="text" placeholder="Search collection center or drop-off point..." readOnly value="Pragati Engineering College Area (Surampalem)" />
          </div>

          <div className="points-list">
            {recyclingMapPoints.map((pt) => (
              <div key={pt.id} className="map-point-item">
                <MapPin size={18} className="eco-text" />
                <div className="point-info">
                  <strong>{pt.name}</strong>
                  <div className="point-meta">
                    <span className="type-tag">{pt.type}</span>
                    <span className="hours-tag">{pt.hours}</span>
                  </div>
                </div>
                <button className="btn btn-outline-sm">Directions</button>
              </div>
            ))}
          </div>
        </div>

        {/* Gamified Recycling Challenges */}
        <div className="recycling-challenges-card glass-card">
          <div className="sidebar-heading">
            <Trophy size={20} className="gold-text" />
            <h3>Weekly Recycling Challenges</h3>
          </div>

          <div className="challenges-stack">
            {challenges.map((ch) => {
              const isClaimed = completedChallenges.includes(ch.id);
              return (
                <div key={ch.id} className="challenge-item glass-card">
                  <div className="ch-top">
                    <h4>{ch.title}</h4>
                    <span className="reward-pill">+{ch.reward} EcoCoins</span>
                  </div>
                  <p>{ch.desc}</p>
                  <div className="ch-foot">
                    <span className="progress-text">Status: {ch.progress}</span>
                    <button 
                      className={`btn ${isClaimed ? 'btn-disabled' : 'btn-gold'}`}
                      onClick={() => handleClaimChallenge(ch.id, ch.reward)}
                      disabled={isClaimed}
                    >
                      {isClaimed ? 'Reward Claimed ✓' : 'Complete & Claim Coins'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
