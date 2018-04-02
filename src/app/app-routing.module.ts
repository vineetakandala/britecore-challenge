import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import {LinesComponent} from './lines/lines.component';
import {UnderConstructionComponent} from './under-construction/under-construction.component';
import {ErrorPageComponent} from './error-page/error-page.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'policies', redirectTo: '/under-construction' },
  { path: 'claims', redirectTo: '/under-construction' },
  { path: 'contacts', redirectTo: '/under-construction' },
  { path: 'data', redirectTo: '/under-construction' },
  { path: 'lines', component: LinesComponent },
  { path: 'all-modules', redirectTo: '/under-construction' },
  { path: 'under-construction', component: UnderConstructionComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
