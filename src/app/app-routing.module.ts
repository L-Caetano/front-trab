import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EventViewComponent } from './event-view/event-view.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { LoginComponent } from './login/login/login.component';
import { CriarEventoComponent } from './eventos/criar-evento/criar-evento.component';
import { EditarEventoComponent } from './eventos/editar-evento/editar-evento.component';


const routes: Routes = [
  {
    path: '', component:  HomePageComponent

  },
  {
    path: 'eventView/:id', component: EventViewComponent
  },
  {
    path: 'cadastrar', component: CadastroComponent
  },
  {
    path: 'login', component: LoginComponent
  }
  ,
  {
    path: 'criarEvento', component: CriarEventoComponent
  }
  ,
  {
    path: 'editarEvento/:id', component: EditarEventoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
