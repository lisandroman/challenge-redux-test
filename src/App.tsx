import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import { Games } from "./models";
import { Details, Error404, Favorites, Home } from "./pages";

function App() {

  //  const [favs, setFavs] = useState<Games[]>([]);

  //  const addToFavs = (game: Games) => {
  //    if (favs.includes(game)) {
  //      alert(`NO ADDED! "${game.name}" is already in fav list`);
  //      setFavs(favs);
  //    } else {
  //      const newFavList = [...favs, game];
  //      alert(`Game "${game.name}" added to favourites`);
  //      console.log(`Game "${game.name}" added to favourites`);
  //      setFavs(newFavList);
  //    }
  //  };
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/:name" element={<Details />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
