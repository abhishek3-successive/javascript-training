// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().
class BankAccount {
    constructor(balance , owner){
        this.balance = balance
        this.owner = owner
    }

    deposit(n){
        if(n>0){
        console.log(`sucessfully deposit the amount : ${n}`)
        this.balance += n;
        }
        else{
            console.log(`pls enter the amount greater than 0 `)
        }
    }

    withdraw(n){
        if(n>0){
        console.log(`sucessfully withdraw the amount : ${n}`)
        this.balance -= n
        }
          else{
            console.log(`pls enter the amount greater than 0 `)
        }
    }
    displaybalance(){
        console.log(this.balance)
    }
}

let owner = new BankAccount(1000000, "Goku");
owner.deposit(-5)
owner.withdraw(-6)
owner.displaybalance();

