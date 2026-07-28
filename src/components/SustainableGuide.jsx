import React, { useState } from 'react';
import { 
  BookOpen, 
  Cpu, 
  Copy, 
  Check, 
  Sun, 
  Droplet, 
  Layers, 
  Zap, 
  Code, 
  Play, 
  Wrench,
  Sparkles,
  FileText,
  Download,
  Printer,
  X,
  CheckCircle2
} from 'lucide-react';
import { DIY_IOT_DUSTBIN_GUIDE, SUSTAINABLE_GUIDES_PDF_DATA } from '../data/mockData';

export default function SustainableGuide() {
  const [activeGuideTab, setActiveGuideTab] = useState('iot-bin'); // 'iot-bin' | 'compost-solar' | 'tips'
  const [copiedCode, setCopiedCode] = useState(false);
  const [activePdfDoc, setActivePdfDoc] = useState(null); // null | pdf object
  const guideData = DIY_IOT_DUSTBIN_GUIDE;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(guideData.cppCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  const handleOpenPdf = (pdfKey) => {
    const doc = SUSTAINABLE_GUIDES_PDF_DATA[pdfKey];
    if (doc) {
      setActivePdfDoc(doc);
    }
  };

  return (
    <div className="feature-container guide-container">
      {/* Guide Header */}
      <div className="panel-header guide-header">
        <div className="panel-header-title">
          <div className="header-badge guide-pill">
            <Wrench size={14} />
            <span>SMALL-SCALE IMPLEMENTATION MANUALS</span>
          </div>
          <h2>Sustainable Living Guide 📘</h2>
          <p>
            Step-by-step DIY IoT dustbin blueprints, home composting, rainwater harvesting, solar hacks, and daily green micro-habits with complete downloadable PDF manuals.
          </p>
        </div>
      </div>

      {/* Guide Navigation Tabs */}
      <div className="guide-subnav glass-card">
        <button 
          className={`subnav-btn ${activeGuideTab === 'iot-bin' ? 'active' : ''}`}
          onClick={() => setActiveGuideTab('iot-bin')}
        >
          <Cpu size={16} />
          <span>DIY IoT Dustbin Masterclass</span>
        </button>

        <button 
          className={`subnav-btn ${activeGuideTab === 'compost-solar' ? 'active' : ''}`}
          onClick={() => setActiveGuideTab('compost-solar')}
        >
          <Sun size={16} />
          <span>Composting, Rainwater & Solar Hacks</span>
        </button>

        <button 
          className={`subnav-btn ${activeGuideTab === 'tips' ? 'active' : ''}`}
          onClick={() => setActiveGuideTab('tips')}
        >
          <Sparkles size={16} />
          <span>Daily Eco Tips & Micro-Habits</span>
        </button>
      </div>

      {/* TAB 1: DIY IOT DUSTBIN MASTERCLASS */}
      {activeGuideTab === 'iot-bin' && (
        <div className="iot-masterclass-section glass-card">
          <div className="masterclass-top-bar">
            <div>
              <span className="difficulty-badge">{guideData.difficulty}</span>
              <h3>{guideData.title}</h3>
            </div>
            <div className="meta-pills-row">
              <span className="meta-pill">💰 Budget: {guideData.estimatedCost}</span>
              <span className="meta-pill">⏱️ Time: {guideData.timeToBuild}</span>
            </div>
          </div>

          <div className="masterclass-grid">
            {/* Component Shopping List */}
            <div className="materials-box glass-card">
              <h4><Layers size={18} className="eco-text" /> Required Components List</h4>
              <ul className="materials-list">
                {guideData.materials.map((mat, idx) => (
                  <li key={idx}>
                    <span>{mat.name}</span>
                    <strong className="cost-tag">{mat.cost}</strong>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wiring & Assembly Instructions */}
            <div className="wiring-box glass-card">
              <h4><Wrench size={18} className="eco-text" /> Circuit Wiring & Mechanical Assembly</h4>
              <ol className="wiring-steps-list">
                {guideData.wiringSteps.map((step, idx) => (
                  <li key={idx}>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Arduino / ESP32 C++ Code Editor Section */}
          <div className="code-editor-box glass-card">
            <div className="editor-top-bar">
              <div className="editor-title">
                <Code size={18} className="eco-text" />
                <span>ESP32 Firmware Code (Arduino C++)</span>
              </div>
              <button className="copy-code-btn" onClick={handleCopyCode}>
                {copiedCode ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedCode ? 'Code Copied to Clipboard!' : 'Copy Complete Firmware Code'}</span>
              </button>
            </div>

            <pre className="code-block-display">
              <code>{guideData.cppCode}</code>
            </pre>
          </div>
        </div>
      )}

      {/* TAB 2: COMPOSTING, RAINWATER & SOLAR HACKS */}
      {activeGuideTab === 'compost-solar' && (
        <div className="hacks-grid">
          {/* Hack 1: Composting */}
          <div className="hack-card glass-card hover-glow">
            <div className="hack-icon-box">
              <Layers size={28} className="eco-text" />
            </div>
            <h3>3-Tier Apartment & Hostel Composting</h3>
            <p>Convert kitchen vegetable peels, tea leaves, and coffee grounds into rich black gold fertilizer without odor.</p>
            <div className="hack-stat-row">
              <span>ROI: <strong>Free organic fertilizer</strong></span>
              <span>Waste Diverted: <strong>60%</strong></span>
            </div>
            <button className="btn btn-primary full-width" onClick={() => handleOpenPdf('compost')}>
              <FileText size={16} />
              <span>Open & Download DIY Blueprint PDF</span>
            </button>
          </div>

          {/* Hack 2: Rainwater Harvesting */}
          <div className="hack-card glass-card hover-glow">
            <div className="hack-icon-box">
              <Droplet size={28} className="eco-text" />
            </div>
            <h3>Rooftop Rainwater Filtration System</h3>
            <p>Construct a multi-layer gravel, coarse sand, and activated charcoal barrel filter for rooftop rainwater collection.</p>
            <div className="hack-stat-row">
              <span>ROI: <strong>Save 10,000L water/yr</strong></span>
              <span>Cost: <strong>₹850</strong></span>
            </div>
            <button className="btn btn-primary full-width" onClick={() => handleOpenPdf('rainwater')}>
              <FileText size={16} />
              <span>Open & Download DIY Blueprint PDF</span>
            </button>
          </div>

          {/* Hack 3: DIY Mini Solar Power Bank */}
          <div className="hack-card glass-card hover-glow">
            <div className="hack-icon-box">
              <Sun size={28} className="gold-text" />
            </div>
            <h3>5V Solar Phone Charger Mini Project</h3>
            <p>Wire a monocrystalline solar panel to an MPPT charge module to power smartphones using 100% clean solar energy.</p>
            <div className="hack-stat-row">
              <span>ROI: <strong>Zero grid power used</strong></span>
              <span>Cost: <strong>₹850</strong></span>
            </div>
            <button className="btn btn-primary full-width" onClick={() => handleOpenPdf('solar')}>
              <FileText size={16} />
              <span>Open & Download DIY Blueprint PDF</span>
            </button>
          </div>

          {/* Hack 4: EcoBrick Bench Building */}
          <div className="hack-card glass-card hover-glow">
            <div className="hack-icon-box">
              <Wrench size={28} className="eco-text" />
            </div>
            <h3>Campus EcoBrick Bench Building</h3>
            <p>Pack non-recyclable soft plastic wrappers into 1L PET bottles to construct permanent garden seating benches.</p>
            <div className="hack-stat-row">
              <span>ROI: <strong>Free campus furniture</strong></span>
              <span>Plastic Saved: <strong>15kg</strong></span>
            </div>
            <button className="btn btn-primary full-width" onClick={() => handleOpenPdf('ecobrick')}>
              <FileText size={16} />
              <span>Open & Download DIY Blueprint PDF</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 3: DAILY ECO TIPS & MICRO-HABITS */}
      {activeGuideTab === 'tips' && (
        <div className="daily-tips-section glass-card">
          <div className="tips-header-row">
            <div>
              <h3>Daily Eco Micro-Habits & Zero-Waste Lifestyle Guide</h3>
              <p>12 High-Impact Daily Action Habits for Students, Faculty & Households</p>
            </div>
            <button className="btn btn-gold" onClick={() => handleOpenPdf('dailyTips')}>
              <Download size={16} />
              <span>Download Full Micro-Habits PDF Manual</span>
            </button>
          </div>

          <div className="tips-grid">
            <div className="tip-card glass-card">
              <span className="tip-number">💡 Habit #1</span>
              <h4>Carry Stainless Steel Water Flask</h4>
              <p>Replaces over 365 single-use plastic water bottles per year. Keeps drinking water cool for 12 hours.</p>
            </div>

            <div className="tip-card glass-card">
              <span className="tip-number">💡 Habit #2</span>
              <h4>Unplug Phantom Power Chargers</h4>
              <p>Mobile chargers consume ~0.25 watts in standby. Unplugging idle adapters saves 3kg CO2 per charger annually.</p>
            </div>

            <div className="tip-card glass-card">
              <span className="tip-number">💡 Habit #3</span>
              <h4>Keep a Denim/Jute Tote Bag Ready</h4>
              <p>Stash 2 washable cloth totes in your vehicle or backpack. Completely declines polythene bags at markets.</p>
            </div>

            <div className="tip-card glass-card">
              <span className="tip-number">💡 Habit #4</span>
              <h4>Cold Water Laundry Washing</h4>
              <p>Washing clothes at 30°C instead of hot water saves 90% of washing machine electrical energy consumption.</p>
            </div>

            <div className="tip-card glass-card">
              <span className="tip-number">💡 Habit #5</span>
              <h4>Switch to Organic Bamboo Toothbrushes</h4>
              <p>Plastic toothbrushes take 500 years to decompose. Plant-based bamboo handles compost in 90 days.</p>
            </div>

            <div className="tip-card glass-card">
              <span className="tip-number">💡 Habit #6</span>
              <h4>Carry Reusable Canteen Cutlery</h4>
              <p>Refuse single-use plastic spoons and forks at food stalls by keeping a steel spoon & fork set in your bag.</p>
            </div>
          </div>
        </div>
      )}

      {/* PDF DOCUMENT VIEWER & DOWNLOAD MODAL */}
      {activePdfDoc && (
        <div className="pdf-modal-overlay">
          <div className="pdf-modal-card glass-card pdf-reader-modal">
            <div className="pdf-header">
              <div>
                <span className="pdf-tag">PDF DOCUMENT READER & MANUAL EXPORT</span>
                <h3>{activePdfDoc.title}</h3>
                <span className="pdf-subtitle">{activePdfDoc.subtitle} • {activePdfDoc.version}</span>
              </div>
              <button className="btn btn-secondary btn-sm" onClick={() => setActivePdfDoc(null)}>
                <X size={18} />
              </button>
            </div>

            <div className="pdf-body-content pdf-pages-container">
              {activePdfDoc.pages.map((pg) => (
                <div key={pg.pageNumber} className="pdf-page-sheet glass-card">
                  <div className="sheet-header">
                    <span>PAGE {pg.pageNumber} OF {activePdfDoc.pages.length}</span>
                    <span>{activePdfDoc.title}</span>
                  </div>
                  <h4>{pg.heading}</h4>
                  <pre className="pdf-text-render">{pg.content}</pre>
                </div>
              ))}
            </div>

            <div className="pdf-footer">
              <button className="btn btn-gold" onClick={() => window.print()}>
                <Printer size={16} />
                <span>Print Document</span>
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  const element = document.createElement("a");
                  const file = new Blob([activePdfDoc.pages.map(p => `${p.heading}\n\n${p.content}`).join('\n\n---\n\n')], {type: 'text/plain'});
                  element.href = URL.createObjectURL(file);
                  element.download = `${activePdfDoc.id}_manual.txt`;
                  document.body.appendChild(element);
                  element.click();
                  document.body.removeChild(element);
                  alert("🎉 Document Downloaded Successfully!");
                }}
              >
                <Download size={16} />
                <span>Download Complete Manual (.PDF / Text)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

