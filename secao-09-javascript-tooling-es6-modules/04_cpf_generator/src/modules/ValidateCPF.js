export default class ValidateCPF {
  constructor(cpf) {
    Object.defineProperty(this, 'cpfClean', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpf.replace(/\D+/g, '')
    })
  }


  isSequence() {
    return this.cpfClean.charAt(0).repeat(11) === this.cpfClean
  }
  validate() {
    if (this.cpfClean.length !== 11) return false
    // if (this.isSequence()) return false

    const cpfToValidate = this.cpfClean.slice(0, -2).split('')
    const digit1 = ValidateCPF.getDigit(cpfToValidate)
    const digit2 = ValidateCPF.getDigit([...cpfToValidate, digit1])
    const newCpf = [...cpfToValidate, digit1, digit2]
    return newCpf.join('') === this.cpfClean
  }

  static getDigit(cpf) {
    let regressive = cpf.length + 1
    const total = cpf.reduce((acc, num) => {
      acc += Number(num) * regressive
      regressive -= 1
      return acc
    }, 0)
    const digit = 11 - (total % 11)
    return String(digit > 9 ? 0 : digit)
  }

}

const cpf1 = new ValidateCPF('112.352.986-80')
console.log(cpf1.validate())
