/**
 * Anti-Inspect Utility
 * Mempersulit / mencegah pengguna awam mengakses DevTools
 * Note: Ini bukan solusi 100% - developer berpengalaman tetap bisa bypass
 */

export function initAntiInspect(): void {
  // ─── 1. Disable Right-Click ──────────────────────────────────────────────
  document.addEventListener("contextmenu", (e: MouseEvent) => {
    e.preventDefault();
  });

  // ─── 2. Disable Common DevTools Keyboard Shortcuts ───────────────────────
  const blockedKeys = ["F12", "F11"];

  interface KeyCombo {
    ctrl?: boolean;
    shift?: boolean;
    key: string;
  }

  const blockedCombos: KeyCombo[] = [
    // Inspect / DevTools
    { ctrl: true, shift: true, key: "I" },
    { ctrl: true, shift: true, key: "i" },
    // Elements panel
    { ctrl: true, shift: true, key: "C" },
    { ctrl: true, shift: true, key: "c" },
    // Console
    { ctrl: true, shift: true, key: "J" },
    { ctrl: true, shift: true, key: "j" },
    // View Source
    { ctrl: true, key: "U" },
    { ctrl: true, key: "u" },
    // Save page as
    { ctrl: true, key: "S" },
    { ctrl: true, key: "s" },
  ];

  document.addEventListener("keydown", (e: KeyboardEvent) => {
    // Block single keys
    if (blockedKeys.includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Block key combos
    for (const combo of blockedCombos) {
      const ctrlMatch = combo.ctrl ? e.ctrlKey || e.metaKey : true;
      const shiftMatch = combo.shift ? e.shiftKey : !e.shiftKey;
      if (ctrlMatch && shiftMatch && e.key === combo.key) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
    }
  });

  // ─── 3. DevTools Detection (via window size diff) ────────────────────────
  let devtoolsOpen = false;

  // ─── 4. Handler saat DevTools terdeteksi ─────────────────────────────────
  const handleDevToolsOpen = (): void => {
    document.body.style.filter = "blur(10px)";
    document.body.style.pointerEvents = "none";
    document.body.style.userSelect = "none";
    showWarningOverlay();
  };

  const showWarningOverlay = (): void => {
    // Cegah duplikasi overlay
    if (document.getElementById("anti-inspect-overlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "anti-inspect-overlay";
    overlay.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      background: rgba(0, 0, 0, 0.97);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      font-family: 'Inter', sans-serif;
      color: white;
      text-align: center;
      gap: 16px;
    `;

    overlay.innerHTML = `
      <div style="font-size: 3rem;">🚫</div>
      <h2 style="font-size: 1.5rem; font-weight: 700; color: #ff4d4d; margin: 0;">
        Access Denied
      </h2>
      <p style="font-size: 1rem; color: #aaa; margin: 0; max-width: 300px;">
        Browser DevTools tidak diizinkan di halaman ini.
      </p>
      <p style="font-size: 0.8rem; color: #555; margin: 0;">
        Silakan tutup DevTools untuk melanjutkan.
      </p>
    `;

    document.body.appendChild(overlay);

    // Periksa setiap 500ms apakah DevTools sudah ditutup
    const restoreCheck = setInterval(() => {
      const widthDiff = window.outerWidth - window.innerWidth > 160;
      const heightDiff = window.outerHeight - window.innerHeight > 160;
      if (!widthDiff && !heightDiff) {
        // DevTools ditutup — restore halaman
        document.body.style.filter = "";
        document.body.style.pointerEvents = "";
        document.body.style.userSelect = "";
        const existingOverlay = document.getElementById("anti-inspect-overlay");
        if (existingOverlay) existingOverlay.remove();
        devtoolsOpen = false;
        clearInterval(restoreCheck);
      }
    }, 500);
  };

  const detectDevTools = (): void => {
    const threshold = 160;
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;

    if (widthDiff || heightDiff) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        handleDevToolsOpen();
      }
    } else {
      devtoolsOpen = false;
    }
  };

  // ─── 5. Jalankan deteksi secara berkala ──────────────────────────────────
  setInterval(detectDevTools, 1000);

  // ─── 6. Disable text selection & drag ────────────────────────────────────
  document.addEventListener("selectstart", (e: Event) => e.preventDefault());
  document.addEventListener("dragstart", (e: Event) => e.preventDefault());
}
