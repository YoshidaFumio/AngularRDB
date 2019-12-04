import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material/material.module';


import { HttpClient, HttpClientModule } from '@angular/common/http' ;
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import { DefaultDataServiceConfig,EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { defaultDataServiceConfig } from './dataservice-config';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './initstate/counter.reducer';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PathErrorComponent } from './path-error/path-error.component';
import { BranchListComponent } from './main-menu/branch-list/branch-list.component';
import { PositionListComponent } from './main-menu/position-list/position-list.component';
import { EmployeeListComponent } from './main-menu/employee-list/employee-list.component';
import { BranchDetailComponent } from './main-menu/branch-list/branch-detail/branch-detail.component';
import { PositionDetailComponent } from './main-menu/position-list/position-detail/position-detail.component';
import { EmployeeDetailComponent } from './main-menu/employee-list/employee-detail/employee-detail.component';
import { OrganizationListComponent } from './main-menu/organization-list/organization-list.component';
import { OrganizationDetailComponent } from './main-menu/organization-list/organization-detail/organization-detail.component';
import { BridgeComponent } from './share-components/bridge/bridge.component';
import { DialogOkNgComponent } from './share-components/dialog-ok-ng/dialog-ok-ng.component';
import { DialogComponent } from './share-components/dialog/dialog.component';
import { OrganizationNewentryComponent } from './main-menu/organization-list/organization-newentry/organization-newentry.component';
import { PositionNewentryComponent } from './main-menu/position-list/position-newentry/position-newentry.component';
import { BranchNewentryComponent } from './main-menu/branch-list/branch-newentry/branch-newentry.component';
import { EmployeeNewentryComponent } from './main-menu/employee-list/employee-newentry/employee-newentry.component';
import { BranchSelectComponent } from './main-menu/employee-list/branch-select/branch-select.component';
import { OrganizationJoinSelectComponent } from './main-menu/organization-join-select/organization-join-select.component';
import { OrganizationJoinListComponent } from './main-menu/organization-join-select/organization-join-list/organization-join-list.component';
import { OrganizationJoinDetailComponent } from './main-menu/organization-join-select/organization-join-list/organization-join-detail/organization-join-detail.component';
import { TransactionTestComponent } from './main-menu/transaction-test/transaction-test.component';
import { TransactionResultComponent } from './main-menu/transaction-test/transaction-result/transaction-result.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    PathErrorComponent,
    BranchListComponent,
    PositionListComponent,
    EmployeeListComponent,
    BranchDetailComponent,
    PositionDetailComponent,
    EmployeeDetailComponent,
    OrganizationListComponent,
    OrganizationDetailComponent,
    BridgeComponent,
    DialogComponent,
    DialogOkNgComponent,
    OrganizationNewentryComponent,
    PositionNewentryComponent,
    BranchNewentryComponent,
    EmployeeNewentryComponent,
    BranchSelectComponent,
    OrganizationJoinSelectComponent,
    OrganizationJoinListComponent,
    OrganizationJoinDetailComponent,
    TransactionTestComponent,
    TransactionResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    /* StoreModule.forRoot( { count: counterReducer}),*/
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects]),
    EntityDataModule.forRoot(entityConfig)

  ],
  providers: [{ provide: DefaultDataServiceConfig,useValue: defaultDataServiceConfig}],
  entryComponents:[
    DialogComponent,
    DialogOkNgComponent
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
