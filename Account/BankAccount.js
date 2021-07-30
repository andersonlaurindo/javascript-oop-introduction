import {Customer} from "../Customer.js";

//Abstract class
export class BankAccount{

    constructor(initialBalance, customer, agency){
        
        if(this.constructor == BankAccount){
            throw new Error("Wrongly instantiated object, abstract class!")
        } 
        
        this._balance = initialBalance;
        this._customer = customer;
        this._agency = agency;
    }

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

    //abstract method
    withdraw(amount){
        throw new Error("Abstract method: withdraw!")
    }

    _withdraw(amount, tax){
        const amountWithdraw = amount * tax;
        if(this._balance >= amountWithdraw && amountWithdraw > 0){
            this._balance -= amountWithdraw;
            return amountWithdraw;
        }

        return 0;
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