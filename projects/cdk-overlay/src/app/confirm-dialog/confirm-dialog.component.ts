import { OverlayRef } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, InjectionToken } from '@angular/core';
import { ConfirmService } from '../confirm.service';

export type ConfirmData = {
  message: string;
};

// MEMO: InjectionToken
export const OVERLAY_REF = new InjectionToken<OverlayRef>('OVERLAY_REF');
export const OVERLAY_DATA = new InjectionToken<ConfirmService>('OVERLAY_DATA');

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  constructor(
    @Inject(OVERLAY_REF) private readonly overlayRef: OverlayRef,
    @Inject(OVERLAY_DATA) private readonly confirmData: ConfirmData,
  ) {}
  readonly result$ = new EventEmitter<boolean>();

  get message(): string {
    return this.confirmData.message;
  }

  close(result = false) {
    this.overlayRef.dispose();
    this.result$.emit(result);
    this.result$.complete();
  }
}
