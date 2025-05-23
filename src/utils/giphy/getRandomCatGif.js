import getGiphyApiKey from './getGiphyApiKey';

const createGetRandomCatGif = (apiKey) =>
    () =>
        fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=dog&rating=g`)
            .then(response => response.json())
            .then(json => json.data)
            .then(data => data.images.original.url)
            .catch((e) => console.log('createGetRandomCatGif error', e) || 'https://placekitten.com/300/500');

export default createGetRandomCatGif(getGiphyApiKey());
