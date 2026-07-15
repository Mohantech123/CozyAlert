export const injectStyles = () => {
  if (document.getElementById('cozyalert-styles')) return;

  const style = document.createElement('style');
  style.id = 'cozyalert-styles';
  style.innerHTML = `
    :root {
      /* Typography */
      --ca-font: ui-sans-serif, system-ui, sans-serif;
      
      /* Base Colors */
      --ca-bg: #ffffff;
      --ca-text: #111827;
      --ca-text-muted: #6b7280;
      
      /* Semantic Colors */
      --ca-primary: #3b82f6;
      --ca-primary-hover: #2563eb;
      --ca-primary-ring: rgba(59, 130, 246, 0.39);
      --ca-primary-bg: #eff6ff;
      --ca-primary-border: #dbeafe;

      --ca-success: #22c55e;
      --ca-success-hover: #16a34a;
      --ca-success-ring: rgba(34, 197, 94, 0.39);
      --ca-success-bg: #f0fdf4;
      --ca-success-border: #dcfce7;

      --ca-error: #ef4444;
      --ca-error-hover: #dc2626;
      --ca-error-ring: rgba(239, 68, 68, 0.39);
      --ca-error-bg: #fef2f2;
      --ca-error-border: #fee2e2;

      --ca-warning: #eab308;
      --ca-warning-hover: #ca8a04;
      --ca-warning-ring: rgba(234, 179, 8, 0.39);
      --ca-warning-bg: #fefce8;
      --ca-warning-border: #fef9c3;

      /* Button Colors */
      --ca-cancel-bg: #f3f4f6;
      --ca-cancel-hover: #e5e7eb;
      --ca-cancel-text: #374151;

      /* Forms */
      --ca-input-bg: #f9fafb;
      --ca-input-border: #d1d5db;
      --ca-input-focus: #ffffff;

      /* Shapes & Shadows */
      --ca-radius: 1.5rem;
      --ca-radius-modal: 1rem;
      --ca-radius-btn: 0.75rem;
      --ca-radius-input: 0.5rem;
      --ca-overlay-bg: rgba(17, 24, 39, 0.4);
      --ca-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);
    }

    /* Dark Mode Variable Overrides */
    .cozyalert-theme-dark,
    .cozyalert-theme-auto {
      --ca-bg-dark: #1f2937;
      --ca-text-dark: #f3f4f6;
      --ca-text-muted-dark: #9ca3af;
      --ca-cancel-bg-dark: #374151;
      --ca-cancel-hover-dark: #4b5563;
      --ca-cancel-text-dark: #f3f4f6;
      --ca-input-bg-dark: #374151;
      --ca-input-border-dark: #4b5563;
      --ca-input-focus-dark: #1f2937;
      --ca-shadow-dark: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1);
      
      --ca-primary-bg-dark: rgba(59, 130, 246, 0.1);
      --ca-primary-border-dark: rgba(59, 130, 246, 0.2);
      --ca-success-bg-dark: rgba(34, 197, 94, 0.1);
      --ca-success-border-dark: rgba(34, 197, 94, 0.2);
      --ca-error-bg-dark: rgba(239, 68, 68, 0.1);
      --ca-error-border-dark: rgba(239, 68, 68, 0.2);
      --ca-warning-bg-dark: rgba(234, 179, 8, 0.1);
      --ca-warning-border-dark: rgba(234, 179, 8, 0.2);
    }

    /* Apply Dark mode statically */
    .cozyalert-theme-dark {
      --ca-bg: var(--ca-bg-dark);
      --ca-text: var(--ca-text-dark);
      --ca-text-muted: var(--ca-text-muted-dark);
      --ca-cancel-bg: var(--ca-cancel-bg-dark);
      --ca-cancel-hover: var(--ca-cancel-hover-dark);
      --ca-cancel-text: var(--ca-cancel-text-dark);
      --ca-input-bg: var(--ca-input-bg-dark);
      --ca-input-border: var(--ca-input-border-dark);
      --ca-input-focus: var(--ca-input-focus-dark);
      --ca-shadow: var(--ca-shadow-dark);
      --ca-primary-bg: var(--ca-primary-bg-dark);
      --ca-primary-border: var(--ca-primary-border-dark);
      --ca-success-bg: var(--ca-success-bg-dark);
      --ca-success-border: var(--ca-success-border-dark);
      --ca-error-bg: var(--ca-error-bg-dark);
      --ca-error-border: var(--ca-error-border-dark);
      --ca-warning-bg: var(--ca-warning-bg-dark);
      --ca-warning-border: var(--ca-warning-border-dark);
    }

    /* Apply Dark mode dynamically via media query */
    @media (prefers-color-scheme: dark) {
      .cozyalert-theme-auto {
        --ca-bg: var(--ca-bg-dark);
        --ca-text: var(--ca-text-dark);
        --ca-text-muted: var(--ca-text-muted-dark);
        --ca-cancel-bg: var(--ca-cancel-bg-dark);
        --ca-cancel-hover: var(--ca-cancel-hover-dark);
        --ca-cancel-text: var(--ca-cancel-text-dark);
        --ca-input-bg: var(--ca-input-bg-dark);
        --ca-input-border: var(--ca-input-border-dark);
        --ca-input-focus: var(--ca-input-focus-dark);
        --ca-shadow: var(--ca-shadow-dark);
        --ca-primary-bg: var(--ca-primary-bg-dark);
        --ca-primary-border: var(--ca-primary-border-dark);
        --ca-success-bg: var(--ca-success-bg-dark);
        --ca-success-border: var(--ca-success-border-dark);
        --ca-error-bg: var(--ca-error-bg-dark);
        --ca-error-border: var(--ca-error-border-dark);
        --ca-warning-bg: var(--ca-warning-bg-dark);
        --ca-warning-border: var(--ca-warning-border-dark);
      }
    }

    /* Overlay */
    .cozyalert-overlay {
      position: fixed;
      inset: 0;
      z-index: 100000;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      overflow-y: auto;
      overflow-x: hidden;
      background: var(--ca-overlay-bg);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      opacity: 0;
      transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 2rem 1.25rem;
    }
    .cozyalert-overlay.cozyalert-show { opacity: 1; }
    
    /* Custom Scrollbar for Overlay to prevent native scrollbar z-index punching */
    .cozyalert-overlay::-webkit-scrollbar { width: 8px; }
    .cozyalert-overlay::-webkit-scrollbar-track { background: transparent; }
    .cozyalert-overlay::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.2); border-radius: 4px; }
    body.dark .cozyalert-overlay::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); }

    /* Offcanvas Overlay Adjustments */
    .cozyalert-overlay.cozyalert-offcanvas-overlay { padding: 0; }
    .cozyalert-overlay.cozyalert-offcanvas-overlay.position-right { justify-content: flex-end; }
    .cozyalert-overlay.cozyalert-offcanvas-overlay.position-left { justify-content: flex-start; }
    .cozyalert-overlay.cozyalert-offcanvas-overlay.position-top { align-items: flex-start; }
    .cozyalert-overlay.cozyalert-offcanvas-overlay.position-bottom { align-items: flex-end; }

    /* Toast Containers */
    .cozyalert-toast-container { position: fixed; z-index: 100050; display: flex; flex-direction: column; gap: 0.75rem; padding: 1.25rem; pointer-events: none; }
    .cozyalert-toast-container.toast-top-right { top: 0; right: 1rem; align-items: flex-end; }
    .cozyalert-toast-container.toast-top-left { top: 0; left: 1rem; align-items: flex-start; }
    .cozyalert-toast-container.toast-bottom-right { bottom: 0; right: 1rem; align-items: flex-end; flex-direction: column-reverse; }
    .cozyalert-toast-container.toast-bottom-left { bottom: 0; left: 1rem; align-items: flex-start; flex-direction: column-reverse; }
    .cozyalert-toast-container.toast-top { top: 0; left: 50%; transform: translateX(-50%); align-items: center; }
    .cozyalert-toast-container.toast-bottom { bottom: 0; left: 50%; transform: translateX(-50%); align-items: center; flex-direction: column-reverse; }
    .cozyalert-toast-container.toast-center { top: 50%; left: 50%; transform: translate(-50%, -50%); align-items: center; justify-content: center; }

    /* Popup */
    .cozyalert-popup {
      position: relative;
      box-sizing: border-box; /* Prevent padding from causing overflow */
      margin: auto;
      background: var(--ca-bg);
      border-radius: var(--ca-radius);
      box-shadow: var(--ca-shadow);
      width: 100%;
      max-width: 28rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 2rem 1.5rem;
      transform: scale(0.95) translateY(10px);
      opacity: 0;
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out;
      pointer-events: auto;
    }
    .cozyalert-show .cozyalert-popup { transform: scale(1) translateY(0); opacity: 1; }

    /* Modal Sizing */
    .cozyalert-popup.cozyalert-size-xs { max-width: 20rem; }
    .cozyalert-popup.cozyalert-size-sm { max-width: 24rem; }
    .cozyalert-popup.cozyalert-size-md { max-width: 28rem; }
    .cozyalert-popup.cozyalert-size-lg { max-width: 32rem; }
    .cozyalert-popup.cozyalert-size-xl { max-width: 42rem; }
    .cozyalert-popup.cozyalert-size-2xl { max-width: 48rem; }
    .cozyalert-popup.cozyalert-size-3xl { max-width: 56rem; }
    .cozyalert-popup.cozyalert-size-4xl { max-width: 64rem; }
    .cozyalert-popup.cozyalert-size-full { max-width: 100%; border-radius: 0; }
    .cozyalert-popup.cozyalert-size-screen { width: 100vw; height: 100vh; max-width: 100vw; border-radius: 0; margin: 0; }

    @media (max-width: 640px) {
      .cozyalert-overlay { padding: 1rem; }
      .cozyalert-popup { padding: 1.5rem 1.25rem; }
      .cozyalert-popup.cozyalert-modal-popup { padding: 1.5rem 1.25rem; }
      .cozyalert-actions { flex-direction: column; gap: 0.5rem; }
      .cozyalert-btn { width: 100%; }
      .cozyalert-popup.cozyalert-toast-popup .cozyalert-actions { flex-direction: row; width: auto; }
      .cozyalert-popup.cozyalert-toast-popup .cozyalert-btn { width: auto; }
    }

    /* Offcanvas Popup */
    .cozyalert-popup.cozyalert-offcanvas-popup {
      margin: 0; /* Override margin: auto so it attaches to edges */
      border-radius: 0;
      transform: none;
      opacity: 1;
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      padding: 3rem 2rem;
    }
    
    /* Offcanvas Left/Right Sizing */
    .cozyalert-popup.cozyalert-offcanvas-popup.position-left.cozyalert-size-xs, .cozyalert-popup.cozyalert-offcanvas-popup.position-right.cozyalert-size-xs { max-width: 16rem; }
    .cozyalert-popup.cozyalert-offcanvas-popup.position-left.cozyalert-size-sm, .cozyalert-popup.cozyalert-offcanvas-popup.position-right.cozyalert-size-sm { max-width: 20rem; }
    .cozyalert-popup.cozyalert-offcanvas-popup.position-left.cozyalert-size-md, .cozyalert-popup.cozyalert-offcanvas-popup.position-right.cozyalert-size-md { max-width: 24rem; }
    .cozyalert-popup.cozyalert-offcanvas-popup.position-left.cozyalert-size-lg, .cozyalert-popup.cozyalert-offcanvas-popup.position-right.cozyalert-size-lg { max-width: 30rem; }
    .cozyalert-popup.cozyalert-offcanvas-popup.position-left.cozyalert-size-xl, .cozyalert-popup.cozyalert-offcanvas-popup.position-right.cozyalert-size-xl { max-width: 36rem; }
    .cozyalert-popup.cozyalert-offcanvas-popup.position-left.cozyalert-size-2xl, .cozyalert-popup.cozyalert-offcanvas-popup.position-right.cozyalert-size-2xl { max-width: 42rem; }
    .cozyalert-popup.cozyalert-offcanvas-popup.position-left.cozyalert-size-3xl, .cozyalert-popup.cozyalert-offcanvas-popup.position-right.cozyalert-size-3xl { max-width: 48rem; }
    .cozyalert-popup.cozyalert-offcanvas-popup.position-left.cozyalert-size-4xl, .cozyalert-popup.cozyalert-offcanvas-popup.position-right.cozyalert-size-4xl { max-width: 56rem; }
    .cozyalert-popup.cozyalert-offcanvas-popup.position-left.cozyalert-size-full, .cozyalert-popup.cozyalert-offcanvas-popup.position-right.cozyalert-size-full { max-width: 100vw; width: 100vw; }
    .cozyalert-popup.cozyalert-offcanvas-popup.position-left.cozyalert-size-screen, .cozyalert-popup.cozyalert-offcanvas-popup.position-right.cozyalert-size-screen { max-width: 100vw; width: 100vw; }

    .cozyalert-popup.cozyalert-offcanvas-popup.position-right { right: 0; top: 0; bottom: 0; height: 100%; max-height: 100%; overflow-y: auto; }
    .cozyalert-popup.cozyalert-offcanvas-popup.position-left { left: 0; top: 0; bottom: 0; height: 100%; max-height: 100%; overflow-y: auto; }
    .cozyalert-popup.cozyalert-offcanvas-popup.position-top { top: 0; left: 0; right: 0; width: 100%; max-width: 100%; }
    .cozyalert-popup.cozyalert-offcanvas-popup.position-bottom { bottom: 0; left: 0; right: 0; width: 100%; max-width: 100%; }
    .cozyalert-popup.cozyalert-offcanvas-popup.position-right { transform: translateX(100%); }
    .cozyalert-popup.cozyalert-offcanvas-popup.position-left { transform: translateX(-100%); }
    .cozyalert-popup.cozyalert-offcanvas-popup.position-top { transform: translateY(-100%); }
    .cozyalert-popup.cozyalert-offcanvas-popup.position-bottom { transform: translateY(100%); }
    .cozyalert-show .cozyalert-popup.cozyalert-offcanvas-popup { transform: translate(0, 0); }

    /* Modal Modifiers */
    .cozyalert-popup.cozyalert-modal-popup { text-align: left; align-items: flex-start; padding: 2.5rem 2rem; }

    /* Close Button */
    .cozyalert-close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: transparent;
      border: none;
      color: #ef4444; /* Bright Red for visibility */
      cursor: pointer;
      padding: 0.5rem; /* Larger hit area */
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }
    .cozyalert-close-btn svg {
      width: 1.5rem;
      height: 1.5rem;
    }
    .cozyalert-close-btn:hover { background: #fee2e2; color: #dc2626; }

    /* Toast sizing & animations */
    .cozyalert-popup.cozyalert-toast-popup {
      max-width: 22rem; padding: 1rem 1.25rem; border-radius: var(--ca-radius-modal); flex-direction: row; align-items: center; text-align: left; gap: 1rem;
      opacity: 0; transform: none; transition: none; animation: cozyalert-toast-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }
    .cozyalert-popup.cozyalert-toast-popup.cozyalert-toast-out { animation: cozyalert-toast-out 0.3s ease-in forwards; }
    @keyframes cozyalert-toast-in { from { opacity: 0; transform: scale(0.9) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
    @keyframes cozyalert-toast-out { from { opacity: 1; transform: scale(1); } to { opacity: 0; transform: scale(0.9); } }
    .cozyalert-toast-popup .cozyalert-icon-container { margin-bottom: 0; width: 2rem; height: 2rem; flex-shrink: 0; }
    .cozyalert-toast-popup .cozyalert-icon-container svg { width: 1rem; height: 1rem; }
    .cozyalert-toast-popup .cozyalert-title { font-size: 0.875rem; margin-bottom: 0.125rem; }
    .cozyalert-toast-popup .cozyalert-content { font-size: 0.75rem; margin-bottom: 0; }
    .cozyalert-toast-popup .cozyalert-actions { width: auto; margin-left: auto; }
    .cozyalert-toast-popup .cozyalert-btn { padding: 0.375rem 0.75rem; font-size: 0.75rem; border-radius: var(--ca-radius-input); }

    /* Theming System */
    .cozyalert-title { color: var(--ca-text); margin: 0 0 0.5rem 0; font-size: 1.5rem; font-weight: 800; font-family: var(--ca-font); }
    .cozyalert-content { color: var(--ca-text-muted); font-size: 0.875rem; font-weight: 500; line-height: 1.5; margin-bottom: 1.5rem; font-family: var(--ca-font); }

    /* Icon Container */
    .cozyalert-icon-container { width: 4rem; height: 4rem; border-radius: 9999px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06); }
    .cozyalert-icon-container svg { width: 2rem; height: 2rem; animation: cozyalert-bounce 1s cubic-bezier(0.28, 0.84, 0.42, 1); }
    .cozyalert-icon-success { background: var(--ca-success-bg); color: var(--ca-success); border: 1px solid var(--ca-success-border); }
    .cozyalert-icon-error { background: var(--ca-error-bg); color: var(--ca-error); border: 1px solid var(--ca-error-border); }
    .cozyalert-icon-warning { background: var(--ca-warning-bg); color: var(--ca-warning); border: 1px solid var(--ca-warning-border); }
    .cozyalert-icon-info, .cozyalert-icon-question, .cozyalert-icon-confirm { background: var(--ca-primary-bg); color: var(--ca-primary); border: 1px solid var(--ca-primary-border); }

    /* Form Fields */
    .cozyalert-form-container { display: flex; flex-direction: column; gap: 1rem; width: 100%; margin-bottom: 1.5rem; text-align: left; }
    .cozyalert-form-group { display: flex; flex-direction: column; gap: 0.375rem; }
    .cozyalert-label { color: var(--ca-text); font-size: 0.875rem; font-weight: 600; font-family: var(--ca-font); }
    
    .cozyalert-input, .cozyalert-select, .cozyalert-textarea {
      width: 100%; padding: 0.625rem 0.875rem; border-radius: var(--ca-radius-input); border: 1px solid var(--ca-input-border);
      background-color: var(--ca-input-bg); color: var(--ca-text); font-size: 0.875rem; font-family: var(--ca-font);
      transition: all 0.2s ease-in-out; outline: none; box-sizing: border-box;
    }
    .cozyalert-textarea { resize: vertical; min-height: 60px; }
    .cozyalert-input:focus, .cozyalert-select:focus, .cozyalert-textarea:focus { border-color: var(--ca-primary); background-color: var(--ca-input-focus); box-shadow: 0 0 0 3px var(--ca-input-focus-ring); }
    .cozyalert-input.has-error, .cozyalert-select.has-error, .cozyalert-textarea.has-error { border-color: var(--ca-error); background-color: var(--ca-error-bg); }
    .cozyalert-input.has-error:focus, .cozyalert-select.has-error:focus, .cozyalert-textarea.has-error:focus { box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2); }

    .cozyalert-checkbox-wrapper { display: flex; align-items: center; gap: 0.5rem; margin-top: 0.25rem; }
    .cozyalert-checkbox { width: 1rem; height: 1rem; border-radius: 0.25rem; border: 1px solid var(--ca-input-border); accent-color: var(--ca-primary); cursor: pointer; }
    .cozyalert-error-text { color: var(--ca-error); font-size: 0.75rem; font-weight: 500; margin-top: 0.25rem; animation: cozyalert-shake 0.4s cubic-bezier(.36,.07,.19,.97) both; }

    /* File Dropzone */
    .cozyalert-file-dropzone {
      display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem;
      border: 2px dashed var(--ca-input-border); border-radius: var(--ca-radius-btn); background-color: var(--ca-input-bg); cursor: pointer;
      transition: all 0.2s ease; text-align: center; color: var(--ca-text-muted);
    }
    .cozyalert-file-dropzone:hover, .cozyalert-file-dropzone.dragover { border-color: var(--ca-primary); background-color: var(--ca-primary-bg); color: var(--ca-primary); }
    .cozyalert-file-dropzone svg { width: 2.5rem; height: 2.5rem; margin-bottom: 0.5rem; color: currentColor; }
    .cozyalert-file-dropzone span { font-size: 0.875rem; font-weight: 500; }
    .cozyalert-file-dropzone small { font-size: 0.75rem; margin-top: 0.25rem; opacity: 0.7; }
    .cozyalert-file-dropzone.has-file { border-color: var(--ca-success); background-color: var(--ca-success-bg); color: var(--ca-success); border-style: solid; }

    /* Actions */
    .cozyalert-actions { display: flex; gap: 1rem; width: 100%; justify-content: center; }
    .cozyalert-modal-popup .cozyalert-actions { justify-content: flex-end; margin-top: 1rem; }
    
    .cozyalert-btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.625rem 2rem; border-radius: var(--ca-radius-btn); font-size: 0.875rem; font-weight: 700; border: none; cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); font-family: var(--ca-font); outline: none; }
    .cozyalert-btn:hover { transform: translateY(-2px); }
    .cozyalert-btn:active { transform: translateY(0); }
    .cozyalert-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

    .cozyalert-btn-confirm { background: var(--ca-primary); color: white; box-shadow: 0 4px 14px 0 var(--ca-primary-ring); }
    .cozyalert-btn-confirm:hover { background: var(--ca-primary-hover); box-shadow: 0 6px 20px rgba(59, 130, 246, 0.23); }
    .cozyalert-btn-confirm.success { background: var(--ca-success); box-shadow: 0 4px 14px 0 var(--ca-success-ring); }
    .cozyalert-btn-confirm.success:hover { background: var(--ca-success-hover); box-shadow: 0 6px 20px rgba(34, 197, 94, 0.23); }
    .cozyalert-btn-confirm.error { background: var(--ca-error); box-shadow: 0 4px 14px 0 var(--ca-error-ring); }
    .cozyalert-btn-confirm.error:hover { background: var(--ca-error-hover); box-shadow: 0 6px 20px rgba(239, 68, 68, 0.23); }
    .cozyalert-btn-confirm.warning { background: var(--ca-warning); box-shadow: 0 4px 14px 0 var(--ca-warning-ring); }
    .cozyalert-btn-confirm.warning:hover { background: var(--ca-warning-hover); box-shadow: 0 6px 20px rgba(234, 179, 8, 0.23); }

    .cozyalert-btn-cancel { background: var(--ca-cancel-bg); color: var(--ca-cancel-text); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
    .cozyalert-btn-cancel:hover { background: var(--ca-cancel-hover); }

    /* Queue Progress */
    .cozyalert-progress-steps { display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 1.5rem; width: 100%; }
    .cozyalert-progress-step { width: 2rem; height: 2rem; border-radius: 9999px; display: flex; align-items: center; justify-content: center; font-size: 0.875rem; font-weight: 700; color: var(--ca-text-muted); background: var(--ca-cancel-bg); transition: all 0.3s ease; }
    .cozyalert-progress-step.active { background: var(--ca-primary); color: white; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2); }
    .cozyalert-progress-step.completed { background: var(--ca-success); color: white; }
    .cozyalert-progress-line { flex: 1; max-width: 3rem; height: 2px; background: var(--ca-input-border); }
    .cozyalert-progress-line.completed { background: var(--ca-success); }

    /* Animations */
    @keyframes cozyalert-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25%); } }
    @keyframes cozyalert-shake { 10%, 90% { transform: translate3d(-1px, 0, 0); } 20%, 80% { transform: translate3d(2px, 0, 0); } 30%, 50%, 70% { transform: translate3d(-3px, 0, 0); } 40%, 60% { transform: translate3d(3px, 0, 0); } }
    
    /* Loader Spinner */
    .cozyalert-spinner { animation: cozyalert-spin 1s linear infinite; width: 1.25rem; height: 1.25rem; }
    .cozyalert-spinner-circle { opacity: 0.25; }
    .cozyalert-spinner-path { opacity: 0.75; }
    @keyframes cozyalert-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

    /* Date & Time Pickers */
    .cozyalert-input-wrapper { position: relative; display: flex; width: 100%; }
    .cozyalert-picker-icon { position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); color: var(--ca-text-muted); pointer-events: none; width: 1.25rem; height: 1.25rem; }
    .cozyalert-datepicker-popup {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      z-index: 10005;
      background: var(--ca-bg);
      border: 1px solid var(--ca-input-border);
      border-radius: 12px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
      padding: 1rem;
      width: 300px;
      animation: cozyalert-fade-in 0.2s ease-out;
      display: none;
      flex-direction: column;
      gap: 0.5rem;
    }
    .cozyalert-datepicker-popup.active { display: flex; }
    .cozyalert-datepicker-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
    .cozyalert-datepicker-month-year { font-weight: 600; font-size: 1rem; color: var(--ca-text); cursor: pointer; padding: 0.25rem 0.5rem; border-radius: 6px; transition: background 0.2s; }
    .cozyalert-datepicker-month-year:hover { background: var(--ca-cancel-bg); }
    .cozyalert-datepicker-nav-btn { background: none; border: none; cursor: pointer; padding: 0.25rem; border-radius: 6px; color: var(--ca-text-muted); display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
    .cozyalert-datepicker-nav-btn:hover { background: var(--ca-cancel-bg); color: var(--ca-text); }
    
    .cozyalert-datepicker-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; text-align: center; }
    .cozyalert-datepicker-weekday { font-size: 0.75rem; font-weight: 600; color: var(--ca-text-muted); padding: 0.5rem 0; text-transform: uppercase; }
    .cozyalert-datepicker-day { padding: 0.5rem 0; font-size: 0.875rem; cursor: pointer; border-radius: 8px; color: var(--ca-text); transition: all 0.2s; position: relative; user-select: none; }
    .cozyalert-datepicker-day:hover:not(.disabled) { background: var(--ca-cancel-bg); }
    .cozyalert-datepicker-day.other-month { color: var(--ca-text-muted); opacity: 0.5; }
    .cozyalert-datepicker-day.today { font-weight: 700; color: var(--ca-primary); }
    .cozyalert-datepicker-day.selected { background: var(--ca-primary) !important; color: white !important; font-weight: 600; }
    .cozyalert-datepicker-day.in-range { background: var(--ca-primary-bg); color: var(--ca-primary); border-radius: 0; }
    .cozyalert-datepicker-day.range-start { border-top-right-radius: 0; border-bottom-right-radius: 0; background: var(--ca-primary) !important; color: white !important; }
    .cozyalert-datepicker-day.range-end { border-top-left-radius: 0; border-bottom-left-radius: 0; background: var(--ca-primary) !important; color: white !important; }
    .cozyalert-datepicker-day.disabled { opacity: 0.3; cursor: not-allowed; text-decoration: line-through; }
    
    .cozyalert-event-dot { position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%); width: 4px; height: 4px; border-radius: 50%; background: var(--ca-primary); }
    
    /* Time Picker Slots */
    .cozyalert-timepicker-slots { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin-top: 0.5rem; max-height: 200px; overflow-y: auto; padding-right: 0.25rem; }
    .cozyalert-timepicker-slot { padding: 0.5rem; text-align: center; font-size: 0.875rem; font-weight: 500; color: var(--ca-text); background: var(--ca-cancel-bg); border-radius: 8px; cursor: pointer; transition: all 0.2s; border: 1px solid transparent; }
    .cozyalert-timepicker-slot:hover { border-color: var(--ca-primary); color: var(--ca-primary); }
    .cozyalert-timepicker-slot.selected { background: var(--ca-primary); color: white; border-color: var(--ca-primary); }
  `;
  document.head.appendChild(style);
};
