//
// Branch Service
//
// Facade of command(create , read , update , delete) and  selector$(entities)
//
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Branch } from './branch' ;

@Injectable({ providedIn: 'root' })
export class BranchService extends EntityCollectionServiceBase<Branch> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Branch', serviceElementsFactory);
  }
}
