import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import Config from "./Config";

function Header() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        {Config.Title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;