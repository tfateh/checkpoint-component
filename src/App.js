import logo from './logo.svg';
import './App.css';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Adresse from './Component/Profile/Adresse';


function App() {
  return (
    <div className="App">
      <div className="App-header">
      <ProfilePhoto/>
      <FullName/>
      <Adresse/>
    </div>
    </div>
  );
}

export default App;
