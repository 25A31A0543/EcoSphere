import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Store, 
  Scissors, 
  Tag, 
  Star, 
  Award, 
  Check, 
  Play, 
  Copy, 
  ExternalLink 
} from 'lucide-react';
import { VENDORS_CATALOG } from '../data/mockData';
import { deductEcoCoins } from '../data/storage';

export default function GreenMarketplace({ user, onUpdateUser }) {
  const [activeVendor, setActiveVendor] = useState(VENDORS_CATALOG[0]);
  const [couponRedeemed, setCouponRedeemed] = useState({});
  const [copiedCode, setCopiedCode] = useState(null);

  const handleRedeemDiscount = (vendorId, coinCost, code) => {
    const res = deductEcoCoins(coinCost);
    if (res.success) {
      setCouponRedeemed((prev) => ({ ...prev, [vendorId]: true }));
      onUpdateUser({ ...user, ecoCoins: res.newBalance });
      alert(`Success! Redeemed coupon code: ${code}. Copied to clipboard!`);
      navigator.clipboard.writeText(code);
      setCopiedCode(code);
    } else {
      alert(`Insufficient EcoCoins! You need ${coinCost} EcoCoins (Current: ${user.ecoCoins}).`);
    }
  };

  return (
    <div className="feature-container marketplace-container">
      {/* Marketplace Header */}
      <div className="panel-header marketplace-header">
        <div className="panel-header-title">
          <div className="header-badge market-pill">
            <ShoppingBag size={14} />
            <span>PLASTIC-FREE COMMERCE</span>
          </div>
          <h2>Green Marketplace 🛍️</h2>
          <p>
            Support local vendors offering eco-friendly cloth and jute carry bags. Unlock exclusive discounts with EcoCoins!
          </p>
        </div>
      </div>

      {/* Grid: Vendor Showcase + DIY T-Shirt Bag Tutorial */}
      <div className="marketplace-grid">
        {/* Left Column: Vendor Showcase */}
        <div className="vendors-showcase-column">
          <div className="section-subtitle">
            <Store size={20} className="eco-text" />
            <h3>Verified Local Eco Vendors around Pragati Campus</h3>
          </div>

          <div className="vendor-tabs-row">
            {VENDORS_CATALOG.map((vendor) => (
              <button 
                key={vendor.id} 
                className={`vendor-tab-card ${activeVendor.id === vendor.id ? 'active' : ''}`}
                onClick={() => setActiveVendor(vendor)}
              >
                <div className="vendor-name-row">
                  <h4>{vendor.name}</h4>
                  <span className="vendor-rating"><Star size={12} fill="#F59E0B" color="#F59E0B" /> {vendor.rating}</span>
                </div>
                <p className="vendor-loc">{vendor.location}</p>
              </button>
            ))}
          </div>

          {/* Active Vendor Products */}
          <div className="active-vendor-details glass-card">
            <div className="vendor-header-bar">
              <div>
                <h3>{activeVendor.name}</h3>
                <p>{activeVendor.location}</p>
              </div>
              <div className="discount-reward-badge">
                <Tag size={16} />
                <span>{activeVendor.discountPercent}% OFF with 50 EcoCoins</span>
              </div>
            </div>

            <h4>Eco Products & Carry Alternatives:</h4>
            <div className="products-grid">
              {activeVendor.products.map((prod, i) => (
                <div key={i} className="product-card glass-card">
                  <img src={prod.image} alt={prod.name} className="product-img" />
                  <div className="product-info">
                    <h5>{prod.name}</h5>
                    <div className="product-price-row">
                      <span className="prod-price">{prod.price}</span>
                      <span className="prod-reward">+{prod.coinsReward} EcoCoins</span>
                    </div>
                    <button className="btn btn-outline-sm buy-btn">Visit Vendor Store</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Redeem Coupon Box */}
            <div className="coupon-redemption-box glass-card">
              <div className="coupon-info">
                <Tag size={20} className="gold-text" />
                <div>
                  <strong>Redeem {activeVendor.discountPercent}% Discount Voucher</strong>
                  <p>Cost: 50 EcoCoins • Valid at cashier counter</p>
                </div>
              </div>

              {couponRedeemed[activeVendor.id] ? (
                <div className="code-display">
                  <span>CODE: <strong>{activeVendor.discountCode}</strong></span>
                  <button className="copy-code-btn" onClick={() => {
                    navigator.clipboard.writeText(activeVendor.discountCode);
                    setCopiedCode(activeVendor.discountCode);
                  }}>
                    <Copy size={14} /> {copiedCode === activeVendor.discountCode ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              ) : (
                <button 
                  className="btn btn-gold"
                  onClick={() => handleRedeemDiscount(activeVendor.id, 50, activeVendor.discountCode)}
                >
                  Redeem with 50 EcoCoins
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: DIY Reusable Tote Tutorial */}
        <div className="diy-tutorial-column glass-card">
          <div className="sidebar-heading">
            <Scissors size={20} className="eco-text" />
            <h3>DIY Reusable Bag Tutorial</h3>
          </div>

          <div className="diy-tshirt-card">
            <div className="diy-img-wrapper">
              <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80" alt="DIY T-shirt Bag" />
              <div className="play-overlay">
                <Play size={36} fill="#fff" />
              </div>
            </div>

            <h4>Transform Old T-Shirts into Grocery Totes in 15 Mins</h4>
            <p className="diy-desc">No sewing machine required! Using just a pair of scissors and old cotton t-shirts from home or hostel.</p>

            <div className="diy-steps-mini">
              <div className="mini-step">
                <span className="step-badge">1</span>
                <span>Cut off sleeves and neck collar line of shirt.</span>
              </div>
              <div className="mini-step">
                <span className="step-badge">2</span>
                <span>Cut 2-inch fringe strips along the bottom hemline.</span>
              </div>
              <div className="mini-step">
                <span className="step-badge">3</span>
                <span>Tie bottom strips into tight double knots. Done!</span>
              </div>
            </div>

            <div className="diy-foot-reward">
              <Award size={18} className="gold-text" />
              <span>Earn 50 EcoCoins by uploading your DIY Tote photo in Community!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
