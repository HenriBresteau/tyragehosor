import { GiftIcon, LightBulbIcon } from "@heroicons/react/24/outline";

const menu = [
  {
    name: "Thêmes",
    href: "#",
    icon: LightBulbIcon,
  },
  {
    name: "KiDonneAKi",
    href: "#",
    icon: GiftIcon,
  },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white max-w-7xl px-6 border-b-2 border-gray-100  py-6">
      <div className="flex items-center space-x-2">
        <img
          className="h-10 w-auto"
          src="/src/assets/logo_noel.svg"
          alt="logo"
        />
        <h1 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#30CFD0] to-[#330867] ">
          Tyragehösor
        </h1>
      </div>
      <ul className="flex space-x-10">
        {menu.map((item) => (
          <li>
            <a
              key={item.name}
              href={item.href}
              className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
            >
              <item.icon
                className="h-6 w-6 flex-shrink-0 text-[#30CFD0] "
                aria-hidden="true"
              />
              <span className="ml-3 text-base font-medium text-[#330867] ">
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
