import styles from "@/app/Ui/login/login.module.css"
import LoginForm from "./LoginForm/LoginForm"

const Login = () => {
    return (
        <div className={styles.container}>
            <LoginForm />
        </div>
    )
}

export default Login