function cpfValidator(cpf) {
  const cleanCpf = Array.from(cpf.replace(/\D+/g, ''));
  if (cleanCpf.length !== 11) return 'CPF inválido.'
  if (typeof cleanCpf === undefined) return 'CPF inválido'

  const cpfToVerify = cleanCpf.slice(0, -2)
  const digit1 = getDigits(cpfToVerify)
  const digit2 = getDigits([...cpfToVerify, digit1])
  const newCPf = [...cpfToVerify, digit1, digit2]
  console.log(newCPf, cleanCpf)

  return newCPf.join('') === cleanCpf.join('') ? 'CPF válido' : 'CPF inválido'

}

const getDigits = (cpf) => {
  let regressive = cpf.length + 1
  const total = cpf.reduce((acc, num) => {
    acc += Number(num) * regressive
    regressive -= 1
    return acc
  }, 0)
  const digit = 11 - (total % 11)
  return String(digit > 9 ? 0 : digit)
}




const cpf = '112.352.986-80'
console.log(cpfValidator(cpf))