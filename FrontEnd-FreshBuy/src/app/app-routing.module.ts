import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationViewComponent } from './administration-view/administration-view.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProducerViewComponent } from './producer-view/producer-view.component';
import { AdministratorViewComponent } from './administrator-view/administrator-view.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { ClientComponent } from './register/client/client.component';
import { ProducerComponent } from './register/producer/producer.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [ { path: 'register', component: RegisterComponent},
                         { path: 'logIn', component: LogInComponent},
                         { path: 'client', component: ClientComponent},
                         { path: 'producer', component: ProducerComponent},
                         { path: "producerView", component: ProducerViewComponent},
                         { path: "adminView", component: AdministratorViewComponent},
                         { path: "clientView", component: ClientViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
