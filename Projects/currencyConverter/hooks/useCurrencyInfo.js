import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({}); //we'll put an empty object if it retruns nothing the null object is returned
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json()) //since the response is in string using chainging and json parsing to convert in to object
        .then((response) =>  setData(response[currency])) //destructuring object to only select "inr(whatever currency selected) obj"
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;