import styles from "@/app/Ui/Dashboard/product/addProduct/addProduct.module.css"
import { addProduct } from "@/app/lib/actions"

const AddProduct = () => {
    return (
        <div className={styles.container}>
            <form action={addProduct} className={styles.form}>
                <input type="text" placeholder="Title" name="title" required />
                <select name="cat" id="cat" required>
                    <option value="kitchen">Choose a Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input type="number" name="price" placeholder="Price" id="" required />
                <input type="number" name="stock" placeholder="Stock" id="" required />
                <input type="text" name="color" placeholder="Color" id="" required />
                <input type="text" name="size" placeholder="Size" id="" required />
                <textarea
                    required
                    name="desc"
                    id="desc"
                    rows="16"
                    placeholder="Description">
                </textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddProduct