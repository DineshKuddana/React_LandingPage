import React from "react";
import Navbar from "./Components/NavBar";
import Home from "./Components/Home";
import Services from "./Components/Services"



function App() {
  return (
    <>
      <Navbar />

      <main>
        <div className="Home">
          <Home />
        </div>
        <div className="Services">
          <Services />
        </div>
      </main>
    </>
  );
}

export default App;
