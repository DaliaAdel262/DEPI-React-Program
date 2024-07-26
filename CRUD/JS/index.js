var noteTitle = document.getElementById("NoteTitle");
var noteContent = document.getElementById("NoteContent");
var oldNotes = document.getElementById("table_of_notes");
var noteList = []

if(localStorage.getItem("Notes")!=null){
    noteList=JSON.parse(localStorage.getItem("Notes"));
    displayNotes();
}

function clearNote(){
    noteTitle.value="";
    noteContent.value="";
}

function addNote(){
    var note = {
        title:noteTitle.value,
        content:noteContent.value,
    }
    noteList.push(note);
    localStorage.setItem("Notes",JSON.stringify(noteList));
    displayNotes();
    clearNote();
}

function displayNotes(){
    var box=``;
    for(var i=0;i<noteList.length;i++){
        box+= `<tr>
               <td>${i+1}</td>
               <td>${noteList[i].title}</td>
               <td>22/07/2024</td>
               <td><button onclick="deleteNote(${i})">Delete</button></td>
              </tr>`
    }
    
    oldNotes.innerHTML = box; 
}

function deleteNote(index){
    noteList.splice(index,1);
    localStorage.setItem("Notes",JSON.stringify(noteList));
    displayNotes();
}