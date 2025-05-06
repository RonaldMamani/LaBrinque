import espacoImage from "/src/data/espacoImage";

import ContainerImage from "../ContainerImage";

export default function SectionNossoEspaco() {
    return (
        <section className="
            px-8 py-10 flex flex-col gap-12 items-center
            md:px-24
            lg:px-36 lg:py-16
            xl:px-60 lg:gap-20
            ">
            <h3 className="
                text-[#114C84] text-[36px] text-center font-bold underline decoration-[3px] underline-offset-6
                md:text-[40px]
                lg:text-[50px] lg:decoration-[5px]
                ">Conheça nosso espaço</h3>
            <div className="
                    grid grid-cols-1 gap-8
                    md:grid-cols-2 
                    lg:grid-cols-4
                " 
            >
                {espacoImage.map((img, index) => (
                    <ContainerImage 
                        key={index}
                        src={img.imageUrl}
                        alt={img.alt}
                    />
                ))}
            </div>
        </section>
    )
}