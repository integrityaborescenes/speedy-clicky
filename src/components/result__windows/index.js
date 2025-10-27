import styles from './result__window.module.scss'

export default () =>
    `
    <div class="${styles.resultWindow}" data-js-result-window>
        <p data-js-result-count></p>
        <button class="${styles.tryAgainButton}" data-js-try-again><p>Попробовать снова</p></button>
    </div>
    `
