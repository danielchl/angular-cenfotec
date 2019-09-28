import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../../../core/data-services/customer.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CustomerModalComponent } from "../customer-modal/customer-modal.component";

@Component({
  selector: "cenfo-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  public customers: any[];

  public pagination = {
    page: 1,
    pageSize: 10,
    totalElements: 13
  };

  constructor(
    private readonly customerService: CustomerService,
    private readonly modalService: NgbModal
  ) {}

  ngOnInit() {
    this.loadCustomers();
  }

  public setRecordsPerPage(range?: any): void {
    this.pagination.pageSize = range;
    this.loadCustomers();
  }

  public setPage(page: number): void {
    this.pagination.page = page;
    this.loadCustomers();
  }

  private loadCustomers(): void {
    this.customerService.getCustomers(this.pagination).subscribe(response => {
      console.log(response);
      
      this.customers = response.body;
      this.pagination.totalElements = response.totalElements;
    });
  }

  public openCustomerModal(isEdit: boolean = true) {
    const modalRef = this.modalService.open(CustomerModalComponent);
    modalRef.componentInstance.isEdit = isEdit;
    modalRef.componentInstance.success.subscribe(() => {
      this.loadCustomers();
    });
    modalRef.componentInstance.customerToCreate.subscribe(data => {
      this.customerService.addCustomers(data).subscribe(() => {
        this.loadCustomers();
        console.log("success", data);
        modalRef.dismiss();
      });
    });
  }

  public deteleUser(id: number): void {
    this.customerService.deleteCustomer(id).subscribe(
      () => {
        this.loadCustomers();
      },
      error => {
        console.log(error);
      }
    );
  }
}


