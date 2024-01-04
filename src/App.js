
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistorPage from './Component/Admin/RegistorPage';
import Home from './Component/HomePage/Home';
import AdminloginPage from './Component/Admin/Adminlogin';
import User from './Component/Dashboard/User';
import Admin from './Component/Dashboard/Admin';
import BookView from './Component/Dashboard/BookView';



function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={[<Home/>]}/>
    <Route path='/RegistrationFrom' element={[<RegistorPage/>]}/>
    <Route path='/Adminlogin' element={[<AdminloginPage/>]}/>
    <Route path='/User' element={[<User/>]}/>
    <Route path='/Admin' element={[<Admin/>]}/>
    <Route path='/bookView' element={[<BookView/>]}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
