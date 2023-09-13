import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EventViewComponent } from './event-view/event-view.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { LoginComponent } from './login/login/login.component';


const routes: Routes = [
  {
    path: '', component:  HomePageComponent

  },
  {
    path: 'teste/:id', component: EventViewComponent
  },
  {
    path: 'cadastrar', component: CadastroComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
