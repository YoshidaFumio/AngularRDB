//
// Finder Service
//
// Facade of command(create , read , update , delete) and  selector$(entities)
//
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Finder } from './finder' ;

@Injectable({ providedIn: 'root' })
export class FinderService extends EntityCollectionServiceBase<Finder> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Finder', serviceElementsFactory);
  }
}
