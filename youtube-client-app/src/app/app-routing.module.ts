import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './auth/pages/home/home.component';
import { InformationComponent } from './youtube/pages/information/information.component';
import { ErrorComponent } from './auth/pages/error/error.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthComponent } from './auth/pages/auth/auth.component';
import { MainComponent } from './youtube/pages/main/main.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent,
    canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent },
  { path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard] },
  { path: '#about',
      component: MainComponent,
      canActivate: [AuthGuard] },
  { path: 'data',
      component: MainComponent,
      canActivate: [AuthGuard] },
  { path: 'information/:id',
    component: InformationComponent,
    canActivate: [AuthGuard] },
    { path: '**', component: ErrorComponent,
      canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
