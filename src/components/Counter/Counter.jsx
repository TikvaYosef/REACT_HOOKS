import React , { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const [firstName,setName] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>click</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count -1)}>Revers</button>
            <p>{firstName}</p>
            <button onClick = {()=> setName("tikva")}>myname</button>


             
        </div>
    )
}

export default Counter;