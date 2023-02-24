import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from '../notes/notes.component';

const routes: Routes = [
  { path: '', component: NotesComponent },
  { path: 'add', loadChildren: () => import('../notes-add/notes-add.module').then(m => m.NotesAddModule) },
  { path: 'modify/:oldNote', loadChildren: () => import('../notes-modify/notes-modify.module').then(m => m.NotesModifyModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
