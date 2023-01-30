import { Container, createTheme, CssBaseline, Paper, ThemeProvider } from "@mui/material";
import Header from "./Header";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Header />
        <Paper sx={{height: '500px'}}>

        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
