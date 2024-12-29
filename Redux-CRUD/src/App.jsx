import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Layout/Header';
import CounterRedux from './Pages/CounterRedux';
import Create from './CRUD/Create';
import ViewRedux from './CRUD/ViewRedux';
import UpdateRedux from './CRUD/UpdateRedux';




// import './App.css'

function App() {
 

  return (
    <>
   <Router>
        <Header />
        <Routes>
          {/* <Route path='/Store' element={<Store />} /> */}
          {/* <Route path='/counter' element={<CounterRedux />} /> */}
          <Route path='/' element={<Create />} />
          <Route path='/View' element={<ViewRedux />} />
          <Route path='/UpdateRedux/:id' element={<UpdateRedux />} />
        
         
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
