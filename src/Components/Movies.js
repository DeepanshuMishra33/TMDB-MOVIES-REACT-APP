import React ,{Component} from "react";
// import {movies} from "./getMovies";
import axios from "axios";
export default class Movies extends Component{
    constructor(){
        super();
        this.state={
            hover:'',
            parr:[1],
            currPage:1,
            movies:[],
            favourites:[]
        }
    }
  async componentDidMount(){
        const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e60086356a1ab420d207c1cd6454bf3b&language=en-US&page=${this.state.currPage}`);
        let data=res.data;
        this.setState({movies:[...data.results]})
        
    }
    changeMovies=async ()=>{
        const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e60086356a1ab420d207c1cd6454bf3b&language=en-US&page=${this.state.currPage}`);
        let data=res.data;
        this.setState({movies:[...data.results]})
    }
    handleRight=()=>{ 
        let tempArr=[];
        for(let i=1;i<=this.state.parr.length+1;i++)
        {
            tempArr.push(i);
        }
        this.setState({
            parr:[...tempArr],
            currPage:this.state.currPage+1
        }, this.changeMovies)
       
    }
    handleLeft=()=>{
        if(this.state.currPage!=1)
        {
            this.setState({
                currPage:this.state.currPage-1
            },this.changeMovies);
        }
        
    }
    handleClick=(value)=>{
        if(value!=this.state.currPage)
        {
            this.setState({
                currPage:value
            },this.changeMovies)
        }
    }
    handleFavourites=(movie)=>{
        let oldData = JSON.parse(localStorage.getItem("movies-app") || "[]")
        if(this.state.favourites.includes(movie.id)){
            oldData = oldData.filter((m)=>m.id!=movie.id)
        }else{
            oldData.push(movie)
        }
        localStorage.setItem("movies-app",JSON.stringify(oldData));
        this.handleFavouritesState();
    }
     handleFavouritesState=()=>{
        let oldData = JSON.parse(localStorage.getItem("movies-app") || "[]")
        let temp = oldData.map((movie)=>movie.id);
        this.setState({
            favourites:[...temp]
        })
    }
    render(){
        // let movie=movies.results;
        return(
           <div >
               <div>
                <h3 className="text-center"><strong>Trending</strong></h3>
                <div className="movies-list">
                    {
                        this.state.movies.map((movieObj)=>(
                            <div className="card movies-card" onMouseEnter={()=>this.setState({hover:movieObj.id})} onMouseLeave={()=>this.setState({hover:''})} >
                            <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}  className="card-img-top movies-image" alt="..." />
                              <h4 className="card-title movies-title">{movieObj.title}</h4>
                              <div className="btn-wrapper ">
                                  {
                                      this.state.hover== movieObj.id && <a href="#" className="btn btn-primary movies-btn" onClick={()=>{this.handleFavourites(movieObj)}}>{this.state.favourites.includes(movieObj.id)?"Remove From favourite":"Add to Favourites"}  </a>
                                  }
                              
                              </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="pagination-div">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" onClick={this.handleLeft}>Previous</a></li>
                        {
                            this.state.parr.map((value)=>(
                                <li className="page-item"><a className="page-link" onClick={()=>(this.handleClick(value))}>{value}</a></li>
                            ))
                        }
                        <li className="page-item"><a className="page-link" onClick={this.handleRight}>Next</a></li>
                    </ul>
                </nav>
            </div>
           </div>
        )
    }
}