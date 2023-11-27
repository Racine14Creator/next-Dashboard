import Card from "../Ui/Dashboard/Card/Card"
import Chart from "../Ui/Dashboard/chart/chart"
import RightBar from "../Ui/Dashboard/rightBar/rightBar"
import Transactions from "../Ui/Dashboard/transactions/Transactions"
import styles from "../Ui/Dashboard/dashboard.module.css"


const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transactions />
                <Chart />
            </div>
            <div className={styles.side}>
                <RightBar />
            </div>
        </div>
    )
}

export default Dashboard