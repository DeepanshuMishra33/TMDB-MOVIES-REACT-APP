import {BrowserRouter as Router,Routes,Switch, Route} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import Favourites from "./Components/Favourites";
function App() {
  return (
      /* <Navbar/>
      <Banner/>
      <Movies/>
      <Favourites/> */
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<div><Banner/><Movies/></div>}/>
          <Route path='/favourites' element={<Favourites/>}/>
        </Routes>
      </Router>
  );
}

export default App;
