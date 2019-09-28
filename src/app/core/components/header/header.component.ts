import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { TranslateService } from "@ngx-translate/core";
import { LANGUAGES } from '../../../shared/enums';

@Component({
  selector: "cenfo-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  // public isLoggedIn: boolean = false;

  public languages = LANGUAGES;

  constructor(
    private readonly authService: AuthenticationService,
    private readonly translateService: TranslateService
  ) {}

  ngOnInit() {}

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  public logOut(): void {
    this.authService.logOut();
  }

  public languageChange(lang: any): void {
    console.log(lang.target.value);

    this.translateService.use(lang.target.value);
  }

  public get defaultLang(): string {
    return this.translateService.getDefaultLang();
  }

  public isDefaultLang(lang: any): boolean {
    return lang === this.defaultLang;
  }
}
