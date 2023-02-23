import axios from 'axios';

const searchImages = async (searchTerm: string) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID hWCOo2a3VY2u0O-xawiq52wazFW5slmjgLNS33B62Tw',
    },
    params: {
      query: searchTerm,
    },
  });

  return response.data.results;
};

export default searchImages;
