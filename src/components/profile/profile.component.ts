
import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule]
})
export class ProfileComponent {
  private route = inject(ActivatedRoute);
  private dataService = inject(DataService);

  profile = signal<User | undefined>(undefined);
  
  isMilitary = computed(() => this.profile()?.type === 'military');
  isCompany = computed(() => this.profile()?.type === 'company');

  constructor() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.profile.set(this.dataService.getUserById(id));
      }
    });
  }
}
