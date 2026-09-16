export const MOCK_VIDEOS = {
  problem: {
    id: "prob_vid_101",
    title: "The Plastic Planet Crisis: Impact on Humans & Wildlife",
    duration: "10:00",
    embedUrl: "https://www.youtube.com/embed/ggh0Ptk3VGE",
    thumbnail: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=800&q=80",
    description: "An in-depth 10-minute documentary exploring single-use plastics (bags, bottles, cups), microplastic bioaccumulation, marine animal mortality, and chemical hazards in soil and drinking water.",
    chapters: [
      { time: "0:00", title: "Single-Use Plastic Surge (Bags, Bottles, Cups)" },
      { time: "2:15", title: "Impact on Local Rivers & Marine Wildlife" },
      { time: "4:40", title: "Microplastics in Human Bloodstream & Food Chain" },
      { time: "7:10", title: "Toxic Open Air Burning & Landfill Methane" },
      { time: "9:00", title: "The Urgent Call for Small-Scale Action" }
    ]
  },
  solution: {
    id: "sol_vid_102",
    title: "Zero-Waste Blueprint: 7 Solutions for a Plastic-Free Tomorrow",
    duration: "10:00",
    embedUrl: "https://www.youtube.com/embed/6jQ7y_qQYUA",
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    description: "Discover 7 powerful, low-cost plastic reduction solutions that students, vendors, and households can implement immediately to create a circular economy.",
    chapters: [
      { time: "0:00", title: "1. IoT Smart Dustbins with ESP32 & Rewards" },
      { time: "1:45", title: "2. Eco Marketplace & Direct Buying Dashboard" },
      { time: "3:20", title: "3. Smart Recycling Hubs & Segregation Stations" },
      { time: "5:00", title: "4. Circular Cup Library for Eateries" },
      { time: "6:30", title: "5. Plastic Upcycling & Eco-Brick Furniture" },
      { time: "8:00", title: "6. Green Transport & Packaging Reduction" },
      { time: "9:15", title: "7. EcoSphere Rewards & EcoCoins Gamification" }
    ]
  }
};

export const LIVE_POLLUTION_METRICS = {
  plasticDumpedPerSecKg: 420.5,
  oceanMicroplasticsTons: 15420900,
  airQualityIndex: 168,
  landfillCapacityUsedPct: 87.4,
  localSingleUseBagsDaily: 14500,
  carbonConcentrationPpm: 422.4
};

export const PROBLEM_DISADVANTAGES = [
  {
    id: "dis_1",
    title: "Microplastics in Human Food Chain & Bloodstream",
    icon: "Activity",
    severity: "CRITICAL",
    impact: "Humans ingest an average of 5 grams of microplastics weekly (the mass of a credit card), causing severe endocrine disruption, cytotoxicity, and cellular inflammation.",
    stat: "5g / Week Ingestion",
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dis_2",
    title: "Marine & Terrestrial Wildlife Mortality",
    icon: "AlertTriangle",
    severity: "HIGH",
    impact: "Over 1 million seabirds and 100,000 marine animals die annually from plastic bag ingestion and six-pack ring entanglement in coastal waters.",
    stat: "1M+ Wildlife / Year",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dis_3",
    title: "Toxic Open-Air Burning & Carcinogenic Dioxins",
    icon: "Flame",
    severity: "CRITICAL",
    impact: "Uncontrolled incineration of PVC and polythene releases carcinogenic dioxins, furans, and black carbon, drastically degrading local air quality (AQI 300+).",
    stat: "Dioxins & Furans",
    image: "https://images.unsplash.com/photo-1565697669460-642146e91986?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dis_4",
    title: "Soil Infertility & Agricultural Drain Blockages",
    icon: "ZapOff",
    severity: "HIGH",
    impact: "Discarded plastic films block root aeration, lower soil water retention by 45%, choke agricultural storm channels, and leach toxic phthalates into the water table.",
    stat: "-45% Soil Retention",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80"
  }
];

export const SEVEN_SOLUTIONS = [
  {
    id: "sol_1",
    title: "1. IoT Smart Dustbin",
    category: "Smart Tech & IoT Innovation",
    summary: "Construct low-cost ultrasonic smart bins with automatic servo lids that log fill levels to GCP Cloud and award instant EcoCoins.",
    heroImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80",
    impactMultiplier: "Increases campus sorting rate by 340% • Real-time telemetry on EcoSphere",
    videoUrl: "https://www.youtube.com/embed/ggh0Ptk3VGE",
    watchUrl: "https://www.youtube.com/watch?v=ggh0Ptk3VGE",
    videoId: "ggh0Ptk3VGE",
    thumbnailUrl: "https://img.youtube.com/vi/ggh0Ptk3VGE/hqdefault.jpg",
    diyTutorial: "DIY Guide + Video: ESP32 Ultrasonic Smart Bin with Automatic Servo Lid & Cloud Sync",
    totalEstimatedBudget: "₹750 Total (Built by Pragati ECE/CSE Students)",
    costCuttingTip: "Re-use old campus plastic dustbins and borrow microcontroller kits from college ECE lab to reduce cost to ₹200!",
    executiveSummary: "Traditional unmonitored waste bins suffer from frequent overflow, leading to unsegregated littering and delayed pickup. This IoT Smart Bin system integrates an ESP32 microcontroller with an HC-SR04 ultrasonic distance sensor, an SG90 automatic servo lid actuator, and an OLED QR-code display to track fill status live over Wi-Fi and reward users automatically with EcoCoins.",
    problemContext: "Educational campuses and public spaces generate hundreds of kilograms of discarded PET bottles daily. Without fill-level telemetry, sanitation staff spend inefficient manual hours checking empty bins while overloaded bins spill onto lawns. This open-source hardware solution provides automated lid opening, telemetry logging to GCP Firebase, and student rewards.",
    technicalArchitecture: {
      diagramTitle: "ESP32 Pinout & Sensor Wiring Topology",
      microcontroller: "ESP32-WROOM-32D (240MHz Dual-Core, 520KB SRAM, Integrated 2.4GHz Wi-Fi)",
      ultrasonicSensor: "HC-SR04 (Trig -> GPIO 5, Echo -> GPIO 18, Operating VCC: 5V DC)",
      servoActuator: "SG90 9g Micro Servo (PWM Control -> GPIO 13, Torque: 1.8 kg-cm)",
      displayModule: "0.96 inch I2C OLED (SDA -> GPIO 21, SCL -> GPIO 22, Address: 0x3C)",
      powerSystem: "18650 3.7V 2600mAh Li-ion Battery with TP4056 USB-C Charge Controller"
    },
    materialsNeeded: [
      { name: "ESP32 Wi-Fi Microcontroller Board", qty: "1 Unit", cost: "₹340", source: "Robotics Electronics Store Kakinada / Online" },
      { name: "HC-SR04 Ultrasonic Distance Sensor", qty: "1 Unit", cost: "₹75", source: "Pragati ECE Lab / Local Hobby Shop" },
      { name: "SG90 Micro Servo Motor (Automatic Lid)", qty: "1 Unit", cost: "₹110", source: "Electronics Lab Component Kit" },
      { name: "0.96 inch OLED I2C Display (QR Code)", qty: "1 Unit", cost: "₹145", source: "Robocraze / Local Supplier" },
      { name: "5V 2A Power Adapter / Solar Battery", qty: "1 Unit", cost: "₹80", source: "Recycled Mobile Charger" }
    ],
    actionPlan: [
      "Phase 1 (Circuit Breadboard Assembly): Mount ESP32. Wire HC-SR04, SG90 Servo, and I2C OLED display.",
      "Phase 2 (Firmware Compilation & Flashing): Flash EcoSphere C++ telemetry code using Arduino IDE 2.0.",
      "Phase 3 (Physical Bin Enclosure Fitting): Cut 2cm sensor window on bin lid. Mount waterproof enclosure.",
      "Phase 4 (Cloud Calibration & GCP Sync): Calibrate 0% empty (100cm) and 100% full (10cm). Deploy at Canteen."
    ],
    detailedSteps: [
      {
        step: 1,
        title: "Phase 1: Microcontroller Breadboard Pinout & Signal Wiring",
        desc: "Place the ESP32 board onto a 400-point solderless breadboard. Connect VCC pins of HC-SR04, SG90 Servo, and OLED display to the 5V rail, and ground pins to the common GND rail. Connect HC-SR04 TRIG to GPIO 5, ECHO to GPIO 18, Servo Signal line to GPIO 13, OLED SDA to GPIO 21, and OLED SCL to GPIO 22.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 2,
        title: "Phase 2: Arduino C++ Firmware Uploading & Wi-Fi Provisioning",
        desc: "Open Arduino IDE. Install ESP32 Board Manager and libraries: ESP32Servo, Adafruit_SSD1306, and HTTPClient. Load the open-source EcoSphere C++ firmware snippet. Update SSID, WPA2 password, and GCP Firebase REST endpoint URL. Click Upload at 115200 baud rate and verify serial monitor output.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 3,
        title: "Phase 3: Mechanical Servo Arm & Sensor Enclosure Mounting",
        desc: "Using a 20mm hole saw, drill two circular apertures on the bin lid for the ultrasonic transducer eyes. Secure the sensor using hot melt adhesive inside an IP65 casing. Screw the SG90 horn lever to the bin's hinged push-flap using M2 screws so a 90° rotation swings the lid fully open for 4 seconds.",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 4,
        title: "Phase 4: Sensor Calibration, GCP Telemetry & QR Reward Testing",
        desc: "Set empty baseline distance (100cm). Test with discarded PET bottles: when a bottle falls past the 15cm threshold, the code increments plastic counter, opens lid via PWM signal, and renders a dynamic EcoCoins reward QR code on the OLED. Verify live JSON payload POST to EcoSphere Cloud API.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      }
    ],
    fieldDeploymentTesting: {
      loadTestProtocol: "Ultrasonic range error ±0.3cm between 2cm and 400cm.",
      washability: "Deep-sleep power consumption = 15µA. Operates for 24 days on single 18650 cell.",
      costBenefitRatio: "If Wi-Fi drops, telemetry records queue locally in ESP32 SPIFFS flash memory and auto-sync upon reconnection."
    },
    howToMake: {
      title: "ESP32 Ultrasonic Smart Recycling Bin Blueprint",
      timeRequired: "1.5 Hours",
      toolsNeeded: ["Soldering Iron", "Glue Gun", "Arduino IDE Software", "Laptop"],
      localVendors: [
        { name: "Surya Electronics Component Hub", location: "Main Road, Surampalem", contact: "+91 94401 88990" },
        { name: "Pragati ECE IoT Innovation Center", location: "Block A, Room 204, Pragati College", contact: "iot@pragati.ac.in" }
      ],
      blueprintSummary: "Complete circuit schematic, pin mapping table, and C++ source code downloadable directly inside EcoBot chat!"
    },
    learnFaq: [
      {
        q: "How does the bin reward students with EcoCoins?",
        a: "When a plastic bottle drops past the ultrasonic sensor, the distance change triggers the servo lid while generating a dynamic QR code on the OLED for +15 EcoCoins."
      },
      {
        q: "What is the battery lifetime?",
        a: "Using a standard 18650 Li-ion battery with ESP32 deep-sleep mode, the bin runs for 3 weeks continuously before recharging."
      }
    ]
  },
  {
    id: "sol_2",
    title: "2. Eco Marketplace",
    category: "Commerce & Buying Dashboard",
    summary: "Online eco-marketplace connecting users to verified vendors for cloth bags, steel bottles, bamboo cutlery, and zero-waste items with EcoCoin discounts.",
    heroImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    impactMultiplier: "Replaces 50,000+ single-use plastic items annually • Empowers 12+ green partner companies",
    videoUrl: "https://www.youtube.com/embed/6jQ7y_qQYUA",
    watchUrl: "https://www.youtube.com/watch?v=6jQ7y_qQYUA",
    videoId: "6jQ7y_qQYUA",
    thumbnailUrl: "https://img.youtube.com/vi/6jQ7y_qQYUA/hqdefault.jpg",
    diyTutorial: "Vendor & Consumer Guide: Purchasing & Listing Plastic-Free Alternatives Online",
    totalEstimatedBudget: "₹35 - ₹299 (Products) / 100% Free for Vendors to List",
    costCuttingTip: "Redeem your earned EcoCoins at checkout to get instant cash discounts (100 Coins = ₹50 OFF)!",
    executiveSummary: "The Eco Marketplace acts as the central decentralized commerce engine of EcoSphere, bridging sustainable manufacturers, local cottage industries, and conscious buyers. Through direct online checkout, secure UPI/card payment gateways, and tokenized EcoCoin discounts, it drives mass adoption of reusable cotton totes, copper flasks, and bamboo straws.",
    problemContext: "Consumers frequently resort to single-use plastics due to lack of immediate access to affordable alternatives. The Eco Marketplace removes friction by providing curated certified products, verified partner sellers, transparent plastic-offset metrics, and gamified discounts.",
    technicalArchitecture: {
      diagramTitle: "Marketplace Cart, Payment Gateway & Ledger Architecture",
      paymentGateway: "Simulated 256-bit Encrypted Multi-Modal Gateway (Google Pay, UPI QR, Cards)",
      discountEngine: "Dynamic EcoCoins Burn Rate: 1 EcoCoin = ₹0.50 Direct Cart Deduction",
      inventorySync: "Real-time GCP Cloud Firestore Product Catalog with Vendor Self-Listing API",
      invoiceProtocol: "Instant Digital Tax Invoice generation with Plastic Offset Audit Certificate"
    },
    materialsNeeded: [
      { name: "Organic Jute & Heavy Cotton Bags (Bulk Pack)", qty: "1 Bundle (100 Pcs)", cost: "₹35 / bag", source: "Kakinada Jute Depot / Eco-Store" },
      { name: "Food-Grade 304 Stainless Steel Water Bottles", qty: "1 Unit", cost: "₹249", source: "Pragati Eco-Store / BambuCraft" },
      { name: "Organic Bamboo Straws & Cleaning Brush Kit", qty: "Pack of 6", cost: "₹69", source: "GreenSprout India" },
      { name: "Areca Palm Pressed Leaf Plates & Bowls", qty: "Pack of 25", cost: "₹110", source: "Surampalem Cottage Industry" }
    ],
    actionPlan: [
      "Phase 1 (Vendor Onboarding): Verified local vendors submit sustainable product listings with plastic-offset ratings.",
      "Phase 2 (Direct Online Shopping): Users browse catalog, filter by product category, and add items to cart.",
      "Phase 3 (EcoCoins Discount Redemption): Apply wallet coins to instantly reduce invoice total.",
      "Phase 4 (Secure Checkout & Green Receipt): Complete payment via Google Pay or UPI and download instant green receipt."
    ],
    detailedSteps: [
      {
        step: 1,
        title: "Phase 1: Catalog Browsing & Verified Vendor Certification",
        desc: "Explore verified vendors including GreenSprout India, BambuCraft, and Pragati Campus Eco-Store. Inspect itemized sustainability specs, customer ratings, and exact plastic reduction kg metrics per item.",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 2,
        title: "Phase 2: Add to Cart & EcoCoins Discount Slider",
        desc: "Select item quantities and proceed to the interactive cart drawer. Use the EcoCoins redemption slider to convert your earned reward balance into instant cash deductions before final payment.",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 3,
        title: "Phase 3: Secure Multi-Gateway Payment Processing",
        desc: "Select preferred payment mode (Google Pay, UPI QR code, Debit/Credit Card, or Canteen Pay-on-Pickup). The encrypted gateway verifies transactions instantly with zero platform fee.",
        image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 4,
        title: "Phase 4: Instant Order Tracking & Downloadable Green Invoice",
        desc: "Receive immediate order confirmation accompanied by an official Green Tax Invoice detailing total plastic mass saved and bonus EcoCoins credited to your wallet.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
      }
    ],
    fieldDeploymentTesting: {
      loadTestProtocol: "Processes up to 500 concurrent checkout sessions with sub-second response times.",
      washability: "100% plastic-free packaging guarantee for all physical product deliveries.",
      costBenefitRatio: "Saves consumers an average of ₹180/month compared to buying single-use bottled beverages."
    },
    howToMake: {
      title: "Online Buying Dashboard & Eco-Vendor Portal",
      timeRequired: "Instant Access 24/7",
      toolsNeeded: ["Web Browser / Mobile Device", "Google Pay / UPI App", "EcoCoins Wallet"],
      localVendors: [
        { name: "Pragati Campus Eco-Store", location: "Near Main Gate, Pragati College", contact: "+91 98480 12345" },
        { name: "GreenSprout India Wholesale", location: "Surampalem Industrial Area", contact: "+91 884 2345678" }
      ],
      blueprintSummary: "Browse eco items, apply EcoCoins for cash discounts, check out via Google Pay, get zero-plastic deliveries!"
    },
    learnFaq: [
      {
        q: "How can vendors list their products on the Eco Marketplace?",
        a: "Vendors click 'List Your Product' on the marketplace tab, submit product specs and photos, which are approved within 2 hours by Greenery Club admins."
      },
      {
        q: "Can I use EcoCoins to buy products completely free?",
        a: "Yes! Up to 50% of an order's total value can be covered directly using your accumulated EcoCoins balance."
      }
    ]
  },
  {
    id: "sol_3",
    title: "3. Smart Recycling Hub",
    category: "Infrastructure & Collection",
    summary: "Establish decentralized small-scale recycling stations with automated sorting, digital drop-off logging, and campus collection maps.",
    heroImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80",
    impactMultiplier: "Diverts 85% of campus polymer waste from landfills • 3 Active Stations",
    videoUrl: "https://www.youtube.com/embed/ggh0Ptk3VGE",
    watchUrl: "https://www.youtube.com/watch?v=ggh0Ptk3VGE",
    videoId: "ggh0Ptk3VGE",
    thumbnailUrl: "https://img.youtube.com/vi/ggh0Ptk3VGE/hqdefault.jpg",
    diyTutorial: "Station Blueprint: Setting Up a 3-Stream Smart Recycling Kiosk on Campus",
    totalEstimatedBudget: "₹1,200 (3-Bin Station Fabrication)",
    costCuttingTip: "Use color-coded upcycled oil drums with stencil spray paint for durable outdoor recycling hubs!",
    executiveSummary: "Unsegregated waste dumping renders recyclable polymers unusable due to cross-contamination with food grease. The Smart Recycling Hub implements a 3-stream segregated collection architecture (PET Bottles, Soft MLP Wrappers, and Rigid Plastics) connected to real-time IoT load-cells and mobile drop-off logging.",
    problemContext: "Over 80% of plastic thrown into general trash bins is never recycled because post-collection manual sorting is labor-intensive and costly. By implementing localized Smart Recycling Hubs at high-footfall spots, source-level purity reaches 98%, making immediate mechanical reprocessing possible.",
    technicalArchitecture: {
      diagramTitle: "3-Stream Segregation & Ultrasonic Fill-Level Matrix",
      stream1: "Clear PET / HDPE Bottles (Color Code: Emerald Green - Target Density: High Value)",
      stream2: "Multi-Layer Plastic Wrappers (Color Code: Amber Orange - Routed to EcoBricks)",
      stream3: "Rigid Polypropylene & Cutlery (Color Code: Sky Blue - Routed to Shredder)",
      telemetryLink: "LoRaWAN / Wi-Fi Mesh linking all campus bins to central EcoSphere telemetry"
    },
    materialsNeeded: [
      { name: "200L Heavy-Duty Segregated HDPE Drums", qty: "3 Barrels", cost: "₹600", source: "Surampalem Hardware Supply" },
      { name: "Waterproof Weather Stencil Labels & Paint", qty: "1 Kit", cost: "₹150", source: "Local Paint Depot" },
      { name: "HC-SR04 Ultrasonic Distance Sensor Modules", qty: "3 Units", cost: "₹225", source: "ECE Labs" },
      { name: "Digital QR Check-in Plaque", qty: "3 Plates", cost: "₹75", source: "Printing Shop Pragati Gate" }
    ],
    actionPlan: [
      "Phase 1 (Site Selection): Map high-waste traffic zones (Canteen, Library Quadrangle, Hostel Corridors).",
      "Phase 2 (Bin Fabrication & Stenciling): Paint drums in standard color codes with clear visual icon signage.",
      "Phase 3 (Sensor & QR Deployment): Install IoT fill sensors and adhesive reward check-in QR codes.",
      "Phase 4 (Squad Schedule & Hauling): Coordinate weekly pickup with Greenery Club volunteer squads."
    ],
    detailedSteps: [
      {
        step: 1,
        title: "Phase 1: Footfall Mapping & Kiosk Zoning",
        desc: "Survey campus footfall density. Position 3-stream hubs within 30 meters of food preparation and beverage vending zones to intercept single-use plastics immediately after use.",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 2,
        title: "Phase 2: Color-Coded Drum Fabrication & Apertures",
        desc: "Cut custom-shaped entry apertures: round holes for bottles, narrow horizontal slots for soft film wrappers. Apply UV-resistant polyurethane enamel paint with multi-lingual Telugu/English instructional signs.",
        image: "https://images.unsplash.com/photo-1584473457406-6df3a6372104?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 3,
        title: "Phase 3: Real-Time Telemetry Integration",
        desc: "Mount battery-powered ESP32 nodes under bin lids. When fill level exceeds 85%, automated Webhook alerts are dispatched to sanitation supervisors and Greenery Club coordinators.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 4,
        title: "Phase 4: Drop-Off QR Rewards Verification",
        desc: "Users scan the hub's unique dynamic QR code upon dropping clean plastics, logging verified kilograms to their profile and earning +30 EcoCoins per drop.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
      }
    ],
    fieldDeploymentTesting: {
      loadTestProtocol: "Tested with 150 daily bottle deposits; 0% sensor jamming over 60-day trial.",
      washability: "Weatherproof IP65 housing withstands heavy monsoon downpours.",
      costBenefitRatio: "Reduces campus general waste hauling fees by ₹4,500 monthly."
    },
    howToMake: {
      title: "Smart Campus Recycling Hub Blueprint",
      timeRequired: "2 Hours Setup",
      toolsNeeded: ["Jigsaw / Hole Saw", "Riveting Gun", "Spray Paint", "Drill"],
      localVendors: [
        { name: "Pragati Greenery Operations Hub", location: "Block C Ground, Pragati Campus", contact: "greenery@pragati.ac.in" }
      ],
      blueprintSummary: "Set up 3 color-coded bins with IoT fill alerts, track recycling metrics live, reward depositors!"
    },
    learnFaq: [
      {
        q: "Why are separate slots necessary for bottles vs wrappers?",
        a: "Bottles are rigid PET polymers easily melted into yarn, while snack wrappers are multi-layer polymers destined for EcoBrick compression. Pre-sorting prevents batch contamination."
      }
    ]
  },
  {
    id: "sol_4",
    title: "4. Cup Library",
    category: "Circular Reuse System",
    summary: "Implement a borrow-return system for stainless steel cups in eateries, backed by QR deposit/refund and 3-stage UV-C sanitization.",
    heroImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
    impactMultiplier: "Eliminates 25,000 plastic/wax cups monthly • Earns Vendor Green Certification",
    videoUrl: "https://www.youtube.com/embed/1kUE0BZtTRc",
    watchUrl: "https://www.youtube.com/watch?v=1kUE0BZtTRc",
    videoId: "1kUE0BZtTRc",
    thumbnailUrl: "https://img.youtube.com/vi/1kUE0BZtTRc/hqdefault.jpg",
    diyTutorial: "Dedicated Video Guide: Implementing a Circular Cup Library in Small Eateries",
    totalEstimatedBudget: "₹4,150 (100 Steel Cups + UV-C Sanitizer Box)",
    costCuttingTip: "Canteens save ₹3,000 monthly on disposable cups by implementing a ₹10 refundable digital deposit!",
    executiveSummary: "Disposable polypropylene (PP) tea cups and wax-lined paper cups generate massive non-biodegradable waste in canteens and tea kiosks. This Cup Library blueprint implements a circular rental model utilizing food-grade 304 stainless steel cups, an encrypted digital QR deposit-refund protocol, and automated UV-C sterilization.",
    problemContext: "A single campus canteen consumes over 800 single-use tea cups daily. These cups cannot be recycled due to wax coatings and end up burning in toxic open piles. The Cup Library eliminates recurring cup purchases for vendors while guaranteeing 100% hygienic reusable tableware for students.",
    technicalArchitecture: {
      diagramTitle: "Circular QR Token & 3-Stage Sanitization Workflow",
      cupSpec: "200ml Double-Walled 304 Food-Grade Stainless Steel Cup (Laser-engraved serial QR code)",
      sanitizationProtocol: "50°C Bio-Enzyme Scrub -> 85°C Thermal Water Jet -> 5-min UV-C Cabinet Sterilization",
      depositSmartToken: "₹10 Refundable Digital Hold on EcoSphere Wallet released automatically upon cup return"
    },
    materialsNeeded: [
      { name: "304 Grade Stainless Steel Cups (Set of 100)", qty: "100 Units", cost: "₹2,800", source: "Wholesale Steel Mart Kakinada" },
      { name: "UV-C 18W Sterilizer Cabinet Box", qty: "1 Unit", cost: "₹850", source: "Electronics Supplier Kakinada" },
      { name: "Bio-Enzymatic Lemon Sanitizing Wash", qty: "5 Liters", cost: "₹150", source: "Greenery Club DIY Production" },
      { name: "Drop-Off Return Scanner Kiosk Box", qty: "1 Box", cost: "₹350", source: "Campus Workshop" }
    ],
    actionPlan: [
      "Phase 1 (Stocking & Laser Engraving): Procure 100 steel cups engraved with unique serialized QR tokens.",
      "Phase 2 (Digital Wallet Integration): Configure ₹10 instant hold and release mechanism in EcoSphere app.",
      "Phase 3 (Sanitization Station Setup): Install 3-tier wash basin and UV-C germicidal drying cabinet at canteen.",
      "Phase 4 (Green Shield Certification): Audit canteen waste weekly and grant verified zero-waste eatery status."
    ],
    detailedSteps: [
      {
        step: 1,
        title: "Phase 1: Cup Inventory Procurement & QR Encoding",
        desc: "Laser-engrave each cup base with a high-contrast QR identifier linked to the EcoSphere digital library database to track real-time borrows and returns across multiple canteen stalls.",
        image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 2,
        title: "Phase 2: QR Scan-to-Borrow Counter Interaction",
        desc: "When ordering tea or coffee, the student scans the stall's EcoSphere QR code to place a ₹10 temporary hold on their wallet. No cash deposit is needed.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 3,
        title: "Phase 3: Drop-Box Return & Instant Deposit Release",
        desc: "After finishing the beverage, the student deposits the cup into any campus return drop-box. The integrated optical scanner scans the base, immediately releasing the ₹10 hold and crediting +5 bonus EcoCoins.",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 4,
        title: "Phase 4: 3-Stage Bio-Enzyme & UV-C Sanitization",
        desc: "Returned cups pass through the 3-stage washing kiosk: bio-enzymatic lemon scrub, 85°C hot water thermal rinse, and 5 minutes of UV-C light sterilization, achieving 99.99% germ elimination.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
      }
    ],
    fieldDeploymentTesting: {
      loadTestProtocol: "98.4% return rate achieved using ₹10 automated deposit incentive.",
      washability: "100% bacterial sterilization verified by Pragati Biotechnology lab tests.",
      costBenefitRatio: "Initial equipment investment recovered in 42 days of operation."
    },
    howToMake: {
      title: "Canteen Circular Cup Library Setup Guide",
      timeRequired: "1 Week Rollout",
      toolsNeeded: ["Dish Wash Kiosk", "QR Code Scanner", "Storage Racks", "UV Cabinet"],
      localVendors: [
        { name: "Kakinada Wholesale Steel Emporium", location: "Main Bazaar, Kakinada", contact: "+91 884 2554433" }
      ],
      blueprintSummary: "Eliminate 25,000 disposable plastic cups monthly using steel cup rental and UV-C sanitization!"
    },
    learnFaq: [
      {
        q: "Is drinking from shared steel cups completely hygienic?",
        a: "Yes. All cups undergo medical-grade 3-stage sanitization (85°C thermal water + UV-C light) far exceeding standard restaurant hygiene protocols."
      }
    ]
  },
  {
    id: "sol_5",
    title: "5. Plastic Upcycling",
    category: "Creative Recycling & DIY",
    summary: "Transform non-recyclable multi-layer plastic film (MLP) into tightly packed EcoBricks to construct durable campus garden benches and tables.",
    heroImage: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1200&q=80",
    impactMultiplier: "Locks away 500g non-recyclable plastic per bottle • Permanent campus garden furniture",
    videoUrl: "https://www.youtube.com/embed/3K1s8aJ89X0",
    watchUrl: "https://www.youtube.com/watch?v=3K1s8aJ89X0",
    videoId: "3K1s8aJ89X0",
    thumbnailUrl: "https://img.youtube.com/vi/3K1s8aJ89X0/hqdefault.jpg",
    diyTutorial: "Dedicated Video Tutorial: Building a Campus EcoBrick Bench Step-by-Step",
    totalEstimatedBudget: "₹0 Free (100% Upcycled Waste Materials)",
    costCuttingTip: "Build campus benches and retaining walls without spending any money on commercial concrete blocks!",
    executiveSummary: "Multi-layered plastic (MLP) wrappers used for chips, biscuits, and candy packaging cannot be recycled through conventional mechanical melting. An EcoBrick is a 1-liter PET bottle packed solid with clean, dry non-recyclable soft plastics to a minimum density of 0.33g/ml. These EcoBricks replace commercial concrete blocks in constructing outdoor furniture lasting over 100 years.",
    problemContext: "Snack kiosks produce thousands of soft plastic wrappers daily that litter lawns and wind up in open burning dumps. By mobilizing Pragati Greenery Club students to pack EcoBricks, non-recyclable plastic is permanently sequestered into sturdy, weather-proof outdoor furniture.",
    technicalArchitecture: {
      diagramTitle: "EcoBrick High-Density Compression & Adobe Mortar Matrix",
      ecoBrickStandard: "1-Liter PET Bottle packed to Minimum Mass = 330 grams (Target Density: 0.33g to 0.40g per ml)",
      compactionTools: "30cm Solid Wooden Packing Rod (Diameter: 18mm with rounded tip)",
      mortarComposition: "Adobe Soil Mix (1 Part Red Clay Soil, 1 Part Coarse Sand, 0.5 Part Chopped Rice Straw, Water)",
      compressiveStrength: "Tested EcoBrick Mortar Wall Compressive Strength = 4.2 MPa (Sufficient for 3-person seating bench)"
    },
    materialsNeeded: [
      { name: "Clean, Dry 1-Liter PET Plastic Bottles", qty: "30 Bottles", cost: "Free", source: "Campus Recycling Drives" },
      { name: "Non-Recyclable Soft Plastic Wrappers (MLP)", qty: "15 kg", cost: "Free", source: "Hostel & Canteen Snack Waste" },
      { name: "Wooden Compression Rod (30cm length)", qty: "1 Stick", cost: "Free", source: "Recycled Bamboo / Wooden Dowel" },
      { name: "Adobe Mud Mortar / Clay Soil Mix", qty: "2 Buckets", cost: "Free", source: "Campus Soil Pit" }
    ],
    actionPlan: [
      "Phase 1 (Wrapper Preparation): Wash soft plastic wrappers in mild soap water and dry completely in direct sunlight.",
      "Phase 2 (EcoBrick High-Density Packing): Stuff wrappers into bottle layer by layer, pushing down with wooden rod until mass >= 330g.",
      "Phase 3 (Bench Base Foundation): Dig a 15cm foundation trench; lay stone gravel base for rainwater drainage.",
      "Phase 4 (Mortar Layering & Bench Curing): Lay EcoBricks horizontally embedded in adobe clay mortar. Render smooth finish."
    ],
    detailedSteps: [
      {
        step: 1,
        title: "Phase 1: Wrapper Washing, Sun-Drying & Quality Sorting",
        desc: "Collect multi-layer snack wrappers (biscuit, chip, candy pouches). Wash thoroughly in a tub of soapy water to remove oil and food residues. Spread wrappers on wire mesh trays and sun-dry under direct sunlight for 6 hours until 100% moisture-free.",
        image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 2,
        title: "Phase 2: Precision High-Density Packing (Min 330g Target)",
        desc: "Push a soft colored plastic wrapper into the bottom of a 1L PET bottle for aesthetics. Add pieces of soft plastic wrappers, using a 30cm wooden dowel rod to push plastic firmly into every corner. Weigh on a digital scale to verify the bottle reaches at least 330g and cannot be squeezed by hand.",
        image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 3,
        title: "Phase 3: Foundation Trenching & Gravel Drainage Layering",
        desc: "Mark out a 150cm x 45cm bench footprint on campus grounds. Excavate a 15cm deep foundation trench. Fill the bottom 5cm with coarse gravel and tamp down firmly to prevent ground moisture capillary rise from weakening the adobe clay mortar.",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 4,
        title: "Phase 4: EcoBrick Horizontal Masonry & Adobe Clay Rendering",
        desc: "Mix red clay soil, coarse sand, chopped straw, and water into a smooth mortar paste. Lay a 3cm bed of mortar, then place EcoBricks horizontally side-by-side with 2cm gaps filled with mortar. Render the exterior with a smooth 2cm clay-lime plaster finish and seal with waterproof linseed oil.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
      }
    ],
    fieldDeploymentTesting: {
      loadTestProtocol: "Passed bottle density test (>0.33 g/ml). Zero deformation under 120kg weight.",
      washability: "UV-protected adobe render prevents plastic degradation for 100+ years.",
      costBenefitRatio: "30 EcoBricks lock away 15 kg of non-recyclable soft plastic film."
    },
    howToMake: {
      title: "Building Campus EcoBrick Bench Step-by-Step",
      timeRequired: "1 Hour per Bench",
      toolsNeeded: ["Wooden Compression Rod", "Digital Scale", "Trowel", "Clay Soil Bucket"],
      localVendors: [
        { name: "Pragati Greenery Club Upcycling Team", location: "Green Workshop, Pragati Campus", contact: "upcycle@pragati.ac.in" }
      ],
      blueprintSummary: "Pack 500g soft plastic into 1L PET bottle until hard, lay with clay mortar to build benches lasting 100+ years!"
    },
    learnFaq: [
      {
        q: "What can EcoBricks be used for on campus?",
        a: "Garden retaining walls, flowerbed borders, outdoor seating benches, and park tables."
      }
    ]
  },
  {
    id: "sol_6",
    title: "6. Green Transport Planner",
    category: "Zero-Emission Mobility & Packaging",
    summary: "Eliminate single-use plastic courier packaging, optimize low-carbon transport logistics, and mobilize campus carpooling and cycling.",
    heroImage: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80",
    impactMultiplier: "Prevents 1.2 tons of CO2 per carpool group • Replaces 10,000 plastic shipping mailers",
    videoUrl: "https://www.youtube.com/embed/2vJ7w1eBf7E",
    watchUrl: "https://www.youtube.com/watch?v=2vJ7w1eBf7E",
    videoId: "2vJ7w1eBf7E",
    thumbnailUrl: "https://img.youtube.com/vi/2vJ7w1eBf7E/hqdefault.jpg",
    diyTutorial: "Video Guide: Reusable Parcel Return Loops & Campus Carpooling Matching",
    totalEstimatedBudget: "₹0 Free Digital Coordination / Saves Fuel Expenses",
    costCuttingTip: "Students save 75% on daily fuel expenses by splitting rides with 3 carpool partners on EcoSphere!",
    executiveSummary: "E-commerce deliveries and daily single-occupant commuting generate colossal plastic packaging waste and fossil fuel emissions. This Green Transport Planner combines a reusable returnable packaging pouch system for campus parcels with an automated GIS ride-sharing algorithm to eliminate plastic bubble wrap and slash transport emissions.",
    problemContext: "Online parcel deliveries to college hostels generate over 400 plastic bubble mailers and adhesive tapes daily that cannot be recycled. Simultaneously, hundreds of single-rider motorcycles consume fossil fuels. Integrating package return drop-boxes with commuter carpooling solves both challenges in one unified system.",
    technicalArchitecture: {
      diagramTitle: "GIS Ride Matching & Circular Parcel Envelope Protocol",
      parcelSystem: "Reinforced Recycled PET / Canvas Pouch with Reusable Zip-Seal & NFC Barcode",
      carpoolAlgorithm: "Dijkstra's Shortest Path & Proximity Matcher (Max Corridor Deviation: 1.5 km)",
      carbonAudit: "Real-time CO2 and plastic reduction tracking synced to student EcoSphere profiles"
    },
    materialsNeeded: [
      { name: "Reusable Heavy Canvas Padded Courier Bags", qty: "50 Bags", cost: "₹1,200", source: "Pragati Greenery Logistics Hub" },
      { name: "Honeycomb Kraft Paper Packaging Roll", qty: "1 Roll (50m)", cost: "₹380", source: "Surampalem Paper Mart" },
      { name: "EcoSphere GIS Carpool Module Access", qty: "1 App Module", cost: "Free", source: "Pragati Student Portal" }
    ],
    actionPlan: [
      "Phase 1 (Campus Parcel Drop Hub): Set up reusable parcel unboxing station at hostel security gates.",
      "Phase 2 (Packaging Return Loop): Deliveries unboxed; plastic bubble mailers replaced with returnable canvas totes.",
      "Phase 3 (Carpool Route Registration): Students and faculty input daily departure corridors on EcoSphere.",
      "Phase 4 (Rally & Commute Rewards): Award +20 EcoCoins for carpooled trips and Friday cycling rallies."
    ],
    detailedSteps: [
      {
        step: 1,
        title: "Phase 1: Reusable Parcel Unboxing Kiosk Setup",
        desc: "Place a circular parcel unboxing kiosk at hostel main entrances. Students unbox online deliveries immediately, depositing non-plastic honeycomb cushioning and returnable mailers into the collection bin for re-use.",
        image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 2,
        title: "Phase 2: Campus Carpool GIS Route Registration",
        desc: "Log into EcoSphere with Pragati College Gmail. Enter departure origin (Kakinada, Samalkot, Rajahmundry) and available vehicle seats. The spatial matcher groups verified peers traveling the same corridor.",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 3,
        title: "Phase 3: Automated Ride Matching & Fuel Split Calculator",
        desc: "The system pairs 3 verified riders together with an integrated UPI split calculator (₹25/ride vs ₹100 individual petrol cost), automatically crediting +20 EcoCoins to the driver's profile upon verified arrival.",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 4,
        title: "Phase 4: Friday Green Cycling Rallies & Solar Hubs",
        desc: "Join Friday Green Cycling Rallies from Surampalem junction to campus, earning canteen vouchers and charging e-bikes at campus solar-powered benches.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80"
      }
    ],
    fieldDeploymentTesting: {
      loadTestProtocol: "Prevents 10,000 single-use plastic courier mailers annually.",
      washability: "1 carpool group of 4 students eliminates 1.2 metric tons CO2 emissions per academic year.",
      costBenefitRatio: "100% verified campus profiles with emergency GPS broadcasting."
    },
    howToMake: {
      title: "Setting Up Green Packaging Loops & Campus Carpooling",
      timeRequired: "5 Mins Registration",
      toolsNeeded: ["Smart Phone", "EcoSphere App", "Commuter Vehicle / Bicycle"],
      localVendors: [
        { name: "Pragati Greenery Club Bike Hub", location: "Hostel Ground Floor, Pragati Campus", contact: "bikehub@pragati.ac.in" }
      ],
      blueprintSummary: "Unbox parcels in circular totes, match daily rides with peers, save petrol, earn 10 EcoCoins per km!"
    },
    learnFaq: [
      {
        q: "How does carpooling reduce plastic pollution?",
        a: "Optimized logistics reduce courier delivery vehicle trips and single-use packaging runs across regional distribution hubs."
      }
    ]
  },
  {
    id: "sol_7",
    title: "7. EcoSphere Rewards",
    category: "Gamification & Community Incentives",
    summary: "Gamified token economy awarding EcoCoins for verified plastic-free actions, unlockable warrior tiers, and real tree planting.",
    heroImage: "https://images.unsplash.com/photo-1584473457406-6df3a6372104?auto=format&fit=crop&w=1200&q=80",
    impactMultiplier: "Over 14,000 EcoCoins issued • 1,280 real trees planted on Pragati Campus",
    videoUrl: "https://www.youtube.com/embed/6jQ7y_qQYUA",
    watchUrl: "https://www.youtube.com/watch?v=6jQ7y_qQYUA",
    videoId: "6jQ7y_qQYUA",
    thumbnailUrl: "https://img.youtube.com/vi/6jQ7y_qQYUA/hqdefault.jpg",
    diyTutorial: "Video Guide: Gamification Engine, Badges, and Redeeming Campus Perks",
    totalEstimatedBudget: "₹0 Free to Earn & Redeem",
    costCuttingTip: "Redeem 300 EcoCoins to have the Greenery Club plant a tagged Neem tree in your name with GPS tracking!",
    executiveSummary: "Sustained behavioral change requires immediate positive reinforcement. EcoSphere Rewards establishes a closed-loop gamified token economy where verifiable eco-actions (IoT bin plastic drops, cloth bag adoption, carpooling) are credited with cryptographically verified EcoCoins redeemable for canteen discounts and real tree plantations.",
    problemContext: "Traditional environmental appeals rely on passive guilt rather than active incentives. By turning plastic reduction into a competitive campus leaderboard with tier levels (Bronze Warrior to Platinum Eco-Guardian), student participation increases by over 400%.",
    technicalArchitecture: {
      diagramTitle: "EcoCoins Minting, Tier Verification & Ledger Proof",
      mintingTriggers: "IoT Smart Bin Drop (+15), Photo Problem Report (+150), Carpool (+50), Reusable Bag (+25)",
      tierEngine: "Bronze (<400) -> Silver (400-799) -> Gold (800-1499) -> Platinum Eco-Warrior (1500+)",
      gcpLedger: "Immutable user transaction logs stored in Google Cloud Firestore with real-time sync"
    },
    materialsNeeded: [
      { name: "Pragati EcoSphere Digital Wallet Account", qty: "1 Account", cost: "Free", source: "Google OAuth Single Sign-On" },
      { name: "Neem / Peepal Botanical Sapling with GPS Tag", qty: "1 Tree", cost: "300 EcoCoins", source: "Pragati Greenery Club Nursery" },
      { name: "Campus Canteen Meal & Smoothie Voucher", qty: "1 Voucher", cost: "150 EcoCoins", source: "Campus Food Services" }
    ],
    actionPlan: [
      "Phase 1 (Action Verification): Perform eco-action and scan IoT bin / upload photo report.",
      "Phase 2 (Automated Coin Minting): System credits EcoCoins directly to your Google Cloud ledger.",
      "Phase 3 (Tier Advancement): Climb the campus leaderboard and unlock exclusive digital badges.",
      "Phase 4 (Real-World Redemption): Redeem coins for canteen smoothies, marketplace discounts, or tree planting."
    ],
    detailedSteps: [
      {
        step: 1,
        title: "Phase 1: Zero-Plastic Action Logging",
        desc: "Deposit plastic bottles into IoT bins, decline plastic carry bags at canteen, or complete DIY challenges. The system validates the telemetry payload instantly.",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 2,
        title: "Phase 2: Real-Time GCP Cloud Wallet Credit",
        desc: "Coins are minted instantly to your profile with an animated celebratory particle burst and updated in the campus-wide leaderboard.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 3,
        title: "Phase 3: Unlocking Warrior Badges & Tiers",
        desc: "Progress from Bronze Warrior to Platinum Eco-Warrior. Unlock custom profile badges (Plastic Pioneer, Zero-Waste Hero) recognized on campus.",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 4,
        title: "Phase 4: Real-World Campus Benefits & Tree Planting",
        desc: "Spend coins in the Rewards Store: redeem ₹50 canteen vouchers or sponsor a permanent Neem sapling planted on campus with your custom dedication plaque.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
      }
    ],
    fieldDeploymentTesting: {
      loadTestProtocol: "Over 14,000 EcoCoins successfully transacted without double-spending.",
      washability: "1,280 real trees verified with satellite geo-tagging on Pragati campus grounds.",
      costBenefitRatio: "Zero operating overhead; funded through partner vendor sponsorship."
    },
    howToMake: {
      title: "EcoSphere Rewards & Token Economy Playbook",
      timeRequired: "Instant Rewards",
      toolsNeeded: ["EcoSphere Wallet", "Google Account"],
      localVendors: [
        { name: "Pragati Greenery Club Rewards Desk", location: "Central Library Garden, Pragati Campus", contact: "rewards@pragati.ac.in" }
      ],
      blueprintSummary: "Take plastic-free actions, earn EcoCoins automatically, climb leaderboards, plant real trees!"
    },
    learnFaq: [
      {
        q: "Do EcoCoins expire?",
        a: "No! EcoCoins remain in your verified GCP profile throughout your entire academic tenure at Pragati Engineering College."
      }
    ]
  }
];

export const MARKETPLACE_PRODUCTS = [
  {
    id: "prod_1",
    name: "Heavy-Duty Organic Jute & Cotton Carry Bag (Pack of 3)",
    category: "bags",
    price: 99,
    originalPrice: 150,
    ecoCoinsReward: 25,
    maxCoinsDiscount: 40,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviewsCount: 128,
    vendorName: "Pragati Eco-Store Cooperative",
    vendorLocation: "Near Pragati Gate, Surampalem",
    isTrending: true,
    badge: "BESTSELLER",
    plasticOffsetKg: 15.0,
    description: "Washable, double-stitched organic jute tote capable of holding up to 15kg load. Replaces 500+ single-use polythene bags annually.",
    inStock: true
  },
  {
    id: "prod_2",
    name: "Insulated 304 Stainless Steel Water Flask (750ml)",
    category: "bottles",
    price: 249,
    originalPrice: 399,
    ecoCoinsReward: 50,
    maxCoinsDiscount: 100,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    rating: 4.95,
    reviewsCount: 210,
    vendorName: "Earthly Living Essentials",
    vendorLocation: "Main Road, Kakinada",
    isTrending: true,
    badge: "HOT DEAL",
    plasticOffsetKg: 36.5,
    description: "Double-walled vacuum insulated flask keeping water chilled for 24h. Certified food-grade 304 steel eliminating plastic bottle purchases forever.",
    inStock: true
  },
  {
    id: "prod_3",
    name: "Organic Bamboo Straws & Coconut Fiber Brush Kit (Set of 6)",
    category: "straws",
    price: 69,
    originalPrice: 120,
    ecoCoinsReward: 20,
    maxCoinsDiscount: 30,
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviewsCount: 94,
    vendorName: "BambuCraft EcoWare",
    vendorLocation: "Cinema Road, Kakinada",
    isTrending: true,
    badge: "100% ORGANIC",
    plasticOffsetKg: 8.0,
    description: "Handcrafted natural bamboo straws with zero chemical varnish. Includes a pure coconut coir cleaning wire and cotton travel pouch.",
    inStock: true
  },
  {
    id: "prod_4",
    name: "Pressed Areca Palm Leaf Dinner Plates Set (Pack of 25)",
    category: "dinnerware",
    price: 119,
    originalPrice: 180,
    ecoCoinsReward: 30,
    maxCoinsDiscount: 50,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    rating: 4.85,
    reviewsCount: 76,
    vendorName: "Surya Green Organics",
    vendorLocation: "College Road, Surampalem",
    isTrending: false,
    badge: "COMPOSTABLE",
    plasticOffsetKg: 12.5,
    description: "Naturally shed Areca palm leaves heat-pressed into sturdy, leak-proof dinner plates. 100% backyard compostable in 60 days.",
    inStock: true
  },
  {
    id: "prod_5",
    name: "Bamboo Fiber Reusable Coffee & Tea Tumbler (350ml)",
    category: "bottles",
    price: 149,
    originalPrice: 220,
    ecoCoinsReward: 35,
    maxCoinsDiscount: 60,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    rating: 4.75,
    reviewsCount: 62,
    vendorName: "GreenSprout India",
    vendorLocation: "Surampalem Industrial Area",
    isTrending: true,
    badge: "ZERO WASTE",
    plasticOffsetKg: 18.0,
    description: "Thermal travel tumbler crafted from organic bamboo fiber and silicone thermal grip. Ideal for campus canteen tea and coffee refills.",
    inStock: true
  },
  {
    id: "prod_6",
    name: "Upcycled Plastic Eco-Brick Garden Planter Pot (Set of 2)",
    category: "upcycled",
    price: 89,
    originalPrice: 140,
    ecoCoinsReward: 25,
    maxCoinsDiscount: 35,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviewsCount: 51,
    vendorName: "Pragati Greenery Club Upcycling Squad",
    vendorLocation: "Green Workshop, Pragati Campus",
    isTrending: false,
    badge: "UPCYCLED",
    plasticOffsetKg: 20.0,
    description: "Molded from 100% shredded and re-melted single-use HDPE bottles collected on Pragati campus. Weather-proof for 50+ years.",
    inStock: true
  },
  {
    id: "prod_7",
    name: "Handmade Neem Wood Fork & Spoon Cutlery Kit",
    category: "cutlery",
    price: 79,
    originalPrice: 120,
    ecoCoinsReward: 20,
    maxCoinsDiscount: 30,
    image: "https://images.unsplash.com/photo-1584473457406-6df3a6372104?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviewsCount: 43,
    vendorName: "TerraPack Innovations",
    vendorLocation: "Main Bazaar, Samalkot",
    isTrending: false,
    badge: "NATURAL NEEM",
    plasticOffsetKg: 6.0,
    description: "Antibacterial natural neem wood cutlery set with organic cotton carry pouch. Say goodbye to single-use plastic takeaway spoons.",
    inStock: true
  },
  {
    id: "prod_8",
    name: "Honeycomb Recycled Paper Bubble-Wrap Roll (50 Meters)",
    category: "packaging",
    price: 199,
    originalPrice: 299,
    ecoCoinsReward: 40,
    maxCoinsDiscount: 80,
    image: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=600&q=80",
    rating: 4.88,
    reviewsCount: 88,
    vendorName: "TerraPack Innovations",
    vendorLocation: "Main Bazaar, Samalkot",
    isTrending: true,
    badge: "ECO PACKAGING",
    plasticOffsetKg: 25.0,
    description: "Expanding kraft paper packaging mesh that cushions fragile items without plastic bubble wrap. 100% recyclable and biodegradable.",
    inStock: true
  }
];

export const PARTNER_COMPANIES = [
  {
    id: "comp_1",
    name: "GreenSprout India",
    category: "Sustainable Packaging & Bio-Plastics",
    location: "Surampalem & Kakinada",
    rating: 4.9,
    verified: true,
    badge: "PLATINUM PARTNER",
    logo: "🌿",
    description: "Pioneering cassava-starch biofilm wraps and compostable tableware across East Godavari educational institutions.",
    impactStat: "12.4 Tons Plastic Saved",
    discountCode: "GREENSPROUT20",
    discountPercent: 20
  },
  {
    id: "comp_2",
    name: "BambuCraft EcoWare",
    category: "Organic Bamboo & Wood Utensils",
    location: "Kakinada Industrial Area",
    rating: 4.85,
    verified: true,
    badge: "VERIFIED VENDOR",
    logo: "🎋",
    description: "Empowering rural artisans to manufacture certified food-safe bamboo straws, toothbrushes, and tumblers.",
    impactStat: "85,000 Straws Replaced",
    discountCode: "BAMBU15",
    discountPercent: 15
  },
  {
    id: "comp_3",
    name: "TerraPack Innovations",
    category: "Circular Courier & Protective Packaging",
    location: "Samalkot Hub",
    rating: 4.92,
    verified: true,
    badge: "OFFICIAL PARTNER",
    logo: "📦",
    description: "Providing 100% biodegradable honeycomb paper padding and returnable canvas courier pouches for campus parcels.",
    impactStat: "40,000 Parcels Greened",
    discountCode: "TERRAPACK10",
    discountPercent: 10
  },
  {
    id: "comp_4",
    name: "Pragati Eco-Store Cooperative",
    category: "Campus Zero-Waste Store & Upcycling",
    location: "Pragati Engineering College",
    rating: 4.98,
    verified: true,
    badge: "STUDENT LED",
    logo: "🎓",
    description: "Student-run sustainable enterprise manufacturing denim tote bags, upcycled planter pots, and steel cup libraries.",
    impactStat: "1,420 kg Campus Plastic Diverted",
    discountCode: "PRAGATI_ECO15",
    discountPercent: 15
  }
];

export const PLASTIC_ALTERNATIVES = [
  {
    plasticItem: "Single-Use Plastic Water Bottle",
    alternative: "Insulated 304 Stainless Steel or Copper Flask",
    impact: "Saves 365 plastic bottles per person/year. Keeps water cool 24 hours.",
    whereToFind: "Eco Marketplace (₹249) / Pragati Eco-Store",
    category: "Bottles",
    diyOption: "Clean and reuse high-grade glass bottles with cork sleeves"
  },
  {
    plasticItem: "Thin Polythene Carry Bags (Plastics < 50 microns)",
    alternative: "Washable Organic Cotton / Upcycled Denim Tote Bag",
    impact: "Saves ~500 plastic carry bags annually. Carries up to 15kg without tearing.",
    whereToFind: "Eco Marketplace (₹99 for pack of 3) / DIY Jeans Upcycling Guide",
    category: "Bags",
    diyOption: "Stitch old denim jeans legs into a 42cm x 48cm tote in 25 mins"
  },
  {
    plasticItem: "Disposable Plastic Drinking Straws",
    alternative: "Handcrafted Organic Bamboo or Borosilicate Glass Straws",
    impact: "Composts in 90 days. Completely eliminates marine turtle ingestion risks.",
    whereToFind: "Eco Marketplace (₹69 Set of 6 with cleaning brush)",
    category: "Straws",
    diyOption: "Use dried hollow papaya leaf stems as natural organic straws"
  },
  {
    plasticItem: "Styrofoam & Plastic Disposable Plates",
    alternative: "Heat-Pressed Areca Palm Leaf Dishes or Banana Leaves",
    impact: "100% chemical-free and backyard compostable in 60 days into garden manure.",
    whereToFind: "Eco Marketplace (₹119 for 25 Pcs) / Local Cottage Industry",
    category: "Dinnerware",
    diyOption: "Harvest fresh broad banana leaves cut into circular placemats"
  },
  {
    plasticItem: "Single-Use Polypropylene Tea/Coffee Cups",
    alternative: "Reusable 304 Stainless Steel Cup / Ceramic Mug",
    impact: "Eliminates 25,000 plastic cups monthly per canteen with zero microplastics.",
    whereToFind: "Pragati Campus Cup Library (₹10 Refundable QR Deposit)",
    category: "Cups",
    diyOption: "Carry a personal 350ml insulated bamboo tumbler to food stalls"
  },
  {
    plasticItem: "Plastic Bubble Wrap for Parcel Packaging",
    alternative: "Expanded Honeycomb Kraft Paper Mesh & Cassava Starch Film",
    impact: "Recyclable with standard cardboard. Biodegrades safely in soil without microplastics.",
    whereToFind: "TerraPack Innovations / Eco Marketplace (₹199 Roll)",
    category: "Packaging",
    diyOption: "Shred discarded campus newspaper sheets into zig-zag padding"
  },
  {
    plasticItem: "Plastic Toothbrushes (Nylon & Polypropylene)",
    alternative: "100% Compostable Organic Bamboo Toothbrush with Charcoal Bristles",
    impact: "Replaces 4 plastic handles per person/year that would otherwise persist 500 years.",
    whereToFind: "Eco Marketplace / BambuCraft (₹99 for Pack of 4)",
    category: "Personal Care",
    diyOption: "Use traditional fresh Neem twigs (Datun) for oral hygiene"
  }
];

export const GAMIFICATION_BADGES = [
  {
    id: "badge_1",
    title: "Plastic Pioneer",
    icon: "ShieldCheck",
    criteria: "Avoided 100 single-use plastic items",
    coinsReward: 100,
    unlocked: true,
    level: "Tier 1"
  },
  {
    id: "badge_2",
    title: "IoT Bin Innovator",
    icon: "Cpu",
    criteria: "Deposited plastic in campus IoT smart bin 10 times",
    coinsReward: 150,
    unlocked: true,
    level: "Tier 2"
  },
  {
    id: "badge_3",
    title: "Cup Library Champion",
    icon: "Coffee",
    criteria: "Used circular stainless steel cups for 20 canteen orders",
    coinsReward: 200,
    unlocked: false,
    level: "Tier 2"
  },
  {
    id: "badge_4",
    title: "Upcycling Artisan",
    icon: "Sparkles",
    criteria: "Packed 5 EcoBricks or completed a DIY tote bag tutorial",
    coinsReward: 250,
    unlocked: true,
    level: "Tier 3"
  },
  {
    id: "badge_5",
    title: "Tree Guardian",
    icon: "Trees",
    criteria: "Redeemed EcoCoins to plant a real tree on Pragati campus",
    coinsReward: 300,
    unlocked: true,
    level: "Master"
  }
];

export const SUSTAINABLE_GUIDES_PDF_DATA = {
  iotBin: {
    id: "pdf_iot_bin",
    title: "DIY Smart IoT Recycling Dustbin Assembly & Firmware Manual",
    subtitle: "ESP32 Ultrasonic Sensor, SG90 Servo & GCP Cloud Telemetry Blueprint",
    version: "3.2 - Pragati ECE Innovation Edition",
    pages: [
      {
        pageNumber: 1,
        heading: "1. Hardware Architecture & Circuit Pinout Topology",
        content: `Microcontroller Specifications:
• Board: ESP32-WROOM-32D (240MHz Dual-Core Tensilica LX6, 520KB SRAM, Integrated 802.11 b/g/n Wi-Fi & BLE 4.2).
• Sensor: HC-SR04 Ultrasonic Distance Transducer (VCC: 5V DC, Trigger Pin: GPIO 5, Echo Pin: GPIO 18, Resolution: 0.3cm).
• Actuator: SG90 9g Micro Servo Motor (Signal Pin: GPIO 13, Operating Torque: 1.8 kg-cm, 90° Sweep in 0.12 sec).
• Display: 0.96 inch I2C Monochrome OLED Display 128x64 (SDA: GPIO 21, SCL: GPIO 22, I2C Address: 0x3C).
• Power Management: 3.7V 2600mAh 18650 Li-ion cell connected via TP4056 charge board with step-up 5V boost regulator.

Wiring Sequence:
1. Connect breadboard 5V power bus to ESP32 VIN pin and Ground to GND pin.
2. Wire HC-SR04 VCC -> 5V, GND -> GND, TRIG -> GPIO 5, ECHO -> GPIO 18.
3. Wire SG90 Servo RED -> 5V, BROWN -> GND, ORANGE Signal -> GPIO 13.
4. Wire I2C OLED VCC -> 3.3V, GND -> GND, SDA -> GPIO 21, SCL -> GPIO 22.`
      },
      {
        pageNumber: 2,
        heading: "2. Firmware Logic, GCP Cloud REST Sync & QR Rewards",
        content: `Operational Execution Loop:
1. Boot Calibration: ESP32 boots, establishes WPA2 Wi-Fi connection, initializes I2C OLED with 'EcoSphere IoT Bin Online'.
2. Distance Sampling: HC-SR04 triggers ultrasonic pulses every 200ms.
3. Deposit Detection: When distance drops between 2.0cm and 18.0cm for >300ms, the system registers a plastic bottle deposit.
4. Servo Actuation: SG90 servo swings lid open 90° for 4.0 seconds to accept waste, then softly returns to 0° closed.
5. GCP Cloud Telemetry: Formats JSON payload containing {binId: 'bin_p1', fillPct: 72.4, plasticCount: 142, battery: 92} and executes HTTPS POST to EcoSphere Cloud Firestore endpoint.
6. Gamified Reward: OLED generates an encrypted dynamic QR token valid for +15 EcoCoins on the student's mobile wallet.`
      }
    ]
  },
  compost: {
    id: "pdf_compost",
    title: "3-Bin Apartment & Hostel Aerobic Composting System Manual",
    subtitle: "Complete Zero-Odor Organic Waste Conversion Blueprint",
    version: "2.4 - Pragati Greenery Edition",
    pages: [
      {
        pageNumber: 1,
        heading: "1. Introduction & Aerobic Decomposition Principles",
        content: `Organic food scraps account for over 55% of everyday household waste. When disposed into closed plastic garbage bags, wet waste breaks down anaerobically, generating toxic leachate fluid and high concentrations of methane gas (CH4).

Aerobic composting uses beneficial micro-organisms in the presence of continuous oxygen flow to decompose organic waste into rich humic fertilizer without producing foul smells.

Key Parameters for Success:
• Carbon-to-Nitrogen (C:N) Ratio: 30:1 (2 parts dry carbon browns to 1 part wet nitrogen greens)
• Moisture Content: 50% to 60% (Squeeze test: damp like a wrung-out sponge, zero dripping water)
• Aeration: Minimum forty-eight 5mm sidewall holes for natural air convection
• Temperature: Thermophilic peak between 55°C and 65°C to eliminate weed seeds and bacterial pathogens.`
      },
      {
        pageNumber: 2,
        heading: "2. Step-by-Step Assembly & Daily Operation Playbook",
        content: `Hardware Preparation:
1. Stack 3 food-grade 20L HDPE plastic buckets or terracotta pots vertically.
2. Using a 5mm electric drill bit, bore 16 evenly spaced aeration holes around upper rim of each container.
3. Drill 8 drainage holes on bottom plate of Top Container (Bin 1) and Middle Container (Bin 2).
4. Place a 3-inch base layer of expanded cocopeat and crushed dry tree leaves in Bin 1.

Daily Layering Routine:
• Morning: Collect fruit peels, coffee grounds, and chopped vegetable trimmings.
• Step A: Spread wet food scraps evenly over the cocopeat bed (max 2 inches thickness).
• Step B: Sprinkle 1 tablespoon of microbial bio-inoculum powder across the surface.
• Step C: Cover completely with a 1-inch blanket of dry leaves or sawdust to prevent fruit flies.
• Rotation: When Bin 1 fills after ~20 days, rotate it to the middle position and place empty Bin 2 on top.`
      }
    ]
  },
  ecobrick: {
    id: "pdf_ecobrick",
    title: "Building Campus EcoBrick Benches Step-by-Step Manual",
    subtitle: "Permanent Non-Recyclable Plastic Upcycling & Masonry Blueprint",
    version: "2.0 - Pragati Greenery Club",
    pages: [
      {
        pageNumber: 1,
        heading: "1. EcoBrick Density Standards & Plastic Sequestration",
        content: `Multi-Layered Plastic (MLP) wrappers cannot be re-melted by conventional recycling plants due to composite foil layers. An EcoBrick sequesters this plastic into high-density building blocks.

Standard Requirements:
• Container: Clean, dry 1-Liter PET bottle.
• Minimum Weight: 330 grams (Target Density = 0.33 g/ml).
• Packing Tool: 30cm solid wooden compression rod with rounded tip.
• Test Method: Squeeze bottle firmly. If bottle deforms by >2mm, add more compressed plastic.`
      },
      {
        pageNumber: 2,
        heading: "2. Bench Masonry & Adobe Clay Rendering",
        content: `Construction Steps:
1. Excavate a 15cm foundation trench and fill base with 5cm coarse gravel for drainage.
2. Mix Adobe Mortar: 1 Part Red Clay Soil + 1 Part Coarse Sand + 0.5 Part Chopped Straw + Water.
3. Lay EcoBricks horizontally in staggered rows with 2cm mortar joints.
4. Render exterior with a 2cm smooth clay-lime plaster and seal with waterproof oil render.`
      }
    ]
  },
  dailyTips: {
    id: "pdf_daily_tips",
    title: "Daily Eco Micro-Habits & Zero-Waste Living Guide",
    subtitle: "12 Simple High-Impact Daily Habits for Students & Households",
    version: "4.0 - Community Edition",
    pages: [
      {
        pageNumber: 1,
        heading: "1. High-Impact Daily Green Habits",
        content: `Habit 1: Carry Reusable Water Flask (Saves 365 plastic bottles yearly).
Habit 2: Unplug Phantom Chargers (Saves 3 kg CO2 annually per charger).
Habit 3: Carry Reusable Cloth Tote Bag (Eliminates single-use polythene bags).
Habit 4: Cold Water Laundry Washing (Reduces washing machine energy consumption by 90%).
Habit 5: Switch to Bamboo Toothbrush (Keeps 4 plastic toothbrushes out of oceans per year).
Habit 6: Use Steel Cutlery at Canteens (Declines single-use plastic spoons and forks).`
      },
      {
        pageNumber: 2,
        heading: "2. Community Action & EcoCoins Rewards",
        content: `Habit 7: Segregate Household Wet & Dry Waste (Enables 100% recycling efficiency).
Habit 8: Opt for Campus Carpooling & Cycling (Prevents 1.2 tons CO2 yearly).
Habit 9: Report Littering Spots via EcoSphere Photo AI (Earns +150 EcoCoins).
Habit 10: Support Green Certified Local Vendors (Promotes circular eco-economy).
Habit 11: Harvest Rooftop Rainwater (Saves municipal water reserves).
Habit 12: Plant Native Neem & Peepal Saplings (Absorbs CO2 and releases oxygen).`
      }
    ]
  }
};

export const COMMUNITY_ACTIVITIES = [
  {
    id: "act_1",
    user: "Sai Krishna (ECE Dept)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    action: "Planted 15 neem saplings around Pragati Library lawn",
    time: "12 mins ago",
    likes: 34,
    coinsEarned: 150,
    tag: "Tree Plantation"
  },
  {
    id: "act_2",
    user: "Green Canteen Vendor #3",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    action: "Replaced 450 polythene carry bags with Jute eco-totes",
    time: "45 mins ago",
    likes: 58,
    coinsEarned: 300,
    tag: "Vendor Action"
  },
  {
    id: "act_3",
    user: "Pragati Greenery Club Team",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    action: "Collected 85 kg plastic bottles using IoT Smart Dustbin #2",
    time: "2 hours ago",
    likes: 112,
    coinsEarned: 500,
    tag: "Recycling Drive"
  },
  {
    id: "act_4",
    user: "Ananya R. (CSE 3rd Year)",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    action: "Completed DIY IoT Dustbin build & shared C++ code on EcoSphere",
    time: "4 hours ago",
    likes: 89,
    coinsEarned: 400,
    tag: "IoT Project"
  }
];

export const VENDORS_CATALOG = [
  {
    id: "v_1",
    name: "Pragati Campus Eco-Store",
    location: "Near Main Gate, Pragati Engineering College",
    rating: 4.9,
    products: [
      { name: "Organic Jute Carry Tote Bag", price: "₹49", coinsReward: 15, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80" },
      { name: "Reusable Stainless Steel Water Flask 750ml", price: "₹249", coinsReward: 50, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80" },
      { name: "Bamboo Toothbrush (Pack of 4)", price: "₹99", coinsReward: 20, image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=400&q=80" }
    ],
    discountCode: "PRAGATI_ECO15",
    discountPercent: 15
  },
  {
    id: "v_2",
    name: "Surya Green Organics & Cloth Mart",
    location: "College Road, Surampalem",
    rating: 4.8,
    products: [
      { name: "Heavy Duty Cotton Grocery Bag", price: "₹35", coinsReward: 10, image: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=400&q=80" },
      { name: "Areca Palm Leaf Plates Set (25 Pcs)", price: "₹120", coinsReward: 30, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80" }
    ],
    discountCode: "SURYA_GREEN10",
    discountPercent: 10
  }
];

export const DIY_IOT_DUSTBIN_GUIDE = {
  title: "DIY Smart IoT Recycling Bin with Automatic Lid & Waste Counter",
  difficulty: "Beginner / College Mini Project",
  estimatedCost: "₹650 - ₹850",
  timeToBuild: "2 to 3 Hours",
  materials: [
    { name: "ESP32 Wi-Fi NodeMCU / Arduino UNO", cost: "₹320" },
    { name: "HC-SR04 Ultrasonic Distance Sensor", cost: "₹75" },
    { name: "SG90 Micro Servo Motor 9g", cost: "₹110" },
    { name: "16x2 LCD Display with I2C Module", cost: "₹140" },
    { name: "Rechargeable 18650 Li-ion Battery with Holder", cost: "₹95" },
    { name: "Dustbin Body, Jumper Wires, Breadboard", cost: "₹100" }
  ],
  wiringSteps: [
    "Connect HC-SR04 VCC -> 5V, GND -> GND, TRIG -> Pin D5, ECHO -> Pin D18.",
    "Connect SG90 Servo Red -> 5V, Brown -> GND, Yellow Signal -> Pin D13.",
    "Connect I2C LCD SDA -> Pin D21, SCL -> Pin D22.",
    "Mount the ultrasonic sensor on top lid facing forward to detect approaching hands/bottles.",
    "Attach servo motor arm to the hinged lid flap using zip ties."
  ],
  cppCode: `// EcoSphere DIY Smart IoT Bin Firmware v2.4
// Board: ESP32 Dev Module
#include <WiFi.h>
#include <ESP32Servo.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

const char* WIFI_SSID = "PRAGATI_CAMPUS_WIFI";
const char* WIFI_PASS = "PlasticFreeTomorrow2026";
const char* ECOSPHERE_API = "https://ecosphere.gcp.cloud/api/v1/recycle";

#define TRIG_PIN 5
#define ECHO_PIN 18
#define SERVO_PIN 13

Servo lidServo;
LiquidCrystal_I2C lcd(0x27, 16, 2);

int plasticCount = 0;
bool bottleDetected = false;

void setup() {
  Serial.begin(115200);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  
  lidServo.attach(SERVO_PIN);
  lidServo.write(0); // Lid closed
  
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("EcoSphere IoT");
  lcd.setCursor(0, 1);
  lcd.print("Bin Initializing...");
  delay(2000);
}

void loop() {
  long duration;
  float distanceCm;
  
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  
  duration = pulseIn(ECHO_PIN, HIGH);
  distanceCm = duration * 0.034 / 2;
  
  if (distanceCm > 2.0 && distanceCm < 18.0) {
    if (!bottleDetected) {
      bottleDetected = true;
      plasticCount++;
      
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Plastic Recycled!");
      lcd.setCursor(0, 1);
      lcd.print("Total Bins: ");
      lcd.print(plasticCount);
      
      lidServo.write(90); // Open lid
      delay(3500);        // Hold open for deposit
      lidServo.write(0);  // Close lid
      
      sendTelemetryToGCP(plasticCount);
    }
  } else {
    bottleDetected = false;
  }
  delay(200);
}

void sendTelemetryToGCP(int count) {
  Serial.print("Syncing with GCP Cloud Firestore... Plastic Count: ");
  Serial.println(count);
}`
};

export const IOT_BINS_TELEMETRY = [
  {
    id: "bin_p1",
    location: "Pragati Canteen Block A",
    fillLevel: 68,
    weightKg: 14.2,
    batteryPct: 92,
    status: "ONLINE",
    lastDumped: "10 mins ago"
  },
  {
    id: "bin_p2",
    location: "ECE & CSE Hostel Block",
    fillLevel: 89,
    weightKg: 22.8,
    batteryPct: 85,
    status: "ALERT_NEAR_FULL",
    lastDumped: "2 hours ago"
  },
  {
    id: "bin_p3",
    location: "Central Library Garden",
    fillLevel: 34,
    weightKg: 7.1,
    batteryPct: 98,
    status: "ONLINE",
    lastDumped: "30 mins ago"
  }
];

export const CAMPUS_CARPOOLS = [
  {
    id: "cp_1",
    driver: "Dr. K. V. Rao (Faculty - Mech)",
    vehicle: "Tata Nexon EV (White)",
    route: "Kakinada Town -> Samalkot -> Pragati Campus",
    departureTime: "08:15 AM",
    seatsAvailable: 2,
    co2SavedKgPerRide: 4.8,
    contact: "kvrao@pragati.ac.in"
  },
  {
    id: "cp_2",
    driver: "Siddharth Verma (CSE Final Year)",
    vehicle: "Honda City i-VTEC",
    route: "Rajahmundry Bypass -> Surampalem",
    departureTime: "08:00 AM",
    seatsAvailable: 3,
    co2SavedKgPerRide: 7.2,
    contact: "sid.v@pragati.ac.in"
  }
];

export const LEADERBOARD_USERS = [
  { rank: 1, name: "Pragati Greenery Club", type: "Organization", coins: 14250, plasticKg: 640, badge: "Platinum Eco-Warrior" },
  { rank: 2, name: "Sai Krishna V.", type: "Student (ECE)", coins: 8900, plasticKg: 380, badge: "Gold Guardian" },
  { rank: 3, name: "Campus Green Canteen", type: "Vendor", coins: 7450, plasticKg: 310, badge: "Gold Guardian" },
  { rank: 4, name: "Ananya Sharma", type: "Student (CSE)", coins: 6200, plasticKg: 260, badge: "Silver Defender" },
  { rank: 5, name: "Mechanical Dept Club", type: "Student Club", coins: 5100, plasticKg: 210, badge: "Silver Defender" }
];
