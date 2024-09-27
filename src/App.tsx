import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/ui/AddTask";

const App = () => {
  return (
    <div className="container my-5 max-w-[500px]">
      <Header />
      <Tasks />
      <AddTask />
    </div>
  );
};

export default App;
