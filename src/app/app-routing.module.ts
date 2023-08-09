import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomecomponentComponent } from './welcomecomponent/welcomecomponent.component';
import { CustomercomponentComponent } from './customercomponent/customercomponent.component';
import { OrdercomponentComponent } from './ordercomponent/ordercomponent.component';
import { AboutcomponentComponent } from './aboutcomponent/aboutcomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';

const routes: Routes = [
  {path:'',component:WelcomecomponentComponent},
  {path:'welcome',component:WelcomecomponentComponent},
  {path:'customer',component:CustomercomponentComponent},
  {path:'order',component:OrdercomponentComponent},
  {path:'about',component:AboutcomponentComponent},
  {path:'login',component:LogincomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
