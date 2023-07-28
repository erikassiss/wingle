import { Component } from '@angular/core';
import { Candidate } from 'src/app/shared/candidate';
import { CANDIDATES } from 'src/app/shared/data';

@Component({
  selector: 'app-candidatos-vagas-grid',
  templateUrl: './candidatos-vagas-grid.component.html',
  styleUrls: ['./candidatos-vagas-grid.component.css']
})
export class CandidatosVagasGridComponent {
  candidates: Candidate[] = CANDIDATES;
  interessados: Number = this.candidates.length;
  eliminados: Number = this.candidates.filter((candidate) => candidate.isEliminated).length;

}
