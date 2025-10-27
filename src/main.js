import './styles/main.scss';
import keyboard__input from "./components/keyboard__input";
import keyboard__preview from "./components/keyboard__preview";
import startGame__window from "./components/start-game__window";
import {keyDetect} from "./keyDetect.js";
import result__windows from "./components/result__windows/index.js";

document.querySelector('.typing-test-container').innerHTML = `
  ${startGame__window()}
  ${keyboard__input()}
  ${keyboard__preview()}
  ${result__windows()}
`

new keyDetect ()