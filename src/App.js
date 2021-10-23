import MainComponent from "./conmponents/MainComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MainComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
