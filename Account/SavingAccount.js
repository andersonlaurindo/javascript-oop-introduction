import { BankAccount } from "./BankAccount.js";

export class SavingAccount extends BankAccount{
    constructor(initialBalance, customer, agency){
        super(initialBalance, customer, agency);
    }

    withdraw(amount){
        let tax = 1.02;
        return this._withdraw(amount, tax);
    }
}