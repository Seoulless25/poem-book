import Poem from '../Poem/Poem';

export default function ListOfPoems({ poems, setPoems }) {
    const poem = poems.map(n =>
        <Poem
            poems={poems}
            setPoems={setPoems}
            poem={n}
            key={n._id}
        />
    );

    return (
        <>
            {poem}
        </>
    );
}