import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Layout/Header';
import Signup from './Pages/Signup';
import Footer from './Layout/Footer';
import './assets/css/style.css'
import User from './crud/mockApi';
import View from './crud/View';
import SingleUser from './crud/SingleUser';
import Update from './crud/Update';


function App() {
  return (
    <>
    
      <Router>
        <Header />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<User />} />
          <Route path='/View' element={<View />} />
          <Route path='/SingleUser/:id' element={<SingleUser />} />
          <Route path='/Update/:id' element={<Update />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
