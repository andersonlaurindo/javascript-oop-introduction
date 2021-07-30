import { BankAccount } from "./BankAccount.js";

export class CurrentAccount extends BankAccount{
    static accounts = 0;

    constructor(customer, agency){
        super(0, customer, agency);
        CurrentAccount.accounts++;
    }

    withdraw(amount){
        let tax = 1.1;
        return this._withdraw(amount, tax);
    }
}