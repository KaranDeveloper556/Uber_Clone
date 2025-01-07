import { Link } from "react-router-dom"

const Entry = () => {
    return (
        <section className="entry-page min-h-screen min-w-screen bg-black">
            <div className="absolute h-screen w-full">
                <img
                    src="https://i.pinimg.com/736x/c3/ce/b5/c3ceb56ab170adbedfb009c0fb164fd2.jpg"
                    alt="Urban scene with traffic light"
                    className="absolute w-full h-full bg-cover object-cover brightness-90"
                />
            </div>
            <div className="relative h-screen flex flex-col p-8">

                {/* Logo */}
                <div className="mb-auto">
                    <img src="/uber-logo.png" alt="uber-logo" className="h-36" />
                </div>

                {/* Content */}
                <div className="space-y-6 max-w-sm mx-auto w-full">
                    <h2 className="text-white text-[7.5vw] font-bold text-center">
                        Get Started with Uber
                    </h2>
                    <Link
                        to="/user-login"
                        className="block w-full bg-black hover:bg-black/90 text-white py-6 text-lg rounded-3xl text-center transition-colors"
                    >
                        Continue
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Entry