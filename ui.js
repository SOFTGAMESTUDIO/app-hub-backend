// UI functions for rendering app cards and details
const appsGrid = document.getElementById("appsGrid");
const appDetail = document.getElementById("appDetail");

export function renderAppCard(app, id) {
    const appCard = document.createElement("div");
    appCard.className = "app-card";
    appCard.innerHTML = `
        <div class="app-image">
            <img src="${app.iconUrl}" alt="${app.name}" onerror="this.src='https://via.placeholder.com/300x200?text=App+Image'">
        </div>
        <div class="app-info">
            <h3 class="app-name">${app.name}</h3>
            <p class="app-developer">${app.developer}</p>
            <div class="app-rating">
                <i class="fas fa-star"></i>
                <span>${app.rating || 'N/A'}</span>
            </div>
            <div class="app-actions">
                <button class="btn btn-outline details-btn" data-id="${id}">
                    <i class="fas fa-info-circle"></i> Details
                </button>
                <button class="btn download-btn" data-url="${app.apkUrl}">
                    <i class="fas fa-download"></i> Download
                </button>
            </div>
        </div>
    `;
    appsGrid.appendChild(appCard);

    appCard.querySelector(".details-btn").addEventListener("click", () => {
        showAppDetail(app);
    });
    appCard.querySelector(".download-btn").addEventListener("click", () => {
        window.location.href = app.apkUrl;
    });
}

export function showAppDetail(app) {
    appsGrid.style.display = "none";
    appDetail.style.display = "block";

    appDetail.innerHTML = `
        <div class="detail-header">
            <div class="detail-image">
                <img src="${app.iconUrl}" alt="${app.name}" width="120" onerror="this.src='https://via.placeholder.com/120x120?text=App+Icon'">
            </div>
            <div class="detail-info">
                <h1>${app.name}</h1>
                <p>${app.developer}</p>
                <div class="app-rating">
                    <i class="fas fa-star"></i>
                    <span>${app.rating || 'N/A'} • ${app.downloads || '0'} downloads</span>
                </div>
                <p class="app-description">${app.description}</p>
                <button class="btn download-btn" data-url="${app.apkUrl}">
                    <i class="fas fa-download"></i> Download APK
                </button>
            </div>
        </div>
        <button class="btn btn-outline" id="backToList">
            <i class="fas fa-arrow-left"></i> Back to Apps
        </button>
    `;

    appDetail.querySelector(".download-btn").addEventListener("click", () => {
        window.location.href = app.apkUrl;
    });

    appDetail.querySelector("#backToList").addEventListener("click", () => {
        appsGrid.style.display = "grid";
        appDetail.style.display = "none";
    });
}

export function initUI() {
    const uploadBtn = document.getElementById("uploadBtn");
    const uploadModal = document.getElementById("uploadModal");
    const closeModal = document.querySelector(".close");

    if (!uploadBtn || !uploadModal || !closeModal) {
        console.error("Upload modal elements not found in DOM");
        return;
    }

    // Open modal
    uploadBtn.addEventListener("click", () => {
        uploadModal.style.display = "flex";
    });

    // Close modal by X
    closeModal.addEventListener("click", () => {
        uploadModal.style.display = "none";
    });

    // Close modal by clicking outside
    window.addEventListener("click", (e) => {
        if (e.target === uploadModal) {
            uploadModal.style.display = "none";
        }
    });
}