import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from "../../shared/services/customer.service";
import { Customer } from "../../shared/models/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  //declare number
  searchTerm ='';
  page: number = 1;
  pageSize = 2;

  constructor(public customerService: CustomerService, private router: Router) { }

  //life cycle hook
  ngOnInit(): void {
    console.log("Hi I'm customerlist component")
    this.customerService.getAllCustomers();
  }

  updateCustomer(customer: Customer) {
    console.log(customer);
    this.populateCustomerData(customer);                             
    this.router.navigate(['customers/edit', customer.customerId]);
  }

  //delete

  deleteCustomer(id: number) {
    if (confirm('ARE YOU SURE that you want to delete this?')) {
      this.customerService.deleteCustomer(id)
        .subscribe((response) => {
          console.log(response);
          //this.router.navigate(['/customers/list']);
          this.customerService.getAllCustomers();
        }, (error) => {
          console.log(error);
        }
        )
    }
  }

  //getting customer data
  populateCustomerData(customer: Customer) {
    this.customerService.formCustomerData = Object.assign({}, customer);  //assign as an object
  }

}
