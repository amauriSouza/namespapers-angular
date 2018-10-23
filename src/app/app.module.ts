import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { AppSidebarComponent } from './layout/app-sidebar/app-sidebar.component';
import {
  MzNavbarModule,
  MzButtonModule,
  MzInputModule,
  MzCardModule,
  MzCollapsibleModule,
  MzSidenavModule,
  MzCollectionModule,
  MzSelectModule,
  MzTooltipModule,
  MzDatepickerModule,
  MzDropdownModule,
  MzTextareaModule
} from 'ngx-materialize';
import { TasksComponent } from './tasks/tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import {DataTableModule} from 'angular-6-datatable';
import { ProfileComponent } from './user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppSidebarComponent,
    TasksComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MzNavbarModule,
    MzCollapsibleModule,
    MzSidenavModule,
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzSelectModule,
    MzTooltipModule,
    MzDatepickerModule,
    MzDropdownModule,
    MzCollectionModule,
    MzTextareaModule,
    DataTableModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
