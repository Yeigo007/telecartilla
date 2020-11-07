import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shares/header/header.component';
import { SidebarComponent } from './shares/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shares/breadcrumbs/breadcrumbs.component';
import {APP_ROPUTES} from './app.routes';
import { UploadComponent } from './files/upload/upload.component';
import {CampaniasService} from './service/campanias.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import { CampaniasComponent } from './files/campanias/campanias.component';
import { RadioComponent } from './files/radio/radio.component';
import { FlexmonsterPivotModule } from 'ng-flexmonster';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    UploadComponent,
    CampaniasComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    APP_ROPUTES,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatRadioModule,
    FlexmonsterPivotModule
  ],
  providers: [
    CampaniasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
