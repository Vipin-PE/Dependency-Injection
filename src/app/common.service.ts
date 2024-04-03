import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
    employees = [
    { name: 'Denil', id: 1203,  position: 'Software Engineer', },
    { name: 'Suchin', id: 3401,  position: 'Software Engineer', },
    { name: 'Pranav', id: 2030,  position: 'Software Engineer', },
    { name: 'Aswanth', id: 4462,  position: 'Marketing manager', },
    { name: 'Ritvik', id: 8412,  position: 'Software Engineer', }
  ];

  employeesGroup() {
    return this.employees;
  }
}
