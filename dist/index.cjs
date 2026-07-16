var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  CozyAlert: () => CozyAlert,
  default: () => CozyAlert
});
module.exports = __toCommonJS(index_exports);

// src/core/styles.ts
var injectStyles = () => {
  if (document.getElementById("cozyalert-styles")) return;
  const style = document.createElement("style");
  style.id = "cozyalert-styles";
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
      color: var(--ca-text);
      font-family: var(--ca-font);
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

    /* DatePicker Year/Month Grids */
    .cozyalert-datepicker-grid.year-grid { grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 8px; }
    .cozyalert-datepicker-grid.month-grid { grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 8px; }
    .cozyalert-datepicker-day.month-year-cell { padding: 1.25rem 0.5rem; font-weight: 500; border-radius: 12px; font-size: 0.95rem; }

    /* TimePicker Default Spinner UI */
    .cozyalert-time-default-container { display: flex; align-items: center; justify-content: center; gap: 1rem; padding: 1rem 0; }
    .cozyalert-time-spinner { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
    .cozyalert-time-spinner button { background: none; border: none; cursor: pointer; color: var(--ca-text-muted); padding: 0.25rem; transition: color 0.2s; display: flex; }
    .cozyalert-time-spinner button:hover { color: var(--ca-primary); }
    .cozyalert-time-spinner-val { font-size: 2rem; font-weight: 700; color: var(--ca-text); width: 3.5rem; text-align: center; font-variant-numeric: tabular-nums; }
    .cozyalert-time-separator { font-size: 2rem; font-weight: 700; color: var(--ca-text-muted); margin-bottom: 0.25rem; }
    .cozyalert-time-period-wrap { display: flex; flex-direction: column; gap: 0.25rem; margin-left: 0.5rem; }
    .cozyalert-time-period-wrap button { background: var(--ca-input-bg); border: 1px solid var(--ca-input-border); color: var(--ca-text-muted); font-size: 0.75rem; font-weight: 700; border-radius: 6px; padding: 0.375rem 0.75rem; cursor: pointer; transition: all 0.2s; }
    .cozyalert-time-period-wrap button.active { background: var(--ca-primary); color: white; border-color: var(--ca-primary); }

    /* TimePicker Clock UI */
    .cozyalert-clock-header { display: flex; align-items: baseline; justify-content: center; font-size: 3rem; font-weight: 800; gap: 0.25rem; color: var(--ca-text-muted); margin-bottom: 1.5rem; font-variant-numeric: tabular-nums; line-height: 1; }
    .cozyalert-clock-header span { cursor: pointer; padding: 0.25rem 0.5rem; border-radius: 12px; transition: all 0.2s; background: transparent; }
    .cozyalert-clock-header span.active { color: var(--ca-primary); background: var(--ca-primary-bg); }
    .cozyalert-clock-header span.period-toggle { font-size: 1rem; margin-left: 0.5rem; background: var(--ca-cancel-bg); border: none; padding: 0.5rem 0.75rem; color: var(--ca-text); font-weight: 700; text-transform: uppercase; border-radius: 8px; align-self: center; transition: background 0.2s; }
    .cozyalert-clock-header span.period-toggle:hover { background: var(--ca-cancel-hover); }
    
    .cozyalert-clock-dial { position: relative; width: 260px; height: 260px; border-radius: 50%; background: #f8fafc; box-shadow: inset 0 2px 10px rgba(0,0,0,0.03); margin: 0 auto 1rem auto; display: flex; align-items: center; justify-content: center; border: 1px solid #f1f5f9; }
    .cozyalert-clock-center { position: absolute; width: 8px; height: 8px; background: var(--ca-primary); border-radius: 50%; z-index: 10; top: calc(50% - 4px); left: calc(50% - 4px); }
    .cozyalert-clock-node { position: absolute; width: 32px; height: 32px; margin-left: -16px; margin-top: -16px; display: flex; align-items: center; justify-content: center; font-size: 0.875rem; font-weight: 500; color: var(--ca-text); cursor: pointer; border-radius: 50%; transition: background 0.2s, color 0.2s; z-index: 2; }
    .cozyalert-clock-node:hover { background: var(--ca-input-border); }
    .cozyalert-clock-node.active { background: var(--ca-primary); color: white; }
    .cozyalert-clock-hand { position: absolute; width: 100px; height: 2px; background: var(--ca-primary); transform-origin: 0% 50%; left: 50%; top: calc(50% - 1px); z-index: 1; pointer-events: none; }
    
    /* TimePicker Mobile Scroll UI */
    .cozyalert-time-scroll-container { display: flex; height: 200px; justify-content: center; gap: 1rem; position: relative; margin-top: 1rem; }
    .cozyalert-time-scroll-overlay { position: absolute; top: 50%; left: 0; right: 0; height: 40px; margin-top: -20px; background: var(--ca-primary-bg); border-radius: 8px; z-index: 0; pointer-events: none; }
    .cozyalert-scroll-col { flex: 1; max-width: 60px; height: 100%; overflow-y: auto; scroll-snap-type: y mandatory; scrollbar-width: none; z-index: 1; padding: 80px 0; }
    .cozyalert-scroll-col::-webkit-scrollbar { display: none; }
    .cozyalert-scroll-item { height: 40px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 500; color: var(--ca-text-muted); scroll-snap-align: center; cursor: pointer; transition: color 0.2s, font-size 0.2s; }
    .cozyalert-scroll-item.active { color: var(--ca-primary); font-weight: 700; font-size: 1.4rem; }
    
    /* Mobile Layout Overrides */
    @keyframes slide-up { from { transform: translateY(100%); } to { transform: translateY(0); } }
    .cozyalert-datepicker-popup.mobile-layout { position: fixed; bottom: 0; left: 0; right: 0; width: 100%; border-radius: 20px 20px 0 0; animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1); box-shadow: 0 -10px 40px rgba(0,0,0,0.15); padding: 1.5rem; z-index: 100000; }
    .cozyalert-mobile-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--ca-input-border); }
    .cozyalert-mobile-header button { background: none; border: none; font-size: 1rem; font-weight: 600; cursor: pointer; font-family: var(--ca-font); }
    .cozyalert-mobile-cancel { color: var(--ca-text-muted); }
    .cozyalert-mobile-done { color: var(--ca-primary); }
    .cozyalert-mobile-title { font-weight: 700; font-size: 1.1rem; color: var(--ca-text); font-family: var(--ca-font); }
  `;
  document.head.appendChild(style);
};

// src/core/icons.ts
var getIconSvg = (type) => {
  switch (type) {
    case "success":
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>`;
    case "error":
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>`;
    case "warning":
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3Z" />
      </svg>`;
    case "question":
    case "confirm":
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
      </svg>`;
    case "info":
    default:
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
      </svg>`;
  }
};
var getLoaderSvg = () => {
  return `<svg class="cozyalert-spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="cozyalert-spinner-circle" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="cozyalert-spinner-path" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>`;
};
var getCloudUploadSvg = () => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
  </svg>`;
};
var getCloseSvg = () => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>`;
};

// src/components/DatePicker.ts
var CozyDatePicker = class {
  input;
  config;
  popup;
  currentDate;
  selectedDates;
  rangeStart = null;
  rangeEnd = null;
  // View mode states: 'date', 'month', 'year'
  viewMode;
  constructor(input, config = {}) {
    var _a;
    this.input = input;
    this.config = {
      mode: "single",
      // 'single' | 'range' | 'month' | 'year'
      locale: typeof navigator !== "undefined" ? navigator.language : "en-US",
      ...config
    };
    this.currentDate = /* @__PURE__ */ new Date();
    this.selectedDates = [];
    if (this.config.mode === "month") {
      this.viewMode = "year";
    } else if (this.config.mode === "year") {
      this.viewMode = "year";
    } else {
      this.viewMode = "date";
    }
    this.popup = document.createElement("div");
    this.popup.className = "cozyalert-datepicker-popup";
    if (this.config.mobileLayout) {
      this.popup.classList.add("mobile-layout");
    }
    (_a = this.input.parentNode) == null ? void 0 : _a.appendChild(this.popup);
    this.initEvents();
  }
  initEvents() {
    this.input.addEventListener("click", (e) => {
      e.stopPropagation();
      this.open();
    });
    document.addEventListener("click", (e) => {
      if (!this.popup.contains(e.target) && e.target !== this.input) {
        this.close();
      }
    });
  }
  open() {
    this.popup.classList.add("active");
    if (this.config.mode === "month") this.viewMode = "year";
    if (this.config.mode === "year") this.viewMode = "year";
    this.render();
  }
  isDateDisabled(date) {
    if (this.config.disableWeekends) {
      const day = date.getDay();
      if (day === 0 || day === 6) return true;
    }
    if (this.config.minDate && date < new Date(this.config.minDate)) return true;
    if (this.config.maxDate && date > new Date(this.config.maxDate)) return true;
    if (this.config.disabledDates) {
      const dateStr = date.toDateString();
      return this.config.disabledDates.some((d) => new Date(d).toDateString() === dateStr);
    }
    return false;
  }
  close() {
    this.popup.classList.remove("active");
  }
  getMonthDays(year, month) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    return { firstDay, daysInMonth, daysInPrevMonth };
  }
  formatLocal(date, options) {
    return new Intl.DateTimeFormat(this.config.locale, {
      timeZone: this.config.timezone,
      ...options
    }).format(date);
  }
  updateInputValue() {
    if (this.config.mode === "single" && this.selectedDates.length > 0) {
      this.input.value = this.formatLocal(this.selectedDates[0], { year: "numeric", month: "short", day: "numeric" });
    } else if (this.config.mode === "range" && this.rangeStart && this.rangeEnd) {
      const s = this.formatLocal(this.rangeStart, { year: "numeric", month: "short", day: "numeric" });
      const e = this.formatLocal(this.rangeEnd, { year: "numeric", month: "short", day: "numeric" });
      this.input.value = `${s} - ${e}`;
    } else if (this.config.mode === "month" && this.selectedDates.length > 0) {
      this.input.value = this.formatLocal(this.selectedDates[0], { year: "numeric", month: "long" });
    } else if (this.config.mode === "year" && this.selectedDates.length > 0) {
      this.input.value = this.formatLocal(this.selectedDates[0], { year: "numeric" });
    }
    this.input.dispatchEvent(new Event("input", { bubbles: true }));
  }
  render() {
    this.popup.innerHTML = "";
    if (this.config.mobileLayout) {
      this.renderMobileHeader();
    }
    if (this.viewMode === "year") {
      this.renderYearView();
    } else if (this.viewMode === "month") {
      this.renderMonthView();
    } else {
      this.renderDateView();
    }
  }
  renderHeader(titleText, onPrev, onNext, onTitleClick) {
    const header = document.createElement("div");
    header.className = "cozyalert-datepicker-header";
    const prevBtn = document.createElement("button");
    prevBtn.className = "cozyalert-datepicker-nav-btn";
    prevBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>';
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      e.preventDefault();
      onPrev(e);
    };
    const title = document.createElement("div");
    title.className = "cozyalert-datepicker-month-year";
    title.textContent = titleText;
    if (onTitleClick) {
      title.style.cursor = "pointer";
      title.onclick = (e) => {
        e.stopPropagation();
        onTitleClick(e);
      };
    } else {
      title.style.cursor = "default";
    }
    const nextBtn = document.createElement("button");
    nextBtn.className = "cozyalert-datepicker-nav-btn";
    nextBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>';
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      e.preventDefault();
      onNext(e);
    };
    header.appendChild(prevBtn);
    header.appendChild(title);
    header.appendChild(nextBtn);
    this.popup.appendChild(header);
  }
  renderMobileHeader() {
    const header = document.createElement("div");
    header.className = "cozyalert-mobile-header";
    const cancelBtn = document.createElement("button");
    cancelBtn.className = "cozyalert-mobile-cancel";
    cancelBtn.textContent = "Cancel";
    cancelBtn.onclick = (e) => {
      e.stopPropagation();
      this.close();
    };
    const title = document.createElement("div");
    title.className = "cozyalert-mobile-title";
    title.textContent = "Choose Date";
    const doneBtn = document.createElement("button");
    doneBtn.className = "cozyalert-mobile-done";
    doneBtn.textContent = "Done";
    doneBtn.onclick = (e) => {
      e.stopPropagation();
      this.updateInputValue();
      this.close();
    };
    header.appendChild(cancelBtn);
    header.appendChild(title);
    header.appendChild(doneBtn);
    this.popup.appendChild(header);
  }
  renderYearView() {
    const startYear = Math.floor(this.currentDate.getFullYear() / 12) * 12;
    this.renderHeader(
      `${startYear} - ${startYear + 11}`,
      () => {
        this.currentDate.setFullYear(startYear - 12);
        this.render();
      },
      () => {
        this.currentDate.setFullYear(startYear + 12);
        this.render();
      }
    );
    const grid = document.createElement("div");
    grid.className = "cozyalert-datepicker-grid year-grid";
    for (let i = 0; i < 12; i++) {
      const yearStr = (startYear + i).toString();
      const cell = document.createElement("div");
      cell.className = "cozyalert-datepicker-day month-year-cell";
      cell.textContent = yearStr;
      if (this.selectedDates[0] && this.selectedDates[0].getFullYear().toString() === yearStr) {
        cell.classList.add("selected");
      }
      cell.onclick = (e) => {
        e.stopPropagation();
        this.currentDate.setFullYear(startYear + i);
        if (this.config.mode === "year") {
          this.selectedDates = [new Date(startYear + i, 0, 1)];
          this.updateInputValue();
          this.close();
        } else {
          this.viewMode = "month";
          this.render();
        }
      };
      grid.appendChild(cell);
    }
    this.popup.appendChild(grid);
  }
  renderMonthView() {
    const year = this.currentDate.getFullYear();
    this.renderHeader(
      year.toString(),
      () => {
        this.currentDate.setFullYear(year - 1);
        this.render();
      },
      () => {
        this.currentDate.setFullYear(year + 1);
        this.render();
      },
      () => {
        if (this.config.mode !== "month") {
          this.viewMode = "year";
          this.render();
        }
      }
    );
    const grid = document.createElement("div");
    grid.className = "cozyalert-datepicker-grid month-grid";
    for (let i = 0; i < 12; i++) {
      const d = new Date(year, i, 1);
      const monthStr = this.formatLocal(d, { month: "short" });
      const cell = document.createElement("div");
      cell.className = "cozyalert-datepicker-day month-year-cell";
      cell.textContent = monthStr;
      if (this.selectedDates[0] && this.selectedDates[0].getMonth() === i && this.selectedDates[0].getFullYear() === year) {
        cell.classList.add("selected");
      }
      cell.onclick = (e) => {
        e.stopPropagation();
        this.currentDate.setMonth(i);
        if (this.config.mode === "month") {
          this.selectedDates = [new Date(year, i, 1)];
          this.updateInputValue();
          this.close();
        } else {
          this.viewMode = "date";
          this.render();
        }
      };
      grid.appendChild(cell);
    }
    this.popup.appendChild(grid);
  }
  renderDateView() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const monthName = this.formatLocal(this.currentDate, { month: "long", year: "numeric" });
    this.renderHeader(
      monthName,
      () => {
        this.currentDate.setMonth(month - 1);
        this.render();
      },
      () => {
        this.currentDate.setMonth(month + 1);
        this.render();
      },
      () => {
        this.viewMode = "month";
        this.render();
      }
    );
    const grid = document.createElement("div");
    grid.className = "cozyalert-datepicker-grid";
    const weekdays = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(2023, 0, 1 + i);
      weekdays.push(this.formatLocal(d, { weekday: "short" }));
    }
    weekdays.forEach((wd) => {
      const el = document.createElement("div");
      el.className = "cozyalert-datepicker-weekday";
      el.textContent = wd;
      grid.appendChild(el);
    });
    const { firstDay, daysInMonth, daysInPrevMonth } = this.getMonthDays(year, month);
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    const todayStr = (/* @__PURE__ */ new Date()).toDateString();
    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement("div");
      cell.className = "cozyalert-datepicker-day";
      let dayDate;
      if (i < firstDay) {
        const d = daysInPrevMonth - firstDay + i + 1;
        cell.textContent = d.toString();
        cell.classList.add("other-month");
        dayDate = new Date(year, month - 1, d);
      } else if (i >= firstDay && i < firstDay + daysInMonth) {
        const d = i - firstDay + 1;
        cell.textContent = d.toString();
        dayDate = new Date(year, month, d);
      } else {
        const d = i - firstDay - daysInMonth + 1;
        cell.textContent = d.toString();
        cell.classList.add("other-month");
        dayDate = new Date(year, month + 1, d);
      }
      if (dayDate.toDateString() === todayStr) {
        cell.classList.add("today");
      }
      if (this.config.mode === "single") {
        if (this.selectedDates[0] && dayDate.toDateString() === this.selectedDates[0].toDateString()) {
          cell.classList.add("selected");
        }
      } else if (this.config.mode === "range") {
        if (this.rangeStart && dayDate.toDateString() === this.rangeStart.toDateString()) {
          cell.classList.add("selected", "range-start");
        }
        if (this.rangeEnd && dayDate.toDateString() === this.rangeEnd.toDateString()) {
          cell.classList.add("selected", "range-end");
        }
        if (this.rangeStart && this.rangeEnd && dayDate > this.rangeStart && dayDate < this.rangeEnd) {
          cell.classList.add("in-range");
        }
      }
      if (this.config.events) {
        const ev = this.config.events.find((e) => new Date(e.date).toDateString() === dayDate.toDateString());
        if (ev) {
          const dot = document.createElement("div");
          dot.className = "cozyalert-event-dot";
          if (ev.color) dot.style.background = ev.color;
          cell.appendChild(dot);
        }
      }
      if (this.isDateDisabled(dayDate)) {
        cell.classList.add("disabled");
      } else {
        cell.onclick = (e) => {
          e.stopPropagation();
          if (this.config.mode === "single") {
            this.selectedDates = [dayDate];
            this.updateInputValue();
            this.close();
          } else if (this.config.mode === "range") {
            if (!this.rangeStart || this.rangeStart && this.rangeEnd) {
              this.rangeStart = dayDate;
              this.rangeEnd = null;
            } else if (dayDate < this.rangeStart) {
              this.rangeStart = dayDate;
            } else {
              this.rangeEnd = dayDate;
              this.updateInputValue();
              this.close();
            }
            this.render();
          }
        };
      }
      grid.appendChild(cell);
    }
    this.popup.appendChild(grid);
  }
};

// src/components/TimePicker.ts
var CozyTimePicker = class {
  input;
  config;
  popup;
  selectedSlot = null;
  currentHour = 10;
  currentMinute = 30;
  currentPeriod = "AM";
  // For clock mode
  clockView = "hours";
  constructor(input, config = {}) {
    var _a;
    this.input = input;
    this.config = {
      format: "12h",
      style: "default",
      ...config
    };
    if (this.input.value) {
      const match = this.input.value.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
      if (match) {
        this.currentHour = parseInt(match[1]);
        this.currentMinute = parseInt(match[2]);
        if (match[3]) this.currentPeriod = match[3].toUpperCase();
      }
    }
    this.popup = document.createElement("div");
    this.popup.className = "cozyalert-datepicker-popup";
    if (this.config.mobileLayout) {
      this.popup.classList.add("mobile-layout");
    }
    (_a = this.input.parentNode) == null ? void 0 : _a.appendChild(this.popup);
    this.initEvents();
  }
  initEvents() {
    this.input.addEventListener("click", (e) => {
      e.stopPropagation();
      this.open();
    });
    document.addEventListener("click", (e) => {
      if (!this.popup.contains(e.target) && e.target !== this.input) {
        this.close();
      }
    });
  }
  open() {
    this.popup.classList.add("active");
    this.render();
  }
  close() {
    this.popup.classList.remove("active");
  }
  updateInputValue() {
    if (this.config.bookingSlots && this.config.bookingSlots.length > 0) {
      this.input.value = this.selectedSlot || "";
    } else {
      const h = this.currentHour.toString().padStart(2, "0");
      const m = this.currentMinute.toString().padStart(2, "0");
      if (this.config.format === "24h") {
        this.input.value = `${h}:${m}`;
      } else {
        this.input.value = `${h}:${m} ${this.currentPeriod}`;
      }
    }
    this.input.dispatchEvent(new Event("input", { bubbles: true }));
  }
  render() {
    this.popup.innerHTML = "";
    if (this.config.mobileLayout) {
      this.renderMobileHeader();
    }
    if (this.config.bookingSlots && this.config.bookingSlots.length > 0) {
      this.renderBookingSlots();
    } else if (this.config.style === "clock") {
      this.renderClockStyle();
    } else if (this.config.style === "scroll") {
      this.renderScrollStyle();
    } else {
      this.renderDefaultStyle();
    }
  }
  renderMobileHeader() {
    const header = document.createElement("div");
    header.className = "cozyalert-mobile-header";
    const cancelBtn = document.createElement("button");
    cancelBtn.className = "cozyalert-mobile-cancel";
    cancelBtn.textContent = "Cancel";
    cancelBtn.onclick = (e) => {
      e.stopPropagation();
      this.close();
    };
    const title = document.createElement("div");
    title.className = "cozyalert-mobile-title";
    title.textContent = "Choose Time";
    const doneBtn = document.createElement("button");
    doneBtn.className = "cozyalert-mobile-done";
    doneBtn.textContent = "Done";
    doneBtn.onclick = (e) => {
      e.stopPropagation();
      this.updateInputValue();
      this.close();
    };
    header.appendChild(cancelBtn);
    header.appendChild(title);
    header.appendChild(doneBtn);
    this.popup.appendChild(header);
  }
  renderBookingSlots() {
    const header = document.createElement("div");
    header.className = "cozyalert-datepicker-header";
    const title = document.createElement("div");
    title.className = "cozyalert-datepicker-month-year";
    title.textContent = "Select Time Slot";
    header.appendChild(title);
    this.popup.appendChild(header);
    const grid = document.createElement("div");
    grid.className = "cozyalert-timepicker-slots";
    this.config.bookingSlots.forEach((slot) => {
      const btn = document.createElement("button");
      btn.className = "cozyalert-timepicker-slot";
      if (this.selectedSlot === slot) btn.classList.add("selected");
      btn.textContent = slot;
      btn.onclick = (e) => {
        e.stopPropagation();
        this.selectedSlot = slot;
        this.updateInputValue();
        this.close();
      };
      grid.appendChild(btn);
    });
    this.popup.appendChild(grid);
  }
  renderDefaultStyle() {
    const container = document.createElement("div");
    container.className = "cozyalert-time-default-container";
    const createSpinner = (val, max, min, onChange) => {
      const wrap = document.createElement("div");
      wrap.className = "cozyalert-time-spinner";
      const up = document.createElement("button");
      up.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>';
      up.onclick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        let n = val + 1;
        if (n > max) n = min;
        onChange(n);
      };
      const valDisplay = document.createElement("div");
      valDisplay.className = "cozyalert-time-spinner-val";
      valDisplay.textContent = val.toString().padStart(2, "0");
      const down = document.createElement("button");
      down.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>';
      down.onclick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        let n = val - 1;
        if (n < min) n = max;
        onChange(n);
      };
      wrap.appendChild(up);
      wrap.appendChild(valDisplay);
      wrap.appendChild(down);
      return wrap;
    };
    container.appendChild(createSpinner(this.currentHour, this.config.format === "24h" ? 23 : 12, this.config.format === "24h" ? 0 : 1, (v) => {
      this.currentHour = v;
      this.updateInputValue();
      this.render();
    }));
    const sep = document.createElement("div");
    sep.className = "cozyalert-time-separator";
    sep.textContent = ":";
    container.appendChild(sep);
    container.appendChild(createSpinner(this.currentMinute, 59, 0, (v) => {
      this.currentMinute = v;
      this.updateInputValue();
      this.render();
    }));
    if (this.config.format !== "24h") {
      const periodWrap = document.createElement("div");
      periodWrap.className = "cozyalert-time-period-wrap";
      const am = document.createElement("button");
      am.textContent = "AM";
      am.className = this.currentPeriod === "AM" ? "active" : "";
      am.onclick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.currentPeriod = "AM";
        this.updateInputValue();
        this.render();
      };
      const pm = document.createElement("button");
      pm.textContent = "PM";
      pm.className = this.currentPeriod === "PM" ? "active" : "";
      pm.onclick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.currentPeriod = "PM";
        this.updateInputValue();
        this.render();
      };
      periodWrap.appendChild(am);
      periodWrap.appendChild(pm);
      container.appendChild(periodWrap);
    }
    this.popup.appendChild(container);
  }
  renderClockStyle() {
    const header = document.createElement("div");
    header.className = "cozyalert-clock-header";
    const hBtn = document.createElement("span");
    hBtn.textContent = this.currentHour.toString().padStart(2, "0");
    hBtn.className = this.clockView === "hours" ? "active" : "";
    hBtn.onclick = (e) => {
      e.stopPropagation();
      this.clockView = "hours";
      this.render();
    };
    const mBtn = document.createElement("span");
    mBtn.textContent = this.currentMinute.toString().padStart(2, "0");
    mBtn.className = this.clockView === "minutes" ? "active" : "";
    mBtn.onclick = (e) => {
      e.stopPropagation();
      this.clockView = "minutes";
      this.render();
    };
    header.appendChild(hBtn);
    header.appendChild(document.createTextNode(" : "));
    header.appendChild(mBtn);
    if (this.config.format !== "24h") {
      const pBtn = document.createElement("span");
      pBtn.textContent = " " + this.currentPeriod;
      pBtn.className = "period-toggle";
      pBtn.onclick = (e) => {
        e.stopPropagation();
        this.currentPeriod = this.currentPeriod === "AM" ? "PM" : "AM";
        this.updateInputValue();
        this.render();
      };
      header.appendChild(pBtn);
    }
    this.popup.appendChild(header);
    const clockWrap = document.createElement("div");
    clockWrap.className = "cozyalert-clock-dial";
    const radius = 100;
    const center = 130;
    const createNode = (val, angleDeg, isActive, isMinute) => {
      const node = document.createElement("div");
      node.className = "cozyalert-clock-node" + (isActive ? " active" : "");
      node.textContent = isMinute ? val.toString().padStart(2, "0") : val.toString();
      const rad = (angleDeg - 90) * (Math.PI / 180);
      const x = center + radius * Math.cos(rad);
      const y = center + radius * Math.sin(rad);
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      node.onclick = (e) => {
        e.stopPropagation();
        if (this.clockView === "hours") {
          this.currentHour = val;
          this.clockView = "minutes";
          this.updateInputValue();
          this.render();
        } else {
          this.currentMinute = val;
          this.updateInputValue();
          this.close();
        }
      };
      if (isActive) {
        const line = document.createElement("div");
        line.className = "cozyalert-clock-hand";
        line.style.transform = `rotate(${angleDeg - 90}deg)`;
        clockWrap.appendChild(line);
      }
      clockWrap.appendChild(node);
    };
    if (this.clockView === "hours") {
      const max = this.config.format === "24h" ? 24 : 12;
      for (let i = 1; i <= max; i++) {
        if (i > 12 && this.config.format === "24h") continue;
        const angle = i * 30;
        createNode(i, angle, this.currentHour === i || this.currentHour === 0 && i === 12, false);
      }
    } else {
      for (let i = 0; i < 60; i += 5) {
        const angle = i * 6;
        createNode(i, angle, this.currentMinute === i, true);
      }
    }
    const centerDot = document.createElement("div");
    centerDot.className = "cozyalert-clock-center";
    clockWrap.appendChild(centerDot);
    this.popup.appendChild(clockWrap);
  }
  renderScrollStyle() {
    const container = document.createElement("div");
    container.className = "cozyalert-time-scroll-container";
    const overlay = document.createElement("div");
    overlay.className = "cozyalert-time-scroll-overlay";
    container.appendChild(overlay);
    const createCol = (items, currentVal, onSelect) => {
      const col = document.createElement("div");
      col.className = "cozyalert-scroll-col";
      const updateActive = () => {
        var _a;
        const scrollTop = col.scrollTop;
        const index = Math.round(scrollTop / 40);
        if (items[index] !== void 0) {
          Array.from(col.children).forEach((c) => c.classList.remove("active"));
          (_a = col.children[index]) == null ? void 0 : _a.classList.add("active");
          onSelect(items[index]);
        }
      };
      let isScrolling;
      col.addEventListener("scroll", () => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
          updateActive();
          if (!this.config.mobileLayout) this.updateInputValue();
        }, 100);
      });
      items.forEach((item, i) => {
        const div = document.createElement("div");
        div.className = "cozyalert-scroll-item";
        if (item === currentVal) div.classList.add("active");
        div.textContent = typeof item === "number" ? item.toString().padStart(2, "0") : item;
        div.onclick = (e) => {
          e.stopPropagation();
          col.scrollTo({ top: i * 40, behavior: "smooth" });
        };
        col.appendChild(div);
      });
      setTimeout(() => {
        const initIndex = items.indexOf(currentVal);
        if (initIndex > -1) col.scrollTop = initIndex * 40;
      }, 10);
      return col;
    };
    const maxH = this.config.format === "24h" ? 23 : 12;
    const minH = this.config.format === "24h" ? 0 : 1;
    const hours = Array.from({ length: maxH - minH + 1 }, (_, i) => i + minH);
    const minutes = Array.from({ length: 60 }, (_, i) => i);
    container.appendChild(createCol(hours, this.currentHour, (v) => this.currentHour = v));
    container.appendChild(createCol(minutes, this.currentMinute, (v) => this.currentMinute = v));
    if (this.config.format !== "24h") {
      container.appendChild(createCol(["AM", "PM"], this.currentPeriod, (v) => this.currentPeriod = v));
    }
    this.popup.appendChild(container);
  }
};

// src/core/dom.ts
var activeAlerts = [];
var closeAllAlerts = () => {
  [...activeAlerts].forEach((closeFn) => closeFn());
};
var createAlertDom = (options, resolve) => {
  const theme = options.theme || "auto";
  let overlay = null;
  const popup = document.createElement("div");
  popup.className = "cozyalert-popup";
  popup.classList.add(`cozyalert-theme-${theme}`);
  if (options.width) {
    popup.style.maxWidth = options.width;
  }
  if (options.size) {
    popup.classList.add(`cozyalert-size-${options.size}`);
  }
  if (options.toast) {
    popup.classList.add("cozyalert-toast-popup");
    const position = options.position || "top-right";
    const containerId = `cozyalert-toast-container-${position}`;
    let container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement("div");
      container.id = containerId;
      container.className = `cozyalert-toast-container toast-${position}`;
      document.body.appendChild(container);
    }
    container.appendChild(popup);
  } else {
    overlay = document.createElement("div");
    overlay.className = "cozyalert-overlay";
    overlay.classList.add(`cozyalert-theme-${theme}`);
    if (options.offcanvas) {
      overlay.classList.add("cozyalert-offcanvas-overlay");
      const position = options.position || "right";
      overlay.classList.add(`position-${position}`);
      popup.classList.add("cozyalert-offcanvas-popup");
      popup.classList.add(`position-${position}`);
    } else {
      if (options.showCloseButton) {
        popup.classList.add("cozyalert-modal-popup");
      }
    }
    if (typeof options.customClass === "object" && options.customClass.container) {
      overlay.classList.add(options.customClass.container);
    } else if (typeof options.customClass === "string") {
      overlay.classList.add(options.customClass);
    }
    if (typeof options.customClass === "object" && options.customClass.popup) {
      popup.classList.add(options.customClass.popup);
    }
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  }
  let isClosed = false;
  let timerTimeout;
  const closeAlert = (result) => {
    if (isClosed) return;
    isClosed = true;
    if (timerTimeout) clearTimeout(timerTimeout);
    const idx = activeAlerts.indexOf(forceClose);
    if (idx > -1) activeAlerts.splice(idx, 1);
    document.removeEventListener("keydown", handleKeydown);
    if (overlay) {
      overlay.removeEventListener("click", handleOutsideClick);
    }
    if (options.toast) {
      popup.classList.add("cozyalert-toast-out");
      setTimeout(() => {
        if (popup.parentNode) {
          const parent = popup.parentNode;
          parent.removeChild(popup);
          if (parent.childNodes.length === 0 && parent.parentNode) {
            parent.parentNode.removeChild(parent);
          }
        }
        resolve(result);
      }, 300);
    } else if (overlay) {
      overlay.classList.remove("cozyalert-show");
      setTimeout(() => {
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
        resolve(result);
      }, 400);
    }
  };
  const handleKeydown = (e) => {
    if (e.key === "Escape" && options.allowEscapeKey !== false && !options.toast) {
      closeAlert({ isConfirmed: false, isDenied: false, isDismissed: true });
    }
  };
  const handleOutsideClick = (e) => {
    if (overlay && e.target === overlay && options.allowOutsideClick !== false && !options.toast) {
      closeAlert({ isConfirmed: false, isDenied: false, isDismissed: true });
    }
  };
  if (options.showCloseButton) {
    const closeBtn = document.createElement("button");
    closeBtn.className = "cozyalert-close-btn";
    closeBtn.innerHTML = getCloseSvg();
    if (typeof options.customClass === "object" && options.customClass.closeButton) {
      closeBtn.classList.add(options.customClass.closeButton);
    }
    closeBtn.onclick = () => closeAlert({ isConfirmed: false, isDenied: false, isDismissed: true });
    popup.appendChild(closeBtn);
  }
  if (options.progressSteps && options.progressSteps.length > 0) {
    const stepsContainer = document.createElement("div");
    stepsContainer.className = "cozyalert-progress-steps";
    const currentStepIndex = options.currentProgressStep !== void 0 ? options.currentProgressStep : 0;
    options.progressSteps.forEach((step, index) => {
      const stepEl = document.createElement("div");
      stepEl.className = "cozyalert-progress-step";
      stepEl.innerText = step;
      if (index === currentStepIndex) stepEl.classList.add("active");
      else if (index < currentStepIndex) stepEl.classList.add("completed");
      stepsContainer.appendChild(stepEl);
      if (index < options.progressSteps.length - 1) {
        const line = document.createElement("div");
        line.className = "cozyalert-progress-line";
        if (index < currentStepIndex) line.classList.add("completed");
        stepsContainer.appendChild(line);
      }
    });
    popup.appendChild(stepsContainer);
  }
  const type = options.icon || options.type;
  if (type && options.showIcon !== false) {
    const iconContainer = document.createElement("div");
    iconContainer.className = `cozyalert-icon-container cozyalert-icon-${type}`;
    if (typeof options.customClass === "object" && options.customClass.icon) {
      iconContainer.classList.add(options.customClass.icon);
    }
    iconContainer.innerHTML = getIconSvg(type);
    popup.appendChild(iconContainer);
  }
  if (options.title) {
    const titleEl = document.createElement("h3");
    titleEl.className = "cozyalert-title";
    if (typeof options.customClass === "object" && options.customClass.title) {
      titleEl.classList.add(options.customClass.title);
    }
    titleEl.innerText = options.title;
    popup.appendChild(titleEl);
  }
  if (options.text) {
    const textEl = document.createElement("p");
    textEl.className = "cozyalert-content";
    if (typeof options.customClass === "object" && options.customClass.htmlContainer) {
      textEl.classList.add(options.customClass.htmlContainer);
    }
    textEl.innerText = options.text;
    popup.appendChild(textEl);
  }
  if (options.html) {
    const htmlEl = document.createElement("div");
    htmlEl.className = "cozyalert-content cozyalert-html";
    if (typeof options.html === "string") {
      htmlEl.innerHTML = options.html;
    } else if (options.html instanceof HTMLElement) {
      htmlEl.appendChild(options.html);
    }
    popup.appendChild(htmlEl);
  }
  const formValues = {};
  const formValidators = [];
  if (options.fields && options.fields.length > 0) {
    const formContainer = document.createElement("div");
    formContainer.className = "cozyalert-form-container";
    if (typeof options.customClass === "object" && options.customClass.formContainer) {
      formContainer.classList.add(options.customClass.formContainer);
    }
    options.fields.forEach((field) => {
      if (field.defaultValue !== void 0) {
        formValues[field.id] = field.defaultValue;
      } else if (field.type === "checkbox") {
        formValues[field.id] = false;
      } else if (field.type === "file") {
        formValues[field.id] = null;
      } else {
        formValues[field.id] = "";
      }
      const group = document.createElement("div");
      group.className = "cozyalert-form-group";
      if (field.className) group.classList.add(field.className);
      let inputEl = null;
      if (field.type === "checkbox") {
        const wrapper = document.createElement("div");
        wrapper.className = "cozyalert-checkbox-wrapper";
        const input = document.createElement("input");
        input.type = "checkbox";
        input.className = "cozyalert-checkbox";
        input.id = `cozyalert-field-${field.id}`;
        input.checked = !!field.defaultValue;
        input.onchange = (e) => {
          formValues[field.id] = e.target.checked;
          clearError();
        };
        inputEl = input;
        wrapper.appendChild(input);
        if (field.label) {
          const label = document.createElement("label");
          label.className = "cozyalert-label";
          label.htmlFor = input.id;
          label.innerText = field.label;
          label.style.cursor = "pointer";
          wrapper.appendChild(label);
        }
        group.appendChild(wrapper);
      } else if (field.type === "file") {
        if (field.label) {
          const label = document.createElement("label");
          label.className = "cozyalert-label";
          label.innerText = field.label;
          group.appendChild(label);
        }
        const dropzone = document.createElement("div");
        dropzone.className = "cozyalert-file-dropzone";
        dropzone.innerHTML = `
          ${getCloudUploadSvg()}
          <span class="cozyalert-file-name">Click to select or drag and drop</span>
          <small>${field.accept ? `Accepts ${field.accept}` : "Any file"}</small>
        `;
        const hiddenInput = document.createElement("input");
        hiddenInput.type = "file";
        hiddenInput.style.display = "none";
        if (field.accept) hiddenInput.accept = field.accept;
        const handleFiles = (files) => {
          if (files && files.length > 0) {
            formValues[field.id] = files[0];
            dropzone.classList.add("has-file");
            const nameSpan = dropzone.querySelector(".cozyalert-file-name");
            if (nameSpan) nameSpan.innerHTML = files[0].name;
            clearError();
          }
        };
        hiddenInput.onchange = (e) => handleFiles(e.target.files);
        dropzone.onclick = () => hiddenInput.click();
        dropzone.ondragover = (e) => {
          e.preventDefault();
          dropzone.classList.add("dragover");
        };
        dropzone.ondragleave = (e) => {
          e.preventDefault();
          dropzone.classList.remove("dragover");
        };
        dropzone.ondrop = (e) => {
          var _a;
          e.preventDefault();
          dropzone.classList.remove("dragover");
          handleFiles(((_a = e.dataTransfer) == null ? void 0 : _a.files) || null);
        };
        dropzone.appendChild(hiddenInput);
        inputEl = dropzone;
        group.appendChild(dropzone);
      } else {
        if (field.label) {
          const label = document.createElement("label");
          label.className = "cozyalert-label";
          label.htmlFor = `cozyalert-field-${field.id}`;
          label.innerText = field.label;
          group.appendChild(label);
        }
        if (field.type === "select") {
          const select = document.createElement("select");
          select.className = "cozyalert-select";
          select.id = `cozyalert-field-${field.id}`;
          if (field.options) {
            field.options.forEach((opt) => {
              const option = document.createElement("option");
              option.value = opt.value;
              option.innerText = opt.label;
              if (field.defaultValue === opt.value) {
                option.selected = true;
              }
              select.appendChild(option);
            });
          }
          select.onchange = (e) => {
            formValues[field.id] = e.target.value;
            clearError();
          };
          inputEl = select;
          group.appendChild(select);
        } else if (field.type === "textarea") {
          const textarea = document.createElement("textarea");
          textarea.className = "cozyalert-textarea";
          textarea.id = `cozyalert-field-${field.id}`;
          textarea.placeholder = field.placeholder || "";
          textarea.value = field.defaultValue || "";
          textarea.oninput = (e) => {
            formValues[field.id] = e.target.value;
            clearError();
          };
          inputEl = textarea;
          group.appendChild(textarea);
        } else {
          const input = document.createElement("input");
          input.className = "cozyalert-input";
          input.type = field.type;
          input.id = `cozyalert-field-${field.id}`;
          input.placeholder = field.placeholder || "";
          input.value = field.defaultValue || "";
          if (["date", "datetime", "daterange", "month", "year"].includes(field.type)) {
            input.type = "text";
            input.readOnly = true;
            input.placeholder = field.placeholder || "Select Date";
            input.style.cursor = "pointer";
            input.style.paddingRight = "2.5rem";
          } else if (field.type === "time") {
            input.type = "text";
            input.readOnly = true;
            input.placeholder = field.placeholder || "Select Time";
            input.style.cursor = "pointer";
            input.style.paddingRight = "2.5rem";
          }
          input.oninput = (e) => {
            formValues[field.id] = e.target.value;
            clearError();
          };
          inputEl = input;
          if (["date", "datetime", "daterange", "month", "year"].includes(field.type)) {
            const wrapper = document.createElement("div");
            wrapper.className = "cozyalert-input-wrapper";
            const icon = document.createElement("div");
            icon.className = "cozyalert-picker-icon";
            icon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>';
            wrapper.appendChild(input);
            wrapper.appendChild(icon);
            group.appendChild(wrapper);
            const mode = field.type === "daterange" ? "range" : ["month", "year"].includes(field.type) ? field.type : "single";
            const dp = new CozyDatePicker(input, field.datePickerConfig || { mode });
          } else if (field.type === "time") {
            const wrapper = document.createElement("div");
            wrapper.className = "cozyalert-input-wrapper";
            const icon = document.createElement("div");
            icon.className = "cozyalert-picker-icon";
            icon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>';
            wrapper.appendChild(input);
            wrapper.appendChild(icon);
            group.appendChild(wrapper);
            const tp = new CozyTimePicker(input, field.timePickerConfig || {});
          } else {
            group.appendChild(input);
          }
        }
      }
      const errorText = document.createElement("span");
      errorText.className = "cozyalert-error-text";
      errorText.style.display = "none";
      group.appendChild(errorText);
      const clearError = () => {
        if (inputEl) inputEl.classList.remove("has-error");
        errorText.style.display = "none";
      };
      const validate = () => {
        const val = formValues[field.id];
        const valStr = val !== null && val !== void 0 ? val.toString().trim() : "";
        if (field.required && valStr === "") {
          if (inputEl) inputEl.classList.add("has-error");
          errorText.innerText = `${field.label || "This field"} is required`;
          errorText.style.display = "block";
          return false;
        }
        if (field.pattern && valStr !== "") {
          const regex = typeof field.pattern === "string" ? new RegExp(field.pattern) : field.pattern;
          if (!regex.test(valStr)) {
            if (inputEl) inputEl.classList.add("has-error");
            errorText.innerText = field.validationMessage || `Invalid format`;
            errorText.style.display = "block";
            return false;
          }
        }
        return true;
      };
      formValidators.push(validate);
      formContainer.appendChild(group);
    });
    popup.appendChild(formContainer);
  }
  const actionsContainer = document.createElement("div");
  actionsContainer.className = "cozyalert-actions";
  if (typeof options.customClass === "object" && options.customClass.actions) {
    actionsContainer.classList.add(options.customClass.actions);
  }
  document.addEventListener("keydown", handleKeydown);
  if (overlay) {
    overlay.addEventListener("click", handleOutsideClick);
  }
  if (options.showCancelButton) {
    const cancelBtn = document.createElement("button");
    cancelBtn.className = "cozyalert-btn cozyalert-btn-cancel";
    if (typeof options.customClass === "object" && options.customClass.cancelButton) {
      cancelBtn.classList.add(options.customClass.cancelButton);
    }
    cancelBtn.innerText = options.cancelButtonText || "Cancel";
    if (options.cancelButtonColor) {
      cancelBtn.style.backgroundColor = options.cancelButtonColor;
      cancelBtn.style.color = "#fff";
    }
    cancelBtn.onclick = () => closeAlert({ isConfirmed: false, isDenied: false, isDismissed: true });
    actionsContainer.appendChild(cancelBtn);
  }
  if (options.showConfirmButton !== false && !(options.toast && !options.showConfirmButton)) {
    const confirmBtn = document.createElement("button");
    confirmBtn.className = `cozyalert-btn cozyalert-btn-confirm ${type || ""}`;
    if (typeof options.customClass === "object" && options.customClass.confirmButton) {
      confirmBtn.classList.add(options.customClass.confirmButton);
    }
    confirmBtn.innerText = options.confirmButtonText || "Okay";
    if (options.confirmButtonColor) {
      confirmBtn.style.backgroundColor = options.confirmButtonColor;
    }
    confirmBtn.onclick = async () => {
      let isValid = true;
      formValidators.forEach((validate) => {
        if (!validate()) isValid = false;
      });
      if (!isValid) return;
      if (options.preConfirm) {
        confirmBtn.disabled = true;
        const originalText = confirmBtn.innerText;
        confirmBtn.innerHTML = `${getLoaderSvg()} ${originalText}`;
        try {
          const preConfirmResult = await options.preConfirm(formValues);
          if (preConfirmResult === false) {
            confirmBtn.disabled = false;
            confirmBtn.innerText = originalText;
            return;
          }
        } catch (error) {
          console.error("CozyAlert preConfirm error:", error);
          confirmBtn.disabled = false;
          confirmBtn.innerText = originalText;
          return;
        }
      }
      closeAlert({
        isConfirmed: true,
        isDenied: false,
        isDismissed: false,
        value: options.fields ? formValues : void 0
      });
    };
    actionsContainer.appendChild(confirmBtn);
  }
  if (actionsContainer.childNodes.length > 0) {
    popup.appendChild(actionsContainer);
  }
  if (options.timer) {
    timerTimeout = setTimeout(() => {
      closeAlert({ isConfirmed: false, isDenied: false, isDismissed: true });
    }, options.timer);
  }
  if (!options.toast && overlay) {
    void overlay.offsetWidth;
    overlay.classList.add("cozyalert-show");
  }
  if (!options.toast && options.fields && options.fields.length > 0) {
    const firstInput = popup.querySelector(".cozyalert-input, .cozyalert-textarea, .cozyalert-select");
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 10);
    }
  }
  const forceClose = () => closeAlert({ isConfirmed: false, isDenied: false, isDismissed: true });
  activeAlerts.push(forceClose);
  return { closeAlert };
};

// src/core/Alert.ts
var CozyAlert = class _CozyAlert {
  static closeAll() {
    if (typeof window !== "undefined" && typeof window.document !== "undefined") {
      closeAllAlerts();
    }
  }
  static fire(options, text, icon) {
    if (typeof window === "undefined" || typeof window.document === "undefined") {
      return Promise.resolve({ isConfirmed: false, isDenied: false, isDismissed: true });
    }
    injectStyles();
    let parsedOptions;
    if (typeof options === "string") {
      parsedOptions = {
        title: options,
        text,
        icon
      };
    } else {
      parsedOptions = options;
    }
    return new Promise((resolve) => {
      createAlertDom(parsedOptions, resolve);
    });
  }
  static success(title, text) {
    return _CozyAlert.fire({
      title,
      text,
      type: "success",
      icon: "success"
    });
  }
  static error(title, text) {
    return _CozyAlert.fire({
      title,
      text,
      type: "error",
      icon: "error"
    });
  }
  static warning(title, text) {
    return _CozyAlert.fire({
      title,
      text,
      type: "warning",
      icon: "warning"
    });
  }
  static info(title, text) {
    return _CozyAlert.fire({
      title,
      text,
      type: "info",
      icon: "info"
    });
  }
  static confirm(title, text, confirmButtonText = "Confirm") {
    return _CozyAlert.fire({
      title,
      text,
      type: "question",
      icon: "question",
      showCancelButton: true,
      confirmButtonText
    });
  }
  static toast(options, type, position) {
    if (typeof options === "string") {
      return _CozyAlert.fire({
        title: options,
        icon: type,
        toast: true,
        position: position || "top-right",
        showConfirmButton: false,
        timer: 3e3
      });
    }
    return _CozyAlert.fire({
      ...options,
      toast: true,
      position: options.position || "top-right",
      showConfirmButton: options.showConfirmButton ?? false,
      timer: options.timer ?? 3e3
    });
  }
  static modal(options) {
    return _CozyAlert.fire({
      showCloseButton: true,
      showIcon: false,
      size: "lg",
      // Use size instead of width
      ...options
    });
  }
  static offcanvas(options) {
    return _CozyAlert.fire({
      showCloseButton: true,
      showIcon: false,
      offcanvas: true,
      position: options.position || "right",
      ...options
    });
  }
  static async queue(steps) {
    const totalSteps = steps.length;
    const progressSteps = steps.map((_, i) => (i + 1).toString());
    const collectedValues = [];
    for (let i = 0; i < totalSteps; i++) {
      const stepOptions = steps[i];
      const result = await _CozyAlert.fire({
        ...stepOptions,
        progressSteps,
        currentProgressStep: i,
        showCancelButton: true,
        confirmButtonText: i === totalSteps - 1 ? "Finish" : "Next",
        cancelButtonText: "Cancel"
      });
      if (result.isDismissed || result.isDenied) {
        return { isCompleted: false, values: collectedValues };
      }
      collectedValues.push(result.value);
    }
    return { isCompleted: true, values: collectedValues };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CozyAlert
});
