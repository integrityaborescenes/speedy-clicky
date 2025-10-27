export class keyDetect {
    selectors = {
        textArea: '[data-js-keyboard-textarea]',
        startText: '[data-js-keyboard-p]',
        keyboardInput: '[data-js-keyboard-input]',
        keyboardPreview: '[data-js-keyboard-preview]',
        keyboardButton: 'button',
        startGame: '[data-js-start-game]',
        startGameButton: '[data-js-start-game-button]',
        resultWindow: '[data-js-result-window]',
        tryAgainButton: '[data-js-try-again]',
        resultText: '[data-js-result-count]',
        timerBlock: '[data-js-timerBlock]',
        currentTime: '[data-js-current-time]',
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
        this.tryAgainButton = document.querySelector(this.selectors.tryAgainButton)
        this.resultText = document.querySelector(this.selectors.resultText)
        this.result = document.querySelector(this.selectors.resultWindow)
        this.timerBlock = document.querySelector(this.selectors.timerBlock)
        this.currentTime = document.querySelector(this.selectors.currentTime)

        this.startTesting()
    }

    startTesting () {
        this.keyboardInput.style.filter = 'blur(0.2rem)'
        this.keyboardPreview.style.filter = 'blur(0.2rem)'
        this.keyboardPreview.style.pointerEvents = 'none'
        this.keyboardInput.style.pointerEvents = 'none'
        this.result.style.display = 'none'
        this.startGameButton.addEventListener('click', (e) => {
            this.keyboardInput.style.filter = 'blur(0)'
            this.keyboardPreview.style.filter = 'blur(0)'
            this.startGame.style.display = 'none'
            this.keyboardPreview.style.pointerEvents = 'auto'
            this.keyboardInput.style.pointerEvents = 'auto'
            this.textArea.focus()
            this.whatTheButtonClicked()
            this.isCorrectWord()
        })
    }

    resultWindow(errors,characterCount,timer) {
        if (isNaN(characterCount) || characterCount < this.selectors.originalText.length) {
            this.resultText.textContent = `К сожалению ты не справился, думаю стоит попробовать еще раз =)`
        } else {
            let accurasy = Math.round(((characterCount-errors)/characterCount)*100)
            this.resultText.textContent = `Кол-во ошибок: ${errors} Аккуратность: ${accurasy}%`
        }
        this.startTesting()
        this.pauseTimer()
        this.result.style.display = 'flex'
        this.tryAgainButton.addEventListener('click', (e) => {
            this.keyboardInput.style.filter = 'blur(0)'
            this.keyboardPreview.style.filter = 'blur(0)'
            this.result.style.display = 'none'
            this.keyboardPreview.style.pointerEvents = 'auto'
            this.keyboardInput.style.pointerEvents = 'auto'
            this.textArea.focus()
            this.whatTheButtonClicked()
            this.isCorrectWord()
        })
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
            })

            addEventListener('keyup',(e) => {
            this.keyboardButton.forEach(x => {
                if (e.key === x.value ) {
                    setTimeout(() => { x.style.backgroundColor = 'transparent'; x.style.scale = '1' }, 150);
                }
            })
            })
    }

    timer () {
        let c = 0
        this.timerId = setInterval(() => {
            c++
            if (c<120) {
                if (c<60) {
                    this.currentTime.innerHTML = `${c}s`
                } else {
                    this.currentTime.innerHTML = `1m${c-60}s`
                }
            } else {
                this.resultWindow()
                clearInterval(this.timerId)
            }

        },999)
    }

    pauseTimer () {
        clearInterval(this.timerId)
    }

    isCorrectWord(originalText) {
       const errorPosition = []
        this.timer()
        this.textArea.addEventListener('input', (e) => {
            let newMass = this.selectors.originalText.split('')
            for (let i = 0; i < this.textArea.value.length; i++) {
                if (this.textArea.value.length < newMass.length && this.result.style.display !== 'flex') {
                    if (this.textArea.value[i] !==  this.selectors.originalText[i] && this.selectors.originalText[i]!==' ' && this.textArea.value[i]!==' ') {
                        newMass[i] = `<span style="color: #ef6c75">${this.textArea.value[i]}</span>`
                        if (errorPosition.includes(i)) {

                        } else {
                            errorPosition.push(i)
                        }
                    } else if (this.textArea.value[i] ===  this.selectors.originalText[i]){
                        newMass[i] = `<span style="color: #4895ef">${this.startText.textContent[i]}</span>`
                    } else if (this.selectors.originalText[i] !== ' ' && this.textArea.value[i] === ' ') {
                        newMass[i] = `<span style="color: #ef6c75">${this.selectors.originalText[i]}</span>`
                        if (errorPosition.includes(i)) {

                        } else {
                            errorPosition.push(i)
                        }
                    }
                    else if (this.selectors.originalText[i] === ' ' && this.textArea.value[i] !== ' ') {
                         newMass[i] = `<span style="color: #ef6c75">_</span>`
                        if (errorPosition.includes(i)) {

                        } else {
                            errorPosition.push(i)
                        }
                    }
                } else {
                    this.resultWindow(errorPosition.length,this.textArea.value.length)
                    this.textArea.value = ''
                }
            }
            this.startText.innerHTML = newMass.join('')
        })
    }

}

