import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from "../../shared/models/user";
import { AuthService } from "src/app/shared/services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declare variables
  loginForm!: FormGroup;   //exclamation means that empty fields could be accomodated...
  isSubmitted: boolean = false;
  error: string = '';

  loginUser?: User = new User();
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {

  }


  //life cycle
  ngOnInit(): void {


    // create a reactive form
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

  }

  //get controls for validation
  get formControls() {
    return this.loginForm.controls;
  }

  //funtionality
  loginCredentials(): void {

    //setting value to issubmitted
    this.isSubmitted = true;

    //checking form is valid
    if (this.loginForm.invalid) {
      this.error = "Please Enter UserName And Password";
      return;
    }

    //form is valid
    if (this.loginForm.valid) {
      this.error = "";
      console.log(this.loginForm.value);

      //call service for login i.e., checkin login functionality
      this.authService.loginVerify(this.loginForm.value).subscribe(response => {
        console.log(response);


        //role based authentication
        if (response.data.role == 1) {
          //this.router.navigate(['/employees/list']);
          console.log("admin");
          localStorage.setItem("USER_NAME", response.data.UserName);
          localStorage.setItem("ACCESS_ROLE", response.data.role);
          sessionStorage.setItem("USER_NAME", response.data.UserName);
          localStorage.setItem("JWT_TOKEN", response.data.ACCESSTOKEN);

          this.router.navigate(['auth/admin']);
        }
        else if (response.data.role == 2) {
          console.log("customer");
          localStorage.setItem("USER_NAME", response.data.UserName);
          localStorage.setItem("ACCESS_ROLE", response.data.role);
          sessionStorage.setItem("USER_NAME", response.data.UserName);
          localStorage.setItem("JWT_TOKEN", response.data.ACCESSTOKEN);

          this.router.navigate(['auth/customer']);
        }
        else if (response.data.role == 3) {
          console.log("Loan Offcer");
          localStorage.setItem("USER_NAME", response.data.UserName);
          localStorage.setItem("ACCESS_ROLE", response.data.role);
          sessionStorage.setItem("USER_NAME", response.data.UserName);
          localStorage.setItem("JWT_TOKEN", response.data.ACCESSTOKEN);

          this.router.navigate(['auth/loanoffcer']);
        }
        
        else {
          this.error = "Sorry.. invalid credentials!! Not allowd to enter the system...";  
        }
      },
      (error)=>{
        this.error = "Invalid Credentials";
      });
    }
  }

}
        



/*

        else {
          this.error = "Sorry! invalid credentials not allowed to the system!!";
        }

        /*
        if(response==null){
          this.error = "Invalid Username and Password";
        }


        //session storage
        sessionStorage.setItem("Username",response.data.UserName);
        sessionStorage.setItem("RoleID",response.data.role)  

        //local storage
        localStorage.setItem("TOKEN",response.data.ACCESSTOKEN)
        console.log(sessionStorage.getItem("Username"));
        
      }
      
      .
      error=>{

      }
      
    )


  }
}

}*/