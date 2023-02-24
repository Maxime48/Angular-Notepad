import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesAddComponent } from './notes-add.component';

const routes: Routes = [
  {
    path: '',
    component: NotesAddComponent,
    data: { showForm: true }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesAddRoutingModule { }
