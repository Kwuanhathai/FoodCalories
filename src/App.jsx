import React from "react";
import { SearchPage } from "@atomic";
import { useFetch } from "@useFetch";

const url = "http://localhost:3000/data.json";

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
      <div>
        <SearchPage data={data} />
      </div>
    </div>
  );
}

export default App;
