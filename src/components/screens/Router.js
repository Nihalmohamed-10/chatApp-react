import React from 'react';
import Home from './Home';
import Chat_page from  './Chat_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TableData from './TableData';


function Rout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat_page />} />
          <Route path="/data" element={<TableData />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Rout;

