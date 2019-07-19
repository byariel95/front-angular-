import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Note} from '../model/Note.model';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  BaseUrl: string = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  getNotes (): Observable<Note []> { 
    return this.http.get<Note []>(`${this.BaseUrl}/api/notes`);
  };

  getNote (id: string): Observable<Note> {
    return this.http.get<Note>(`${this.BaseUrl}/api/notes/${id}`);

  };

  createNote (note: Note): Observable<Note>{
    return this.http.post<Note>(`${this.BaseUrl}/api/notes`,note);

  };

  updateNote(id: string,note: Note): Observable<Note>{
    return this.http.put<Note>(`${this.BaseUrl}/api/notes/${id}`,note);

  };

  deleteNote(id: string ): Observable<Note>{
    return this.http.delete<Note>(`${this.BaseUrl}/api/notes/${id}`);
  };
// gdfgdg
  
}
