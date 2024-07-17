import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import BoxScoresHistory from './pages/BoxScoresHistory';
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
            <Route path='/newBoxscore' element={<PrivateRoute />} >
              <Route path='/newBoxscore' element={<NewBoxScore />} />
            </Route>
            <Route path='/boxScoresHistory' element={<PrivateRoute />} >
              <Route path='/boxScoresHistory' element={<BoxScoresHistory />} />
            </Route>
            <Route path='/boxScores' element={<PrivateRoute />} >
              <Route path='/boxScores' element={<BoxScores />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
