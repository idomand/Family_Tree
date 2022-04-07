import "./App.css";
import TreeList from "./components/TreeList";
import TreeContext from "./Util/TreeContext";
function App() {
  return (
    <TreeContext>
      <div className="App">
        <TreeList />
      </div>
    </TreeContext>
  );
}

export default App;
