import { DatePickerConfig } from '../core/types';

export class CozyDatePicker {
  private input: HTMLInputElement;
  private config: DatePickerConfig;
  private popup: HTMLDivElement;
  private currentDate: Date;
  private selectedDates: Date[];
  private rangeStart: Date | null = null;
  private rangeEnd: Date | null = null;
  
  // View mode states: 'date', 'month', 'year'
  private viewMode: 'date' | 'month' | 'year';

  constructor(input: HTMLInputElement, config: DatePickerConfig = {}) {
    this.input = input;
    this.config = {
      mode: 'single', // 'single' | 'range' | 'month' | 'year'
      locale: typeof navigator !== 'undefined' ? navigator.language : 'en-US',
      ...config,
    };
    this.currentDate = new Date();
    this.selectedDates = [];
    
    // If input specifies 'month' or 'year' natively, or config overrides it
    if (this.config.mode === 'month') {
      this.viewMode = 'year'; // Request: open year picker first
    } else if (this.config.mode === 'year') {
      this.viewMode = 'year';
    } else {
      this.viewMode = 'date';
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
    if (this.config.mode === 'month') this.viewMode = 'year';
    if (this.config.mode === 'year') this.viewMode = 'year';
    this.render();
  }

  private isDateDisabled(date: Date): boolean {
    if (this.config.disableWeekends) {
      const day = date.getDay();
      if (day === 0 || day === 6) return true;
    }
    if (this.config.minDate && date < new Date(this.config.minDate)) return true;
    if (this.config.maxDate && date > new Date(this.config.maxDate)) return true;
    
    if (this.config.disabledDates) {
      const dateStr = date.toDateString();
      return this.config.disabledDates.some(d => new Date(d).toDateString() === dateStr);
    }
    return false;
  }

  public close() {
    this.popup.classList.remove('active');
  }

  private getMonthDays(year: number, month: number) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    return { firstDay, daysInMonth, daysInPrevMonth };
  }

  private formatLocal(date: Date, options: Intl.DateTimeFormatOptions) {
    return new Intl.DateTimeFormat(this.config.locale, {
      timeZone: this.config.timezone,
      ...options
    }).format(date);
  }

  private updateInputValue() {
    if (this.config.mode === 'single' && this.selectedDates.length > 0) {
      this.input.value = this.formatLocal(this.selectedDates[0], { year: 'numeric', month: 'short', day: 'numeric' });
    } else if (this.config.mode === 'range' && this.rangeStart && this.rangeEnd) {
      const s = this.formatLocal(this.rangeStart, { year: 'numeric', month: 'short', day: 'numeric' });
      const e = this.formatLocal(this.rangeEnd, { year: 'numeric', month: 'short', day: 'numeric' });
      this.input.value = `${s} - ${e}`;
    } else if (this.config.mode === 'month' && this.selectedDates.length > 0) {
      this.input.value = this.formatLocal(this.selectedDates[0], { year: 'numeric', month: 'long' });
    } else if (this.config.mode === 'year' && this.selectedDates.length > 0) {
      this.input.value = this.formatLocal(this.selectedDates[0], { year: 'numeric' });
    }
    
    // Dispatch native input event so form tracking picks it up reliably
    this.input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  private render() {
    this.popup.innerHTML = '';
    
    if (this.config.mobileLayout) {
      this.renderMobileHeader();
    }

    if (this.viewMode === 'year') {
      this.renderYearView();
    } else if (this.viewMode === 'month') {
      this.renderMonthView();
    } else {
      this.renderDateView();
    }
  }

  private renderHeader(titleText: string, onPrev: (e: MouseEvent) => void, onNext: (e: MouseEvent) => void, onTitleClick?: (e: MouseEvent) => void) {
    const header = document.createElement('div');
    header.className = 'cozyalert-datepicker-header';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'cozyalert-datepicker-nav-btn';
    prevBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>';
    prevBtn.onclick = (e) => { e.stopPropagation(); e.preventDefault(); onPrev(e); };

    const title = document.createElement('div');
    title.className = 'cozyalert-datepicker-month-year';
    title.textContent = titleText;
    if (onTitleClick) {
      title.style.cursor = 'pointer';
      title.onclick = (e) => { e.stopPropagation(); onTitleClick(e); };
    } else {
      title.style.cursor = 'default';
    }

    const nextBtn = document.createElement('button');
    nextBtn.className = 'cozyalert-datepicker-nav-btn';
    nextBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>';
    nextBtn.onclick = (e) => { e.stopPropagation(); e.preventDefault(); onNext(e); };

    header.appendChild(prevBtn);
    header.appendChild(title);
    header.appendChild(nextBtn);
    this.popup.appendChild(header);
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
    title.textContent = 'Choose Date';

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

  private renderYearView() {
    const startYear = Math.floor(this.currentDate.getFullYear() / 12) * 12;
    
    this.renderHeader(
      `${startYear} - ${startYear + 11}`,
      () => { this.currentDate.setFullYear(startYear - 12); this.render(); },
      () => { this.currentDate.setFullYear(startYear + 12); this.render(); }
    );

    const grid = document.createElement('div');
    grid.className = 'cozyalert-datepicker-grid year-grid';

    for (let i = 0; i < 12; i++) {
      const yearStr = (startYear + i).toString();
      const cell = document.createElement('div');
      cell.className = 'cozyalert-datepicker-day month-year-cell';
      cell.textContent = yearStr;

      if (this.selectedDates[0] && this.selectedDates[0].getFullYear().toString() === yearStr) {
        cell.classList.add('selected');
      }

      cell.onclick = (e) => {
        e.stopPropagation();
        this.currentDate.setFullYear(startYear + i);
        if (this.config.mode === 'year') {
          this.selectedDates = [new Date(startYear + i, 0, 1)];
          this.updateInputValue();
          this.close();
        } else {
          this.viewMode = 'month';
          this.render();
        }
      };
      grid.appendChild(cell);
    }
    this.popup.appendChild(grid);
  }

  private renderMonthView() {
    const year = this.currentDate.getFullYear();
    
    this.renderHeader(
      year.toString(),
      () => { this.currentDate.setFullYear(year - 1); this.render(); },
      () => { this.currentDate.setFullYear(year + 1); this.render(); },
      () => { 
        if (this.config.mode !== 'month') {
          this.viewMode = 'year'; 
          this.render(); 
        }
      }
    );

    const grid = document.createElement('div');
    grid.className = 'cozyalert-datepicker-grid month-grid';

    for (let i = 0; i < 12; i++) {
      const d = new Date(year, i, 1);
      const monthStr = this.formatLocal(d, { month: 'short' });
      
      const cell = document.createElement('div');
      cell.className = 'cozyalert-datepicker-day month-year-cell';
      cell.textContent = monthStr;

      if (this.selectedDates[0] && this.selectedDates[0].getMonth() === i && this.selectedDates[0].getFullYear() === year) {
        cell.classList.add('selected');
      }

      cell.onclick = (e) => {
        e.stopPropagation();
        this.currentDate.setMonth(i);
        if (this.config.mode === 'month') {
          this.selectedDates = [new Date(year, i, 1)];
          this.updateInputValue();
          this.close();
        } else {
          this.viewMode = 'date';
          this.render();
        }
      };
      grid.appendChild(cell);
    }
    this.popup.appendChild(grid);
  }

  private renderDateView() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const monthName = this.formatLocal(this.currentDate, { month: 'long', year: 'numeric' });

    this.renderHeader(
      monthName,
      () => { this.currentDate.setMonth(month - 1); this.render(); },
      () => { this.currentDate.setMonth(month + 1); this.render(); },
      () => { this.viewMode = 'month'; this.render(); }
    );

    const grid = document.createElement('div');
    grid.className = 'cozyalert-datepicker-grid';

    // Weekdays
    const weekdays = [];
    for(let i=0; i<7; i++) {
        const d = new Date(2023, 0, 1 + i); // Jan 1 2023 is Sunday
        weekdays.push(this.formatLocal(d, { weekday: 'short' }));
    }
    weekdays.forEach(wd => {
      const el = document.createElement('div');
      el.className = 'cozyalert-datepicker-weekday';
      el.textContent = wd;
      grid.appendChild(el);
    });

    const { firstDay, daysInMonth, daysInPrevMonth } = this.getMonthDays(year, month);
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    const todayStr = new Date().toDateString();

    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement('div');
      cell.className = 'cozyalert-datepicker-day';
      
      let dayDate: Date;

      if (i < firstDay) {
        // Prev month
        const d = daysInPrevMonth - firstDay + i + 1;
        cell.textContent = d.toString();
        cell.classList.add('other-month');
        dayDate = new Date(year, month - 1, d);
      } else if (i >= firstDay && i < firstDay + daysInMonth) {
        // Current month
        const d = i - firstDay + 1;
        cell.textContent = d.toString();
        dayDate = new Date(year, month, d);
      } else {
        // Next month
        const d = i - firstDay - daysInMonth + 1;
        cell.textContent = d.toString();
        cell.classList.add('other-month');
        dayDate = new Date(year, month + 1, d);
      }

      if (dayDate.toDateString() === todayStr) {
        cell.classList.add('today');
      }

      // Selection logic
      if (this.config.mode === 'single') {
        if (this.selectedDates[0] && dayDate.toDateString() === this.selectedDates[0].toDateString()) {
          cell.classList.add('selected');
        }
      } else if (this.config.mode === 'range') {
        if (this.rangeStart && dayDate.toDateString() === this.rangeStart.toDateString()) {
          cell.classList.add('selected', 'range-start');
        }
        if (this.rangeEnd && dayDate.toDateString() === this.rangeEnd.toDateString()) {
          cell.classList.add('selected', 'range-end');
        }
        if (this.rangeStart && this.rangeEnd && dayDate > this.rangeStart && dayDate < this.rangeEnd) {
          cell.classList.add('in-range');
        }
      }

      // Events
      if (this.config.events) {
        const ev = this.config.events.find(e => new Date(e.date).toDateString() === dayDate.toDateString());
        if (ev) {
          const dot = document.createElement('div');
          dot.className = 'cozyalert-event-dot';
          if (ev.color) dot.style.background = ev.color;
          cell.appendChild(dot);
        }
      }

      if (this.isDateDisabled(dayDate)) {
        cell.classList.add('disabled');
      } else {
        cell.onclick = (e) => {
          e.stopPropagation();
          if (this.config.mode === 'single') {
            this.selectedDates = [dayDate];
            this.updateInputValue();
            this.close();
          } else if (this.config.mode === 'range') {
            if (!this.rangeStart || (this.rangeStart && this.rangeEnd)) {
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
}
