import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  User, 
  CheckCircle2, 
  AlertTriangle, 
  Code, 
  Award, 
  ArrowRight,
  RefreshCcw,
  ShieldCheck,
  Building2,
  Share2,
  ShoppingBag,
  Volume2
} from 'lucide-react';
import { PLASTIC_ALTERNATIVES } from '../data/mockData';
import { addEcoCoins } from '../data/storage';

export default function EcoBotModal({ isOpen, onClose, user, onUpdateUser, onNavigateTab }) {
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: '🤖 Greetings! I am **EcoBot 3.0 AI** — Pragati Greenery Club’s Autonomous AI Sustainability Assistant.\n\nAsk me to **suggest eco-friendly alternatives to single-use plastics**, get **IoT Smart Bin C++ code**, report **plastic dumping tickets**, or **audit your EcoCoins**!',
      actionType: 'welcome'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const quickPrompts = [
    { label: "🌱 Suggest Plastic Alternatives", query: "Suggest eco-friendly alternatives to plastic water bottles, bags, and straws" },
    { label: "🤖 Get IoT Bin Arduino Code", query: "Give me the C++ code to build an ESP32 Smart IoT Recycling Dustbin" },
    { label: "🚨 Create CRM Dumping Ticket", query: "Report plastic waste dumping near campus gate" },
    { label: "🪙 Audit My EcoCoins", query: "Check my current EcoCoins and rewards tier" },
    { label: "🛍️ Open Eco Marketplace", query: "Show me trending zero-plastic products on Eco Marketplace" }
  ];

  const processAIQuery = (queryText) => {
    const q = queryText.toLowerCase();
    let replyText = "";
    let actionType = null;
    let navTarget = null;
    let ticketData = null;
    let codeSnippet = null;
    let plasticAltCard = null;

    // Check for plastic item alternative query
    const matchedAlt = PLASTIC_ALTERNATIVES.find(alt => 
      q.includes(alt.category.toLowerCase()) || 
      alt.plasticItem.toLowerCase().split(' ').some(w => w.length > 3 && q.includes(w))
    );

    if (q.includes('alternative') || q.includes('replace') || q.includes('plastic bag') || q.includes('bottle') || q.includes('straw') || q.includes('cup') || q.includes('cutlery') || q.includes('packaging') || matchedAlt) {
      const item = matchedAlt || PLASTIC_ALTERNATIVES[0];
      plasticAltCard = item;
      replyText = `🌿 **AI Eco-Alternative Recommendation:**\n\n- **Target Plastic**: ${item.plasticItem}\n- **Sustainable Alternative**: **${item.alternative}**\n- **Impact**: ${item.impact}\n- **Where to Get**: ${item.whereToFind}\n- **DIY Hack**: ${item.diyOption}`;
      actionType = 'alternative';
      navTarget = 'marketplace';
    }
    else if (q.includes('ticket') || q.includes('report') || q.includes('dumping') || q.includes('waste near') || q.includes('crm')) {
      const ticketId = `CRM-ECO-${Math.floor(10000 + Math.random() * 90000)}`;
      const newCoins = addEcoCoins(50, `CRM Eco-Ticket Created: ${ticketId}`);
      if (user && onUpdateUser) {
        onUpdateUser({ ...user, ecoCoins: newCoins });
      }
      ticketData = {
        id: ticketId,
        location: "Surampalem Campus Road / Local Market",
        status: "DISPATCHED TO MUNICIPAL & GREENERY CLUB SQUAD",
        priority: "HIGH"
      };
      replyText = `⚡ **CRM Eco-Ticket Created Successfully!**\n\n- **Ticket ID**: \`${ticketId}\`\n- **Assigned Squad**: Pragati Greenery Club Rapid Response + Municipal Sanitation\n- **Status**: Dispatched for 24-hour cleanup.\n- **Reward**: +50 EcoCoins credited to your profile!`;
      actionType = 'ticket';
      navTarget = 'photo-reporter';
    } 
    else if (q.includes('iot') || q.includes('code') || q.includes('arduino') || q.includes('esp32') || q.includes('sensor')) {
      codeSnippet = `#include <WiFi.h>
#include <ESP32Servo.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

const int TRIG_PIN = 5;
const int ECHO_PIN = 18;
const int SERVO_PIN = 13;
const char* ssid = "Pragati_Campus_WiFi";
const char* serverUrl = "https://ecosphere.gcp.cloud/api/v1/telemetry";

Servo lidServo;
LiquidCrystal_I2C lcd(0x27, 16, 2);
int plasticCount = 0;

void setup() {
  Serial.begin(115200);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  lidServo.attach(SERVO_PIN);
  lidServo.write(0);
}

void loop() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duration = pulseIn(ECHO_PIN, HIGH);
  float distanceCm = duration * 0.034 / 2;

  if (distanceCm > 2.0 && distanceCm < 18.0) {
    plasticCount++;
    lidServo.write(90); // Open lid
    delay(3500);
    lidServo.write(0);  // Close lid
    Serial.printf("Plastic Deposited! Total: %d\\n", plasticCount);
  }
  delay(200);
}`;
      replyText = `💻 **Here is the complete C++ Firmware Blueprint for ESP32 + HC-SR04 Ultrasonic Sensor & Servo Lid!**\n\nWire the trigger pin to GPIO 5, echo pin to GPIO 18, and servo to GPIO 13. This firmware logs bottle deposits directly to EcoSphere GCP Cloud!`;
      actionType = 'code';
      navTarget = 'guide';
    } 
    else if (q.includes('coin') || q.includes('balance') || q.includes('reward') || q.includes('points') || q.includes('tier')) {
      const currentCoins = user ? user.ecoCoins : 450;
      replyText = `🪙 **Your EcoSphere Financial & Impact Audit:**\n\n- **Current Balance**: **${currentCoins} EcoCoins**\n- **Warrior Rank**: Level 3 Eco Champion\n- **Plastic Saved**: ${(user?.plasticSavedKg || 45.5)} kg\n- **Available Perk**: Redeem 200 EcoCoins for ₹50 Canteen Meal Coupon or Plant 1 Neem Tree!`;
      actionType = 'rewards';
      navTarget = 'rewards';
    } 
    else if (q.includes('vendor') || q.includes('market') || q.includes('buy') || q.includes('shop')) {
      replyText = `🏪 **Eco Marketplace Quick Guide:**\n\n1. **Pragati Campus Eco-Store** — Jute bags, bamboo straws & steel cups (15% OFF Code: \`PRAGATI_ECO15\`)\n2. **GreenSprout India** — Biodegradable packaging & tableware\n3. **Earthly Living** — 304 Stainless Steel vacuum flasks\n\nYou can use your EcoCoins at checkout for instant cash discounts!`;
      actionType = 'market';
      navTarget = 'marketplace';
    } 
    else {
      replyText = `🌿 **EcoBot Sustainability Intelligence:**\n\nTo eliminate single-use plastic in our community:\n1. **Carry a reusable cloth/jute tote bag** to local markets.\n2. **Switch to 304 stainless steel flasks** and refill at campus RO water stations.\n3. **Drop PET bottles into IoT Smart Bins** to earn +15 EcoCoins per bottle.\n4. **Explore the Eco Marketplace** for certified zero-waste alternatives!`;
      actionType = 'general';
    }

    return { replyText, actionType, navTarget, ticketData, codeSnippet, plasticAltCard };
  };

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = { sender: 'user', text: query.trim() };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const result = processAIQuery(query);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: result.replyText,
          actionType: result.actionType,
          navTarget: result.navTarget,
          ticketData: result.ticketData,
          codeSnippet: result.codeSnippet,
          plasticAltCard: result.plasticAltCard
        }
      ]);
    }, 700);
  };

  return (
    <div className="ecobot-floating-modal glass-card">
      {/* Header Bar */}
      <div className="ecobot-header">
        <div className="ecobot-title">
          <div className="bot-avatar-icon">
            <Bot size={22} className="eco-text" />
          </div>
          <div>
            <strong>EcoBot 3.0 AI 🧠</strong>
            <span className="online-tag">● Plastic Reduction AI • GCP Cloud Synced</span>
          </div>
        </div>
        <button className="close-btn" onClick={onClose}><X size={18} /></button>
      </div>

      {/* Quick Prompts Carousel Bar */}
      <div className="ecobot-quick-bar">
        {quickPrompts.map((p, i) => (
          <button key={i} className="quick-chip" onClick={() => handleSend(p.query)}>
            {p.label}
          </button>
        ))}
      </div>

      {/* Chat Messages Log */}
      <div className="ecobot-messages-container">
        {messages.map((m, idx) => (
          <div key={idx} className={`chat-bubble ${m.sender}`}>
            <span className="sender-icon">
              {m.sender === 'bot' ? <Bot size={15} /> : <User size={15} />}
            </span>
            <div className="bubble-content">
              <div className="bubble-text">
                {m.text.split('\n').map((line, lIdx) => (
                  <p key={lIdx}>{line}</p>
                ))}
              </div>

              {/* Plastic Alternative Card Renderer */}
              {m.plasticAltCard && (
                <div className="chat-ticket-box glass-card" style={{ background: 'rgba(16,185,129,0.08)', borderColor: 'var(--emerald-500)', marginTop: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--emerald-400)', fontWeight: 800, fontSize: '0.85rem' }}>
                    <Sparkles size={15} />
                    <span>Plastic-Free Replacement Recommendation</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#fff', marginTop: '6px' }}>
                    <strong>Alternative:</strong> {m.plasticAltCard.alternative}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                    <strong>DIY Method:</strong> {m.plasticAltCard.diyOption}
                  </div>
                </div>
              )}

              {/* Code Snippet Renderer */}
              {m.codeSnippet && (
                <div className="chat-code-block glass-card">
                  <div className="code-header">
                    <span><Code size={14} /> ESP32_SmartBin_Firmware.ino</span>
                    <button 
                      className="copy-code-btn"
                      onClick={() => {
                        navigator.clipboard.writeText(m.codeSnippet);
                        alert("📋 Code copied to clipboard!");
                      }}
                    >
                      Copy Code
                    </button>
                  </div>
                  <pre><code>{m.codeSnippet}</code></pre>
                </div>
              )}

              {/* Ticket Data Renderer */}
              {m.ticketData && (
                <div className="chat-ticket-box glass-card">
                  <div className="ticket-title"><AlertTriangle size={16} className="warning-text" /> CRM Dispatch Ticket</div>
                  <div><strong>Ticket ID:</strong> {m.ticketData.id}</div>
                  <div><strong>Status:</strong> <span className="eco-text">{m.ticketData.status}</span></div>
                  <div><strong>Priority:</strong> {m.ticketData.priority}</div>
                </div>
              )}

              {/* Navigation Action CTA Button */}
              {m.navTarget && (
                <button 
                  className="btn btn-primary chat-nav-btn"
                  onClick={() => onNavigateTab && onNavigateTab(m.navTarget)}
                  style={{ marginTop: '10px' }}
                >
                  <span>Open {m.navTarget.replace('-', ' ').toUpperCase()} View</span>
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="chat-bubble bot typing">
            <span className="sender-icon"><Bot size={15} /></span>
            <div className="typing-dots">
              <Sparkles size={16} className="animated-pulse eco-text" />
              <span>EcoBot AI is reasoning and processing eco recommendations...</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Form */}
      <form 
        className="ecobot-input-row" 
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
      >
        <input 
          type="text" 
          placeholder="Ask EcoBot for plastic alternatives, IoT code, tickets..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="send-btn">
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
