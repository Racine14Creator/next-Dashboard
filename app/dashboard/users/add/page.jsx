
import styles from "@/app/Ui/Dashboard/users/addUser.module.css"
import { addUser } from "@/app/lib/actions"

const AddUser = () => {
    return (
        <div className={styles.container}>
            <form action={addUser} className={styles.form}>
                <input type="text" placeholder="Username" name="username" required />
                <input type="email" placeholder="Email" name="email" required />
                <input type="number" placeholder="Phone" name="phone" required />
                <input type="password" placeholder="Password" name="password" required />


                <select name="isAdmin" id="isAdmin">
                    <option value={false} selected>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <select name="isActive" id="isActive">
                    <option value={true} selected>Is Active? </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <textarea name="address" id="address"
                    placeholder="Address..."
                    rows="16"></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddUser