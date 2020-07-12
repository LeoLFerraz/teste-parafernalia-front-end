export function getYoutubeVideos(param, maxResults = 4, page = "") {
    return fetch(`https://www.googleapis.com/youtube/v3/search?q=${param}&pageToken=${page}&maxResults=${maxResults}&part=snippet,id&key=AIzaSyCj3QOaJxGdRVsEVh3KdAhmcTFFI0gERdU`, {
        method: 'GET'
    });
    /* Relevant items from return:
        id.videoId <-- used for embedding
        snippet.channelTitle <-- maybe use @ player view details?
        snippet.channelId <-- use with channelTitle to link to channel
        snippet.description <-- use @ player view
        snippet.title <-- use @ preview and player view
        snippet.thumbnail <-- use @ preview
        publishTime
     */
}
