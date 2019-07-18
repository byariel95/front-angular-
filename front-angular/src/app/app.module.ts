import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteFormComponent } from './components/note-form/note-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NoteListComponent,
    NoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
