import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "../src/Component/Header/Header";
import AllPlugins from "./AllPlugins";
import Home from "./Pages/Home/Home";
function App() {

  return (
    <div>
      <AllPlugins />
      <Header />
      <Home />
    </div>
  );
}

export default App;
