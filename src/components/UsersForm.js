import axios from "axios";
import { useEffect } from "react";
import "../styles/usersForm.css";
import { useForm } from "react-hook-form";

const defaultValues = {
    first_name: "",
    last_name:"",
    email:"",
    password:"",
    birthday:""
}

const UsersForm = ({ userSelected, getUsers, deselectUser }) => {
    
    const {register, handleSubmit, reset} = useForm();

    useEffect(() => {
        if(userSelected){
            reset(userSelected)
        }else{
            reset(defaultValues)
        }
    }, [userSelected, reset])

    const submit = user => {

        if(userSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                .then(() => {
                    getUsers()
                    deselectUser()
                })
                    
        }else {
            axios.post('https://users-crud1.herokuapp.com/users/', user)
            .then(() => getUsers())
        }

        reset(defaultValues)
    }


    return (
        <form className="user-form" onSubmit={handleSubmit(submit)}>
            <div className="input-form">
                <label htmlFor="name">Nombre</label>
                <input 
                    type="text" 
                    id="name"
                    {...register("first_name")}
                />
            </div>

            <div className="input-form">
                <label htmlFor="lastName">Apellido</label>
                <input 
                    type="text" 
                    id="lastName" 
                    {...register("last_name")}
                />
            </div>

            <div className="input-form">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    {...register("email")}
                />
            </div>

            <div className="input-form">
                <label htmlFor="password">Contraseña</label>
                <input 
                    type="password" 
                    id="password" 
                    {...register("password")}
                />
            </div>

            <div className="input-form">
                <label htmlFor="birthday">Fecha de nacimiento</label>
                <input 
                    type="date" 
                    id="birthday"
                    {...register("birthday")}
                />
            </div>

            <button>Submit</button>
        </form>
    )
}

export default UsersForm