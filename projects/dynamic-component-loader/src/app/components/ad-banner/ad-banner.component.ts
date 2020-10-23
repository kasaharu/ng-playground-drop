import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
