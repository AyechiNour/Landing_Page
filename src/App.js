import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Effects from "./Components/Effects";
import Main from "./Pages/Main";
const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Main />} />
                </Routes >
            </Router>
        </>
    )
}
export default App