import "./App.css";
import { Routes, Route } from "react-router-dom";
import Upload from "./container/Upload";
import Album from "./container/Album";
import Index from "./container/Index";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/album" element={<Album />} />
    </Routes>
  );
}

export default App;
