import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
import { UsermedicinelistComponent } from './usermedicinelist/usermedicinelist.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomeComponent } from './home/home.component';
import { AboutsusComponent } from './aboutsus/aboutsus.component';
import { ContactusComponent } from './contactus/contactus.component';



const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {"path":"landingpage",component:LandingpageComponent},
  {"path":"userlist",component:UserlistComponent},
  {"path":"userform",component:FormComponent},
  {"path":"userlogin",component:LoginComponent},
  {"path":"details/:id",component:UserdetailsComponent},
  {"path":"edituser/:id",component:EditUserComponent},
  {"path":"adminform",component:AdFormComponent},
  {"path":"adminlogin",component:AdLoginComponent},
  {"path":"adminlist",component:AdminlistComponent},
  {"path":"editadmin/:id",component:EditAdminComponent},
  {"path":"medicinelist",component:MedicineComponent},
  {"path":"addmedicine",component:MedicineaddComponent},
  {"path":"editmedicine/:id",component:MedicineeditComponent},
  {"path":"addcart",component:CartComponent},
  {"path":"payment",component:PaymentComponent},
  {"path":"success",component:SuccessComponent},
  {"path":"usermedicinelist",component:UsermedicinelistComponent},
  {"path":"Home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
