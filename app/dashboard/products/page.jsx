import Pagination from "@/app/Ui/Dashboard/pagination/Pagination"
import styles from "@/app/Ui/Dashboard/product/product.module.css"
import Search from "@/app/Ui/Dashboard/search/search"
import Image from "next/image"
import Link from "next/link"
import { fetchProduct } from "@/app/lib/data"

const Products = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;

    const { count, products } = await fetchProduct(q, page)
    console.log(products)
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..." />
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add new</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Color</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>
                                <div className={styles.product}>
                                    <Image src={product.img || "/astronaute-no-bg.png"} width={40} height={40} className={styles.productImage} />
                                    {product.title}
                                </div>

                            </td>
                            <td>{product.desc}</td>
                            <td>$ {product.price}</td>
                            <td>{product.createdAt.toString().splice(4, 16)}</td>
                            <td>{product.color}</td>
                            <td>{product.size}</td>
                            <td>
                                <div className={styles.buttons}>
                                    <Link href={`/dashboard/products/${product._id}`}>
                                        <button className={`${styles.button} ${styles.view}`}>View</button>
                                    </Link>
                                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={count} />
        </div >
    )
}

export default Products