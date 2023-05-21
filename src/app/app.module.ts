import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { ShareModule } from './share/share.module';
import { ShareRoutingModule } from './share/share-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './services/AuthInterceptorService';
@NgModule({
  declarations: [
    AppComponent,
    
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
