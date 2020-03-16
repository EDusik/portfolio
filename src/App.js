import React from 'react';

import { ContextProvider } from './context/reducer'
import Profile from './components/profile'
import Projects from './components/projects';
import Search from './components/search';
import Footer from './components/footer';

function App() {

  return (
    <React.Fragment>
      <ContextProvider>
          <Profile />
          <Search />
          <Projects />
          <Footer />
      </ContextProvider>
    </React.Fragment>
  );
}

export default App;
