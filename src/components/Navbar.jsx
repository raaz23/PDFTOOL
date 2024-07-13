import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";



const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [click,setClick]=useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  function handleClick(){
    setClick(!click);
    toggleNavbar();
    setClick(false);
  }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src="pdf.png" alt="Logo" />
            <a href="#" alt="Home"><span className="text-xl tracking-widest bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text font-bold">PDFTOOL</span></a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="hover:underline underline-offset-8 hover:text-red-600">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md flex justify-even hover:shadow-md transition-all tracking-wider">
            Sign In
            </a>
            <a
              href="#pricing"
              className=" border-2 py-2 px-3 rounded-md bg-primaryColor transition-all hover:bg-secondaryColor text-textColor tracking-wider"
            >
           Try For Free
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end MobileNavbar transition-all">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="MobileNavbar fixed mt-4 right-0 z-20 bg-red-500 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 hover:underline underline-offset-8 text-white">
                  <a href={item.href}
                  onClick={handleClick}
                  >{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-6 gap-6">
              <a href="#" className="py-2 px-3 border rounded-md bg-white tracking-wider"
              onClick={handleClick}
              >
                Sign In
              </a>
              <a
                href="#pricing"
                onClick={handleClick}
                className="border-2 py-2 px-3 rounded-md bg-primaryColor transition-all hover:bg-secondaryColor text-textColor tracking-wider "
              >
                Try For Free
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
