import {Customer} from "./Customer.js";
import {BankAccount} from "./BankAccount.js";

const customer1 = new Customer("John", "123456789");
const bankAccount1 = new BankAccount(customer1, 1002);
bankAccount1.deposit(100);
bankAccount1.withdraw(10);
console.log(bankAccount1);

const customer2 = new Customer("Mary", "923456789");
const bankAccount2 = new BankAccount(customer2, 1001);
bankAccount2.deposit(500);
console.log(bankAccount2);

bankAccount1.transfer(50, bankAccount2);
console.log(bankAccount1);
console.log(bankAccount2);

console.log(BankAccount.accounts);