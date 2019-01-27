import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent}, // http://localhost:4200/login directs to LoginComponent
  { path: 'welcome/:name', component: WelcomeComponent}, // http://localhost:4200/welcome directs to WelcomeComponent
  { path: 'todos', component: ListTodosComponent},

  //Always put new routes above '**'
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
