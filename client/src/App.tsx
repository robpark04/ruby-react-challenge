import { BrowserRouter } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import AppRoutes from "modules/appRoutes/AppRoutes";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import store from "./store";
import { NotificationContainer } from "react-notifications";
import {
  Container,
  createTheme,
  Divider,
  Stack,
  ThemeProvider,
} from "@mui/material";

const useStyles = makeStyles(() => ({
  logo: {
    height: "3em",
    verticalAlign: "middle",
  },
  headerLinks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
  },
}));
const theme = createTheme({});

const App = () => {
  const styles = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Container
            component={"header"}
            sx={{
              paddingTop: "0.5em",
              paddingBottom: "0.5em",
            }}
          >
            <Stack direction="row" spacing={2}>
              <Link to={"/"} className={styles.headerLinks}>
                <img src={logo} className={styles.logo} alt="logo" />
              </Link>
              <Link to={"/tournaments"} className={styles.headerLinks}>
                Tournaments
              </Link>
              <Link to={"/players"} className={styles.headerLinks}>
                Players
              </Link>
            </Stack>
            <Divider />
          </Container>
          <main>
            <Container
              sx={{
                mt: 3,
                position: "relative",
                minHeight: "calc(100vh - 90px)",
              }}
            >
              <AppRoutes />
              <NotificationContainer />
            </Container>
          </main>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
