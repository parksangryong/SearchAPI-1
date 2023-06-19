import { useEffect, useState } from 'react'
import '../css/Dog.css'
import axios from 'axios';
import queryString from 'query-string';

function Dog () {
    const [dogimg, setDogimg] = useState('');

    useEffect(() => {
        getDog();
    },[]);

    const getDog = async() => {
        const queryObj =  queryString.parse(window.location.search);
        const query = queryObj.query

        console.log(query)

        try {
            const result = await axios.get(`https://dog.ceo/api/breed/${query}/images/random`);   
            console.log(result.data.message)
            setDogimg(result.data.message)
        } catch (ex) {   
            if (ex.response && ex.response.status === 404) {
                console.log('없는 종 입니다.');
            } else {
                console.log('에러 발생');
            }
        }
    }

    return(
        <div id='dog'>
            <img src={dogimg} alt={dogimg} />
        </div>
    )
}

export default Dog