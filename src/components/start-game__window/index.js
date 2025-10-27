import styles from './start-game__window.module.scss'

export default () =>
    `
    <div class="${styles.startGame}" data-js-start-game>
        <p>Нажмите, чтобы начать.</p>
        <button class="${styles.startGameButton}" data-js-start-game-button><p>Начать</p></button>
    </div>
    `
