import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from 'src/app/Services/database.service';
import { ShareNotesService } from 'src/app/Services/share-notes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  FormTitleContent!: FormGroup;
  notes: any = [];
  showForm = false;

  constructor(
    private DBS: DataBaseService,
    private fb: FormBuilder,
    private Notes: ShareNotesService
  ) {
    this.FormTitleContent = this.fb.group({
      title: [''],
      content: ['', [Validators.required]],
      important: [false],
      favorite: [false],
    });
  }

  ngOnInit(): void {
    // Getting data from the service
    this.DBS.Get().subscribe((res: { notes: any }[]) => {
      this.notes = res[0].notes;
      // Sending data to the service
      this.Notes.notes.emit(this.notes);

      // Sorting notes by date
      this.sortNotesByDate();
      // Getting data from the service
      this.getNotes();
    });

    // Ajusting height of textarea
    const textTarea = document.querySelector('textarea') as HTMLTextAreaElement;
    const join = document.querySelector('.join') as HTMLTextAreaElement;

    textTarea.addEventListener('input', () => {
      textTarea.style.height = 'auto';
      textTarea.style.height = `${textTarea.scrollHeight}px`;
    });

    document.addEventListener('click', (event) => {
      if (!join.contains(event.target as Node)) {
        this.showForm = false;
      }
    });
  }

  getNotes() {
    this.Notes.notes.subscribe((data: any) => {
      this.notes = data;
    });
  }

  ShowForm() {
    this.showForm = true;
  }

  SaveNote() {
    // Restarting height of textarea
    const textTarea = document.querySelector('textarea') as HTMLTextAreaElement;
    textTarea.style.height = 'auto';

    this.DBS.Post(this.FormTitleContent.value).subscribe((res: any) => {
      // Sending data to the service
      this.notes.unshift(res);
      this.Notes.notes.emit(this.notes);

      this.showForm = false;
      this.FormTitleContent.reset();
    });
  }

  sortNotesByDate() {
    this.notes.sort((a: any, b: any) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return dateB.getTime() - dateA.getTime();
    });
  }
}
