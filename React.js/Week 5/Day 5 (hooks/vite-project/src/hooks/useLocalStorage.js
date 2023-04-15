import { useState } from "react";


// Key == username
// initialValue == John Doe
function setLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue ] = useState(() => {
            const item = localStorage.getItem(key); // See if there was a key 
            return item ? JSON.parse(item): initialValue; // storedValue === value
    });


    const setValue = (value) => {    
        console.log("INCOMING VALUE");
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue]

}

export default setLocalStorage;