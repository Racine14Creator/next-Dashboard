import Image from "next/image"
import styles from "./transactions.module.css"
import Link from "next/link"
const Transactions = () => {
    return (
        <div className={styles.container}>
            <table className={styles.table}>

                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/next.svg" width={40} height={40} className={styles.userImage} />
                                Grace Bisimwa
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>14.0455</td>
                        <td>$5.689.000</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/transactions/23`}><button className={`${styles.button} ${styles.view}`}>View</button></Link>
                                <form action="">
                                    <input type="hidden" name="id" value="" className="" />
                                    <button className={`${styles.button} ${styles.delete}`} >Delete</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/next.svg" width={40} height={40} className={styles.userImage} />
                                Grace Bisimwa
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>cancelled</span>
                        </td>
                        <td>14.0455</td>
                        <td>$5.689.000</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/transactions/2`}><button className={`${styles.button} ${styles.view}`}>View</button></Link>
                                <form action="">
                                    <input type="hidden" name="id" value="" className="" />
                                    <button className={`${styles.button} ${styles.delete}`} >Delete</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/next.svg" width={40} height={40} className={styles.userImage} />
                                Grace Bisimwa
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td>14.0455</td>
                        <td>$5.689.000</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/transactions/1`}><button className={`${styles.button} ${styles.view}`}>View</button></Link>
                                <form action="">
                                    <input type="hidden" name="id" value="" className="" />
                                    <button className={`${styles.button} ${styles.delete}`} >Delete</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions