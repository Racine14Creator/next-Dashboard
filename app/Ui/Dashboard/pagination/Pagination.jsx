"use client"

import { useSearchParams, useRouter, usePathname } from "next/navigation"
import styles from "./pagination.module.css"

const Pagination = ({ count }) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const page = searchParams.get("page") || 1;

    const params = new URLSearchParams(searchParams)
    const Item_Per_Page = 5

    const hasPrev = Item_Per_Page * (parseInt(page) - 1) > 0
    const hasNex = Item_Per_Page * (parseInt(page) - 1) + Item_Per_Page < count

    const handleChangePage = (type) => {
        type === "prev"
            ? params.set("page", parseInt(page) - 1)
            : params.set("page", parseInt(page) + 1)
        replace(`${pathname}?${params}`)
    }
    return (
        <div className={styles.container}>
            <button className={styles.button} disabled={!hasPrev} onClick={() => handleChangePage("prev")}>Previous</button>
            <button className={styles.button} disabled={!hasNex} onClick={() => handleChangePage("next")}>Next</button>
        </div>
    )
}

export default Pagination