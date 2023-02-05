import "./App.css";
import IconLogo from "./components/icons/IconLogo";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <header className="header">
        <IconLogo /> <Navigation />
      </header>
    </div>
  );
}

export default App;
