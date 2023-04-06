import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import UserContext from './context/UserContext';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users').then((response) => {
      return response.json();
    }).then((finalResponse) => {
      setUserList(finalResponse.data);
    })
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={userList}>
          <ClassComponent />
          <hr />
          <FunctionalComponent />
      </UserContext.Provider>
     
    </div>
  );
}

export default App;
