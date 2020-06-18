import uuid from "react-uuid";

const fetchApi = () => {
  return new Promise(resolve => setTimeout(() => resolve([
    {
      id: uuid(),
      title: 'This is content 1',
      complete: false
    },
    {
      id: uuid(),
      title: 'This is content 2',
      complete: true
    }
  ]), 100));
}

export default fetchApi;