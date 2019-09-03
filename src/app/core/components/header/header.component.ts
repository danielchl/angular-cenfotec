import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'cenfo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: boolean = false;

  constructor( private readonly authService: AuthenticationService ) { 

    this.isLoggedIn = this.authService.isLoggedIn();
  }

  ngOnInit() {
  }

}
