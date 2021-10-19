import React from 'react';
import ContextProvider from './providers/contextapi';
import { Todos } from './components/todo/todoContext';
// import Test from './components/test';

const App = () => (
  <>
    <ContextProvider>
      <Todos />
      {/* <Test/> */}
    </ContextProvider>
  </>
);
export default App;
