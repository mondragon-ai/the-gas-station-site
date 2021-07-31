import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import './responsive.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Screens/Home'
import Goodies from './Screens/Goodies'
import About from './Screens/About'
import Age from './Screens/Age'
import NavTop from './components/nav/NavTop';
import NavBar from './components/nav/NavBar';
import NavFooter from './components/nav/NavFooter';
import NavMobile from './components/nav/NavMobile';


function App() {

  var [w, setWidth] = useState(window.innerWidth)
  var [is21, setAge] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
    
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth)
      })
    }
  }, []);

  

  if (!is21) {
    return (<Age is21={is21} setAge={setAge} />)
  } else {
    return (
      <div classNmae="App">
        <Router>
          <div >
            <header>
              <NavTop/>
              {w <= 768 ? <NavMobile /> : <NavBar/>}
            </header>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} exact  />
              <Route path="/goodies" exact component={Goodies} />
            </Switch>
            <footer >
              <NavFooter/>
            </footer>
          </div>
        </Router>
      </div>
    );
  }

}

export default App;
