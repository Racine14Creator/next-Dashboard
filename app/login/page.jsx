import styles from "@/app/Ui/login/login.module.css"

const Login = () => {
    return (
        <div className={styles.container}>

            <form action="" className={styles.form}>
                <h1>Login</h1>
                <input type="text" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" id="" />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login