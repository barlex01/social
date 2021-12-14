
import "./App.css";
import Header from './components/Header';
import Nav from './components/Navigation';
// import Slider from './components/Slider';
import AboutMe from './components/SectionAboutMe';
import Post from './components/SectionPost';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="container">
      <Header />
      <div className="wrapper">
        <Nav />
        <main className="content">
         <AboutMe />
          {/* <Slider /> */}
          <Post />
        </main>
      </div>
      <Footer />
    </div>
    
    
  );
}

export default App;
