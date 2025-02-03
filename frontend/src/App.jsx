import "./App.css"
import { BrowserRouter as Router, Routes, Route } from
  "react-router-dom"
import Header from "./component/Header/Header"
import Home from "./Pages/Home/Home.jsx"
import MovieList from "./component/movieList/MovieList.jsx"
import MovieDetail from "./Pages/movieDetails/movieDetail.jsx"
const App = () => {
  return ([
    <>
      <div className="App">
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="movies/:type" element={<MovieList />} />
            <Route path="/*" element={<h1>Error page</h1>} />
          </Routes>
        </Router>

      </div>
    </>
  ])

}
export default App;

