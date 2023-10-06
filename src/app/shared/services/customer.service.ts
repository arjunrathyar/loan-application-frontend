import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //declare variables -- global variables

  formCustomerData: Customer = new Customer(); 

  // List of Customers

  customers: Customer[];

  //List of 

  


  //dependency injection  -- constructor
  constructor(private httpClient: HttpClient) { }  //dependancy injection - constructor injection

  //1 Get all Customers - through Promises
  // http://localhost:9091/api/customers
  getAllCustomers(): void {
    this.httpClient.get(environment.apiUrl + "/api/customers")
      .toPromise()
      .then(response => {
        console.log(response);
        this.customers = response as Customer[];   //storing in array
      },
        error => {
          console.log('Error');
        }
      );
  }

  //2 Get all Customers - through Observable
  getAllCustomersList(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/customers");
  }

  //3 Insert
  insertCustomer(customer: Customer): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/api/customers", customer);
  }

  //4 Update
  updateCustomer(customer: Customer): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/customers", customer);
  }

  //5 Delete
  deleteCustomer(id:number): Observable<any> {
    //permanent delete url (api)
    //return this.httpClient.delete(environment.apiUrl + "/api/customers/delete/"+ id);
    //isActive delete url (api)
    return this.httpClient.delete(environment.apiUrl + "/api/customers/"+ id);
  }

  // //get departments
  // getAllDepartments(): void {
  //   this.httpClient.get(environment.apiUrl + "/api/departments")
  //     .toPromise()
  //     .then(response => {
  //       console.log(response);
  //       this.departments = response as Department[];   //storing in array
  //     },
  //       error => {
  //         console.log('Error');
  //       }
  //     );
  // }

}
