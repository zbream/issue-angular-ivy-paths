import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyLibModule } from 'my-lib';
import { MyLibSecondModule } from 'my-lib-second';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibModule,
    MyLibSecondModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
