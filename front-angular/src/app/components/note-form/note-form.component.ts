import { Component, OnInit } from '@angular/core';
import { Note } from '../../model/Note.model';
import {NoteService} from '../../services/note.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  note: Note ={
    title: '',
    content: '',
    author: '',
  }

  constructor(
    private noteService : NoteService,
    private router : Router
    ) { }

  ngOnInit() {
  }

  submitNote(){
    this.noteService.createNote(this.note)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/']);
      } ,
      err => console.log(err)
    )
    console.log(this.note);
  }

}
