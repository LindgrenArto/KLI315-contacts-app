import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import {ContactListItemComponent} from './contact/contact-list-item/contact-list-item.component';
import {ContactService} from './contact/services/contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './ui/toolbar/toolbar/toolbar.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {AvatarModule} from 'ngx-avatar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxPaginationModule} from 'ngx-pagination';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    MatDividerModule,
    MatCardModule,
    AvatarModule,
    FlexLayoutModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
