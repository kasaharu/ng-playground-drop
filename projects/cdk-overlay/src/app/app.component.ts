import { Component } from '@angular/core';
import { ConfirmService } from './confirm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cdk-overlay';
  constructor(private readonly confirmService: ConfirmService) {}

  showConfirm() {
    this.confirmService.show('あなたは幸せですか？');
  }
}
