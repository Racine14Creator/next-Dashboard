"use server"

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { signIn } from "../auth";

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
        return NextResponse.json(
            { message: 'Failed to register user' },
            { status: 500 }
        )
    }
    revalidatePath("/dashboard/users");
}

export const fetchUser = async (id) => {
    try {
        connectToDb();
        const user = await User.findById(id)
        return user
    } catch (error) {
        return NextResponse.json({ message: 'Failed to register user' }, { status: 500 })
    }
}

export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)
    try {
        connectToDb();
        const updateFileds = {
            username, email, password, phone, address, isAdmin, isActive
        }

        Object.keys(updateFileds).forEach(
            (key) => (updateFileds[key] === '' || undefined) && delete updateFileds[key]
        )
        await User.findByIdAndUpdate(id, updateFileds)
    } catch (error) {
        return NextResponse.json({ message: 'Failed to fetch User' }, { status: 500 })
    }
    revalidatePath('/dashboard/users')
    redirect('/dashboard/users')
}

export const fetchProduct = async (id) => {
    try {
        connectToDb();
        const product = await Product.findById(id)
        return product
    } catch (error) {
        return NextResponse.json({ message: 'Failed to register user' }, { status: 500 })
    }
}

// Login

export const authenticate = async (formData) => {
    const { username, password } = Object.fromEntries(formData)
    // console.log(formData)
    try {
        await signIn("credentials", { username, password })
    } catch (error) {
        console.log(error)
        throw error
    }
}