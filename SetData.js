import { db } from "./firebaseConfig.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { getApps } from "./getData.js";

export function handleUploadForm() {
  const uploadForm = document.getElementById("uploadForm");
  const uploadModal = document.getElementById("uploadModal");

  if (!uploadForm) {
    console.error("Upload form not found");
    return;
  }

  uploadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const appData = {
      name: document.getElementById("appName").value,
      developer: document.getElementById("developer").value,
      description: document.getElementById("description").value,
      category: document.getElementById("category").value,
      apkUrl: document.getElementById("apkUrl").value,
      iconUrl: document.getElementById("iconUrl").value,
      screenshots: document
        .getElementById("screenshots")
        .value.split("\n")
        .filter((url) => url.trim() !== ""),
      rating: 0,
      downloads: "0",
      size: "0MB",
      version: "1.0.0",
    };

    try {
      await addDoc(collection(db, "apps"), appData);
      alert("App uploaded successfully!");
      uploadModal.style.display = "none";
      uploadForm.reset();
      getApps();
    } catch (error) {
      console.error("Error uploading app: ", error);
      alert("Error uploading app. Please try again.");
    }
  });
}
