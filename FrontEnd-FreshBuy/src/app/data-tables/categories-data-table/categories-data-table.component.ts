import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CategoriesDataTableDataSource, CategoriesDataTableItem } from './categories-data-table-datasource';

@Component({
  selector: 'app-categories-data-table',
  templateUrl: './categories-data-table.component.html',
  styleUrls: ['./categories-data-table.component.css']
})
export class CategoriesDataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<CategoriesDataTableItem>;
  dataSource: CategoriesDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['category_id', 'name'];

  ngOnInit() {
    this.dataSource = new CategoriesDataTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
