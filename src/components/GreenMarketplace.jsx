import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Store, 
  Tag, 
  Star, 
  Award, 
  Check, 
  Copy, 
  ExternalLink,
  Plus,
  Minus,
  Trash2,
  CreditCard,
  ShieldCheck,
  Building2,
  TrendingUp,
  Sparkles,
  Search,
  Filter,
  ArrowRight,
  Printer,
  Download,
  X,
  CheckCircle2,
  Coins,
  FileText,
  UploadCloud,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MARKETPLACE_PRODUCTS, PARTNER_COMPANIES, VENDORS_CATALOG } from '../data/mockData';
import { deductEcoCoins, addEcoCoins } from '../data/storage';

export default function GreenMarketplace({ user, onUpdateUser }) {
  const [activeMarketTab, setActiveMarketTab] = useState('browse'); // 'browse' | 'trending' | 'partners' | 'orders'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [productsList, setProductsList] = useState(MARKETPLACE_PRODUCTS);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isVendorModalOpen, setIsVendorModalOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(null);

  // Checkout Form State
  const [paymentMethod, setPaymentMethod] = useState('gpay'); // 'gpay' | 'card' | 'netbanking' | 'cod'
  const [ecoCoinsToRedeem, setEcoCoinsToRedeem] = useState(50);
  const [deliveryAddress, setDeliveryAddress] = useState('Pragati Engineering College, Surampalem');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);
  const [orderHistory, setOrderHistory] = useState([]);

  // Vendor Listing Form State
  const [newVendorProduct, setNewVendorProduct] = useState({
    name: '',
    category: 'bags',
    price: '',
    originalPrice: '',
    vendorName: user?.name || 'Local Eco Vendor',
    vendorLocation: 'Surampalem, Pragati Campus Area',
    plasticOffsetKg: '',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    description: ''
  });

  // Cart operations
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculations
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalPlasticOffset = cart.reduce((sum, item) => sum + (item.plasticOffsetKg || 5) * item.quantity, 0);
  const totalCoinsReward = cart.reduce((sum, item) => sum + (item.ecoCoinsReward || 15) * item.quantity, 0);

  // EcoCoins Discount: 1 Coin = ₹0.50 discount
  const userCoins = user?.ecoCoins || 0;
  const maxCoinsUsable = Math.min(userCoins, Math.floor((cartSubtotal / 0.5) * 0.5)); // Max 50% of cart total
  const appliedCoins = Math.min(ecoCoinsToRedeem, maxCoinsUsable);
  const coinDiscountAmount = Math.floor(appliedCoins * 0.5);
  const cartFinalTotal = Math.max(0, cartSubtotal - coinDiscountAmount);

  // Filtered Products
  const filteredProducts = productsList.filter((prod) => {
    const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.vendorName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Trending Products
  const trendingProducts = productsList.filter((p) => p.isTrending);

  // Handle Checkout Execution
  const handleExecutePayment = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      // Deduct coins if used
      if (appliedCoins > 0) {
        deductEcoCoins(appliedCoins);
      }
      // Add bonus coins
      const updatedCoins = addEcoCoins(totalCoinsReward, 'Eco Marketplace Purchase Reward');
      
      const newOrder = {
        orderId: `ECO-ORD-${Math.floor(100000 + Math.random() * 900000)}`,
        items: [...cart],
        subtotal: cartSubtotal,
        discount: coinDiscountAmount,
        coinsUsed: appliedCoins,
        coinsEarned: totalCoinsReward,
        totalPaid: cartFinalTotal,
        plasticOffsetKg: totalPlasticOffset,
        paymentMethod: paymentMethod.toUpperCase(),
        deliveryAddress: deliveryAddress,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
      };

      setOrderHistory((prev) => [newOrder, ...prev]);
      setCompletedOrder(newOrder);
      setCart([]);
      setIsProcessingPayment(false);
      setIsCheckoutOpen(false);

      if (user && onUpdateUser) {
        onUpdateUser({
          ...user,
          ecoCoins: updatedCoins,
          plasticSavedKg: +((user.plasticSavedKg || 0) + totalPlasticOffset).toFixed(1)
        });
      }

      // Celebrate with confetti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 }
      });
    }, 1500);
  };

  // Handle Vendor Listing Submission
  const handleAddVendorProduct = (e) => {
    e.preventDefault();
    if (!newVendorProduct.name || !newVendorProduct.price) {
      alert('Please fill in product name and price.');
      return;
    }

    const createdProduct = {
      id: `prod_custom_${Date.now()}`,
      name: newVendorProduct.name,
      category: newVendorProduct.category,
      price: +newVendorProduct.price,
      originalPrice: +newVendorProduct.originalPrice || +newVendorProduct.price + 50,
      ecoCoinsReward: 20,
      maxCoinsDiscount: 30,
      image: newVendorProduct.image || 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
      rating: 5.0,
      reviewsCount: 1,
      vendorName: newVendorProduct.vendorName,
      vendorLocation: newVendorProduct.vendorLocation,
      isTrending: true,
      badge: 'NEW LISTING',
      plasticOffsetKg: +newVendorProduct.plasticOffsetKg || 10.0,
      description: newVendorProduct.description || 'Verified sustainable zero-plastic alternative product.',
      inStock: true
    };

    setProductsList([createdProduct, ...productsList]);
    setIsVendorModalOpen(false);
    alert('🎉 Product listed successfully on EcoSphere Marketplace!');
    setNewVendorProduct({
      name: '',
      category: 'bags',
      price: '',
      originalPrice: '',
      vendorName: user?.name || 'Local Eco Vendor',
      vendorLocation: 'Surampalem, Pragati Campus Area',
      plasticOffsetKg: '',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
      description: ''
    });
  };

  return (
    <div className="feature-container marketplace-container">
      {/* Marketplace Header */}
      <div className="panel-header marketplace-header">
        <div className="panel-header-title">
          <div className="header-badge market-pill">
            <ShoppingBag size={14} />
            <span>ECO COMMERCE & COMPANY DASHBOARD</span>
          </div>
          <h2>Eco Marketplace 🛍️</h2>
          <p>
            Buy certified zero-plastic alternatives directly online: cloth bags, stainless steel flasks, bamboo cutlery & upcycled products. Redeem EcoCoins for instant discounts!
          </p>
        </div>

        {/* Header Right Action: Cart Trigger & Vendor Button */}
        <div className="header-actions-group" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button 
            className="btn btn-secondary"
            onClick={() => setIsVendorModalOpen(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Store size={16} />
            <span>+ List Product as Vendor</span>
          </button>

          <button 
            className="btn btn-primary cart-trigger-btn"
            onClick={() => setIsCartOpen(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'relative' }}
          >
            <ShoppingBag size={18} />
            <span>My Cart ({cart.reduce((s, i) => s + i.quantity, 0)})</span>
            {cart.length > 0 && (
              <span className="cart-badge-count">{cart.reduce((s, i) => s + i.quantity, 0)}</span>
            )}
          </button>
        </div>
      </div>

      {/* Sub Navigation Tabs */}
      <div className="transport-subnav glass-card" style={{ marginBottom: '24px' }}>
        <button 
          className={`subnav-btn ${activeMarketTab === 'browse' ? 'active' : ''}`}
          onClick={() => setActiveMarketTab('browse')}
        >
          <ShoppingBag size={16} />
          <span>All Products ({productsList.length})</span>
        </button>

        <button 
          className={`subnav-btn ${activeMarketTab === 'trending' ? 'active' : ''}`}
          onClick={() => setActiveMarketTab('trending')}
        >
          <Sparkles size={16} className="gold-text" />
          <span>Trending & Deals</span>
        </button>

        <button 
          className={`subnav-btn ${activeMarketTab === 'partners' ? 'active' : ''}`}
          onClick={() => setActiveMarketTab('partners')}
        >
          <Building2 size={16} />
          <span>Partner Companies ({PARTNER_COMPANIES.length})</span>
        </button>

        <button 
          className={`subnav-btn ${activeMarketTab === 'orders' ? 'active' : ''}`}
          onClick={() => setActiveMarketTab('orders')}
        >
          <FileText size={16} />
          <span>My Orders & Invoices ({orderHistory.length})</span>
        </button>
      </div>

      {/* TAB 1: BROWSE ALL PRODUCTS */}
      {activeMarketTab === 'browse' && (
        <div className="marketplace-catalog-view">
          {/* Filters & Search Toolbar */}
          <div className="catalog-toolbar glass-card" style={{ padding: '16px', borderRadius: '16px', marginBottom: '20px', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Search Input */}
            <div className="search-box-wrap" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.06)', padding: '8px 16px', borderRadius: '12px', flex: '1', minWidth: '240px' }}>
              <Search size={18} className="eco-text" />
              <input 
                type="text" 
                placeholder="Search eco bags, steel bottles, bamboo straws, vendors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: '#fff', width: '100%', outline: 'none', fontSize: '0.9rem' }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer' }}><X size={14} /></button>
              )}
            </div>

            {/* Category Pills */}
            <div className="category-pills-row" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Items' },
                { id: 'bags', label: '👜 Cloth & Jute Bags' },
                { id: 'bottles', label: '🍶 Steel Flasks' },
                { id: 'straws', label: '🎋 Bamboo Straws' },
                { id: 'dinnerware', label: '🍃 Palm Plates' },
                { id: 'upcycled', label: '🧱 Upcycled Crafts' },
                { id: 'packaging', label: '📦 Eco Packaging' }
              ].map((cat) => (
                <button 
                  key={cat.id} 
                  className={`role-pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid-catalog" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {filteredProducts.map((prod) => (
              <div key={prod.id} className="product-card-enhanced glass-card hover-glow" style={{ borderRadius: '18px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div className="prod-img-box" style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {prod.badge && (
                    <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--emerald-500)', color: '#fff', fontSize: '0.68rem', fontWeight: 800, padding: '3px 8px', borderRadius: '6px', letterSpacing: '0.04em' }}>
                      {prod.badge}
                    </span>
                  )}
                  <span style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.7)', color: '#34d399', fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', backdropFilter: 'blur(4px)' }}>
                    🪙 +{prod.ecoCoinsReward} Coins
                  </span>
                </div>

                <div className="prod-content" style={{ padding: '16px', flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>📍 {prod.vendorName}</span>
                      <span style={{ fontSize: '0.78rem', color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <Star size={12} fill="#fbbf24" /> {prod.rating}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '6px', lineHeight: 1.3 }}>{prod.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '12px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {prod.description}
                    </p>

                    <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '6px 10px', borderRadius: '8px', marginBottom: '12px', fontSize: '0.75rem', color: 'var(--emerald-400)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <ShieldCheck size={14} />
                      <span>Offset: <strong>{prod.plasticOffsetKg} kg plastic</strong></span>
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                      <div>
                        <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>₹{prod.price}</span>
                        {prod.originalPrice && (
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textDecoration: 'line-through', marginLeft: '6px' }}>
                            ₹{prod.originalPrice}
                          </span>
                        )}
                      </div>
                      <span style={{ fontSize: '0.72rem', color: 'var(--amber-gold)' }}>
                        Save ₹{Math.min(prod.maxCoinsDiscount * 0.5, userCoins * 0.5)} w/ Coins
                      </span>
                    </div>

                    <button 
                      className="btn btn-primary full-width"
                      onClick={() => addToCart(prod)}
                      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                    >
                      <ShoppingBag size={16} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: TRENDING & HOT DEALS */}
      {activeMarketTab === 'trending' && (
        <div className="marketplace-trending-view">
          <div className="section-title-wrap" style={{ marginBottom: '20px' }}>
            <Sparkles size={24} className="gold-text" />
            <div>
              <h3>Trending Zero-Plastic Bestsellers</h3>
              <p>Top community-rated eco-friendly products adopted by Pragati campus canteens and students</p>
            </div>
          </div>

          <div className="products-grid-catalog" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {trendingProducts.map((prod) => (
              <div key={prod.id} className="product-card-enhanced glass-card hover-glow" style={{ borderRadius: '18px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div className="prod-img-box" style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img src={prod.image} alt={prod.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '10px', left: '10px', background: '#f59e0b', color: '#000', fontSize: '0.68rem', fontWeight: 800, padding: '3px 8px', borderRadius: '6px' }}>
                    🔥 TRENDING
                  </span>
                </div>
                <div className="prod-content" style={{ padding: '16px', flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>{prod.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>{prod.description}</p>
                    <div style={{ color: 'var(--emerald-400)', fontSize: '0.78rem', marginBottom: '10px' }}>
                      🌱 Offset: <strong>{prod.plasticOffsetKg} kg plastic</strong>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>₹{prod.price}</div>
                    <button className="btn btn-primary full-width" onClick={() => addToCart(prod)}>
                      <ShoppingBag size={16} /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: PARTNER COMPANIES */}
      {activeMarketTab === 'partners' && (
        <div className="marketplace-partners-view">
          <div className="section-title-wrap" style={{ marginBottom: '20px' }}>
            <Building2 size={24} className="eco-text" />
            <div>
              <h3>Verified Sustainable Partner Companies</h3>
              <p>Official green manufacturers collaborating with Pragati Engineering College to eliminate single-use plastics.</p>
            </div>
          </div>

          <div className="partners-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {PARTNER_COMPANIES.map((partner) => (
              <div key={partner.id} className="partner-card glass-card hover-glow" style={{ padding: '20px', borderRadius: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ fontSize: '2rem', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {partner.logo}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{partner.name}</h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>📍 {partner.location}</span>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.7rem', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--emerald-400)', padding: '3px 8px', borderRadius: '6px', fontWeight: 800 }}>
                    {partner.badge}
                  </span>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '14px', lineHeight: 1.4 }}>
                  {partner.description}
                </p>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 14px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Tracked Impact:</span>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--emerald-400)' }}>{partner.impactStat}</strong>
                </div>

                {/* Coupon Code Box */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(245, 158, 11, 0.08)', padding: '8px 12px', borderRadius: '10px' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: '#fbbf24', fontWeight: 800 }}>DISCOUNT COUPON ({partner.discountPercent}% OFF)</span>
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#fff' }}>{partner.discountCode}</div>
                  </div>
                  <button 
                    className="copy-code-btn"
                    onClick={() => {
                      navigator.clipboard.writeText(partner.discountCode);
                      setCopiedCode(partner.discountCode);
                      setTimeout(() => setCopiedCode(null), 2500);
                    }}
                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                  >
                    <Copy size={12} />
                    <span>{copiedCode === partner.discountCode ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: MY ORDERS & INVOICES */}
      {activeMarketTab === 'orders' && (
        <div className="marketplace-orders-view">
          <div className="section-title-wrap" style={{ marginBottom: '20px' }}>
            <FileText size={24} className="eco-text" />
            <div>
              <h3>Order History & Green Tax Invoices</h3>
              <p>Download certified invoices detailing total plastic diverted and EcoCoins transacted</p>
            </div>
          </div>

          {orderHistory.length === 0 ? (
            <div className="glass-card" style={{ padding: '40px', textAlign: 'center', borderRadius: '18px' }}>
              <ShoppingBag size={48} className="eco-text" style={{ margin: '0 auto 16px', opacity: 0.5 }} />
              <h4>No orders placed yet</h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Explore the catalog to purchase plastic-free alternatives and earn EcoCoins!</p>
              <button className="btn btn-primary" onClick={() => setActiveMarketTab('browse')}>
                Browse Eco Products
              </button>
            </div>
          ) : (
            <div className="orders-list-stack" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {orderHistory.map((ord, i) => (
                <div key={i} className="order-item-card glass-card" style={{ padding: '20px', borderRadius: '18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-glass)', paddingBottom: '12px', marginBottom: '12px' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Order ID:</span>
                      <strong style={{ marginLeft: '6px', color: '#fff' }}>{ord.orderId}</strong>
                      <span style={{ marginLeft: '12px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>({ord.date})</span>
                    </div>
                    <span style={{ background: 'rgba(16,185,129,0.15)', color: 'var(--emerald-400)', fontSize: '0.75rem', fontWeight: 800, padding: '3px 8px', borderRadius: '6px' }}>
                      PAID VIA {ord.paymentMethod}
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '16px' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Items Ordered:</span>
                      <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>
                        {ord.items.map(it => `${it.quantity}x ${it.name}`).join(', ')}
                      </div>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Plastic Offset:</span>
                      <div style={{ fontSize: '0.85rem', color: 'var(--emerald-400)', fontWeight: 700 }}>
                        🌱 {ord.plasticOffsetKg} kg plastic avoided
                      </div>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Total Paid:</span>
                      <div style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 800 }}>
                        ₹{ord.totalPaid} <small style={{ fontSize: '0.75rem', color: '#fbbf24' }}>(Earned +{ord.coinsEarned} Coins)</small>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                      className="btn btn-secondary btn-sm"
                      onClick={() => {
                        alert(`Printing invoice for ${ord.orderId}...`);
                        window.print();
                      }}
                      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      <Printer size={14} />
                      <span>Print Green Invoice</span>
                    </button>

                    <button 
                      className="btn btn-gold btn-sm"
                      onClick={() => {
                        const content = `ECOSPHERE GREEN INVOICE\nOrder ID: ${ord.orderId}\nDate: ${ord.date}\nTotal Paid: ₹${ord.totalPaid}\nPlastic Offset: ${ord.plasticOffsetKg} kg\nDelivery: ${ord.deliveryAddress}\n\nThank you for supporting a plastic-free tomorrow!`;
                        const blob = new Blob([content], { type: 'text/plain' });
                        const link = document.createElement('a');
                        link.href = URL.createObjectURL(blob);
                        link.download = `${ord.orderId}_Invoice.txt`;
                        link.click();
                      }}
                      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      <Download size={14} />
                      <span>Download Receipt</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* SHOPPING CART DRAWER / MODAL */}
      {isCartOpen && (
        <div className="modal-backdrop" onClick={() => setIsCartOpen(false)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px', width: '90%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-glass)', paddingBottom: '14px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShoppingBag size={20} className="eco-text" />
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>My Eco Shopping Cart</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setIsCartOpen(false)}><X size={18} /></button>
            </div>

            {cart.length === 0 ? (
              <div style={{ padding: '30px 0', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-secondary)' }}>Your shopping cart is empty.</p>
                <button className="btn btn-primary btn-sm" onClick={() => setIsCartOpen(false)}>Continue Shopping</button>
              </div>
            ) : (
              <div>
                {/* Cart Items List */}
                <div className="cart-items-stack" style={{ maxHeight: '240px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item-row glass-card" style={{ padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '10px' }}>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <img src={item.image} alt={item.name} style={{ width: '45px', height: '45px', borderRadius: '8px', objectFit: 'cover' }} />
                        <div>
                          <h5 style={{ margin: '0 0 4px', fontSize: '0.85rem' }}>{item.name}</h5>
                          <span style={{ fontSize: '0.8rem', color: '#fff', fontWeight: 700 }}>₹{item.price}</span>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button className="btn-sm btn-secondary" onClick={() => updateQuantity(item.id, -1)} style={{ padding: '2px 8px' }}><Minus size={12} /></button>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>{item.quantity}</span>
                        <button className="btn-sm btn-secondary" onClick={() => updateQuantity(item.id, 1)} style={{ padding: '2px 8px' }}><Plus size={12} /></button>
                        <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', marginLeft: '6px' }}><Trash2 size={14} /></button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* EcoCoins Discount Application Slider */}
                <div className="eco-coins-redeem-panel glass-card" style={{ padding: '14px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.06)', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fbbf24', fontSize: '0.85rem', fontWeight: 700 }}>
                      <Coins size={16} />
                      <span>Redeem EcoCoins for Discount</span>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Balance: 🪙 {userCoins}</span>
                  </div>

                  {userCoins > 0 ? (
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                        <span>Redeem {appliedCoins} Coins</span>
                        <strong style={{ color: 'var(--emerald-400)' }}>- ₹{coinDiscountAmount} OFF</strong>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max={maxCoinsUsable} 
                        step="10"
                        value={appliedCoins}
                        onChange={(e) => setEcoCoinsToRedeem(+e.target.value)}
                        style={{ width: '100%' }}
                      />
                    </div>
                  ) : (
                    <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Complete recycling actions to earn EcoCoins and get instant discounts!</p>
                  )}
                </div>

                {/* Totals Summary */}
                <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '12px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    <span>Subtotal:</span>
                    <span>₹{cartSubtotal}</span>
                  </div>
                  {coinDiscountAmount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--emerald-400)', marginBottom: '4px' }}>
                      <span>EcoCoins Discount:</span>
                      <span>- ₹{coinDiscountAmount}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginTop: '6px' }}>
                    <span>Final Amount:</span>
                    <span>₹{cartFinalTotal}</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--emerald-400)', marginTop: '4px', textAlign: 'right' }}>
                    + Earn {totalCoinsReward} EcoCoins • Saves {totalPlasticOffset} kg plastic!
                  </div>
                </div>

                {/* Checkout CTA */}
                <button 
                  className="btn btn-primary full-width"
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                >
                  <span>Proceed to Secure Checkout</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SECURE PAYMENT GATEWAY CHECKOUT MODAL */}
      {isCheckoutOpen && (
        <div className="modal-backdrop" onClick={() => setIsCheckoutOpen(false)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px', width: '90%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-glass)', paddingBottom: '14px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={20} className="eco-text" />
                <h3 style={{ margin: 0, fontSize: '1.15rem' }}>Secure Checkout (256-Bit SSL)</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setIsCheckoutOpen(false)}><X size={18} /></button>
            </div>

            {/* Delivery Destination */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>Delivery Address / Campus Pickup Point:</label>
              <input 
                type="text" 
                value={deliveryAddress} 
                onChange={(e) => setDeliveryAddress(e.target.value)}
                style={{ width: '100%', padding: '8px 12px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-glass)', borderRadius: '10px', color: '#fff', fontSize: '0.85rem' }}
              />
            </div>

            {/* Payment Method Selector */}
            <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>Select Payment Gateway:</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '16px' }}>
              {[
                { id: 'gpay', label: 'Google Pay / UPI QR', icon: '📱' },
                { id: 'card', label: 'Credit / Debit Card', icon: '💳' },
                { id: 'netbanking', label: 'Net Banking', icon: '🏛️' },
                { id: 'cod', label: 'Canteen Pay-on-Pickup', icon: '💵' }
              ].map((m) => (
                <div 
                  key={m.id} 
                  className={`glass-card ${paymentMethod === m.id ? 'active-node' : ''}`}
                  onClick={() => setPaymentMethod(m.id)}
                  style={{ padding: '10px', borderRadius: '10px', cursor: 'pointer', textAlign: 'center', borderColor: paymentMethod === m.id ? 'var(--emerald-500)' : 'var(--border-glass)' }}
                >
                  <div style={{ fontSize: '1.3rem' }}>{m.icon}</div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, marginTop: '4px' }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* UPI QR Display if GPay */}
            {paymentMethod === 'gpay' && (
              <div className="glass-card" style={{ padding: '12px', textAlign: 'center', borderRadius: '12px', background: 'rgba(0,0,0,0.3)', marginBottom: '16px' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--emerald-400)', marginBottom: '4px' }}>⚡ Scan & Pay with any UPI App:</div>
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=upi://pay?pa=pragatiecosphere@okaxis&pn=EcoSphere&am=100&cu=INR" 
                  alt="UPI QR Code" 
                  style={{ width: '100px', height: '100px', borderRadius: '8px', margin: '6px auto', display: 'block' }}
                />
                <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>UPI ID: <strong>pragatiecosphere@okaxis</strong></span>
              </div>
            )}

            {/* Amount and Pay CTA */}
            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px', borderRadius: '12px', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Total Payable:</span>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--emerald-400)' }}>₹{cartFinalTotal}</div>
              </div>
              <div style={{ textAlign: 'right', fontSize: '0.72rem', color: 'var(--amber-gold)' }}>
                🪙 +{totalCoinsReward} Coins on completion
              </div>
            </div>

            <button 
              className="btn btn-primary full-width"
              onClick={handleExecutePayment}
              disabled={isProcessingPayment}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '12px' }}
            >
              <CreditCard size={18} />
              <span>{isProcessingPayment ? 'Processing Encrypted Payment...' : `Pay ₹${cartFinalTotal} Securely`}</span>
            </button>
          </div>
        </div>
      )}

      {/* VENDOR PRODUCT LISTING MODAL */}
      {isVendorModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsVendorModalOpen(false)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px', width: '90%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-glass)', paddingBottom: '14px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Store size={20} className="eco-text" />
                <h3 style={{ margin: 0, fontSize: '1.15rem' }}>List Eco-Product as Vendor</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setIsVendorModalOpen(false)}><X size={18} /></button>
            </div>

            <form onSubmit={handleAddVendorProduct} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '3px' }}>Product Title:</label>
                <input 
                  type="text" 
                  placeholder="e.g. Washable Denim Carry Tote" 
                  value={newVendorProduct.name}
                  onChange={(e) => setNewVendorProduct({ ...newVendorProduct, name: e.target.value })}
                  style={{ width: '100%', padding: '8px 10px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-glass)', borderRadius: '8px', color: '#fff', fontSize: '0.85rem' }}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '3px' }}>Category:</label>
                  <select 
                    value={newVendorProduct.category}
                    onChange={(e) => setNewVendorProduct({ ...newVendorProduct, category: e.target.value })}
                    style={{ width: '100%', padding: '8px 10px', background: '#1e293b', border: '1px solid var(--border-glass)', borderRadius: '8px', color: '#fff', fontSize: '0.85rem' }}
                  >
                    <option value="bags">Cloth & Jute Bags</option>
                    <option value="bottles">Steel Flasks & Bottles</option>
                    <option value="straws">Bamboo Straws</option>
                    <option value="dinnerware">Palm Leaf Plates</option>
                    <option value="upcycled">Upcycled Crafts</option>
                    <option value="packaging">Eco Packaging</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '3px' }}>Price (₹):</label>
                  <input 
                    type="number" 
                    placeholder="99" 
                    value={newVendorProduct.price}
                    onChange={(e) => setNewVendorProduct({ ...newVendorProduct, price: e.target.value })}
                    style={{ width: '100%', padding: '8px 10px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-glass)', borderRadius: '8px', color: '#fff', fontSize: '0.85rem' }}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '3px' }}>Vendor / Store Name:</label>
                  <input 
                    type="text" 
                    value={newVendorProduct.vendorName}
                    onChange={(e) => setNewVendorProduct({ ...newVendorProduct, vendorName: e.target.value })}
                    style={{ width: '100%', padding: '8px 10px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-glass)', borderRadius: '8px', color: '#fff', fontSize: '0.85rem' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '3px' }}>Plastic Saved (kg/item):</label>
                  <input 
                    type="number" 
                    placeholder="12.5" 
                    value={newVendorProduct.plasticOffsetKg}
                    onChange={(e) => setNewVendorProduct({ ...newVendorProduct, plasticOffsetKg: e.target.value })}
                    style={{ width: '100%', padding: '8px 10px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-glass)', borderRadius: '8px', color: '#fff', fontSize: '0.85rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '3px' }}>Short Description:</label>
                <textarea 
                  rows="2"
                  placeholder="Describe sustainable materials, washability, and plastic-saving features..."
                  value={newVendorProduct.description}
                  onChange={(e) => setNewVendorProduct({ ...newVendorProduct, description: e.target.value })}
                  style={{ width: '100%', padding: '8px 10px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-glass)', borderRadius: '8px', color: '#fff', fontSize: '0.85rem' }}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary full-width"
                style={{ marginTop: '8px' }}
              >
                + Publish Eco-Product Listing
              </button>
            </form>
          </div>
        </div>
      )}

      {/* COMPLETED ORDER CONFIRMATION MODAL */}
      {completedOrder && (
        <div className="modal-backdrop" onClick={() => setCompletedOrder(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px', width: '90%', textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16,185,129,0.2)', color: 'var(--emerald-400)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ margin: '0 0 6px', fontSize: '1.3rem' }}>Order Placed Successfully! 🎉</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>
              Your order <strong>{completedOrder.orderId}</strong> has been confirmed.
            </p>

            <div className="glass-card" style={{ padding: '16px', borderRadius: '12px', background: 'rgba(0,0,0,0.3)', marginBottom: '18px', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.82rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Amount Paid:</span>
                <strong style={{ color: '#fff' }}>₹{completedOrder.totalPaid}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.82rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Plastic Offset Achieved:</span>
                <strong style={{ color: 'var(--emerald-400)' }}>🌱 {completedOrder.plasticOffsetKg} kg plastic saved</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>EcoCoins Earned:</span>
                <strong style={{ color: '#fbbf24' }}>🪙 +{completedOrder.coinsEarned} Coins Credited</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="btn btn-secondary full-width"
                onClick={() => {
                  setActiveMarketTab('orders');
                  setCompletedOrder(null);
                }}
              >
                View in Orders
              </button>
              <button 
                className="btn btn-primary full-width"
                onClick={() => setCompletedOrder(null)}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
