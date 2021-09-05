function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente`)
    return
  }
  this.saldo -= valor
  console.log(`Está aqui os seus ${valor.toFixed(2)} Reais`)
}

Conta.prototype.depositar = function (valor) {
  if (typeof valor !== 'number') {
    console.log(`Só aceitamos dinheiro`);
    return
  }
  if (valor < 0) {
    console.log('Só aceitamos valor maior que 1 real')
    return
  }
  if (valor > 0) this.saldo += valor
  console.log(`Valor  de  ${valor} depositado com sucesso, está aqui seu novo saldo: ${this.saldo.toFixed(2)}`)
}

Conta.prototype.verSaldo = function () {
  console.log(`Ag/c ${this.agencia}/${this.conta}, Este é o seu saldo ${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (this.saldo + this.limite < valor) {
    console.log(`Saldo insuficiente`)
    return
  }
  this.saldo -= valor
  console.log(`Está aqui os seus ${valor.toFixed(2)} Reais`)
}

function ContaPoupaca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupaca.prototype = Object.create(Conta.prototype)
ContaPoupaca.prototype.constructor = ContaPoupaca;



const bancoNext = new Conta('0154', 'next', 1000)
const bancoNext2 = new ContaCorrente('0154', 'next', 1000, 100)
const bancoNext3 = new ContaPoupaca('0154', 'next', 1000, 100)
bancoNext2.sacar(1100)
bancoNext3.sacar(1100)

// bancoNext.sacar(200)
// bancoNext.depositar(200)
// bancoNext.verSaldo()