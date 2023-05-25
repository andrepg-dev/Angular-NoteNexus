import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareDataUserService {
  @Output() Compatir_ER_Notas: EventEmitter<any> = new EventEmitter();
 }
