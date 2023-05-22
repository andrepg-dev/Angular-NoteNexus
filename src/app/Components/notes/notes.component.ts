import { Component } from '@angular/core';
import { DataBaseService } from 'src/app/Services/database.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  constructor(private DBS: DataBaseService) {
    this.getUser();
  }

  DataUser = {
    userName: '',
    user: '',
  };

  UserNotes: any = []

  getUser() {
    this.DBS.Get().subscribe((data) => {
      this.DataUser.userName = data[0].userName;
      this.DataUser.user = data[0].user;
      data[0].notes.map((notes) => {
        this.UserNotes.push(notes);
      });
    });
  }
}
