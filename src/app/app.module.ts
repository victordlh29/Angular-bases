import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { heroModule } from './heroes/hero/hero.module';
import { listModule } from './heroes/list/list.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    heroModule,
    listModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
