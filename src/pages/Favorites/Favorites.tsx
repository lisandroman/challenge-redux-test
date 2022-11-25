import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { allFavGames } from "../../redux/state/favorites";

export interface FavoritesInterface {}

const Favorites: React.FC<FavoritesInterface> = () => {
  const getFavs = useSelector(allFavGames);
  const dispatch = useDispatch<any>();

  console.log(getFavs);

  return (
    <div>
      <h3>Favorites...</h3>
      <h3>Items in Favorites: {getFavs.length}</h3>
      <FavoritesStyle>
        {getFavs?.map((favsGames: any) => (
          <div key={favsGames.id}>
            <img src={favsGames.background_image} alt="" />
            <span key={favsGames.id}>{favsGames.name}</span>
            <button>X</button>
          </div>
        ))}
      </FavoritesStyle>
      <Link to="/">
        <button className="nes-btn is-success">Go Back</button>
      </Link>
    </div>
  );
};

export default Favorites;

const FavoritesStyle = styled.div`
  display: grid;
  img {
    max-width: 60;
    max-height: 60px;
  }
  h3 {
    color: red;
  }
  button{
    margin-left: 10px;
  }
`;
