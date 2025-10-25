export class keyDetect {
    selectors = {
        textArea: 'textarea',
        startText: 'p',
        keyboardButton: 'button',
        originalText: 'No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.'
    }

    constructor() {
        this.originalText = document.querySelector(this.selectors.startText).innerHTML = `${this.selectors.originalText}`
        this.textArea = document.querySelector(this.selectors.textArea)
        this.startText = document.querySelector(this.selectors.startText)
        this.keyboardButton = document.querySelectorAll(this.selectors.keyboardButton)
        this.whatTheButtonClicked()
        this.isCorrectWord()
    }



    whatTheButtonClicked() {
        addEventListener('keydown', (e) => {
            this.keyboardButton.forEach(x => {
                if (e.key === x.value) {
                    x.style.backgroundColor = '#4895ef'
                    if (e.key !== ' ') {
                        x.style.scale = '0.92'
                    } else {
                        x.style.scale = '0.98'
                    }
                }
            })
            })

            addEventListener('keyup',(e) => {
            this.keyboardButton.forEach(x => {
                if (e.key === x.value ) {
                    setTimeout(() => { x.style.backgroundColor = 'transparent'; x.style.scale = '1' }, 150);
                }
            })
            })
    }

    isCorrectWord(originalText) {
        this.textArea.addEventListener('input', (e) => {
            let countErrors = 0
            let newMass = this.selectors.originalText.split('')
            for (let i = 0; i < this.textArea.value.length; i++) {
                if (this.textArea.value[i] !==  this.selectors.originalText[i]) {
                    newMass[i] = `<span style="color: #ef6c75">${this.textArea.value[i]}</span>`
                    countErrors ++
                } else {
                    newMass[i] = `<span style="color: #4895ef">${this.startText.textContent[i]}</span>`
                }
            }
            this.startText.innerHTML = newMass.join('')
            console.log(countErrors)
        })
    }

}

