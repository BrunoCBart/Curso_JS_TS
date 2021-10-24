import ValidateCPF from './ValidateCPF';

export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min))
  }

  formatCpf(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    );
  }

  generateNewCpf() {
    const cpfWithoutDigit = this.rand().split('');
    const digit1 = ValidateCPF.getDigit(cpfWithoutDigit)
    const digit2 = ValidateCPF.getDigit([...cpfWithoutDigit, digit1])
    const newCpf = [...cpfWithoutDigit, digit1, digit2]
    return this.formatCpf(newCpf.join(''))
  }
}