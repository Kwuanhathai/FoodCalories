import React from "react";
import { SearchPage, FoodCard } from "@atomic";
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

  const foodCardElement = data?.calFood?.map((data, index) => {
    return <FoodCard key={index} data={data} />;
  });

  return (
    <div>
      Food
      <div>
        <SearchPage data={data} foodCardElement={foodCardElement} />
      </div>
    </div>
  );
}

export default App;
