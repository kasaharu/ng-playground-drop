import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AdComponent } from '../../ad.component';

@Component({
  selector: 'app-hero-job-ad',
  templateUrl: './hero-job-ad.component.html',
  styleUrls: ['./hero-job-ad.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;
}
