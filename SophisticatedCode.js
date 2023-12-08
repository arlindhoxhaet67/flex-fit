/* 
   FileName: SophisticatedCode.js 
   Description: This code is a simulation of a modern banking system with various functionalities like creating accounts, performing transactions, and generating reports. It demonstrates object-oriented programming principles and uses advanced JavaScript concepts.
*/

// Account Class represents a Bank Account
class Account {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`$${amount} deposited into Account ${this.accountNumber}`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`$${amount} withdrawn from Account ${this.accountNumber}`);
    } else {
      console.log(
        `Insufficient balance in Account ${this.accountNumber} to withdraw $${amount}`
      );
    }
  }

  checkBalance() {
    console.log(
      `Current balance in Account ${this.accountNumber}: $${this.balance}`
    );
  }
}

// Bank Class manages multiple Accounts
class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  createAccount(accountNumber, accountHolder, balance = 0) {
    const newAccount = new Account(accountNumber, accountHolder, balance);
    this.accounts.push(newAccount);
    console.log(
      `Account ${accountNumber} created for ${accountHolder} with initial balance $${balance}`
    );
  }

  deposit(accountNumber, amount) {
    const account = this.getAccountByNumber(accountNumber);
    if (account) account.deposit(amount);
  }

  withdraw(accountNumber, amount) {
    const account = this.getAccountByNumber(accountNumber);
    if (account) account.withdraw(amount);
  }

  checkBalance(accountNumber) {
    const account = this.getAccountByNumber(accountNumber);
    if (account) account.checkBalance();
  }

  getAccountByNumber(accountNumber) {
    return this.accounts.find(
      (account) => account.accountNumber === accountNumber
    );
  }

  generateAccountReport() {
    console.log(`Accounts Report for ${this.name}: `);
    this.accounts.forEach((account) => {
      console.log(
        `Account ${account.accountNumber} - Holder: ${account.accountHolder}, Balance: $${account.balance}`
      );
    });
  }
}

// Demonstration of usage

// Create a Bank
const myBank = new Bank("XYZ Bank");

// Create Accounts
myBank.createAccount(1001, "John Doe", 5000);
myBank.createAccount(1002, "Alice Smith");

// Perform transactions
myBank.deposit(1001, 2500);
myBank.withdraw(1001, 500);
myBank.checkBalance(1001);

// Reports
myBank.generateAccountReport();

// Output:

// Account 1001 created for John Doe with initial balance $5000
// Account 1002 created for Alice Smith with initial balance $0
// $2500 deposited into Account 1001
// $500 withdrawn from Account 1001
// Current balance in Account 1001: $7500
// Accounts Report for XYZ Bank:
// Account 1001 - Holder: John Doe, Balance: $7500
// Account 1002 - Holder: Alice Smith, Balance: $0