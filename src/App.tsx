import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

function App() {

  return (
    <div className="App">
        <RouterProvider router={createBrowserRouter(routes)}/>
    </div>
  );
}

export default App;
