import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PathErrorComponent } from './path-error/path-error.component';
import { BranchListComponent } from './main-menu/branch-list/branch-list.component';
import { BranchDetailComponent } from './main-menu/branch-list/branch-detail/branch-detail.component';
import { BranchNewentryComponent } from './main-menu/branch-list/branch-newentry/branch-newentry.component';
import { OrganizationListComponent } from './main-menu/organization-list/organization-list.component';
import { OrganizationDetailComponent } from './main-menu/organization-list/organization-detail/organization-detail.component';
import { OrganizationNewentryComponent } from './main-menu/organization-list/organization-newentry/organization-newentry.component';
import { PositionListComponent } from './main-menu/position-list/position-list.component';
import { PositionDetailComponent } from './main-menu/position-list/position-detail/position-detail.component';
import { PositionNewentryComponent } from './main-menu/position-list/position-newentry/position-newentry.component';
import { EmployeeListComponent } from './main-menu/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './main-menu/employee-list/employee-detail/employee-detail.component';
import { EmployeeNewentryComponent } from './main-menu/employee-list/employee-newentry/employee-newentry.component';
import { BranchSelectComponent } from './main-menu/employee-list/branch-select/branch-select.component';
import { OrganizationJoinSelectComponent } from './main-menu/organization-join-select/organization-join-select.component';
import { OrganizationJoinListComponent } from './main-menu/organization-join-select/organization-join-list/organization-join-list.component';
import { OrganizationJoinDetailComponent } from './main-menu/organization-join-select/organization-join-list/organization-join-detail/organization-join-detail.component';
import { TransactionTestComponent } from './main-menu/transaction-test/transaction-test.component';
import { TransactionResultComponent } from './main-menu/transaction-test/transaction-result/transaction-result.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainMenuComponent,
  },
  {
    path: 'branchlist',
    component: BranchListComponent,
  },
  {
    path:'branchdetail/:id' ,
    component: BranchDetailComponent
  },
  {
    path:'branchnewentry' ,
    component: BranchNewentryComponent
  },
  {
    path: 'organizationlist',
    component: OrganizationListComponent,
  },
  {
    path: 'organizationdetail/:id',
    component: OrganizationDetailComponent,
  },
  {
    path: 'organizationnewentry',
    component: OrganizationNewentryComponent,
  },
  {
    path: 'positionlist',
    component: PositionListComponent,
  },
  {
    path: 'positiondetail/:id',
    component: PositionDetailComponent
  },
  {
    path: 'positionnewentry',
    component: PositionNewentryComponent
  },
  {
    path: 'employeelist/:id',
    component: EmployeeListComponent,
  },
  {
      path: 'employeedetail/:id',
      component: EmployeeDetailComponent
  },
  {
    path: 'employeenewentry/:id',
    component: EmployeeNewentryComponent
  },
  {
    path: 'branchselect',
    component: BranchSelectComponent
  },
  {
    path: 'organizationjoinselect',
    component: OrganizationJoinSelectComponent
  },
  {
    path: 'organizationjoinlist/:id',
    component: OrganizationJoinListComponent
  },
  {
    path: 'organizationjoindetail/:id',
    component: OrganizationJoinDetailComponent
  },
  {
    path: 'transactiontest',
    component: TransactionTestComponent
  },
  {
    path: 'transactionresult',
    component: TransactionResultComponent
  },

  {
    path: '**',
    component: PathErrorComponent
  }  
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
