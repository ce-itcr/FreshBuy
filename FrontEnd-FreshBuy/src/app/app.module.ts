import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProducerComponent } from './register/producer/producer.component';
import { ClientComponent } from './register/client/client.component';
import { RouterModule } from '@angular/router';
import { AdministrationViewComponent } from './administration-view/administration-view.component';
import { ProducerManagementComponent } from './administration-view/producer-management/producer-management.component';
import { AffiliationManagementComponent } from './administration-view/affiliation-management/affiliation-management.component';
import { CategoryManagementComponent } from './administration-view/category-management/category-management.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogInComponent,
    ProducerComponent,
    ClientComponent,
    AdministrationViewComponent,
    ProducerManagementComponent,
    AffiliationManagementComponent,
    CategoryManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: LogInComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
