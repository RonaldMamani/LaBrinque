import Logo from "/src/assets/LOGO-LB.svg"

import TextBoldWhite from "../Text/TextBoldWhite"
import IconeWhatsapp from "../SVG/IconeWhatsapp"
import IconeInstagram from "../SVG/IcconeInstagram"

export default function Footer(){
    return(
        <footer className="">
            <div className="
                    p-[5px] w-full relative
                    bg-[linear-gradient(to_right,#114C84_0%,#EF7811_20%,#B9172C_40%,#963B84_60%,#EC7BA7_80%,#77B8A0_100%)]
                ">
                    <div>
                        <img 
                            src={Logo} 
                            alt="Logo La Brinque" 
                            className="
                                absolute w-[90px] h-[90px]
                                left-1/2 -top-8 transform -translate-x-1/2 rounded-full
                                md:w-[120px] md:h-[120px] md:-top-14
                                " />
                    </div>
            </div>
            <div className="
                bg-[#EF7811] px-14 py-16 flex flex-col items-center
                md:px-24
                lg:px-36 lg:flex-row lg:justify-between
                xl:px-48
                ">
                <div className="
                    text-center items-center py-12 flex flex-col gap-8
                    lg:text-start lg:items-start
                    ">
                    <TextBoldWhite className="text-3xl" text="(11) 93722-3405" />
                    <div>
                        <TextBoldWhite className="text-2xl" text="Rua Carlos de Campo, 45 Vila Correa" />
                        <TextBoldWhite className="text-2xl" text="Ferraz de Vasconcelos - SP, 08502-320" />
                    </div>
                </div>
                <div className="
                    flex flex-col gap-10 items-center
                    md:flex-row
                    ">
                    <a 
                        href="https://api.whatsapp.com/send?phone=5511937223405" 
                        target="_blank"
                        className="rounded-full hover:bg-white transition-colors"
                        >
                        <IconeWhatsapp className="
                            text-white w-[45px] h-[45px] p-2 hover:text-[#EF7811]
                            md:w-[50px] md:h-[50px]
                            lg:w-[60px] lg:h-[60px]
                            "/>
                    </a>
                    <a 
                        href="https://www.instagram.com/clinicalabrinque.di?igsh=bTgyamRhdjgwdHo2" 
                        target="_blank"
                        className="rounded-full hover:bg-white transition-colors"
                        >
                        <IconeInstagram className="
                            text-white w-[45px] h-[45px] p-2 hover:text-[#EF7811]
                            md:w-[50px] md:h-[50px]
                            lg:w-[60px] lg:h-[60px]
                            "
                            />
                    </a>
                </div>
            </div>
            <div className="
                bg-[#77B8A0] px-12 py-5 text-center
                md:px-28
                ">
                <TextBoldWhite 
                    className=""
                    text="Lá Brinquê - Clinica de Desenvolvimento Infantil © 2023 - Rodos os direitos reservados" />
            </div>
        </footer>
    )
}