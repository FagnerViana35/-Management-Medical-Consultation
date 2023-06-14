import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { AreaMedicaConsultasComponent } from './components/area-medica-consultas/area-medica-consultas.component';
import { AreaMedicaComponent } from './components/area-medica/area-medica.component';
import { AvatarPerfilComponent } from './components/avatar-perfil/avatar-perfil.component';
import { CadastroFormularioComponent } from './components/cadastro-formulario/cadastro-formulario.component';
import { CadastroMedicoComponent } from './components/cadastro-medico/cadastro-medico.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CardsComponent } from './components/cards/cards.component';
import { DialogAcceptComponent } from './components/dialog-accept/dialog-accept.component';
import { DialogErrorAcceptComponent } from './components/dialog-error-accept/dialog-error-accept.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HorariosConsultaComponent } from './components/horarios-consulta/horarios-consulta.component';
import { LoginFormularioComponent } from './components/login-formulario/login-formulario.component';
import { LoginMedicoFormularioComponent } from './components/login-medico-formulario/login-medico-formulario.component';
import { LoginMedicoComponent } from './components/login-medico/login-medico.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar2/navbar.component';
import { ResultDialogComponent } from './components/result-dialog/result-dialog.component';
import { SearchDoctorComponent } from './components/search-doctor/search-doctor.component';
import { SelectPerfilComponent } from './components/select-perfil/select-perfil.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TableMedicalComponent } from './components/table-medical/table-medical.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { AvatarModule } from 'ngx-avatars';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AreaUsuarioComponent } from './components/area-usuario/area-usuario.component';
import { RodapeComponent } from './components/rodape/rodape.component';


@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SidenavComponent,
    SelectPerfilComponent,
    AvatarPerfilComponent,
    CardsComponent,
    LoginComponent,
    LoginFormularioComponent,
    CadastroFormularioComponent,
    CadastroComponent,
    SearchDoctorComponent,
    DialogErrorAcceptComponent,
    TableMedicalComponent,
    HorariosConsultaComponent,
    ResultDialogComponent,
    CadastroMedicoComponent,
    CadastroFormularioComponent,
    LoginMedicoComponent,
    LoginMedicoFormularioComponent,
    DialogAcceptComponent,
    AreaMedicaComponent,
    AreaMedicaConsultasComponent,
    HorariosConsultaComponent,
    DashboardComponent,
    AreaUsuarioComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatSelectModule,
    AvatarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  exports: [
    
  ]
})
export class ShareModule { }