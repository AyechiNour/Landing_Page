import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [openItems, setopenItems] = useState(false);
    const [state, setstate] = useState("transparent");
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                setstate("#271255")
            } else {
                setstate("transparent")
            }
        });
    });

    return (
        <nav className="flex sm:flex-row flex-col relative sticky top-0 items-center sm:px-16 py-5 z-50" style={{ background: state }}>
            <img src="/Images/logo.png" className="w-44" alt="" />
            <div className="sm:absolute right-0 text-sm sm:pr-16 sm:pt-0 pt-10">
                <NavLink to={"/"} className="mr-2 border-0 rounded-2xl px-5 py-1 hover:bg-violet-500" >Contact</NavLink>
                <NavLink to={"/"} className="mr-2 border rounded-2xl px-5 py-1 border-slate-50 hover:bg-violet-500" >Register</NavLink>
                <NavLink to={"/"} className="mr-2 rounded-2xl px-5 py-2 btnEffet" >Login</NavLink>

            </div>
        </nav>
    )
}

export default Navbar
