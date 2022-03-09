import { CircularProgress, Dialog } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent !important",
  },
  root: {
    "& .MuiBackdrop-root": {
      opacity: "0.5 !important",
      backgroundColor: "rgba(255,255,255,0.5) !important",
    },
  },
}));

const PageLoading = () => {
  const styles = useStyles();
  return (
    <Dialog
      open
      fullScreen
      classes={{ paper: styles.loader, root: styles.root }}
    >
      <CircularProgress color="primary" />
    </Dialog>
  );
};

export default PageLoading;
