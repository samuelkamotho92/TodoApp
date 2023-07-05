import { useContext } from 'react'
import { useForm } from "react-hook-form";
import './loginform.css'
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import { Context } from "../context/userContext/Context";
import { apiDomain } from "../utils/utils";
import { loginUser } from '../redux/apiCall';
import { useSelector,useDispatch } from 'react-redux';
export default function LoginForm() {
    const  dispatch  = useDispatch();
    console.log(useSelector((state)=>state.user.user?.username));
const username = useSelector((state)=>state.user?.user?.username)
    const navigate = useNavigate();
    const schema = yup.object().shape({
        username: yup.string().required("Username is required"),
        password: yup.string().required("Password is required"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = (data) => {
        console.log(data);
        loginUser(dispatch,data);
        // {username ? navigate('/todos') : alert('please login again')}
        // Axios.post(`${apiDomain}/auth/login`, data)
        //     .then(({ data }) => {
        //         if (data.token) {
        //             dispatch({ type: "LOGIN_SUCCESS", payload: data })
        //             navigate("/todos")
        //         }
        //     }).catch(({ response }) => {
        //         dispatch({ type: "LOGIN_FAILURE" })
        //         alert(response?.data.error)
        //     });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="Form" >
            <p className="loginBanner"> Login Page</p>
            <>
                <input type="text" placeholder="Username" {...register("username")} />
                <p>{errors.username?.message}</p>
            </>
            <>
                <input type="password" placeholder="Password..." {...register("password")} />
                <p>{errors.password?.message}</p>
            </>

            <input className="submitBtn" type="submit" value="Submit" />
        </form>
    )
}
