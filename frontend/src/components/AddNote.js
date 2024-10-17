import React, { useState } from 'react'
import axios from 'axios'

function AddNote() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            const {data} = await axios.post('http://localhost:5000/api/routes/add-note', {title, desc})
            if(data.message==='ok'){
                alert("Note added successfully.")
                setTitle('')
                setDesc('')
            }else{
                alert("Something went wrong.")
            }
        }catch(e){
            console.error(e)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title'/>
                <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} rows='5' placeholder='Description'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddNote
