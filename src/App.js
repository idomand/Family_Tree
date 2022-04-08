import "./App.css";
import TreeList from "./components/TreeList";
import TreeContext from "./Util/TreeContext";
function App() {
  return (
    <div className="App">
      <TreeContext>
        <TreeList />
      </TreeContext>
    </div>
  );
}

export default App;
