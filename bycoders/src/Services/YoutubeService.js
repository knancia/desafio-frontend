import {gapi} from './GoogleClient'


export const searchVideos = async (query) => {
    
    const {result} = await gapi.client.youtube.search.list({
        q: query,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        order: 'relevance'
    });

    return result.items
}

export const getById = async (id) => {
   const result = await gapi.client.youtube.videos.list({
       id,
        part: 'snippet',
    });

    return result.items
}
