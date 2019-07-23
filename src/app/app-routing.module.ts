import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { BookingComponent } from './booking/booking.component';
import { SubmitComponent } from './submit/submit.component';
import { ContactComponent } from './contact/contact.component';
import { GalaryComponent } from './galary/galary.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'services',component:ServicesComponent},
  {path:'booking',component:BookingComponent},
  {path:'submit',component:SubmitComponent},
  {path:'contact',component:ContactComponent},
  {path:'galary',component:GalaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
