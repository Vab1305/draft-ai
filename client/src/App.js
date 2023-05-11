import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Signin from "./components/signup-signin/Signin";


function App() {
  return (
    // <>
    // <Navbar/>
    // <Home/>
    // <About/>
    // <Pricing/>
    // <Footer/>
    // </>
    <Signin/>
    // <Router>
    //   {/* <Navbar />
    //   <Home/>
    //   <About/>
    //   <Pricing/> */}
    //   {/* <Routes>
    //     <Route path="/" element={<Home />}>
    //       <Route path="/" element={<About />} />
    //       <Route path="/" element={<Pricing />} />
    //     </Route>
    //     <Route path="/signin" element={<Signin />} />
    //   </Routes> */}
    //   <Footer />
    // </Router>
  );
}

export default App;
