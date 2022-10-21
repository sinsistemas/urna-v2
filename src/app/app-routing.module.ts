import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  {path: '', component:SplashComponent},
  {path: 'splash/:id', component:SplashComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
