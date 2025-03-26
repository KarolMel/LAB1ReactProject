import React from "react"
import "../ConvertForm.css"
import ConvertResult from "./ConvertResult"
import "../ConvertorCSS.css"

import { useState } from "react"

const Convertor: React.FC = () => {

    const [currencyData, setCurrencyData] = useState<any>(null);
    const [firstCurrency, setFitstCurrency] = useState<string>('');
    const [secondCurrency, setSecondCurrency] = useState<string>('');
    const [amount, setAmount] = useState<number>(0)
    const [result, setResult] = useState<number | null>(null)

    const apiKey: string = '439863f844222b85c807fc72';
    const url: string = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${firstCurrency}`;

    function fetchData() {
        fetch(url)
        .then((response) => response.json())
        .then((resultData) => {
            setCurrencyData(resultData)
            const rate = resultData.conversion_rates[secondCurrency];
            const conversionResult = rate * amount;
            setResult(parseFloat(conversionResult.toFixed(2)))
        })
    }


    return (
        <>
        <div className="convert-form">
         <form>
            <label>First Valute</label>
                <input value={firstCurrency} type="text" placeholder="Please enter first valute" onChange={(e) => setFitstCurrency(e.target.value)}/>
            <label>Second Value</label>
                <input value={secondCurrency} type="text" placeholder="Please enter second valute" onChange={(e) => setSecondCurrency(e.target.value)}/>
            <label>How much?</label>
                <input type="number" placeholder="Please enter how much you want to convert" onChange={(e) => setAmount(Number(e.target.value))}/>
            <input onClick={fetchData} type="button" value="Convert valute"/>
         </form>
         <ConvertResult result={result} secondCurrency={secondCurrency} firstCurrency={firstCurrency} amount={amount} />
         </div>
        </>
    )
}

export default Convertor