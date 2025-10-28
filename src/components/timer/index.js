import styles from './timer.module.scss'

export default () =>
    `
    <div class="${styles.timer}" data-js-timerBlock>
        <p class="${styles.currentTimer}" data-js-current-time>0s</p>
        <p class="${styles.maxRating}" data-js-max-rating>1</p>
    </div>
    `
