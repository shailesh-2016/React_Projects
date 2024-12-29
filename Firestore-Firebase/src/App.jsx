import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './Realtime/CRUD/Create';
import SingleUser from './Realtime/CRUD/SingleUser';
import 'bootstrap/dist/css/bootstrap.css';
import Update from './Realtime/CRUD/Update';
import CreateFire from './Firestore/CRUD/CreateFire';
import UpdateFire from './Firestore/CRUD/UpdateFire';
import View from './Firestore/CRUD/View';
// import CreateFire from './Firestore/CreateFire';
import './assets/CSS/style.css'
import "react-toastify/dist/ReactToastify.css";
import ShowData from './Firestore/CRUD/ShowData';


function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Create />} />
          <Route path="/view/:id" element={<SingleUser />} />
          <Route path="/update/:id" element={<Update />} /> */}
         
         {/* Firestore crud */}
         
          <Route path="/" element={<CreateFire />} />
          <Route path="/ShowData" element={<ShowData />} />
          <Route path="/update/:id" element={<UpdateFire />} />
          <Route path="/view/:id" element={<View />} />
          {/* <Route path="/" element={<CreateFire />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
