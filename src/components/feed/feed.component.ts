
import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Vaga, Empresa } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule]
})
export class FeedComponent {
  private dataService = inject(DataService);
  
  allVagas = signal<(Vaga & { empresa: Empresa })[]>([]);
  
  filterLocation = signal('');
  filterBranch = signal('');
  filterSkill = signal('');

  filteredVagas = computed(() => {
    const location = this.filterLocation().toLowerCase();
    const branch = this.filterBranch().toLowerCase();
    const skill = this.filterSkill().toLowerCase();

    return this.allVagas().filter(v => {
      const locationMatch = !location || v.localizacao.toLowerCase().includes(location);
      const skillMatch = !skill || v.habilidadesRequeridas.some(h => h.toLowerCase().includes(skill));
      // Branch filter is a placeholder for more complex logic
      return locationMatch && skillMatch;
    });
  });

  constructor() {
    this.allVagas.set(this.dataService.getVagas());
  }

  onLocationInput(event: Event) {
    this.filterLocation.set((event.target as HTMLInputElement).value);
  }

  onSkillInput(event: Event) {
    this.filterSkill.set((event.target as HTMLInputElement).value);
  }
  
  onBranchChange(event: Event) {
    this.filterBranch.set((event.target as HTMLSelectElement).value);
  }

}
