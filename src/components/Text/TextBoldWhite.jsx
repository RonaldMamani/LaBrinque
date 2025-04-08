export default function TextBoldWhite({className, text}) {
    return(
        <p className={`font-bold ${className} text-white`}>
            {text}
        </p>
    )
}