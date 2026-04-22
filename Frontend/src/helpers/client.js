import {createClient} from '@sanity/client'

const client = createClient({
    projectId: "8q856t79",
    dataset: "production",
    useCdn: true, 
    apiVersion: "2026-04-20"
})

export default client