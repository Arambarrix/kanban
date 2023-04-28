import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponentComponent } from './ticket-component/ticket-component.component';
import { TagComponentComponent } from './tag-component/tag-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { SupportComponentComponent } from './support-component/support-component.component';
import { EtatComponentComponent } from './etat-component/etat-component.component';
import { CommentComponentComponent } from './comment-component/comment-component.component';
import { TicketService } from './services/ticket.service';
import { TagService } from './services/tag.service';
import { UserService } from './services/user.service';
import { SupportService } from './services/support.service';
import { EtatService } from './services/etat.service';
import { CommentService } from './services/comment.service';
import { HttpClientModule } from '@angular/common/http';
import { AddTicketComponentComponent } from './ticket-component/add-ticket-component/add-ticket-component.component';
import { UpdateTicketComponentComponent } from './ticket-component/update-ticket-component/update-ticket-component.component';
import { AddUserComponentComponent } from './user-component/add-user-component/add-user-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponentComponent,
    TagComponentComponent,
    UserComponentComponent,
    SupportComponentComponent,
    EtatComponentComponent,
    CommentComponentComponent,
    AddTicketComponentComponent,
    UpdateTicketComponentComponent,
    AddUserComponentComponent,
    DashboardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [TicketService,TagService,UserService,SupportService,EtatService,CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
