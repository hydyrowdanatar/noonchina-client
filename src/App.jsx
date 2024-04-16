import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import MainLayout from "./components/MainLayout";
import { useEffect } from "react";
import { changeLanguage } from "./common";
import University from "./components/universities/University";
import UniversityItem from "./components/universities/UniversityItem";

function App() {
  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("language");
    if (storedLanguage !== null) {
      changeLanguage(storedLanguage);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/universities" element={<University />} />
          <Route path="/universities/:name" element={<UniversityItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
