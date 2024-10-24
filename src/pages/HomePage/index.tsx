import { ComponentPropsWithoutRef, FC, useEffect } from "react";
import styles from "./HomePage.module.scss";
import clsx from "clsx";
import { useAppSelector } from "shared/hooks";
import { useNavigate } from "react-router-dom";


export interface HomePagePropf extends ComponentPropsWithoutRef<'div'> {

}


const HomePage: FC<HomePagePropf> = ({ className, ...props }) => {
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.user);
    
    useEffect(() => {
        if (!user.isAuthorized) {
            navigate('/login/');
            console.log(user);
            
        }
    });
    
    const classes = clsx(className, styles.root);
    return (
        <div className={classes} {...props}>
            user: {user.name}
        </div>
    );
} 


export default HomePage;