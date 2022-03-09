import PlayersList from "modules/playersList/PlayersList";
import PlayerView from "modules/playerView/PlayerView";
import TournamentsList from "modules/tournamentsList/TournamentsList";
import TournamentView from "modules/tournamentView/TournamentView";
import { Routes, Route } from "react-router-dom";

const AppRoutes = (): React.ReactElement | null => {
  return (
    <Routes>
      <Route path="/" element={<TournamentsList />} />
      <Route path="/tournaments" element={<TournamentsList />} />
      <Route path="/tournament/:id" element={<TournamentView />} />
      <Route path="/players" element={<PlayersList />} />
      <Route path="/player/:id" element={<PlayerView />} />
    </Routes>
  );
};

export default AppRoutes;
