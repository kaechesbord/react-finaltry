import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Movies from './components/Movies';
import './components/comp.css'
import MovieDetails from './components/MovieDetails';


const TopMovies = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)
    const [originalMovies, setOriginalMovies] = useState([])

    useEffect(() => {
      const fetchData = async() => {
          const data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=1")
          setLoading(false)
          setMovies(data.data.results)
          setOriginalMovies(data.data.results)
      }
      fetchData()
  }, [])
  
useEffect(()=>{
  if(search.length > 0) {
    const slicedMovies = originalMovies.slice();
    const moviesForSearch = [...slicedMovies]
    const filteredMovies = moviesForSearch.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
    setMovies(filteredMovies)
  }
  else {
      setMovies(originalMovies)
  }
}, [search])
  return (
    <div>
      {movies.map(element => <MovieDetails title = {element.original_title}/>)}
      <Search search = {search} setSearch = {setSearch}/>
      <Movies movies = {movies} loading = {loading}/>
    </div>
  )
}

export default TopMovies
