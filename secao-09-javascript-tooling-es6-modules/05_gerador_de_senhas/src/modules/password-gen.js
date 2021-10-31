const passwordLength = document.querySelector('#password-length')
const addNumbers = document.querySelector('#numbers')
const addUpperCaseLetters = document.querySelector('#uppercase-letters')
const addLowerCaseLetters = document.querySelector('#lowercase-letters')
const addSymbols = document.querySelector('#symbols')
const form = document.querySelector('#form')
const password = document.querySelector('#password')

console.log('aqui')


export default class PasswordGenerator {
  constructor() {
    this.formSubmit()
    this.charset = ''
  }

  formSubmit() {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const generatedPassword = this.generatePassword()
      password.innerText = generatedPassword
    })
  }

  generatePassword() {
    if (passwordLength.value > 20) passwordLength.value = 20
    this.checkCharset()
    let password = ''
    for (let i = 0; i <= passwordLength.value; i++) {
      password += this.charset[Math.floor(Math.random() * this.charset.length)]
    }
    return password
  }

  checkCharset() {
    this.charset = ''
    if(addNumbers.checked) this.charset += this.getNumbers()
    if(addLowerCaseLetters.checked) this.charset += this.getLowerCaseLetters()
    if(addUpperCaseLetters.checked) this.charset += this.getUpperCaseLetters()
    if(addSymbols.checked) this.charset += this.getSymbols()
  }

  getLowerCaseLetters() {
    const lowerCharset = 'abcdefghijklmnopqrstuvwxyz'
    return lowerCharset
    
  }
  getUpperCaseLetters() {
    const upperCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return upperCharset
  }

  getNumbers() {
    const numbersCharset = '0123456789'
    return numbersCharset
  }
  
  getSymbols() {
    const symbolsCharset = '!@#$%&*()-_,'
    return symbolsCharset
  }


}

