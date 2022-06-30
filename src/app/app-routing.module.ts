import { RouterModule, Routes } from '@angular/router';

import { terms } from './Terms';
import { contactus } from './Contactus';
import { homepage } from './Home';
import { donaciones } from './Donaciones';
import { notFound } from './NotFound';
import { aboutus } from './Aboutus';
import { login } from './Login';
import { SoloAdminComponent } from "./solo-admin";

const routes: Routes = 
[
  { path: '', component: homepage},
  { path: 'terms', component: terms},
  { path: 'contactus', component: contactus},
  { path: 'donateus', component: donaciones},
  { path: 'aboutus', component: aboutus},
  { path: 'login', component: login},
  { path: 'admin', component: SoloAdminComponent},
  { path: '**', component: notFound}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
