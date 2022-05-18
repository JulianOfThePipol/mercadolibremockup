import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Home } from "./pages";
import { Search } from "./components";
import { SinglePage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="items" element={<Search />} />
          <Route path="items/:id" element={<SinglePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;