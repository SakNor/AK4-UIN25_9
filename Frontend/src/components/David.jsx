import client from '../helpers/client'
import { useEffect, useState } from "react"
import '../style/david.css'

export default function David({}){
    const [fetchDavidSanity, setfetchDavidSanity]= useState(null)
    useEffect(() => {
        async function fetchDavidSanity() {
          const davidInfo = await client.fetch("*[_type == 'people' && fullname == 'David Braaten'] {_id, 'imageURL': image.asset->url, fullname, email, course}")
          setfetchDavidSanity(davidInfo[0])
        }
        fetchDavidSanity()
      }, [])
    console.log(fetchDavidSanity)
return(
    <article className='davidKort'>
        <h3>{fetchDavidSanity?.fullname}</h3>
        <p>{fetchDavidSanity?.course}</p>
        <a href={`mailto:${fetchDavidSanity?.email}`}>{fetchDavidSanity?.email}</a>
        <img src={fetchDavidSanity?.imageURL} alt={fetchDavidSanity?.fullname}></img>
    </article>
    
)
}