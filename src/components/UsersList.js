import "../styles/usersList.css";

const UsersList = ({ users, selectUser, deleteUser }) => {
    return (
        <ul>
            {users.map(user => 
                <li key={user.id} className="user-card">
                    <div><strong>{user.first_name} {user.last_name}</strong></div>
                    <div>{user.email}</div>
                    <div>{user.birthday}</div>
                    <button className="delete-btn" onClick={() => deleteUser(user)}>Delete</button>
                    <button className="edit-btn" onClick={() => selectUser(user)}>Edit</button>
                </li>
            )}
        </ul>
    )
}

export default  UsersList