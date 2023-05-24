import { Component } from '@angular/core';
import { DataBaseService } from 'src/app/Services/database.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  constructor(private DBS: DataBaseService) {
    this.GetNotes();
  }

  search!: string;
  notes: any = [];

  GetNotes() {
    this.DBS.Get().subscribe((data) => {
      this.notes = data[0].notes;
    });
  }

  Search() {
    // Haciendo un buscador de notas
    this.notes.map((note: any) => {
      if (note.title.toLowerCase() == this.search.toLowerCase()) {
        console.log(note);
      }
    });
  }
}
