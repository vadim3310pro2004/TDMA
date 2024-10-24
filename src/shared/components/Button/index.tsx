import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";


export interface ButtonComponentButtonProps extends ComponentPropsWithoutRef<"button"> {
    children?: ReactNode,
    component: "button",
}

export interface ButtonComponentAProps extends ComponentPropsWithoutRef<"a"> {
    children?: ReactNode,
    component: "a",
    to: string;
}


const Button: FC<ButtonComponentButtonProps | ButtonComponentAProps> = ({ children, component, className, ...props }) => {
    const classes = clsx(className, styles.button);

    if (component === "a") {
        return (
            <Link className={classes} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};


export default Button;