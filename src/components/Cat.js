import '../css/Cat.css'
import axios from 'axios';
import queryString from 'query-string';
import { useEffect, useState } from 'react';


function Cat () {
    const [catimg, setCatimg] = useState('');

    useEffect(
        () => {
            getCat();
        }, []
    )

    const getCat = async() => {
        const queryObj = queryString.parse(window.location.search)
        const query = queryObj.query

        console.log(query)

        try {
            const result = await axios.get(`https://cataas.com/cat/${query}`);
            console.log(result.config.url)
            setCatimg(result.config.url);
        } catch (ex) {   
            if (ex.response && ex.response.status === 404) {
                console.log('없는 단어 입니다.');
            } else {
                console.log('에러 발생');
            }
        }
    }

    return(
        <div id='cat'>
            <img src={catimg} alt={catimg} />
        </div>
    )
}

export default Cat