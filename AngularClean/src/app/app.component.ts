import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Teste-oidc';
  constructor(
    private authService: AuthService,
  ) {
    this.authService.runInitialLoginSequence();
  }

  public logar() {
    this.authService.login();
  }
  public logout() {
    this.authService.logout();
  }

  get accessToken() { return this.authService.accessToken; }
  get identityClaims() { return this.authService.identityClaims; }
  get idToken() { return this.authService.idToken; }
}
