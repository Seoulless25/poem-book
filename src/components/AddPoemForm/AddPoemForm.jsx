import { useState } from 'react';
import * as poemsAPI from '../../utilities/poems-api';
import './AddPoemForm.css';

export default function AddPoemForm({ poems, setPoems, sortOrder }) {
    const [newPoem, setNewPoem] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newGenre, setNewGenre] = useState('');
    const [error, setError] = useState('');

    function handleChangePoem(evt) {
        setNewPoem(evt.target.value);
        setError('');
    }

    function handleChangeTitle(evt) {
        setNewTitle(evt.target.value);
        setError('');
    }

    function handleChangeGenre(evt) {
        setNewGenre(evt.target.value);
        setError('');
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const poem = await poemsAPI.create(newPoem, newTitle, newGenre);
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
                    <label>Title</label>
                    <input type="text" name="title" value={newTitle} onChange={handleChangeTitle} required/>
                    <label>Write your poem</label>
                    <textarea name="text" value={newPoem} onChange={handleChangePoem} required
                        rows={7}
                        cols={40}
                    />
                    <label>Genre</label>
                    <select name="Genre" defaultValue="" onChange={handleChangeGenre} required>
                        <option disabled value="">-- Select an option --</option>
                        <option value="Standard">Standard</option>
                        <option value="Haiku">Haiku</option>
                        <option value="Prose">Prose</option>
                        <option value="Free Verse">Free Verse</option>
                        <option value="Sonnet">Sonnet</option>
                    </select>
                    <button className='submit' type="submit">Add Poem</button>
                </form>
            </div>
            <p className='error-message'>{error}</p>
        </div>
    )
}