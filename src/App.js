
import './App.scss';
import ActiveProject from './components/ActiveProject/ActiveProject';
import Aside from './components/Aside/Aside';

function App() {
  return (
    <div className="App">
      <Aside/>
      <main className="main-content">
        <ActiveProject />
     
      </main>
    </div>
  );
}

export default App;
