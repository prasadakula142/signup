import { NavLink } from "react-router-dom";
import {FiHome,FiBook,FiUser,FiCreditCard,FiBell,FiSettings,} from "react-icons/fi";

export default function Sidebar() {
  const navItems = [
    { label: "Dashboard", path: "/", icon: FiHome },
    { label: "My Bookings", path: "/bookings", icon: FiBook },
    { label: "Profile", path: "/profile", icon: FiUser },
    { label: "Payments", path: "/payments", icon: FiCreditCard },
    { label: "Notifications", path: "/notifications", icon: FiBell },
    { label: "Settings", path: "/settings", icon: FiSettings },
  ];

  return (
    <aside className="w-64 hidden md:flex flex-col bg-blue-900 dark:bg-gray-800 p-4">
      
      {/* Avatar Section */}
      <div className="flex items-center space-x-4 mb-8">
        <img
          src="https://via.placeholder.com/80"
          alt="User Avatar"
          className="w-12 h-12 rounded-full object-cover border-2 border-white"
        />
        <div className="hidden lg:block">
          <p className="text-white font-semibold text-sm">Hi, Sarah</p>
          <p className="text-blue-100 text-xs">Sarah@example.com</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2">
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center space-x-3 rounded px-3 py-2 text-sm transition
              ${
                isActive
                  ? "bg-gray-300 text-blue"
                  : "text-blue-100 hover:bg-gray-300 hover:text-blue-900"
              }`
            }
          >
            <Icon className="text-lg"/>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
