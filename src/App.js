import React from 'react';

import { ContextProvider } from './context/reducer'
import Footer from './components/footer';
import Header from './components/header';
import Profile from './components/profile'
import Projects from './components/projects';
import Search from './components/search';

function App() {

  return (
    <React.Fragment>
      <ContextProvider>
          <Header />
          <Profile />
          <Search />
          <Projects />
          <Footer />
      </ContextProvider>
    </React.Fragment>
  );
}

export default App;
