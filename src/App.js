import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Button } from "@chakra-ui/react"
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Videos from "./Components/Videos";
import Upload from "./Components/Upload";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/videos" element={<Videos />}/>
        <Route path="/upload" element={<Upload />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>



      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
