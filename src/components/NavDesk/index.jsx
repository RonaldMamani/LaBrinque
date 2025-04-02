import { Link, useLocation } from "react-router-dom"

import IconeWhatsapp from "../SVG/IconeWhatsapp"
import IconeInstagram from "../SVG/IcconeInstagram"

export default function NavDesk() {
    const {pathname} = useLocation()
    
    const textColor = `
        ${pathname === '/' && 'text-[#963B84]'}
        ${pathname === '/sobre' && 'text-[#77B8A0]'}
        ${pathname === '/servicos' && 'text-[#EC7BA7]'}
        ${pathname === '/nossoespaco' && 'text-[#114C84]'}
    `

    const backgroundColor = `
        ${pathname === '/' && 'hover:bg-[#963B84]'}
        ${pathname === '/sobre' && 'hover:bg-[#77B8A0]'}
        ${pathname === '/servicos' && 'hover:bg-[#EC7BA7]'}
        ${pathname === '/nossoespaco' && 'hover:bg-[#114C84]'}
    `

    return(
        <ul className="
            max-lg:hidden
            flex justify-between items-center gap-20">
            <Link to="/sobre" 
                className={`${textColor} text-xl font-bold hover:border-b-4`}>
                Sobre Nós
            </Link>
            <Link to="/servicos" 
                className={`${textColor} text-xl font-bold hover:border-b-4`}>
                Serviços
            </Link>
            <Link to="/nossoespaco" 
                className={`${textColor} text-xl font-bold hover:border-b-4`}>
                Nosso Espaço
            </Link>
            <div className="
                flex justify-between gap-10
                ">
                <a 
                    href="https://api.whatsapp.com/send?phone=5511937223405"
                    target="_blank"
                    className={`
                        rounded-full ${backgroundColor} transition-colors
                        `}
                        
                >
                    <IconeWhatsapp className={`${textColor} p-2 hover:text-white hover:cursor-pointer`} />
                </a>
                <a 
                    href="https://www.instagram.com/clinicalabrinque.di?igsh=bTgyamRhdjgwdHo2"
                    target="_blank"
                    className={`
                        rounded-full ${backgroundColor} transition-colors
                        `}
                >
                    <IconeInstagram className={`${textColor} p-2 hover:text-white hover:cursor-pointer`} />
                </a>
            </div>
        </ul>
    )
}