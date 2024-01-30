import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Body from "./Components/Body";

function App() {
  return (
    <div className="App">
      <BrowserRouter> {/* Single BrowserRouter at the top level */}
        <Routes> {/* Routes component for defining routes */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Body />
      </BrowserRouter>

    </div>
  );
}

export default App;
