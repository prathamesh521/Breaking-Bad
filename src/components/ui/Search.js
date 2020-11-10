import React,{ useState } from 'react';

const Search = ({ getQuery }) => {
    const[text, setText] = useState('')

    // const onChange = (q) =>{
    //     setText(q);
    //     getQuery(q);
    // }

    const onChange = (a) => {
        setText(a);
        getQuery(a);
    }
    return (
        <section className="search">
            <form>
                <input type="text" placeholder="Search Character" value ={text} onChange={(e) => onChange(e.target.value)}/>
            </form>
        </section>
    )
}

export default Search
