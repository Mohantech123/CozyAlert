import { Injectable, NgZone } from '@angular/core';
import Alert, { AlertOptions, AlertResult, AlertType, Position } from './core/index';

@Injectable({
  providedIn: 'root'
})
export class CozyPopupService {

  constructor(private ngZone: NgZone) { }

  /**
   * Close all active alerts immediately
   */
  public closeAll(): void {
    Alert.closeAll();
  }

  /**
   * Fire a highly customizable alert popup
   */
  public fire(options: AlertOptions | string, text?: string, icon?: AlertOptions['icon']): Promise<AlertResult> {
    return this.ngZone.runOutsideAngular(() => 
      Alert.fire(options, text, icon).then(result => this.ngZone.run(() => result))
    );
  }

  public success(title: string, text?: string): Promise<AlertResult> {
    return this.ngZone.runOutsideAngular(() => 
      Alert.success(title, text).then(result => this.ngZone.run(() => result))
    );
  }

  public error(title: string, text?: string): Promise<AlertResult> {
    return this.ngZone.runOutsideAngular(() => 
      Alert.error(title, text).then(result => this.ngZone.run(() => result))
    );
  }

  public warning(title: string, text?: string): Promise<AlertResult> {
    return this.ngZone.runOutsideAngular(() => 
      Alert.warning(title, text).then(result => this.ngZone.run(() => result))
    );
  }

  public info(title: string, text?: string): Promise<AlertResult> {
    return this.ngZone.runOutsideAngular(() => 
      Alert.info(title, text).then(result => this.ngZone.run(() => result))
    );
  }

  public confirm(title: string, text?: string, confirmButtonText: string = 'Confirm'): Promise<AlertResult> {
    return this.ngZone.runOutsideAngular(() => 
      Alert.confirm(title, text, confirmButtonText).then(result => this.ngZone.run(() => result))
    );
  }

  public toast(options: AlertOptions | string, type?: AlertType, position?: Position): Promise<AlertResult> {
    return this.ngZone.runOutsideAngular(() => 
      Alert.toast(options, type, position).then(result => this.ngZone.run(() => result))
    );
  }

  public modal(options: AlertOptions): Promise<AlertResult> {
    return this.ngZone.runOutsideAngular(() => 
      Alert.modal(options).then(result => this.ngZone.run(() => result))
    );
  }

  public offcanvas(options: AlertOptions): Promise<AlertResult> {
    return this.ngZone.runOutsideAngular(() => 
      Alert.offcanvas(options).then(result => this.ngZone.run(() => result))
    );
  }

  public queue(steps: AlertOptions[]): Promise<{ isCompleted: boolean; values: any[] }> {
    return this.ngZone.runOutsideAngular(() => 
      Alert.queue(steps).then(result => this.ngZone.run(() => result))
    );
  }
}
