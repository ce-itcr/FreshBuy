import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { ClientComponent } from './register/client/client.component';
import { ProducerComponent } from './register/producer/producer.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [ { path: 'register', component: RegisterComponent},
                         { path: 'logIn', component: LogInComponent},
                         { path: 'client', component: ClientComponent},
                         { path: 'producer', component: ProducerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
