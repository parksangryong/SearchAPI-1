import { useState } from 'react';
import '../css/Header.css'

function Header () {
    const [query, setQuery] = useState('');
    const [ch, setCh] = useState('');

    const search = () => {
        window.location.href = ch + `?query=${query}`
    } 
    const moveDog = () => {
        setCh(window.location.href + '/dog')
        window.location.href = '/dog'
    }
    const moveCat = () => {
        setCh(window.location.href + '/cat')
        window.location.href = '/cat'
    }
    return(
        <div id='header'>
            <ul>
                <li><button className={window.location.href === 'http://localhost:3000/' ? "active" : ''} onClick={() => window.location.href = '/'}>Home</button></li>
                <li><button className={window.location.href.indexOf('dog') !== -1 ? "active" : ''} onClick={moveDog}>Dog</button></li>
                <li><button className={window.location.href.indexOf('cat') !== -1 ? "active" : ''} onClick={moveCat}>Cat</button></li>
            </ul>
            <div className='search'>
                <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)} 
                 placeholder={window.location.href.indexOf('cat') !== -1 ? 'ex: cute' : 'dog name'} />
                <button onClick={search}>검색</button>
            </div>
        </div>
    )
}

export default Header