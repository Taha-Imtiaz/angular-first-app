import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersModule } from './users/users.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import bootstrap from "bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import material button
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { UsersComponent } from './users/users.component';

@NgModule({
  // component declerations
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent
  ],
  // import module
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //import users module
    UsersModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule
     //import ngb module for bootstrap
    //  NgbModule.forRoot()
  ],
  providers: [],
  // which component runs comes under bootstrap property
  bootstrap: [AppComponent]
})
export class AppModule { }
