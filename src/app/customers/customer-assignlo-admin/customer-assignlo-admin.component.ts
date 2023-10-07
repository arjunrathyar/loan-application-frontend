import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-customer-assignlo-admin',
  templateUrl: './customer-assignlo-admin.component.html',
  styleUrls: ['./customer-assignlo-admin.component.scss']
})
export class CustomerAssignloAdminComponent implements OnInit {

  constructor(public customerService: CustomerService,private router: Router) { }

  ngOnInit(): void {
    this.customerService.getAllLoans();
    this.customerService.getAllStatuses();
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
    //form.value.statusId=3;
    //form.value.active=true;
    //form.value.loanOfficerId=1;
    //insert
    this.editCustomer(form);
    form.reset();
    this.router.navigate(['/customers/list'])
  }

}
