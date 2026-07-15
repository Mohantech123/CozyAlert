import { AlertOptions, AlertResult } from './types';
import { injectStyles } from './styles';
import { createAlertDom } from './dom';

export class CozyAlert {
  static fire(options: AlertOptions | string, text?: string, icon?: AlertOptions['icon']): Promise<AlertResult> {
    if (typeof document === 'undefined') {
      return Promise.resolve({ isConfirmed: false, isDenied: false, isDismissed: true });
    }
    injectStyles();

    let parsedOptions: AlertOptions;
    
    if (typeof options === 'string') {
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

  static success(title: string, text?: string): Promise<AlertResult> {
    return CozyAlert.fire({
      title,
      text,
      type: 'success',
      icon: 'success'
    });
  }

  static error(title: string, text?: string): Promise<AlertResult> {
    return CozyAlert.fire({
      title,
      text,
      type: 'error',
      icon: 'error'
    });
  }

  static warning(title: string, text?: string): Promise<AlertResult> {
    return CozyAlert.fire({
      title,
      text,
      type: 'warning',
      icon: 'warning'
    });
  }

  static info(title: string, text?: string): Promise<AlertResult> {
    return CozyAlert.fire({
      title,
      text,
      type: 'info',
      icon: 'info'
    });
  }

  static confirm(title: string, text?: string, confirmButtonText: string = 'Confirm'): Promise<AlertResult> {
    return CozyAlert.fire({
      title,
      text,
      type: 'question',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText
    });
  }

  static toast(options: AlertOptions): Promise<AlertResult> {
    return CozyAlert.fire({
      ...options,
      toast: true,
      position: options.position || 'top-right',
      showConfirmButton: options.showConfirmButton ?? false,
      timer: options.timer ?? 3000
    });
  }

  static modal(options: AlertOptions): Promise<AlertResult> {
    return CozyAlert.fire({
      showCloseButton: true,
      showIcon: false,
      width: '32rem', // Wider default
      ...options
    });
  }

  static offcanvas(options: AlertOptions): Promise<AlertResult> {
    return CozyAlert.fire({
      showCloseButton: true,
      showIcon: false,
      offcanvas: true,
      position: options.position || 'right',
      ...options
    });
  }

  static async queue(steps: AlertOptions[]): Promise<{ isCompleted: boolean; values: any[] }> {
    const totalSteps = steps.length;
    const progressSteps = steps.map((_, i) => (i + 1).toString());
    const collectedValues: any[] = [];

    for (let i = 0; i < totalSteps; i++) {
      const stepOptions = steps[i];
      const result = await CozyAlert.fire({
        ...stepOptions,
        progressSteps,
        currentProgressStep: i,
        showCancelButton: true,
        confirmButtonText: i === totalSteps - 1 ? 'Finish' : 'Next',
        cancelButtonText: 'Cancel'
      });

      if (result.isDismissed || result.isDenied) {
        return { isCompleted: false, values: collectedValues };
      }

      collectedValues.push(result.value);
    }

    return { isCompleted: true, values: collectedValues };
  }
}
