'use client'
import { useRouter } from "next/navigation"
import styles from "./BackButton.module.css"

const BackButton = () => {
    const router = useRouter()
    return <button className={styles.button} onClick={_ => router.back()}>Back</button>
}

export default BackButton