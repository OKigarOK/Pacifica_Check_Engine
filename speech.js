export function voiceText(text) {
    const output = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(output);
}
