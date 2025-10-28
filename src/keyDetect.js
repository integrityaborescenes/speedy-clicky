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
        maxRating: '[data-js-max-rating]',
        originalText: [
            'No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.',

            'Every child has the right to education and protection, allowing them to grow in dignity, develop their abilities, and prepare for a responsible life in a free and just society where equality and respect are valued.',

            'Every individual has the right to freedom of movement and residence within the borders of each state. Everyone may leave any country, including his own, and return to it without obstruction or unnecessary delay by any authority or institution.',

            'Everyone has the right to own property alone as well as in association with others, and no one shall be deprived of their property arbitrarily or unlawfully, whether by state decision or by private interference, without fair and lawful compensation.',

            'No person shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms. Every human being has the right to liberty and personal security under the protection of law.',

            'Everyone has the right to freedom of opinion and expression. This right includes freedom to hold opinions without interference and to seek, receive, and impart information and ideas through any media and regardless of frontiers or restrictions.',

            'All people are equal before the law and are entitled without any discrimination to equal protection of the law. Everyone has the right to equal protection against any incitement to discrimination or violation of human dignity.',

            'Every person has the right to work, to free choice of employment, to just and favorable conditions of labor, and to protection against unemployment, exploitation, or any form of discrimination in the workplace.',

            'Men and women of full age, without any limitation due to race, nationality or religion, have the right to marry and to found a family. They are entitled to equal rights as to marriage, during marriage and at its dissolution.',

            'Everyone has the right to an adequate standard of living for himself and his family, including food, clothing, housing, medical care and necessary social services, and to security in the event of unemployment, sickness or old age.',

            'Every individual has the right to take part in the government of their country, directly or through freely chosen representatives. The will of the people shall be the basis of the authority of government, expressed in genuine elections held periodically.'
        ]

    }

    constructor() {
        const randomText = this.selectors.originalText[
            Math.floor(Math.random() * this.selectors.originalText.length)
            ];
        const textElement = document.querySelector(this.selectors.startText).innerHTML = randomText
        this.originalText = randomText
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
        this.maxRating = document.querySelector(this.selectors.maxRating)
        this.startTesting()
    }

    startTesting () {
        this.keyboardInput.style.filter = 'blur(0.2rem)'
        this.keyboardPreview.style.filter = 'blur(0.2rem)'
        this.timerBlock.style.filter = 'blur(0.2rem)'
        this.keyboardPreview.style.pointerEvents = 'none'
        this.keyboardInput.style.pointerEvents = 'none'
        this.result.style.display = 'none'
        if (window.localStorage.getItem('maxRating') === null) {
            this.maxRating.innerHTML = "У вас еще нет рейтинга (o_0)"
        } else {
            this.maxRating.innerHTML = `Ваш максимальный рейтинг: ${window.localStorage.getItem('maxRating')}`
        }
        this.startGameButton.addEventListener('click', (e) => {
            this.keyboardInput.style.filter = 'blur(0)'
            this.keyboardPreview.style.filter = 'blur(0)'
            this.timerBlock.style.filter = 'blur(0)'
            this.startGame.style.display = 'none'
            this.keyboardPreview.style.pointerEvents = 'auto'
            this.keyboardInput.style.pointerEvents = 'auto'
            this.textArea.focus()
            this.whatTheButtonClicked()
            this.isCorrectWord()
        })
    }

    resultWindow(errors,characterCount) {
        this.pauseTimer()
        this.timerBlock.style.visibility = 'hidden'
        if (isNaN(characterCount) || characterCount < this.selectors.originalText.length) {
            this.resultText.textContent = `К сожалению ты не справился, думаю стоит попробовать еще раз =)`
        } else {
            let words = this.originalText.split(' ').length
            let accurasy = Math.round(((characterCount-errors)/characterCount)*100)
            let WPM = Math.round((words/this.c)*60)
            let koefErrors = 1-(errors/characterCount)
            let rating = Math.round(WPM * (accurasy/100) * koefErrors)
            if (window.localStorage.getItem('maxRating') >= rating ) {

            } else {
                window.localStorage.setItem('maxRating',`${rating}`)
            }

            this.resultText.innerHTML = `Кол-во ошибок: ${errors}<br>
            Аккуратность: ${accurasy}%<br>
            Затраченное время: ${this.currentTime.textContent}<br>
            Рейтинг: ${rating}`
        }
        this.startTesting()
        this.result.style.display = 'flex'
        this.tryAgainButton.addEventListener('click', (e) => {
            this.keyboardInput.style.filter = 'blur(0)'
            this.keyboardPreview.style.filter = 'blur(0)'
            this.timerBlock.style.filter = 'blur(0)'
            this.result.style.display = 'none'
            this.timerBlock.style.visibility = 'visible'
            this.keyboardPreview.style.pointerEvents = 'auto'
            this.keyboardInput.style.pointerEvents = 'auto'
            this.textArea.focus()
            this.whatTheButtonClicked()
            this.isCorrectWord()
        })
    }


    whatTheButtonClicked() {
        const audio = [
            new Audio('public/key__sounds/a.wav'),
            new Audio('public/key__sounds/b.wav'),
            new Audio('public/key__sounds/c.wav'),
            new Audio('public/key__sounds/caps_lock.wav'),
            new Audio('public/key__sounds/d.wav'),
            new Audio('public/key__sounds/e.wav'),
            new Audio('public/key__sounds/enter.wav'),
            new Audio('public/key__sounds/f.wav'),
            new Audio('public/key__sounds/g.wav'),
            new Audio('public/key__sounds/h.wav'),
            new Audio('public/key__sounds/i.wav'),
            new Audio('public/key__sounds/j.wav'),
            new Audio('public/key__sounds/k.wav'),
            new Audio('public/key__sounds/l.wav'),
            new Audio('public/key__sounds/m.wav'),
            new Audio('public/key__sounds/n.wav'),
            new Audio('public/key__sounds/o.wav'),
            new Audio('public/key__sounds/p.wav'),
            new Audio('public/key__sounds/q.wav'),
            new Audio('public/key__sounds/r.wav'),
            new Audio('public/key__sounds/s.wav'),
            new Audio('public/key__sounds/shift.wav'),
            new Audio('public/key__sounds/t.wav'),
            new Audio('public/key__sounds/tab.wav'),
            new Audio('public/key__sounds/u.wav'),
            new Audio('public/key__sounds/v.wav'),
            new Audio('public/key__sounds/w.wav'),
            new Audio('public/key__sounds/x.wav'),
            new Audio('public/key__sounds/y.wav'),
            new Audio('public/key__sounds/z.wav'),
        ];
        const audioSpace = new Audio('public/key__sounds/space.wav')
        addEventListener('keydown', (e) => {
            let randIndex = Math.floor(Math.random()*audio.length)
            if (e.key==='Enter' || e.ctrlKey===true) {
                e.preventDefault()
            }
            if (e.key !== ' ') {
                audio[randIndex].play().catch()
            } else {
                audioSpace.play().catch()
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
        this.c = 0
        this.timerId = setInterval(() => {
            this.c++
            if ( this.c<120) {
                if ( this.c<60) {
                    this.currentTime.innerHTML = `${ this.c}s`
                } else {
                    this.currentTime.innerHTML = `1m${ this.c-60}s`
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
            let newMass = this.originalText.split('')
            for (let i = 0; i < this.textArea.value.length; i++) {
                if (this.textArea.value.length < newMass.length && this.result.style.display !== 'flex') {
                    if (this.textArea.value[i] !==  this.originalText[i] && this.originalText[i]!==' ' && this.textArea.value[i]!==' ') {
                        newMass[i] = `<span style="color: #ef6c75">${this.textArea.value[i]}</span>`
                        if (errorPosition.includes(i)) {
                        } else {
                            errorPosition.push(i)
                        }
                    } else if (this.textArea.value[i] ===  this.originalText[i]){
                        newMass[i] = `<span style="color: #4895ef">${this.startText.textContent[i]}</span>`
                    } else if (this.originalText[i] !== ' ' && this.textArea.value[i] === ' ') {
                        newMass[i] = `<span style="color: #ef6c75">${this.originalText[i]}</span>`
                        if (errorPosition.includes(i)) {

                        } else {
                            errorPosition.push(i)
                        }
                    }
                    else if (this.originalText[i] === ' ' && this.textArea.value[i] !== ' ') {
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

