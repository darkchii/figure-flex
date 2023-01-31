import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Container, createTheme, CssBaseline, Divider, Grid, Paper, ThemeProvider, Typography } from "@mui/material";
import Header from "./Header";
import Figures from "./Figures/Figures.json";
import FigureModal from "./FigureModal";
import { useEffect, useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [selectedFigure, setSelectedFigure] = useState(null);
  const [isFigureModalOpen, setIsFigureModalOpen] = useState(false);
  const [stats, setStats] = useState({});

  const openFigureDetails = (figure) => {
    setSelectedFigure(figure);
    setIsFigureModalOpen(true);
  }

  useEffect(() => {
    // let total_price = 0;
    // Figures.forEach((figure) => {
    //   figure.data.forEach((data) => {
    //     total_price += data.price;
    //   });
    // });
    const stats = {};
    Figures.forEach((figure) => {
      if (!stats[figure.type]) stats[figure.type] = {
        count: 0,
        price: 0
      };
      stats[figure.type].count += figure.data.length;
      stats[figure.type].price += figure.data.reduce((total, data) => { return total + data.price }, 0);
    });

    Object.values(stats).forEach((stat) => {
      stat.price = stat.price.toFixed(2);
    });
    setStats(stats);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <FigureModal onClose={() => setIsFigureModalOpen(false)} open={isFigureModalOpen} data={selectedFigure} />
      <Container>
        <Header />
        <Paper sx={{ p: 2 }}>
          <Typography variant='h5' sx={{ mb: 2 }}>Stats</Typography>
          <Grid container spacing={2}>
            {
              Object.keys(stats).map((key) => {
                return (
                  <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
                    <Card elevation={3}>
                      <CardHeader titleTypographyProps={{ variant: 'h6' }} title={key} />
                      <CardContent>
                        <Typography variant='body2'>Count: {stats[key].count}</Typography>
                        <Typography variant='body2'>Cost: &euro;{stats[key].price}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })
            }
          </Grid>
          <Divider sx={{ m: 2 }} />
          <Grid container spacing={2}>
            {
              Figures.map((figure) => {
                return (
                  <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
                    <Card elevation={3}>
                      <CardActionArea onClick={() => openFigureDetails(figure)}>
                        <CardHeader titleTypographyProps={{ variant: 'body2' }} title={figure.name} />
                        <CardMedia component='img' height='145' image={figure.images[0].path} alt='Figure Thumbnail' />
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
