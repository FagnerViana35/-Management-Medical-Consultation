import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaMedicaConsultasComponent } from './components/area-medica-consultas/area-medica-consultas.component';
import { AreaMedicaComponent } from './components/area-medica/area-medica.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { HorariosConsultaComponent } from './components/horarios-consulta/horarios-consulta.component';
import { LoginMedicoComponent } from './components/login-medico/login-medico.component';
import { LoginComponent } from './components/login/login.component';
import { TableMedicalComponent } from './components/table-medical/table-medical.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AreaUsuarioComponent } from './components/area-usuario/area-usuario.component';
import { CadastroMedicoFormularioComponent } from './components/cadastro-medico-formulario/cadastro-medico-formulario.component';
import { ConveniosComponent } from './components/convenios/convenios.component';
import { ConveniosDetalhesPlano1Component } from './components/convenios-detalhes-plano1/convenios-detalhes-plano1.component';
import { ConveniosDetalhesPlano2Component } from './components/convenios-detalhes-plano2/convenios-detalhes-plano2.component';
import { ConveniosDetalhesPlano3Component } from './components/convenios-detalhes-plano3/convenios-detalhes-plano3.component';
import { SaibaMaisComponent } from './components/saiba-mais/saiba-mais.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { AuthGuardService } from '../services/auth-guard.service';

// import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    
    {
    path: '',
    component: DashboardComponent,
    children: [
        {path: 'login', component: LoginComponent },
        {path: '', component: HomeComponent, canActivate: [AuthGuardService]},
        {path: 'horarios-consulta/:id', component: HorariosConsultaComponent, canActivate: [AuthGuardService]},
        {path: 'cadastro-medico', component: CadastroMedicoFormularioComponent, canActivate: [AuthGuardService]},
        {path: 'login-medical', component: LoginMedicoComponent, canActivate: [AuthGuardService]},
        {path: 'area-medica', component: AreaMedicaComponent, canActivate: [AuthGuardService]},
        {path: 'area-medica-consulta', component: AreaMedicaConsultasComponent, canActivate: [AuthGuardService]},
        {path: 'area-convenio', component: ConveniosComponent, canActivate: [AuthGuardService]},
        {path: 'plano_convenio1', component:ConveniosDetalhesPlano1Component, canActivate: [AuthGuardService]},
        {path: 'plano_convenio2', component:ConveniosDetalhesPlano2Component, canActivate: [AuthGuardService]},
        {path: 'plano_convenio3', component:ConveniosDetalhesPlano3Component, canActivate: [AuthGuardService]},
        {path: 'saiba_mais', component:SaibaMaisComponent, canActivate: [AuthGuardService]},
        {path: 'sobre-nos', component:SobreNosComponent, canActivate: [AuthGuardService]},
    ]
  },
  {
    path: '',
    component: AreaUsuarioComponent,
    children: [
        {path: 'register', component: CadastroComponent },
        {path: 'consult-medical', component: TableMedicalComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule { }