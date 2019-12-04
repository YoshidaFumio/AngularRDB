//
// Calculation Service
//
// Facade of command(create , read , update , delete) and  selector$(entities)
//
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Calculation } from './calculation' ;

@Injectable({ providedIn: 'root' })
export class CalculationService extends EntityCollectionServiceBase<Calculation> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Calculation', serviceElementsFactory);
  }
}
