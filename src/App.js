import "./Styles/App.scss"
import {
  Stack,
  ThemeProvider
} from 'react-bootstrap';
import ParticleBackground from './Components/ParticleBackground';
import NavBar from "./Components/NavBar"
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';

{/* 
    Good column sizing reference: https://stackoverflow.com/questions/24175998/meaning-of-numbers-in-col-md-4-col-xs-1-col-lg-2-in-bootstrap
    Bootstrap spacing docs: https://getbootstrap.com/docs/4.0/utilities/spacing/

    Styling options: https://www.sitepoint.com/react-components-styling-options/
    Docs for styled-components: https://styled-components.com/docs/basics#styling-any-components
*/}

{/* 
    TODO:
      -Cleanup "className" and "style" prop usages throughout the app, using styled-components
*/}

const App = () => {
  return (
    <ThemeProvider>
      <ParticleBackground />
      <NavBar />

      <Stack gap={5} className="col-11 col-md-10 mx-auto my-4">
        <AboutMe />
        <ContactMe />
      </Stack>
    </ThemeProvider>
  );
};

export default App;
