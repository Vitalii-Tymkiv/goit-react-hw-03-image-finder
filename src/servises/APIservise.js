import axios from 'axios';
const ACCES_KEY = '30569231-ce5a01de05ade21426f5534e5';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const axiosParams = {
  params: {
    image_type: 'photo',
    orientation: 'horizontal',
  },
};

export const fetchImg = async (query, page) => {
  const url = `?key=${ACCES_KEY}&q=${query}&page=${page}&per_page=12`;
  const { data } = await axios.get(url, axiosParams);
  return data.hits;
};

// axios.defaults.baseURL = 'https://pixabay.com/api';
// axios.defaults.params = {
//   key: '30569231-ce5a01de05ade21426f5534e5',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

// const fetchImg = async ({ query = '', currentPage = 1 }) => {
//   const { data } = await axios.get('', {
//     params: { q: query, page: currentPage },
//   });
//   return data.hits;
// };

// export default fetchImg;

// import axios from 'axios';

// const KEY = '30592640-c7793cd5d6c6bb2f70fd4091c';
// axios.defaults.baseURL = 'https://pixabay.com/api';

// const axiosParams = {
//   params: {
//     safesearch: true,
//     orientation: 'horizontal',
//     image_type: 'photo',
//   },
// };

// export async function fetchImg(query, page) {
//   const axiosUrl = `?key=${KEY}&q=${query}&page=${page}&per_page=12`;
//   const { data } = await axios.get(axiosUrl, axiosParams);
//   return data.hits;
// }
