import { useState, useEffect } from "react"
import client from "../helpers/client"
import '../style/jenny.css'


export default function Jenny() {
  
  const [sanityJenny, setSanityJenny]= useState(null)

      useEffect(() => {
        async function fetchJenny() {
          const data = await client.fetch("*[_type == 'people' && fullname == 'Jenny Vollsund']{_id, 'imageURL': image.asset->url, fullname, email, course}")
            setSanityJenny(data[0])
        }
        fetchJenny()
    }, [])
    console.log(sanityJenny) 
  
  return (
    <article className="Jenny">
      <h2>{sanityJenny?.fullname}</h2>
      <img src={sanityJenny?.imageURL} alt={sanityJenny?.fullname} />
      <p>{sanityJenny?.email}</p>
      <p>{sanityJenny?.course}</p>
    </article>
  );
}