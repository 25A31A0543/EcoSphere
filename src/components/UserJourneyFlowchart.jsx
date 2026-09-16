import React, { useState } from 'react';
import { Camera, Bot, Recycle, Coins, Gift, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function UserJourneyFlowchart({ onNavigateStep }) {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      stepNum: "01",
      title: "Spot & Report",
      icon: Camera,
      badge: "STEP 1",
      color: "#3b82f6",
      shortBullets: [
        "Snap photo of plastic dump",
        "Auto GPS location tag",
        "Instant upload to EcoSphere"
      ]
    },
    {
      id: 2,
      stepNum: "02",
      title: "AI Analysis",
      icon: Bot,
      badge: "STEP 2",
      color: "#8b5cf6",
      shortBullets: [
        "Computer Vision severity score",
        "Microplastic risk rating",
        "Instant safety action guide"
      ]
    },
    {
      id: 3,
      stepNum: "03",
      title: "Segregate & Deposit",
      icon: Recycle,
      badge: "STEP 3",
      color: "#10b981",
      shortBullets: [
        "Drop PET bottles in IoT Bins",
        "Ultrasonic fill level sync",
        "Pragati Greenery verification"
      ]
    },
    {
      id: 4,
      stepNum: "04",
      title: "Claim EcoCoins",
      icon: Coins,
      badge: "STEP 4",
      color: "#f59e0b",
      shortBullets: [
        "+15 to +150 Coins per action",
        "GCP cloud ledger balance",
        "Campus green leaderboard"
      ]
    },
    {
      id: 5,
      stepNum: "05",
      title: "Redeem Rewards",
      icon: Gift,
      badge: "STEP 5",
      color: "#ec4899",
      shortBullets: [
        "Canteen meal vouchers",
        "Pragati EcoStore discount",
        "Plant real campus trees"
      ]
    }
  ];

  return (
    <div className="flowchart-wrapper glass-card">
      {/* Flowchart Header */}
      <div className="flowchart-header">
        <div className="flowchart-title">
          <Sparkles size={22} className="eco-text" />
          <div>
            <h3>Visual User Journey Map</h3>
            <p>5-step simple circular pathway from reporting waste to earning campus rewards</p>
          </div>
        </div>
        <span className="flowchart-pill">INTERACTIVE DIAGRAM</span>
      </div>

      {/* Diagram Flow Grid */}
      <div className="flowchart-diagram-grid">
        {steps.map((st, index) => {
          const IconComp = st.icon;
          const isActive = activeStep === st.id;

          return (
            <React.Fragment key={st.id}>
              {/* Step Card */}
              <div 
                className={`flowchart-node-card glass-card ${isActive ? 'active-node' : ''}`}
                onClick={() => setActiveStep(st.id)}
                style={{ borderColor: isActive ? st.color : 'rgba(255,255,255,0.1)' }}
              >
                <div className="node-top-bar">
                  <span className="node-num" style={{ color: st.color }}>{st.stepNum}</span>
                  <span className="node-badge" style={{ backgroundColor: `${st.color}22`, color: st.color }}>
                    {st.badge}
                  </span>
                </div>

                <div className="node-icon-wrap" style={{ backgroundColor: `${st.color}15`, color: st.color }}>
                  <IconComp size={28} />
                </div>

                <h4 className="node-title">{st.title}</h4>

                {/* Short Scannable Bullets */}
                <ul className="node-bullets-list">
                  {st.shortBullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <CheckCircle2 size={13} style={{ color: st.color, shrink: 0 }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connecting Flow Arrow (Not after last item) */}
              {index < steps.length - 1 && (
                <div className="flowchart-arrow-connector">
                  <div className="arrow-line"></div>
                  <ArrowRight size={20} className="arrow-icon" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
