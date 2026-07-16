import { Component } from '@angular/core';
import { CozyPopupService } from 'ngx-cozy-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public alert: CozyPopupService) {}

  setGlobalTheme(themeClass: string) {
    document.body.className = themeClass;
    this.alert.success('Theme Applied', 'All new popups and forms will use this theme globally!');
  }

  confirmDelete() {
    this.alert.fire({
      title: 'Delete File?',
      text: 'This cannot be undone.',
      confirmButtonText: 'Yes, Delete',
      confirmButtonColor: '#ef4444',
      icon: 'warning',
      showCancelButton: true
    }).then(res => {
        if (res.isConfirmed) this.alert.success('Deleted!');
      });
  }

  loginForm() {
    this.alert.fire({ 
      title: 'Login', 
      fields: [
        { id: 'email', type: 'email', label: 'Email' }, 
        { id: 'password', type: 'password', label: 'Password' }
      ], 
      showCancelButton: true 
    }).then(r => {
      if (r.isConfirmed) this.alert.success('Welcome!', r.value?.['email']);
    });
  }

  newsletterSub() {
    this.alert.fire({ 
      title: 'Newsletter', 
      fields: [{ id: 'email', type: 'email', placeholder: 'your@email.com', required: true }], 
      confirmButtonText: 'Subscribe' 
    }).then(r => {
      if (r.isConfirmed) this.alert.success('Subscribed!');
    });
  }

  pickDate() {
    this.alert.fire({ 
      title: 'Pick a Date', 
      fields: [{ id: 'date', type: 'date', label: 'Select Date', required: true }] 
    }).then(r => {
      if (r.isConfirmed) this.alert.info('Selected', r.value?.['date']);
    });
  }

  pickColor() {
    this.alert.fire({ 
      title: 'Brand Color', 
      fields: [{ id: 'color', type: 'color', label: 'Choose Color', defaultValue: '#ec4899' }] 
    }).then(r => {
      if (r.isConfirmed) this.alert.success('Color Saved!', r.value?.['color']);
    });
  }

  apiRequest() {
    this.alert.fire({ 
      title: 'API Request', 
      text: 'Clicking Confirm will show a loader.', 
      showCancelButton: true, 
      preConfirm: () => new Promise(resolve => setTimeout(resolve, 2000)) 
    }).then(r => {
      if (r.isConfirmed) this.alert.success('Loaded!');
    });
  }

  registerAccount() {
    this.alert.fire({ 
      title: 'Register Account', 
      fields: [
        { id: 'username', type: 'text', label: 'Username', required: true, pattern: '^[a-zA-Z0-9_]{4,15}$', validationMessage: '4-15 alphanumeric chars.' }, 
        { id: 'email', type: 'email', label: 'Email', required: true }, 
        { id: 'password', type: 'password', label: 'Password', required: true, pattern: '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$', validationMessage: 'Min 8 chars, at least 1 letter and 1 number.' }
      ], 
      showCancelButton: true, 
      confirmButtonText: 'Sign Up' 
    }).then(r => {
      if (r.isConfirmed) this.alert.success('Registered!', `Welcome ${r.value?.['username']}`);
    });
  }

  paymentGateway() {
    this.alert.fire({ 
      title: 'Payment Details', 
      icon: 'info', 
      fields: [
        { id: 'card', type: 'text', label: 'Card Number', required: true, pattern: '^\\d{16}$', validationMessage: 'Must be exactly 16 digits.' }, 
        { id: 'expiry', type: 'text', label: 'Expiry (MM/YY)', required: true, pattern: '^(0[1-9]|1[0-2])\\/\\d{2}$', validationMessage: 'Format MM/YY' }, 
        { id: 'cvv', type: 'password', label: 'CVV', required: true, pattern: '^\\d{3,4}$', validationMessage: '3 or 4 digits' }
      ], 
      showCancelButton: true, 
      confirmButtonText: 'Pay Now' 
    }).then(r => {
      if (r.isConfirmed) this.alert.success('Payment Successful!');
    });
  }

  bookTable() {
    this.alert.fire({ 
      title: 'Book a Table', 
      fields: [
        { id: 'date', type: 'date', label: 'Date', required: true }, 
        { id: 'time', type: 'time', label: 'Time', required: true }, 
        { id: 'guests', type: 'number', label: 'Number of Guests', required: true, defaultValue: 2 }, 
        { id: 'requests', type: 'textarea', label: 'Special Requests' }
      ], 
      confirmButtonText: 'Confirm Booking' 
    }).then(r => {
      if (r.isConfirmed) this.alert.success('Booked!', `Table for ${r.value?.['guests']} on ${r.value?.['date']}`);
    });
  }

  activateSoftware() {
    this.alert.fire({ 
      title: 'Activate Software', 
      fields: [{ id: 'license', type: 'text', label: 'License Key (XXXX-XXXX-XXXX)', required: true, pattern: '^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$', validationMessage: 'Invalid format. Use XXXX-XXXX-XXXX.' }], 
      confirmButtonText: 'Activate' 
    }).then(r => {
      if (r.isConfirmed) this.alert.success('Activated!');
    });
  }

  addressForm() {
    this.alert.fire({ 
      title: 'Shipping Address', 
      size: 'md', 
      fields: [
        { id: 'street', type: 'text', label: 'Street Address', required: true }, 
        { id: 'city', type: 'text', label: 'City', required: true }, 
        { id: 'state', type: 'select', label: 'State', options: [{label:'CA', value:'CA'}, {label:'NY', value:'NY'}, {label:'TX', value:'TX'}, {label:'FL', value:'FL'}] }, 
        { id: 'zip', type: 'text', label: 'Zip Code', required: true, pattern: '^\\d{5}$', validationMessage: 'Must be 5 digits.' }
      ], 
      confirmButtonText: 'Save Address' 
    }).then(r => {
      if (r.isConfirmed) this.alert.success('Saved!');
    });
  }

  mandatorySurvey() {
    this.alert.fire({ 
      title: 'Mandatory Survey', 
      text: 'You cannot dismiss this form by clicking the background.', 
      allowOutsideClick: false, 
      showCloseButton: false, 
      fields: [{ id: 'feedback', type: 'textarea', label: 'Feedback', required: true, placeholder: 'You must provide feedback...' }], 
      confirmButtonText: 'Submit Feedback' 
    }).then(r => {
      if (r.isConfirmed) this.alert.success('Thank You!');
    });
  }

  singleDatePicker() {
    this.alert.fire({ title: 'Basic Date', size: 'sm', fields: [{ id: 'date', type: 'date', label: 'Select a Date' }], confirmButtonText: 'Select' }).then(r => {
      if (r.isConfirmed) this.alert.success('Date Selected!', r.value?.['date']);
    });
  }
  
  dateRangePicker() {
    this.alert.fire({ title: 'Date Range', size: 'sm', fields: [{ id: 'range', type: 'daterange', label: 'Select Vacation Dates', datePickerConfig: { mode: 'range' } }], confirmButtonText: 'Book Range' }).then(r => {
      if (r.isConfirmed) this.alert.success('Range Selected!', r.value?.['range']);
    });
  }

  bookingTimeSlots() {
    this.alert.fire({ title: 'Booking Time', size: 'sm', fields: [{ id: 'slot', type: 'time', label: 'Available Slots', timePickerConfig: { bookingSlots: ['09:00 AM', '10:00 AM', '11:30 AM', '02:00 PM', '04:00 PM'] } }], confirmButtonText: 'Book Slot' }).then(r => {
      if (r.isConfirmed) this.alert.success('Slot Booked!', r.value?.['slot']);
    });
  }

  fullAppointment() {
    this.alert.fire({ title: 'Complex Appointment', size: 'md', fields: [{ id: 'name', type: 'text', label: 'Patient Name' }, { id: 'date', type: 'date', label: 'Appointment Date', datePickerConfig: { locale: 'en-US' } }, { id: 'time', type: 'time', label: 'Appointment Time', timePickerConfig: { bookingSlots: ['10:00 AM', '01:00 PM', '03:30 PM'] } }], confirmButtonText: 'Schedule Appointment' }).then(r => {
      if (r.isConfirmed) this.alert.success('Scheduled!', `For ${r.value?.['name']} on ${r.value?.['date']} at ${r.value?.['time']}`);
    });
  }

  monthPicker() {
    this.alert.fire({ title: 'Month Picker', size: 'sm', fields: [{ id: 'month', type: 'month', label: 'Select Month' }], confirmButtonText: 'Select' }).then(r => {
      if (r.isConfirmed) this.alert.success('Month Selected!', r.value?.['month']);
    });
  }

  yearPicker() {
    this.alert.fire({ title: 'Year Picker', size: 'sm', fields: [{ id: 'year', type: 'year', label: 'Select Year' }], confirmButtonText: 'Select' }).then(r => {
      if (r.isConfirmed) this.alert.success('Year Selected!', r.value?.['year']);
    });
  }

  spinnerTimePicker() {
    this.alert.fire({ title: 'Spinner Time Picker', size: 'sm', fields: [{ id: 'time', type: 'time', label: 'Select Time', timePickerConfig: { style: 'default' } }], confirmButtonText: 'Set Time' }).then(r => {
      if (r.isConfirmed) this.alert.success('Time Set!', r.value?.['time']);
    });
  }

  premiumClock() {
    this.alert.fire({ title: 'Premium Clock', size: 'sm', fields: [{ id: 'time', type: 'time', label: 'Select Time', timePickerConfig: { style: 'clock' } }], confirmButtonText: 'Set Time' }).then(r => {
      if (r.isConfirmed) this.alert.success('Time Set!', r.value?.['time']);
    });
  }

  mobileDateView() {
    this.alert.fire({ title: 'Mobile Date Picker', size: 'sm', fields: [{ id: 'date', type: 'date', label: 'Select Date', datePickerConfig: { mobileLayout: true } }], confirmButtonText: 'Submit Form' }).then(r => {
      if (r.isConfirmed) this.alert.success('Date Selected!', r.value?.['date']);
    });
  }

  mobileScrollTime() {
    this.alert.fire({ title: 'Mobile Scroll Time', size: 'sm', fields: [{ id: 'time', type: 'time', label: 'Select Time', timePickerConfig: { style: 'scroll', mobileLayout: true } }], confirmButtonText: 'Submit Form' }).then(r => {
      if (r.isConfirmed) this.alert.success('Time Set!', r.value?.['time']);
    });
  }

  // --- New Methods Migrated from HTML ---

  leftDrawer() {
    this.alert.offcanvas({ 
      title: 'Navigation', 
      html: '<ul style="line-height:2; list-style:none; padding:0;"><li>🏠 Home</li><li>👤 Profile</li><li>⚙️ Settings</li></ul>', 
      position: 'left', 
      size: 'sm' 
    });
  }

  rightDrawer() {
    this.alert.offcanvas({ 
      title: 'Settings', 
      html: '<p>Theme options here.</p>', 
      position: 'right' 
    });
  }

  bottomDrawer() {
    this.alert.offcanvas({ 
      title: 'System Tray', 
      position: 'bottom', 
      size: 'xs', 
      html: '<p>Updates downloading...</p>' 
    });
  }

  topDrawer() {
    this.alert.offcanvas({ 
      title: 'Search', 
      position: 'top', 
      fields: [{ id: 'q', type: 'text', placeholder: 'Search...' }], 
      confirmButtonText: 'Go' 
    });
  }

  imagePreview() {
    this.alert.fire({ 
      title: 'Image Preview', 
      html: '<img src="https://picsum.photos/400/200" style="width: 100%; border-radius: 8px;">', 
      size: 'md' 
    });
  }

  codeViewer() {
    this.alert.fire({ 
      title: 'Code Viewer', 
      html: '<pre style="background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 8px; text-align: left; overflow-x: auto;"><code>function init() {\n  console.log(\'Hello World\');\n}</code></pre>', 
      size: 'lg' 
    });
  }

  termsOfService() {
    this.alert.fire({ 
      title: 'Terms of Service', 
      html: '<div style="height: 150px; overflow-y: auto; text-align: left; border: 1px solid #ddd; padding: 10px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida...</div>', 
      confirmButtonText: 'I Agree' 
    });
  }

  cookieConsent() {
    this.alert.fire({ 
      title: '🍪 Cookie Consent', 
      text: 'We use cookies to improve your experience. By continuing, you agree to our policy.', 
      toast: true, 
      position: 'bottom', 
      showConfirmButton: true, 
      confirmButtonText: 'Accept', 
      timer: 10000 
    });
  }

  goPremium() {
    this.alert.modal({ 
      title: '🌟 Go Premium', 
      html: '<p>Unlock advanced features for $9.99/mo.</p>', 
      confirmButtonText: 'Subscribe', 
      confirmButtonColor: '#8b5cf6', 
      showCancelButton: true 
    });
  }

  updateAvailable() {
    this.alert.fire({ 
      title: 'Update Available v1.2', 
      html: '<ul style="text-align:left;"><li>✨ New UI</li><li>🚀 Faster Load</li></ul>', 
      confirmButtonText: 'Install Update' 
    });
  }

  aiAssistant() {
    this.alert.offcanvas({ 
      title: '🤖 AI Assistant', 
      html: '<div style="height: 200px; border: 1px solid #ccc; border-radius: 8px; margin-bottom: 10px; display:flex; align-items:center; justify-content:center; color:gray;">Chat history here...</div>', 
      position: 'right', 
      fields: [{id: 'msg', type: 'text', placeholder: 'Ask me anything...'}] 
    });
  }

  eventCalendar() {
    this.alert.fire({ 
      title: 'Event Calendar', 
      size: 'sm', 
      fields: [{ 
        id: 'date', 
        type: 'date', 
        label: 'Pick an Event', 
        datePickerConfig: { 
          events: [
            { date: '2026-07-20', type: 'holiday', color: '#ef4444' }, 
            { date: '2026-07-22', type: 'meeting', color: '#3b82f6' }
          ] 
        } 
      }], 
      confirmButtonText: 'Confirm' 
    });
  }

}
