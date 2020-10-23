import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdDirective } from './directives/ad.directive';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './components/hero-job-ad/hero-job-ad.component';

@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
