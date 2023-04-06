import React from "react";
import { useFetch } from "@useFetch";
import { SearchPage, ErrorPage, CaloriesPage } from "@atomic";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const url = "https://food-calories-9.netlify.app/data.json";

function App() {
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage data={data} />} />
          <Route path="calories/:calID" element={<CaloriesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
