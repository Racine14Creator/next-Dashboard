import styles from "@/app/Ui/Dashboard/users/ProductSingleData.module.css"
import { fetchProduct } from "@/app/lib/actions"
import Image from "next/image"

const ProductSinglePage = async ({ params }) => {
    const { id } = params,
        Product = await fetchProduct(id)
    console.log(Product)
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={Product.img || "/next.svg"} fill />
                </div>
                {Product.title}
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="title" id="title" placeholder={Product.title} />
                    <label>Price</label>
                    <input type="number" name="price" id="price" placeholder={Product.price} />
                    <label>Stock</label>
                    <input type="number" name="stock" id="stock" placeholder={Product.stock} />
                    <label>Color</label>
                    <input type="text" name="color" id="color" placeholder={Product.color} />

                    <label>Categorie</label>
                    <select name="cat" id="cat">
                        <option value="iphone" selected={Product.cat}>Iphone</option>
                        <option value="Computers" selected={Product.cat}>Computers</option>
                        <option value="kitchen" selected={Product.cat}>Kitchen</option>
                    </select>


                    <label>Description</label>
                    <textarea name="desc" rows={10} placeholder={Product.desc || "Description is empty..."}></textarea>

                    <button className={styles.button}>Update</button>
                </form>
            </div>
        </div>
    )
}

export default ProductSinglePage