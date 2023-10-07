import { Loan } from "./loan";
import { LoanOfficer } from "./loan-officer";
import { Status } from "./status";

export class Customer {

    customerId: number;
    customerName: string;
    phoneNumber: number;
    address: string;
    
    loanOfficerId: number; 
    loanOfficer: LoanOfficer;

    loanId: number;
    loan: Loan;

    statusId: number;
    status: Status;

    feedback: string = "";

    active: boolean;
}
