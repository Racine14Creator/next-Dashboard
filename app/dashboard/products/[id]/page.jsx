import styles from "@/app/Ui/Dashboard/users/ProductSingleData.module.css"
import Image from "next/image"

const ProductSinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/next.svg" fill />
                </div>
                Iphone 15 Pro Max
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="title" id="title" placeholder="Title" />
                    <label>Price</label>
                    <input type="number" name="price" id="price" placeholder="price" />
                    <label>Stock</label>
                    <input type="number" name="stock" id="stock" placeholder="stock" />
                    <label>Color</label>
                    <input type="text" name="color" id="color" placeholder="Color" />

                    <label>Categorie</label>
                    <select name="cat" id="cat">
                        <option value="iphone">Iphone</option>
                        <option value="Computers">Computers</option>
                        <option value="kitchen">Kitchen</option>
                    </select>

                    <label>Description</label>
                    <textarea name="desc" rows={10} placeholder="Description"></textarea>

                    <button type="submit" className={styles.button}>Update</button>
                </form>
            </div>
        </div>
    )
}

export default ProductSinglePage