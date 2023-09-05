import './Styles/App.scss';
import theme from './Styles/_theme.scss';
import { ThemeProvider } from 'styled-components';
import NavBar from './Components/NavBar';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import Resume from './Components/Resume/Resume';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />

      <div className='d-flex flex-column align-items-center'>
        <AboutMe />
        <Resume />
        <ContactMe />
      </div>
    </ThemeProvider>
  );
};

export default App;