import styles from "@/app/Ui/Dashboard/product/addProduct/addProduct.module.css"

const AddProduct = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder="Title" name="title" required />
                <select name="cat" id="cat">
                    <option value="kitchen">Choose a Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input type="number" name="price" placeholder="Price" id="" />
                <input type="number" name="stock" placeholder="Stock" id="" />
                <input type="text" name="color" placeholder="Color" id="" />
                <input type="text" name="size" placeholder="Size" id="" />
                <textarea
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