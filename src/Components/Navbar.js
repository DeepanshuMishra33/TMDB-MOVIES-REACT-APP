import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      // <div className="navbar">
      //     <ul style={{display:"flex",padding:"0.5", listStyleType:"none"}}>
      //         <li >
      //             <Link to='/' style={{textDecoration:"none"}}> <h1 style={{marginTop:'1rem',marginLeft:"1rem"}}> Movies</h1></Link>
      //         </li>
      //         <li>
      //             <Link to='/favourites' style={{textDecoration:"none"}}>  <h2 style={{marginLeft:"1rem",marginTop:"1.2rem"}}>favourites</h2> </Link>
      //         </li>
      //     </ul>
      // </div>
      <div >
        <ul style={{display:"flex",justifyContent:"center", padding:"0.5", listStyleType:"none"}}>
            <li>
            <Link to="/" style={{textDecoration:"none"}}>
                <h1 style={{color:" black", fontWeight:"bolder",fontSize:"60px", marginTop:'1rem'}}>Movies</h1>
            </Link>
            </li>
            <li>
            <Link to="/favourites" style={{textDecoration:"none"}}>
              <h2 style={{color:"black",fontWeight:"bolder",fontSize:"50px", marginLeft:"1rem", marginTop:"1.4rem"}} >
                Favourites
              </h2>
            </Link>
            </li>
        </ul>
      </div>
    );
  }
}
