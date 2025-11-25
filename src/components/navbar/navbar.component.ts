
import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, CommonModule]
})
export class NavbarComponent {
  authService = inject(AuthService);
  router = inject(Router);
  
  currentUser = this.authService.currentUser;
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.isMenuOpen.set(false);
  }
}
