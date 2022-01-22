import "../styles/usersForm.css";

const UsersForm = () => {
    return (
        <form className="user-form">
            <div className="input-form">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" />
            </div>

            <div className="input-form">
                <label htmlFor="lastName">Apellido</label>
                <input type="text" id="lastName" />
            </div>

            <div className="input-form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </div>

            <div className="input-form">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" />
            </div>

            <div className="input-form">
                <label htmlFor="birthday">Fecha de nacimiento</label>
                <input type="date" id="birthday" />
            </div>

            <button>Submit</button>

        </form>
    )
}

export default UsersForm