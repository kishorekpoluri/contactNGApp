import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListContactsComponent} from './list-contacts/list-contacts.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [{ path: 'contacts', component: ListContactsComponent },
                        { path: 'contacts/edit/:name', component: EditContactComponent },
                        { path: 'contacts/new', component: NewContactComponent },
                        { path: '', redirectTo:'contacts', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
