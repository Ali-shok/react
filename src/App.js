import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {Helmet} from "react-helmet";
// Components

import TopNavbar from "./components/Nav/TopNavbar";
import Header from "./components/Sections/Header";
import Services from "./components/Sections/Services";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Sections/Footer";
import PageNotFound from "./components/Sections/pageNotFound";

export default function App() {
  return (
    <Router>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/react" element={<Navigate to="/" />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}