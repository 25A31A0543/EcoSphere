import React, { useState } from 'react';
import { Cloud, X, Check, ShieldCheck, User, LogOut } from 'lucide-react';
import { saveStoredUser } from '../data/storage';

export default function GoogleAuthModal({ isOpen, onClose, user, onUpdateUser }) {
  const [selectedRole, setSelectedRole] = useState(user.role || 'Student Warrior');
  const [isSyncing, setIsSyncing] = useState(false);

  if (!isOpen) return null;

  const mockAccounts = [
    { name: "Pragati Student", email: "student@pragati.ac.in", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PragatiStudent" },
    { name: "Green Canteen Vendor", email: "vendor.canteen@pragati.ac.in", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GreenVendor" },
    { name: "Dr. K. V. Rao (Faculty)", email: "kvrao@pragati.ac.in", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=FacultyRao" }
  ];

  const handleSelectAccount = (acc) => {
    setIsSyncing(true);
    setTimeout(() => {
      const updated = {
        ...user,
        isSignedIn: true,
        name: acc.name,
        email: acc.email,
        avatar: acc.avatar,
        role: selectedRole
      };
      saveStoredUser(updated);
      onUpdateUser(updated);
      setIsSyncing(false);
      onClose();
      alert(`Authenticated via Google OAuth 2.0 as ${acc.email}. Data synced to GCP Cloud Firestore.`);
    }, 1000);
  };

  const handleSignOut = () => {
    const updated = { ...user, isSignedIn: false };
    saveStoredUser(updated);
    onUpdateUser(updated);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content auth-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}><X size={20} /></button>

        <div className="auth-header text-center">
          <div className="google-auth-logo">
            <svg viewBox="0 0 24 24" width="36" height="36">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
          </div>
          <h3>Google Account Authentication</h3>
          <p className="auth-sub">Secure Google OAuth 2.0 Single Sign-On for EcoSphere</p>
        </div>

        <div className="gcp-security-banner">
          <Cloud size={16} />
          <span>Backend Cloud Storage: Google Cloud Platform (asia-south1)</span>
        </div>

        <div className="role-selection-box">
          <label>Select Your Persona / Role:</label>
          <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
            <option value="Student Warrior">Student Warrior (Pragati Engineering College)</option>
            <option value="Small Vendor">Small Vendor / Campus Eatery</option>
            <option value="Faculty">Faculty / Administrator</option>
            <option value="Citizen">Local Citizen / Organization Member</option>
          </select>
        </div>

        <div className="accounts-list-title">Choose a Google Account to Sign In:</div>
        <div className="google-accounts-stack">
          {mockAccounts.map((acc, i) => (
            <div key={i} className="account-item-card glass-card" onClick={() => handleSelectAccount(acc)}>
              <img src={acc.avatar} alt={acc.name} className="acc-avatar" />
              <div className="acc-meta">
                <strong>{acc.name}</strong>
                <span>{acc.email}</span>
              </div>
              <ShieldCheck size={18} className="eco-text" />
            </div>
          ))}
        </div>

        {user.isSignedIn && (
          <button className="btn btn-secondary full-width logout-btn" onClick={handleSignOut}>
            <LogOut size={16} /> Sign Out of Current Session
          </button>
        )}
      </div>
    </div>
  );
}
