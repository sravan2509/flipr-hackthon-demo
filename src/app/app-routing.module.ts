import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UpdatesComponent } from './updates/updates.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { GraphComponent } from './graph/graph.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: 'hospitals', component: HospitalsComponent },
  { path: 'contacts', component: ContactsComponent },
  {path:'graph',component:GraphComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
