import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: "home",
  },
  {
    name: "History",
    path: "/history",
    icon: "history",
  },
  {
    name: "About",
    path: "/about",
    icon: "info",
  },
];

const MainLayout = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="w-screen flex items-center justify-center">
      <div className="flex flex-col max-w-screen-md w-full h-svh">
        <header className="bg-gray-300 h-16 flex items-center justify-center">
          <h3>Your Water</h3>
        </header>
        <div className="flex-1 overflow-auto max-h-screen pb-20 bg-slate-300">
          {children}
        </div>
        <nav className="bg-gray-300 h-16 max-w-screen-md absolute bottom-0 w-full grid grid-flow-col">
          {navItems.map((item) => (
            <Link
              to={item.path}
              className={`flex transition duration-300 items-center justify-center hover:bg-gray-500 ${
                currentPath === item.path ? "bg-gray-400" : ""
              }`}
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MainLayout;
