import ContainerImage from "../ContainerImage";

export default function ContainerFuncionario({imageUrl, alt, nome, cargo}) {
    return (
        <div className="
            flex flex-col gap-3 text-center text-[#963B84]
            ">
            <ContainerImage
                src={imageUrl}
                alt={alt}
                className="rounded-2xl"
            />
            <div className="flex flex-col gap-1">
                <h4 className="text-3xl font-bold">{nome}</h4>
                <p className="text-xl">{cargo}</p>
            </div>
        </div>
    )
}