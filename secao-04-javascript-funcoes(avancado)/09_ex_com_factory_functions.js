function makeCalculator() {
  return {
    display: document.querySelector('.display'),
    inicia() {
      this.buttonPress()
      this.pressEnter()
    },

    pressEnter() {
      document.addEventListener('keyup', function(e) {
        if(e.keyCode === 13) this.quickMaths()
      }.bind(this))
    },
    buttonPress() {
      document.addEventListener('click', function(e) {
        const el = e.target
        if(e.target.classList.contains('btn-num')) this.btnToDisplay(el.innerText)
        if(e.target.classList.contains('btn-clear')) this.clearDisplay()
        if(e.target.classList.contains('btn-del')) this.delDisplay()
        if(e.target.classList.contains('btn-equal')) this.quickMaths()
      }.bind(this))
    },

    btnToDisplay(val) {
      this.display.value += val
    },

    clearDisplay() {
      this.display.value = ''
    },

    delDisplay() {
      this.display.value = this.display.value.slice(0, -1)
    },

    quickMaths() {
      conta = this.display.value
      try {
        if(!conta) {
          alert('Conta inválida')
          return
        }
        this.display.value = eval(conta)
      } catch(e) {
        alert('Conta inválida')
        return
      }
    }
  }
}

const calculator = makeCalculator()
calculator.inicia()