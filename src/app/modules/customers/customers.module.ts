import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ListComponent } from './list/list.component';
import { CustomerComponent } from './customer/customer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerModalComponent } from './customer-modal/customer-modal.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';


@NgModule({
  declarations: [ParentComponent, ListComponent, CustomerComponent, CustomerModalComponent, CustomerDetailsComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
  ],
  entryComponents: [CustomerModalComponent]
})
export class CustomersModule { }
