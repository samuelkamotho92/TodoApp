import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Todos from './pages/Todos';
import Header from './components/Header';
import Footer from './components/Footer';
import './app.css'
import { useSelector } from 'react-redux';
import { Context } from './context/userContext/Context';

function App() {
  // const { user } = useContext(Context);
  const  user = useSelector((state)=>state.user.user?.username);
  console.log(user)
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/todos" element={user?<Todos />:<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
