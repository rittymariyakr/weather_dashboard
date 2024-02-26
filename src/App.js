
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Authorize from './components/Authorize';
import Settings from './pages/Settings';
import UserProfile from './pages/UserProfile';
import Footer from './components/Footer';
import Admin from './pages/Admin';
import { useContext } from 'react';
import { isAuthTokenContext } from './context/ContextShare';

function App() {
  const { isAuthToken, setIsAuthToken } =useContext(isAuthTokenContext)


  return (
    <div >
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={isAuthToken ? <Dashboard />:<Home/>} />
        <Route path='/login' element={<Authorize />} />
        <Route path='/register' element={<Authorize register />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/admin-dashboard' element={isAuthToken ?<Admin />:<Home/>} />
        <Route path='/userprofile' element={<UserProfile />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
