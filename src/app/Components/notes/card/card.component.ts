import { Component, Input } from '@angular/core';
import { NoteInterface } from 'src/app/Interfaces/interface';
import { DataBaseService } from 'src/app/Services/database.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {

  @Input() Notes: any = [
    {
      date: String,
      content: String,
      title: String,
      important: Boolean,
      favorite: Boolean,
      _id: String,
    },
  ];

  constructor(private DBS: DataBaseService) {}

  delete(noteSelected: NoteInterface) {
    if (confirm('¿Are you sure to delete this note?')) {
      this.DBS.Delete(noteSelected._id).subscribe(() => {
        this.Notes = this.Notes.filter(
          (note: NoteInterface) => note._id !== noteSelected._id
        );
      });
    }
  }
}
