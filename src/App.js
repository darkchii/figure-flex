import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Container, createTheme, CssBaseline, Grid, Paper, ThemeProvider, Typography } from "@mui/material";
import Header from "./Header";
import Figures from "./Figures/Figures.json";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const openFigureDetails = (figure) => {
    console.log(figure);
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Header />
        <Paper sx={{ p: 2 }}>
          <Grid container spacing={2}>
            {
              Figures.map((figure) => {
                return (
                  <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
                    <Card elevation={3}>
                      <CardActionArea onClick={() => openFigureDetails(figure)}>
                        <CardHeader titleTypographyProps={{variant: 'body2'}} title={figure.name} />
                        <CardMedia component='img' height='196' image={figure.images[0].path} alt='Figure Thumbnail' />
                      </CardActionArea>
                    </Card>
                  </Grid>
                )
              })
            }
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
