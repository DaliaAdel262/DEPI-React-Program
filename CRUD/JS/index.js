var noteTitle = document.getElementById("NoteTitle");
var noteContent = document.getElementById("NoteContent");
var oldNotes = document.getElementById("table_of_notes");
var noteList = []

function getNoteContent(){
    var note = {
        title:noteTitle.value,
        content:noteContent.value,
    }
    return note;
}

function clearNote(){
    noteTitle.value="";
    noteContent.value="";
}

function addNote(){
    var note_to_add = getNoteContent();
    noteList.push(note_to_add);
    clearNote();

    var box= `<tr>
               <td>${noteList.indexOf(note_to_add)+1}</td>
               <td>${note_to_add.title}</td>
               <td>22/07/2024</td>
               <td>Delete</td>
              </tr>`
    oldNotes.innerHTML += box 
}

