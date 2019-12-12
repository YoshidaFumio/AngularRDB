//
// Transaction Service
//
//
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Transaction } from './transaction' ;

@Injectable({ providedIn: 'root' })
export class TransactionService extends EntityCollectionServiceBase<Transaction> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Transaction', serviceElementsFactory);
  }
}
