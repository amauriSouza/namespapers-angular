import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { ProfileComponent } from './user/profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateAccountComponent } from './auth/create-account/create-account.component';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'task', component: LoginComponent },
  { path: 'account', component: CreateAccountComponent }
];
