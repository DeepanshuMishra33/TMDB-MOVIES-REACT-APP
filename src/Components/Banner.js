import { movies } from "./getMovies";
import React, { Component } from "react";
export default class Banner extends Component {
  render() {
      let movie=movies.results;
      

    return (
        
      <div className="card banner-card" >
        <img src={`https://image.tmdb.org/t/p/original${movie[0].backdrop_path}`} className="card-img-top banner-image" alt="..." />
        
          <h1 className="card-title banner-title">{movie[0].title}</h1>
          <p className="card-text banner-text">
            {movie[0].overview}
          </p>
      </div>
    );
  }
}
 