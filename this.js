const acount = {
    number: "1213414234424",
    amount: 100,
    deposit(cuantity) {
        this.amount = this.amount + cuantity
    },
    withdraw(cuantity) {
        this.amount = this.amount - cuantity
    }
}
acount.deposit(100)
acount.deposit(50)
acount.deposit(50)
console.log(acount)

acount.withdraw(10)
acount.withdraw(200)
console.log(acount)

