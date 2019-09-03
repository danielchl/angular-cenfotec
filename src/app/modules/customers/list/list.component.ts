import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../core/data-services/customer.service';

@Component({
  selector: 'cenfo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public customers: any[];

  constructor(
    private readonly customerService: CustomerService
  ) { }

  ngOnInit() {
    this.loadCustomers();
  }

  private loadCustomers():void {
    this.customers =  this.customerService.getCustomers();
  }

}
