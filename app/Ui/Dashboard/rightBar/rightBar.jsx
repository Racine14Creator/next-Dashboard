import Image from "next/image"
import styles from "./rightBar.module.css"
import { MdPlayCircleFilled } from "react-icons/md"

const RightBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaute-no-bg.png" alt="BgContainer" fill className={styles.bg} />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}> Available Now</span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laudantium ullam itaque eos minima illum perferendis, veniam dicta officiis tempore consectetur ea illo vitae voluptate deserunt accusantium delectus quasi earum!
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.bgContainer}>

                    <Image src="/astronaute-no-bg.png" alt="BgContainer" className={styles.bg} fill />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}> Available Now</span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laudantium ullam itaque eos minima illum perferendis, veniam dicta officiis tempore consectetur ea illo vitae voluptate deserunt accusantium delectus quasi earum!
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RightBar