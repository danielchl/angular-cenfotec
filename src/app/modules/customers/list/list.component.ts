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

  constructor(
    private readonly customerService: CustomerService,
    private readonly modalService: NgbModal
  ) {}

  ngOnInit() {
    this.loadCustomers();
  }

  private loadCustomers(): void {
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response;
      // const count = response.headers.get("X-Total-Count");
      // console.log(count / 3);
    });
    // this.customers = this.customerService.getCustomers();
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
