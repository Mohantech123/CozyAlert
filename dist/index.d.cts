type AlertType = 'success' | 'error' | 'warning' | 'info' | 'question' | 'confirm';
type FieldType = 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select' | 'checkbox' | 'file' | 'date' | 'time' | 'datetime' | 'daterange' | 'month' | 'year' | 'color' | 'radio';
type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'bottom' | 'center' | 'left' | 'right';
interface FormField {
    id: string;
    type: FieldType;
    label?: string;
    placeholder?: string;
    defaultValue?: any;
    required?: boolean;
    options?: {
        label: string;
        value: string;
    }[];
    className?: string;
    accept?: string;
    pattern?: RegExp | string;
    validationMessage?: string;
    datePickerConfig?: DatePickerConfig;
    timePickerConfig?: TimePickerConfig;
}
interface DatePickerConfig {
    mode?: 'single' | 'multiple' | 'range' | 'month' | 'year';
    minDate?: string | Date;
    maxDate?: string | Date;
    disabledDates?: (string | Date)[];
    disableWeekends?: boolean;
    locale?: string;
    timezone?: string;
    events?: {
        date: string | Date;
        type: 'holiday' | 'exam' | 'meeting' | 'birthday' | 'deadline';
        color?: string;
    }[];
    inline?: boolean;
    mobileLayout?: boolean;
}
interface TimePickerConfig {
    format?: '12h' | '24h';
    style?: 'default' | 'clock' | 'scroll';
    enableSeconds?: boolean;
    bookingSlots?: string[];
    mobileLayout?: boolean;
}
interface AlertResult {
    isConfirmed: boolean;
    isDenied: boolean;
    isDismissed: boolean;
    value?: Record<string, any>;
}
interface AlertOptions {
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
    fields?: FormField[];
    preConfirm?: (values: Record<string, any>) => any;
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

declare class CozyAlert {
    static closeAll(): void;
    static fire(options: AlertOptions | string, text?: string, icon?: AlertOptions['icon']): Promise<AlertResult>;
    static success(title: string, text?: string): Promise<AlertResult>;
    static error(title: string, text?: string): Promise<AlertResult>;
    static warning(title: string, text?: string): Promise<AlertResult>;
    static info(title: string, text?: string): Promise<AlertResult>;
    static confirm(title: string, text?: string, confirmButtonText?: string, confirmButtonColor?: string): Promise<AlertResult>;
    static toast(options: AlertOptions | string, type?: AlertType, position?: Position): Promise<AlertResult>;
    static modal(options: AlertOptions): Promise<AlertResult>;
    static offcanvas(options: AlertOptions): Promise<AlertResult>;
    static queue(steps: AlertOptions[]): Promise<{
        isCompleted: boolean;
        values: any[];
    }>;
}

export { type AlertOptions, type AlertResult, type AlertType, CozyAlert, type DatePickerConfig, type FieldType, type FormField, type Position, type TimePickerConfig, CozyAlert as default };
