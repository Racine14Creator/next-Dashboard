import Image from "next/image"
import Link from "next/link"

const HomePage = () => {
    return (
        <>
            <div className="con">
                <div className="grid">
                    <div className="image">
                        <Image width={320} height={320} src={``} />
                    </div>
                    <div className="content">
                        <h2>Home Page</h2>
                        <Link href={`/dashboard`}>Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage