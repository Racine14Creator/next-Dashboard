import styles from "@/app/Ui/Dashboard/users/idUser.module.css"
import { fetchUser, updateUser } from "@/app/lib/actions"
import Image from "next/image"
import { MdPersonPinCircle } from "react-icons/md"

const Page = async ({ params }) => {
    const { id } = params
    const user = await fetchUser(id)
    // console.log(user)
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={user.profile || "/next.svg"} fill />
                </div>
                {user.username}
            </div>
            <div className={styles.formContainer}>
                <form action={updateUser} className={styles.form}>
                    <input type="hidden" name="id" value={user.id} className="input" />
                    <label>Username</label>
                    <input type="text" name="username" id="username" placeholder={user.username} />

                    <label>Email</label>
                    <input type="email" name="email" id="username" placeholder={user.email} />

                    <label>Phone number</label>
                    <input type="text" name="phone" id="phone" placeholder={user.username} />

                    <label>Address</label>
                    <textarea name="address" placeholder={user.address || 'Anonyme Address...'}></textarea>

                    <label>Is admin</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={1} selected={user.isAdmin}>Yes</option>
                        <option value={0} selected={!user.isAdmin}>No</option>
                    </select>
                    <label>Is Active</label>
                    <select name="isActive" id="isActive">
                        <option value={1} selected={user.isActive}>Yes</option>
                        <option value={0} selected={!user.isActive}>No</option>
                    </select>
                    <button type="submit" className={styles.button}><MdPersonPinCircle /> Update</button>
                </form>
            </div>
        </div>
    )
}

export default Page