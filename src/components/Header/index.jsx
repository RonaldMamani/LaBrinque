import { useState } from "react";

import Logo from "/src/assets/LOGO.png";
import Hamburger from "/src/assets/Menu-Icon.svg";
import Close from "/src/assets/Close_ICON.svg";
import { Link } from "react-router-dom";


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
                            ${open ? "h-screen z-50" : ""}
                            md:px-20 md:py-12
                        `}>
                            <div className="flex justify-between items-center">
                                <div className="
                                    ">
                                    <img src={Logo} alt="Logo La Brinque" className="
                                        w-[90px] h-[90px] rounded-full
                                        md:[120px] md:[120px]
                                        " />
                                </div>
                                <button className="
                                    w-[60px] h-[60px] 
                                    hover:cursor-pointer"
                                    onClick={() => setOpen(!open)}
                                    >
                                    <img 
                                        src={open ? Close : Hamburger} 
                                        alt={open ? "Icone Fechar Menu" : "Icone Abrir Menu"}></img>
                                </button>
                            </div>
                            {open &&
                                <nav className="flex flex-col gap-8 pt-14 text-3xl text-[#77B8A0]">
                                    <Link to="/" className="hover:text-orange-500">Home</Link>
                                    <Link to="/sobre" className="hover:text-orange-500">Sobre Nós</Link>
                                    <Link to="/servicos" className="hover:text-orange-500">Nossos Serviços</Link>
                                    <Link to="nossoespaco" className="hover:text-orange-500">Nosso Espaço</Link>
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
                            fixed inset-0 bg-black/70 transition-opacity duration-300"
                            onClick={() => setOpen(false)}
                        >
                        </div>
                    </>
                )
                }
        </header>
    )
}