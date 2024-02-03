
import styles from "@/app/Ui/Dashboard/users/idUser.module.css"
// import { fetchUser } from "@/app/lib/data"
import Image from "next/image"

const Page = () => {

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/next.svg" fill />
                </div>
                Grace Bisimwa
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <label>Username</label>
                    <input type="text" name="username" id="username" placeholder="Grace Bisimwa" />
                    <label>Email</label>
                    <input type="email" name="email" id="username" placeholder="exemple: gracebisimwa@gmail.com" />
                    <label>Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <label>Username</label>
                    <input type="text" name="phone" id="phone" placeholder="+24397353543" />

                    <label>Address</label>
                    <textarea name="address" placeholder="New York"></textarea>

                    <label>Is admin</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Is Active</label>
                    <select name="isAdmin" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button type="submit" className={styles.button}>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Page