import { Component, OnInit , ChangeDetectionStrategy, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute ,Router, NavigationExtras} from '@angular/router' ;
import { FormGroup, FormControl,FormBuilder , Validators} from '@angular/forms';
import { Transaction , TransactionService } from '../../../models/transaction';
import { Organization , OrganizationService } from '../../../models/organization';

@Component({
  selector: 'app-transaction-result',
  templateUrl: './transaction-result.component.html',
  styleUrls: ['./transaction-result.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class TransactionResultComponent implements OnInit {
  transaction$: Observable <Transaction[]> ;

  constructor( private transactionService : TransactionService,
               private organizationService :OrganizationService,
               private navroute : Router 
             ) { 
               this.transaction$ = transactionService.entities$ ;
  }

  ngOnInit() {
  }

  onClose(){
    this.organizationService.getAll() ; /* reread for Transaction UPDate */
    let extra:NavigationExtras = { }
    this.navroute.navigate(['/home'],extra);
  }

}
