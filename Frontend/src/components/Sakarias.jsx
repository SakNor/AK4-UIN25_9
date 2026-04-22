import client from '../helpers/client'
import {useEffect, useState} from 'react'
import '../style/sakarias.css'

export default function Sakarias({}){
    const [fetchSakariasSanity, setfetchSakariasSanity] = useState(null)
    useEffect(() => {
        async function fetchSakariasSanity() {
            const sakariasInfo = await client.fetch("*[_type == 'people' && fullname == 'Sakarias Nordberget'] {_id, 'imageURL': image.asset->url, fullname, email, course}")
            setfetchSakariasSanity(sakariasInfo[0])
        }
        setfetchSakariasSanity()
    }, [])
    console.log(fetchSakariasSanity)

return(
    <article>
        <h3>{fetchSakariasSanity?.fullname}</h3>
        <p>{fetchSakariasSanity?.course}</p>
        <a href={`mailto:${fetchSakariasSanity?.email}`}>{fetchSakariasSanity}</a>
        <img src={fetchSakariasSanity?.imageURL} alt={fetchSakariasSanity.fullname}></img>
    </article>

)}