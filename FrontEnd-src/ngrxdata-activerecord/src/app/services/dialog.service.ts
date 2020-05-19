import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../share-components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public matdialog : MatDialog) 
  { }

  // Error Message display

  errorDisplay (title:string ,errorMessage: string[]){
    let dialog2 = this.matdialog.open(DialogComponent, {
      'data' : {'title': title , 'message' : errorMessage},
/*        'height' : '240px',*/
      'width' : '280px',
      'disableClose' : true
    });
    dialog2.afterClosed().subscribe( result => {
      console.log("error occur")
      return
    })
  }
}
