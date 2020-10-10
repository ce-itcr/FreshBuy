import { AfterViewInit, Component, OnInit, ViewChild, ɵɵqueryRefresh } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ClientsDataTableDataSource, ClientsDataTableItem } from './clients-data-table-datasource';

@Component({
  selector: 'app-clients-data-table',
  templateUrl: './clients-data-table.component.html',
  styleUrls: ['./clients-data-table.component.css']
})
export class ClientsDataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ClientsDataTableItem>;
  dataSource: ClientsDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['person_id', 'name', 'last_name', 'province', 'canton', 'district', 'birth_date', 'phone_number', 'sinpe_number', 'delivery_locations'];

  ngOnInit() {
    this.dataSource = new ClientsDataTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
