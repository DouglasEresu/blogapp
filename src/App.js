
import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState, createContext } from "react";
import Article from "./Pages/Article"
import Error from "./Pages/Error"
import Navigation from "./Navigation"
import Login from './Pages/Login';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Logout from './Pages/Logout';
import Post from './Pages/Post';

export const DataCreateContext = createContext();

function App() {
  const [data] = useState("Dave");

  // create a useEffect to retrive that user name from localStorage.
  // setData/ setUser in the useEffect to that data in the local Storage.

  return (
    
<DataCreateContext.Provider value={data}>

    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/post" element={<Post />} />
      <Route path="/article/:id" element={<Article />}></Route>
      <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>

     </DataCreateContext.Provider>
  );
}

export default App;