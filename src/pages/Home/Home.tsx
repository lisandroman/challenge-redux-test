import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GamesCards, Pagination } from "../../components";
import { IGame } from "../../models";
import { fetchGames, allGames, getGamesStatus, getGamesErrors } from '../../redux/state/games';


export interface HomeInterface {
}

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch<any>();
  const getAllGames = useSelector(allGames);
  const gamesStatus = useSelector(getGamesStatus);
  const gamesErrors = useSelector(getGamesErrors);
 

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);
  const [initialPage] = useState(1);

  useEffect(() => {
    if (gamesStatus === "idle") {
      dispatch(fetchGames());
    }
  }, [gamesStatus, dispatch]);

  let content;

  if (gamesStatus === "loading") {
    content = (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  } else if (gamesStatus === "succeeded") {
    content = getAllGames?.map((game: IGame) => (
      <div key={game.id}>
        <span>{game.id} -</span>
        <span> {game.name} -</span>
        {/* <span> Rating:{game.rating}</span> */}
      </div>
    ));
  } else if (gamesStatus === "failed") {
    content = <p>{gamesErrors}</p>;
  }


  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = getAllGames?.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(getAllGames?.length / recordsPerPage);

  return (
    <div>
      {/* <h4>Games found: {content?.length}</h4> */}
      <GamesCards data={currentRecords}/>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        indexOfFirstRecord={indexOfFirstRecord}
      />
    </div>
  );
};

export default Home;
