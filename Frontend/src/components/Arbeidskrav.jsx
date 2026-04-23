import { useEffect, useState } from "react"
import client from "../helpers/client"
import ArbeidskravCard from "./ArbeidskravCard"



export default function Arbeidskrav({}){
const [sanityArbeidskrav, setSanityArbeidskrav]= useState(null)
        useEffect(() => {
        async function fetchArbeidskrav() {
          const arbeidskravData = await client.fetch("*[_type == 'Arbeidskrav'] | order(title asc) {_id, title, beskrivelse}")
            setSanityArbeidskrav(arbeidskravData)
        }
        fetchArbeidskrav()
    }, [])
    console.log(sanityArbeidskrav) 
  
  return (
    <section className="Arbeidskrav">
      {sanityArbeidskrav?.map(p => <ArbeidskravCard key={p._id} p={p}/>)}
    
    </section>
  )
}