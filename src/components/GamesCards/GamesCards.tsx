import React, { useEffect, useState } from "react";
import { Games } from "../../models";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../redux/state/favorites";
import { AppStore } from "../../redux/store";

export interface GamesCardsInterface {
  data: Games[];
}

const GamesCards: React.FC<GamesCardsInterface> = ({ data }) => {
  const [favGame, setFavGame] = useState<Games[]>([]);
  const dispatch = useDispatch();

  const addGameToFavs = useSelector((store: AppStore) => store.favorites);

  const findScorer = (game: Games) => !addGameToFavs.find((everyGame) => everyGame.id === game.id);
  const filterScorer = (game: Games) => addGameToFavs.filter((everyGame) => everyGame.id !== game.id);


  const handleAddtoFav = (game: Games) => {
    // const filteredFavs = findScorer(game)
    //   ? filterScorer(game)
    //   : [...favGame, game];
    dispatch(addFavorite(game));
    // setFavGame(filteredFavs)
  };

  

  return (
    <GameListStyled>
      {data?.map((game) => {
        return (
          <div className="cardContainer" key={game.id}>
            <p>{game.name}</p>
            <img src={game.background_image} alt={game.name} />
            <div className="genres">
              <span className="badges">
                {game.genres.map((gen: any) => (
                  <span key={gen.id}>{gen.name} </span>
                ))}
              </span>
            </div>
            <div>
              <Link to={`/${game.name}`}>
                <button className="nes-btn is-primary">+Info</button>
              </Link>
              <span>
                <button
                  className="nes-btn is-success"
                  onClick={() => handleAddtoFav(game)}
                >
                  <i className="nes-icon is-small heart"></i> Add to Fav
                </button>
              </span>
            </div>
          </div>
        );
      })}
    </GameListStyled>
  );
};
export default GamesCards;

const GameListStyled = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 2rem 4rem;

  img {
    width: 250px;
  }
  p {
    font-size: 1rem;
  }
  .cardContainer {
    max-width: 550px;
    border: 1px solid black;
    border-radius: 25px;
    padding: 2rem;
  }
  .badges {
    color: #929292;
    font-size: 0.6rem;
  }
  button {
    margin-right: 1rem;
  }
  .nes-btn {
    margin-top: 1rem;
    font-size: 0.7rem;
    height: 30px;
    padding: 2px 6px;
  }
  .nes-balloon {
    p {
      font-size: 6px;
    }
  }
  /* .nes-icon{
    width: 40px;
  } */
`;
