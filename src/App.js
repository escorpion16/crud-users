import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';

const App = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }, [])

  return (
    <div className="App">
      {users && <UsersList users={users} />}
      <UsersForm />
    </div>
  );
}

export default App;
