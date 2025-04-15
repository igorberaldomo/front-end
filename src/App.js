import { useCallback, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const v
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
});
function App() {
  const [data, setData] = useState([]);

  const loaddata = useCallback(async () => {
    const { data: requestdata } = await axiosInstance.get('/');
    setData(requestdata);
    console.log(requestdata);
  }, [])
  useEffect(() => {
    loaddata();
  }, []);
  return (
    <div className="App">
      <h1>{data?.title}</h1>
    </div>
  );
}

export default App;
