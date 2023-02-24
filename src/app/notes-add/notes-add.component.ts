import { Component } from '@angular/core';
import {NoteService} from "../note.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-notes-add',
  templateUrl: './notes-add.component.html',
  styleUrls: ['./notes-add.component.css']
})
export class NotesAddComponent {
  newNote: string = '';
  isFormVisible: boolean = true;

  constructor(private noteService: NoteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.isFormVisible = data['showForm'];
    });
  }


  addNote() {
    if (this.newNote) {
      this.noteService.addNote(this.newNote);
      this.newNote = '';
      this.router.navigate(['/'])
    }
  }

}
