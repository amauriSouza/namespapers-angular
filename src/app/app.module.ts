import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { AppSidebarComponent } from './layout/app-sidebar/app-sidebar.component';
import { MzIconModule, MzIconMdiModule, MzNavbarModule, MzCollapsibleModule, MzCheckboxModule, MzSidenavModule, MzCollectionModule, MzButtonModule, MzInputModule, MzCardModule, MzSelectModule, MzTooltipModule, MzChipModule, MzDatepickerModule, MzDropdownModule} from 'ngx-materialize';
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
    MzNavbarModule,
    MzCollapsibleModule,
    MzSidenavModule,
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzSelectModule,
    MzTooltipModule,
    MzChipModule,
    MzDatepickerModule,
    MzDropdownModule,
    MzCollectionModule,
    MzCheckboxModule,
    MzIconModule,
    MzIconMdiModule,
    MzCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
