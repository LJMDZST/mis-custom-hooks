import { useState } from 'react';


/** Custom Hook para realizar un incremento y decremento de valores
 *  Este Hook será exportado y podrá ser utilizado por cualquier
 *  componente de react que necesite usarlo.
 */

export const useCounter = (initialCounter = 10 ) => {
    const [ counter, setCounter] = useState(initialCounter);

    /** se pueden agregar argumentos a los metodos, 
     * recordar de agregarlos cuando se haga la llamada
     * en el componente deseado.
     */
    const increment = (  ) =>{
        setCounter( counter + 1);
    }

    const decrement = ( ) =>{
        setCounter( counter - 1);
    }

    const reset = () => {
        setCounter( initialCounter );
    }

    /** Metodo para retornar una referencia del objeto del 
     * custom hook. 
     */
    return{
        counter,
        increment,
        decrement,
        reset
    }
}
