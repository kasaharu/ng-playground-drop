import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero-job-ad',
  templateUrl: './hero-job-ad.component.html',
  styleUrls: ['./hero-job-ad.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroJobAdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
