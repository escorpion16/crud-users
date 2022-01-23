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
            <div className="form-container-info">
                <h3>New User</h3>
                <div className="name-user-container">
                    <i className="fas fa-user"></i>
                    <div className="input-form">
                        
                        <input 
                            type="text" 
                            id="name"
                            placeholder="first name"
                            {...register("first_name")}
                        />
                    </div>

                    <div className="input-form input-lastname">
                        <input 
                            type="text" 
                            id="lastName" 
                            placeholder="last name"
                            {...register("last_name")}
                        />
                    </div>
                </div>
                
                <div className="input-form">
                    <i className="fas fa-envelope"></i>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="email"
                        {...register("email")}
                    />
                </div>

                <div className="input-form">
                    <i className="fas fa-lock"></i>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="password"
                        {...register("password")}
                    />
                </div>

                <div className="input-form">
                    <i className="fas fa-birthday-cake"></i>
                    <input 
                        type="date" 
                        id="birthday"
                        {...register("birthday")}
                    />
                </div>

                <button>UPLOAD</button>

            </div>
            
        </form>
    )
}

export default UsersForm