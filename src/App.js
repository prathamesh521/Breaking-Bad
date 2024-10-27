import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import axios from 'axios';
import './App.css';
import CharacterGrid from './components/ui/characters/CharacterGrid';

const App = () => {
  const [allUsers, setAllUsers] = useState([]); // To store all users
  const [filteredUsers, setFilteredUsers] = useState([]); // To store filtered users based on query
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchAllUsers = async () => {
      setIsLoading(true);
      try {
        const result = await axios(`https://jsonplaceholder.typicode.com/users`);
        setAllUsers(result.data);
        setFilteredUsers(result.data); // Initially show all users
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllUsers();
  }, []);

  useEffect(() => {
    // Filter users based on the query
    if (query) {
      const filtered = allUsers.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(allUsers); // If query is empty, show all users
    }
  }, [query, allUsers]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={filteredUsers} />
    </div>
  );
};

export default App;
