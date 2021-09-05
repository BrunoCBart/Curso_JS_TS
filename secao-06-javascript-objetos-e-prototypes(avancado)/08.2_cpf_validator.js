function ValidateCPF(cpf) {
  Object.defineProperty(this, 'cleanCpf', {
    enumerable: true,
    get: function () {
      return cpf.replace(/\D+/g, '')
    }
  })
}

ValidateCPF.prototype.validate = function () {
  if (typeof this.cleanCpf === undefined) return 'CPF inválido'
  if (this.cleanCpf.length !== 11) return 'CPF inválido'

  const cpfToValidate = this.cleanCpf.slice(0, -2)
  const digit1 = this.getDigit(cpfToValidate)
  const digit2 = this.getDigit(cpfToValidate + digit1)

  const newCpf = cpfToValidate + digit1 + digit2
  return newCpf === this.cleanCpf ? 'CPF válido' : 'CPF inválido'
}

ValidateCPF.prototype.getDigit = function (cpf) {
  const cpfArray = Array.from(cpf)
  let regressive = cpfArray.length + 1
  const total = cpfArray.reduce((acc, num) => {
    acc += Number(num) * regressive;
    regressive--
    return acc
  }, 0)

  const digit = 11 - (total % 11)
  return digit > 9 ? '0' : String(digit)
}


const cpfValidator = new ValidateCPF('112.352.986-80')
console.log(cpfValidator.validate())