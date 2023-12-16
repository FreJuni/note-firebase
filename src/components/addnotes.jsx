import React, { useState } from 'react'

const AddNotes = ({getData}) => {
    const [note,setNote] = useState("");

 

    const handler = async (e) => {
        e.preventDefault();

        if(note === "") {
            alert("Please enter notes.")
            return;
        }

        try {
            await fetch("https://firenote-a9c70-default-rtdb.firebaseio.com/noteapp.json",{
                method : "POST",
                body : JSON.stringify(note),
                headers : {
                    "Content-Type" : "application/json",
                },
               });
        
               setNote("");
               getData();
        }
        catch(err) {
            alert("something went wrong")
        }
    }


  return (
    <section >
        <form className='add-note-con' onSubmit={handler}>
            <input type='text' placeholder='Add notes here' value={note} onChange={(e) => setNote(e.target.value)}></input>
            <button>Add Note</button>
        </form>
    </section>
  )
}

export default AddNotes