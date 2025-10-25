import styles from './keyboard__input.module.scss'

export default () =>
    `
    <div class="${styles.keyboard__input}" data-js-keyboard-input>
        <textarea class="${styles.input__ontop}" data-js-keyboard-textarea></textarea>
        <p class="${styles.p__under}" data-js-keyboard-p></p>
    </div>
    `
