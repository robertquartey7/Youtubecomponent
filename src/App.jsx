import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function App() {
  const { isLoading, isError, data, error, isFetching } = useQuery({
    queryKey: ["userName"],
    queryFn: () => {
      return axios.get("https://randomuser.me/api/");
    },
  });

  if (isLoading) {
    return <span>Loading</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h1>sucess</h1>
    </div>
  );
}

export default App;
