import React, { useState } from 'react';
import { 
  Car, 
  Bike, 
  Zap, 
  Calculator, 
  Users, 
  MapPin, 
  CheckCircle, 
  PlusCircle, 
  ArrowRight 
} from 'lucide-react';
import { CAMPUS_CARPOOLS } from '../data/mockData';
import { addEcoCoins } from '../data/storage';

export default function TransportPlanner({ user, onUpdateUser }) {
  const [activeTab, setActiveTab] = useState('carpool'); // 'carpool' | 'cycling' | 'ev' | 'calculator'
  const [distanceKm, setDistanceKm] = useState(15);
  const [carpools, setCarpools] = useState(CAMPUS_CARPOOLS);
  const [joinedRides, setJoinedRides] = useState([]);

  const transportModes = [
    { name: "Walking / Bicycle", co2PerKm: 0, color: "#10B981" },
    { name: "Electric Bike / EV Car", co2PerKm: 0.04, color: "#3B82F6" },
    { name: "Public Bus / Shared Van", co2PerKm: 0.07, color: "#F59E0B" },
    { name: "Petrol Motorcycle (150cc)", co2PerKm: 0.12, color: "#EF4444" },
    { name: "Petrol Car (Single Occupant)", co2PerKm: 0.21, color: "#DC2626" }
  ];

  const evChargingStations = [
    { name: "Pragati Main Entrance Charger 30kW", status: "AVAILABLE", type: "Type 2 Fast DC", price: "Free for Students" },
    { name: "Hostel Block B EV Bike Station", status: "OCCUPIED (1/2)", type: "AC Slow 3.3kW", price: "₹5/kWh" },
    { name: "Surampalem Junction Fast Charger", status: "AVAILABLE", type: "CCS2 60kW", price: "₹14/kWh" }
  ];

  const handleJoinRide = (rideId, co2Saved) => {
    if (joinedRides.includes(rideId)) return;
    const newCoins = addEcoCoins(50, "Joined Campus Carpool Ride");
    setJoinedRides([...joinedRides, rideId]);
    onUpdateUser({ ...user, ecoCoins: newCoins });
    alert(`🚘 Ride Booked! You prevented ~${co2Saved} kg of CO2 and earned +50 EcoCoins!`);
  };

  return (
    <div className="feature-container transport-container">
      {/* Header */}
      <div className="panel-header transport-header">
        <div className="panel-header-title">
          <div className="header-badge transport-pill">
            <Car size={14} />
            <span>ZERO-EMISSION MOBILITY NETWORK</span>
          </div>
          <h2>Green Transport Planner 🚗🚴</h2>
          <p>
            Campus carpool matching for Pragati commuters, Green Cycling Club events, EV charger availability map, and CO2 emission calculator.
          </p>
        </div>
      </div>

      {/* Sub Navigation Tabs */}
      <div className="transport-subnav glass-card">
        <button 
          className={`subnav-btn ${activeTab === 'carpool' ? 'active' : ''}`}
          onClick={() => setActiveTab('carpool')}
        >
          <Users size={16} />
          <span>Campus Carpool Matcher</span>
        </button>

        <button 
          className={`subnav-btn ${activeTab === 'cycling' ? 'active' : ''}`}
          onClick={() => setActiveTab('cycling')}
        >
          <Bike size={16} />
          <span>Green Cycling Club</span>
        </button>

        <button 
          className={`subnav-btn ${activeTab === 'ev' ? 'active' : ''}`}
          onClick={() => setActiveTab('ev')}
        >
          <Zap size={16} />
          <span>EV Charging Map</span>
        </button>

        <button 
          className={`subnav-btn ${activeTab === 'calculator' ? 'active' : ''}`}
          onClick={() => setActiveTab('calculator')}
        >
          <Calculator size={16} />
          <span>EMISSION CALCULATOR</span>
        </button>
      </div>

      {/* TAB 1: CARPOOL MATCHER */}
      {activeTab === 'carpool' && (
        <div className="carpool-section">
          <div className="section-title-wrap">
            <div>
              <h3>Pragati College Carpool Network</h3>
              <p>Connect with verified faculty and students traveling along your daily route.</p>
            </div>
            <button className="btn btn-primary">
              <PlusCircle size={16} />
              <span>Offer a Ride (+50 EcoCoins)</span>
            </button>
          </div>

          <div className="carpool-grid">
            {carpools.map((ride) => {
              const isJoined = joinedRides.includes(ride.id);
              return (
                <div key={ride.id} className="carpool-card glass-card">
                  <div className="carpool-top">
                    <span className="seats-tag">🚗 {ride.seatsAvailable} Seats Left</span>
                    <span className="co2-tag">Saves {ride.co2SavedKgPerRide} kg CO₂</span>
                  </div>
                  <h4>{ride.driver}</h4>
                  <div className="ride-vehicle">{ride.vehicle}</div>
                  <div className="ride-route">
                    <MapPin size={14} className="eco-text" />
                    <span>{ride.route}</span>
                  </div>
                  <div className="ride-time">Departure: <strong>{ride.departureTime}</strong></div>

                  <button 
                    className={`btn ${isJoined ? 'btn-disabled' : 'btn-primary'} ride-btn`}
                    onClick={() => handleJoinRide(ride.id, ride.co2SavedKgPerRide)}
                    disabled={isJoined}
                  >
                    {isJoined ? 'Ride Reserved ✓' : 'Request Seat (+50 EcoCoins)'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: CYCLING CLUB */}
      {activeTab === 'cycling' && (
        <div className="cycling-section glass-card">
          <div className="sidebar-heading">
            <Bike size={22} className="eco-text" />
            <h3>Pragati Friday Green Cycling Rally</h3>
          </div>
          <p>Join 120+ students cycling to campus every Friday morning! Earn 100 EcoCoins for every 10 km cycled.</p>
          <div className="rally-details">
            <div className="rally-box">
              <strong>Next Rally Date:</strong>
              <div>This Friday @ 07:00 AM</div>
            </div>
            <div className="rally-box">
              <strong>Starting Point:</strong>
              <div>Samalkot Railway Station Plaza</div>
            </div>
            <div className="rally-box">
              <strong>Free Campus Bike Rentals:</strong>
              <div>15 Bicycles available at Hostel Gate</div>
            </div>
          </div>
          <button className="btn btn-gold">Join Cycling Rally (+100 EcoCoins)</button>
        </div>
      )}

      {/* TAB 3: EV CHARGING MAP */}
      {activeTab === 'ev' && (
        <div className="ev-section glass-card">
          <div className="sidebar-heading">
            <Zap size={22} className="eco-text" />
            <h3>Campus & Surampalem EV Chargers</h3>
          </div>

          <div className="ev-chargers-list">
            {evChargingStations.map((st, i) => (
              <div key={i} className="ev-charger-card glass-card">
                <div className="ev-header">
                  <h4>{st.name}</h4>
                  <span className={`status-pill ${st.status.includes('AVAILABLE') ? 'online' : 'alert_near_full'}`}>
                    {st.status}
                  </span>
                </div>
                <div className="ev-specs">
                  <span>Type: <strong>{st.type}</strong></span>
                  <span>Tariff: <strong>{st.price}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: EMISSION CALCULATOR */}
      {activeTab === 'calculator' && (
        <div className="calculator-section glass-card">
          <h3>Multi-Modal Travel CO₂ Emissions Calculator</h3>
          <div className="calc-slider-wrap">
            <label>Select Daily Round-Trip Commute Distance: <strong>{distanceKm} km</strong></label>
            <input 
              type="range" 
              min="2" 
              max="60" 
              value={distanceKm} 
              onChange={(e) => setDistanceKm(+e.target.value)} 
            />
          </div>

          <div className="emissions-bars-stack">
            {transportModes.map((mode, idx) => {
              const dailyEmissions = +(distanceKm * mode.co2PerKm).toFixed(2);
              const maxEmissions = distanceKm * 0.21;
              const fillPct = maxEmissions > 0 ? (dailyEmissions / maxEmissions) * 100 : 0;

              return (
                <div key={idx} className="emission-bar-row">
                  <div className="mode-label">
                    <span>{mode.name}</span>
                    <strong>{dailyEmissions} kg CO₂ / day</strong>
                  </div>
                  <div className="progress-bar-wrap">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${Math.max(fillPct, 4)}%`, backgroundColor: mode.color }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
