import { Component } from '@angular/core';
import { NoteInterface } from 'src/app/Interfaces/interface';
import { DataBaseService } from 'src/app/Services/database.service';
import { ShareNotesService } from 'src/app/Services/share-notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  constructor(
    private DTB: DataBaseService,
    private shareNotes: ShareNotesService
  ) {
    this.GetNotes();
  }

  search!: string;
  notes: any = [];

  GetNotes() {
    this.DTB.Get().subscribe((data: any) => {
      const allNotes = [...data[0].notes];
      this.notes = allNotes;
      this.shareNotes.notes.emit(allNotes);
    });
  }

  Search(array: NoteInterface[], args: string) {
    if (!args) {
      this.sortNotesByDate();
      this.shareNotes.notes.emit(this.notes);
      return this.notes;
    }

    let result: any = [];

    for (const value of array) {
      if (value.content.indexOf(args) != -1) {
        result = [...result, value];
      }
    }
    this.shareNotes.notes.emit(result);
    return result;
  }

  sortNotesByDate() {
    this.notes.sort((a: any, b: any) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return dateB.getTime() - dateA.getTime();
    });
  }
}
