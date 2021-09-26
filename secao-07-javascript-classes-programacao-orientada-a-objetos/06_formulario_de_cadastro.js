// const submitBtn = document.querySelector('#btn-submit')
const nameInput = document.querySelector('#name')
const lastNameInput = document.querySelector('#last-name')
const cpfInput = document.querySelector('#cpf')
const passInput = document.querySelector('#pass')
const passRepeatInput = document.querySelector('#pass-repeat')

class ValidateForm {
  constructor() {
    this.form = document.querySelector('.forms')
    this.eventos()
  }

  eventos() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault()
      this.handleSubmit()
    })
  }

  handleSubmit() {
    const validInputs = this.inputsAreNotBlank()
    // console.log(validInputs, 'inputs')
    const validName = this.nameCheck()
    // console.log(validName, 'validName')
    const validCPF = this.validateCpf()
    // console.log(validCPF, 'validCPF')
    const validPass = this.passwordCheck()
    // console.log(validPass, 'validPass')

    if (validInputs && validName && validCPF && validPass) {
      alert('Formulário enviado')
      this.form.submit()
    }

  }

  inputsAreNotBlank() {
    let blank = true
    const formInputs = this.form.querySelectorAll('input')
    const errorMsg = this.form.querySelectorAll('.error-msg')

    if (errorMsg) errorMsg.forEach(error => error.remove())
    formInputs.forEach(input => {
      const label = input.previousElementSibling
      if (!input.value) {
        this.makeErrorMessage(input, `${label.innerHTML} não pode estar em branco`)
        blank = false
      }
    })
    return blank
  }

  nameCheck() {
    if (this.nameHasProperCharacters() && this.nameHasProperlength()) return true
    return false
  }

  nameHasProperCharacters() {
    const name = nameInput.value
    const regex = /^[A-Za-z0-9_-]*$/
    let onlyNumsLetters = regex.test(name)
    if (!onlyNumsLetters) this.makeErrorMessage(nameInput, 'Nome precisa ser composto por apenas letras e números, sem espaços')
    if (!name) onlyNumsLetters = false
    return onlyNumsLetters
  }

  nameHasProperlength() {
    const name = nameInput.value
    if (name.length < 3 || name.length > 12) this.makeErrorMessage(nameInput, 'Nome precisa ter entre 3 e 12 caracteres')
    return name.length >= 3 && name.length <= 12 ? true : false;
  }

  passwordCheck() {
    if (this.passwordHasProperlength() && this.repeatPasswordIsEqual()) return true
    return false
  }

  passwordHasProperlength() {
    const password = passInput.value
    if (password.length < 6 || password.length > 12) this.makeErrorMessage(passInput, 'Senha precisa ter entre 6 e 12 caracteres')
    return password.length >= 6 && password.length <= 12 ? true : false;
  }

  repeatPasswordIsEqual() {
    const password = passInput.value
    const repeatPass = passRepeatInput.value

    if (password !== repeatPass) {
      this.makeErrorMessage(passInput, 'Repetir senha e senha devem ser igual a senha')
      this.makeErrorMessage(passRepeatInput, 'Repetir senha e senha devem ser igual a senha')
    }

    return password === repeatPass;
  }


  isSequence(cpf) {
    return cpf.charAt(0).repeat(11) === cpf
  }

  cpfIsValid(cpf) {

    if (cpf.length !== 11) {
      this.makeErrorMessage(cpfInput, 'O CPF precisa ter 11 digitos')
      return false
    }
    if (this.isSequence(cpf)) {
      this.makeErrorMessage(cpfInput, 'O CPF não pode ser sequência')
      return false
    }
    return true

  }

  validateCpf() {
    let cpf = cpfInput.value;
    const regex = /\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11}/
    const cpfIsMatch = cpf.match(regex)

    if (!cpfIsMatch) {
      this.makeErrorMessage(cpfInput, 'O cpf deve estar no formato de digitos ou com ponto e hífen')
      return false
    }

    cpf = cpf.replace(/\D+/g, '')
    if (!this.cpfIsValid(cpf)) return false

    const cpfToVerify = Array.from(cpf.slice(0, -2));

    const newCpf = this.getDigit(cpfToVerify).join('')

    if (newCpf !== cpf) this.makeErrorMessage(cpfInput, 'Digite um CPF válido')
    return newCpf === cpf;
  }


  getDigit(cpfToVerify) {
    const digit1 = this.cpfDigit(cpfToVerify);
    const digit2 = this.cpfDigit([...cpfToVerify, digit1]);
    return [...cpfToVerify, digit1, digit2]
  }
  cpfDigit(cpf) {
    let regressive = cpf.length + 1

    const total = cpf.reduce((acc, num) => {
      acc += Number(num) * regressive
      regressive -= 1
      return acc
    }, 0)
    const digit = 11 - (total % 11)
    return String(digit > 9 ? 0 : digit)
  }



  makeErrorMessage(input, msg) {
    const div = document.createElement('div')
    div.innerHTML = msg;
    div.classList.add('error-msg')
    input.insertAdjacentElement('afterend', div)
  }
}

const validate = new ValidateForm()