//
// Organizationjoin Service
//
// Facade of command(create , read , update , delete) and  selector$(entities)
//
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Organizationjoin } from './organizationjoin' ;

@Injectable({ providedIn: 'root' })
export class OrganizationjoinService extends EntityCollectionServiceBase<Organizationjoin> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Organizationjoin', serviceElementsFactory);
  }
}
