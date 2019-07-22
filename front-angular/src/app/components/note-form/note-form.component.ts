import { Component, OnInit } from '@angular/core';
import { Note } from '../../model/Note.model';
import {NoteService} from '../../services/note.service';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  note: Note ={
    _id: '',
    title: '',
    content: '',
    author: '',
  }

  edit: Boolean = false;

  constructor(
    private noteService : NoteService,
    private router : Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    const params =  this.activatedRoute.snapshot.params;
    if (params) {
      this.noteService.getNote(params.id)
      .subscribe(
        res => {
          console.log(res);
          this.note = res;
          this.edit = true;
        }
      )
      
    }
  }

  submitNote(){
    this.noteService.createNote(this.note)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/']);
      } ,
      err => console.log(err)
    );
    console.log(this.note);
  }

  updateNote(){
    this.noteService.updateNote(this.note._id,this.note) 
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/note']);
      },
      err => console.log(err)
    );
   }

}
