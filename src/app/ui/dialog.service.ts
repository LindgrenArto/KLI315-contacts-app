import { Injectable } from '@angular/core';
import {ErrorDialogComponent} from './error-dialog/error-dialog.component';
import {MatDialog} from '@angular/material';
import {config} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DialogService {


  constructor(private dialog: MatDialog) {

  }

  getError(msg: string) {
    this.dialog.open(ErrorDialogComponent,{data: msg });
  }
}
