import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { EntityAdapter , createEntityAdapter } from '@ngrx/entity';
import { Organizationjoin } from './models/organizationjoin';
import { SelectionModel } from '@angular/cdk/collections';
import { IdSelector, Comparer } from '@ngrx/entity';

export function organizationjoinSelectid (organizationjoin:Organizationjoin)
 {  return organizationjoin.joinid }

export function sortBranch(a: { branch_code: string }, b: { branch_code: string }): number {
  return a.branch_code.localeCompare(b.branch_code);
}
export function sortOrganization(a: { org_code: string }, b: { org_code: string }): number {
  return a.org_code.localeCompare(b.org_code);
}

export function sortPosition(a: { pos_code: string }, b: { pos_code: string }): number {
  return a.pos_code.localeCompare(b.pos_code);
}

const entityMetadata: EntityMetadataMap = {
  Branch: {
    sortComparer: sortBranch ,
    entityDispatcherOptions : { optimisticDelete : false}
  },
  Organization: {
    sortComparer: sortOrganization ,
    entityDispatcherOptions : { optimisticDelete : false}
  },
  Position: {
    sortComparer: sortPosition ,
    entityDispatcherOptions : { optimisticDelete : false}
  },
  Employee: {
    entityDispatcherOptions : { optimisticDelete : false}
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
