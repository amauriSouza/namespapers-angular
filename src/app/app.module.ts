import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { AppSidebarComponent } from './layout/app-sidebar/app-sidebar.component';
import { MzButtonModule, MzNavbarModule, MzDropdownModule, MzSidenavModule} from 'ngx-materialize';
import { TasksComponent } from './tasks/tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppSidebarComponent,
    TasksComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MzButtonModule,
    MzNavbarModule,
    MzDropdownModule,
    MzSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
