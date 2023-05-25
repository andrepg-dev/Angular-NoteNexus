import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareNotesService {
  @Output() notes: EventEmitter<any> = new EventEmitter();
  constructor() {}
}
