import { BankAccount } from "./BankAccount.js";

export class SalaryAccount extends BankAccount{
    constructor(customer){
        super(0, customer, 100);
    }

    withdraw(amount){
        let tax = 1.01;
        return this._withdraw(amount, tax);
    }
}