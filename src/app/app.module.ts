import { ShareModule } from './share/share.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { ShareRoutingModule } from './share/share-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './services/AuthInterceptorService';
import { ConveniosDetalhesPlano1Component } from './share/components/convenios-detalhes-plano1/convenios-detalhes-plano1.component';
import { ConveniosDetalhesPlano2Component } from './share/components/convenios-detalhes-plano2/convenios-detalhes-plano2.component';
import { ConveniosDetalhesPlano3Component } from './share/components/convenios-detalhes-plano3/convenios-detalhes-plano3.component';
import { SaibaMaisComponent } from './share/components/saiba-mais/saiba-mais.component';
import { SobreNosComponent } from './share/components/sobre-nos/sobre-nos.component';
import { AuthGuardService } from './services/auth-guard.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    MatSidenavModule,
    AppRoutingModule,
    ShareRoutingModule,
    ShareModule,
  ],
  // exports: [ 
  //   MatFormFieldModule, 
  //   MatInputModule ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
