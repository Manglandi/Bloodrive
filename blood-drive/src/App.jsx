// import Usernav from './Usernav';
import Navbar from './Navbar';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Donors from './pages/Donors/Donors';
import Login from './pages/Login/Login';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Request from './pages/Request/request';

function App() {

  return (
    <div className="App">
    
    <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/donors' exact element={<Donors />} />
          <Route path='/Login' exact element={<Login />} />
          <Route path='/CreateAccount' exact element={<CreateAccount />} />
          <Route path='/Request' exact element={<Request />} />

        </Routes>
      </div>
    </div>
  
  );
}

export default App;
