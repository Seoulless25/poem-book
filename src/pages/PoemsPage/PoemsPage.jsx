import { useState, useEffect } from 'react';
import * as poemsAPI from '../../utilities/poems-api';
import AddPoemForm from '../../components/AddPoemForm/AddPoemForm';
import ListOfPoems from '../../components/ListOfPoems/ListOfPoems';

export default function PoemsPage() {
    const [poems, setPoems] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(function() {
        async function getPoems() {
            const poems = await poemsAPI.index();
            setPoems(poems);
        }
        getPoems()
    }, []);

    function toggleOrder() {
        const newOrder = sortOrder ===  'asc' ? 'desc' : 'asc'
        setSortOrder(newOrder);
    }

    function handleSort(evt) {
        toggleOrder();
        const formatPoems = poems.sort(function(a, b) {
            const aDate = new Date(a.createdAt)
            const bDate = new Date(b.createdAt)

            if (sortOrder === 'asc') return bDate - aDate
            if (sortOrder === 'desc') return aDate - bDate

            return 0;
        })
        setPoems([...formatPoems]);
    }

    return ( 
        <>
            <AddPoemForm poems={poems} setPoems={setPoems} sortOrder={sortOrder} />
            {
                poems.length !== 0 ?
                <div>
                    <button onClick={handleSort}>
                        {sortOrder === 'desc' ? 'Sort in Descending Order' : 'Sort in Ascending Order'}
                    </button>
                    <h2>My Poems</h2>
                    <ListOfPoems poems={poems} setPoems={setPoems} />
                </div>
                :
                <h2>No Poems Added Yet</h2>
            }
        </>
    );
}