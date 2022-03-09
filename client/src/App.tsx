import { BrowserRouter } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import AppRoutes from "modules/appRoutes/AppRoutes";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./store";
import { NotificationContainer } from "react-notifications";

const useStyles = makeStyles(() => ({
  logo: {
    height: "3em",
    verticalAlign: "middle",
  },
}));

const App = () => {
  const styles = useStyles();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to={"/"}>
              <img src={logo} className={styles.logo} alt="logo" />
              PGA Tour
            </Link>
            <Link to={"/tournaments"}>Tournaments List</Link>
            <Link to={"/players"}>Players List</Link>
          </header>
          <AppRoutes />
          <NotificationContainer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
