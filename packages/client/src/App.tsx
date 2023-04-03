import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PageList from "./components/pageList";
import PageCard from "./components/pageCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="list/1" />} />
        <Route path="list" element={<PageList />}>
          <Route path=":page" element={<PageList />} />
        </Route>
        <Route path="card" element={<PageCard />}>
          <Route path=":id" element={<PageCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
