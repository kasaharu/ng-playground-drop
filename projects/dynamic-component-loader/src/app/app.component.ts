import { Component, OnInit } from '@angular/core';
import { AdItem } from './ad-item';
import { AdService } from './services/ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private adService: AdService) {}
  title = 'dynamic-component-loader';
  ads!: AdItem[];

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
