import { ComponentPropsWithoutRef, FC } from "react";
import styles from "./Input.module.scss";
import clsx from "clsx";


export interface InputProps extends ComponentPropsWithoutRef<"input"> {
}


const Input: FC<InputProps> = ({ className, ...props }) => {
    const classes = clsx(className, styles.input);
    console.log(props)
    return (
        <input className={classes} {...props} />
    );
};


export default Input;