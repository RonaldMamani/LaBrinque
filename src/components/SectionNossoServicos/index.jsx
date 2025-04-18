import ButtonInteractive from "../ButtonInteractive";
import ImageTemplate from "/src/assets/IMAGEM-TEMPLATE3.jpg"

import servicos from "/src/data/servicos";

import { useState } from "react";

export default function SectionNossoServicos() {

    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="
            px-10 py-16 flex flex-col gap-12
            md:px-24
            lg:px-36 lg:gap-20 
            xl:px-60
            ">
            <h4 className="
                text-[#EC7BA7] text-center text-4xl font-bold
                lg:text-5xl
                ">
                Nossos Serviços
            </h4>
            <div className="
                flex flex-col gap-16 items-center
                lg:grid lg:grid-cols-2
                xl:gap-20
                ">
                <img 
                    className="
                        border border-[#EC7BA7] rounded-3xl 
                        lg:h-full lg:border-2"
                    src={ImageTemplate} 
                    alt="Imagem da Clinica por dentro" />
                <div className="
                    w-full flex flex-col gap-5
                    lg:h-full
                    ">
                    {servicos.map((servico, index) => (
                        <ButtonInteractive
                        key={index}
                        title={servico.title}
                        text={servico.text}
                        isOpen={activeIndex === index}
                        onClick={() =>
                            setActiveIndex((prevIndex) =>
                            prevIndex === index ? null : index
                            )
                        }
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}