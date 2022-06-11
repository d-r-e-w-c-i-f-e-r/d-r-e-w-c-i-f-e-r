import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Me from './components/Me';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Hero />
      <Me />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
