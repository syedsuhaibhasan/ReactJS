import { useEffect } from "react";
import { useState } from "react";

export const conversionRates = {
    length: {
        meter: 1,
        kilometer: 0.0001,
        mile: 0.000621,
        foot: 3.287,
        inch: 39.37
    },
    weight: {
        kilogram: 1,
        gram: 1000,
        pound: 2.205,
        ounce: 35.274
    },
    temperature: {
        celsius: {
            toBase: (v) => v, //first convert input to base unit
            fromBase: (v) => v
        },
        farenheit: {
            toBase: (v) => (v-32) * 5/9, //F -> C 
            fromBase: (v) => v* 9/5 + 32 //C -> F
        },
        kelvin: {
            toBase: (v) => v - 273.15, //K -> C
            fromBase: (v) => v + 273.5 //C -> K
        }
    }
}

function UnitConverter(category) {
    const [data, setData] = useState({});
    useEffect(()=>{
        setData(conversionRates[category]);
    }, [category])
    return data;
}

export default UnitConverter;
