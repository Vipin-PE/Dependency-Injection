import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employees: any[] = [];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.employees = this.commonService.employeesGroup();
  }
}
