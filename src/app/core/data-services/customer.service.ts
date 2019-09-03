import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  public customers: any[] = [
    {
      fname: 'Daniel',
      lname: 'Chinchilla',
      age: '29',
      description: 'Angular dev'
    },
    {
      fname: 'Daniel',
      lname: 'Chinchilla',
      age: '29',
      description: 'Angular dev'
    },
    {
      fname: 'Daniel',
      lname: 'Chinchilla',
      age: '29',
      description: 'Angular dev'
    },
    {
      fname: 'Daniel',
      lname: 'Chinchilla',
      age: '29',
      description: 'Angular dev'
    },
    {
      fname: 'Daniel',
      lname: 'Chinchilla',
      age: '29',
      description: 'Angular dev'
    },
    {
      fname: 'Daniel',
      lname: 'Chinchilla',
      age: '29',
      description: 'Angular dev'
    },
    {
      fname: 'Daniel',
      lname: 'Chinchilla',
      age: '29',
      description: 'Angular dev'
    },
    {
      fname: 'Daniel',
      lname: 'Chinchilla',
      age: '29',
      description: 'Angular dev'
    }
  ]

  constructor() { }

  public getCustomers(): any {
    return this.customers;
  }

}
