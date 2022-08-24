import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';
import { ContainersService } from 'src/app/services/containers.service';

@Component({
  selector: 'app-date-search',
  templateUrl: './date-search.component.html',
  styleUrls: ['./date-search.component.css']
})
export class DateSearchComponent implements OnInit {

  @Output() searchContainerEmitter = new EventEmitter<string>();
  containerID: FormControl;

  constructor(private containerSvc: ContainersService) {
    this.containerID = new FormControl('');
  }

  ngOnInit(): void {
    this.containerID.valueChanges.pipe(debounceTime(1000), switchMap(data => {
      return this.containerSvc.getContainersList(data)
    })).subscribe(data => {
      console.log('data', data)
    })
  }

  searchContainer(){
    this.searchContainerEmitter.emit(this.containerID.value)
  }

}
