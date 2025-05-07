import ButtonInteractive from "../ButtonInteractive";
import ImageTemplate from "/src/assets/IMAGEM-TEMPLATE3.jpg"

import servicos from "/src/data/servicos";
import funcionarios from "/src/data/funcionarios";

import { useState } from "react";
import ContainerFuncionario from "../ContainerFuncionario";

export default function SectionNossoServicos() {

    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <main className="
            px-10 py-16 flex flex-col gap-12 items-center
            md:px-24 md:gap-16
            lg:px-36 lg:gap-20 
            xl:px-60
            ">
            <h4 className="
                text-[#EC7BA7] text-center text-4xl font-bold underline decoration-[3px] underline-offset-6
                lg:text-[50px] lg:decoration-[5px]
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
                        md:h-[700px]
                        lg:h-full lg:w-[650px] lg:border-2"
                    src={ImageTemplate} 
                    alt="Imagem da Clinica por dentro" />
                <div className="
                    w-full flex flex-col gap-4
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
            <div className="
                    flex flex-col gap-14 text-center
                    lg:gap-20
                ">
                    <h3 className="
                        text-4xl text-[#963B84] font-bold underline decoration-[3px] underline-offset-6
                        lg:text-5xl lg:decoration-[5px]
                        ">Conheça Nossa Equipe</h3>
                    <div className="
                        grid grid-cols-1 gap-4
                        md:grid-cols-2
                        lg:grid-cols-4
                        ">
                        {funcionarios.map((funcionario, index) => (
                            <ContainerFuncionario 
                                key={index}
                                imageUrl={funcionario.imageUrl}
                                alt={`Imagem de ${funcionario.nome}, ${funcionario.profissao}`}
                                nome={funcionario.nome}
                                cargo={funcionario.profissao}
                            />
                        ))}
                    </div>
            </div>
        </main>
    )
}