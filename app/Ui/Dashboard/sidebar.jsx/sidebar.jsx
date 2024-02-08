

import Image from "next/image"
import MenuLink from "./menuLink/menuLink"
import styles from "./sidebar.module.css"
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout
} from "react-icons/md"
import { auth, signOut } from "@/app/auth"
import Link from "next/link"


const menuItems = [
    {
        title: "Page",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />
            },
        ]
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />
            },
            {
                title: "Teams",
                path: "/dashboard/team",
                icon: <MdPeople />
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics />
            },
        ]
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            },
        ]
    }
]

const Sidebar = async () => {
    const session = await auth()
    // console.log(session)
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image src={session.user.profile || "/astronaute-no-bg.png"} alt="UserImage" className={styles.userImage} width="50" height="50" />
                <div className={styles.userDetail}>
                    <Link href={`/dashboard/profile`}>
                        <span className={styles.username}>
                            {session.user.username || 'Anonyme Username'}
                        </span>
                    </Link>
                    <span className={styles.userTitle}>{session.user.isAdmin ? 'Admin' : 'Client'}</span>
                </div>
            </div>

            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map(item => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
            <form action={async () => {
                "use server"
                await signOut()
            }}>
                <button className={styles.logout}>
                    <MdLogout />
                    Logout
                </button>
            </form>
        </div>
    )
}

export default Sidebar