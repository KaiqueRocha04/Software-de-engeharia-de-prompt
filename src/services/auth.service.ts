
import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';
import { DataService } from './data.service';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private dataService = inject(DataService);
  
  currentUser = signal<User | null>(null);

  constructor() {
    // Simulate a logged in user for development
    // In a real app, this would be null initially
    this.currentUser.set(this.dataService.getExMilitarById('user1'));
  }

  login(userId: string) {
    const user = this.dataService.getUserById(userId);
    this.currentUser.set(user);
  }

  logout() {
    this.currentUser.set(null);
  }
}
