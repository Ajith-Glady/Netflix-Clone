import React, { useEffect, useState } from "react";
import {API_KEY,imageURL} from '../../Constants/Constants'
import './Banner.css'
import axios from '../../axios'


function Banner() {
   const [movie,setMovie] = useState()
   useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
         console.log(response.data.results[0]);
         setMovie(response.data.results[0])
      })
   },[])
  return (
   <div className="banner" style={{backgroundImage : `url(${movie ? imageURL+movie.backdrop_path : ''})`}}>
      <div className="content">
         <h1 className="title"> {movie ? movie.title : ''} </h1>
         <div className="banner_buttons">
            <button className="button" >play</button>
            <button className="button" >My list</button>
         </div>
         <h1 className="description"> {movie?movie.overview:''} </h1>
      </div>
      <div className="fade"></div>

   </div>
  );
}

export default Banner;
