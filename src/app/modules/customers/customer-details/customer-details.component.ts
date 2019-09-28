import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CustomerService } from "src/app/core/data-services/customer.service";

@Component({
  selector: "cenfo-customer-details",
  templateUrl: "./customer-details.component.html",
  styleUrls: ["./customer-details.component.scss"]
})
export class CustomerDetailsComponent implements OnInit {
  public customer: any;

  constructor(
    private readonly customerService: CustomerService,
    private readonly route: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
    const id: number = this.activatedRoute.snapshot.params.id;
    this.getCustomer(id);
  }

  ngOnInit() {}

  private getCustomer(id: number): void {
    this.customerService.getCustomer(id).subscribe(response => {
      console.log(response);

      this.customer = response;
    });
  }
}
