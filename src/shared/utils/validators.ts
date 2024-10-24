import * as yup from "yup";


export const nameValidator = 
    yup.string()
    .required("це поле обов'язкове");


export const passwordValidator =
    yup.string()
    .required("це поле обов'язкове")


export const loginSchema = yup.object().shape({
    name: nameValidator,
    password: passwordValidator,
});