import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ContainerTableInfo, ContainerListResponse } from '../../../../models/container.model';
import { ContainersService } from '../../../../services/containers.service';
import { debounceTime, switchMap } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  CONT_LIST: string[];

  @Output() searchContainerEmitter = new EventEmitter<string>();
  containerID: FormControl;

  displayedColumns: string[] = ['containerID', 'origin', 'destination', 'status', 'description',
  'dimensions', 'book'];

  constructor(private containerSvc: ContainersService) {
    this.containerID = new FormControl('');
    this.CONT_LIST = [];
  }

  dataSource = new MatTableDataSource<ContainerTableInfo>([]);

  ngOnInit(): void {
    // this.containerID.valueChanges.pipe(debounceTime(1000), switchMap(element => {
    //   return this.containerSvc.getContainersList(element)
    // })).subscribe(data => {this.CONT_LIST = data
    // })
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  callContainerList(){
    // this.containerSvc.getContainersListTest().subscribe(response =>{
    //     console.log(response);
    //     if(response.totalResults){
    //       this.dataSource.data = response.Search;
    //     }
    // })
  }

}
