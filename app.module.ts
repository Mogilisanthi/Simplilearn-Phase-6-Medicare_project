import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdFormComponent } from './ad-form/ad-form.component';
import { AdLoginComponent } from './ad-login/ad-login.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';

import { MedicineComponent } from './medicinelist/medicine.component';
import { MedicineaddComponent } from './medicineadd/medicineadd.component';
import { MedicineeditComponent } from './medicineedit/medicineedit.component';
import { CartComponent } from './cart/cart.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
import { UsermedicinelistComponent } from './usermedicinelist/usermedicinelist.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomeComponent } from './home/home.component';
import { AboutsusComponent } from './aboutsus/aboutsus.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent,
    FormComponent,
    LoginComponent,
    UserdetailsComponent,
    UserlistComponent,
    AdFormComponent,
    AdLoginComponent,
    AdminlistComponent,
    EditAdminComponent,
   
    MedicineComponent,
        MedicineaddComponent,
        MedicineeditComponent,
        CartComponent,
        PaymentComponent,
        SuccessComponent,
        UsermedicinelistComponent,
        LandingpageComponent,
        HomeComponent,
        AboutsusComponent,
        ContactusComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
