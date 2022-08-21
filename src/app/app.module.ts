import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu'
import {MatStepperModule} from '@angular/material/stepper';
import { HeaderUserComponent } from './header-user/header-user/header-user.component';
import { ResultTestComponent } from './result-test/result-test/result-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderUserComponent,
    ResultTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
