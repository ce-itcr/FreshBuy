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
import { ProducerViewComponent } from './producer-view/producer-view.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { MatSliderModule } from '@angular/material/slider';
import { DataTableComponent } from './administration-view/data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogInComponent,
    ProducerComponent,
    ClientComponent,
    ProducerViewComponent,
    ClientViewComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    RouterModule.forRoot([
      {path: '', component: LogInComponent}
    ]),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
