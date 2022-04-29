import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import NavBar from './Components/NavBar.js';
import HomePage from './Pages/HomePage.js';
import DashboardPage from './Pages/DashboardPage.js';
import MachinesPage from './Pages/MachinesPage.js';
import OrdersPage from './Pages/OrdersPage.js';
import ServicesPage from './Pages/ServicesPage.js';
import DocumentsPage from './Pages/DocumentsPage.js';
import OEMsPage from './Pages/OEMsPage.js';
import MessagesPage from './Pages/MessagesPage.js';
import ContactPage from './Pages/ContactPage.js';


function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='main-content'>
        <div className="content">
          <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/dashboard" element={<DashboardPage />} />

            <Route path="/machines" element={<MachinesPage />} />

            <Route path="/orders" element={<OrdersPage />} />

            <Route path="/services" element={<ServicesPage />} />

            <Route path="/documents" element={<DocumentsPage />} />

            <Route path="/OEMs" element={<OEMsPage />} />

            <Route path="/messages" element={<MessagesPage />} />

            <Route path="/contact" element={<ContactPage />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
