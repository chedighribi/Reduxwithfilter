import './App.css';
import Addtask from './Component/Add/Addtask';
import Filter from './Component/Filter/Filter';
import Listtask from './Component/Tasks/Listtask'

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Addtask />
      <Filter />
      <Listtask />
    </div>
  );
}

export default App;
