import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NameMaterialModule } from '../material.module';
// import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    // CommonModule,
    NameMaterialModule,
    // LoginRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
