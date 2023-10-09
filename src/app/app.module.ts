import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TodayComponent } from './today/today.component';
import { YesterdayComponent } from './yesterday/yesterday.component';
import { AnyComponent } from './any/any.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    YesterdayComponent,
    AnyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
