function Calculadora() {

  this.display = document.querySelector('.display')
  this.inicia = () => {
  btnClick()

  }

  const btnClick = () => {
    document.addEventListener('click', function(e) {
      const el = e.target
      if(e.target.classList.contains('btn-num')) this.btnToDisplay(el.innerText)
      if(e.target.classList.contains('btn-clear')) this.clearDisplay()
      if(e.target.classList.contains('btn-del')) this.delDisplay()
      if(e.target.classList.contains('btn-equal')) this.quickMaths()
    }.bind(this))
  }

  this.btnToDisplay = (val) => {
    this.display.value += val
  }

  this.clearDisplay = () => {
    this.display.value = ''
  }

  this.delDisplay = () => {
    this.display.value = this.display.value.slice(0, -1)
  }

  this.quickMaths = () => {
    const conta = this.display.value
    try {
      if (!conta) {
        alert('Conta inválida')
        return
      }
      this.display.value = eval(conta)
    }catch(e) {
      alert('Conta inválida')
      return
    }
  }
}

const calculadora = new Calculadora()

calculadora.inicia()