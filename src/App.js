
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Authorize from './components/Authorize';
import Settings from './pages/Settings';
import UserProfile from './pages/UserProfile';
import Footer from './components/Footer';
import Admin from './pages/Admin';

function App() {
  return (
    <div >
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Authorize />} />
        <Route path='/register' element={<Authorize register />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/admin-dashboard' element={<Admin />} />
        <Route path='/userprofile' element={<UserProfile />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
