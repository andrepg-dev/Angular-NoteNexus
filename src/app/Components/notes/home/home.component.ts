import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from 'src/app/Services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  FormTitleContent!: FormGroup;

  constructor(private DBS: DataBaseService, private fb: FormBuilder) {
    this.FormTitleContent = this.fb.group({
      title: [''],
      content: ['', [Validators.required]],
      important: [false],
      favorite: [false],
    });

    this.getUser();
  }

  DataUser = {
    userName: '',
    user: '',
  };

  ngOnInit(): void {
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

  UserNotes: any = [];

  getUser() {
    this.DBS.Get().subscribe((data) => {
      this.DataUser.userName = data[0].userName;
      this.DataUser.user = data[0].user;
      data[0].notes.map((notes) => {
        this.UserNotes.push(notes);
      });
    });
  }

  showForm = false;
  ShowForm() {
    this.showForm = true;
  }

  SaveNote() {
    // Restarting height of textarea
    const textTarea = document.querySelector('textarea') as HTMLTextAreaElement;
    textTarea.style.height = 'auto';

    this.DBS.Post(this.FormTitleContent.value).subscribe((res) => {
      this.UserNotes.push(res);
      this.showForm = false;
      this.FormTitleContent.reset();
    });
  }
}
