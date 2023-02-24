import { Component } from '@angular/core';
import {NoteService} from "../note.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {

  notes: { text: string; completed: boolean; }[] = [];
  ngOnInit() {
    this.notes = this.noteService.getNotes()
  }

  constructor(private noteService: NoteService) { }

  deleteNote(note: { text: string, completed: boolean }) {
    this.noteService.deleteNote(note);
  }

  toggleCompleted(note: { text: string, completed: boolean }) {
    this.noteService.toggleCompleted(note);
  }

}
