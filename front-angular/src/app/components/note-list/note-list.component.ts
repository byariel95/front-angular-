import { Component, OnInit } from '@angular/core';
import {NoteService} from '../../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(){

    this.noteService.getNotes()
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
