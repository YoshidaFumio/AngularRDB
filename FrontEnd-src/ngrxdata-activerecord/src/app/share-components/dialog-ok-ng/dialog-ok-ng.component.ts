import { Component, OnInit , Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog' ;

@Component({
  selector: 'app-dialog-ok-ng',
  templateUrl: './dialog-ok-ng.component.html',
  styleUrls: ['./dialog-ok-ng.component.css']
})
export class DialogOkNgComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any,
    public matDialogRef : MatDialogRef<DialogOkNgComponent>) { }


  onClickOkButton():void {
    // OKボタンが押されたときは「OK」を呼び出し元に渡す。
    this.matDialogRef.close('OK');
  }
  onClickCancelButton():void {
    // CANCELボタンが押されたときは「Cancel」を呼び出し元に渡す。
    this.matDialogRef.close('Cancel');
  }
}
