import { useState } from 'react';
import * as poemsAPI from '../../utilities/poems-api';
import './Poem.css';

export default function Poem({ poem, poems, setPoems }) {
    const [visable, setVisable] = useState(false);
    const [editPoem, setEditPoem] = useState(poem.text);
    const date = new Date(poem.createdAt)

    async function handleDelete() {
        const deletePoem = await poemsAPI.deletePoem(poem._id);
        setPoems(poems.filter(function(n) {
            return n._id !== deletePoem._id
        })); 
    }

    function handleChange(evt) {
        setEditPoem(evt.target.value);
    }

    async function handleEdit() {
        setVisable(!visable);
        const updatedPoem = await poemsAPI.edit(poem._id, editPoem);
        const updatedPoems = poems.map(n => {
            if (n._id === updatedPoem._id) {
                n.text = updatedPoem.text
            }
            return n 
        })
        setPoems(updatedPoems)
    }

    function handleKeyPress(evt) {
        if (evt.key === 'Enter') {
            handleEdit()
        }
    }

    function toggleInput() {
        setVisable(!visable);
    }

    return (
        <div className='poem-container'>
            <div className='poem-info'>
                <p className='poem-data'>{date.toLocaleString()} &nbsp; </p>
                <p className='poem-title'>Title:&nbsp;&nbsp;{poem.title}</p>
                <p className='poem-genre'>&nbsp;&nbsp;Genre: {poem.genre}</p>
                { visable &&
                    <div>
                        <input onKeyDown={handleKeyPress} value={editPoem}  onChange={handleChange} />
                    </div>
                }
            </div>
            { !visable &&
                <div className='poem-content'>
                    <p className='poem-text'>&nbsp;&nbsp;{poem.text}</p>
                </div>
            }
            <div className='poem-buttons'>
             <button
                    onClick={toggleInput}
                    className='edit-poem'
                    >
                    Edit
                    </button>
                <button
                    className='delete-poem'
                    onClick={handleDelete}
                 >
                    Delete
                     </button>
            </div>
        </div>
    )
};