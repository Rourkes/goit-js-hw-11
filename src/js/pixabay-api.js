const API_KEY = '44984480-6400f6ac5e39d78263c6545e0';
const URL = 'https://pixabay.com/api/';

function fetchImages(query) {
  const encodedQuery = encodeURIComponent(query);
  const fullUrl = `${URL}?key=${API_KEY}&q=${encodedQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(fullUrl).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

export { fetchImages };
