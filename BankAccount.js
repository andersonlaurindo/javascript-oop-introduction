import {Customer} from "./Customer.js";

export class BankAccount{
    static accounts = 0;
    agency;
    _customer;
    _balance = 0;

    set customer(newCustomer){
        if(newCustomer instanceof Customer){
            this._customer = newCustomer;
        }
    }

    get customer(){
        return this._customer;
    }

    get balance(){
        return this._balance;
    }

    constructor(customer, agency){
        this._customer = customer;
        this.agency = agency;
        BankAccount.accounts++;
    }

    withdraw(value){
        if(this._balance >= value && value > 0){
            this._balance -= value;
            return value;
        }
    }

    deposit(value){
        if(value <= 0) return;
        this._balance += value;
    }

    transfer(value, bankAccount){
        const witdrawValue = this.withdraw(value);
        bankAccount.deposit(witdrawValue);
    }
}