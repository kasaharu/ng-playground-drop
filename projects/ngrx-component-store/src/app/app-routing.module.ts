import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './features/app-shell/ui/top/top.component';
import { CounterComponent } from './features/counter/ui/counter/counter.component';

const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopComponent },
  { path: 'counter', component: CounterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
