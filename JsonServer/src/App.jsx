import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import UserJson from "./CRUD/UserJson";
import Update from "./CRUD/Update";
import SingleUserData from "./CRUD/SingleUserData";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<UserJson />} />
          <Route path="/Update/:id" element={<Update />} />
          <Route path="/View/:id" element={<SingleUserData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
