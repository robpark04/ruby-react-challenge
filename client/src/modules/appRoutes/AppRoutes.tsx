import PlayersList from "modules/playersList/PlayersList";
import PlayerView from "modules/playerView/PlayerView";
import TournamentsList from "modules/tournamentsList/TournamentsList";
import TournamentView from "modules/tournamentView/TournamentView";
import { Routes, Route } from "react-router-dom";

const AppRoutes = (): React.ReactElement | null => {
  const render = (component: JSX.Element) => {
    // const token = localStorage.getItem("token");

    // if (!token) {
    //   return null;
    // }

    return component;
  };

  return (
    <Routes>
      <Route path="/" element={render(<TournamentsList />)} />
      <Route path="/tournaments" element={render(<TournamentsList />)} />
      <Route path="/tournament/:id" element={render(<TournamentView />)} />
      <Route path="/players" element={render(<PlayersList />)} />
      <Route path="/player/:id" element={render(<PlayerView />)} />

    </Routes>
  );
};

export default AppRoutes;
