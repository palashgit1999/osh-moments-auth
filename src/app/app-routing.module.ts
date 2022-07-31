import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentiCationGuard } from './guards/authenti-cation.guard';

const routes: Routes = [
  {path: '', loadChildren:()=>import('../app/_layouts/public-layouts/home/home.module').then(m=>m.HomeModule)},
  {path: 'dashboard',canActivate:[AuthentiCationGuard], loadChildren:()=>import('../app/_layouts/private-layouts/dashboard/dashboard.module').then(m=>m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
