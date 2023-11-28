import Image from "next/image"
import styles from "./transactions.module.css"

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Latest Transactions</h3>
            <table className={styles.table}>

                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
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
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions