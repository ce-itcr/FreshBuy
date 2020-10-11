import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CartDataTableDataSource, CartDataTableItem } from './cart-data-table-datasource';

@Component({
  selector: 'app-cart-data-table',
  templateUrl: './cart-data-table.component.html',
  styleUrls: ['./cart-data-table.component.css']
})
export class CartDataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<CartDataTableItem>;
  dataSource: CartDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['photo', 'product_name', 'product_id', 'saleMode', 'availability', 'price'];

  ngOnInit() {
    this.dataSource = new CartDataTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
