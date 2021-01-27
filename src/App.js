import './App.css';
import {Switch, Route} from 'react-router-dom';
import Nav from '../src/Components/Nav';
//  Switch parent container to allow access to routing
// Route is the actual route that allows the webpage to be acsessed via http link
function App() {
  return (
    <>
    <Nav/>
    <Switch>
      {/* back slash means it's always my home page */}
      <Route exact path="/">
        <div>Home Page</div>
      </Route>

      <Route path="/products">
        <div>Products Page</div>
      </Route>

      <Route path="/contact">
        <div>Contact</div>
      </Route>
    </Switch>
    </>
   
  );
}

export default App;
