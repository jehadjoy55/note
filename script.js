// Get all necessary elements
const welcomeScreen = document.getElementById('welcome-screen');
const passwordScreen = document.getElementById('password-screen');
const notepadScreen = document.getElementById('notepad');
const startButton = document.getElementById('start-button');
const passwordInput = document.getElementById('password-input');
const passwordSubmit = document.getElementById('password-submit');
const passwordError = document.getElementById('password-error');
const noteContent = document.getElementById('note-content');
const saveNoteButton = document.getElementById('save-note');
const newPadButton = document.getElementById('new-pad');

// Correct password
const correctPassword = "78907890";

// Start Button - Move to Password Screen
startButton.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    passwordScreen.classList.remove('hidden');
});

// Password Submit - Validate and Open Notepad
passwordSubmit.addEventListener('click', () => {
    if (passwordInput.value === correctPassword) {
        passwordScreen.classList.add('hidden');
        notepadScreen.classList.remove('hidden');
    } else {
        passwordError.classList.remove('hidden');
    }
});

// Save Notes in LocalStorage
saveNoteButton.addEventListener('click', () => {
    const noteContentValue = noteContent.value.trim();
    if (!noteContentValue) {
        alert("Note is empty!");
        return;
    }
    const noteKey = `note_${new Date().getTime()}`;
    localStorage.setItem(noteKey, noteContentValue);
    alert("Note saved successfully!");
});

// Open New Pad
newPadButton.addEventListener('click', () => {
    noteContent.value = '';
    alert("New pad opened!");
});
