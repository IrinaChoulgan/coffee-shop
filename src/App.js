import './App.css';
import "./components/Container/Container"
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import InfoSection from './components/InfoSection/InfoSection';

function App() {
  return (
    <div className="App">
      <Container>
        <Header/>
        <Hero/>
        <Gallery/>
      </Container>
      <InfoSection/>

    </div>
  );
}

export default App;
