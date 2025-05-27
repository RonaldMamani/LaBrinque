import { HashLink } from "react-router-hash-link";

export default function Intro (){
    return(
        <section className="
            relative flex flex-col items-center text-center
            md:h-[calc(100vh-44px)]
            lg:h-[calc(100vh-170px)]
            ">
                <div className="
                    absolute inset-0 bg-[url(./assets/IMAGEM-TEMPLATE.jpg)] bg-no-repeat bg-cover bg-center 
                    ">
                    <div className="
                        absolute inset-0 bg-gradient-to-b from-black/10 to-black/95
                        lg:to-black/70
                        "></div>
                </div>
                <div className="
                    z-10 px-12 py-16 mt-5 flex flex-col gap-14
                    md:py-24 md:px-20
                    lg:gap-20
                    xl:px-60
                    ">
                    <div className="
                        text-white text-center flex flex-col gap-5
                        lg:gap-16
                        ">
                        <h1 className="
                            text-[36px] font-bold
                            md:text-[40px] md:px-16
                            lg:text-7xl
                            ">
                            Olá, somos a clínica de Desenvolvimento Infantil Lá Brinquê
                        </h1>
                        <p className="
                            text-[19px] px-8
                            md:px-32 md:text-[20px]
                            lg:text-3xl lg:px-64
                            ">Aqui você encontrará uma equipe que irá promover o desenvolvimento integral e o bem-estar das crianças.</p>
                    </div>
                    <div className="
                        flex flex-col items-center gap-8 font-bold text-[16px] text-white
                        md:flex-row justify-center
                        lg:text-2xl
                        ">
                        <HashLink
                            smooth
                            to="/sobre#header" 
                            className="
                                text-center bg-[#77B8A0] px-16 py-5 rounded-full
                                hover:bg-[#2AB8A0] transition-colors
                            " >
                            <p>Sobre Nós</p>
                        </HashLink>
                        <a
                            href="https://api.whatsapp.com/send?phone=5511937223405"
                            target="_blank"
                            className="
                                text-center bg-[#EF7811] px-6 py-5 rounded-full
                                hover:bg-orange-600 transition-colors
                            "
                            >
                            <p>Vamos Conversar?</p>
                        </a>
                    </div>
                </div>
                <div className="
                    p-[5px] w-full z-10 absolute bottom-0
                    bg-[linear-gradient(to_right,#114C84_0%,#EF7811_20%,#B9172C_40%,#963B84_60%,#EC7BA7_80%,#77B8A0_100%)]
                "></div>
        </section>
    )
}