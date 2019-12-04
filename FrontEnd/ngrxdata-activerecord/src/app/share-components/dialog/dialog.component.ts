import { Component, OnInit , Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material' ;

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
  export class DialogComponent implements OnInit {

    isError: boolean ;

    constructor(
      @Inject(MAT_DIALOG_DATA) public data : any,
      public matDialogRef : MatDialogRef<DialogComponent>) { }

    ngOnInit() {
      if (this.data['title'] == 'エラー'){
        this.isError = true ;
      }
      else{
        this.isError = false ;
      }
    }
     

    onClick():void {
      // 
      this.matDialogRef.close();
    }  
}
