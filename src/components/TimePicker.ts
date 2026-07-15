import { TimePickerConfig } from '../core/types';

export class CozyTimePicker {
  private input: HTMLInputElement;
  private config: TimePickerConfig;
  private popup: HTMLDivElement;
  private selectedSlot: string | null = null;

  constructor(input: HTMLInputElement, config: TimePickerConfig = {}) {
    this.input = input;
    this.config = {
      format: '12h',
      ...config,
    };
    
    this.popup = document.createElement('div');
    this.popup.className = 'cozyalert-datepicker-popup'; // reuse popup container
    this.input.parentNode?.appendChild(this.popup);

    this.initEvents();
  }

  private initEvents() {
    this.input.addEventListener('click', (e) => {
      e.stopPropagation();
      this.open();
    });

    document.addEventListener('click', (e) => {
      if (!this.popup.contains(e.target as Node) && e.target !== this.input) {
        this.close();
      }
    });
  }

  private open() {
    this.popup.classList.add('active');
    this.render();
  }

  public close() {
    this.popup.classList.remove('active');
  }

  private render() {
    this.popup.innerHTML = '';
    
    // Booking Slots Mode
    if (this.config.bookingSlots && this.config.bookingSlots.length > 0) {
      const header = document.createElement('div');
      header.className = 'cozyalert-datepicker-header';
      const title = document.createElement('div');
      title.className = 'cozyalert-datepicker-month-year';
      title.textContent = 'Select Time Slot';
      header.appendChild(title);
      this.popup.appendChild(header);

      const grid = document.createElement('div');
      grid.className = 'cozyalert-timepicker-slots';

      this.config.bookingSlots.forEach(slot => {
        const btn = document.createElement('button');
        btn.className = 'cozyalert-timepicker-slot';
        if (this.selectedSlot === slot) btn.classList.add('selected');
        btn.textContent = slot;
        btn.onclick = (e) => {
          e.stopPropagation();
          this.selectedSlot = slot;
          this.input.value = slot;
          this.close();
        };
        grid.appendChild(btn);
      });

      this.popup.appendChild(grid);
    } else {
      // Basic Time Picker (Native fallback for now)
      const fallback = document.createElement('input');
      fallback.type = 'time';
      fallback.style.padding = '0.5rem';
      fallback.style.border = '1px solid #ccc';
      fallback.style.borderRadius = '8px';
      fallback.style.width = '100%';
      fallback.onchange = (e) => {
        this.input.value = (e.target as HTMLInputElement).value;
        this.close();
      };
      this.popup.appendChild(fallback);
    }
  }
}
