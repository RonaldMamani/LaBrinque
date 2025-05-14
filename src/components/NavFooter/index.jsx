import { useLocation } from "react-router-dom"

import ImageSobre from "../../assets/IMAGEM-ILUSTRATIVA.jpg"
import ImageServico from "../../assets/IMAGEM-ILUSTRATIVA-4.jpg"
import ImageEspaco from "../../assets/IMAGEM-ILUSTRATIVA-5.jpg"

import LinkButton from "../LinkButton"

export default function NavFooter () {
    const {pathname} = useLocation()

    return(
        <div className="
            px-10 pt-16 pb-28 flex flex-col gap-16
            md:px-24
            lg:px-36
            xl:px-60
            ">
            <h5 className="
                text-center text-[#EF7811] font-bold text-[40px]
                lg:text-5xl
                ">Conheça Também</h5>
            <div className="
                flex flex-col gap-12 text-center items-center font-bold
                lg:flex-row lg:justify-between
                xl:px-28
                ">
                {pathname === "/nossoespaco" ? "" : (
                    <LinkButton
                        image={ImageEspaco}
                        alt="Imagem de Espaço Interno da Clinica"
                        to="/nossoespaco"
                        className="bg-[#114C84] hover:bg-sky-800"
                        text="Nosso Espaço"
                    />
                )}
                {pathname === "/servicos" ? "" : (
                    <LinkButton
                        image={ImageServico}
                        alt="Imagem de Criança Lendo"
                        to="/servicos"
                        className="bg-[#EC7BA7] hover:bg-pink-400"
                        text="Serviços"
                        className1={pathname === "/sobre" && "md:order-2"}
                        className2={pathname === "/sobre" && "md:order-1"}
                    />
                )}
                {pathname === "/sobre" ? "" : (
                    <LinkButton
                        image={ImageSobre}
                        alt=""
                        to="/sobre"
                        className="bg-[#77B8A0] hover:bg-teal-600"
                        text="Sobre Nós"
                        className1={pathname === "/servicos" && "md:order-2" || pathname === "/nossoespaco" && "md:order-2"}
                        className2={pathname === "/servicos" && "md:order-1" || pathname === "/nossoespaco" && "md:order-1"}
                    />
                )}
                
            </div>
        </div>
    )
}