import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdItem } from '../../ad-item';
import { AdComponent } from '../../ad.component';
import { AdDirective } from '../../directives/ad.directive';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdBannerComponent implements OnInit, OnDestroy {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  @Input() ads!: AdItem[];
  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  interval: any;
  currentAdIndex = -1;

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  getAds() {
    this.interval = setInterval(() => {
      console.log('test');
    }, 3000);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory);
    componentRef.instance.data = adItem.data;
  }
}
