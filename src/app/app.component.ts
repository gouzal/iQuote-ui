import { Component } from '@angular/core';
import { User } from './models/user.model';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'iQuote-ui';
  currentUser: User;

  constructor(
    private router: Router,
    private authService: AuthService
  )
  {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this.authService.logout();
      this.router.navigate(['/login']);
  }
}
