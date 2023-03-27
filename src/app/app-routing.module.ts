import { DetailsComponent } from './details/details.component';
import { ViewComponent } from './view/view.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'footer',component:FooterComponent},
  {path:'profile',
  children:[
    {path:'view',component:ViewComponent},
    {path:'details',component:DetailsComponent}
  ]},
  {path:'contact',redirectTo:'',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
