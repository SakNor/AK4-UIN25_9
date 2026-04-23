import client from '../helpers/client'
import { useEffect, useState } from "react"
import '../style/Aurora.css'

export default function Aurora({}){
    const [fetchAuroraSanity, setfetchAuroraSanity]= useState(null)
    useEffect(() => {
        async function fetchAuroraSanity() {
          const auroraInfo = await client.fetch("*[_type == 'people' && fullname == 'Aurora Hansen'] {_id, 'imageURL': image.asset->url, fullname, email, course}")
          setfetchAuroraSanity(auroraInfo[0])
        }
        fetchAuroraSanity()
      }, [])
    console.log(fetchAuroraSanity)
return(
    <article className="Aurora">
        <h3>{fetchAuroraSanity?.fullname}</h3>
        <p>{fetchAuroraSanity?.course}</p>
        <a href={`mailto:${fetchAuroraSanity?.email}`}>{fetchAuroraSanity?.email}</a>
        <img src={fetchAuroraSanity?.imageURL} alt={fetchAuroraSanity?.fullname}></img>
    </article>
    
)
}