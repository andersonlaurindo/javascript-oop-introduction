import {Customer} from "./Customer.js";
import {CurrentAccount} from "./Account/CurrentAccount.js";
import {SavingAccount} from "./Account/SavingAccount.js";
import {SalaryAccount} from "./Account/SalaryAccount.js";
import { Manager } from "./Employee/Manager.js";
import { Director } from "./Employee/Director.js";
import { Authentication } from "./Authentication.js";

const customer1 = new Customer("John", "123456789", "abc");
const bankAccount1 = new CurrentAccount(customer1, 1002);
bankAccount1.deposit(1000);
bankAccount1.withdraw(100);
console.log(bankAccount1);

const bankAccount2 = new SavingAccount(0, customer1, 1001);
bankAccount2.deposit(500);
console.log(bankAccount2);

const bankAccount3 = new SalaryAccount(customer1);
bankAccount3.deposit(500);
console.log(bankAccount3);

bankAccount1.transfer(50, bankAccount2);
console.log(bankAccount1);
console.log(bankAccount2);

console.log(CurrentAccount.accounts);

const director1 = new Director("Adam", 10000, 123456987);
director1.registerPassword("123");
const manager1 = new Manager("Simon", 5000, 523456987);

const isLogged = Authentication.login(customer1, "abc");

console.log(isLogged);