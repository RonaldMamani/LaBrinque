export default function TextBoldWhite({numbertext, textcolor, text}) {
    return(
        <p className={`font-bold text-[${numbertext}px] text-white `}>
            {text}
        </p>
    )
}