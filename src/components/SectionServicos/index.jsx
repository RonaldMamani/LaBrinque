import { HashLink } from "react-router-hash-link";
import ButtonStaticRose from "../ButtonStaticRose";

import servicos from "../../data/servicos";

export default function SectionServicos() {
    return(
        <section className="flex flex-col items-center">
            <div className="
                px-10 py-18 text-center flex flex-col gap-10
                md:px-20 md:py-20
                lg:px-36 lg:gap-16
                xl:px-60
                ">
                <h4 className="
                    px-4 uppercase text-[#963B84] text-[40px] font-bold
                    lg:text-[48px]
                    ">Nossos Seviços</h4>
                <div className="
                    flex flex-col gap-14 items-center pb-10
                    lg:gap-20
                    ">
                    <div className="
                        flex flex-col gap-8 items-center
                        md:grid md:grid-cols-2
                        lg:grid-cols-5 lg:gap-10
                        ">
                        {servicos.map((servicos, index) => (
                            < ButtonStaticRose
                                key={index}
                                text={servicos.title}
                            />
                        ))}

                    </div>
                    <button className="
                        bg-[#963B84] shadow-lg shadow-[#EC7BA7] w-[270px] py-4 rounded-full
                        hover:bg-[#852B84]
                        ">
                        <HashLink 
                            smooth
                            to="/servicos#header"
                            className="uppercase"
                            >
                            <p className="text-white font-extrabold text-2xl">Saber Mais</p>
                        </HashLink>
                    </button>
                </div>
            </div>
            <div className="
                    p-[5px] w-full
                    bg-[linear-gradient(to_right,#114C84_0%,#EF7811_20%,#B9172C_40%,#963B84_60%,#EC7BA7_80%,#77B8A0_100%)]
            "></div>
        </section>
    )
}