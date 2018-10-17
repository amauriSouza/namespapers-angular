import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { AppSidebarComponent } from './layout/app-sidebar/app-sidebar.component';
import { MzButtonModule, MzNavbarModule, MzDropdownModule} from 'ngx-materialize';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppSidebarComponent
  ],
  imports: [
    BrowserModule,
    MzButtonModule,
    MzNavbarModule,
    MzDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
