import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./navigations/SideBar";
import AddNotice from "./screens/Inicio/AddNotice";
import Inicio from "./screens/Inicio/Dashboard";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SideBar />}>
        <Route path="/dashboard" element={<Inicio />} />
        <Route path="/dashboard/AddNotice" element={<AddNotice />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
