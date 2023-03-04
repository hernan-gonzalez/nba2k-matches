import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Ticket from './pages/Ticket';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import BoxScoresTable from './pages/BoxScoresTable';
import NewBoxScore from './pages/NewBoxScore';
import BoxScores from './pages/BoxScores';

function App() {
  return (
    <>
      <Router>
        <div className="container sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/new-boxscore' element={<PrivateRoute />} >
              <Route path='/new-boxscore' element={<NewBoxScore />} />
            </Route>
            <Route path='/boxScoresTable' element={<PrivateRoute />} >
              <Route path='/boxScoresTable' element={<BoxScoresTable />} />
            </Route>
            <Route path='/boxScores' element={<PrivateRoute />} >
              <Route path='/boxScores' element={<BoxScores />} />
            </Route>
            <Route path='/ticket/:ticketId' element={<PrivateRoute />} >
              <Route path='/ticket/:ticketId' element={<Ticket />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
