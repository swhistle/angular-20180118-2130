import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './presentation/login/login.component';
import { EmailComponent } from './presentation/email/email.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { AppValidatorService } from './services/app-validator.service';
import { UserListService } from './services/user-list.service';
import { AuthService } from './services/auth.service';
import { InboxComponent } from './presentation/inbox/inbox.component';

const routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'mail',
    canActivate: [AuthGuard],
    component: EmailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppValidatorService, UserListService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
