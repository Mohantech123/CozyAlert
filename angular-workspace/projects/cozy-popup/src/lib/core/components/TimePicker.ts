import { TimePickerConfig } from '../core/types';

export class CozyTimePicker {
  private input: HTMLInputElement;
  private config: TimePickerConfig;
  private popup: HTMLDivElement;
  
  private selectedSlot: string | null = null;
  private currentHour: number = 10;
  private currentMinute: number = 30;
  private currentPeriod: 'AM' | 'PM' = 'AM';
  
  // For clock mode
  private clockView: 'hours' | 'minutes' = 'hours';

  constructor(input: HTMLInputElement, config: TimePickerConfig = {}) {
    this.input = input;
    this.config = {
      format: '12h',
      style: 'default',
      ...config,
    };
    
    // Parse existing value if any
    if (this.input.value) {
      const match = this.input.value.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
      if (match) {
        this.currentHour = parseInt(match[1]);
        this.currentMinute = parseInt(match[2]);
        if (match[3]) this.currentPeriod = match[3].toUpperCase() as 'AM'|'PM';
      }
    }

    this.popup = document.createElement('div');
    this.popup.className = 'cozyalert-datepicker-popup';
    if (this.config.mobileLayout) {
      this.popup.classList.add('mobile-layout');
    }
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

  private updateInputValue() {
    if (this.config.bookingSlots && this.config.bookingSlots.length > 0) {
      this.input.value = this.selectedSlot || '';
    } else {
      const h = this.currentHour.toString().padStart(2, '0');
      const m = this.currentMinute.toString().padStart(2, '0');
      if (this.config.format === '24h') {
        this.input.value = `${h}:${m}`;
      } else {
        this.input.value = `${h}:${m} ${this.currentPeriod}`;
      }
    }
    
    this.input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  private render() {
    this.popup.innerHTML = '';
    
    if (this.config.mobileLayout) {
      this.renderMobileHeader();
    }

    if (this.config.bookingSlots && this.config.bookingSlots.length > 0) {
      this.renderBookingSlots();
    } else if (this.config.style === 'clock') {
      this.renderClockStyle();
    } else if (this.config.style === 'scroll') {
      this.renderScrollStyle();
    } else {
      this.renderDefaultStyle();
    }
  }

  private renderMobileHeader() {
    const header = document.createElement('div');
    header.className = 'cozyalert-mobile-header';
    
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cozyalert-mobile-cancel';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.onclick = (e) => { e.stopPropagation(); this.close(); };

    const title = document.createElement('div');
    title.className = 'cozyalert-mobile-title';
    title.textContent = 'Choose Time';

    const doneBtn = document.createElement('button');
    doneBtn.className = 'cozyalert-mobile-done';
    doneBtn.textContent = 'Done';
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

  private renderBookingSlots() {
    const header = document.createElement('div');
    header.className = 'cozyalert-datepicker-header';
    const title = document.createElement('div');
    title.className = 'cozyalert-datepicker-month-year';
    title.textContent = 'Select Time Slot';
    header.appendChild(title);
    this.popup.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'cozyalert-timepicker-slots';

    this.config.bookingSlots!.forEach(slot => {
      const btn = document.createElement('button');
      btn.className = 'cozyalert-timepicker-slot';
      if (this.selectedSlot === slot) btn.classList.add('selected');
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

  private renderDefaultStyle() {
    const container = document.createElement('div');
    container.className = 'cozyalert-time-default-container';

    const createSpinner = (val: number, max: number, min: number, onChange: (v: number) => void) => {
      const wrap = document.createElement('div');
      wrap.className = 'cozyalert-time-spinner';
      
      const up = document.createElement('button');
      up.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>';
      up.onclick = (e) => { e.stopPropagation(); e.preventDefault(); let n = val + 1; if(n > max) n = min; onChange(n); };
      
      const valDisplay = document.createElement('div');
      valDisplay.className = 'cozyalert-time-spinner-val';
      valDisplay.textContent = val.toString().padStart(2, '0');

      const down = document.createElement('button');
      down.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>';
      down.onclick = (e) => { e.stopPropagation(); e.preventDefault(); let n = val - 1; if(n < min) n = max; onChange(n); };

      wrap.appendChild(up);
      wrap.appendChild(valDisplay);
      wrap.appendChild(down);
      return wrap;
    };

    container.appendChild(createSpinner(this.currentHour, this.config.format === '24h' ? 23 : 12, this.config.format === '24h' ? 0 : 1, (v) => { this.currentHour = v; this.updateInputValue(); this.render(); }));
    
    const sep = document.createElement('div');
    sep.className = 'cozyalert-time-separator';
    sep.textContent = ':';
    container.appendChild(sep);

    container.appendChild(createSpinner(this.currentMinute, 59, 0, (v) => { this.currentMinute = v; this.updateInputValue(); this.render(); }));

    if (this.config.format !== '24h') {
      const periodWrap = document.createElement('div');
      periodWrap.className = 'cozyalert-time-period-wrap';
      
      const am = document.createElement('button');
      am.textContent = 'AM';
      am.className = this.currentPeriod === 'AM' ? 'active' : '';
      am.onclick = (e) => { e.stopPropagation(); e.preventDefault(); this.currentPeriod = 'AM'; this.updateInputValue(); this.render(); };

      const pm = document.createElement('button');
      pm.textContent = 'PM';
      pm.className = this.currentPeriod === 'PM' ? 'active' : '';
      pm.onclick = (e) => { e.stopPropagation(); e.preventDefault(); this.currentPeriod = 'PM'; this.updateInputValue(); this.render(); };

      periodWrap.appendChild(am);
      periodWrap.appendChild(pm);
      container.appendChild(periodWrap);
    }

    this.popup.appendChild(container);
  }

  private renderClockStyle() {
    const header = document.createElement('div');
    header.className = 'cozyalert-clock-header';
    
    const hBtn = document.createElement('span');
    hBtn.textContent = this.currentHour.toString().padStart(2, '0');
    hBtn.className = this.clockView === 'hours' ? 'active' : '';
    hBtn.onclick = (e) => { e.stopPropagation(); this.clockView = 'hours'; this.render(); };
    
    const mBtn = document.createElement('span');
    mBtn.textContent = this.currentMinute.toString().padStart(2, '0');
    mBtn.className = this.clockView === 'minutes' ? 'active' : '';
    mBtn.onclick = (e) => { e.stopPropagation(); this.clockView = 'minutes'; this.render(); };

    header.appendChild(hBtn);
    header.appendChild(document.createTextNode(' : '));
    header.appendChild(mBtn);

    if (this.config.format !== '24h') {
      const pBtn = document.createElement('span');
      pBtn.textContent = ' ' + this.currentPeriod;
      pBtn.className = 'period-toggle';
      pBtn.onclick = (e) => { e.stopPropagation(); this.currentPeriod = this.currentPeriod === 'AM' ? 'PM' : 'AM'; this.updateInputValue(); this.render(); };
      header.appendChild(pBtn);
    }

    this.popup.appendChild(header);

    const clockWrap = document.createElement('div');
    clockWrap.className = 'cozyalert-clock-dial';

    const radius = 100;
    const center = 130;

    const createNode = (val: number, angleDeg: number, isActive: boolean, isMinute: boolean) => {
      const node = document.createElement('div');
      node.className = 'cozyalert-clock-node' + (isActive ? ' active' : '');
      node.textContent = isMinute ? val.toString().padStart(2, '0') : val.toString();
      
      const rad = (angleDeg - 90) * (Math.PI / 180);
      const x = center + radius * Math.cos(rad);
      const y = center + radius * Math.sin(rad);
      
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;

      node.onclick = (e) => {
        e.stopPropagation();
        if (this.clockView === 'hours') {
          this.currentHour = val;
          this.clockView = 'minutes';
          this.updateInputValue();
          this.render();
        } else {
          this.currentMinute = val;
          this.updateInputValue();
          this.close();
        }
      };
      
      if (isActive) {
        const line = document.createElement('div');
        line.className = 'cozyalert-clock-hand';
        line.style.transform = `rotate(${angleDeg - 90}deg)`;
        clockWrap.appendChild(line);
      }
      
      clockWrap.appendChild(node);
    };

    if (this.clockView === 'hours') {
      const max = this.config.format === '24h' ? 24 : 12;
      for (let i = 1; i <= max; i++) {
        // Simple 12 hour ring for now
        if (i > 12 && this.config.format === '24h') continue; 
        const angle = i * 30;
        createNode(i, angle, this.currentHour === i || (this.currentHour === 0 && i === 12), false);
      }
    } else {
      for (let i = 0; i < 60; i += 5) {
        const angle = i * 6;
        createNode(i, angle, this.currentMinute === i, true);
      }
    }

    const centerDot = document.createElement('div');
    centerDot.className = 'cozyalert-clock-center';
    clockWrap.appendChild(centerDot);

    this.popup.appendChild(clockWrap);
  }

  private renderScrollStyle() {
    const container = document.createElement('div');
    container.className = 'cozyalert-time-scroll-container';
    
    const overlay = document.createElement('div');
    overlay.className = 'cozyalert-time-scroll-overlay';
    container.appendChild(overlay);

    const createCol = (items: (string|number)[], currentVal: string|number, onSelect: (v: any) => void) => {
      const col = document.createElement('div');
      col.className = 'cozyalert-scroll-col';
      
      const updateActive = () => {
        const scrollTop = col.scrollTop;
        const index = Math.round(scrollTop / 40);
        if (items[index] !== undefined) {
          Array.from(col.children).forEach(c => c.classList.remove('active'));
          col.children[index]?.classList.add('active');
          onSelect(items[index]);
        }
      };

      let isScrolling: any;
      col.addEventListener('scroll', () => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
          updateActive();
          if (!this.config.mobileLayout) this.updateInputValue();
        }, 100);
      });

      items.forEach((item, i) => {
        const div = document.createElement('div');
        div.className = 'cozyalert-scroll-item';
        if (item === currentVal) div.classList.add('active');
        div.textContent = typeof item === 'number' ? item.toString().padStart(2, '0') : item;
        div.onclick = (e) => {
          e.stopPropagation();
          col.scrollTo({ top: i * 40, behavior: 'smooth' });
        };
        col.appendChild(div);
      });

      // Initial scroll position
      setTimeout(() => {
        const initIndex = items.indexOf(currentVal);
        if (initIndex > -1) col.scrollTop = initIndex * 40;
      }, 10);

      return col;
    };

    const maxH = this.config.format === '24h' ? 23 : 12;
    const minH = this.config.format === '24h' ? 0 : 1;
    const hours = Array.from({length: maxH - minH + 1}, (_, i) => i + minH);
    const minutes = Array.from({length: 60}, (_, i) => i);

    container.appendChild(createCol(hours, this.currentHour, (v) => this.currentHour = v));
    container.appendChild(createCol(minutes, this.currentMinute, (v) => this.currentMinute = v));
    
    if (this.config.format !== '24h') {
      container.appendChild(createCol(['AM', 'PM'], this.currentPeriod, (v) => this.currentPeriod = v));
    }

    this.popup.appendChild(container);
  }
}
