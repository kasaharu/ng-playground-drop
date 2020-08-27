import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [AppComponent, ConfirmDialogComponent],
  imports: [BrowserModule, AppRoutingModule, OverlayModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
