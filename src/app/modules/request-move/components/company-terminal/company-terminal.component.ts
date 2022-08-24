import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-terminal',
  templateUrl: './company-terminal.component.html',
  styleUrls: ['./company-terminal.component.css']
})
export class CompanyTerminalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  companies = [
    {value: 'company-1', viewValue: 'Company 1'},
    {value: 'company-2', viewValue: 'Company 2'},
    {value: 'company-3', viewValue: 'Company 3'},
  ];

  terminals = [
    {value: 'terminal-1', viewValue: 'Terminal 1'},
    {value: 'terminal-2', viewValue: 'Terminal 2'},
    {value: 'terminal-3', viewValue: 'Terminal 3'},
  ];

}
