import React, { useState } from 'react';
import { 
  Camera, 
  Upload, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  MapPin, 
  Share2, 
  Award, 
  Play, 
  ShieldCheck, 
  RefreshCw, 
  ArrowRight,
  Clock,
  ThumbsUp,
  FileText,
  Download,
  AlertCircle,
  Wrench
} from 'lucide-react';
import { addEcoCoins } from '../data/storage';

export default function PhotoProblemReporter({ user, onUpdateUser, onNavigateToSection }) {
  const [selectedPhoto, setSelectedPhoto] = useState("https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80");
  const [photoTitle, setPhotoTitle] = useState("Overflowing Plastic Waste near Hostel Canteen");
  const [isScanning, setIsScanning] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  
  const [aiReportResult, setAiReportResult] = useState({
    scanned: true,
    problemType: "Single-Use Plastic Dumping & Unsegregated Overflow",
    severity: 88,
    locationTag: "Pragati Engineering College - Hostel Block C Corridor",
    estimatedCleanupTime: "45 Mins",
    riskAssessment: "High Microplastic Leaching & Vector Pest Hazard",
    hazardMetrics: {
      microplasticRisk: "CRITICAL (High polymer fragmentation)",
      toxicGasEmission: "MODERATE (Dioxin risk if ignited)",
      waterContamination: "HIGH (Runoff into campus storm drain)"
    },
    safetyGear: ["Heavy Duty Rubber Gloves", "N95 Particulate Mask", "Tongs / Waste Picker Stick"],
    detailedSolutionSteps: [
      {
        step: 1,
        title: "Personal Safety & Site Perimeter Setup",
        desc: "Don N95 mask and heavy-duty nitrile gloves. Erect warning cone or mark perimeter to prevent students from stepping on sharp broken glass or contaminated liquid."
      },
      {
        step: 2,
        title: "On-Site Polymer Segregation (PET vs Soft Films)",
        desc: "Separate clean PET water bottles from food packaging wrappers. Empty any residual liquid from bottles into storm drain grate before bin placement."
      },
      {
        step: 3,
        title: "IoT Smart Bin Deposit & Telemetry Trigger",
        desc: "Drop sorted PET bottles into Pragati IoT Smart Bin #2 (Canteen Corridor). Verify ultrasonic sensor ping to claim immediate +50 EcoCoins deposit bonus."
      },
      {
        step: 4,
        title: "Soft Film Wrapper Bundle for EcoBrick Upcycling",
        desc: "Pack multi-layer plastic (MLP) chip and biscuit wrappers into a 1L PET bottle using a wooden rod to construct a 330g EcoBrick for campus bench building."
      },
      {
        step: 5,
        title: "Disinfection & Surface Sanitization",
        desc: "Spray 10% bio-enzymatic lemon disinfectant solution on the bin surrounding area to destroy bacterial colonies and eliminate odors."
      },
      {
        step: 6,
        title: "Sanitation Dispatch & Live Community Sync",
        desc: "Publish report ticket on EcoSphere live tracker to alert campus greenery volunteers and request secondary bin emptying by Pragati sanitation squad."
      }
    ],
    recommendedDiyVideo: "Building a Campus EcoBrick Bench Step-by-Step",
    coinsEarned: 150
  });

  const [communityReports, setCommunityReports] = useState([
    {
      id: "rep_101",
      reporter: user.name || "Student Champion",
      photo: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80",
      title: "Overflowing Plastic Waste in Hostel Quadrangle",
      type: "Plastic Overflow",
      severity: "88% CRITICAL",
      status: "IN_PROGRESS",
      votes: 24,
      timeAgo: "15 Mins ago"
    },
    {
      id: "rep_102",
      reporter: "Sai Krishna (ECE)",
      photo: "https://images.unsplash.com/photo-1565697669460-642146e91986?auto=format&fit=crop&w=600&q=80",
      title: "Polythene Burning Smoke behind Library Grounds",
      type: "Toxic Open Burning",
      severity: "95% DANGEROUS",
      status: "RESOLVED",
      votes: 42,
      timeAgo: "2 Hours ago"
    }
  ]);

  const presetScenarios = [
    {
      name: "Overflowing Hostel Trash",
      img: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
      title: "Overflowing Plastic Waste in Hostel Quadrangle",
      type: "Plastic Overflow & Littering",
      severity: 88,
      location: "Hostel Block B Quadrangle"
    },
    {
      name: "Lake Plastic Pollution",
      img: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=800&q=80",
      title: "Single-Use PET Bottles Floating in Campus Pond",
      type: "Water Body Contamination",
      severity: 94,
      location: "Pragati Eco Pond - North Bank"
    },
    {
      name: "Open Plastic Burning",
      img: "https://images.unsplash.com/photo-1565697669460-642146e91986?auto=format&fit=crop&w=800&q=80",
      title: "Toxic Open Air Polythene Burning Near Sports Ground",
      type: "Toxic Air Pollution",
      severity: 96,
      location: "Behind Central Sports Complex"
    }
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedPhoto(url);
      const nameWithoutExt = file.name.replace(/\.[^/.]+$/, "");
      setPhotoTitle(`Detected Problem: ${nameWithoutExt}`);
      triggerAiAnalysis(nameWithoutExt, "Uploaded Custom Image");
    }
  };

  const triggerAiAnalysis = (title, location) => {
    setIsScanning(true);
    setAiReportResult(null);

    setTimeout(() => {
      setIsScanning(false);
      setAiReportResult({
        scanned: true,
        problemType: title.includes("Burning") ? "Toxic Plastic Burning Hazard" : title.includes("Pond") ? "Water Body Plastic Micro-Pollution" : "Unsegregated Plastic Waste Overflow",
        severity: Math.floor(Math.random() * 15 + 82),
        locationTag: location || "Pragati Engineering College Campus (GPS Verified)",
        estimatedCleanupTime: "30 to 50 Mins",
        riskAssessment: "High Environmental Contamination & Wildlife Risk",
        hazardMetrics: {
          microplasticRisk: "HIGH (Polymer disintegration under heat)",
          toxicGasEmission: title.includes("Burning") ? "CRITICAL (Carcinogenic Dioxins)" : "LOW",
          waterContamination: title.includes("Pond") ? "CRITICAL (Ecosystem toxicity)" : "MODERATE"
        },
        safetyGear: ["Protective Gloves", "N95 Safety Mask", "Waste Grabber Stick"],
        detailedSolutionSteps: [
          {
            step: 1,
            title: "Phase 1: Site Inspection & Hazards Isolation",
            desc: "Assess site safety. If toxic smoke is present, extinguish with damp soil immediately before handling material."
          },
          {
            step: 2,
            title: "Phase 2: Polymer & Organic Segregation",
            desc: "Separate PET plastic bottles, food wrappers, and organic wet waste into color-coded bags."
          },
          {
            step: 3,
            title: "Phase 3: IoT Smart Bin Drop-Off",
            desc: "Deposit recyclable PET bottles into nearest campus IoT Smart Bin to earn +15 EcoCoins per item."
          },
          {
            step: 4,
            title: "Phase 4: EcoBrick Soft Film Upcycling",
            desc: "Stuff dry polythene wrappers tightly into 1L PET bottle using a wooden rod until mass reaches 330g."
          },
          {
            step: 5,
            title: "Phase 5: Spot Disinfection",
            desc: "Apply bio-enzymatic spray to sanitize soil and eliminate odor-causing bacteria."
          },
          {
            step: 6,
            title: "Phase 6: Volunteer Alert & Sanitation Sync",
            desc: "Publish action ticket on EcoSphere tracker to dispatch student greenery volunteers."
          }
        ],
        recommendedDiyVideo: "Dedicated Video Tutorial: ESP32 + Ultrasonic Smart Bin Circuit Blueprint & Code",
        coinsEarned: 150
      });
    }, 1200);
  };

  const handlePublishReport = () => {
    if (!aiReportResult) return;

    const newReport = {
      id: `rep_${Date.now()}`,
      reporter: user.name || "Eco Champion",
      photo: selectedPhoto,
      title: photoTitle,
      type: aiReportResult.problemType,
      severity: `${aiReportResult.severity}% SEVERE`,
      status: "REPORTED",
      votes: 1,
      timeAgo: "Just now"
    };

    setCommunityReports([newReport, ...communityReports]);
    const newCoins = addEcoCoins(150, "Reported Environmental Problem via Photo AI");
    if (onUpdateUser) {
      onUpdateUser({ ...user, ecoCoins: newCoins });
    }
    alert("🎉 Action Report Published to Live Community Tracker! +150 EcoCoins added to your wallet.");
  };

  const handleUpvoteReport = (id) => {
    setCommunityReports((prev) =>
      prev.map((r) => (r.id === id ? { ...r, votes: r.votes + 1 } : r))
    );
  };

  return (
    <div className="feature-container photo-reporter-container">
      {/* Header */}
      <div className="panel-header reporter-header">
        <div className="panel-header-title">
          <div className="header-badge reporter-pill">
            <Camera size={14} />
            <span>AI COMPUTER VISION PROBLEM DETECTOR</span>
          </div>
          <h2>Photo-Based Environmental Problem Reporter 📸</h2>
          <p>
            Upload or capture any photo of plastic waste, toxic burning, or river litter. Our AI instantly analyzes contamination metrics and generates a 6-step detailed resolution action plan!
          </p>
        </div>
      </div>

      {/* Main Grid: Photo Scanner + AI Spot Solution Plan */}
      <div className="reporter-main-grid">
        {/* Left Column: Photo Drop & Preset Scenarios */}
        <div className="photo-upload-card glass-card">
          <div className="sidebar-heading">
            <Upload size={20} className="eco-text" />
            <h3>1. Upload / Select Problem Photo</h3>
          </div>

          <div className="preset-buttons-row">
            <span className="preset-label">Test Preset Photo Scenarios:</span>
            <div className="preset-pills-wrap">
              {presetScenarios.map((sc, i) => (
                <button 
                  key={i} 
                  className="preset-btn"
                  onClick={() => {
                    setSelectedPhoto(sc.img);
                    setPhotoTitle(sc.title);
                    triggerAiAnalysis(sc.title, sc.location);
                  }}
                >
                  {sc.name}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Scanner Container */}
          <div className="photo-preview-box">
            <img src={selectedPhoto} alt="Uploaded Problem" className="scanned-image" />

            {/* Scanning Laser Effect */}
            {isScanning && (
              <div className="scanning-overlay">
                <div className="scanner-line"></div>
                <div className="scanning-text">
                  <Sparkles size={26} className="animated-spin" />
                  <span>AI Computer Vision Analyzing Contamination & Polymer Density...</span>
                </div>
              </div>
            )}
          </div>

          <div className="file-input-wrapper">
            <label className="btn btn-primary full-width">
              <Camera size={18} />
              <span>Take Picture or Choose Photo File</span>
              <input type="file" accept="image/*" onChange={handleFileUpload} hidden />
            </label>
          </div>
        </div>

        {/* Right Column: AI Deep Analysis & Step-by-Step Resolution */}
        <div className="action-plan-card glass-card">
          <div className="sidebar-heading">
            <Sparkles size={20} className="gold-text" />
            <h3>2. AI Problem Diagnosis & Step-by-Step Solution</h3>
          </div>

          {aiReportResult ? (
            <div className="ai-result-content">
              {/* Diagnosis Header */}
              <div className="result-header">
                <div>
                  <span className="type-badge">{aiReportResult.problemType}</span>
                  <h4>{photoTitle}</h4>
                  <div className="loc-tag"><MapPin size={14} /> {aiReportResult.locationTag}</div>
                </div>
                <div className="severity-gauge">
                  <span className="sev-val">{aiReportResult.severity}%</span>
                  <span className="sev-label">SEVERITY RATING</span>
                </div>
              </div>

              {/* Hazard & Risk Metrics */}
              <div className="hazard-metrics-row glass-card">
                <div className="hazard-chip">
                  <span>Microplastic Risk:</span>
                  <strong className="warning-text">{aiReportResult.hazardMetrics.microplasticRisk}</strong>
                </div>
                <div className="hazard-chip">
                  <span>Toxic Emissions:</span>
                  <strong className="gold-text">{aiReportResult.hazardMetrics.toxicGasEmission}</strong>
                </div>
                <div className="hazard-chip">
                  <span>Water Runoff:</span>
                  <strong className="eco-text">{aiReportResult.hazardMetrics.waterContamination}</strong>
                </div>
              </div>

              {/* Safety Gear Required */}
              <div className="safety-gear-box">
                <h5><ShieldCheck size={16} className="eco-text" /> Required Safety Gear:</h5>
                <div className="gear-pills">
                  {aiReportResult.safetyGear.map((g, idx) => (
                    <span key={idx} className="gear-pill">🛡️ {g}</span>
                  ))}
                </div>
              </div>

              {/* 6-Step Detailed Solution Action Plan */}
              <div className="spot-action-steps">
                <h5><Wrench size={18} className="eco-text" /> Detailed Step-by-Step Resolution Plan:</h5>
                <ol className="steps-checklist">
                  {aiReportResult.detailedSolutionSteps.map((st, i) => (
                    <li key={i} className="detailed-step-item">
                      <div className="step-num">{i + 1}</div>
                      <div className="step-body">
                        <strong>{st.title}</strong>
                        <p>{st.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="result-footer-actions">
                <button className="btn btn-gold flex-1" onClick={handlePublishReport}>
                  <Award size={18} />
                  <span>Publish Report & Claim +150 EcoCoins</span>
                </button>
                <button className="btn btn-secondary" onClick={() => setShowPdfModal(true)}>
                  <FileText size={18} />
                  <span>View Action Ticket PDF</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="empty-analysis-prompt">
              <Sparkles size={40} className="eco-text" />
              <p>Upload a photo or select a scenario on the left to run AI computer vision analysis.</p>
            </div>
          )}
        </div>
      </div>

      {/* Live Action Tracker Feed */}
      <div className="live-tracker-section glass-card">
        <div className="sidebar-heading">
          <Clock size={20} className="eco-text" />
          <h3>Live Resolution & Community Action Tracker Feed</h3>
          <span className="live-tag eco-live">COMMUNITY SYNC</span>
        </div>

        <div className="reports-tracker-list">
          {communityReports.map((rep) => (
            <div key={rep.id} className="tracker-item-card glass-card">
              <img src={rep.photo} alt={rep.title} className="tracker-thumb" />
              <div className="tracker-meta">
                <div className="tracker-top-row">
                  <span className="rep-type">{rep.type}</span>
                  <span className={`status-pill ${rep.status.toLowerCase()}`}>{rep.status}</span>
                </div>
                <h4>{rep.title}</h4>
                <div className="rep-author">Reported by <strong>{rep.reporter}</strong> • {rep.timeAgo}</div>
              </div>
              <div className="tracker-actions">
                <button className="vote-btn" onClick={() => handleUpvoteReport(rep.id)}>
                  <ThumbsUp size={14} />
                  <span>{rep.votes} Confirmations</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Ticket PDF Modal */}
      {showPdfModal && aiReportResult && (
        <div className="pdf-modal-overlay">
          <div className="pdf-modal-card glass-card">
            <div className="pdf-header">
              <div>
                <span className="pdf-tag">OFFICIAL SPOT ACTION TICKET</span>
                <h3>EcoSphere AI Vision Incident Report</h3>
              </div>
              <button className="btn btn-secondary btn-sm" onClick={() => setShowPdfModal(false)}>✕ Close</button>
            </div>

            <div className="pdf-body-content">
              <div className="ticket-meta-box">
                <p><strong>Incident Title:</strong> {photoTitle}</p>
                <p><strong>Category:</strong> {aiReportResult.problemType}</p>
                <p><strong>Location:</strong> {aiReportResult.locationTag}</p>
                <p><strong>Severity Rating:</strong> {aiReportResult.severity}% Critical</p>
              </div>

              <h4>Detailed Step-by-Step Resolution Steps:</h4>
              <ul className="pdf-steps-list">
                {aiReportResult.detailedSolutionSteps.map((st, i) => (
                  <li key={i}>
                    <strong>Step {i+1}: {st.title}</strong>
                    <p>{st.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pdf-footer">
              <button className="btn btn-primary" onClick={() => window.print()}>
                <Download size={16} />
                <span>Print / Save Action PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

