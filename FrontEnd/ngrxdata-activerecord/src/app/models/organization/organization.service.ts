//
// Branch Service
//
// Facade of command(create , read , update , delete) and  selector$(entities)
//
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Organization } from './organization' ;

@Injectable({ providedIn: 'root' })
export class OrganizationService extends EntityCollectionServiceBase<Organization> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Organization', serviceElementsFactory);
  }
}
