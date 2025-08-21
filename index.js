// index.js
import { getApps } from "./getData.js";
import { handleUploadForm } from "./SetData.js";
import { initUI, renderAppCard } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    console.log("🚀 Initializing app...");

    const container = document.getElementById("appsGrid");
    container.innerHTML = "<p>Loading apps...</p>";

    // Fetch apps
    const apps = await getApps();
    container.innerHTML = ""; // Clear loading text

    if (apps.length === 0) {
      container.innerHTML = "<p>No apps available right now.</p>";
    } else {
      apps.forEach(app => {
        renderAppCard(app, app.id); // ✅ use app.id, not undefined doc.id
      });
    }

    // Setup UI + Upload
    initUI();
    handleUploadForm();

    console.log("✅ App initialized successfully");
  } catch (error) {
    console.error("❌ Error initializing app:", error);

    const container = document.getElementById("appsGrid");
    if (container) {
      container.innerHTML = "<p style='color:red;'>Something went wrong. Please refresh.</p>";
    }
  }
});
