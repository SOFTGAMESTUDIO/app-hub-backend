// getData.js
import { db } from "./firebaseConfig.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

export async function getApps() {
  try {
    console.log("🔍 Firestore instance:", db); // Debug db object

    const appsCollection = collection(db, "apps");
    const snapshot = await getDocs(appsCollection);

    if (snapshot.empty) {
      console.warn("⚠️ No apps found in Firestore.");
      return [];
    }

    const apps = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    console.log("✅ Loaded apps:", apps); // Debug output
    return apps;

  } catch (error) {
    console.error("🔥 Error loading apps:", error);
    return [];
  }
}
