import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { CandidatosVagasHeadComponent } from 'src/app/paginas/candidatos-vagas/componentes/candidatos-vagas-head/candidatos-vagas-head.component';
import { CandidatosVagasBodyComponent } from './paginas/candidatos-vagas/componentes/candidatos-vagas-body/candidatos-vagas-body.component';
import { CandidatosVagasGridComponent } from './paginas/candidatos-vagas/componentes/candidatos-vagas-grid/candidatos-vagas-grid.component';
import { CandidatosVagasFiltrosComponent } from './paginas/candidatos-vagas/componentes/candidatos-vagas-filtros/candidatos-vagas-filtros.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { WingleCheckboxComponent } from './shared/wingle-checkbox/wingle-checkbox.component';
@NgModule({
  declarations: [
    AppComponent,
    CandidatosVagasHeadComponent,
    CandidatosVagasBodyComponent,
    CandidatosVagasGridComponent,
    CandidatosVagasFiltrosComponent,
    WingleCheckboxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
