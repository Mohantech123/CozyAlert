export type AlertType =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'question'
  | 'confirm';

export type FieldType = 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select' | 'checkbox' | 'file' | 'date' | 'time' | 'datetime' | 'daterange' | 'month' | 'year' | 'color' | 'radio';

// Expanded position type for Toasts and Off-Canvas
export type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'bottom' | 'center' | 'left' | 'right';

export interface FormField {
  id: string;
  type: FieldType;
  label?: string;
  placeholder?: string;
  defaultValue?: any;
  required?: boolean;
  options?: { label: string; value: string }[];
  className?: string;
  accept?: string;
  pattern?: RegExp | string;
  validationMessage?: string;
  datePickerConfig?: DatePickerConfig;
  timePickerConfig?: TimePickerConfig;
}

export interface DatePickerConfig {
  mode?: 'single' | 'multiple' | 'range' | 'month' | 'year';
  minDate?: string | Date;
  maxDate?: string | Date;
  disabledDates?: (string | Date)[];
  disableWeekends?: boolean;
  locale?: string; // e.g. 'ta-IN', 'ar-SA', 'en-US'
  timezone?: string; // e.g. 'America/New_York'
  events?: { date: string | Date; type: 'holiday' | 'exam' | 'meeting' | 'birthday' | 'deadline'; color?: string }[];
  inline?: boolean;
}

export interface TimePickerConfig {
  format?: '12h' | '24h';
  style?: 'default' | 'clock';
  enableSeconds?: boolean;
  bookingSlots?: string[]; // e.g. ['09:00 AM', '09:30 AM']
}

export interface AlertResult {
  isConfirmed: boolean;
  isDenied: boolean;
  isDismissed: boolean;
  value?: Record<string, any>; // Collected form values mapping field 'id' to its value
}

export interface AlertOptions {
  title?: string;
  text?: string;
  type?: AlertType;
  icon?: AlertType;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full' | 'screen';
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
  showCloseButton?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
  timer?: number;
  timerProgressBar?: boolean;
  html?: string | HTMLElement;
  showIcon?: boolean;
  toast?: boolean;
  offcanvas?: boolean;
  position?: Position;
  width?: string;
  theme?: 'light' | 'dark' | 'auto';
  allowOutsideClick?: boolean;
  allowEscapeKey?: boolean;
  fields?: FormField[]; // Array of dynamic fields
  preConfirm?: (values: Record<string, any>) => any; // Optional hook
  
  // Internal state for queues
  currentProgressStep?: number;
  progressSteps?: string[];

  customClass?: string | {
    container?: string;
    popup?: string;
    header?: string;
    title?: string;
    closeButton?: string;
    icon?: string;
    image?: string;
    htmlContainer?: string;
    input?: string;
    inputLabel?: string;
    validationMessage?: string;
    actions?: string;
    confirmButton?: string;
    denyButton?: string;
    cancelButton?: string;
    loader?: string;
    footer?: string;
    timerProgressBar?: string;
    formContainer?: string;
  };
}