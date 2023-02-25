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


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SelectPerfilComponent,
    AvatarPerfilComponent,
    CardsComponent
  ],
  imports: [
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
    AvatarModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
