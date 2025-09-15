
import Logo1 from "../assets/Group 68 1.jpg"
import Logo2 from "../assets/Desh-IT BD logo white.png"
import { nav_items } from '../config'
import { Link } from 'react-router'
import { useEffect, useState } from "react"
const Header = () => {
const [isActive,setIsActive] = useState(false);
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
    <section className={`fixed ${isActive ? "bg-white text-black shadow-2xl" : "bg-transparent text-white"} z-50 w-full`}>
        <div className="container w-full mx-auto lg:px-16">
            <div className={` flex items-center w-full justify-between py-8`}>
                <div className=" w-full ">
                    <img src={isActive? Logo1 : Logo2} alt="" className="flex h-full max-w-37 w-fit " />
                </div>
                <ul className="flex items-center justify-between gap-8 w-full text-md font-semibold">
                    {nav_items.map((item,index)=>(
                        <li key={index} className="grid group max-w-max gap-1">
                            <Link to={item.path}>{item.label}</Link>
                            <div  className='bg-white opacity-0 group-hover:opacity-100  h-[1px] w-full'/>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Header