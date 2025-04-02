import { useState } from "react";

import Logo from "/src/assets/LOGO.png";
import Hamburger from "/src/assets/Menu-Icon.svg";
import Close from "/src/assets/Close_ICON.svg";
import { Link } from "react-router-dom";
import NavDesk from "../NavDesk";


export default function Header() {
    
    const [open, setOpen] = useState(false);

    return(
        <header className={`
                `}>
                <div className={`
                    ${open ? "absolute w-full z-50" : ""}
                    `}>
                    <nav className={`
                            px-10 py-8 bg-white flex flex-col transition-all duration-300
                            ${open ? "max-lg:h-screen z-50" : ""}
                            md:px-20
                            lg:px-36
                            xl:px-48
                        `}>
                            <div className="flex justify-between items-center">
                                <Link to="/" className="
                                    rounded-full bg-emerald-100
                                    "
                                    onClick={() => setOpen(false)}
                                    >
                                    <img src={Logo} alt="Logo La Brinque" className="
                                        w-[90px] h-[90px] rounded-full
                                        md:w-[110px] md:h-[110px]
                                        
                                    " />
                                </Link>
                                <button className="
                                    w-[60px] h-[60px] 
                                    hover:cursor-pointer
                                    lg:hidden
                                    "
                                    onClick={() => setOpen(!open)}
                                    >
                                    <img 
                                        src={open ? Close : Hamburger} 
                                        alt={open ? "Icone Fechar Menu" : "Icone Abrir Menu"}></img>
                                </button>
                                <NavDesk />
                            </div>
                            {open &&
                                <nav className="
                                    flex flex-col gap-8 pt-14 text-3xl text-[#77B8A0]
                                    lg:hidden
                                    ">
                                    <Link to="/" className="hover:text-orange-500" onClick={() => setOpen(!open)} >Home</Link>
                                    <Link to="/sobre" className="hover:text-orange-500" onClick={() => setOpen(!open)}>Sobre Nós</Link>
                                    <Link to="/servicos" className="hover:text-orange-500" onClick={() => setOpen(!open)}>Nossos Serviços</Link>
                                    <Link to="/nossoespaco" className="hover:text-orange-500" onClick={() => setOpen(!open)}>Nosso Espaço</Link>
                                </nav>
                            }
                    </nav>
                    <div className="
                        p-[5px] w-full
                        bg-[linear-gradient(to_right,#114C84_0%,#EF7811_20%,#B9172C_40%,#963B84_60%,#EC7BA7_80%,#77B8A0_100%)]
                    "></div>
                </div>
                {open && (
                    <>
                        <div className="
                            fixed inset-0 bg-black/70 transition-opacity duration-300
                            lg:hidden
                            "
                            onClick={() => setOpen(false)}
                        >
                        </div>
                    </>
                )
                }
        </header>
    )
}