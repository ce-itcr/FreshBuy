import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { ClientComponent } from './register/client/client.component';
import { ProductorComponent } from './register/productor/productor.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [ { path: 'register', component: RegisterComponent},
                         { path: 'logIn', component: LogInComponent},
                         { path: 'client', component: ClientComponent},
                         { path: 'productor', component: ProductorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
