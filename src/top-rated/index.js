import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Movies from './components/Movies';
import './components/comp.css'

export const ŠvercKomerc = () => {
    
}

const TopMovies = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            const data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=1")
            setMovies(data.data.results)
            const shorter = data.data.results;
            setLoading(false)
            shorter.forEach(element => <ŠvercKomerc title = {element.original.title}/>)
        }
        fetchData()
    }, [])
    
  return (
    <div>
      <Search search = {search} setSearch = {setSearch}/>
      <Movies movies = {movies} loading = {loading} />
    </div>
  )
}

export default TopMovies
