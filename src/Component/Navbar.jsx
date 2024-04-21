import { GiftIcon, LightBulbIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const menu = [
  {
    name: "KiDonneAKi",
    href: "/Kidonneaki",
    icon: GiftIcon,
    disable: false
  },{
    name: "Thèmes",
    href: "/Themes",
    icon: LightBulbIcon,
    disable: true
  }
];

export default function Navbar() {
  return (
    <div className="bg-white">
      <nav className="flex items-center justify-between mx-auto max-w-4xl px-6 border-b-2 border-gray-100  py-6">
        <Link to="/" className="flex items-center space-x-2">
          <img
            className="h-10 w-auto"
            src="/cactus-2.svg"
            alt="logo"
          />
          <h1 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#7C90A0] to-[#330867] ">
            Tyragehösor
          </h1>
        </Link>
        <ul className="flex space-x-10">
          {menu.map((item) => (
            <li key={item.name}>
            {item.disable ? (
              <div className="-m-3 flex items-center rounded-md p-3 cursor-not-allowed opacity-50">
                <item.icon
                  className="h-6 w-6 flex-shrink-0 text-[#7C90A0] "
                  aria-hidden="true"
                />
                <span className="ml-3 text-base font-medium text-[#330867] ">
                  {item.name}
                </span>
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
              >
                <item.icon
                  className="h-6 w-6 flex-shrink-0 text-[#7C90A0] "
                  aria-hidden="true"
                />
                <span className="ml-3 text-base font-medium text-[#330867] ">
                  {item.name}
                </span>
              </Link>
            )}
          </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
