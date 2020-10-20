import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProducerComponent } from './register/producer/producer.component';
import { ClientComponent } from './register/client/client.component';
import { RouterModule } from '@angular/router';
import { ProducerManagementComponent} from './administration-view/producer-management/producer-management.component';
import { AffiliationManagementComponent } from './administration-view/affiliation-management/affiliation-management.component';
import { CategoryManagementComponent } from  './administration-view/category-management/category-management.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportViewComponent } from './administration-view/report-view/report-view.component';
import { ClientsDataTableComponent } from './data-tables/clients-data-table/clients-data-table.component';
import { ProductsDataTableComponent } from './data-tables/products-data-table/products-data-table.component';
import { ProductsManagementComponent } from './producer-view/products-management/products-management.component';
import { OrdersManagementComponent } from './producer-view/orders-management/orders-management.component';
import { CategoriesDataTableComponent } from './data-tables/categories-data-table/categories-data-table.component';
import { ProducersDataTableComponent } from './data-tables/producers-data-table/producers-data-table.component';
import { ComunicationService } from './comunication.service';
import { CartComponent } from './client-view/cart/cart.component';
import { CartDataTableComponent } from './data-tables/cart-data-table/cart-data-table.component';
import { ProductsDisplayComponent } from './client-view/products-display/products-display.component';
import { SendFeedbackComponent } from './client-view/send-feedback/send-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogInComponent,
    ProducerComponent,
    ClientComponent,
    ProducerManagementComponent,
    AffiliationManagementComponent,
    CategoryManagementComponent,
    ClientViewComponent,
    ReportViewComponent,
    ClientsDataTableComponent,
    ProductsDataTableComponent,
    CategoriesDataTableComponent,
    ProducersDataTableComponent,
    ProductsManagementComponent,
    OrdersManagementComponent,
    CartComponent,
    CartDataTableComponent,
    ProductsDisplayComponent,
    SendFeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    MatTabsModule,
    RouterModule.forRoot([
      {path: '', component: LogInComponent}
    ]),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule
  ],
  providers: [ComunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
