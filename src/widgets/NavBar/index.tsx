import Button from "shared/components/Button";
import styles from "./NavBar.module.scss";


const NavBar = () => {
    return (
        <nav className={styles.NavBar}>
            <Button component="a" to="/">
                main page
            </Button>
            <Button component="a" to="/login">
                login
            </Button>
        </nav>
    );
};


export default NavBar;