import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
