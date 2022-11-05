import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap';
import NavBar from "./components/NavBar";
import MoveList from "./components/MoviesList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'
import axios from "axios"

function App() {
  const APIKey = "aaad33cf7ec5affe1bad17260048f348"
  const [movies, setMovies] = useState([])
  const [count, setCount] = useState(0)
  const getAllMovies = async _=> {
    const res =  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=ar`)
    setMovies(res.data.results)
    setCount(res.data.total_pages)
  }
  const getPage = async page => {
    const res =  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=ar&page=${page}`)
    setMovies(res.data.results)
  }
  const serachByMovies = async word => {
    if(word !== ""){
      const res =  await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=ar&query=${word}`)
      setMovies(res.data.results)
      setCount(res.data.total_pages)
    }else{
      setMovies(getAllMovies())
    }
  }
  useEffect(() => {
    getAllMovies()
  }, [])
  return (
    <div className="font color-body">
        <Router>
          <NavBar search={serachByMovies}/>
          <Container>
            <Routes>
              <Route path='/' element={<MoveList movies={movies} getPage={getPage} pageCount={count}/>}/>
              <Route path="/movie/:id" element={<MovieDetails />}/>
            </Routes>
          </Container>
        </Router>
    </div>
  )
}

export default App
