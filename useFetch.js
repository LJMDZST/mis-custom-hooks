import { useEffect, useRef, useState } from 'react';

/** customHook que utiliza fetch para obtener info de APIs
 *  utiliza internamente useEffect y useState
 */
export const useFetch = (url) => {
    
    /** Uso de Hook useRef para generar un flag para 
     *  saber si el estado contiene data o se vacio para
     *  un siguiente uso.
     */
    const isMounted = useRef(true);

    const [state, setstate] = useState({
        data : null, 
        loading : true,
        error : null
    });

    /** Cambia a falso el montaje de la data , con 
     *  esto se evita un reseteo inesperado de la data 
     */
    useEffect(()=>{
        return ()=>{
            isMounted.current = false;
        }

    },[])

    useEffect(() => {
        fetch(url)
        .then( resp => resp.json())
        .then(data => {

            if (isMounted.current){
                setstate({
                    loading: false,
                    error: null,
                    data 
                });
            }
           
            // setTimeout(() =>{
            //     if (isMounted.current){
            //         setstate({
            //             loading: false,
            //             error: null,
            //             data 
            //         });
            //     } else {
            //         console.log('SetState no se llamo')
            //     }
            // },4000);

        })
        .catch(()=>{
            setstate({
                data : null, 
                loading : true,
                error : 'error no se pudo cargar la info'
            })
        })
    }, [url])

    return state;
}
