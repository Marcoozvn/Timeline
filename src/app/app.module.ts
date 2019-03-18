import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatRadioModule,
  MatDividerModule,
  MatToolbarModule,
  MatListModule, MatExpansionModule, MatIconModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './authentication/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { AccountComponent } from './account/account.component';
import { AcontecimentoComponent } from './acontecimento/acontecimento.component';
import {AcontecimentoService} from "./acontecimento/acontecimento.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    AccountComponent,
    AcontecimentoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    ToastrModule.forRoot()
  ],
  providers: [AcontecimentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
