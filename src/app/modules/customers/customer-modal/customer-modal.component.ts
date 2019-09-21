import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { CustomerService } from "../../../core/data-services/customer.service";

@Component({
  selector: "cenfo-customer-modal",
  templateUrl: "./customer-modal.component.html",
  styleUrls: ["./customer-modal.component.scss"]
})
export class CustomerModalComponent implements OnInit {
  @Input()
  public isEdit: boolean;
  @Input()
  public customer: any;

  @Output()
  public readonly success: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  public readonly customerToCreate: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly modalInstance: NgbActiveModal,
    private readonly customerService: CustomerService
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.form = this.fb.group({
      name: ["", Validators.required],
      age: ["", Validators.required],
      description: ["", Validators.required]
    });

    if (this.isEdit) {
      this.form.patchValue(this.customer);
    }
  }

  public dismiss(): void {
    this.modalInstance.dismiss();
  }

  public onSubmit(): void {
    if (this.isEdit) {
      this.customerService
        .updateCustomer(this.customer.id, this.form.value)
        .subscribe(
          () => {
            this.success.emit(true);
            this.dismiss();
          },
          error => {
            console.log(error);
          }
        );
    } else {
      const payload: any = this.addImgToPayload();
      this.customerToCreate.emit(payload);
    }
  }

  private addImgToPayload(): any {
    return {
      img: 'https://www.w3schools.com/howto/img_avatar.png',
      ...this.form.value
    }
  }
}
