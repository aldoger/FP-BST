

const Navbar = () => {
    return (
        <>
        <div className="flex flex-row w-full h-16 bg-gradient-to-r from-yellow-800 to-red-600 items-center justify-between px-8 shadow-lg">
        <h1 className="text-black text-2xl font-bold">YokMasak!</h1>
            <ul className="flex flex-row space-x-8">
                <li>
                    <a href="/" className="text-black text-lg hover:text-white transition-colors duration-300">Home</a>
                </li>
                <li>
                    <a href="/About" className="text-black text-lg hover:text-white transition-colors duration-300">About</a>
                </li>
                <li>
                    <a href="/Search" className="text-black text-lg hover:text-white transition-colors duration-300">Search</a>
                </li>
            </ul>
        </div>

        </>
    )
}

export default Navbar;