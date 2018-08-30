import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HeaderComponent } from './shared/header.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { NotAuthGuard } from './shared/notauth.guard';
import { HomeComponent } from './home.component';
import { AlertsService } from './shared/alerts/alerts.service';
import { AlertsComponent } from './shared/alerts/alerts.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDOicS3PNywWR3JdO0RgmbOIYya4HClKqc",
  authDomain: "rgengineering-b394c.firebaseapp.com",
  databaseURL: "https://rgengineering-b394c.firebaseio.com",
  projectId: "rgengineering-b394c",
  storageBucket: "",
  messagingSenderId: "924137236064"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertsComponent,
    HomeComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [
    AuthService,
    AuthGuard,
    NotAuthGuard,
    AlertsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
