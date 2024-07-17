import Home from "./Components/Home";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Body />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;