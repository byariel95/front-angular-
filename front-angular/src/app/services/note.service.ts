import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  getNotes () { }
  getNote (id){}
  createNote (note){}
  updateNote(id,note){}
  deleteNote(id){}

  
}
