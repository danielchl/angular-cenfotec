import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeaderComponent } from "./components/header/header.component";
import { AuthenticationService } from "./services/authentication.service";
import { LocalstorageService } from "./services/localstorage.service";
import { CustomerService } from "./data-services/customer.service";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { InterceptorService } from "./services/interceptor.service";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HttpClientModule, SharedModule, RouterModule],
  exports: [CommonModule, HttpClientModule, HeaderComponent],
  providers: [
    AuthenticationService,
    LocalstorageService,
    CustomerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {}
