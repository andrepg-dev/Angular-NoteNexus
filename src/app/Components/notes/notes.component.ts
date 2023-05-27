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
    this.DTB.Get().subscribe((data) => {
      const allNotes = data[0].notes;
      this.notes = allNotes;
      this.shareNotes.notes.emit(allNotes);
    });
  }

  Search(array: NoteInterface[], args: string) {
    if (!args) {
      return array;
    }

    let result: any = [];

    for (const value of array) {
      if (
        value.content.toLowerCase().indexOf(args.toLowerCase()) != -1 ||
        value.title.toLowerCase().indexOf(args.toLowerCase()) != -1
      ) {
        result = [...result, value];
      }
    }
    this.shareNotes.notes.emit(result);
    return result;
  }
}
