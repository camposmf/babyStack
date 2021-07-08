import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

let api = axios.create({
  baseURL: "http://localhost:8081/"
});

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks(){
      let res = await api.get('/livros');
      setBooks(res.data);
    }

    loadBooks();

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {books.map ( x =>
          <div className="App-Db">
            <div className="App-Nome" key={x._id}> 
                <p>{x.nome}</p>
            </div>
            <div className="App-Ano" key={x.ano}> 
              <p>{x.ano}</p>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
