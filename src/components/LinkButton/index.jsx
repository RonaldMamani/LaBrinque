import { HashLink } from "react-router-hash-link";

export default function LinkButton ({to, image, alt, text, className, className1, className2}) {
    return(
        <HashLink smooth to={`${to}#header`} className={`
            grid grid-cols-2 items-center gap-5 ${className} p-5 rounded-4xl
            md:p-6
            `}>
            <img 
                src={image} 
                alt={alt}
                className={`
                    w-[150px] h-[115px]
                    md:w-[100%] md:h-[135px] md:px-5
                    lg:w-[250px] lg:h-[145px]
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