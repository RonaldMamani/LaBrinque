import Logo from "../../assets/LOGO-LB.svg"
import Whatsapp from "../../assets/ICONE-SOCIAL.svg"
import Facebook from "../../assets/ICON-FB.svg"

import TextBoldWhite from "../Text/TextBoldWhite"

export default function Footer(){
    return(
        <footer>
            <div className="
                    p-[5px] w-full relative
                    bg-[linear-gradient(to_right,#114C84_0%,#EF7811_20%,#B9172C_40%,#963B84_60%,#EC7BA7_80%,#77B8A0_100%)]
                ">
                    <div>
                        <img 
                            src={Logo} 
                            alt="" 
                            className="
                                absolute w-[90px] h-[90px]
                                left-1/2 -top-8 transform -translate-x-1/2 rounded-full
                                " />
                    </div>
            </div>
            <div className="bg-[#EF7811] px-9 py-16">
                <div className="text-center items-center py-10 flex flex-col gap-8">
                    <TextBoldWhite numbertext={26} text="(11) 93722-3405" />
                    <div>
                        <TextBoldWhite numbertext={26} text="Rua Carlos de Campo, 45 Vila Correa" />
                        <TextBoldWhite numbertext={26} text="Ferraz de Vasconcelos - SP, 08502-320" />
                    </div>
                </div>
                <div className="
                    flex flex-col gap-10 items-center
                    ">
                    <img src={Whatsapp} alt="" className="w-[45px] h-[45px]" />
                    <img src={Facebook} alt="" className="w-[45px] h-[45px]"/>
                </div>
            </div>
            <div className="bg-[#77B8A0] px-12 py-5 text-center">
                <TextBoldWhite 
                    numbertext={14}
                    text="Lá Brinquê - Clinica de Desenvolvimento Infantil © 2023 - Rodos os direitos reservados" />
            </div>
        </footer>
    )
}