import React from "react"
import "../ConvertForm.css"
import ConvertResult from "./ConvertResult"

const Convertor: React.FC = () => {
    return (
        <>
        <div className="convert-form">
         <form>
            <label>First Valute</label>
                <input type="text" placeholder="Please enter first valute"/>
            <label>Second Value</label>
                <input type="text" placeholder="Please enter second valute"/>
            <label>How much?</label>
                <input type="number" placeholder="Please enter how much you want to convert"/>
            <input type="button" value="Convert valute"/>
         </form>
         <ConvertResult />
         </div>
        </>
    )
}

export default Convertor