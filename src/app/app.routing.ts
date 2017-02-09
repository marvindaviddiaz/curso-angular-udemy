
import { HomeComponent } from './home-component.component';
import { UserComponent } from './user/user.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: 'user', component: UserComponent },
  { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);