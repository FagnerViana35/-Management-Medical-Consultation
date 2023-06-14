import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaMedicaConsultasComponent } from './components/area-medica-consultas/area-medica-consultas.component';
import { AreaMedicaComponent } from './components/area-medica/area-medica.component';
import { CadastroMedicoComponent } from './components/cadastro-medico/cadastro-medico.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { HorariosConsultaComponent } from './components/horarios-consulta/horarios-consulta.component';
import { LoginMedicoComponent } from './components/login-medico/login-medico.component';
import { LoginComponent } from './components/login/login.component';
import { TableMedicalComponent } from './components/table-medical/table-medical.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AreaUsuarioComponent } from './components/area-usuario/area-usuario.component';

// import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    
    {
    path: '',
    component: DashboardComponent,
    children: [
        {path: '', component: LoginComponent },
        {path: 'home', component: HomeComponent },
        {path: 'horarios-consulta/:id', component: HorariosConsultaComponent},
        {path: 'consult-medical', component: TableMedicalComponent},
        {path: 'cadastro-medical', component: CadastroMedicoComponent},
        {path: 'login-medical', component: LoginMedicoComponent},
        {path: 'area-medica', component: AreaMedicaComponent},
        {path: 'area-medica-consulta', component: AreaMedicaConsultasComponent},
    ]
  },
  {
    path: '',
    component: AreaUsuarioComponent,
    children: [
        {path: 'register', component: CadastroComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule { }