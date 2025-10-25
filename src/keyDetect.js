export class keyDetect {
    selectors = {
        textArea: '[data-js-keyboard-textarea]',
        startText: '[data-js-keyboard-p]',
        keyboardInput: '[data-js-keyboard-input]',
        keyboardPreview: '[data-js-keyboard-preview]',
        keyboardButton: 'button',
        startGame: '[data-js-start-game]',
        startGameButton: '[data-js-start-game-button]',
        originalText: 'No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.'
    }

    constructor() {
        this.originalText = document.querySelector(this.selectors.startText).innerHTML = `${this.selectors.originalText}`
        this.textArea = document.querySelector(this.selectors.textArea)
        this.startText = document.querySelector(this.selectors.startText)
        this.keyboardButton = document.querySelectorAll(this.selectors.keyboardButton)
        this.keyboardInput = document.querySelector(this.selectors.keyboardInput)
        this.keyboardPreview = document.querySelector(this.selectors.keyboardPreview)
        this.startGame = document.querySelector(this.selectors.startGame)
        this.startGameButton = document.querySelector(this.selectors.startGameButton)
        this.startTesting()
        this.isCorrectWord()
    }

    startTesting () {
        this.keyboardInput.style.filter = 'blur(0.2rem)'
        this.keyboardPreview.style.filter = 'blur(0.2rem)'
        this.startGameButton.addEventListener('click', (e) => {
            this.keyboardInput.style.filter = 'blur(0)'
            this.keyboardPreview.style.filter = 'blur(0)'
            this.startGame.style.display = 'none'
            this.textArea.focus()
        })

        this.whatTheButtonClicked()
        this.isCorrectWord()
    }


    whatTheButtonClicked() {
        addEventListener('keydown', (e) => {
            if (e.key==='Enter' || e.ctrlKey===true) {
                e.preventDefault()
            }
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
            console.log(e)
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
                if (this.textArea.value[i] !==  this.selectors.originalText[i] && this.selectors.originalText[i]!==' ' && this.textArea.value[i]!==' ') {
                    newMass[i] = `<span style="color: #ef6c75">${this.textArea.value[i]}</span>`
                    countErrors ++
                } else if (this.textArea.value[i] ===  this.selectors.originalText[i]){
                    newMass[i] = `<span style="color: #4895ef">${this.startText.textContent[i]}</span>`
                } else if (this.selectors.originalText[i] !== ' ' && this.textArea.value[i] === ' ') {
                    newMass[i] = `<span style="color: #ef6c75">${this.selectors.originalText[i]}</span>`
                }
                else if (this.selectors.originalText[i] === ' ' && this.textArea.value[i] !== ' ') {
                     newMass[i] = `<span style="color: #ef6c75">_</span>`
                }
            }
            this.startText.innerHTML = newMass.join('')
        })
    }

}

