import { Component } from '@angular/core';
import {NoteService} from "../note.service";
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router"

@Component({
  selector: 'app-notes-modify',
  templateUrl: './notes-modify.component.html',
  styleUrls: ['./notes-modify.component.css']
})
export class NotesModifyComponent {
  modifyNote: string | null = '';
  oldNote: string | null = '';
  isFormVisible: boolean = true;

  constructor(private noteService: NoteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.oldNote=this.route.snapshot.paramMap.get('oldNote');
    this.modifyNote = this.oldNote;
    this.route.data.subscribe(data => {
      this.isFormVisible = data['showForm'];
    });
  }

  editNote() {
    if (this.modifyNote) {
      if(this.modifyNote != this.oldNote) {
        this.noteService.modifyNote(this.modifyNote, this.oldNote);
      }
      this.modifyNote = '';
      this.oldNote = '';
      this.router.navigate(['/'])
    }
  }

}
