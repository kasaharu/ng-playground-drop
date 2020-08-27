import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Injector } from '@angular/core';
import { ConfirmDialogComponent, OVERLAY_REF } from './confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cdk-overlay';

  constructor(private readonly injector: Injector, private readonly overlay: Overlay) {}

  showConfirm() {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true,
    });

    // MEMO: Injector.create()
    //     : this.injector?
    const portal = new ComponentPortal(
      ConfirmDialogComponent,
      null,
      Injector.create([{ provide: OVERLAY_REF, useValue: overlayRef }], this.injector),
    );

    overlayRef.attach(portal);
  }
}
