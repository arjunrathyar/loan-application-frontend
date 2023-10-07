import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Loan } from '../models/loan';
import { Status } from '../models/status';
import { LoanOfficer } from '../models/loan-officer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //declare variables -- global variables

  formCustomerData: Customer = new Customer();

  // List of Customers

  customers: Customer[];

  //List of Loans

  loans: Loan[];

  //List of Statuses

  statuses: Status[];

  //List of LoanOfficer

  loanOfficers: LoanOfficer[]

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
  deleteCustomer(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + "/api/customers/" + id);
  }

  //6 Get all Requested Customers - through Observable
  getAllRequestedCustomersList(): void {
    this.httpClient.get(environment.apiUrl + "/api/requestedcustomers")
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


  getAllVisitedCustomersList(): void {
    this.httpClient.get(environment.apiUrl + "/api/visitedcustomers")
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



  getAllLoans(): void {
    this.httpClient.get(environment.apiUrl + "/api/loans")
      .toPromise()
      .then(response => {
        console.log(response);
        this.loans = response as Loan[];   //storing in array
      },
        error => {
          console.log('Error');
        }
      );
  }


  getAllStatuses(): void {
    this.httpClient.get(environment.apiUrl + "/api/status")
      .toPromise()
      .then(response => {
        console.log(response);
        this.statuses = response as Status[];   //storing in array
      },
        error => {
          console.log('Error');
        }
      );
  }

  getAllLoanOfficers(): void {
    this.httpClient.get(environment.apiUrl + "/api/loanofficers")
      .toPromise()
      .then(response => {
        console.log(response);
        this.loanOfficers = response as LoanOfficer[];   //storing in array
      },
        error => {
          console.log('Error');
        }
      );
  }

}
