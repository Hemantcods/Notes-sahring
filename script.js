// script.js

// Function to handle adding a new note
document.getElementById('noteForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const noteTitle = document.getElementById('noteTitle').value;
    const noteContent = document.getElementById('noteContent').value;

    if (noteTitle && noteContent) {
        addNoteToDOM(noteTitle, noteContent);
        document.getElementById('noteForm').reset(); // Clear form fields
    }
});

// Function to add a note to the DOM
function addNoteToDOM(title, content) {
    const noteContainer = document.createElement('div');
    noteContainer.classList.add('note');

    noteContainer.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;

    document.getElementById('notesContainer').appendChild(noteContainer);
}

// Function to search notes
function searchNotes() {
    const filter = document.getElementById('searchBar').value.toUpperCase();
    const notes = document.getElementById('notesContainer').getElementsByClassName('note');

    for (let i = 0; i < notes.length; i++) {
        const title = notes[i].getElementsByTagName('h3')[0];
        const textValue = title.textContent || title.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            notes[i].style.display = "";
        } else {
            notes[i].style.display = "none";
        }
    }
}
