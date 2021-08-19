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
import Loading from './Screens/Loading';
import Team from './Screens/Team'


function App() {

  var [isLoading, load] = useState(true)
  var [w, setWidth] = useState(window.innerWidth)
  var [is21, setAge] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
    
    setTimeout(() => {
      load(false);
    }, 1500);

    load(false);

    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth)
      })
    }

  }, []);

  if (!isLoading) {
    if (!is21) {
      return (<Age is21={is21} setAge={setAge} />)
    } else {
      return ( <RouterApp data={w} /> );
    }
  } else { return (<Loading />) }
  
}

const RouterApp = ({ data }) => {

  return (<div className="app">
    <Router>
      <div style={{}}>
        <header id="MAIN_HEADER">
          <NavTop />
          {data <= 768 ? <NavMobile /> : <NavBar />}
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} exact />
          <Route path="/goodies" exact component={Goodies} />
          <Route path="/team" component={Team} />
        </Switch>
        <footer >
          <NavFooter />
        </footer>
      </div>
    </Router>
  </div>
  );
}

export default App;
