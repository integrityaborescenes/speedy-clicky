export class keyDetect {
    selectors = {
        keyboardInput: '.keyboard__input',
        textArea: '.input__ontop',
        startText: '.p__under',
        keyboardPreview: '.keyboard__preview',
        keyboardButton: 'button',
        keyboardButtonRow: '.keyboard__previewRow',
        keyboardButtonText: 'button',
    }

    constructor() {
        this.keyboardInput = document.querySelector(this.selectors.keyboardInput)
        this.inputText = document.querySelector(this.selectors.textArea)
        this.startText = document.querySelector(this.selectors.startText)
        this.keyboardButtonRow = document.querySelector(this.selectors.keyboardButtonRow)
        this.keyboardButton = document.querySelectorAll(this.selectors.keyboardButton)
        this.whatTheButtonClicked()
    }

    whatTheButtonClicked () {
            addEventListener('keydown',(e) => {
                this.keyboardButton.forEach(x => {
                    if (e.key === x.value ) {
                        x.style.backgroundColor = '#4895ef'
                        if (e.key !== ' ') {
                            x.style.scale = '0.92'
                        }
                    }
                })
            })

        addEventListener('keyup',(e) => {
            this.keyboardButton.forEach(x => {
                if (e.key === x.value ) {
                    x.style.backgroundColor = 'transparent'
                    x.style.scale = '1'
                }
            })
        })
    }
}

