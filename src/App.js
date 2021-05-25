import './App.css';
import Login from './pages/Login/Login';
import { Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'react-toastify/dist/ReactToastify.css';
import HomeIMG from './pages/Hero/Hero';
import GamesIMG from './pages/Games/Games';
import NewsIMG from './pages/News/News';
import ZoneIMG from './pages/Zone/Zone';
import PostIMG from './pages/News/Posts';
import WalletIMG from './pages/Zone/Wallet';
import TransIMG from './pages/Zone/Transaction';
import GamesIDIMG from './pages/Games/GamesID';
import profileIMG from './pages/Zone/Profile';
import PayIMG from './pages/Hero/Payment';
import Register1 from './pages/Login/Register';
import Otp from './pages/Login/Otp';
import Account from './pages/Login/Account';
import CompIDIMG from './pages/Games/CompleteID';
import LiveIDIMG from './pages/Games/LiveID';
import matchIMG from './pages/Games/matchID';
function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
          <Router history={history}>
           <Switch>
          <Route exact path="/">{Login}</Route>
          <Route exact path="/Register">{Register1}</Route>
          <Route exact path="/Verify">{Otp}</Route>
          <Route exact path="/MakeAccount">{Account}</Route>
          <Route exact path="/Home">{HomeIMG}</Route>
          <Route exact path="/Home/Games">{GamesIMG}</Route>
          <Route exact path="/Home/Games/:uuid">{GamesIDIMG}</Route>
          <Route exact path="/Home/Games/:uuid/Gameds">{matchIMG}</Route>
          <Route exact path="/Home/Games/Complete/:uuid">{CompIDIMG}</Route>
          <Route exact path="/Home/Games/Live/:uuid">{LiveIDIMG}</Route>
          <Route exact path="/News">{NewsIMG}</Route>
          <Route exact path="/News/post/:id">{PostIMG}</Route>
          <Route exact path="/Zone">{ZoneIMG}</Route>
          <Route exact path="/Zone/Profile">{profileIMG}</Route>
          <Route exact path="/Zone/Wallet">{WalletIMG}</Route>
          <Route exact path="/Zone/Wallet/AddMoney">{PayIMG}</Route>
          <Route exact path="/Zone/Transactions">{TransIMG}</Route>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
