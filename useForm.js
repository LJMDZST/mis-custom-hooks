import  { useState } from 'react';

export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState)

    const reset = ()=>{
        setValues( initialState );
    }

     /** se desestructura e.target en {target} */
     const handleInputChange = ({target}) =>{

        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange,reset];
}
