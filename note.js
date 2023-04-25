const addNote = document.querySelector(".addNote");
const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
    notes.forEach(note => addNewNote(note))
}
    
addNote.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    <div class="note">
        <div class="tools">
            <button class="delete"><img src="/icon/xmark-solid.svg"></button>
            <button class="edit"><img src="/icon/pen-solid.svg"></button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
        <div class="colors">
        <button onclick="white()" class="white"></button>
        <button onclick="violet()" class="violet"></button>
        <button onclick="purpule()" class="purpule"></button>
        <button onclick="blue()" class="blue"></button>
        <button onclick="monza()" class="monza"></button>
        </div>
    </div>`;

    const del = note.querySelector(".delete");
    const edit = note.querySelector(".edit");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");
    
    


    textArea.value = text
    main.innerHTML = text

    
    del.addEventListener('click', () => {
        note.remove()
        updateNote()
    });

    edit.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    });

    textArea.addEventListener('input', (e) => {
        const { value } = e.target
        main.innerHTML = (value)
        updateNote()
    });

        document.body.appendChild(note);
}
function updateNote() {
    const noteText = document.querySelectorAll('textarea')
    const notes = []
    noteText.forEach(note => notes.push(note.value))
    localStorage.setItem('notes', JSON.stringify(notes))
}
