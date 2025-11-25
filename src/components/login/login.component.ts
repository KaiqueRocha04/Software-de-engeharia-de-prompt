
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, FormsModule, CommonModule]
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  email = '';
  password = '';

  login() {
    // Mock login. In a real app, this would call an API.
    // We'll just log in as the default user 'user1'.
    console.log('Logging in with:', this.email, this.password);
    this.authService.login('user1');
    this.router.navigate(['/feed']);
  }
}
