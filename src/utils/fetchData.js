export const exerciseOptions ={
  method: 'GET',
  params: {limit: '100'},
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key':  '9780180ecfmsh2888abe05b3fe14p19998ejsn84b1d126138d'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '9780180ecfmsh2888abe05b3fe14p19998ejsn84b1d126138d',
  },
};
  
  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
  
    return data;
  };

