import { Component, OnInit } from "@angular/core";
import { CONFIG } from "../../../config/index";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "cenfo-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  public form: FormGroup;
  public isSubmitted: boolean = false;
  public countries: string[] = ["USA", "CRC", "GER", "NIC", "AUS"];

  constructor(private readonly fb: FormBuilder) {}

  public ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      fname: ["", Validators.required],
      lname: ["", Validators.required],
      phone: ["", Validators.required],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(CONFIG.patterns.email),
          Validators.maxLength(30)
        ]
      ],
      country: ["", Validators.required]
    });

    // this.form.setValue()

    this.form.patchValue({
      country: 'CRC'
    })

  }

  public signUp() {
    this.isSubmitted = true;

    if (!this.form.valid) {
      return;
    }

    console.log(this.form.value);
  }

  public isControlValid(fieldName: string) {
    return this.validateFlied(this.form.get(fieldName), this.isSubmitted);
  }

  public validateFlied(
    formControl: AbstractControl | null,
    isFormSubmitted: boolean
  ): boolean {
    return (
      !!formControl &&
      !((formControl.touched || isFormSubmitted) && formControl.invalid)
    );
  }
}
