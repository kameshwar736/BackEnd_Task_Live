import React, { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DefaultUser = {}



const Login = ({ data }) => {
    const goto = useNavigate()

    const reduce = (state, action) => {

        switch (action.type) {
            case "AUTH":

            const vaildate = data.find((e)=>e.userEmail === action.payload.userEmail && e.userPassword === action.payload.userPassword)

             return vaildate?goto('/todo'):alert("You are not a valid user")
        }

    }



    const [loginUser, dispatch] = useReducer(reduce, DefaultUser)

    const [currentUser, setCurrentUser] = useState({ userEmail: "", userPassword: "" })


    const handleChange = (e) => {
        setCurrentUser({ ...currentUser, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch({
            type: "AUTH",
            payload: currentUser
        })


    }





    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter The Email' onChange={handleChange} name='userEmail' />
                <input type="text" placeholder='Enter The password' onChange={handleChange} name='userPassword' />
                <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default Login