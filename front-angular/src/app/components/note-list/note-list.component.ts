import { Component, OnInit } from '@angular/core';
import {NoteService} from '../../services/note.service';
import {Note} from '../../model/Note.model';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes: Note[] = [];
  
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(){

    this.noteService.getNotes()
    .subscribe(
      res => {
        this.notes = res
      },
      err => console.log(err)
    )
  }

  deleteNote(id : string){
    this.noteService.deleteNote(id)
    .subscribe(
      res => {
        this.getNotes();
      },
      err => console.log(err)
    )

  }

}
