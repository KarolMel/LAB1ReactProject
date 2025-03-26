import React from "react"
import "../ConvertResult.css"

interface ConvertResultProps {
    result: number | null;
    secondCurrency: string;
    firstCurrency: string;
    amount: number;
}

const ConvertResult: React.FC<ConvertResultProps> = ({result, secondCurrency, firstCurrency, amount}) => {
    return (
        <>
        <div className="converted">
            {result !== null ? (
                <p>Conversion Result: {`${amount} ${firstCurrency} is ${result} ${secondCurrency}`}</p>
            ) : (
                <p>No conversion yet</p>
            )}
        </div>
        </>
    )
}

export default ConvertResult