import "./App.css";
import { Routes, Route } from "react-router-dom";
import Upload from "./container/Upload";
import Album from "./container/Album";
function App() {
  return (
    <Routes>
      <Route path="/upload" element={<Upload />} />
      <Route path="album" element={<Album />} />
    </Routes>
  );
}

export default App;
