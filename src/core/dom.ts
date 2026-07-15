import { AlertOptions, AlertResult, FormField } from './types';
import { getIconSvg, getCloudUploadSvg, getLoaderSvg, getCloseSvg } from './icons';
import { CozyDatePicker } from '../components/DatePicker';
import { CozyTimePicker } from '../components/TimePicker';

// Keep track of toast containers by position
const toastContainers: Record<string, HTMLElement> = {};

// Keep track of all active close functions for closeAll()
const activeAlerts: Array<() => void> = [];

export const closeAllAlerts = () => {
  [...activeAlerts].forEach(closeFn => closeFn());
};

export const createAlertDom = (
  options: AlertOptions,
  resolve: (value: AlertResult | PromiseLike<AlertResult>) => void
) => {
  const theme = options.theme || 'auto';
  
  // Variables to hold the elements
  let overlay: HTMLElement | null = null;
  const popup = document.createElement('div');
  popup.className = 'cozyalert-popup';
  popup.classList.add(`cozyalert-theme-${theme}`); // Apply theme to popup too for toasts without overlay

  if (options.width) {
    popup.style.maxWidth = options.width;
  }

  if (options.size) {
    popup.classList.add(`cozyalert-size-${options.size}`);
  }

  if (options.toast) {
    popup.classList.add('cozyalert-toast-popup');
    
    // Find or create the specific container for this toast position
    const position = options.position || 'top-right';
    const containerId = `cozyalert-toast-container-${position}`;
    
    let container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement('div');
      container.id = containerId;
      container.className = `cozyalert-toast-container toast-${position}`;
      document.body.appendChild(container);
    }
    
    // For toasts, we don't use the overlay, we append popup straight to container
    container.appendChild(popup);

  } else {
    // Regular Modal or Offcanvas logic
    overlay = document.createElement('div');
    overlay.className = 'cozyalert-overlay';
    overlay.classList.add(`cozyalert-theme-${theme}`);

    if (options.offcanvas) {
      overlay.classList.add('cozyalert-offcanvas-overlay');
      const position = options.position || 'right';
      overlay.classList.add(`position-${position}`);
      
      popup.classList.add('cozyalert-offcanvas-popup');
      popup.classList.add(`position-${position}`);
    } else {
      // It's a standard modal/alert
      // If width is specified or it's not a standard alert, it might be a generic modal
      // We can apply a generic modal modifier class if needed
      if (options.showCloseButton) {
        popup.classList.add('cozyalert-modal-popup'); // Applies left-alignment styling
      }
    }

    if (typeof options.customClass === 'object' && options.customClass.container) {
      overlay.classList.add(options.customClass.container);
    } else if (typeof options.customClass === 'string') {
      overlay.classList.add(options.customClass);
    }

    if (typeof options.customClass === 'object' && options.customClass.popup) {
      popup.classList.add(options.customClass.popup);
    }

    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  }

  // Helpers for closing
  let isClosed = false;
  let timerTimeout: ReturnType<typeof setTimeout>;

  const closeAlert = (result: AlertResult) => {
    if (isClosed) return;
    isClosed = true;
    if (timerTimeout) clearTimeout(timerTimeout);

    // Remove from active alerts array
    const idx = activeAlerts.indexOf(forceClose);
    if (idx > -1) activeAlerts.splice(idx, 1);

    // Cleanup listeners
    document.removeEventListener('keydown', handleKeydown);
    if (overlay) {
      overlay.removeEventListener('click', handleOutsideClick);
    }

    if (options.toast) {
      // Toast exit animation
      popup.classList.add('cozyalert-toast-out');
      setTimeout(() => {
        if (popup.parentNode) {
          const parent = popup.parentNode;
          parent.removeChild(popup);
          
          // Cleanup empty containers
          if (parent.childNodes.length === 0 && parent.parentNode) {
            parent.parentNode.removeChild(parent);
          }
        }
        resolve(result);
      }, 300); // Matches CSS animation duration
    } else if (overlay) {
      // Modal / Offcanvas exit animation
      overlay.classList.remove('cozyalert-show');
      setTimeout(() => {
        if (overlay!.parentNode) {
          overlay!.parentNode.removeChild(overlay!);
        }
        resolve(result);
      }, 400); // Matches CSS transition duration
    }
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && options.allowEscapeKey !== false && !options.toast) {
      closeAlert({ isConfirmed: false, isDenied: false, isDismissed: true });
    }
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (overlay && e.target === overlay && options.allowOutsideClick !== false && !options.toast) {
      closeAlert({ isConfirmed: false, isDenied: false, isDismissed: true });
    }
  };

  // Close Button
  if (options.showCloseButton) {
    const closeBtn = document.createElement('button');
    closeBtn.className = 'cozyalert-close-btn';
    closeBtn.innerHTML = getCloseSvg();
    if (typeof options.customClass === 'object' && options.customClass.closeButton) {
      closeBtn.classList.add(options.customClass.closeButton);
    }
    closeBtn.onclick = () => closeAlert({ isConfirmed: false, isDenied: false, isDismissed: true });
    popup.appendChild(closeBtn);
  }

  // Queue Progress Steps
  if (options.progressSteps && options.progressSteps.length > 0) {
    const stepsContainer = document.createElement('div');
    stepsContainer.className = 'cozyalert-progress-steps';
    const currentStepIndex = options.currentProgressStep !== undefined ? options.currentProgressStep : 0;

    options.progressSteps.forEach((step, index) => {
      const stepEl = document.createElement('div');
      stepEl.className = 'cozyalert-progress-step';
      stepEl.innerText = step;

      if (index === currentStepIndex) stepEl.classList.add('active');
      else if (index < currentStepIndex) stepEl.classList.add('completed');

      stepsContainer.appendChild(stepEl);

      // Add connecting line if not the last item
      if (index < options.progressSteps!.length - 1) {
        const line = document.createElement('div');
        line.className = 'cozyalert-progress-line';
        if (index < currentStepIndex) line.classList.add('completed');
        stepsContainer.appendChild(line);
      }
    });
    popup.appendChild(stepsContainer);
  }

  // Icon
  const type = options.icon || options.type;
  if (type && options.showIcon !== false) {
    const iconContainer = document.createElement('div');
    iconContainer.className = `cozyalert-icon-container cozyalert-icon-${type}`;
    if (typeof options.customClass === 'object' && options.customClass.icon) {
      iconContainer.classList.add(options.customClass.icon);
    }
    iconContainer.innerHTML = getIconSvg(type);
    popup.appendChild(iconContainer);
  }

  // Title
  if (options.title) {
    const titleEl = document.createElement('h3');
    titleEl.className = 'cozyalert-title';
    if (typeof options.customClass === 'object' && options.customClass.title) {
      titleEl.classList.add(options.customClass.title);
    }
    titleEl.innerText = options.title;
    popup.appendChild(titleEl);
  }

  // Text
  if (options.text) {
    const textEl = document.createElement('p');
    textEl.className = 'cozyalert-content';
    if (typeof options.customClass === 'object' && options.customClass.htmlContainer) {
      textEl.classList.add(options.customClass.htmlContainer);
    }
    textEl.innerText = options.text;
    popup.appendChild(textEl);
  }

  // HTML content
  if (options.html) {
    const htmlEl = document.createElement('div');
    htmlEl.className = 'cozyalert-content cozyalert-html';
    if (typeof options.html === 'string') {
      htmlEl.innerHTML = options.html;
    } else if (options.html instanceof HTMLElement) {
      htmlEl.appendChild(options.html);
    }
    popup.appendChild(htmlEl);
  }

  // State to hold form values
  const formValues: Record<string, any> = {};
  const formValidators: (() => boolean)[] = [];

  // Dynamic Fields
  if (options.fields && options.fields.length > 0) {
    const formContainer = document.createElement('div');
    formContainer.className = 'cozyalert-form-container';
    if (typeof options.customClass === 'object' && options.customClass.formContainer) {
      formContainer.classList.add(options.customClass.formContainer);
    }

    options.fields.forEach((field: FormField) => {
      if (field.defaultValue !== undefined) {
        formValues[field.id] = field.defaultValue;
      } else if (field.type === 'checkbox') {
        formValues[field.id] = false;
      } else if (field.type === 'file') {
        formValues[field.id] = null;
      } else {
        formValues[field.id] = '';
      }

      const group = document.createElement('div');
      group.className = 'cozyalert-form-group';
      if (field.className) group.classList.add(field.className);

      let inputEl: HTMLElement | null = null;
      
      if (field.type === 'checkbox') {
        const wrapper = document.createElement('div');
        wrapper.className = 'cozyalert-checkbox-wrapper';

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'cozyalert-checkbox';
        input.id = `cozyalert-field-${field.id}`;
        input.checked = !!field.defaultValue;
        input.onchange = (e) => {
          formValues[field.id] = (e.target as HTMLInputElement).checked;
          clearError();
        };
        inputEl = input;

        wrapper.appendChild(input);

        if (field.label) {
          const label = document.createElement('label');
          label.className = 'cozyalert-label';
          label.htmlFor = input.id;
          label.innerText = field.label;
          label.style.cursor = 'pointer';
          wrapper.appendChild(label);
        }
        group.appendChild(wrapper);

      } else if (field.type === 'file') {
        if (field.label) {
          const label = document.createElement('label');
          label.className = 'cozyalert-label';
          label.innerText = field.label;
          group.appendChild(label);
        }

        const dropzone = document.createElement('div');
        dropzone.className = 'cozyalert-file-dropzone';
        dropzone.innerHTML = `
          ${getCloudUploadSvg()}
          <span class="cozyalert-file-name">Click to select or drag and drop</span>
          <small>${field.accept ? `Accepts ${field.accept}` : 'Any file'}</small>
        `;

        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'file';
        hiddenInput.style.display = 'none';
        if (field.accept) hiddenInput.accept = field.accept;

        const handleFiles = (files: FileList | null) => {
          if (files && files.length > 0) {
            formValues[field.id] = files[0];
            dropzone.classList.add('has-file');
            const nameSpan = dropzone.querySelector('.cozyalert-file-name');
            if (nameSpan) nameSpan.innerHTML = files[0].name;
            clearError();
          }
        };

        hiddenInput.onchange = (e) => handleFiles((e.target as HTMLInputElement).files);
        dropzone.onclick = () => hiddenInput.click();

        dropzone.ondragover = (e) => { e.preventDefault(); dropzone.classList.add('dragover'); };
        dropzone.ondragleave = (e) => { e.preventDefault(); dropzone.classList.remove('dragover'); };
        dropzone.ondrop = (e) => {
          e.preventDefault();
          dropzone.classList.remove('dragover');
          handleFiles(e.dataTransfer?.files || null);
        };

        dropzone.appendChild(hiddenInput);
        inputEl = dropzone;
        group.appendChild(dropzone);
      } else {
        if (field.label) {
          const label = document.createElement('label');
          label.className = 'cozyalert-label';
          label.htmlFor = `cozyalert-field-${field.id}`;
          label.innerText = field.label;
          group.appendChild(label);
        }

        if (field.type === 'select') {
          const select = document.createElement('select');
          select.className = 'cozyalert-select';
          select.id = `cozyalert-field-${field.id}`;
          if (field.options) {
            field.options.forEach(opt => {
              const option = document.createElement('option');
              option.value = opt.value;
              option.innerText = opt.label;
              if (field.defaultValue === opt.value) {
                option.selected = true;
              }
              select.appendChild(option);
            });
          }
          select.onchange = (e) => {
            formValues[field.id] = (e.target as HTMLSelectElement).value;
            clearError();
          };
          inputEl = select;
          group.appendChild(select);
        } else if (field.type === 'textarea') {
          const textarea = document.createElement('textarea');
          textarea.className = 'cozyalert-textarea';
          textarea.id = `cozyalert-field-${field.id}`;
          textarea.placeholder = field.placeholder || '';
          textarea.value = field.defaultValue || '';
          textarea.oninput = (e) => {
            formValues[field.id] = (e.target as HTMLTextAreaElement).value;
            clearError();
          };
          inputEl = textarea;
          group.appendChild(textarea);
        } else {
          const input = document.createElement('input');
          input.className = 'cozyalert-input';
          input.type = field.type;
          input.id = `cozyalert-field-${field.id}`;
          input.placeholder = field.placeholder || '';
          input.value = field.defaultValue || '';
          
          if (['date', 'datetime', 'daterange', 'month', 'year'].includes(field.type)) {
            input.type = 'text'; // Prevent native picker
            input.readOnly = true; // Prevent keyboard typing to force popup
            input.placeholder = field.placeholder || 'Select Date';
            input.style.cursor = 'pointer';
            group.classList.add('has-picker');
          } else if (field.type === 'time') {
            input.type = 'text';
            input.readOnly = true;
            input.placeholder = field.placeholder || 'Select Time';
            input.style.cursor = 'pointer';
            group.classList.add('has-picker');
          }

          input.oninput = (e) => {
            formValues[field.id] = (e.target as HTMLInputElement).value;
            clearError();
          };
          inputEl = input;
          group.appendChild(input);

          if (['date', 'datetime', 'daterange', 'month', 'year'].includes(field.type)) {
            const icon = document.createElement('div');
            icon.className = 'cozyalert-picker-icon';
            icon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>';
            group.appendChild(icon);
            
            // Re-assign form values when picker changes
            const originalOnInput = input.oninput;
            input.oninput = null; // Remove native oninput since it's readonly
            
            const dp = new CozyDatePicker(input, field.datePickerConfig || { mode: field.type === 'daterange' ? 'range' : 'single' });
            
            // Create a MutationObserver to listen for value changes since readonly input doesn't fire 'input' event when updated via JS
            const observer = new MutationObserver(() => {
                formValues[field.id] = input.value;
                clearError();
            });
            observer.observe(input, { attributes: true, attributeFilter: ['value'] });

            // Override input value setter to trigger observer
            const originalSet = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
            if(originalSet) {
              Object.defineProperty(input, 'value', {
                  set(val) {
                      originalSet.call(this, val);
                      input.setAttribute('value', val); // Triggers MutationObserver
                  }
              });
            }

          } else if (field.type === 'time') {
            const icon = document.createElement('div');
            icon.className = 'cozyalert-picker-icon';
            icon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>';
            group.appendChild(icon);

            input.oninput = null;
            const tp = new CozyTimePicker(input, field.timePickerConfig || {});
            
            const observer = new MutationObserver(() => {
                formValues[field.id] = input.value;
                clearError();
            });
            observer.observe(input, { attributes: true, attributeFilter: ['value'] });

            const originalSet = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
            if(originalSet) {
              Object.defineProperty(input, 'value', {
                  set(val) {
                      originalSet.call(this, val);
                      input.setAttribute('value', val);
                  }
              });
            }
          }
        }
      }

      // Validation logic
      const errorText = document.createElement('span');
      errorText.className = 'cozyalert-error-text';
      errorText.style.display = 'none';
      group.appendChild(errorText);

      const clearError = () => {
        if (inputEl) inputEl.classList.remove('has-error');
        errorText.style.display = 'none';
      };

      const validate = () => {
        const val = formValues[field.id];
        const valStr = val !== null && val !== undefined ? val.toString().trim() : '';

        // 1. Required check
        if (field.required && valStr === '') {
          if (inputEl) inputEl.classList.add('has-error');
          errorText.innerText = `${field.label || 'This field'} is required`;
          errorText.style.display = 'block';
          return false;
        }

        // 2. Pattern (Regex) check
        if (field.pattern && valStr !== '') {
          const regex = typeof field.pattern === 'string' ? new RegExp(field.pattern) : field.pattern;
          if (!regex.test(valStr)) {
            if (inputEl) inputEl.classList.add('has-error');
            errorText.innerText = field.validationMessage || `Invalid format`;
            errorText.style.display = 'block';
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

  // Actions container
  const actionsContainer = document.createElement('div');
  actionsContainer.className = 'cozyalert-actions';
  if (typeof options.customClass === 'object' && options.customClass.actions) {
    actionsContainer.classList.add(options.customClass.actions);
  }

  // Add listeners
  document.addEventListener('keydown', handleKeydown);
  if (overlay) {
    overlay.addEventListener('click', handleOutsideClick);
  }

  // Cancel Button
  if (options.showCancelButton) {
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cozyalert-btn cozyalert-btn-cancel';
    if (typeof options.customClass === 'object' && options.customClass.cancelButton) {
      cancelBtn.classList.add(options.customClass.cancelButton);
    }
    cancelBtn.innerText = options.cancelButtonText || 'Cancel';
    if (options.cancelButtonColor) {
      cancelBtn.style.backgroundColor = options.cancelButtonColor;
      cancelBtn.style.color = '#fff';
    }
    cancelBtn.onclick = () => closeAlert({ isConfirmed: false, isDenied: false, isDismissed: true });
    actionsContainer.appendChild(cancelBtn);
  }

  // Confirm Button
  if (options.showConfirmButton !== false && !(options.toast && !options.showConfirmButton)) {
    const confirmBtn = document.createElement('button');
    confirmBtn.className = `cozyalert-btn cozyalert-btn-confirm ${type || ''}`;
    if (typeof options.customClass === 'object' && options.customClass.confirmButton) {
      confirmBtn.classList.add(options.customClass.confirmButton);
    }
    confirmBtn.innerText = options.confirmButtonText || 'Okay';
    if (options.confirmButtonColor) {
      confirmBtn.style.backgroundColor = options.confirmButtonColor;
    }
    confirmBtn.onclick = async () => {
      // Run validation
      let isValid = true;
      formValidators.forEach(validate => {
        if (!validate()) isValid = false;
      });

      if (!isValid) return;

      // Handle preConfirm hook
      if (options.preConfirm) {
        confirmBtn.disabled = true;
        const originalText = confirmBtn.innerText;
        confirmBtn.innerHTML = `${getLoaderSvg()} ${originalText}`;
        try {
          const preConfirmResult = await options.preConfirm(formValues);
          if (preConfirmResult === false) {
            confirmBtn.disabled = false;
            confirmBtn.innerText = originalText;
            return; // Stop closing if preConfirm returns false
          }
        } catch (error) {
          console.error('CozyAlert preConfirm error:', error);
          confirmBtn.disabled = false;
          confirmBtn.innerText = originalText;
          return;
        }
      }

      closeAlert({ 
        isConfirmed: true, 
        isDenied: false, 
        isDismissed: false, 
        value: options.fields ? formValues : undefined 
      });
    };
    actionsContainer.appendChild(confirmBtn);
  }

  // Only append actions if there are any buttons (sometimes toasts don't have buttons)
  if (actionsContainer.childNodes.length > 0) {
    popup.appendChild(actionsContainer);
  }

  // Timer logic
  if (options.timer) {
    timerTimeout = setTimeout(() => {
      closeAlert({ isConfirmed: false, isDenied: false, isDismissed: true });
    }, options.timer);
  }

  // Trigger reflow for modal animation (toast has keyframes)
  if (!options.toast && overlay) {
    void overlay.offsetWidth;
    overlay.classList.add('cozyalert-show');
  }

  // Auto focus first input if form fields exist and it's not a toast
  if (!options.toast && options.fields && options.fields.length > 0) {
    const firstInput = popup.querySelector('.cozyalert-input, .cozyalert-textarea, .cozyalert-select') as HTMLElement;
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 10);
    }
  }

  const forceClose = () => closeAlert({ isConfirmed: false, isDenied: false, isDismissed: true });
  activeAlerts.push(forceClose);

  return { closeAlert };
};
