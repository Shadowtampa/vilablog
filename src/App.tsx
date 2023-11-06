import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header"
import { Landing } from "./pages/Landing/Landing"

import axios from './service/axios';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/posts', {
      params: {
        fetchImages: true,
      }
    })
      .then(data => {
        setData(data.data.items);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header page="Blog" />
      {data && <Landing articles={data} />}

      <footer>footer</footer>
    </>
  )
}

export default App
