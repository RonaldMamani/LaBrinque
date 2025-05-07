export default function TopicMore({img, alt, title, text}) {
    return (
        <div className="
            flex flex-col items-center gap-8 text-center
            md:gap-10
            lg:gap-12
            ">
            <img 
                src={img} 
                alt={alt} 
                className="
                    w-[125px] h-[125px]
                    hover:scale-105 transition-all
                    "
            />
            <h4 className="
                text-[#77B8A0] text-3xl font-bold underline underline-offset-4
                lg:text-4xl
                ">{title}</h4>
            <p className="lg:text-[17px]">{text}</p>
        </div>
    )
}