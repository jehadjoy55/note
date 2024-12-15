// Initial Welcome Screen to Password Screen
document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('password-screen').classList.remove('hidden');
});

// Password Protection
const correctPassword = "78907890";

document.getElementById('password-submit').addEventListener('click', () => {
    const passwordInput = document.getElementById('password-input').value;
    if (passwordInput === correctPassword) {
        document.getElementById('password-screen').classList.add('hidden');
        document.getElementById('notepad').classList.remove('hidden');
    } else {
        document.getElementById('password-error').classList.remove('hidden');
    }
});

// Save Notes in LocalStorage
document.getElementById('save-note').addEventListener('click', () => {
    const noteContent = document.getElementById('note-content').value;
    if (noteContent.trim() === "") {
        alert("Note is empty!");
        return;
    }
    const noteKey = `note_${new Date().getTime()}`;
    localStorage.setItem(noteKey, noteContent);
    alert("Note saved successfully!");
});

// Open New Pad
document.getElementById('new-pad').addEventListener('click', () => {
    document.getElementById('note-content').value = '';
    alert("New pad opened!");
});
