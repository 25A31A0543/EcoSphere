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
  Share2
} from 'lucide-react';
import { addEcoCoins } from '../data/storage';

export default function EcoBotModal({ isOpen, onClose, user, onUpdateUser, onNavigateTab }) {
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: '🤖 Greetings! I am **EcoBot 3.0 Agent** — Pragati Greenery Club’s Autonomous AI & CRM Assistant.\n\nHow can I assist your eco mission today? You can ask me for **IoT code**, **report plastic dumping**, **audit EcoCoins**, or **find green vendors**!',
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
    { label: "🤖 Get IoT Bin Arduino Code", query: "Give me the C++ code to build an ESP32 Smart IoT Recycling Dustbin" },
    { label: "🚨 Create CRM Dumping Ticket", query: "Report plastic waste dumping near campus gate" },
    { label: "🪙 Audit My EcoCoin Balance", query: "Check my current EcoCoins and rewards tier" },
    { label: "🏪 Green Vendor Discounts", query: "Show me local green vendors and discount codes" }
  ];

  const processAIQuery = (queryText) => {
    const q = queryText.toLowerCase();
    let replyText = "";
    let actionType = null;
    let navTarget = null;
    let ticketData = null;
    let codeSnippet = null;

    if (q.includes('ticket') || q.includes('report') || q.includes('dumping') || q.includes('waste near') || q.includes('crm')) {
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
#include <HTTPClient.h>

const int TRIG_PIN = 5;
const int ECHO_PIN = 18;
const char* ssid = "Pragati_Campus_WiFi";
const char* serverUrl = "https://ecosphere-gcp.api/v1/telemetry";

void setup() {
  Serial.begin(115200);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
}

void loop() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duration = pulseIn(ECHO_PIN, HIGH);
  float distanceCm = duration * 0.034 / 2;
  float fillPct = map(distanceCm, 100, 10, 0, 100);

  Serial.printf("Bin Fill Level: %.1f%%\\n", fillPct);
  delay(5000);
}`;
      replyText = `💻 **Here is the complete C++ Firmware Blueprint for ESP32 + HC-SR04 Ultrasonic Sensor!**\n\nWire the trigger pin to GPIO 5 and echo pin to GPIO 18. This code sends real-time fill % to the EcoSphere Live Telemetry Dashboard!`;
      actionType = 'code';
      navTarget = 'recycling-hub';
    } 
    else if (q.includes('coin') || q.includes('balance') || q.includes('reward') || q.includes('points') || q.includes('tier')) {
      const currentCoins = user ? user.ecoCoins : 450;
      replyText = `🪙 **Your EcoSphere Financial & Impact Audit:**\n\n- **Current Balance**: **${currentCoins} EcoCoins**\n- **Warrior Rank**: Level 3 Eco Champion\n- **Plastic Saved**: 45.5 kg\n- **Available Perk**: Redeem 200 EcoCoins for ₹50 Canteen Meal Coupon or Plant 1 Neem Tree!`;
      actionType = 'rewards';
      navTarget = 'rewards';
    } 
    else if (q.includes('vendor') || q.includes('bag') || q.includes('market') || q.includes('jute') || q.includes('cloth')) {
      replyText = `🏪 **Local Green Vendor Directory & Discounts:**\n\n1. **Pragati Campus Eco-Store** (Near Main Gate) — 15% OFF (Code: \`PRAGATI_ECO15\`)\n2. **Surya Green Organics** (College Road) — Heavy Duty Cotton Grocery Bags at ₹35.\n\nUse your EcoCoins at checkout to claim instant discounts!`;
      actionType = 'market';
      navTarget = 'marketplace';
    } 
    else {
      replyText = `🌿 **EcoBot Sustainability Intelligence:**\n\nTo save our local environment from single-use plastic pollution:\n1. Carry a reusable cloth/jute tote bag when visiting local stores.\n2. Segregate wet food waste for composting and drop dry bottles into campus IoT dustbins.\n3. Join Friday Green Cycling drives to earn bonus EcoCoins!`;
      actionType = 'general';
    }

    return { replyText, actionType, navTarget, ticketData, codeSnippet };
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
          codeSnippet: result.codeSnippet
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
            <strong>EcoBot 3.0 Agent 🧠</strong>
            <span className="online-tag">● DeepMind AI • GCP Cloud Orchestrator</span>
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

              {/* Code Snippet Renderer */}
              {m.codeSnippet && (
                <div className="chat-code-block glass-card">
                  <div className="code-header">
                    <span><Code size={14} /> ESP32_Firmware.ino</span>
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
              <span>EcoBot AI is reasoning and processing workflows...</span>
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
          placeholder="Ask EcoBot anything (e.g. IoT code, CRM tickets, vendors)..." 
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

