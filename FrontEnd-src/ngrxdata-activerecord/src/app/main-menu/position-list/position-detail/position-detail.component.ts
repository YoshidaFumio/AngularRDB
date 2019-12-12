import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { Position ,  PositionService  } from '../../../models/position';
import { FormGroup, FormControl , FormBuilder , Validators} from '@angular/forms';
import { MatDialog } from '@angular/material' ;
import { DialogComponent } from '../../../share-components/dialog/dialog.component';
import { DialogOkNgComponent } from '../../../share-components/dialog-ok-ng/dialog-ok-ng.component';

@Component({
  selector: 'app-position-detail',
  templateUrl: './position-detail.component.html',
  styleUrls: ['./position-detail.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class PositionDetailComponent implements OnInit {
  position$: Observable <Position[]> ;
  id: number ;
  curPosition : Position ;
  positionTable : Position[] ;
  row: number ;
  positionForm:FormGroup ;
  alertDialogResult = '';
  errMessage = [] ;
  errCount :number ;

  constructor(
    private route: ActivatedRoute , //for get router paramaeter
    private navroute : Router ,
    private positionService: PositionService, 
    private fb: FormBuilder ,
    private matdialog:MatDialog  
    ) {
        this.position$ = positionService.entities$ ;
  }

  ngOnInit() {
    this.route.params.subscribe(res =>{
      this.id = res['id']
    });

  }

  getCurrent(curorg:Position[]) {
    this.positionTable = curorg ;
    this.curPosition = this.positionTable.find (
             (target) =>{ 
                 return (target.id == this.id) ;
             });
    this.row = this.positionTable.findIndex(
              (target)=> {
                return (target.id == this.id) ;
              });

    this.createForm() ;
  }

  onCancel(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/positionlist'],extra);
  }

  onDelete(){
    let dialog = this.matdialog.open(DialogOkNgComponent, {
      'data' : {'title': '削除確認' , 'message' : '削除してもよいですか？'},
      'height' : '200px',
      'width' : '280px',
      'disableClose' : true
  　});

    // ボタンの結果を取得
    dialog.afterClosed().subscribe( (result:any) => {
          // 結果をセット
      this.alertDialogResult = result;
      if (this.alertDialogResult=='OK') {
        this.positionService.delete(this.curPosition.id) ;
        let extra:NavigationExtras = { }
        this.navroute.navigate(['/positionlist'],extra);           
      }      
    });
  }

  onSave() {
    /* if (!this.checkForm()){ return } */
    let orgdata = new Position ;
    orgdata.id = this.curPosition.id ;
    orgdata.pos_code = this.positionForm.value['code'] ;
    orgdata.pos_name = this.positionForm.value['name'] ;
    orgdata.lock_version = this.curPosition.lock_version ;
    this.positionService.update(orgdata) ;
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/positionlist'],extra);
  }

  createForm() {
    this.positionForm = this.fb.group ({
      code: [this.curPosition.pos_code,[Validators.required]] ,
      name: [this.curPosition.pos_name,[Validators.required]]
    });
  }

  checkForm():boolean {
    this.errMessage = [] ;
    this.errCount = 0 ;
    if  (this.positionForm.value['code']='' ){
      this.errMessage[this.errCount] = (this.errCount+1) +".コードが入力されていません。";
      this.errCount += 1 ;
    }
    if  (this.positionForm.value['name']='' ){
      this.errMessage[this.errCount] = (this.errCount+1) +".名前が入力されていません。";
      this.errCount += 1 ;
    }
    // エラーダイアログの表示
    if (this.errCount > 0) {
      let dialog2 = this.matdialog.open(DialogComponent, {
        'data' : {'title': 'エラー' , 'message' : this.errMessage},
　　　　/*        'height' : '240px',*/
        'width' : '280px',
        'disableClose' : false
      });
      dialog2.afterClosed().subscribe( result => {
        console.log("error occur")
        return　false ;
      })
    }
    else{
      return true ;
    }

  }

}
