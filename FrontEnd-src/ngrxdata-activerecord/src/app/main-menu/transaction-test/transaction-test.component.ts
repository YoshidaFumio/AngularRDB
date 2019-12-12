import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { FormGroup, FormControl,FormBuilder , Validators} from '@angular/forms';
import { Transaction , TransactionService } from '../../models/transaction';

export const transactionData: string =`
begin
    Employee.transaction do
      m1 = Organization.new
      m1['org_code'] = "500"
      m1['org_name'] = "新規事業部"
      m1.save!
      e1 = Employee.new
      e1['organization_id'] = m1.id
      e1['position_id'] = 4
      e1['branch_id'] = 1
      e1['first_name'] = "光"
      e1['last_name'] = "伊藤"
      e1['mail_address'] = "hikaru.itou@tamanegidesign.co.jp"
      e1.save!
    end
    @retstatus = "OK"
    @retmessage ="success"
  rescue => e
    @retstatus = "NG"
    @retmessage = "Error occured (#{e.class})" 
end
`

@Component({
  selector: 'app-transaction-test',
  templateUrl: './transaction-test.component.html',
  styleUrls: ['./transaction-test.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class TransactionTestComponent implements OnInit {
  transactionForm:FormGroup ;

  constructor(
    private fb: FormBuilder,
    private navroute : Router ,
    private transactionService : TransactionService
    ) { }

  ngOnInit() {
    this.createForm() ;
  }

  createForm() {
    this.transactionForm = this.fb.group ({
      transactionText: [transactionData]
    });
  }

  onCancel(){
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/home'],extra);
  }

  onGo(){
    let extra:NavigationExtras = { } ;
    let trans = new Transaction ;
    trans.status = "" ;
    trans.message = "" ;
    trans.request = this.transactionForm.value['transactionText'] ;
    this.transactionService.add(trans) ;
    this.navroute.navigate(['/transactionresult'],extra);
  }
}
