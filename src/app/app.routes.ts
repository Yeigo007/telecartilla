import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {ProgressComponent} from './pages/progress/progress.component';
import {NopagefoundComponent} from './nopagefound/nopagefound.component';
import {UploadComponent} from './files/upload/upload.component';
import {CampaniasComponent} from './files/campanias/campanias.component';
import {RadioComponent} from './files/radio/radio.component';

const appRoutes: Routes = [
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'upload' , component: UploadComponent},
  {path: 'campanias' , component: CampaniasComponent},
  {path: 'progress' , component: ProgressComponent},
  {path: 'radio' , component: RadioComponent},
  {path: '' , redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**' , component: NopagefoundComponent}
];

export const APP_ROPUTES = RouterModule.forRoot(appRoutes, { useHash: true});

