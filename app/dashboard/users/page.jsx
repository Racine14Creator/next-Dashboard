import Pagination from "@/app/Ui/Dashboard/pagination/Pagination"
import Search from "@/app/Ui/Dashboard/search/search"
import styles from "@/app/Ui/Dashboard/users/users.module.css"
import { deleteUser } from "@/app/lib/actions"
import { fetchUsers } from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"

const User = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;

    const { count, users } = await fetchUsers(q, page);
    // console.log(users);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user..." />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add new</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td key={user.id}>
                                <div className={styles.user}>
                                    <Image src={user.img || "/astronaute-no-bg.png"} width={40} height={40} className={styles.userImage} />
                                    {user.username}
                                </div>
                            </td>
                            <td>{user.email || "no email@address.rw"}</td>
                            <td>{user.createdAt?.toString().slice(4, 16)}</td>
                            <td>
                                {user.isAdmin ?
                                    (<span className={styles.eventActive}>Admin</span>) :
                                    (<span className={styles.eventDelete}>Client</span>)}
                            </td>
                            <td>{user.isActive ? "active" : "passive"}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/users/${user._id}`}><button className={`${styles.button} ${styles.view}`}>View</button></Link>
                                    <form action={deleteUser}>
                                        <input type="hidden" name="id" value={user.id} className="input" />
                                        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    )
}

export default User