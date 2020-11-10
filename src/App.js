import React, {useState, useEffect} from 'react';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import axois from 'axios'
import './App.css';
import CharacterGrid from './components/ui/characters/CharacterGrid';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() =>{
    const fetchItem = async () => {
      const result = await axois (`https://www.breakingbadapi.com/api/characters?name=${query}`)

      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItem()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
       {/* <Search getQuery={(q) => setQuery(q)} /> */}
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
