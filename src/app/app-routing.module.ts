import { RouterModule, Routes } from '@angular/router';

import { terms } from './Terms';
import { contactus } from './Contactus';
import { homepage } from './Home';
import { donaciones } from './Donaciones';
import { notFound } from './NotFound';

const routes: Routes = 
[
  { path: '', component: homepage},
  { path: 'terms', component: terms},
  { path: 'contactus', component: contactus},
  { path: 'donateus', component: donaciones},
  { path: '**', component: notFound}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
