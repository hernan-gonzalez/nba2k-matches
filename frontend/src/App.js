import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewTicket from './pages/NewTicket';
import Tickets from './pages/Tickets';
import Ticket from './pages/Ticket';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import BoxScores from './pages/BoxScores';
import NewBoxScore from './pages/NewBoxScore';
import BoxScoresNew from './pages/BoxScoresNew';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/new-boxscore' element={<PrivateRoute />} >
              <Route path='/new-boxscore' element={<NewBoxScore />} />
            </Route>
            <Route path='/boxScores' element={<PrivateRoute />} >
              <Route path='/boxScores' element={<BoxScores />} />
            </Route>
            <Route path='/boxScoresNew' element={<PrivateRoute />} >
              <Route path='/boxScoresNew' element={<BoxScoresNew />} />
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
