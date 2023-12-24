"use client"

import styles from "./chart.module.css"

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
    {
        name: "Mon",
        visit: 1900,
        click: 5000,
    },
    {
        name: "Tue",
        visit: 2050,
        click: 1504,
    },
    {
        name: "Wed",
        visit: 2300,
        click: 2900,
    },
    {
        name: "Thi",
        visit: 5600,
        click: 3200,
    },
    {
        name: "Fri",
        visit: 4380,
        click: 5690,
    },
    {
        name: "Sat",
        visit: 4940,
        click: 3430,
    },
    {
        name: "Sun",
        visit: 1090,
        click: 5040,
    },
]
const Chart = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Weekly Recap</h2>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{ background: "#151c2c", borderRadius: "10px" }} />
                    <Legend />
                    <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart