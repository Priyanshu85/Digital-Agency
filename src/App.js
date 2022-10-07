// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header/Header';
import Climb from './MyComponents/Climb/Climb';
import Cards from './MyComponents/Cards/Cards';
import BlueBody from './MyComponents/BlueBody/BlueBody';
import WhiteBody from './MyComponents/WhiteBody/WhiteBody';
import Studies from './MyComponents/Studies/Studies';
import Footer from './MyComponents/Footer/Footer';
import About from './MyComponents/About/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/"
            element={
              <>
                <Climb />
                <Cards />
                <BlueBody />
                <WhiteBody />
                <Studies />
              </>
            }>
          </Route>
          <Route path="/about"
            element=
            {
              <>
                <About />
              </>
            } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
