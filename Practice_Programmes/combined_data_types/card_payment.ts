let userName: string = 'Keisha';
let accountBalance: number = 1000;
let isCard1Active: boolean = true;
let paymentAmount: number = 300;
if (isCard1Active && accountBalance >= paymentAmount) {
    accountBalance = accountBalance - paymentAmount;
    console.log(userName + ' made a payment.');
    console.log('Remaining balance:' + accountBalance);
} else {
    console.log('payment failed.');
}