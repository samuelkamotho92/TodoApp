import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import '../components/loginform.css'
import './register.css'
import Axios from "axios";
import { apiDomain } from "../utils/utils";

export default function Register() {
    const navigate = useNavigate();

    const schema = yup.object().shape({
        userName: yup.string().required("Username is required"),
        password: yup.string().required("Password is required"),
        email: yup.string().required("Password is required"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        Axios.post(`${apiDomain}/auth/register`, data)
            .then((response) => {
                response.data.message && alert(response.data.message)
                navigate("/")
            })
            .catch(({ response }) => {
                alert(response.data.error)
            });
    };
    return (
        <div className="formWrapper" >
            <form onSubmit={handleSubmit(onSubmit)} className="Form" >
                <p className="loginBanner"> Register Page</p>
                <input type="text" placeholder="Username" {...register("userName")} />
                <p>{errors.userName?.message}</p>
                <input type="password" placeholder="Password..." {...register("password")} />
                <p>{errors.password?.message}</p>
                <input type="email" placeholder="Email..." {...register("email")} />
                <p>{errors.email?.message}</p>
                <input className="submitBtn" type="submit" value="Register" />
            </form>
        </div>
    )
}
