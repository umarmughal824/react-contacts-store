import React from 'react';

import Header from 'modules/App/Header/Header';
import Footer from 'modules/App/Footer/Footer';

import './App.css';

import ROUTES from 'routes';

const App = () => (
  <div>
    <Header />
    <div className="container">
      {ROUTES}
    </div>
    <Footer />
  </div>
);

export default App;
