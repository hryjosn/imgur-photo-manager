import "./App.css";
import { Routes, Route } from "react-router-dom";
import Upload from "./container/Upload";
import Album from "./container/Album";
import Home from "./container/Home";
import RootStoreContext from "./store";
function App() {
  return (
    <RootStoreContext>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/album" element={<Album />} />
      </Routes>
    </RootStoreContext>
  );
}

export default App;
