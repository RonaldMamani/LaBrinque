import { useState } from "react"

import Logo from "../../assets/LOGO.png"
import Hamburger from "../../assets/Menu-Icon.svg"
import Close from "../../assets/Close_ICON.svg"


export default function Header() {
    
    const [open, setOpen] = useState(false)

    return(
        <header className="
            shadow-md
            ">
                <nav className="
                    px-10 py-8 flex justify-between items-center
                    ">
                        <div className="
                            ">
                            <img src={Logo} alt="Logo La Brinque" className="
                                w-[90px] h-[90px] rounded-full
                                " />
                        </div>
                        <button className="w-[60px] h-[60px]" onClick={() => setOpen(!open)}>
                            {open ? (
                                <img src={Close} alt="" />
                            ) : (
                                <img src={Hamburger} alt="" />
                            )
                            }
                        </button>
                </nav>
                <div className="
                    p-[5px] w-full
                    bg-[linear-gradient(to_right,#114C84_0%,#EF7811_20%,#B9172C_40%,#963B84_60%,#EC7BA7_80%,#77B8A0_100%)]
                "></div>
        </header>
    )
}