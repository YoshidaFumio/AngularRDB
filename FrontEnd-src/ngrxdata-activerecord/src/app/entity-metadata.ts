import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { EntityAdapter , createEntityAdapter } from '@ngrx/entity';
import { Organizationjoin } from './models/organizationjoin';
import { SelectionModel } from '@angular/cdk/collections';
import { IdSelector, Comparer } from '@ngrx/entity';

export function organizationjoinSelectid (organizationjoin:Organizationjoin)
 {  return organizationjoin.joinid }

const entityMetadata: EntityMetadataMap = {
  Branch: {},
  Organization: {},
  Position: {},
  Employee: {
  },
  Organizationjoin: {
  //  selectId: (organizationjoin: Organizationjoin) => organizationjoin.joinid 
      selectId : organizationjoinSelectid 
  },
  Calculation: {},
  Finder: {} ,
  Transaction: {}
};

const pluralNames = {
  Branch: 'Branches'
  };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
