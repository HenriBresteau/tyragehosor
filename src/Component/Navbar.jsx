import clsx from "clsx";
import { Gift, Home, Lightbulb } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const menu = [
    {
        name: "Home",
        href: "/",
        icon: Home,
    },
    {
        name: "Thèmes",
        href: "/Themes",
        icon: Lightbulb,
    },
    {
        name: "KiDonneAKi",
        href: "/Kidonneaki",
        icon: Gift,
    },
];

export default function Navbar() {
    return (
        <div className="bg-white border-b-2 border-gray-100">
            <nav className="flex items-center justify-between mx-auto max-w-5xl py-6">
                <Link to="/" className="flex items-center space-x-2">
                    <img
                        className="h-12 w-12"
                        src="/t-rex-icon.png"
                        alt="logo"
                    />
                    <h1 className="text-lg uppercase font-gilroy font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-[#92d079] to-[#42762e] ">
                        Tyragehösor
                    </h1>
                </Link>
                <ul className="flex gap-6 bg-greenlight/10 px-6 py-2 rounded-xl">
                    {menu.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.href}
                                className={({ isActive }) =>
                                    clsx(
                                        "text-lg font-medium transition-colors flex items-center py-1 px-2 group hover:text-green ",
                                        isActive
                                            ? "text-green-500 border-b-2 border-green "
                                            : "text-black"
                                    )
                                }
                                aria-current={({ isActive }) =>
                                    isActive ? "page" : undefined
                                }
                            >
                                <item.icon
                                    className="h-6 w-6 flex-shrink-0"
                                    aria-hidden="true"
                                />
                                <span className="ml-3 font-gilroy  text-base font-semibold text-inherit group-hover:text-green">
                                    {item.name}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
