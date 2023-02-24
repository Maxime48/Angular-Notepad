import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesAddRoutingModule } from './notes-add-routing.module';
import { NotesAddComponent } from './notes-add.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    NotesAddComponent
  ],
  imports: [
    CommonModule,
    NotesAddRoutingModule,
    FormsModule
  ]
})
export class NotesAddModule {

}
