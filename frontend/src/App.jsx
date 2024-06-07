import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';

import Courses from './Courses/Courses';
import Signup from './components/Signup';

const App = () => {
  return (
    //<Router>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
    //</Router>
  );
}

export default App;
