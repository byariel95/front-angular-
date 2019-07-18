import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent }from './components/note-list/note-list.component'
import {NoteFormComponent} from './components/note-form/note-form.component'


const routes: Routes = [
  {
    path: '',
    component: NoteListComponent
  },
  {
    path: 'note',
    component:  NoteListComponent
  },
  {
    path: 'note/create',
    component: NoteFormComponent
  },
  {
    path: 'note/edit/:id',
    component: NoteFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
