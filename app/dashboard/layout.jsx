import Navbar from "../Ui/Dashboard/navbar.jsx/navbar"
import Sidebar from "../Ui/Dashboard/sidebar.jsx/sidebar"
import styles from "../Ui/Dashboard/dashboard.module.css"

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout