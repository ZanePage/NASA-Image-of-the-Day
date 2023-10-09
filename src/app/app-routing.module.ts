import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { YesterdayComponent } from './yesterday/yesterday.component';
import { AnyComponent } from './any/any.component';

const appRoutes: Routes = [
  { path: '', component: TodayComponent },
  { path: 'yesterday', component: YesterdayComponent },
  { path: ':date', component: AnyComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
