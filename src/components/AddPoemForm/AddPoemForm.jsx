import { useState } from 'react';
import * as poemsAPI from '../../utilities/poems-api';
import './AddPoemForm.css';

export default function AddPoemForm({ poems, setPoems, sortOrder }) {
    const [newPoem, setNewPoem] = useState('');
    const [error, setError] = useState('');

    function handleChange(evt) {
        setNewPoem(evt.target.value);
        setError('');
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const poem = await poemsAPI.create(newPoem);
            sortOrder === 'asc' ? setPoems([...poems, poem]) : setPoems([poem, ...poems]);
            setNewPoem('');
        }   catch {
            setError('Failed to create poem: Please try again');
        }
    }

    return (
        <div>
            <div className='form-container'>
                <form onSubmit={handleSubmit} >
                    <label>Poem</label>
                    <input type="text" name="text" value={newPoem} onChange={handleChange} required/>
                    <button className='submit' type="submit">Add Poem</button>
                </form>
            </div>
            <p className='error-message'>{error}</p>
        </div>
    )
}