import './styles/main.scss';
import keyboard__input from "./components/keyboard__input";
import keyboard__preview from "./components/keyboard__preview";

document.querySelector('.typing-test-container').innerHTML = `
  ${keyboard__input()}
  ${keyboard__preview()}
`

