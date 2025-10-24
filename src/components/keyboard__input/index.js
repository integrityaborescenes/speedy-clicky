import styles from './keyboard__input.module.scss'

export default () =>
    `
    <div class="${styles.keyboard__input}">
        <textarea class="${styles.input__ontop} "></textarea>
        <p class="${styles.p__under}">No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him. No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.</p>
    </div>
    `
