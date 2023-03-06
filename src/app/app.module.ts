import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { AvatarModule } from 'ngx-avatars';
import { MatSelectModule } from '@angular/material/select';
import { SelectPerfilComponent } from './components/select-perfil/select-perfil.component';
import { AvatarPerfilComponent } from './components/avatar-perfil/avatar-perfil.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoginComponent } from './components/login/login.component';
import { LoginFormularioComponent } from './components/login-formulario/login-formulario.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroFormularioComponent } from './components/cadastro-formulario/cadastro-formulario.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ListaMedicosComponent } from './components/lista-medicos/lista-medicos.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaServiceService } from './services/lista-service.service';
import { CommonModule } from '@angular/common';
import { SearchDoctorComponent } from './components/search-doctor/search-doctor.component';
import { DialogErrorAcceptComponent } from './components/dialog-error-accept/dialog-error-accept.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ConsultMedicalComponent } from './components/consult-medical/consult-medical.component';
import { TableMedicalComponent } from './components/table-medical/table-medical.component';
import { MatTableModule } from '@angular/material/table';
import { AvailableTimesComponent } from './components/available-times/available-times.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SelectPerfilComponent,
    AvatarPerfilComponent,
    CardsComponent,
    LoginComponent,
    LoginFormularioComponent,
    CadastroFormularioComponent,
    CadastroComponent,
    ListaMedicosComponent,
    SearchDoctorComponent,
    DialogErrorAcceptComponent,
    ConsultMedicalComponent,
    TableMedicalComponent,
    AvailableTimesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
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
    MatTableModule

  ],
  // exports: [ 
  //   MatFormFieldModule, 
  //   MatInputModule ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [ListaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
