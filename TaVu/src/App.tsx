import React from "react";
import UserContextProvider from "./context/UserContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <HomePage />
      </UserContextProvider>
    </div>
  );
}

export default App;
