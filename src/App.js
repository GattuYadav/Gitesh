import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import Home from "./components/Home/Home"
import HomePage from "./components/HomePage/HomePage"
import Building from "./components/Building/Building"
import Location from "./components/Location/Location"
import Details from "./components/Details/Details"
import store from "./redux/store"

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/lux/home" component={Home}></Route>
          <Route path="/lux/building" render={()=> <Building/> }></Route>
          <Route path="/lux/location" component={Location}></Route>
          <Route path="/lux/:apartment_id/details" render={()=> <Details />}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
    );
}

export default App;
