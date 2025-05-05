import { HashLink } from "react-router-hash-link";

export default function LinkButton ({to, image, alt, text, className, className1, className2}) {
    return(
        <HashLink smooth to={`${to}#header`} className={`
            flex justify-between items-center ${className} p-5 rounded-4xl
            md:px-10
            lg:gap-10 lg:w-[450px]
            hover:scale-105 transition-all
            `}>
            <img 
                src={image} 
                alt={alt}
                className={`
                    w-[120px] h-[115px] rounded-full
                    md:w-[135px] md:h-[135px]
                    lg:w-[160px] lg:h-[150px]
                    ${className1}
                    `}
            />
            <span className={`
                text-white text-[28px]
                md:text-3xl
                ${className2}
                `}
                >{text}</span>
        </HashLink>
    )
}