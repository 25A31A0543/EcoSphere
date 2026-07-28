// LocalStorage and Google Cloud Storage / Firestore Simulation

const STORAGE_KEYS = {
  USER_PROFILE: "ecosphere_user_profile",
  ECO_COINS: "ecosphere_eco_coins",
  USER_MODE: "ecosphere_user_mode", // 'personal' | 'vendor'
  SUBMISSIONS: "ecosphere_submissions",
  CHALLENGES: "ecosphere_completed_challenges",
  GCP_SYNC_TIME: "ecosphere_gcp_last_sync"
};

export const INITIAL_USER = {
  isSignedIn: true,
  name: "Pragati Green Champion",
  email: "student@pragati.ac.in",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PragatiUser",
  college: "Pragati Engineering College",
  club: "Greenery Club & EcoVision 360",
  role: "Student Warrior", // 'Student Warrior' | 'Small Vendor' | 'Faculty' | 'Citizen'
  ecoCoins: 450,
  plasticSavedKg: 18.5,
  treesPlanted: 6,
  iotDustbinsBuilt: 1,
  badges: ["Plastic Destroyer", "IoT Builder", "Green Shopper"]
};

export function getStoredUser() {
  const data = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
  if (!data) {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(INITIAL_USER));
    return INITIAL_USER;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_USER;
  }
}

export function saveStoredUser(user) {
  localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(user));
  localStorage.setItem(STORAGE_KEYS.GCP_SYNC_TIME, new Date().toISOString());
}

export function addEcoCoins(amount, reason = "Eco Action Completed") {
  const user = getStoredUser();
  user.ecoCoins = (user.ecoCoins || 0) + amount;
  saveStoredUser(user);
  return user.ecoCoins;
}

export function deductEcoCoins(amount) {
  const user = getStoredUser();
  if (user.ecoCoins >= amount) {
    user.ecoCoins -= amount;
    saveStoredUser(user);
    return { success: true, newBalance: user.ecoCoins };
  }
  return { success: false, currentBalance: user.ecoCoins };
}

export function getLastGCPSyncTime() {
  return localStorage.getItem(STORAGE_KEYS.GCP_SYNC_TIME) || new Date().toISOString();
}
