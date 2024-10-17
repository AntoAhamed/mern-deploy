import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Notes() {
    const [notes, setNotes] = useState([])

    const fetch = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/routes/get-notes')
            if (data.message === 'something went wrong') {
                alert("Something went wrong.")
            } else {
                setNotes(data.notes)
            }
        } catch (e) {
            console.error(e)
        }
    }

    const handleRemove = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:5000/api/routes/remove-note/${id}`)
            if (data.message === 'ok') {
                fetch()
                
                alert("Successfully removed.")
            } else {
                alert("Something went wrong.")
            }
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div>
            {notes.length === 0 ? "No notes to show" :
                notes.map((note, index) => {
                    return <div key={index}>
                        <p>{index + 1}. {note.title}</p>
                        <p>{note.description}</p>
                        <button onClick={() => handleRemove(note._id)}>Remove</button>
                    </div>
                })}
        </div>
    )
}

export default Notes
