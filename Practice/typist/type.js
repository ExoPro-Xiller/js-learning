const typedText = document.getElementById("event");
const typingStatus = document.getElementById("type");
const ignoredKeys = [
    "CapsLock", "Shift", "Control", "Alt", "Tab", "Escape", "Meta",
    "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"
];
let typingTimer;

typingStatus.textContent = "Not typing";

window.addEventListener("keydown", function (event) {
    if (ignoredKeys.includes(event.key)) {
        return;
    }

    if (event.key === "Backspace") {
        typedText.textContent = typedText.textContent.slice(0, -1);
    } else {
        typedText.textContent += event.key;
    }

    typingStatus.textContent = "Typing";

    clearTimeout(typingTimer);
    typingTimer = setTimeout(function () {
        typingStatus.textContent = "Not typing";
    }, 500);
});