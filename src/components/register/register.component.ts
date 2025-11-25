
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, CommonModule]
})
export class RegisterComponent {
  userType = signal<'military' | 'company'>('military');

  setUserType(type: 'military' | 'company') {
    this.userType.set(type);
  }
}
