import styles from './keyboard__input.module.scss'

export default () =>
    `
    <div class="${styles.keyboard__input}">
        <textarea class="${styles.input__ontop}" autofocus></textarea>
        <p class="${styles.p__under}"></p>
    </div>
    `
