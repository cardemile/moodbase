chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action !== "showToast") return;
  const existing = document.getElementById("sb-toast");
  if (existing) existing.remove();
  const toast = document.createElement("div");
  toast.id = "sb-toast";
  toast.textContent = msg.message || "Saved";
  const isError = msg.type === "error";
  toast.style.cssText = "position:fixed;bottom:24px;right:24px;background:" + (isError ? "#3a2020" : "#1A1714") + ";color:" + (isError ? "#f0d0d0" : "#F8F6F2") + ";font-family:'Instrument Sans',system-ui,sans-serif;font-size:13px;padding:11px 18px;border-radius:10px;z-index:999999;box-shadow:0 4px 20px rgba(0,0,0,0.2);opacity:0;transform:translateY(8px);transition:opacity 0.2s,transform 0.2s;pointer-events:none;";
  document.body.appendChild(toast);
  requestAnimationFrame(() => { toast.style.opacity = "1"; toast.style.transform = "translateY(0)"; });
  setTimeout(() => { toast.style.opacity = "0"; toast.style.transform = "translateY(8px)"; setTimeout(() => toast.remove(), 300); }, isError ? 5000 : 2500);
});

let saveBtn = null;
let currentTarget = null;
let hideTimer = null;

function createSaveBtn() {
  const btn = document.createElement("div");
  btn.id = "sb-hover-btn";
  btn.textContent = "+ Save";
  btn.style.cssText = "position:fixed;z-index:999998;background:#1A1714;color:#C4A882;font-family:'Instrument Sans',system-ui,sans-serif;font-size:11px;font-weight:500;letter-spacing:0.06em;padding:5px 10px;border-radius:6px;cursor:pointer;box-shadow:0 2px 12px rgba(0,0,0,0.3);border:1px solid rgba(196,168,130,0.3);opacity:0;transition:opacity 0.15s;pointer-events:all;user-select:none;";
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!currentTarget) return;
    const el = currentTarget;
    let imageUrl = null;
    let videoUrl = null;
    let isMotion = false;
    if (el.tagName === "VIDEO") {
      videoUrl = el.currentSrc || el.src || (el.querySelector("source") ? el.querySelector("source").src : null);
      imageUrl = el.getAttribute("poster") || null;
      isMotion = !!videoUrl;
    } else if (el.tagName === "IMG") {
      imageUrl = el.src || null;
      if (imageUrl && /\.gif(\?|$)/i.test(imageUrl)) {
        videoUrl = imageUrl;
        isMotion = true;
      }
    }
    if (imageUrl && imageUrl.startsWith("data:")) imageUrl = null;
    if (videoUrl && videoUrl.startsWith("blob:")) { videoUrl = null; isMotion = false; }
    const item = {
      type: isMotion ? "video" : (imageUrl ? "image" : "link"),
      url: videoUrl || imageUrl || window.location.href,
      posterUrl: imageUrl || null,
      title: el.alt || el.title || document.title,
      favicon: document.querySelector('link[rel~="icon"]') ? document.querySelector('link[rel~="icon"]').href : "",
      sourceUrl: window.location.href,
      pageContent: document.title + " -- " + window.location.href
    };
    btn.textContent = "Saving...";
    btn.style.opacity = "0.6";
    chrome.runtime.sendMessage({ action: "saveItem", item, tabId: null }, (res) => {
      btn.textContent = res && res.success ? "Saved!" : "Error";
      setTimeout(() => { btn.textContent = "+ Save"; btn.style.opacity = "1"; }, 1500);
    });
  });
  document.body.appendChild(btn);
  return btn;
}

function showBtnOnElement(el) {
  if (!saveBtn) saveBtn = createSaveBtn();
  clearTimeout(hideTimer);
  currentTarget = el;
  const rect = el.getBoundingClientRect();
  if (rect.width < 80 || rect.height < 80) return;
  saveBtn.style.top = (rect.top + 8) + "px";
  saveBtn.style.left = (rect.right - 80) + "px";
  saveBtn.style.opacity = "1";
}

function hideBtn() {
  hideTimer = setTimeout(() => { if (saveBtn) saveBtn.style.opacity = "0"; }, 300);
}

document.addEventListener("mouseover", (e) => {
  const el = e.target;
  if (el.tagName === "IMG" || el.tagName === "VIDEO") showBtnOnElement(el);
}, true);

document.addEventListener("mouseout", (e) => {
  const el = e.target;
  if (el.tagName === "IMG" || el.tagName === "VIDEO") hideBtn();
}, true);

document.addEventListener("mouseover", (e) => {
  if (e.target.id === "sb-hover-btn") clearTimeout(hideTimer);
}, true);

document.addEventListener("mouseout", (e) => {
  if (e.target.id === "sb-hover-btn") hideBtn();
}, true);
