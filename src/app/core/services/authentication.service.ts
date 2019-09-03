import { Injectable } from "@angular/core";
import { CONFIG } from "../../config/index";
import { LocalstorageService } from "./localstorage.service";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private readonly localStorageService: LocalstorageService) {}

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
}
