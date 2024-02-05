
import styles from "@/app/Ui/Dashboard/users/idUser.module.css"
import { fetchUser, updateUser } from "@/app/lib/actions"
import Image from "next/image"

const Page = async ({ params }) => {
    const { id } = params
    const user = await fetchUser(id)
    // console.log(user)
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={user.img || "/astronaute-no-bg.png"} fill />
                </div>
                <p className={styles.list}>
                    <span>Username: </span>
                    {user.username}
                </p>
                <p className={styles.list}>
                    <span>Email: </span>
                    {user.email}
                </p>
                <p className={styles.list}>
                    <span>Address: </span>
                    {user.address ? user.address : 'Anonyme Address'}
                </p>
                <p className={styles.list}>
                    <span>User Level: </span>
                    {user.isAdmin ? 'Admin' : 'Client'}
                </p>
            </div>

            <div className={styles.formContainer}>
                <form action={updateUser} className={styles.form}>
                    <input type="hidden" name="id" value={(user.id)} className="styles input" />
                    <label>Username</label>
                    <input type="text" name="username" id="username" placeholder={`${user.username ? user.username : 'Anonyme'}`} />

                    <label>Email</label>
                    <input type="email" name="email" id="username" placeholder={`${user.email ? user.email : 'Anonyme@email.com'}`} />

                    <label>Phone number</label>
                    <input type="text" name="phone" placeholder={`${user.phone ? user.phone : '+00 784545831'}`} id="phone" />

                    <label>Address</label>
                    <textarea name="address" placeholder={`${user.address ? user.address : 'Anonyme adress'}`}></textarea>

                    <label>Is admin</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true} selected={!user.isAdmin}>Yes</option>
                        <option value={false} selected={!user.isAdmin}>No</option>
                    </select>
                    <label>Is Active</label>
                    <select name="isActive" id="isActive">
                        <option value={true} selected={user.isActive}>Yes</option>
                        <option value={false} selected={!user.isActive}>No</option>
                    </select>
                    <button type="submit" className={styles.button}>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Page