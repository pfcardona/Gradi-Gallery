const API = 'https://raw.githubusercontent.com/msoler18/Gradi-Gallery/master/api/gradiAuthors.json';

const getData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
  
  
};

export default getData;