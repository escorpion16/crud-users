import "../styles/usersList.css";

const UsersList = ({ users, selectUser, deleteUser }) => {
    return (
        <ul className="users-container">
            {users.map(user => 
                <li key={user.id} className="user-card">
                    <div className="card-info">
                        <div><strong>{user.first_name} {user.last_name}</strong></div>
                        <div>{user.email}</div>
                        <div> <i className="fas fa-birthday-cake"></i> {user.birthday}</div>
                    </div>
                    <div className="card-buttons">
                        <button className="delete-btn" onClick={() => deleteUser(user)}> <i className="fas fa-trash"></i> </button>
                        <button className="edit-btn" onClick={() => selectUser(user)}> <i className="fas fa-edit"></i> </button>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default  UsersList