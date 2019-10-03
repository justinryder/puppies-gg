import getGiphyApiKey from './getGiphyApiKey';

const createGetRandomCatGif = (apiKey) =>
    () =>
        fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=dog&rating=g`)
            .then(response => response.json())
            .then(json => json.data);

export default createGetRandomCatGif(getGiphyApiKey());
