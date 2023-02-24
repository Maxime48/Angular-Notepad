import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesModifyComponent } from './notes-modify.component';

const routes: Routes = [
  {
    path: '',
    component: NotesModifyComponent,
    data: { showForm: true }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesModifyRoutingModule { }
