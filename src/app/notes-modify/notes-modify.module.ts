import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesModifyRoutingModule } from './notes-modify-routing.module';
import { NotesModifyComponent } from './notes-modify.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    NotesModifyComponent
  ],
  imports: [
    CommonModule,
    NotesModifyRoutingModule,
    FormsModule
  ]
})
export class NotesModifyModule {

}
