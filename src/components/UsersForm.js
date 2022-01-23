import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import "../styles/usersForm.css";

const UsersForm = ({ userSelected, getUsers }) => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [birthday, setBirthday] = useState("");

    useEffect(() => {
        if(userSelected !== null){
            setName(userSelected.first_name);
            setLastName(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday)
        }
    }, [userSelected])

    const submit = e => {
        e.preventDefault()

        const user = {
            first_name: name,
            last_name: lastName,
            email,
            password,
            birthday
        }

        if(userSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                .then(() => getUsers())
        }else {
            axios.post('https://users-crud1.herokuapp.com/users/', user)
            .then(() => getUsers())
        }

        reset()
    }

    const reset = () => {
        setName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setBirthday("")
    }

    return (
        <form className="user-form" onSubmit={submit}>
            <div className="input-form">
                <label htmlFor="name">Nombre</label>
                <input 
                    type="text" 
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)} 
                />
            </div>

            <div className="input-form">
                <label htmlFor="lastName">Apellido</label>
                <input 
                    type="text" 
                    id="lastName" 
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </div>

            <div className="input-form">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div className="input-form">
                <label htmlFor="password">Contraseña</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <div className="input-form">
                <label htmlFor="birthday">Fecha de nacimiento</label>
                <input 
                    type="date" 
                    id="birthday"
                    value={birthday}
                    onChange={e => setBirthday(e.target.value)} 
                />
            </div>

            <button>Submit</button>
        </form>
    )
}

export default UsersForm