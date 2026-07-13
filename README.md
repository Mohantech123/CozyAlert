<div align="center">
  <h1>✨ CozyAlert</h1>
  <p><strong>A beautifully designed, highly customizable, and 100% Framework Agnostic popup & toast library.</strong></p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
  [![Framework Agnostic](https://img.shields.io/badge/Framework-Agnostic-ff69b4.svg)]()
</div>

---

CozyAlert is a modern replacement for standard JavaScript `alert()`, `confirm()`, and `prompt()`. It features smooth animations, metadata-driven forms, advanced regex validation, sizing presets, offcanvas drawers, and step-by-step queues.

Because it manipulates the DOM directly, it perfectly supports **React, Vue, Angular, Next.js, Svelte**, and Vanilla JS without any extra wrapper libraries.

## 📦 Installation

```bash
npm install cozyalert
# or
yarn add cozyalert
```

## 🚀 Quick Start

```javascript
import Alert from 'cozyalert';
import 'cozyalert/dist/index.css';

// Simple Success Alert
Alert.success('Saved!', 'Your profile was successfully updated.');
```

---

## ⚛️ Framework Integration

CozyAlert is bundled in ESM and CJS formats and bypasses Virtual DOMs. This means it works instantly inside your favorite framework components without wrappers!

### React & Next.js
```tsx
import Alert from 'cozyalert';

export default function Profile() {
  const handleSave = async () => {
    const result = await Alert.confirm('Save changes?');
    if (result.isConfirmed) Alert.success('Saved!');
  };
  return <button onClick={handleSave}>Save</button>;
}
```

### Vue 3 & Nuxt
```vue
<script setup>
import Alert from 'cozyalert';

const showDrawer = () => {
  Alert.offcanvas({ title: 'Settings', position: 'right' });
};
</script>

<template>
  <button @click="showDrawer">Open Settings</button>
</template>
```

### Angular
```typescript
import { Component } from '@angular/core';
import Alert from 'cozyalert';

@Component({
  selector: 'app-root',
  template: `<button (click)="warn()">Delete</button>`
})
export class AppComponent {
  warn() {
    Alert.warning('Are you sure?');
  }
}
```

---

## 📖 Component Reference

### 1. Basic Alerts
CozyAlert provides several shorthand methods for standard alert types:

```javascript
Alert.success('Great Job', 'You did it!');
Alert.error('Oops...', 'Something went wrong!');
Alert.warning('Are you sure?', 'You cannot revert this.');
Alert.info('Did you know?', 'CozyAlert is fully responsive.');
Alert.confirm('Delete file?', 'This action cannot be undone.', 'Yes, delete it').then(res => {
  if (res.isConfirmed) console.log('File deleted!');
});
```

### 2. Toast Notifications
Toasts are non-blocking alerts that slide in and automatically disappear. 

```javascript
Alert.toast({
  title: 'Message sent successfully',
  icon: 'success',
  position: 'top-right', // top-right, top-left, bottom-right, bottom-left, top, bottom, center
  timer: 3000
});
```

### 3. Advanced Modals
You can create incredibly complex modals using sizing presets, custom HTML, static backdrops, and asynchronous chaining.

**Static Modal (Forced User Action):**
```javascript
Alert.modal({
  title: 'Mandatory Update',
  text: 'You must click the "Update Now" button to continue.',
  allowOutsideClick: false, // Disables clicking the backdrop to close
  allowEscapeKey: false,    // Disables the ESC key
  showCloseButton: false,   // Hides the 'X' button
  confirmButtonText: 'Update Now'
});
```

**Scrolling Modal with Custom HTML:**
```javascript
Alert.modal({
  title: 'Terms of Service',
  size: 'lg', // Applies the Large width preset (512px)
  html: '<div style="height: 300px; overflow-y: auto; text-align: left;"><p>Here are the terms...</p></div>',
  showCancelButton: true,
  confirmButtonText: 'I Accept'
});
```

**Asynchronous Chaining (Async/Await):**
```javascript
const runFlow = async () => {
  const step1 = await Alert.fire({ title: 'Step 1', text: 'Ready?', showCancelButton: true });
  if (!step1.isConfirmed) return;
  
  const step2 = await Alert.fire({ 
    title: 'Step 2', 
    fields: [{ id: 'color', type: 'select', label: 'Favorite Color', options: [{label:'Red', value:'red'}] }] 
  });
  if (!step2.isConfirmed) return;

  Alert.success('Done!', `You picked ${step2.value.color}!`);
};
runFlow();
```

### 4. Offcanvas Drawers
Slide-in panels from the edge of the screen. Perfect for forms and settings menus.

```javascript
Alert.offcanvas({
  title: 'Edit Profile',
  position: 'right', // left, right, top, bottom
  size: 'md',        // xs, sm, md, lg, xl
  html: '<p>Update your settings here.</p>'
});
```

### 5. Step-by-Step Queues (Wizards)
Launch multiple modals in a sequence. CozyAlert automatically handles the "Next" buttons and progress bar indicators.

```javascript
Alert.queue([
  { title: 'Step 1', text: 'Welcome to the setup wizard.' },
  { title: 'Step 2', fields: [{ id: 'name', type: 'text', label: 'Your Name' }] },
  { title: 'Step 3', text: 'All done!', icon: 'success' }
]).then(res => {
  if (res.isCompleted) {
    console.log('Wizard finished! Data:', res.values);
  }
});
```

### 6. Advanced Usage: `preConfirm` Hooks
If you need to make an API call before the alert closes, use the `preConfirm` function. It automatically applies a loading spinner to the Confirm button and prevents closure until the Promise resolves!

```javascript
Alert.fire({
  title: 'Enter your email',
  fields: [{ id: 'email', type: 'email', required: true }],
  showCancelButton: true,
  preConfirm: () => {
    // Return a Promise that resolves when the API call finishes
    return new Promise(resolve => {
      setTimeout(() => resolve(true), 2000); 
    });
  }
}).then(res => {
  if (res.isConfirmed) {
    Alert.success('Email verified!');
  }
});
```

---

## 📋 Form & Field Reference

CozyAlert has a powerful internal form generator. Pass an array of `fields` to automatically build beautiful forms inside Modals or Drawers.

```javascript
Alert.fire({
  title: 'User Registration',
  showCancelButton: true,
  fields: [
    { id: 'username', type: 'text', label: 'Username', required: true, pattern: '^[a-zA-Z0-9_]{3,16}$', validationMessage: '3-16 chars only.' },
    { id: 'email', type: 'email', label: 'Email Address', required: true },
    { id: 'role', type: 'select', label: 'Role', options: [{label: 'Admin', value: 'admin'}, {label: 'User', value: 'user'}] },
    { id: 'bio', type: 'textarea', label: 'Short Bio', placeholder: 'Tell us about yourself...' },
    { id: 'terms', type: 'checkbox', label: 'I accept the terms', required: true },
    { id: 'avatar', type: 'file', label: 'Upload Avatar', accept: 'image/*' }
  ]
}).then(res => {
  if (res.isConfirmed) {
    console.log(res.value.username); // Access data via the field 'id'
  }
});
```

### Supported Field Properties
| Property | Type | Description |
|---|---|---|
| `id` | `string` | **Required.** The key that will be returned in the resulting JSON object. |
| `type` | `enum` | `'text'`, `'email'`, `'password'`, `'number'`, `'textarea'`, `'select'`, `'checkbox'`, `'file'` |
| `label` | `string` | The label text displayed above the input field. |
| `placeholder` | `string` | Placeholder text inside the input. |
| `defaultValue` | `any` | Initial value of the field. |
| `required` | `boolean` | If true, prevents submission until the field has data. |
| `options` | `Array` | Dropdown options for `'select'` types. Format: `[{label: 'A', value: 'a'}]`. |
| `pattern` | `string` | Regex string for advanced validation (e.g. `^\\d+$`). |
| `validationMessage`| `string` | Custom error message shown if `pattern` fails. |

---

## ⚙️ API Configuration Options

Here are the global properties you can pass into `Alert.fire()`, `Alert.modal()`, or `Alert.offcanvas()`:

| Option | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | `undefined` | The large title at the top of the popup. |
| `text` | `string` | `undefined` | The paragraph text below the title. |
| `html` | `string \| HTMLElement` | `undefined` | Custom HTML payload (overrides `text`). |
| `icon` / `type` | `string` | `undefined` | Built-in icons: `'success'`, `'error'`, `'warning'`, `'info'`, `'question'`. |
| `size` | `string` | `'md'` | Presets: `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'`. Applies to Modals and Offcanvas. |
| `showConfirmButton` | `boolean` | `true` | Show/hide the main Confirm button. |
| `showCancelButton` | `boolean` | `false` | Show/hide the Cancel button. |
| `showCloseButton` | `boolean` | `true` | Show/hide the 'X' icon in the top right. |
| `allowOutsideClick` | `boolean` | `true` | Close the popup when the backdrop is clicked. |
| `allowEscapeKey` | `boolean` | `true` | Close the popup when the Escape key is pressed. |
| `timer` | `number` | `undefined` | Auto-close the popup after `X` milliseconds. |
| `preConfirm` | `Function` | `undefined` | Async hook. Runs before confirm. Displays a loading spinner on the button. |

---

## 🎨 Theming & CSS Variables

CozyAlert is 100% styled using CSS Variables on the `:root`. This means you can reskin the entire library in seconds by redefining these variables in your global CSS.

```css
:root {
  /* Colors */
  --ca-bg: #ffffff;
  --ca-text: #1e293b;
  --ca-border: #e2e8f0;
  --ca-overlay-bg: rgba(15, 23, 42, 0.5);

  /* Brand Colors */
  --ca-primary: #3b82f6;
  --ca-primary-hover: #2563eb;
  
  /* Layout */
  --ca-radius: 12px;
  --ca-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

### Dark Mode
CozyAlert natively ships with a `.cozyalert-theme-dark` class. To force dark mode, you can pass `theme: 'dark'` into any alert, OR simply add `<body class="dark">` to your HTML, and CozyAlert will automatically switch to dark mode aesthetics!
