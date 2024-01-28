import { Route  , useLocation, Routes } from 'react-router-dom'
import Login from './page/Login';
import Annonce from './page/Annonce';
import DetailBack from './page/DetailBack';
import Insertion from './page/Insertion';

function App() { 
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
        <Route path='/' Component={Login}></Route>
        <Route path='/logout' Component={Login}></Route>
        <Route path='/firstpage' Component={Annonce}></Route>
        <Route path='/details/:id' Component={DetailBack}></Route>
        <Route path='/insertion' Component={Insertion}></Route>
        <Route path='/deconnecter' Component={Login}></Route>
    </Routes>
  );
}

export default App;
