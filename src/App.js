import { Container, Col, Row } from 'react-bootstrap';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import './style/landingPage.css'

function App() {
  return (
    <div>
      {/* Intro section */}
      <div className='myBG'>
        <NavigationBar/>
        <Intro />
      </div>
      <div className='trending'>
        <Trending />
      </div>
      {/* Intro section */}
    </div>
  );
}

export default App;
