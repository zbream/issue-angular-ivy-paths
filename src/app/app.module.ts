import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyLibFirstModule } from 'my-lib-first';
import { MyLibSecondModule } from 'my-lib-second';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibFirstModule,
    MyLibSecondModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
