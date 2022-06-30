import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./Components/Navbar";
import Main from "./Pages/Main";

const App = () => {
  return (
    <>
   
    <Router>
    {/* <Navbar /> */}
    <Routes>

      <Route exact path="/" element={<Main /> } />
  </Routes >
  </Router>
  </>
  )
}

export default App
