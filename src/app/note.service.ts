import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: { text: string, completed: boolean }[] = [
    { text: 'Acheter du lait', completed: false },
    { text: 'Appeler le médecin', completed: true },
    { text: 'Faire du sport', completed: false }
  ];


  constructor() { }

  getNotes() {
    return this.notes;
  }

  addNote(text: string) {
    this.notes.push({ text: text, completed: false });
  }

  deleteNote(note: { text: string, completed: boolean }) {
    const index = this.notes.indexOf(note);
    if (index >= 0) {
      this.notes.splice(index, 1);
    }
  }

  toggleCompleted(note: { text: string, completed: boolean }) {
    note.completed = !note.completed;
  }

  modifyNote(newNote: string, oldNote: string | null){
    let index=0;
    let found=false;
    this.notes.forEach(note => {
      if(note.text==oldNote && !found){
        note.text = newNote;
        this.notes[index]=note;
      }
      index++;
    });
  }

}
