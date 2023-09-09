import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Contact from "./components/contact";
import NotFound from "./components/notFound";
import MovieDetail from "./components/detail";
import FavoritesPage from "./components/FavoritesPage";

export default function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={FavoritesPage} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>}/>
          <Route path="/details/:id" element={<MovieDetail/>}/>
        </Routes>
    </>
  );
}
