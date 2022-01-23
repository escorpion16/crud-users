import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';

const App = () => {

  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
  }

  const deleteUser = user => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${user.id}/`, user)
      .then(() => getUsers())
  }

  const selectUser = user => setUserSelected(user)

  return (
    <div className="App">
      {users && <UsersList users={users} selectUser={selectUser} deleteUser={deleteUser} />}
      <UsersForm userSelected={userSelected} getUsers={getUsers} />
    </div>
  );
}

export default App;
