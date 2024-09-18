const message = "Hello World!"
const flatuMessage = '          hi i am JAy '
const finalMassage = flatuMessage.trim().toLowerCase().toLocaleUpperCase()
console.log(finalMassage)
const CapitalMessage = message.toUpperCase();
console.log(CapitalMessage);

const lastFourDigit = '7856'
const maskedAccountNumber =  lastFourDigit.padStart(16,'*')


const templateString = 'Last Four digit of you account number is  '.concat(lastFourDigit)
const ConcatenatedString = `Last four digit of your account number is${lastFourDigit.padStart('16','*')}`

const bankBalnce = 987

const templateString2 = `I have $${987} in my account .`