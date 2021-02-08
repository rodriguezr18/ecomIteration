import './App.css';
import {Switch, Route} from 'react-router-dom';
import Nav from '../src/Components/Nav';
import Home from '../src/Components/Home';
import Footer from '../src/Components/Footer';
import Product from "../src/Components/Product";
import Contact from "../src/Components/Contact";

//  Switch parent container to allow access to routing
// Route is the actual route that allows the webpage to be acsessed via http link
function App() {
  return (
    <>
    <Nav/>
  
    <Switch>
      {/* back slash means it's always my home page */}
      <Route exact path="/">
       <Home/>
       
       
      </Route>

      <Route path="/products">
        <Product/>
      </Route>

      <Route path="/contact">
        <Contact/>
      </Route>
    </Switch>
    <Footer/>
    </>
   
  );
}

export default App;
