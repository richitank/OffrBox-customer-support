import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { customerFeedbackComponent } from './auth/customerFeedback/customerFeedback.component';
import { StoreCustomerFeedback } from './auth/storeCustomerFeedback.service';
import { HttpClientModule } from '@angular/common/http'

import { Routes, RouterModule } from '@angular/router';

const appRoutes = [
  {path: '', component: customerFeedbackComponent}, 
];

@NgModule({
  declarations: [
    AppComponent,
    customerFeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [StoreCustomerFeedback],
  bootstrap: [AppComponent]
})
export class AppModule { }
