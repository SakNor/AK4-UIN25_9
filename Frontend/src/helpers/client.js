import {createClient} from '@sanity/client'

const client = createClient({
    projectId: "8q856t79",
    dataset: "production",
    useCdn: true, 
<<<<<<< HEAD
    apiVersion: "2026-04-13"
=======
    apiVersion: "2026-04-20"
>>>>>>> Sakarias
})

export default client