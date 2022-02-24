import { Route, Routes } from "react-router-dom";
import Add from "./pages/add";
import All from "./pages/all";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="all" element={<All />} />
        <Route path="add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;
