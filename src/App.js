import './Styles/App.scss';
import theme from './Styles/_theme.scss';
import Stack from 'react-bootstrap/Stack';
import { ThemeProvider } from "styled-components";
import ParticleBackground from './Components/ParticleBackground';
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <ParticleBackground /> */}
      <NavBar />

      <Stack gap={5} className="p-4 bg-dark">
        <AboutMe />
        <ContactMe />
      </Stack>
    </ThemeProvider>
  );
};

export default App;
