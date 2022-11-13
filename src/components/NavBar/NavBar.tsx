import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { allGames, searchGameByName } from "../../redux/state/games";

const NavBar = () => {
  const dispatch = useDispatch();
  const getAllGames = useSelector(allGames);
  // const searchRef = useRef<HTMLInputElement>(null);

  // const searchRef: any = useRef()

  const handleSubmit = (e: any) => e.preventDefault();

  const handleChange = (e: any) => {
    // dispatch(searchGameByName(e.target.value));
    // if (!e.target.value) return getAllGames;
    dispatch(searchGameByName(e.target.value))
  };

  return (
    <NavBarStyled>
      <Link to="/">
        <h1>Challenge</h1>
      </Link>
      <Link to="/favorites">
        <button className="nes-btn is-error">Favorites</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="nes-input"
          name=""
          onChange={handleChange}
          // ref={searchRef}
          placeholder="Search by name..."
        />
      </form>
    </NavBarStyled>
  );
};

export default NavBar;

const NavBarStyled = styled.div`
  display: flex;
  background-color: #7cb1f1;
  height: 60px;
  a {
    text-decoration: none;
  }
  h1 {
    margin: 0 auto;
    color: white;
    margin-left: 4rem;
  }
  form {
    margin-right: 4rem;
    margin-left: 4rem;

    input {
      ::placeholder {
        font-size: 0.75rem;
      }
    }
  }
`;
