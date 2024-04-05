import calculate from "./calculate.js";
import CopytoClipBoard from "./CopytoClipBoard.js";
import themeSwitcher from "./themeSwitcher.js";
import { handButtonPress, handClearButton, handTyping } from "./keyhandlers.js";



document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', handButtonPress)
})

document.querySelector('#clear').addEventListener('click', handClearButton)
document.querySelector('#input').addEventListener('keydown', handTyping)
document.querySelector("#equal").addEventListener('click', calculate)
document.querySelector('#copyToClipboard').addEventListener('click', CopytoClipBoard)
document.querySelector('#themeSwitcher').addEventListener('click', themeSwitcher)