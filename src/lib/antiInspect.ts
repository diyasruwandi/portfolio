/**
 * Anti-Inspect Utility
 * Mempersulit / mencegah pengguna awam mengakses DevTools
 * Note: Ini bukan solusi 100% - developer berpengalaman tetap bisa bypass
 * Note: DevTools detection dinonaktifkan di mobile (tidak relevan & false positive)
 */

/** Deteksi apakah user menggunakan perangkat mobile */
function isMobile(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/** Tag elemen interaktif yang TIDAK boleh diblokir */
const INTERACTIVE_TAGS = ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'A'];

function isInteractiveTarget(e: Event): boolean {
  const target = e.target as HTMLElement;
  return INTERACTIVE_TAGS.includes(target?.tagName ?? '');
}

export function initAntiInspect(): void {
  const mobile = isMobile();

  // ─── 1. Disable Right-Click (Desktop only, non-interactive elements) ──────
  if (!mobile) {
    document.addEventListener('contextmenu', (e: MouseEvent) => {
      // Jangan blokir jika klik di elemen interaktif (input, link, dsb)
      if (isInteractiveTarget(e)) return;
      e.preventDefault();
    });
  }

  // ─── 2. Disable Common DevTools Keyboard Shortcuts (Desktop only) ────────
  if (!mobile) {
    const blockedKeys = ['F12'];

    interface KeyCombo {
      ctrl?: boolean;
      shift?: boolean;
      key: string;
    }

    const blockedCombos: KeyCombo[] = [
      // Inspect / DevTools
      { ctrl: true, shift: true, key: 'I' },
      { ctrl: true, shift: true, key: 'i' },
      // Elements panel
      { ctrl: true, shift: true, key: 'C' },
      { ctrl: true, shift: true, key: 'c' },
      // Console
      { ctrl: true, shift: true, key: 'J' },
      { ctrl: true, shift: true, key: 'j' },
      // View Source
      { ctrl: true, key: 'U' },
      { ctrl: true, key: 'u' },
    ];
    // Catatan: Ctrl+S dan F11 TIDAK diblokir agar tidak mengganggu UX normal

    document.addEventListener('keydown', (e: KeyboardEvent) => {
      // Jangan blokir shortcut jika user sedang focus di elemen interaktif
      if (isInteractiveTarget(e)) return;

      // Block single keys
      if (blockedKeys.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      // Block key combos
      for (const combo of blockedCombos) {
        const ctrlMatch = combo.ctrl ? (e.ctrlKey || e.metaKey) : true;
        const shiftMatch = combo.shift ? e.shiftKey : !e.shiftKey;
        if (ctrlMatch && shiftMatch && e.key === combo.key) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
      }
    });
  }

  // ─── 3. DevTools Detection (Desktop only) ────────────────────────────────
  // Di mobile: outerHeight - innerHeight > 160 karena address bar → false positive
  if (!mobile) {
    let devtoolsOpen = false;

    const handleDevToolsOpen = (): void => {
      document.body.style.filter = 'blur(10px)';
      document.body.style.pointerEvents = 'none';
      document.body.style.userSelect = 'none';
      showWarningOverlay();
    };

    const showWarningOverlay = (): void => {
      if (document.getElementById('anti-inspect-overlay')) return;

      const overlay = document.createElement('div');
      overlay.id = 'anti-inspect-overlay';
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
          document.body.style.filter = '';
          document.body.style.pointerEvents = '';
          document.body.style.userSelect = '';
          const existingOverlay = document.getElementById('anti-inspect-overlay');
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

    setInterval(detectDevTools, 1000);
  }

  // ─── 4. Disable text selection (hanya konten, bukan input) ───────────────
  // Di mobile: dilewati karena mengganggu gesture scroll & touch
  if (!mobile) {
    document.addEventListener('selectstart', (e: Event) => {
      // Izinkan selection di elemen interaktif (input, textarea, dsb)
      if (isInteractiveTarget(e)) return;
      e.preventDefault();
    });
  }

  // ─── 5. Disable drag (hanya elemen non-interaktif) ───────────────────────
  document.addEventListener('dragstart', (e: Event) => {
    if (isInteractiveTarget(e)) return;
    e.preventDefault();
  });
}
