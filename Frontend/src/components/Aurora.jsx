import { useEffect, useState } from 'react'
import  client  from '../helpers/client'


export default function Aurora() {
    const [auroraData, setAuroraData]= useState(null)
    
    useEffect(() => {
        async function hentAurora() {
          const auroraInfo = await client.fetch("*[_type == 'personer' && fullt navn == 'Aurora Hansen'] {_id, 'imageURL': image.asset->url, fullname, email, course}")
          setAuroraData(auroraInfo[0])
        }

        hentAurora()
      }, [])

      if (!auroraData) return <p>Laster inn.</p>
      console.log(auroraData)
return(
    <article>
        <h3>Aurora</h3>
    </article>

)
}