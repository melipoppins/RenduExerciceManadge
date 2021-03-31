import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

export interface Fruit {
  name: string;
  color: string;
  weight: number;
  price: number;
}

const initialFruits: Fruit[] = [
  {name: 'Apple', color: 'yellow', weight: 300, price: 1.00},
  {name: 'Grapes', color: 'purple', weight: 250, price: 0.50},
  {name: 'Orange', color: 'orange', weight: 200, price: 2.00},
  {name: 'Watermelon', color: 'green', weight: 1000, price: 5.00},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'price', 'weight', 'color'];
  dataSource = new MatTableDataSource(initialFruits);
  @ViewChild(MatSort) sort: MatSort;

  @Output() data = new EventEmitter<any>();

  entryToExtract: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.onChangeSort();
  }

  onChangeSort(): void {
    const recup = document.getElementsByTagName('table')[0].getElementsByTagName('tr')[1].innerText;
    this.entryToExtract = recup.split('\t');

    this.data.emit({
      info1: this.entryToExtract[0],
      info2: this.entryToExtract[1],
      info3: this.entryToExtract[2],
      info4: this.entryToExtract[3]
    });

  }
}
