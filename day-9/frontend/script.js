async function getNotes(){
    const res = await fetch("/api/notes")
    const data = await res.json()

    const notesDiv = document.getElementById("notes")
    notesDiv.innerHTML = ""

    data.notes.forEach(note => {

        const div = document.createElement("div")
        div.className = "note"

        div.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.description}</p>
        <button onclick="deleteNote('${note._id}')">Delete</button>
        `

        notesDiv.appendChild(div)

    })
}

async function addNote(){

    const title = document.getElementById("title").value
    const description = document.getElementById("description").value

    await fetch("/api/notes",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title,
            description
        })
    })

    getNotes()
}

async function deleteNote(id){

    await fetch(`/api/notes/${id}`,{
        method:"DELETE"
    })

    getNotes()

}

getNotes()
