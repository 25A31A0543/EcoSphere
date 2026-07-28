import React, { useState } from 'react';
import { 
  Award, 
  Gift, 
  ShieldCheck, 
  Trees, 
  Coffee, 
  CheckCircle, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { deductEcoCoins } from '../data/storage';

export default function EcoRewards({ user, onUpdateUser }) {
  const [redeemedItems, setRedeemedItems] = useState([]);

  // Calculate current Tier
  const getTierInfo = (coins) => {
    if (coins >= 1500) return { name: "Platinum Eco-Warrior", color: "#E5E7EB", nextThreshold: 3000, nextName: "Master Eco-Guardian" };
    if (coins >= 800) return { name: "Gold Guardian", color: "#F59E0B", nextThreshold: 1500, nextName: "Platinum Eco-Warrior" };
    if (coins >= 400) return { name: "Silver Defender", color: "#9CA3AF", nextThreshold: 800, nextName: "Gold Guardian" };
    return { name: "Bronze Warrior", color: "#CD7F32", nextThreshold: 400, nextName: "Silver Defender" };
  };

  const currentTier = getTierInfo(user.ecoCoins || 0);
  const progressPct = Math.min(((user.ecoCoins || 0) / currentTier.nextThreshold) * 100, 100);

  const rewardsStore = [
    {
      id: "rw_1",
      title: "Plant a Real Neem Tree on Pragati Campus",
      cost: 300,
      icon: Trees,
      desc: "Pragati Greenery Club will plant a tagged sapling in your name with GPS coordinates.",
      partner: "Pragati Greenery Club & Forest Dept"
    },
    {
      id: "rw_2",
      title: "₹50 Canteen Meal & Smoothie Voucher",
      cost: 150,
      icon: Coffee,
      desc: "Valid at all campus canteens and organic juice bars.",
      partner: "Campus Food Services"
    },
    {
      id: "rw_3",
      title: "Official Pragati Eco-Warrior Certificate",
      cost: 200,
      icon: ShieldCheck,
      desc: "Digital signed certificate from Principal & Greenery Club President.",
      partner: "Pragati Engineering College"
    }
  ];

  const handleRedeemReward = (reward) => {
    const res = deductEcoCoins(reward.cost);
    if (res.success) {
      setRedeemedItems([...redeemedItems, reward.id]);
      const newTrees = reward.id === 'rw_1' ? (user.treesPlanted || 0) + 1 : user.treesPlanted;
      onUpdateUser({ ...user, ecoCoins: res.newBalance, treesPlanted: newTrees });

      // Trigger Confetti Celebration Animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      alert(`🎉 Congratulations! Redeemed: "${reward.title}". Your EcoCoins balance is now ${res.newBalance}.`);
    } else {
      alert(`Insufficient EcoCoins! You need ${reward.cost} EcoCoins (Current: ${user.ecoCoins}).`);
    }
  };

  return (
    <div className="feature-container rewards-container">
      {/* Header */}
      <div className="panel-header rewards-header">
        <div className="panel-header-title">
          <div className="header-badge rewards-pill">
            <Award size={14} className="gold-text" />
            <span>GAMIFIED ECO REWARDS & TIERS</span>
          </div>
          <h2>EcoSphere Rewards 🏆</h2>
          <p>
            Earn EcoCoins through recycling, building IoT dustbins, and participating in campus cleanups. Unlock warrior tiers and redeem real-world benefits!
          </p>
        </div>
      </div>

      {/* Tier Level & Balance Banner */}
      <div className="tier-banner-card glass-card">
        <div className="tier-top-row">
          <div className="tier-badge-group">
            <div className="tier-icon-wrap" style={{ borderColor: currentTier.color }}>
              <Award size={36} color={currentTier.color} />
            </div>
            <div>
              <span className="tier-label">CURRENT WARRIOR TIER</span>
              <h3 className="tier-name" style={{ color: currentTier.color }}>{currentTier.name}</h3>
            </div>
          </div>

          <div className="coins-balance-box">
            <span className="balance-label">WALLET BALANCE</span>
            <div className="balance-amount gold-text">🪙 {user.ecoCoins} <small>EcoCoins</small></div>
          </div>
        </div>

        {/* Progress Bar to Next Tier */}
        <div className="tier-progress-section">
          <div className="tier-progress-labels">
            <span>Next Tier: <strong>{currentTier.nextName}</strong></span>
            <span>{user.ecoCoins} / {currentTier.nextThreshold} Coins</span>
          </div>
          <div className="progress-bar-wrap">
            <div className="progress-fill gold-fill" style={{ width: `${progressPct}%` }}></div>
          </div>
        </div>
      </div>

      {/* Rewards Catalog */}
      <div className="rewards-catalog-section">
        <div className="section-title-wrap">
          <Gift size={22} className="gold-text" />
          <h3>Redeemable Eco Rewards</h3>
        </div>

        <div className="rewards-grid">
          {rewardsStore.map((rw) => {
            const IconComp = rw.icon;
            const isRedeemed = redeemedItems.includes(rw.id);

            return (
              <div key={rw.id} className="reward-card glass-card">
                <div className="rw-top">
                  <div className="rw-icon-box">
                    <IconComp size={24} className="gold-text" />
                  </div>
                  <span className="rw-cost-pill">🪙 {rw.cost} Coins</span>
                </div>

                <h4>{rw.title}</h4>
                <p className="rw-desc">{rw.desc}</p>
                <div className="rw-partner">Partner: <strong>{rw.partner}</strong></div>

                <button 
                  className={`btn ${isRedeemed ? 'btn-disabled' : 'btn-gold'} rw-redeem-btn`}
                  onClick={() => handleRedeemReward(rw)}
                  disabled={isRedeemed}
                >
                  {isRedeemed ? 'Redeemed ✓' : `Redeem for ${rw.cost} Coins`}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
