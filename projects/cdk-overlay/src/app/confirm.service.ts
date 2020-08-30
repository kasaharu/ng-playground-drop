import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ConfirmDialogComponent, OVERLAY_REF, OVERLAY_DATA, ConfirmData } from './confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmService {
  constructor(private readonly injector: Injector, private readonly overlay: Overlay) {}

  show(message: string): Promise<boolean> {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });

    // MEMO: Injector.create()
    //     : this.injector?
    const portal = new ComponentPortal(
      ConfirmDialogComponent,
      null,
      Injector.create(
        [
          { provide: OVERLAY_REF, useValue: overlayRef },
          { provide: OVERLAY_DATA, useValue: { message } as ConfirmData },
        ],
        this.injector,
      ),
    );

    const compRef = overlayRef.attach(portal);
    return compRef.instance.result$.pipe(finalize(() => overlayRef.dispose())).toPromise();
  }
}
