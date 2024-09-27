import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <div className="container my-5 max-w-[500px]">
      <Header />
      <Tasks />
    </div>
  );
};

export default App;
