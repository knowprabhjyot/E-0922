import { useState } from "react";


export function usePasswordValidation() {
    const [isValid, setValid] = useState(false);

    const onChange = (e) => {
        if (e.target.value.length >= 8) {
            setValid(true);
        } else {
            setValid(false);
        }
    }

    return [isValid, onChange];
}