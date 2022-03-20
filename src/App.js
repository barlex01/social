
import "./App.css";
import Header from './components/header/Header';
import Nav from './components/nav/Navigation';
import News from "./components/news/News.jsx";
import  Profile  from "./components/profile/Profile";
import Footer from './components/footer/Footer';
import Dialogs from './components/dialogs/Dialogs.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    
   <div>
      <Header />
      <div className="wrapper">
        <Nav />
        <main className="content">
       <Routes>
          <Route path="/dialogs" element = {<Dialogs/>}/>
          <Route path="/profile" element = {<Profile/>} />
          <Route path="/news" element = {<News/>} />
       </Routes>
 
        </main>
      </div>
      <Footer />
    
      </div>
      </BrowserRouter>
  );
}


export default App;
