import { Component, Input, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';
import { ContainerTableInfo } from 'src/app/models/container.model';
import { ContainersService } from 'src/app/services/containers.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchContainerEmitter = new EventEmitter<string>();
  containerID: FormControl;
  containersData: ContainerTableInfo[];

  constructor(private containerSvc: ContainersService) {
    this.containerID = new FormControl('');
    this.containersData = [];
  }

  ngOnInit(): void {
    this.containerID.valueChanges.pipe(debounceTime(1000), switchMap(element => {
      return this.containerSvc.getContainersList(element)
    })).subscribe(data => console.log('data', data))
  }

  searchContainer(){
    this.searchContainerEmitter.emit(this.containerID.value)
  }
}
