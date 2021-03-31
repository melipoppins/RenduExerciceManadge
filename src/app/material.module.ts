import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';


const modules = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatToolbarModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})


export class MaterialModule { }
