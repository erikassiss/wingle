import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatosVagasHeadComponent } from 'src/app/paginas/candidatos-vagas/componentes/candidatos-vagas-head/candidatos-vagas-head.component';

const routes: Routes = [
  { path: '', redirectTo: '/candidatos-por-vaga', pathMatch: 'full' },
  { path: 'candidatos-por-vaga', component: CandidatosVagasHeadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}