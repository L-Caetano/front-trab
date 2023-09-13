import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { EventsProvider } from 'src/providers/events'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventViewComponent } from './event-view/event-view.component';
import { LoginComponent } from './login/login/login.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { UserProvider } from 'src/providers/user';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    EventViewComponent,
    LoginComponent,
    CadastroComponent
  ],
  entryComponents: [
    EventViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventsProvider,
    UserProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
