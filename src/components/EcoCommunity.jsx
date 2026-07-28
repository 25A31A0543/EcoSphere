import React, { useState } from 'react';
import { 
  Users, 
  Trophy, 
  Share2, 
  ThumbsUp, 
  MessageSquare, 
  PlusCircle, 
  Video, 
  BookOpen, 
  Award,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { LEADERBOARD_USERS } from '../data/mockData';
import { addEcoCoins } from '../data/storage';

export default function EcoCommunity({ user, onUpdateUser }) {
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' | 'leaderboard' | 'knowledge'
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [projectCategory, setProjectCategory] = useState('Campus Innovation');
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const [communityProjects, setCommunityProjects] = useState([
    {
      id: "p_1",
      author: "CSE 3rd Year Eco Team",
      title: "Solar-Powered Water Cooler Condensate Recycler",
      category: "Hardware / IoT",
      desc: "Captures 40 liters of clean condensed water daily from college water coolers to feed campus garden drip lines.",
      upvotes: 78,
      commentsCount: 14,
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "p_2",
      author: "ECE Greenery Club Squad",
      title: "Bioplastic Made from Surplus Potato Starch & Glycerol",
      category: "Materials Science",
      desc: "Synthesized 100% home-compostable film packaging with 4-week complete soil breakdown.",
      upvotes: 124,
      commentsCount: 29,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80"
    }
  ]);

  const knowledgeVideos = [
    { title: "Circular Economy Masterclass by Ellen MacArthur Foundation", embed: "https://www.youtube.com/embed/6jQ7y_qQYUA", duration: "12:30" },
    { title: "How to Build a Zero-Waste College Campus", embed: "https://www.youtube.com/embed/ggh0Ptk3VGE", duration: "15:45" },
    { title: "Turning Ocean Plastic into 3D Printer Filament", embed: "https://www.youtube.com/embed/dQw4w9WgXcQ", duration: "08:20" }
  ];

  const handleUpvote = (id) => {
    setCommunityProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, upvotes: p.upvotes + 1 } : p))
    );
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    if (!projectTitle || !projectDesc) return;

    const newProject = {
      id: `p_${Date.now()}`,
      author: user.name,
      title: projectTitle,
      category: projectCategory,
      desc: projectDesc,
      upvotes: 1,
      commentsCount: 0,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
    };

    setCommunityProjects([newProject, ...communityProjects]);
    const newCoins = addEcoCoins(100, "Shared Eco Innovation Project");
    onUpdateUser({ ...user, ecoCoins: newCoins });
    setShowSubmitModal(false);
    setProjectTitle('');
    setProjectDesc('');
    alert("🚀 Project published to EcoSphere Community! +100 EcoCoins earned!");
  };

  return (
    <div className="feature-container community-container">
      {/* Community Header */}
      <div className="panel-header community-header">
        <div className="panel-header-title">
          <div className="header-badge community-pill">
            <Users size={14} />
            <span>PRAGATI GREEN NETWORK</span>
          </div>
          <h2>EcoSphere Community 👥</h2>
          <p>
            Share eco innovations, collaborate on campus cleanups, learn from curated knowledge hubs, and climb the contributor leaderboard.
          </p>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="community-subnav glass-card">
        <button 
          className={`subnav-btn ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          <Share2 size={16} />
          <span>Innovation Board</span>
        </button>

        <button 
          className={`subnav-btn ${activeTab === 'leaderboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('leaderboard')}
        >
          <Trophy size={16} />
          <span>Top Contributors Leaderboard</span>
        </button>

        <button 
          className={`subnav-btn ${activeTab === 'knowledge' ? 'active' : ''}`}
          onClick={() => setActiveTab('knowledge')}
        >
          <BookOpen size={16} />
          <span>Knowledge Hub</span>
        </button>
      </div>

      {/* TAB 1: INNOVATION & COLLABORATION BOARD */}
      {activeTab === 'projects' && (
        <div className="projects-board-section">
          <div className="section-title-wrap">
            <div>
              <h3>Student & Vendor Eco Innovation Feed</h3>
              <p>Explore small-scale environmental projects implemented by Pragati students and local partners.</p>
            </div>
            <button className="btn btn-primary" onClick={() => setShowSubmitModal(true)}>
              <PlusCircle size={16} />
              <span>Share My Innovation (+100 EcoCoins)</span>
            </button>
          </div>

          <div className="projects-grid">
            {communityProjects.map((proj) => (
              <div key={proj.id} className="project-card glass-card">
                <img src={proj.image} alt={proj.title} className="proj-image" />
                <div className="proj-body">
                  <span className="proj-category">{proj.category}</span>
                  <h4>{proj.title}</h4>
                  <div className="proj-author">By <strong>{proj.author}</strong></div>
                  <p className="proj-desc">{proj.desc}</p>
                </div>
                <div className="proj-footer">
                  <button className="upvote-btn" onClick={() => handleUpvote(proj.id)}>
                    <ThumbsUp size={14} />
                    <span>{proj.upvotes} Upvotes</span>
                  </button>
                  <span className="comments-count"><MessageSquare size={14} /> {proj.commentsCount} Comments</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: LEADERBOARD */}
      {activeTab === 'leaderboard' && (
        <div className="leaderboard-section glass-card">
          <div className="sidebar-heading">
            <Trophy size={22} className="gold-text" />
            <h3>Pragati Eco Warriors Leaderboard</h3>
          </div>

          <div className="leaderboard-table">
            <div className="table-header">
              <span>Rank</span>
              <span>Contributor / Club</span>
              <span>Type</span>
              <span>EcoCoins</span>
              <span>Plastic Saved</span>
              <span>Warrior Tier</span>
            </div>
            {LEADERBOARD_USERS.map((usr) => (
              <div key={usr.rank} className={`table-row ${usr.rank === 1 ? 'rank-1' : ''}`}>
                <span className="rank-num">#{usr.rank}</span>
                <span className="user-col"><strong>{usr.name}</strong></span>
                <span className="type-col">{usr.type}</span>
                <span className="coins-col">🪙 {usr.coins}</span>
                <span className="plastic-col">{usr.plasticKg} kg</span>
                <span className="badge-col"><Award size={14} /> {usr.badge}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: KNOWLEDGE HUB */}
      {activeTab === 'knowledge' && (
        <div className="knowledge-hub-section">
          <div className="section-title-wrap">
            <BookOpen size={20} className="eco-text" />
            <h3>Curated Eco Video Playlists & Research Articles</h3>
          </div>

          <div className="knowledge-grid">
            {knowledgeVideos.map((vid, idx) => (
              <div key={idx} className="knowledge-card glass-card">
                <div className="responsive-video-wrapper">
                  <iframe src={vid.embed} title={vid.title} allowFullScreen />
                </div>
                <div className="k-card-body">
                  <span className="ch-time">Duration: {vid.duration}</span>
                  <h4>{vid.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Submit Innovation Modal */}
      {showSubmitModal && (
        <div className="modal-backdrop" onClick={() => setShowSubmitModal(false)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <h3>Submit Your Eco Project / Innovation</h3>
            <form onSubmit={handleCreateProject}>
              <div className="form-group">
                <label>Project Title:</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Banana Leaf Food Wrapping Machine"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Category:</label>
                <select value={projectCategory} onChange={(e) => setProjectCategory(e.target.value)}>
                  <option value="Campus Innovation">Campus Innovation</option>
                  <option value="Hardware / IoT">Hardware / IoT</option>
                  <option value="Bioplastics">Bioplastics</option>
                  <option value="Waste Segregation">Waste Segregation</option>
                </select>
              </div>

              <div className="form-group">
                <label>Detailed Description & Material List:</label>
                <textarea 
                  rows={4} 
                  required
                  placeholder="Explain your design, cost, and how it helps save the environment..."
                  value={projectDesc}
                  onChange={(e) => setProjectDesc(e.target.value)}
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn btn-secondary" onClick={() => setShowSubmitModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Publish Project (+100 EcoCoins)</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
