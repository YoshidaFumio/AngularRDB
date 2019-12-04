//
// Position Service
//
// Facade of command(create , read , update , delete) and  selector$(entities)
//
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Position } from './position' ;

@Injectable({ providedIn: 'root' })
export class PositionService extends EntityCollectionServiceBase<Position> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Position', serviceElementsFactory);
  }
}
