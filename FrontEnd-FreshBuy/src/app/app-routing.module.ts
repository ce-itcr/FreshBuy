import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { ProducerViewComponent } from './producer-view/producer-view.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { ClientComponent } from './register/client/client.component';
import { ProducerComponent } from './register/producer/producer.component';
import { RegisterComponent } from './register/register.component';
import { ProducerManagementComponent } from './administration-view/producer-management/producer-management.component';
import { AffiliationManagementComponent } from './administration-view/affiliation-management/affiliation-management.component';
import { CategoryManagementComponent } from './administration-view/category-management/category-management.component';
import { ReportViewComponent } from './administration-view/report-view/report-view.component';
import { from } from 'rxjs';

const routes: Routes = [ { path: 'register', component: RegisterComponent},
                         { path: 'logIn', component: LogInComponent},
                         { path: 'client', component: ClientComponent},
                         { path: 'producer', component: ProducerComponent},
                         { path: "producerView", component: ProducerViewComponent},
                         { path: "clientView", component: ClientViewComponent},
                         { path: "producerManagement", component: ProducerManagementComponent},
                         { path: "affiliationManagement", component: AffiliationManagementComponent},
                         { path: "categoryManagement", component: CategoryManagementComponent},
                         { path: "reportView", component: ReportViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
