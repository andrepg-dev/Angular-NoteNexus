import { Component } from '@angular/core';
import { DataBaseService } from 'src/app/Services/database.service';
import { ShareDataUserService } from '../share-data-user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent {
  FavoriteNotes: any = [];

  constructor(
    private DTB: DataBaseService,
    private ShareDataUser: ShareDataUserService
  ) {
    this.Get();
  }

  // Get all favorite notes

  Get() {
    this.DTB.Get().subscribe((res) => {
      res[0].notes.map((notes) => {
        const allNotes = notes;

        if (allNotes.favorite == true) {
          this.FavoriteNotes.push(notes);
        }
      });
    });
  }
}
