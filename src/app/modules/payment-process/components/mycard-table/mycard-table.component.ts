import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycard-table',
  templateUrl: './mycard-table.component.html',
  styleUrls: ['./mycard-table.component.css']
})
export class MycardTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sources = [
    { value: 'masterCard', viewValue: 'MasterCard' },
    { value: 'visa', viewValue: 'Visa' },
    { value: 'payPal', viewValue: 'PayPal' },
  ];

}
