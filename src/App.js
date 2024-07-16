import Home from "./Components/Home";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
        {/* <Footer /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
