"use server"

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } =
        Object.fromEntries(formData);

    try {
        connectToDb();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        });

        await newUser.save();
    } catch (err) {
        console.log(err);
        throw new Error("Failed to create user!");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
    const { title, cat, price, stock, color, size, desc } = Object.fromEntries(formData)

    if (!title || !cat || !price || !stock || !color || !size || !desc) { return "Empty fields" }

    try {
        connectToDb();

        const newProduct = new Product({
            title, cat, price, stock, color, size, desc
        })
        await newProduct.save()
    } catch (error) {
        return NextResponse.json({ message: 'Failed to register user' }, { status: 200 })
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}
export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData)

    try {
        connectToDb();
        await Product.findByIdAndDelete(id)
    } catch (error) {
        return NextResponse.json({ message: 'Failed to register product' }, { status: 500 })
    }
    revalidatePath("/dashboard/products");
}
export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData)

    try {
        connectToDb();
        await User.findByIdAndDelete(id)
    } catch (error) {
        return NextResponse.json({ message: 'Failed to register user' }, { status: 500 })
    }
    revalidatePath("/dashboard/users");
}