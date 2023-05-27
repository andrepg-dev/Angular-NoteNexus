import { Component } from '@angular/core';
import { DataBaseService } from 'src/app/Services/database.service';
import { ShareDataUserService } from '../share-data-user.service';
import { ShareNotesService } from 'src/app/Services/share-notes.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent {
  FavoriteNotes: any = [];

  constructor(
    private DTB: DataBaseService,
    private shareNotes: ShareNotesService
  ) {
    this.Get();
  }

  // Get all favorite notes

  Get() {
    this.shareNotes.notes.subscribe((notes) => {
      let result: string[] = [];

      notes.map((value: any) => {
        if (value.favorite == true) {
          result = [...result, value];
        }
      });

      this.FavoriteNotes = result;
    });

    this.DTB.Get().subscribe((notes) => {
      const allNotes = notes[0].notes;

      this.shareNotes.notes.emit(allNotes);
    });
  }
}
