import { useState } from "react"

export default function Jenny() {
  
  const [sanityJenny, setSanityJenny]= useState(null)

      useEffect(() => {
        async function fetchJenny() {
            const sanityJenny = await client.fetch("*[_type == 'people' && name == 'Jenny Vollsund'] {_id,}  imageURL': image.asset->url, name, email, course}")
            setSanityJenny(sanityJenny)
        }
        fetchJenny()
    }, [])
    console.log(sanityJenny) 
  
  return (
    <article>
      <img src={sanityJenny.imageURL} alt={sanityJenny.name} />
      <h2>{sanityJenny.name}</h2>
      <p>{sanityJenny.email}</p>
      <p>{sanityJenny.course}</p>
    </article>
  );
}