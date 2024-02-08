import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Body from "./Components/Body";
import Form from './Components/Form'

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
        {/* <Form /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
