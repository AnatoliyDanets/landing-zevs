import { CircularProgress } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";

export default function Loader({ loading }) {
    return (
        <Backdrop
            sx={{ color: "#d2ba40", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}
