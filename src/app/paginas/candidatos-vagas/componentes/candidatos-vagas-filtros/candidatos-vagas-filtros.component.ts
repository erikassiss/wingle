import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Candidate } from 'src/app/shared/candidate';
import { CANDIDATES } from 'src/app/shared/data';
import { checkboxColumns } from './checkboxColumns';

@Component({
  selector: 'app-candidatos-vagas-filtros',
  templateUrl: './candidatos-vagas-filtros.component.html',
  styleUrls: ['./candidatos-vagas-filtros.component.css']
})

export class CandidatosVagasFiltrosComponent implements OnInit {
  checkboxColumns : string[] = checkboxColumns;
  candidates: Candidate[] = CANDIDATES;
  filteredCandidates: Candidate[] = [];
  filters: { key: keyof Candidate; label: string; value: boolean }[] = [
    { key: 'isNew', label: 'Novos', value: false },
    { key: 'isShortlist', label: 'Shortlist', value: false },
    { key: 'isStandby', label: 'Standby', value: false },
    { key: 'isProposal', label: 'Proposta', value: false },
    { key: 'isEliminated', label: 'Eliminados', value: false },
    { key: 'isHr_interview', label: 'Entrevista (RH)', value: false },
    { key: 'isLeader_interview', label: 'Entrevista (Lider)', value: false },
    { key: 'isHead_interview', label: 'Entrevista (Gestor)', value: false },
    { key: 'isTeam_interview', label: 'Entrevista (Equipe)', value: false },
  ];
  searchTerm: any ='';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.filters.forEach((filter) => {
        filter.value = params.get(filter.key) === 'true';
      });

      this.applyFilters();
    });
  }

  toggleFilter(filter: {
    key: keyof Candidate;
    label: string;
    value: boolean;
  }): void {
    filter.value = !filter.value;
    this.applyFilters();
  }

  applyFilters(): void {
    let candidates = this.candidates;
  
    if (this.searchTerm) {
      const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
      candidates = candidates.filter(
        (candidate) =>
          candidate.first_name.toLowerCase().includes(lowerCaseSearchTerm) ||
          candidate.last_name.toLowerCase().includes(lowerCaseSearchTerm) ||
          candidate.email.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
  
    this.filteredCandidates = candidates.filter((candidate) => {
      return this.filters.every(
        (filter) => !filter.value || candidate[filter.key]
      );
    });
  
    const queryParams: { [key: string]: any } = {};
    this.filters.forEach((filter) => {
      if (filter.value) {
        queryParams[filter.key] = filter.value;
      }
    });
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
    });
  }

  countCandidates(filterKey: keyof Candidate) {
    return this.candidates.filter(candidate => candidate[filterKey]).length;
  }
  
}

