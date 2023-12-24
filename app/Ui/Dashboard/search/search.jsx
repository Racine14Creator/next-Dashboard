"use client"

import { MdSearch } from "react-icons/md"
import styles from "./search.module.css"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

const Search = ({ placeholder }) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();


    const handleSearch = useDebouncedCallback((event) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", 1);

        if (event.target.value) {
            event.target.value.length > 2 && params.set("q", event.target.value)
        } else {
            params.delete("q")
        }
        replace(`${pathname}?${params}`)
    }, 300)

    return (
        <div className={styles.container}>
            <MdSearch />
            <input type="text" className={styles.input} placeholder={placeholder} onChange={handleSearch} />
        </div>
    )
}

export default Search