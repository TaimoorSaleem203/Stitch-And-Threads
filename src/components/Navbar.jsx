const TopBar = () => {
    return (
        <div className="bg-primary tracking-wide text-white p-2 flex justify-center items-center">
            <i class="ri-arrow-left-s-line -translate-x-10"></i>
            Free shipping on US orders $100+ & Free exchanges
            <i class="ri-arrow-right-s-line translate-x-10"></i>
        </div>
    )
}

const MainNav = () => {
    return (
        <nav className="w-full bg-white mx-auto flex items-center justify-between p-6 px-14">
            <h1 className="text-text text-2xl font-extrabold cursor-pointer">STICH & THREADS</h1>

            <ul className="flex items-center gap-6 uppercase font-medium tracking-wider">
                {['Home','About','Services','Portfolio','Contact Us','Get a Quote'].map((item,key)=>{
                    return (
                        <li key={key} className="flex items-center gap-1">
                            <a href="#" className="hover:text-primary">{item}</a>
                            {item=="Services" && <i className="ri-arrow-down-s-line cursor-pointer"></i>}
                        </li>
                    )
                })}
            </ul>

            <div className="relative flex items-center gap-4 text-2xl">
                <button aria-label="Facebook"><i class="ri-facebook-circle-fill cursor-pointer"></i></button>
                <button aria-lablel="Instagram"><i class="ri-instagram-fill cursor-pointer"></i></button>
                <span className="border-l-2 border-y-slate-200 h-12"></span><i className="ri-search-line cursor-pointer"></i>
            </div>
        </nav>
    )
}

const Navbar = () => {
    return (
        <>
            <header className="w-screen font-body mx-auto">
                <TopBar />
                <MainNav />
            </header>
        </>
    )
}

export default Navbar