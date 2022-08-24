import { Component, OnInit } from '@angular/core';
import { ContainersService } from '../../../../services/containers.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private containerSvc: ContainersService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['issuesBy', 'qty', 'fee', 'total', 'delete'];


}
