import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ListComponent } from './list/list.component';
import { CustomerComponent } from './customer/customer.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ParentComponent, ListComponent, CustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
