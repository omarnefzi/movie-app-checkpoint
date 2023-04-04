import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import { Routes,Route } from "react-router";
import MoviesDetails from "./pages/MoviesDetail";




const App=()=> {

  return (
<>
<NavBar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/movies" element={<Movies />} />
<Route path="/movies/:id" element={<MoviesDetails />} />
<Route path="/*" element={<NotFound />} />
</Routes>
<Footer />
</>
  );
}

export default App;
