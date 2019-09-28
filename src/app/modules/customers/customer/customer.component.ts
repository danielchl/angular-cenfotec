import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CustomerModalComponent } from "../customer-modal/customer-modal.component";
import { Router } from '@angular/router';

@Component({
  selector: "cenfo-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.scss"]
})
export class CustomerComponent implements OnInit {
  @Input()
  public customer: any;
  @Output()
  public readonly success: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output()
  public readonly deletedUser: EventEmitter<any> = new EventEmitter<any>()

  constructor(private readonly modalService: NgbModal, private readonly route:Router) {}

  ngOnInit() {}

  public openCustomerModal(isEdit: boolean = true) {
    const modalRef = this.modalService.open(CustomerModalComponent);
    modalRef.componentInstance.isEdit = isEdit;
    modalRef.componentInstance.customer = this.customer;
    modalRef.componentInstance.success.subscribe(
      () => {
        this.success.emit(true);
      }
    )
  }

  public goToDetails():void { 
    this.route.navigate(['customers/details', this.customer.id])
  }

  public delete(): void {
    this.deletedUser.emit(this.customer.id)
  }
}
