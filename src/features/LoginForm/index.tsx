import { ComponentPropsWithoutRef, FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./LoginForm.module.scss";

import Button from "shared/components/Button";
import { loginSchema } from "shared/utils/validators";
import clsx from "clsx";
import users from "entities/user/users";
import { useAppDispatch } from "shared/hooks";
import { login } from "entities/user/store/user.slice";
import { useNavigate } from "react-router-dom";


export interface LoginRequest {
    name: string;
    password: string;
}

export interface LoginFormProps extends ComponentPropsWithoutRef<'form'> { }


const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { 
        handleSubmit, 
        register, 
    } = useForm<LoginRequest>({
        mode: "onChange",
        resolver: yupResolver(loginSchema),
        defaultValues: {
            name: "",
            password: "",
        },
    });

    const submit: SubmitHandler<LoginRequest> = (data) => {
        const user = users.find(item => item.name === data.name);
        if (user && data.password === user.password) {
            dispatch(login({
                ...user, 
            }));
            
            navigate("/home");
        }
    };

    const classes = clsx(className, styles.root);

    return (
        <form
            className={classes} 
            onSubmit={handleSubmit(submit)}
        >
            <input
                {...register("name")}
                placeholder="enter name" 
                type="text"
            />
            <input
                {...register("password")}
                placeholder="enter password" 
                type="password"
            />
            <Button component="button">
                login
            </Button>
        </form>
    );
};


export default LoginForm;