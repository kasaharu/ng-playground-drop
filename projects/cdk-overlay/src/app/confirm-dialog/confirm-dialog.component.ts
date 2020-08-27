import { Component, OnInit, ChangeDetectionStrategy, InjectionToken, Inject } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';

// MEMO: InjectionToken
export const OVERLAY_REF = new InjectionToken<OverlayRef>('OVERLAY_REF');

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent implements OnInit {
  constructor(@Inject(OVERLAY_REF) private readonly overlayRef: OverlayRef) {}

  ngOnInit(): void {}

  close() {
    this.overlayRef.dispose();
  }
}
