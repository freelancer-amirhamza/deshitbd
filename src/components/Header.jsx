
import Logo1 from "../assets/Group 68 1.jpg"
import Logo2 from "../assets/Desh-IT BD logo white.png"
import { nav_items } from '../config'
import { Link } from 'react-router'
import { useEffect, useState } from "react"
import { HiMenuAlt2 } from "react-icons/hi"
import { VscChromeClose } from "react-icons/vsc"
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  console.log(isActive,)
  return (
    <section className={`fixed ${isActive ? "bg-white  shadow-2xl" : "bg-transparent"} z-50 w-full`}>
      <div className="container w-full mx-auto lg:px-16">
        {/* header for large display */}
        <div className={` hidden md:flex items-center w-full justify-between py-8`}>
          <div className=" w-full w ">
            <img src={isActive ? Logo1 : Logo2} alt="" className="flex h-full max-w-37 w-fit " />
          </div>
          {/* logo end */}
          <ul className="flex items-center justify-between gap-8 w-full text-md font-semibold">
            {nav_items.map((item, index) => (
              <li key={index} className={`grid group max-w-max gap-1 ${isActive ? "text-neutral-600" : "text-white"}`}>
                <Link to={item.path}>{item.label}</Link>
                <div className='bg-white opacity-0 group-hover:opacity-100  h-[1px] w-full' />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* header for small device */}
      <div className={`w-full flex md:hidden items-center py-4 px-5 ${!isActive ? "text-white":"text-neutral-600" }`}>
        {/* menu button start */}
        <button onClick={() => setIsOpen(!isOpen)} className="w-full flex-1 text-3xl">
          <HiMenuAlt2 />
        </button>
        {/* logo start */}
        <div className="">
          <img src={isActive ? Logo1 : Logo2} alt="" className="flex h-full max-w-37  " />
        </div>
        <div className="flex-1"/>
      </div>
      {/* navbar for small device */}
      <div className={`${isOpen ? "min-w-[20rem] opacity-100" : "min-w-0 opacity-0"} absolute  transition-all top-0 h-screen bg-white`}>
        <div className="grid ">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 w-full items-center gap-2 cursor-pointer flex justify-end p-8  text-2xl">
            <span className="text-base font-medium text-neutral-400">Close</span>
            <VscChromeClose className=" hover:bg-orange-600 p-0.5 rounded-full hover:text-white text-3xl" />
          </button>
          <ul className="text-neutral-400 grid w-full">
            {nav_items.map((item, index) => (
              <li key={index} className="text-base py-2 px-9 border-t last:border-b font-medium border-neutral-200 ">
                <Link to={item.path} className="">{item.label} </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Header