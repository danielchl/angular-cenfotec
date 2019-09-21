import { Injectable } from "@angular/core";
import { CONFIG } from "../../config/index";
import { LocalstorageService } from "./localstorage.service";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(
    private readonly localStorageService: LocalstorageService,
    private readonly route: Router
  ) {}

  public login(data: any): boolean {
    const { email, password } = CONFIG.adminUser;

    if (data.email === email && data.password === password) {
      this.localStorageService.set("authUser", data);
      return true;
    }

    return false;
  }

  public isLoggedIn(): boolean {
    if (!this.localStorageService.get("authUser")) {
      return false;
    }

    return true;
  }

  public getAuhtData(): any {
    return this.localStorageService.get("authUser");
  }

  public logOut(): void {
    this.route.navigate(["/"]);
    this.localStorageService.delete("authUser");
  }
}
