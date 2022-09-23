import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";


function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);
    const getMovie = async () => {
        const json = await (
            fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)
            ).json
        setDetail(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
       getMovie();
    },[]);
    return (
    <div>
        <h1>Detail</h1>; 
        <div>  
        {detail.map((d)=>(
            <div key={d}>{d}</div>
        ))}
        </div>
    </div>
    )
    
}

export default Detail;