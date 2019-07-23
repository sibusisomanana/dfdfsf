import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { BookingComponent } from './booking/booking.component';
import { SubmitComponent } from './submit/submit.component';
import { ContactComponent } from './contact/contact.component';
import { GalaryComponent } from './galary/galary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    BookingComponent,
    SubmitComponent,
    ContactComponent,
    GalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
