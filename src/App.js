import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import './responsive.css';
import { Route, Switch, BrowserRouter as Router, useParams } from 'react-router-dom';
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
import Splash from './Screens/Splash';
import NewPatient from './Screens/NewPatient';


function App() {

  var [isLoading, load] = useState(true);
  var [w, setWidth] = useState(window.innerWidth);
  var [is21, setAge] = useState(false);

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
      return (<RouterApp data={{w}} /> );
    }
  } else { return (<Loading />) }
  
}

const RouterApp = ({ data }) => {

  const [isNew, toggle] = useState(false);
  const [path, changePath] = useState('/');
  console.log("PATH: ", path);

  return (<div className="app">
    <Router>
      <div style={{}}>
        <header id="MAIN_HEADER">
          {path === "/" ? null : <NavTop path={path} />}
          {path === "/"  ? null : data.w <= 768 ? <NavMobile /> : <NavBar />}

        </header>
        <Switch>
          <Route path="/" exact ><Splash toggleMenu={toggle} changePath={changePath} /></Route>
          <Route path="/patient/new" >  <NewPatient changePath={changePath} /> </Route>
          <Route path="/home" > <Home changePath={changePath} /> </Route>
          <Route path="/about" > <About changePath={changePath} /> </Route>
          <Route path="/goodies"> <Goodies changePath={changePath} /> </Route>
          <Route path="/team" > <Team changePath={changePath} /> </Route>
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
