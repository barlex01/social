
import "./App.css";
import Header from './components/header/Header';
import Nav from './components/nav/Navigation';
// import Slider from './components/Slider';
import AboutMe from './components/about_me/SectionAboutMe';
import Post from './components/_posts/SectionPost';
import Footer from './components/footer/Footer';

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
