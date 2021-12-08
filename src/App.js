
import "./App.css";
import Header from './components/Header';
import Nav from './components/Navigation';
import Slider from './components/Slider';
import AboutMe from './components/SectionAboutMe';
import Post from './components/SectionPost';

function App() {
  return (
    <div className="container">
     <Header/>
      <div className="wrapper">
        <Nav/>
        <main className="content">
          <Slider/>
            <AboutMe/>
            <Post/>
        </main>
      </div>
    </div>
  );
}

export default App;
