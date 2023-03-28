import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailesComponent } from './detailes/detailes.component';
import { GuardAdminGuard } from './guards/guard-admin.guard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'about',component:AboutComponent,canActivate:[GuardAdminGuard]},
{path:'profile', children:[
  {path:'view',component:ViewComponent},
  {path:'details',component:DetailesComponent},
  {path:'**',component:PageNotFoundComponent}

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
