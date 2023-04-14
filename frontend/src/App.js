import './App.css';
import Body from './components/Body/Body.jsx';
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;