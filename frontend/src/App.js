import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
import BestSellersPage from './components/BestSellersPage';
import AboutUsPage from './components/AboutUsPage';
import ProfilePage from './components/ProfilePage';
import CartPage from './components/CartPage';
import LikedPage from './components/LikedPage';
import LanguageSwitch from './components/LanguageSwitch';

function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    // Here, you could also update your localization provider or context
    // to change the language across your app.
  };

  return (
    <Router>
      <LanguageSwitch onLanguageChange={handleLanguageChange} />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/best-sellers" element={<BestSellersPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/liked" element={<LikedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
