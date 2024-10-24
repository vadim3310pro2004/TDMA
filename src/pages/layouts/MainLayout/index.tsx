import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";
import NavBar from "widgets/NavBar";


const MainLayout = () => {
    return (
        <>
        <header className={styles.header}>
            <NavBar />
        </header>
        <main className={styles.main}>
            <Outlet />
        </main>
        <footer className={styles.footer}>
        </footer>
        </>
    );
};


export default MainLayout;