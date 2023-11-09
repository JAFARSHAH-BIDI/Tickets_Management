import { Component, ViewChild , AfterViewInit, Inject} from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

// import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Tickets_Management';
  name = 'Angular 4';
  // animal!: string;

  // constructor(public dialog: MatDialog, 
  //   public dialogRef: MatDialogRef<AppComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any) { }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
  // openDialog(): void {
  //   let dialogRef = this.dialog.open(AppComponent, {
  //     width: '250px',
  //     data: { name: this.name, animal: this.animal }
  //   });

  //   dialogRef.afterClosed().subscribe((result: string) => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }


 



  displayedColumns = ['name', 'id', 'description'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
 
 
}
export interface Element {
  name: string;
  id:number;
  description: string;
}



const ELEMENT_DATA: Element[] =[
  { id: 1, name: 'ticket one', description: 'ticket one desc'},
  { id: 2, name: 'ticket two', description: 'ticket two desc'},
  { id: 3, name: 'ticket three', description: 'ticket three desc'},
  { id: 4, name: 'ticket four', description: 'ticket four desc'},
  { id: 5, name: 'ticket five', description: 'ticket five desc'},
  { id: 6, name: 'ticket six', description: 'ticket six desc'},
  { id: 7, name: 'ticket seven', description: 'ticket seven desc'},
  { id: 8, name: 'ticket eight', description: 'ticket eight desc'},
  { id: 9, name: 'ticket nine', description: 'ticket nine desc'},
  { id: 10, name: 'ticket ten', description: 'ticket ten desc'},
  { id: 11, name: 'ticket eleven', description: 'ticket eleven desc'},
  { id: 12, name: 'ticket twelve', description: 'ticket twelve desc'},
  { id: 13, name: 'ticket thirteen', description: 'ticket thirteen desc'},
  { id: 14, name: 'ticket fourteen', description: 'ticket fourteen desc'},
  { id: 15, name: 'ticket fifteen', description: 'ticket fifteen desc'},
  { id: 16, name: 'ticket sixteen', description: 'ticket sixteen desc'},
  { id: 17, name: 'ticket seventeen', description: 'ticket seventeen desc'},
]
