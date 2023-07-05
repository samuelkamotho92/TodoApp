import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import './addtodo.css';
import { apiDomain } from "../utils/utils";
import { useContext } from "react";
import { Context } from "../context/userContext/Context";
import { addTodo } from "../redux/apiCall";
import { useDispatch,useSelector } from "react-redux";
export default function AddTodo() {
    const user = useSelector((state)=>state.user.user);
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        description: yup.string().required("description is required"),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        addTodo(dispatch,data)
        // Axios.post(`${apiDomain}/todos`, data,
        //     { headers: { "Authorization": `${user.token}` } })
        //     .then((response) => {
        //         response.data.message && alert(response.data.message)
        //         reset();
        //     })
        //     .catch(({ response }) => {
        //         alert(response.data.error)
        //     });
    };
    return (
        <div className="formWrapper">
            <form onSubmit={handleSubmit(onSubmit)} className="Form" >
                <textarea
                    {...register("description")}
                    name="description"
                    id="description"
                ></textarea>
                <p>{errors.description?.message}</p>
                <input className="submitBtn" type="submit" value="save" />
            </form>
        </div>
    )
}
