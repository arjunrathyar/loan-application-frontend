import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  constructor(public customerService: CustomerService,private router: Router) { }

  ngOnInit(): void {
    this.customerService.getAllLoans();
    this.customerService.getAllStatuses();
    this.customerService.getAllLoanOfficers();


    localStorage.setItem("customerId",this.customerService.formCustomerData.customerId.toString())
    localStorage.setItem("customerName",this.customerService.formCustomerData.customerName)
    localStorage.setItem("phoneNumber",this.customerService.formCustomerData.phoneNumber.toString())
    localStorage.setItem("address",this.customerService.formCustomerData.address)
    localStorage.setItem("loanId",this.customerService.formCustomerData.loanId.toString())
    localStorage.setItem("loanOfficerId",this.customerService.formCustomerData.loanOfficerId.toString())
    localStorage.setItem("active",this.customerService.formCustomerData.active.toString())
    localStorage.setItem("feedback",this.customerService.formCustomerData.feedback)
  }

  editCustomer(form: NgForm){
    console.log("Updating...");
    this.customerService.updateCustomer(form.value).subscribe((response)=>{
      console.log(response);
    },
    (error)=>{
      console.log(error);
    })
  }

  //submit form

  onSubmit(form:NgForm){
    console.log(form.value);
    
    form.value.customerId = Number(localStorage.getItem("customerId"));
    form.value.customerName = localStorage.getItem("customerName");
    form.value.phoneNumber = localStorage.getItem("phoneNumber");
    form.value.address = localStorage.getItem("address");
    form.value.loanId = Number(localStorage.getItem("loanId"));
    form.value.loanOfficerId = Number(localStorage.getItem("loanOfficerId"));
    form.value.active = Boolean(localStorage.getItem("active"));
    form.value.feedback = localStorage.getItem("feedback");

    localStorage.clear();

    this.editCustomer(form);
    form.reset();
    this.router.navigate(['/customers/approvallist'])
  }

}
