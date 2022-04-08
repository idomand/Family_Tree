import "./App.css";
import TreeWrapper from "./components/TreeWrapper";
import TreeContext from "./Util/TreeContext";

function App() {
  return (
    <div className="App">
      <TreeContext>
        <TreeWrapper />
      </TreeContext>
    </div>
  );
}

export default App;
