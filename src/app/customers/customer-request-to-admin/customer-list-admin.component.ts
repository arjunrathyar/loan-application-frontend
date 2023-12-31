import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/shared/models/customer';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-customer-list-admin',
  templateUrl: './customer-list-admin.component.html',
  styleUrls: ['./customer-list-admin.component.scss']
})
export class CustomerListAdminComponent implements OnInit {

  //declare number
  searchTerm ='';
  page: number = 1;
  pageSize = 2;

  constructor(public customerService: CustomerService, private router: Router) { }

  //life cycle hook
  ngOnInit(): void {
    console.log("Hi I'm customerlist component")
    this.customerService.getAllRequestedCustomersList();
  }

  updateCustomer(customer: Customer) {
    console.log(customer);
    //localstorage
    this.populateCustomerData(customer);                             
    this.router.navigate(['customers/editlo', customer.customerId]);
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
