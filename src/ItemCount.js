import { useState } from "react";

const ItemCount = () => {

    const [contador, setcontador] = useState(0)
    const sumarContador = () =>{
            setContador(contador + 1)
    }
    const restarContador = () =>{
        setcontador(contador - 1)
    }
    
    return (
        <>
            <button onClick={sumarContador}>incrementar</button>
            <button onClick={restarContador}>decrementar</button>
            <p>El contador va : {contador}</p>
        </>
    )
}

export default ItemCount;
