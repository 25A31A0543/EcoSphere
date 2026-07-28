export const MOCK_VIDEOS = {
  problem: {
    id: "prob_vid_101",
    title: "The Plastic Planet Crisis: Impact on Humans & Wildlife",
    duration: "10:00",
    embedUrl: "https://www.youtube.com/embed/ggh0Ptk3VGE", // Educational plastic pollution documentary
    thumbnail: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=800&q=80",
    description: "An in-depth 10-minute documentary exploring microplastic bioaccumulation, marine animal mortality in local water bodies, and human chemical exposure.",
    chapters: [
      { time: "0:00", title: "Introduction to Single-Use Plastic Surge" },
      { time: "2:15", title: "Impact on Local Rivers & Marine Ecosystems" },
      { time: "4:40", title: "Microplastics in Human Bloodstream & Soil" },
      { time: "7:10", title: "Landfill Methane Emissions & Open Burning" },
      { time: "9:00", title: "The Urgent Need for Small-Scale Action" }
    ]
  },
  solution: {
    id: "sol_vid_102",
    title: "Zero-Waste Blueprint: Actionable Solutions for Communities",
    duration: "10:00",
    embedUrl: "https://www.youtube.com/embed/6jQ7y_qQYUA", // Educational recycling solutions documentary
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    description: "Discover 10 powerful, low-cost solutions that individuals, small vendors, and college students can implement today to eliminate plastic waste.",
    chapters: [
      { time: "0:00", title: "Circular Economy at Campus & Local Level" },
      { time: "2:30", title: "Replacing Plastic Bags with Jute & Cloth" },
      { time: "4:45", title: "Building Smart IoT Recycling Bins" },
      { time: "6:50", title: "Community Organic Waste Composting" },
      { time: "8:40", title: "Empowering Local Green Vendors & Rewards" }
    ]
  }
};

export const LIVE_POLLUTION_METRICS = {
  plasticDumpedPerSecKg: 420.5,
  oceanMicroplasticsTons: 15420900,
  airQualityIndex: 168, // Moderate-Unhealthy
  landfillCapacityUsedPct: 87.4,
  localSingleUseBagsDaily: 14500,
  carbonConcentrationPpm: 422.4
};

export const PROBLEM_DISADVANTAGES = [
  {
    id: "dis_1",
    title: "Microplastics in Human Food Chain",
    icon: "Activity",
    severity: "CRITICAL",
    impact: "Humans ingest an average of 5 grams of microplastics weekly—equivalent to a credit card—causing endocrine disruption and cellular inflammation.",
    stat: "5g/week",
    image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dis_2",
    title: "Wildlife Mortality & Entanglement",
    icon: "AlertTriangle",
    severity: "HIGH",
    impact: "Over 1 million marine birds and 100,000 marine mammals die annually due to plastic ingestion and net entanglement in coastal regions.",
    stat: "1M+ Birds/Year",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dis_3",
    title: "Toxic Open Air Plastic Burning",
    icon: "Flame",
    severity: "CRITICAL",
    impact: "Unregulated burning of PVC and polythene releases carcinogenic dioxins, furans, and black carbon, drastically worsening local AQI.",
    stat: "Toxic Dioxins",
    image: "https://images.unsplash.com/photo-1565697669460-642146e91986?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dis_4",
    title: "Soil Infertility & Agricultural Runoff",
    icon: "ZapOff",
    severity: "HIGH",
    impact: "Plastic mulch and buried polythene block earthworm movement, decrease soil water retention by 45%, and leach toxic phthalates.",
    stat: "-45% Retention",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80"
  }
];

export const SEVEN_SOLUTIONS = [
  {
    id: "sol_1",
    title: "Switch to Biodegradable Cloth & Jute Bags",
    category: "Vendor & Consumer Action",
    summary: "Replace single-use polythene bags with washable cotton or denim tote bags and eco plastic prep.",
    heroImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    impactMultiplier: "Saves ~500 plastic bags per person annually • Saves ₹1,500/month for small vendors",
    videoUrl: "https://www.youtube.com/embed/6jQ7y_qQYUA",
    watchUrl: "https://www.youtube.com/watch?v=6jQ7y_qQYUA",
    videoId: "6jQ7y_qQYUA",
    thumbnailUrl: "https://img.youtube.com/vi/6jQ7y_qQYUA/hqdefault.jpg",
    diyTutorial: "Dedicated Video Tutorial: Stitch a Reusable Tote Bag from Old Jean and organic plastic preparation",
    totalEstimatedBudget: "₹50 - ₹95 per bag (₹0 if using old denim/shirts)",
    costCuttingTip: "Students can use discarded old jeans or cotton sarees from home to craft 3 sturdy bags for free!",
    executiveSummary: "Single-use polythene carrier bags are a primary driver of urban drain blockages, agricultural soil contamination, and toxic open-air burning emissions. This blueprint outlines a circular upcycling protocol to convert discarded denim jeans and organic cassava starch biofilm into high-durability reusable totes capable of carrying up to 15kg load.",
    problemContext: "In tier-2 and tier-3 towns, small grocery vendors consume between 200 to 500 plastic pouches daily. By transitioning to a community-driven cloth tote library and bio-plastic wrap preparation, local ecosystems recover from plastic clogging while vendors save up to ₹18,000 annually in recurring packaging expenses.",
    technicalArchitecture: {
      diagramTitle: "Denim Cut Pattern & Box-Stitch Tensile Reinforcement",
      dimensions: "42cm Width x 48cm Height x 10cm Gusset Bottom",
      seamStrength: "Double-French Seam with 100% Polyester 40s/2 Thread (Tensile Limit: 18.5 kg)",
      handleAnchor: "Cross-Box 'X' Stitch (2.5cm x 2.5cm square anchor points with 8 passes)"
    },
    materialsNeeded: [
      { name: "Organic Cotton / Jute / Upcycled Denim Fabric", qty: "1 sq meter (or 1 old pant)", cost: "₹0 - ₹45", source: "Local household / Fabric store, Surampalem" },
      { name: "Heavy Duty Polyester Thread (Spool 40s/2)", qty: "1 Spool", cost: "₹10", source: "Tailoring Shop near Pragati Gate" },
      { name: "Woven Cotton Webbing Straps (2.5cm x 60cm x 2)", qty: "2 Strips", cost: "₹20", source: "Local Bag Repair Shop" },
      { name: "Organic Cassava Starch & Glycerin (For Organic Bio-Film Prep)", qty: "200g Starch + 20ml Glycerin", cost: "₹25", source: "Local Grocery / Chemistry Lab" }
    ],
    actionPlan: [
      "Phase 1 (Preparation & Cutting): Collect discarded denim jeans. Cut legs into two 42cm x 52cm panels.",
      "Phase 2 (Bio-Plastic Film Prep): Mix cassava starch, water, and glycerol over 80°C heat to cast edible organic produce wrap.",
      "Phase 3 (Precision Stitching): Execute double French seams on sides and cross-stitch 60cm webbing handles.",
      "Phase 4 (Deployment & Library Setup): Deploy 50 tote bags at campus canteen checkout counter."
    ],
    detailedSteps: [
      {
        step: 1,
        title: "Phase 1: Raw Material Upcycling & Precision Cutting",
        desc: "Lay out laundered old denim jeans on a flat workbench. Measure and cut a 42cm x 96cm single continuous rectangle panel (or two 42cm x 50cm side panels). Use tailor's chalk to trace a 1.5cm seam allowance along vertical edges. Pin edges together using ballpoint sewing pins to prevent fabric slippage during stitching.",
        image: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 2,
        title: "Phase 2: Organic Cassava Starch Bio-Film Preparation",
        desc: "To replace plastic inner linings, mix 100g cassava/corn starch with 500ml distilled water, 15ml vegetable glycerin, and 10ml white vinegar in a glass beaker. Heat mixture under continuous stirring at 80°C until it turns into a clear, viscous gel. Spread thinly on Teflon sheets and dry for 24 hours to form a flexible, 100% biodegradable, water-resistant biofilm layer.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 3,
        title: "Phase 3: Reinforced Double French Seams & Gusset Bottom",
        desc: "Stitch down side seams using a 3.5mm straight stitch. Fold seam allowances over and apply a secondary zigzag overcast stitch to prevent fraying under heavy loads. Fold the bottom corners inward by 5cm and stitch transversely to create a flat, 10cm-wide gusset bottom that allows the bag to stand upright when loaded with groceries.",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 4,
        title: "Phase 4: Handle Cross-Box Reinforcement & Vendor Distribution",
        desc: "Position 60cm heavy-duty webbing straps 8cm from outer edges along top hem. Fold top rim down by 2.5cm twice. Sew a 2.5cm x 2.5cm box with an diagonal 'X' stitch through both handle ends. Deploy finished bags at Pragati Greenery Club canteen desk under a 'Take a Bag, Leave a Bag' community system.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
      }
    ],
    fieldDeploymentTesting: {
      loadTestProtocol: "Load finished tote bag with 15kg sandbag weights and drop from 0.5m height 20 times. Ensure zero seam tearing.",
      washability: "Machine wash at 40°C or hand wash with mild soap. Tested lifespan: 150+ wash cycles without structural degradation.",
      costBenefitRatio: "Cost per use = ₹0.04 vs ₹1.50 per single-use plastic pouch."
    },
    howToMake: {
      title: "DIY Denim Upcycled Tote Bag & Organic Plastic Film Recipe",
      timeRequired: "25 Minutes",
      toolsNeeded: ["Scissors", "Sewing Machine / Heavy Needle", "Iron", "Ruler", "Glass Beaker & Hot Plate"],
      localVendors: [
        { name: "Surya Fabrics & Tailoring", location: "Near Pragati Gate, Surampalem", contact: "+91 98480 12345" },
        { name: "Kakinada Jute Wholesale Depot", location: "Cinema Road, Kakinada", contact: "+91 884 2345678" }
      ],
      blueprintSummary: "Fold old denim leg flat, double-stitch seams, apply cassava organic biofilm lining, attach X-box handles. Replaces 500 plastic bags per year!"
    },
    learnFaq: [
      {
        q: "Why carry cloth bags over single-use plastic?",
        a: "A single polythene bag takes 500+ years to decompose and breaks down into toxic microplastics. One washable cloth bag replaces over 500 plastic bags in its lifetime."
      },
      {
        q: "How can small canteen vendors benefit financially?",
        a: "Vendors spend ~₹1,500 monthly purchasing single-use plastic carry bags. Encouraging reusable totes eliminates this expense while earning vendor green certification."
      }
    ]
  },
  {
    id: "sol_2",
    title: "Build DIY Smart IoT Recycling Dustbins",
    category: "Tech & Campus Innovation",
    summary: "Construct low-cost ultrasonic smart bins that track waste fill-level and award instant EcoCoins upon plastic deposit.",
    heroImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80",
    impactMultiplier: "Increases campus recycling sorting rate by 340% • Real-time telemetry on EcoSphere",
    videoUrl: "https://www.youtube.com/embed/ggh0Ptk3VGE",
    watchUrl: "https://www.youtube.com/watch?v=ggh0Ptk3VGE",
    videoId: "ggh0Ptk3VGE",
    thumbnailUrl: "https://img.youtube.com/vi/ggh0Ptk3VGE/hqdefault.jpg",
    diyTutorial: "Dedicated Video Tutorial: ESP32 + Ultrasonic Smart Bin Circuit Blueprint & Code",
    totalEstimatedBudget: "₹750 Total (Built by Pragati ECE/CSE Students)",
    costCuttingTip: "Re-use old plastic dustbins on campus and borrow Arduino kits from college ECE lab to reduce cost to ₹200!",
    executiveSummary: "Traditional unmonitored waste bins suffer from frequent overflow, leading to unsegregated littering and delayed pickup. This IoT Smart Bin system integrates an ESP32 microcontroller with an HC-SR04 ultrasonic distance sensor, an SG90 automatic servo lid actuator, and an OLED QR-code display to track fill status live over Wi-Fi and reward users automatically.",
    problemContext: "College campuses generate hundreds of kilograms of discarded PET bottles daily. Without fill-level telemetry, sanitation staff spend inefficient manual hours checking empty bins while overloaded bins spill onto lawns. This open-source hardware solution provides automated lid opening, telemetry logging to GCP Firebase, and student rewards.",
    technicalArchitecture: {
      diagramTitle: "ESP32 Pinout & Sensor Wiring Topology",
      microcontroller: "ESP32-WROOM-32D (240MHz Dual-Core, 520KB SRAM, Integrated 2.4GHz Wi-Fi)",
      ultrasonicSensor: "HC-SR04 (Trig -> GPIO 5, Echo -> GPIO 18, Operating VCC: 5V DC)",
      servoActuator: "SG90 9g Micro Servo (PWM Control -> GPIO 13, Torque: 1.8 kg-cm)",
      displayModule: "0.96 inch I2C OLED (SDA -> GPIO 21, SCL -> GPIO 22, Address: 0x3C)",
      powerSystem: "18650 3.7V 2600mAh Li-ion Battery with TP4056 USB-C Charge Controller"
    },
    materialsNeeded: [
      { name: "ESP32 Wi-Fi Microcontroller Board", qty: "1 Unit", cost: "₹340", source: "Robotics Electronics Store Kakinada / Amazon" },
      { name: "HC-SR04 Ultrasonic Distance Sensor", qty: "1 Unit", cost: "₹75", source: "Pragati ECE Lab / Local Hobby Shop" },
      { name: "SG90 Micro Servo Motor (Automatic Lid)", qty: "1 Unit", cost: "₹110", source: "Electronics Lab Component Kit" },
      { name: "0.96 inch OLED I2C Display (QR Code)", qty: "1 Unit", cost: "₹145", source: "Online Robocraze / Local Supplier" },
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
        desc: "Place the ESP32 board onto a 400-point solderless breadboard. Connect VCC pins of HC-SR04, SG90 Servo, and OLED display to the VEXT 5V rail, and ground pins to the common GND rail. Connect HC-SR04 TRIG to GPIO 5, ECHO to GPIO 18, Servo Signal line to GPIO 13, OLED SDA to GPIO 21, and OLED SCL to GPIO 22. Double-check wire polarity to avoid short circuits.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 2,
        title: "Phase 2: Arduino C++ Firmware Uploading & Wi-Fi Provisioning",
        desc: "Open Arduino IDE. Install ESP32 Board Manager (v2.0.11) and libraries: ESP32Servo, Adafruit_SSD1306, and HTTPClient. Load the open-source EcoSphere C++ firmware snippet. Update SSID, WPA2 password, and GCP Firebase REST endpoint URL. Click Upload at 115200 baud rate and verify serial monitor output 'Wi-Fi Connected! IP: 192.168.1.104'.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 3,
        title: "Phase 3: Mechanical Servo Arm & Sensor Enclosure Mounting",
        desc: "Using a 20mm hole saw, drill two circular apertures on the bin lid for the ultrasonic transducer eyes. Secure the sensor using hot melt adhesive inside a 3D-printed IP65 weather-resistant casing. Screw the SG90 horn lever to the bin's hinged push-flap using M2 self-tapping screws so a 90° rotation swings the lid fully open for 4 seconds.",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 4,
        title: "Phase 4: Sensor Calibration, GCP Telemetry & QR Reward Testing",
        desc: "Set empty baseline distance (e.g., 100cm to bottom of bin). Test with discarded PET bottles: when a bottle falls past 15cm distance threshold, the code increments plastic counter, opens the lid via PWM signal, and renders a dynamic EcoCoins reward QR code on the OLED. Verify live JSON payload POST to EcoSphere Cloud API.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      }
    ],
    fieldDeploymentTesting: {
      sensorAccuracy: "Ultrasonic range error ±0.3cm between 2cm and 400cm.",
      batteryLife: "Deep-sleep power consumption = 15µA. Operates for 24 days on single 18650 cell.",
      failSafe: "If Wi-Fi drops, telemetry records queue locally in ESP32 SPIFFS flash memory and auto-sync upon reconnection."
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
        a: "When a plastic bottle drops past the ultrasonic sensor, the distance changes instantly, triggering the servo lid to close briefly while displaying a dynamic QR code for +15 EcoCoins."
      },
      {
        q: "What is the battery lifetime?",
        a: "Using a standard 18650 Li-ion battery with ESP32 deep-sleep mode, the bin runs for 3 weeks continuously before recharging."
      }
    ]
  },
  {
    id: "sol_3",
    title: "Community Organic Waste Composting",
    category: "Waste Segregation",
    summary: "Turn food scraps and organic kitchen waste into nutrient-rich compost for greenery club plantations using modern tech.",
    heroImage: "https://images.unsplash.com/photo-1584473457406-6df3a6372104?auto=format&fit=crop&w=1200&q=80",
    impactMultiplier: "Diverts 60% of household waste from landfills • Produces ₹400 worth compost monthly",
    videoUrl: "https://www.youtube.com/embed/Yp_8KjW9VdY",
    watchUrl: "https://www.youtube.com/watch?v=Yp_8KjW9VdY",
    videoId: "Yp_8KjW9VdY",
    thumbnailUrl: "https://img.youtube.com/vi/Yp_8KjW9VdY/hqdefault.jpg",
    diyTutorial: "Dedicated Video Tutorial: 3-Bin Apartment & Hostel Aerobic Composting System and using modern tech",
    totalEstimatedBudget: "₹450 Total (3-Tier Terracotta / Bucket System)",
    costCuttingTip: "Use 3 stackable old paint buckets drilled with 5mm air holes to build a 100% free home composting unit!",
    executiveSummary: "Organic wet waste accounts for over 55% of municipal solid waste in residential hostels and dining halls. When buried anaerobically in landfills, organic waste releases potent methane gas (CH4) with 28x the global warming potential of CO2. This 3-bin aerobic composting system utilizes bio-inoculum, controlled moisture monitoring, and vertical stacking to convert organic waste into dark, nutrient-packed compost within 45 days.",
    problemContext: "College canteens throw away up to 120 kg of vegetable trimmings and cooked food scraps daily. By implementing a decentralized 3-bin aerobic composting cluster equipped with soil temperature/moisture probes, educational institutions can produce organic fertilizer for campus gardens while saving garbage transport costs.",
    technicalArchitecture: {
      systemDesign: "3-Tier Stackable Aerobic Bioreactor Containers (Top: Active Ingestion, Middle: Curing, Bottom: Harvest)",
      aerationParameters: "Forty-eight 5mm sidewall drill holes providing passive convection airflow (Dissolved O2 > 10%)",
      carbonToNitrogenRatio: "C:N Ratio optimized at 30:1 (2 parts dry brown leaves/sawdust to 1 part green kitchen waste)",
      moistureRange: "45% - 60% Moisture Content (Tested via hand-squeeze method: damp like a wrung-out sponge)",
      temperaturePhases: "Mesophilic (20-40°C for 3 days) -> Thermophilic (55-65°C for pathogen breakdown) -> Curing (30°C)"
    },
    materialsNeeded: [
      { name: "3-Tier Stackable Terracotta Pots / 20L Plastic Buckets", qty: "3 Containers", cost: "₹350", source: "Surampalem Local Pottery Works / Hardware Store" },
      { name: "Compressed Cocopeat Block (5kg)", qty: "1 Block", cost: "₹65", source: "Greenery Nursery near College" },
      { name: "Bio-Microbial Inoculum Powder (Lactobacillus & Trichoderma)", qty: "250 grams", cost: "₹35", source: "Agricultural Co-op Store" },
      { name: "Crushed Dry Leaves & Sawdust (Brown Carbon Layer)", qty: "1 Bag", cost: "Free", source: "Pragati Campus Lawn Cleanup" }
    ],
    actionPlan: [
      "Phase 1 (Container Fabrication): Drill 5mm aeration holes on bin perimeter. Prepare 2-inch cocopeat base in Bin 1.",
      "Phase 2 (Daily Waste Layering & Ratio Control): Add green kitchen waste daily, covered by 2x dry leaves + microbial powder.",
      "Phase 3 (Vertical Rotation Cycle): When Bin 1 fills (day 20), move to middle slot; place empty Bin 2 on top.",
      "Phase 4 (Harvesting & Sifting): After 45 days, sift black gold compost through 5mm mesh screen for campus soil enrichment."
    ],
    detailedSteps: [
      {
        step: 1,
        title: "Phase 1: Container Fabrication & Convection Air Hole Drilling",
        desc: "Take three 20-liter heavy-duty HDPE buckets or terracotta pots. Using a 5mm drill bit, bore 16 evenly spaced holes around the upper circumference and 8 holes on the bottom base plate of each bucket. This creates a natural chimney effect for oxygen circulation, suppressing anaerobic odor-causing bacteria.",
        image: "https://images.unsplash.com/photo-1584473457406-6df3a6372104?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 2,
        title: "Phase 2: Base Carbon Bedding & Daily 2:1 Layering Protocol",
        desc: "Hydrate a cocopeat brick in water to expand. Spread a 3-inch layer of expanded cocopeat mixed with dry crushed leaves at the bottom of Bin 1 to absorb excessive leachate moisture. Deposit chopped fruit peels, tea bags, and vegetable scraps daily. Immediately cover scraps with a 1-inch blanket of dry leaves and sprinkle 1 tablespoon of microbial inoculum powder.",
        image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 3,
        title: "Phase 3: Thermophilic Phase Monitoring & Aerobic Turning",
        desc: "Monitor internal pile temperature using a long-stem dial thermometer. Between days 7 and 14, microbial activity will drive core temperature to 55-65°C, effectively sterilizing weed seeds and harmful pathogens. Turn the pile once weekly using a hand trowel to introduce fresh oxygen and redistribute moisture.",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 4,
        title: "Phase 4: Curing Phase, 5mm Mesh Sifting & Harvest",
        desc: "When Bin 1 completes its 45-day curing cycle, the contents transform into dark brown, crumbly compost with an earthy forest floor aroma. Pass the compost through a 5mm wire mesh sieve to remove un-decomposed twigs. Package finished compost for Pragati campus botanical gardens or sell to local farmers.",
        image: "https://images.unsplash.com/photo-1584473457406-6df3a6372104?auto=format&fit=crop&w=600&q=80"
      }
    ],
    fieldDeploymentTesting: {
      odorControlCheck: "Zero unpleasant odor when maintained with 30:1 C:N ratio and O2 > 10%.",
      pathogenReduction: "Thermophilic heat phase (>55°C for 3 consecutive days) destroys 99.9% of E. coli and Salmonella.",
      yieldOutput: "100 kg wet kitchen waste yields approx 25 kg cured organic compost."
    },
    howToMake: {
      title: "3-Bin Apartment Aerobic Composting System Guide",
      timeRequired: "45 Mins Initial Setup",
      toolsNeeded: ["Electric Drill with 5mm Bit", "Hand Trowel", "5mm Wire Mesh Sieve", "Water Sprayer"],
      localVendors: [
        { name: "Sri Lakshmi Terracotta Pottery", location: "Surampalem Village Road", contact: "+91 98491 55432" },
        { name: "Pragati Greenery Nursery", location: "Botanical Garden Block, Pragati Campus", contact: "greenery@pragati.ac.in" }
      ],
      blueprintSummary: "Layer 2:1 dry leaves to wet food peels, keep moist like a squeezed sponge, harvest dark compost in 45 days!"
    },
    learnFaq: [
      {
        q: "Does home aerobic composting smell bad?",
        a: "No! When maintained with a 2:1 carbon (browns) to nitrogen (greens) ratio with proper aeration holes, aerobic decomposition produces zero bad odor."
      },
      {
        q: "What items should NOT be put in the compost bin?",
        a: "Avoid non-biodegradable plastics, meat, dairy, oil, cooked gravies, and pet feces."
      }
    ]
  },
  {
    id: "sol_4",
    title: "Campus Green Energy Activities & Carpooling",
    category: "Clean Transport & Solar Energy",
    summary: "Set up green energy activities at college, solar micro-power hubs, and carpool ride-share networks.",
    heroImage: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80",
    impactMultiplier: "Prevents 1.2 tons of CO2 per group yearly • Generates 500W clean solar energy on campus",
    videoUrl: "https://www.youtube.com/embed/2vJ7w1eBf7E",
    watchUrl: "https://www.youtube.com/watch?v=2vJ7w1eBf7E",
    videoId: "2vJ7w1eBf7E",
    thumbnailUrl: "https://img.youtube.com/vi/2vJ7w1eBf7E/hqdefault.jpg",
    diyTutorial: "Dedicated Video Tutorial: Setting Up a greeen enery related acticites at college",
    totalEstimatedBudget: "₹0 - ₹1,200 (Student Campus Energy Blueprint)",
    costCuttingTip: "Students save 75% on daily fuel expenses by splitting petrol costs with 3 ride partners!",
    executiveSummary: "Transportation fuel burn and fossil-fuel grid electricity are major carbon emitters for educational institutions. This initiative combines a peer-to-peer campus ride-share matching system with student-built mini solar charging stations to reduce daily fossil fuel consumption, lower parking congestion, and power campus gadgets with clean solar power.",
    problemContext: "Over 800 students commute daily to Pragati Engineering College from Kakinada, Rajahmundry, and Samalkot using single-occupant motorcycles or cars. By deploying an automated GIS ride-sharing algorithm and campus solar charging trees, carbon footprint drops significantly while building student hands-on renewable energy skills.",
    technicalArchitecture: {
      solarSpecification: "100W Monocrystalline Photovoltaic Panel (Vmp: 18.2V, Imp: 5.49A, Efficiency: 21.5%)",
      chargeController: "12V/24V 20A MPPT Solar Charge Controller (Maximum Power Point Tracking)",
      energyStorage: "12V 42Ah Sealed Lead-Acid / LiFePO4 Battery Pack (DOD 80%, 2000 Cycles)",
      carpoolAlgorithm: "Dijkstra's Shortest Path & Radius Proximity Matcher (Max Deviation: 1.5 km)"
    },
    materialsNeeded: [
      { name: "EcoSphere Campus Ride-Matcher App Access", qty: "1 App Module", cost: "Free", source: "Pragati Student Portal" },
      { name: "100W Rigid Monocrystalline Solar Panel", qty: "1 Panel", cost: "₹3,200", source: "Solar Electronics Mart Kakinada" },
      { name: "12V MPPT Charge Controller + Dual USB Hub", qty: "1 Module", cost: "₹850", source: "ECE Renewable Energy Lab" },
      { name: "Commuter Bicycle / Safety Helmet Pool", qty: "1 Unit", cost: "Self-owned", source: "Greenery Club Bike Pool" }
    ],
    actionPlan: [
      "Phase 1 (Solar Bench Construction): Mount 100W solar panel on outdoor campus study bench with MPPT USB charger.",
      "Phase 2 (Ride Matching Registration): Students input morning departure points (Kakinada, Samalkot) on EcoSphere.",
      "Phase 3 (Cost Sharing & Verification): Connect matched 3-student pools via college email ID verification.",
      "Phase 4 (Weekly Green Energy Hackathons): Organize monthly solar DIY workshops and Friday cycling rallies."
    ],
    detailedSteps: [
      {
        step: 1,
        title: "Phase 1: 100W Solar Charging Bench Hardware Assembly",
        desc: "Construct a steel frame angled at 17° South (optimal tilt angle for Andhra Pradesh latitude). Mount the 100W monocrystalline solar panel onto the frame. Wire panel leads to a 20A MPPT solar charge controller and connect a 12V 42Ah LiFePO4 battery pack inside a weatherproof box equipped with 4 QC3.0 USB charging ports for student laptops and phones.",
        image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 2,
        title: "Phase 2: Campus Carpool GIS Route Registration",
        desc: "Log into EcoSphere with Pragati College Gmail. Enter departure origin, class start time, and available vehicle seats (2-wheeler or 4-wheeler). The backend spatial index groups commuters traveling along the same corridor within a 1.5 km pickup radius.",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 3,
        title: "Phase 3: Automated Ride Matching & Fuel Split Calculator",
        desc: "The system pairs 3 verified student riders together. An integrated UPI split calculator computes daily fuel contribution per passenger (e.g. ₹25/ride vs ₹100 individual petrol cost), automatically crediting +20 EcoCoins to the driver's profile upon verified arrival at Pragati main gate.",
        image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 4,
        title: "Phase 4: Green Energy Student Workshops & Cycling Rallies",
        desc: "Host bi-weekly hands-on workshops where students build solar power banks and audit campus energy consumption. Conduct Friday Green Cycling Rallies from Surampalem junction to campus, awarding canteen vouchers to top pedal commuters.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80"
      }
    ],
    fieldDeploymentTesting: {
      solarYield: "Produces 450 Wh daily energy, charging up to 35 smartphones per sun day.",
      carbonOffset: "1 carpool group of 4 students eliminates 1.2 metric tons CO2 emissions per academic year.",
      safetyVerification: "100% verified campus profiles with emergency GPS location broadcasting."
    },
    howToMake: {
      title: "Setting Up Green Energy Activities & Carpooling at College",
      timeRequired: "3 Hours for Solar Bench / 5 Mins for Carpool Registration",
      toolsNeeded: ["Multimeter", "Wire Stripper", "Solar Panel Mounting Kit", "Smart Phone"],
      localVendors: [
        { name: "Pragati Greenery Club Bike Hub", location: "Hostel Ground Floor, Pragati Campus", contact: "bikehub@pragati.ac.in" },
        { name: "Surampalem Solar Tech Solutions", location: "Near Bus Stop, Surampalem", contact: "+91 99890 11223" }
      ],
      blueprintSummary: "Register route on EcoSphere, ride with verified peers, save petrol, charge devices with solar power, earn 10 EcoCoins per km!"
    },
    learnFaq: [
      {
        q: "Is student carpooling safe?",
        a: "Yes! All carpool accounts are strictly verified through Pragati official college IDs with mutual student rating reviews."
      }
    ]
  },
  {
    id: "sol_5",
    title: "Rainwater Harvesting & Micro-Greywater Recycling",
    category: "Water Conservation",
    summary: "Capture roof rainwater runoff and filter greywater using low-cost sand-charcoal barrel water filters.",
    heroImage: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1200&q=80",
    impactMultiplier: "Saves up to 10,000 liters of freshwater monthly • Recharges groundwater table",
    videoUrl: "https://www.youtube.com/embed/7VdO7d0ZfBg",
    watchUrl: "https://www.youtube.com/watch?v=7VdO7d0ZfBg",
    videoId: "7VdO7d0ZfBg",
    thumbnailUrl: "https://img.youtube.com/vi/7VdO7d0ZfBg/hqdefault.jpg",
    diyTutorial: "Dedicated Video Tutorial: Low-Cost Sand-Charcoal Barrel Water Filter",
    totalEstimatedBudget: "₹850 Total (Bio-Sand Barrel Filter System)",
    costCuttingTip: "Use 4-inch PVC pipes cut in half along with recycled 200L HDPE barrels to save ₹1,200 on commercial filters!",
    executiveSummary: "Monsoon rainwater runoff from building rooftops is frequently squandered as surface stormwater, leading to localized soil erosion and depleting groundwater reserves. This Low-Cost Bio-Sand and Charcoal Barrel Filter purifies rainwater and AC condensate runoff to drinking and irrigation standards at under ₹900 capital expenditure.",
    problemContext: "During Andhra Pradesh monsoon seasons, a single 1,000 sq ft rooftop receives over 85,000 liters of pure rainwater. By channeling gutter discharge through a multi-tier gravel, activated carbon, and silica sand filter bed, campus green spaces remain lush without drawing municipal groundwater.",
    technicalArchitecture: {
      filterBedDimensions: "200-Liter Food-Grade HDPE Drum (Height: 90cm, Diameter: 58cm)",
      layer1Bottom: "15cm Coarse River Gravel (Grain size: 12mm - 20mm, acts as structural drain base)",
      layer2Middle: "20cm Activated Coconut Shell Charcoal (Particle size: 2mm - 4mm, adsorbs VOCs, chlorine, and odors)",
      layer3Top: "30cm Fine Silica Sand (Grain size: 0.2mm - 0.7mm, physical filtration of turbidity and pathogens)",
      flowRateCapacity: "12 to 18 Liters Per Minute under gravity head pressure (0.2 bar)"
    },
    materialsNeeded: [
      { name: "110mm Slotted PVC Roof Gutter Pipe (3 meters)", qty: "2 Lengths", cost: "₹280", source: "Surampalem Plumbing Hardware" },
      { name: "200-Liter HDPE Plastic Drum with Removable Lid", qty: "1 Barrel", cost: "₹420", source: "Kakinada Industrial Barrel Store" },
      { name: "Coarse River Gravel, Fine Sand & Activated Charcoal", qty: "15kg Each", cost: "₹150", source: "Building Construction Supply Store" },
      { name: "1/2 inch Brass Tap & Ball Valve Assembly", qty: "1 Set", cost: "₹85", source: "Hardware Shop near College" }
    ],
    actionPlan: [
      "Phase 1 (Roof Gutter Installation): Fix 4-inch PVC gutters along roof eaves at 1:100 slope with leaf mesh guard.",
      "Phase 2 (Filter Drum Layering): Wash media thoroughly. Layer gravel (bottom 15cm), charcoal (20cm), sand (30cm).",
      "Phase 3 (First Flush Diverter Setup): Install a 20-liter first-flush pipe to divert initial dust-laden rain.",
      "Phase 4 (Gravity Drip Connection): Connect bottom outlet tap to garden drip irrigation lines around campus trees."
    ],
    detailedSteps: [
      {
        step: 1,
        title: "Phase 1: Roof Gutter Fabrication & First-Flush Diverter",
        desc: "Mount half-round 110mm PVC gutters along rooftop eaves using galvanized steel brackets pitched at a 1% slope toward the downspout. Install a 20L PVC pipe downspout Tee fitting with a floating ball valve to act as a First Flush Diverter, automatically trapping initial atmospheric dust and bird droppings before water reaches the filter drum.",
        image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 2,
        title: "Phase 2: Multi-Tier Bio-Sand & Charcoal Layering",
        desc: "Drill a 1/2-inch outlet hole 5cm from the bottom of the 200L HDPE drum and fit a brass ball valve with a stainless steel mesh strainer. Thoroughly wash filter media with clean water to eliminate fine dust. Layer media sequentially: 15cm coarse gravel at bottom, 20cm crushed activated charcoal in middle, and 30cm fine silica sand on top. Place a perforated diffuser plate on top to prevent sand disturbance during heavy downpours.",
        image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 3,
        title: "Phase 3: Biolayer (Schmutzdecke) Maturation & Flow Test",
        desc: "Allow a biological film (Schmutzdecke) to develop naturally on top sand surface over 10 days of water flow. This biological layer digests bacteria and organic pathogens. Run a flow rate test to ensure filtration output achieves 15 liters per minute with turbidity < 1 NTU.",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 4,
        title: "Phase 4: Campus Drip Line Coupling & Groundwater Recharge",
        desc: "Connect the filter outlet hose directly to a sub-surface gravity drip line running through Pragati Greenery Club botanical gardens. Surplus filtered water routes into a 3-meter deep gravel recharge pit to elevate campus water table levels.",
        image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=600&q=80"
      }
    ],
    fieldDeploymentTesting: {
      turbidityReduction: "Reduces raw rainwater turbidity from 45 NTU down to 0.8 NTU.",
      maintenanceProtocol: "Scrape top 1cm sand layer every 6 months ('scrape and throw' maintenance method). Re-fill sand after 4 scrapes.",
      waterSaved: "10,000+ liters harvested monthly per filter unit."
    },
    howToMake: {
      title: "Low-Cost Sand-Charcoal Barrel Water Filter Recipe",
      timeRequired: "2 Hours",
      toolsNeeded: ["Hacksaw", "PVC Glue", "Drill Machine", "Wrench"],
      localVendors: [
        { name: "Sri Venkateswara Hardware & Pipes", location: "College Road, Surampalem", contact: "+91 884 2776655" },
        { name: "Kakinada Water Tech & Filters", location: "Main Road, Kakinada", contact: "+91 94402 33445" }
      ],
      blueprintSummary: "Gravel at bottom (15cm) -> Charcoal in middle (20cm) -> Fine Sand on top (30cm). Filters 200L rainwater in 15 mins!"
    },
    learnFaq: [
      {
        q: "Is filtered rainwater safe for garden plants?",
        a: "Rainwater is naturally soft, free of municipal chlorine, and rich in dissolved nitrates ideal for plant growth."
      }
    ]
  },
  {
    id: "sol_6",
    title: "Zero-Single-Use Canteen & Vendor Policy",
    category: "Policy & Adoption",
    summary: "Replace plastic tea cups, cutlery, and straws with reusable steel plates and circular cup libraries in eateries.",
    heroImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
    impactMultiplier: "Eliminates 25,000 plastic tea cups monthly • Earns Vendor Green Certification",
    videoUrl: "https://www.youtube.com/embed/1kUE0BZtTRc",
    watchUrl: "https://www.youtube.com/watch?v=1kUE0BZtTRc",
    videoId: "1kUE0BZtTRc",
    thumbnailUrl: "https://img.youtube.com/vi/1kUE0BZtTRc/hqdefault.jpg",
    diyTutorial: "Dedicated Video Tutorial: Implementing a Circular Cup Library in Small Eateries",
    totalEstimatedBudget: "₹4,150 (Steel Cup & Dish Library for Canteen)",
    costCuttingTip: "Canteens save ₹3,000 monthly on disposable plastic cups by implementing a ₹10 refundable dish deposit system!",
    executiveSummary: "Disposable polypropylene (PP) tea cups and styrofoam snack plates generate massive non-recyclable waste in campus canteens and tea stalls. This blueprint implements a Circular Cup Library system based on reusable stainless steel cups, bio-degradable Areca palm leaf snack trays, and a digital QR deposit-refund system that completely removes single-use plastic cups.",
    problemContext: "Small eateries consume ~800 disposable tea cups per day. Due to wax and plastic linings, these cups cannot be recycled and burn in toxic open piles. A circular rental library provides high-grade food-safe 304 stainless steel cups backed by a ₹10 refundable security deposit, paying back initial capital investment in under 45 days.",
    technicalArchitecture: {
      cupSpecification: "200ml Double-Walled 304 Food-Grade Stainless Steel Cup (Thermal retention: 45 mins, Drop resistant)",
      washingSanitization: "3-Stage Automated Sanitization (50°C Bio-Enzyme Wash -> Hot Rinse 85°C -> UV-C Cabinet Sterilization)",
      depositTracking: "EcoSphere QR Smart Token System (Encrypted NFC / QR Token tied to user's EcoCoins wallet)"
    },
    materialsNeeded: [
      { name: "304 Grade Stainless Steel Tea Cups (Set of 100)", qty: "100 Units", cost: "₹2,800", source: "Wholesale Steel Mart Kakinada" },
      { name: "Pressed Areca Palm Leaf Snack Plates (Pack of 500)", qty: "500 Pieces", cost: "₹350", source: "Local Cottage Industry Surampalem" },
      { name: "Bio-Enzymatic Lemon Sanitizing Wash", qty: "5 Liters", cost: "₹150", source: "Greenery Club DIY Production" },
      { name: "UV-C 18W Sterilizer Cabinet Box", qty: "1 Unit", cost: "₹850", source: "Electronics Supplier Kakinada" }
    ],
    actionPlan: [
      "Phase 1 (Cup Library Stocking): Purchase 100 food-grade steel cups stamped with Pragati Greenery logo.",
      "Phase 2 (Refundable Deposit Rollout): Students pay ₹10 deposit or scan EcoSphere app to borrow steel cup for tea/coffee.",
      "Phase 3 (Sanitization Kiosk Operation): Cups return to solar wash kiosk for 3-stage hot water & UV-C sterilization.",
      "Phase 4 (Vendor Green Shield Audit): Audit canteen waste weekly. Award 'Green Shield' vendor badge & EcoCoins."
    ],
    detailedSteps: [
      {
        step: 1,
        title: "Phase 1: Stainless Steel Cup Procurement & QR Token Encoding",
        desc: "Procure 100 units of double-walled 200ml 304 stainless steel cups. Laser-engrave each cup base with a unique serial QR code linked to the EcoSphere inventory ledger. This enables real-time tracking of cup checkouts and returns across multiple campus canteen stalls.",
        image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 2,
        title: "Phase 2: QR Deposit-Refund Kiosk Workflow",
        desc: "When ordering tea or coffee, a student scans the stall's EcoSphere QR code to place a ₹10 temporary hold on their wallet. Upon finishing their beverage, the student drops the cup into the automated return scanner box, immediately unlocking their ₹10 deposit + earning 5 bonus EcoCoins.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 3,
        title: "Phase 3: 3-Stage Bio-Enzymatic & UV-C Sanitization Protocol",
        desc: "Returned cups enter the washing kiosk: (1) Pre-rinse with bio-enzymatic lemon scrub to remove oil/milk film, (2) High-pressure 85°C thermal water wash, and (3) 5-minute UV-C germicidal light exposure inside the drying cabinet, achieving 99.99% bacterial sterilization.",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 4,
        title: "Phase 4: Areca Leaf Packaging & Green Shield Vendor Certification",
        desc: "Replace plastic samosa and snack wrappers with 100% compostable pressed Areca palm leaf dishes. Canteens operating 100% plastic-free receive official 'Green Shield' certification badges on the EcoSphere green marketplace.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
      }
    ],
    fieldDeploymentTesting: {
      cupReturnRate: "98.4% return rate achieved using ₹10 deposit incentive.",
      wasteEliminated: "25,000 plastic tea cups eliminated per month per canteen unit.",
      paybackPeriod: "Initial equipment investment recovered in 42 days."
    },
    howToMake: {
      title: "Canteen Plastic Elimination & Circular Cup Blueprint",
      timeRequired: "1 Week Rollout",
      toolsNeeded: ["Dish Wash Kiosk", "QR Code Scanner", "Storage Racks", "UV Cabinet"],
      localVendors: [
        { name: "Kakinada Wholesale Steel Emporium", location: "Main Bazaar, Kakinada", contact: "+91 884 2554433" },
        { name: "Surampalem Eco Leaf Plate Enterprise", location: "Surampalem Industrial Area", contact: "+91 94405 66778" }
      ],
      blueprintSummary: "Eliminate 25,000 disposable plastic cups monthly using steel cup rental and bio-degradable Areca leaf plates!"
    },
    learnFaq: [
      {
        q: "How to maintain 100% hygiene in reusable dishes?",
        a: "Utensils pass through 3-stage washing: hot water rinse, bio-enzymatic lemon scrub, and UV sterilizer cabinet."
      }
    ]
  },
  {
    id: "sol_7",
    title: "DIY Plastic Upcycling & Bottle Brick Building",
    category: "Creative Recycling",
    summary: "Convert non-recyclable soft plastic film into tightly stuffed EcoBricks for campus garden benches step-by-step.",
    heroImage: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1200&q=80",
    impactMultiplier: "Locks 500g non-recyclable plastic per bottle • Creates permanent campus garden furniture",
    videoUrl: "https://www.youtube.com/embed/3K1s8aJ89X0",
    watchUrl: "https://www.youtube.com/watch?v=3K1s8aJ89X0",
    videoId: "3K1s8aJ89X0",
    thumbnailUrl: "https://img.youtube.com/vi/3K1s8aJ89X0/hqdefault.jpg",
    diyTutorial: "Dedicated Video Tutorial: Building a Campus EcoBrick Bench Step-by-Step",
    totalEstimatedBudget: "₹0 Free (100% Upcycled Waste Materials)",
    costCuttingTip: "Build campus benches and planter retaining walls without spending money on commercial concrete bricks!",
    executiveSummary: "Multi-layered plastic (MLP) wrappers used for chips, biscuits, and snack packaging cannot be recycled through conventional mechanical melting. An EcoBrick is a 1-liter PET bottle packed solid with clean, dry non-recyclable soft plastics to a minimum density of 0.33g/ml. These EcoBricks replace commercial concrete blocks in constructing long-lasting campus garden benches, retaining walls, and outdoor tables.",
    problemContext: "Snack kiosks produce thousands of soft plastic wrappers daily that litter lawns and wind up in open burning dumps. By mobilizing Pragati Greenery Club students to pack EcoBricks, non-recyclable plastic is permanently sequestered into sturdy, weather-proof outdoor furniture lasting over 100 years.",
    technicalArchitecture: {
      ecoBrickStandard: "1-Liter PET Bottle packed to Minimum Mass = 330 grams (Target Density: 0.33g to 0.40g per ml)",
      compactionTools: "30cm Solid Wooden Packing Rod (Diameter: 18mm with rounded tip)",
      mortarComposition: "Adobe Soil Mix (1 Part Red Clay Soil, 1 Part Coarse Sand, 0.5 Part Chopped Rice Straw, Water)",
      compressiveStrength: "Tested EcoBrick Mortar Wall Compressive Strength = 4.2 MPa (Sufficient for 3-person seating bench)"
    },
    materialsNeeded: [
      { name: "Clean, Dry 1-Liter PET Plastic Bottles", qty: "30 Bottles", cost: "Free", source: "Campus Recycling Drives" },
      { name: "Non-Recyclable Soft Plastic Wrappers (Multi-layer MLP)", qty: "15 kg", cost: "Free", source: "Hostel & Canteen Snack Waste" },
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
        desc: "Collect multi-layer snack wrappers (biscuit, chip, candy pouches). Wash thoroughly in a tub of soapy water to remove oil and food residues that could cause odor or gas buildup. Spread wrappers on wire mesh trays and sun-dry under direct sunlight for 6 hours until 100% moisture-free.",
        image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: 2,
        title: "Phase 2: Precision High-Density Packing (Min 330g Target)",
        desc: "Push a soft colored plastic wrapper into the bottom of a 1L PET bottle to create an aesthetically pleasing base. Add small pieces of soft plastic wrappers, using a 30cm wooden dowel rod to push plastic firmly into every corner. Rotate the bottle while packing to ensure uniform density. Weigh on a digital scale to verify the bottle reaches at least 330g and cannot be squeezed by hand.",
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
        desc: "Mix red clay soil, coarse sand, chopped straw, and water into a smooth mortar paste. Lay a 3cm bed of mortar, then place EcoBricks horizontally side-by-side with 2cm gaps filled with mortar. Stagger joints on subsequent layers like brickwork. Render the exterior with a smooth 2cm clay-lime plaster finish and seal with waterproof linseed oil.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
      }
    ],
    fieldDeploymentTesting: {
      densityVerification: "Passed bottle density test (>0.33 g/ml). Zero deformation under 120kg weight.",
      durabilityExpectancy: "UV-protected adobe render prevents plastic degradation for 100+ years.",
      plasticSequestered: "30 EcoBricks lock away 15 kg of non-recyclable soft plastic film."
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
  }
];

export const SUSTAINABLE_GUIDES_PDF_DATA = {
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

Aerobic composting uses beneficial micro-organisms (Lactobacillus, Actinomyces, and Trichoderma fungi) in the presence of continuous oxygen flow to decompose organic waste into rich humic fertilizer without producing foul smells.

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
• Rotation: When Bin 1 fills after ~20 days, rotate it to the middle position and place empty Bin 2 on top.

Harvesting Black Gold:
After 45 days of curing, the waste transforms into dark brown, sweet-smelling organic compost. Sift through a 5mm wire sieve and apply to home potted plants or campus gardens!`
      }
    ]
  },
  rainwater: {
    id: "pdf_rainwater",
    title: "Rooftop Rainwater & Bio-Sand Charcoal Water Filter Manual",
    subtitle: "Low-Cost Rooftop Harvesting & Water Purification Blueprint",
    version: "3.1 - Pragati Engineering College Lab Standard",
    pages: [
      {
        pageNumber: 1,
        heading: "1. Rooftop Hydrology & First-Flush Filtration Principles",
        content: `Rooftop rainwater is naturally soft, free of municipal chlorine treatment, and rich in dissolved nitrates ideal for groundwater recharge and vegetation growth.

A single 1,000 sq ft rooftop receives approximately 85,000 liters of pure water during Andhra Pradesh monsoon cycles.

First-Flush Diverter Architecture:
The initial 10-15 minutes of rainfall washes accumulated rooftop dust, bird droppings, and leaves. A 20-liter PVC first-flush pipe traps this contaminated initial runoff using a floating ball mechanism, ensuring only clean rainwater proceeds into the filtration drum.`
      },
      {
        pageNumber: 2,
        heading: "2. Bio-Sand & Charcoal Barrel Construction Guide",
        content: `Filter Drum Layering Specifications (200-Liter HDPE Barrel):
• Bottom Layer (15cm): Coarse River Gravel (12mm - 20mm particle size). Holds brass outlet tap screen.
• Middle Layer (20cm): Activated Coconut Shell Charcoal (2mm - 4mm). Adsorbs heavy metals, odors, and dissolved organic carbon.
• Top Layer (30cm): Fine Silica Sand (0.2mm - 0.7mm). Physical micro-filtration trapping suspended solids and turbidity.
• Diffuser Plate: Perforated plastic plate on top sand surface to prevent cratering during heavy rain flows.

Operation & Maintenance:
- Flow Rate: Delivers 15 to 18 Liters/minute under gravity pressure head.
- Scrape-and-Throw Maintenance: Scrape off top 1cm sand layer every 6 months to restore full flow rate.`
      }
    ]
  },
  solar: {
    id: "pdf_solar",
    title: "5V Solar Phone Charger & College Renewable Energy Blueprint",
    subtitle: "Hands-on DIY Monocrystalline Photovoltaic & MPPT Power Hub",
    version: "1.8 - Pragati ECE Innovation Hub",
    pages: [
      {
        pageNumber: 1,
        heading: "1. Photovoltaic Conversion & MPPT Solar Electronics",
        content: `Solar energy harvesting converts solar photons directly into Direct Current (DC) electricity via the photoelectric effect in semiconductor silicon wafers.

System Component Specifications:
• Photovoltaic Panel: 100W Monocrystalline Silicon Panel (Vmp: 18.2V, Imp: 5.49A, Open Circuit Voc: 22.1V).
• Charge Controller: 20A MPPT (Maximum Power Point Tracking) digital controller maintaining 98% efficiency.
• Energy Storage: 12V 42Ah LiFePO4 Battery with BMS (Battery Management System protecting against over-voltage & thermal runaway).
• Output Module: Step-down Buck Converter delivering Dual 5V 2.4A QC3.0 USB ports for mobile phone and laptop charging.`
      },
      {
        pageNumber: 2,
        heading: "2. Wiring Schematic & Safety Protocol",
        content: `Wiring Sequence:
1. Connect 12V LiFePO4 battery terminals to Charge Controller BATT+ and BATT- FIRST to calibrate system voltage.
2. Connect 100W Solar Panel positive (+) and negative (-) cables to PV IN terminals.
3. Wire USB Buck converter to LOAD output terminals.

Safety Checklist:
- Install a 15A inline DC fuse between solar panel and charge controller.
- Mount panel facing 17° South at Pragati Campus coordinates (16.98° N, 82.16° E).
- Use 4mm² UV-resistant solar extension cables.`
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
      { name: "Organic Banana-Fiber Tote Bag", price: "₹49", coinsReward: 15, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80" },
      { name: "Reusable Stainless Steel Water Flask 750ml", price: "₹299", coinsReward: 50, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80" },
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
const char* WIFI_PASS = "GreenTomorrow2026";
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
