
import { BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import './index.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path = "*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
