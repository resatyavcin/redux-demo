import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <h1>Redux Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;
