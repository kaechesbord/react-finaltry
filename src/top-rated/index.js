import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Movies from './components/Movies';
import './components/comp.css'

export const ŠvercKomerc = () => {
    console.log(true) //Nisam znao sta ovdje da stavim ali koristim funkciju da prebacim element."neki atribut iz data results" u MovieDetails.js
}

const TopMovies = () => {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            const data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=1")
            setLoading(false)
            setMovies(data.data.results)
            const shorter = data.data.results;
            shorter.forEach(title => <ŠvercKomerc title = {title.original_title}/>)
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
