import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { ShareModule } from './share/share.module';
import { ShareRoutingModule } from './share/share-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    CommonModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
